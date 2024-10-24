# **Simple Image Slider**

A lightweight and easy-to-use image slider built with HTML, CSS, and JavaScript. This slider enables you to showcase images in a responsive and interactive way, enhancing the visual appeal of your website.

<img src="./images/Screenshot.jpg" alt='Simple Image Slider'>

## Features

- **Simple Integration**: Easily add to any webpage with minimal setup.
- **Customizable Design**: Adjust the look and feel with your own CSS.
- **Lightweight**: No dependencies on external libraries or frameworks.
- **Cross-Browser Compatibility**: Works on all modern browsers.

## Related Projects

[Imported Simple BTN](https://github.com/S-Yaghouti/BTN)

## Installation

### To integrate the image slider into your project, follow these steps:

1. Download the Files: Clone or download the repository to your local machine.
2. **Serve the `index.html` File**: To view the slider in action, you’ll need to run a local server. Here are a few options:

   - **Using Live Server**: If you're using Visual Studio Code, install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Open the `index.html` file and click on "Open with Live Server."

   - **Using XAMPP**: Download and install [XAMPP](https://www.apachefriends.org/index.html). Move the project folder to the `htdocs` directory, then start the Apache server from the XAMPP Control Panel. Access the slider via `http://localhost/your-folder-name/index.html`.

   - **Using Python**: If you have Python installed, navigate to your project directory in the terminal or command prompt and run:
     ```bash
     python -m http.server
     ```
     This will start a simple HTTP server, which you can access at `http://localhost:8000/index.html`.

### Note on Looping Functionality:

- The Simple Image Slider is designed to loop through the images continuously. Make sure that your image list in `Slider.js` is set up correctly to ensure seamless transitions.

## Usage

### Overview of the Widgets Folder

- [BTN.js](https://github.com/S-Yaghouti/BTN): A simple button for the image slider.
- Slider.js : Exports the slider widget, which is imported into `script.js`. You can import it into any JavaScript file as needed.

### Understanding the Slider.js File

1. The Simple BTN is imported.
2. A brief explanation of used shortcuts.
3. The images list (you can use `fetch` if needed).
4. The slider widget is exported.

## Contribution

_Contributions are welcome!_

## Credits & Contact

**Creator**: Subhaan Yaghouti - Maintainer of the project.  
**Contact**: If you have any questions or feedback, feel free to reach out via [yaghouti.1831@gmail.com](mailto:yaghouti.1831@gmail.com) or on Instagram [@subhaan_yaghouti](https://www.instagram.com/subhaan_yaghouti?igsh=bmE3ZTl1bGkwaW50).
