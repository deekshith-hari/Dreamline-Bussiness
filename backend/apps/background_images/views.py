import os
from secrets import token_hex
from config.settings import MEDIA_URL
from PIL import Image
from django.core.files.storage import FileSystemStorage
from apps.background_images.serializers import BackgroundImageSerializer
from apps.background_images.models import BackgroundImage
from rest_framework import generics
from rest_framework.response import Response

class BackgroundImageList(generics.ListAPIView):
    queryset = BackgroundImage.objects.all()
    serializer_class = BackgroundImageSerializer

class BackgroundImageAdd(generics.CreateAPIView):
    queryset = BackgroundImage.objects.all()

    def post(self, request, *args, **kwargs):
        # Get uploaded file logo
        image_file = request.data['image']

        # Save and get open url
        fss = FileSystemStorage()
        file = fss.save(image_file.name, image_file)

        # Replace first '/' because open function doesn't support /uploads/images
        file_url = fss.url(file).replace('/', '', 1) 

        # Open image logo
        new_image = Image.open(file_url)

        # Need to convert to RGB in order to change file extension
        if new_image.mode != "RGB":
            new_image = new_image.convert("RGB")

        # Get new filename
        filename = "background-{ramdom_string}.jpg".format(ramdom_string=token_hex(16))

        # Save new image with jpg extension
        new_image.save(MEDIA_URL+str(filename))

        # Remove old file
        if os.path.exists(MEDIA_URL+str(file)) is True:
            os.remove(MEDIA_URL+str(file))
        
        # Save to database
        new_background_image = BackgroundImage.objects.create(
            image=filename,
            name=request.data['name'],
        )

         # Convert Model to Serializer
        serializer = BackgroundImageSerializer(new_background_image)

        # Response data as Dict
        return Response(serializer.data)