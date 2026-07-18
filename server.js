import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Required fix for ES Modules: node doesn't give us standard '__dirname' natively when using 'import'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Serve all static frontend files sitting in this folder
app.use(express.static(path.join(__dirname)));

// Catch-all route to serve index.html for any request
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Fire up the network port pipeline
app.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`🚀 Node.js Automation Web Server Natively Active`);
    console.log(`📡 Access Task Hub Tracker at: http://localhost:${PORT}`);
    console.log(`=================================================`);
});