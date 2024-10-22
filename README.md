# **Simple Image Slider**

A lightweight and easy-to-use image slider built with HTML, CSS, and JavaScript. This slider allows you to showcase images in a responsive and interactive manner, enhancing the visual experience of your website.

![Alt text](images/Screenshot.jpg)

## Features

- Simple Integration: Easy to add to any webpage with minimal setup.
- Customizable Design: Modify the look and feel with your own CSS.
- Lightweight: No dependencies on external libraries or frameworks.
- Cross-Browser Compatibility: Works on all modern browsers.

## Related Projects

[Imported Simple BTN](https://github.com/S-Yaghouti/BTN)

## Installation

### To integrate the image slider into your project, follow these steps:

1. Download the Files: Clone or download the repository to your local machine.
2. **Serve the `index.html` File**: To view the slider in action, you’ll need to run a local server. Here are a few options:

   - **Using Live Server**: If you're using Visual Studio Code, you can install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Simply open the `index.html` file and click on "Open with Live Server."

   - **Using XAMPP**: Download and install [XAMPP](https://www.apachefriends.org/index.html). Move the project folder to the `htdocs` directory, then start the Apache server from the XAMPP Control Panel. Access the slider via `http://localhost/your-folder-name/index.html`.

   - **Using Python**: If you have Python installed, navigate to your project directory in the terminal or command prompt and run:
     ```bash
     python -m http.server
     ```
     This will start a simple HTTP server, which you can access at `http://localhost:8000/index.html`.

### Note on Looping Functionality:

- The Simple Image Slider is designed to loop through the images continuously. Ensure that your image list in `Slider.js` is set up correctly for seamless transitions.

## Usage

### First you need to know what is inside Widgets folder :

- BTN / BTN.js: A simple button for the image slider.
- Slider.js : exported slider widget and then imported in scipt.js file, You can imported in any js file you want.

### Now, let me explain how the Slider.js file works:

1. Imported simple BTN.
2. A breif explenation about used shortcuts.
3. Images list ( you can use fetch if needed ).
4. Exported slider widget.

## Credits & Contact

**Creator**: Subhaan Yaghouti - Maintainer of the project.  
**Contact**: If you have any questions or feedback, feel free to reach out via [yaghouti.1831@gmail.com](mailto:yaghouti.1831@gmail.com) or on Instagram [@subhaan_yaghouti](https://www.instagram.com/subhaan_yaghouti?igsh=bmE3ZTl1bGkwaW50).
