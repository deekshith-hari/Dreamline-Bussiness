from config.settings import BASE_DIR, MEDIA_URL
import os
from apps.user_backgrounds.serializers import UserBackgroundSerializer
from apps.user_backgrounds.models import UserBackground
from apps.background_images.models import BackgroundImage
from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw
from secrets import token_hex
from rest_framework.response import Response
from django.core.files.storage import FileSystemStorage
from rest_framework import generics
from apps.user.mixins import CustomLoginRequiredMixin


X_DEFAULT_VALUE = 12
Y_DEFAULT_VALUE = 12
LINE_DEFAULT_WIDTH = 200
MAX_TRANSPARENT_ALPHA = 255
COLOR_WHITE = "#FFFFFF"

def resize_image(logo, background_height): 
    # Set basehight 15% of image background
    baseheight = int(background_height * 0.15)
    width, height = logo.size

    # Resize width base on image height
    width_resize = int((baseheight * float(width)/height))
    return width_resize, baseheight

def load_font():
    raleway_bold = ImageFont.truetype(font=os.path.abspath(os.path.join(BASE_DIR, 'fonts/Raleway-Bold.ttf')), size=18)
    raleway_medium = ImageFont.truetype(font=os.path.abspath(os.path.join(BASE_DIR, 'fonts/Raleway-Medium.ttf')), size=16)
    return raleway_bold, raleway_medium

def get_filename(extension):
    return "generated-background-{ramdom_string}.{extension}".format(
        ramdom_string=token_hex(16), 
        extension=extension
    )

def generate_background_color(background_image):
    draw = ImageDraw.Draw(background_image,'RGBA')
    width, height = background_image.size

    # Get 60% Height of Image Background Height
    gradian_height = int(height*0.6)

    # Set RGB Color
    r, g, b = 38, 79, 88

    # Loop through gradian_height to draw line with Gradian Transparent Color
    for i in range(gradian_height):
        #Maximum Transparent Alpha
        alpha = MAX_TRANSPARENT_ALPHA 

        # Make sure start line is with Maximum Transparent Alpha
        if i > 0:

            # decrement as percentage of Transparent Alpha
            alpha = (gradian_height-i)/gradian_height * MAX_TRANSPARENT_ALPHA 

        #Draw line from Top to Bottom to make Transparent Image Background    
        draw.line((0, i, width, i), fill=(int(r), int(g), int(b), int(alpha)))

    return draw

class UserBackgroundAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    queryset = UserBackground.objects.order_by('-id').all()
    serializer_class = UserBackgroundSerializer

    def post(self, request, *args, **kwargs):

        # Validate data
        serializer = UserBackgroundSerializer()
        serializer.validate(request.data)

        # Get Image Background
        background = BackgroundImage.objects.get(id=request.data['background_id'])

        # Define the path to our custom .ttf font
        raleway_bold, raleway_medium = load_font()

        # Get uploaded file logo
        company_logo = request.data['company_logo']

        # Save and get open url
        fss = FileSystemStorage()
        logo_filename = fss.save(company_logo.name, company_logo)

        # Replace first '/' because open function doesn't support /uploads/images
        logo_file = fss.url(logo_filename).replace('/', '', 1) 

        # Open image logo
        logo = Image.open(logo_file).convert('RGBA')

        # Open Image Background
        generated_background_image = Image.open(MEDIA_URL+str(background.image))

        # Get Resize Width & Height
        width_resize, baseheight = resize_image(logo, generated_background_image.size[1])

        # Resize Width & Height of Logo
        logo = logo.resize((width_resize, baseheight))

        # Get background color
        draw = generate_background_color(generated_background_image)
      
        # Paste Logo on specific position of background image
        generated_background_image.paste(logo, (X_DEFAULT_VALUE, Y_DEFAULT_VALUE), logo)

        # Draw white a horizontal straight line
        draw.line([(X_DEFAULT_VALUE, baseheight + 20), (LINE_DEFAULT_WIDTH, baseheight + 20)], fill=COLOR_WHITE, width=2)

        # write Name, Role, Company Name
        draw.text((X_DEFAULT_VALUE, baseheight + 30), request.data['username'], COLOR_WHITE, font=raleway_bold)
        draw.text((X_DEFAULT_VALUE, baseheight + 60), request.data['role'], COLOR_WHITE, font=raleway_medium)
        draw.text((X_DEFAULT_VALUE, baseheight + 90), request.data['company_name'], COLOR_WHITE, font=raleway_medium)
        
        # Generate Filename
        filename = get_filename(generated_background_image.format)

        new_user_background = UserBackground.objects.create(
            user = request.login_user,
            username=request.data['username'],
            company_name=request.data['company_name'],
            role=request.data['role'],
            company_logo=logo_filename,
            background_id=background,
            generated_background=filename,
        )

        # Save Image
        generated_background_image.save(MEDIA_URL+filename, quality=100)

         # Convert Model to Serializer
        serializer = UserBackgroundSerializer(new_user_background)

        # Response data as Dict
        return Response(serializer.data)
        
class UserBackgroundList(CustomLoginRequiredMixin, generics.ListAPIView):
    queryset = UserBackground.objects.all()
    serializer_class = UserBackgroundSerializer

    def get(self, request, *args, **kwargs):
        self.queryset=UserBackground.objects.order_by('-created_at').filter(user=request.login_user)
        return self.list(request, *args, **kwargs)