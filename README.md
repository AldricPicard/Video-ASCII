# Video to ASCII Art using P5.js

This project demonstrates how to create ASCII art from a video using the P5.js library. ASCII art is a technique that uses printable characters to create images and videos. In this project, we convert each frame of a video into ASCII characters and display it on a canvas.

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/AldricPicard/Video-ASCII.git
   cd Video-ASCII
   ```

2. **Install dependencies**

   This project requires the P5.js library.

   ```html
   <!-- Include P5.js in your HTML file -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
   ```

3. **Run the project**

   Open `index.html` in your browser to see the video converted to ASCII art.

## Usage

- **Upload your own video:** Replace `"YOURVIDEO.mp4"` with your video file in `preload()` function in `sketch.js`.
  
  ```javascript
  function preload() {
    video = createVideo("YOURVIDEO.mp4");
  }
  ```

- **Adjust ASCII characters:** Modify the `density` variable in `sketch.js` to change the characters used for ASCII art.

  ```javascript
  const density = '123@#W$?!abc;:+=-,._';
  ```

- **Play with settings:** Experiment with the `map` function in `draw()` to change how pixel brightness maps to ASCII characters.

  ```javascript
  const charIndex = floor(map(avg, 0, 255, len - 1, 0));
  ```

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request.