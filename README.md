# QR Code Generator

Generate QR codes from text or URL input with configurable error correction level and download as PNG, entirely in the browser.

**Live Demo:** https://file-converter-free.com/en/developer-tools/qr-code-generator

## How It Works

The external `QRCode` library renders the QR code directly to an HTML5 `<canvas>` element. The error correction level is mapped from a selector value (`L`/`M`/`Q`/`H`) to the library's `QRCode.CorrectLevel` constants. On generate, the canvas element is cleared and a new `QRCode` instance is created with the input text, canvas size, and selected correction level. The PNG download uses `canvas.toDataURL('image/png')` to obtain a data URL, which is assigned to a temporary `<a>` element's `href` with a `download` attribute to trigger the browser's file save dialog.

## Features

- Four error correction levels: L (7%), M (15%), Q (25%), H (30%)
- Canvas-rendered QR code
- Download as PNG via `canvas.toDataURL`
- Supports text and URL input

## Browser APIs Used

- Canvas API (`HTMLCanvasElement.toDataURL`)
- QRCode library (external)

## Code Structure

| File | Description |
|------|-------------|
| `qr-code-generator.js` | `correctLevel` map (L/M/Q/H → library constants), `QRCode` constructor with canvas target, `canvas.toDataURL('image/png')` PNG download |

## Usage

| Element ID / Selector | Purpose |
|----------------------|---------|
| Text/URL input | Content to encode |
| Error correction selector | L / M / Q / H level |
| Generate button | Render QR code |
| Canvas element | QR code display |
| Download button | Save QR code as PNG |

## License

MIT
