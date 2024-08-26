const canvas = document.getElementById('drawingCanvas');
canvas.width = innerWidth;
const ctx = canvas.getContext('2d');
ctx.lineWidth = 4;
ctx.lineCap = "round";
let drawing = false;
let trace = []; // This will store all strokes
let lastPos = null; // Track the last position for smoothing

// Event listeners for drawing on the canvas (mouse)
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing); // Handle when the mouse leaves the canvas

// Event listeners for drawing on the canvas (touch)
canvas.addEventListener('touchstart', startDrawingTouch);
canvas.addEventListener('touchmove', drawTouch);
canvas.addEventListener('touchend', stopDrawing);
canvas.addEventListener('touchcancel', stopDrawing);

function drawBackgroundLines(lineWidth, lineSpacing, color) {
    const canvasHeight = canvas.height;

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    for (let y = lineWidth / 2; y < canvasHeight; y += lineSpacing + lineWidth) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// Call drawBackgroundLines before clearing the canvas if needed
clearCanvas();

function getMousePos(event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function getTouchPos(event) {
    const rect = canvas.getBoundingClientRect();
    const touch = event.touches[0];
    return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
    };
}

function startDrawing(event) {
    drawing = true;
    lastPos = getMousePos(event); // Initialize last position
    trace.push([[], []]); // Start a new stroke with separate arrays for x and y coordinates
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
}

function draw(event) {
    if (!drawing) return;
    const pos = getMousePos(event);

    // Add the current coordinates to the current stroke
    trace[trace.length - 1][0].push(pos.x); // x coordinate
    trace[trace.length - 1][1].push(pos.y); // y coordinate

    // Draw a smooth line using quadratic Bezier curve
    ctx.quadraticCurveTo(lastPos.x, lastPos.y, (pos.x + lastPos.x) / 2, (pos.y + lastPos.y) / 2);
    ctx.stroke();

    lastPos = pos; // Update last position
}

function startDrawingTouch(event) {
    drawing = true;
    lastPos = getTouchPos(event); // Initialize last position
    trace.push([[], []]); // Start a new stroke with separate arrays for x and y coordinates
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    event.preventDefault(); // Prevent scrolling on touch
}

function drawTouch(event) {
    if (!drawing) return;
    const pos = getTouchPos(event);

    // Add the current coordinates to the current stroke
    trace[trace.length - 1][0].push(pos.x); // x coordinate
    trace[trace.length - 1][1].push(pos.y); // y coordinate

    // Draw a smooth line using quadratic Bezier curve
    ctx.quadraticCurveTo(lastPos.x, lastPos.y, (pos.x + lastPos.x) / 2, (pos.y + lastPos.y) / 2);
    ctx.stroke();

    lastPos = pos; // Update last position
    event.preventDefault(); // Prevent scrolling on touch
}

function stopDrawing() {
    if (!drawing) return;
    drawing = false;
    ctx.closePath();
    lastPos = null; // Reset last position

    // Trigger recognition immediately after finishing drawing
    recognizeHandwriting();
}

function recognizeHandwriting() {
    const handwritingOptions = {
        width: canvas.width,
        height: canvas.height,
        language: 'en', // Set the language to English
        numOfReturn: 1  // Optionally limit the number of results
    };

    // Replace 'handwriting.recognize' with your actual library's function
    handwriting.recognize(trace, handwritingOptions, (results, error) => {
        if (error) {
            console.error('Error recognizing handwriting:', error);
        } else {
            document.querySelector('.results').textContent = `${results.join(', ')}`;
            window.data = `${results[0]}`
        }
    });
}

// Clear the canvas and trace
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawBackgroundLines(2, 40, "black"); // Draw background lines
    trace = []; // Reset the trace data
    document.querySelector('.results').textContent = ''; // Clear the result
}

// Initial call to clear the canvas and draw background lines
clearCanvas();

document.querySelector("#clear").addEventListener("click", clearCanvas);
