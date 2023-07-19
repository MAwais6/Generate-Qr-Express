//npm install @loskir/styled-qr-code-node
const express = require("express");
const { QRCodeCanvas } = require("@loskir/styled-qr-code-node"); // or CommonJS
const app = express();

app.use(express.static("public"));

app.get("/generate_qr", async (req, res) => {
  const url = req.query.url;

  try {
    const qrCode = new QRCodeCanvas({
      width: 300,
      height: 300,
      data: url || "https://visric.com",
      image: "public/Images/Craiveco-instagram-logo.png",
      margin: 20,
      qrOptions: {
        typeNumber: "0",
        mode: "Byte",
        errorCorrectionLevel: "H",
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.6,
        margin: 5,
      },
      dotsOptions: {
        type: "extra-rounded",
        color: "#6a1a4c",
        gradient: null,
      },
      backgroundOptions: {
        color: "#ffffff",
      },
      dotsOptionsHelper: {
        colorType: {
          single: true,
          gradient: false,
        },
        gradient: {
          linear: true,
          radial: false,
          color1: "#6a1a4c",
          color2: "#6a1a4c",
          rotation: "0",
        },
      },
      cornersSquareOptions: {
        type: "extra-rounded",
        color: "#000000",
      },
      cornersSquareOptionsHelper: {
        colorType: {
          single: true,
          gradient: false,
        },
        gradient: {
          linear: true,
          radial: false,
          color1: "#000000",
          color2: "#000000",
          rotation: "0",
        },
      },
      cornersDotOptions: {
        type: "dot",
        color: "#000000",
      },
      cornersDotOptionsHelper: {
        colorType: {
          single: true,
          gradient: false,
        },
        gradient: {
          linear: true,
          radial: false,
          color1: "#000000",
          color2: "#000000",
          rotation: "0",
        },
      },
      backgroundOptionsHelper: {
        colorType: {
          single: true,
          gradient: false,
        },
        gradient: {
          linear: true,
          radial: false,
          color1: "#ffffff",
          color2: "#ffffff",
          rotation: "0",
        },
      },
    });

    //"png" | "jpg" | "jpeg" | "pdf" | "svg"
    qrCode.toFile("output.png", "png");

    res.send("QR Code Generated");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
