const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const filesPayloadExists = require('./middleware/filesPayloadExists');
const fileExtLimiter = require('./middleware/fileExtLimiter');
const fileSizeLimiter = require('./middleware/fileSizeLimiter');

const PORT = process.env.PORT || 3500;

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/upload',
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter(['.pdf', '.docx']),
    fileSizeLimiter,

    (req, res) => {
        const files = req.files;
        console.log(files);

        Object.keys(files).forEach(key => {
            const filepath = path.join(__dirname, 'received_files', files[key].name);
            files[key].mv(filepath, (err) => {
                if (err) return res.status(500).json({ status: "error", message: err });
            });
        });

        return res.json({ status: 'success', message: Object.keys(files).toString() });
    }
);

// Route to serve HTML content from a file
app.get('/content', (req, res) => {
    const filePath = path.join(__dirname, 'content.html');
    console.log(`Attempting to read file at: ${filePath}`); // Log the file path

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the HTML file:', err);
            return res.status(500).send('Error reading the HTML file.');
        }
        res.send(data);
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
