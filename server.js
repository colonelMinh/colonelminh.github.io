// server.js
const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3000;

app.get('/run-python', (req, res) => {
    const pythonProcess = spawn('python', ['script.py']);
    
    pythonProcess.stdout.on('data', (data) => {
        res.send(data.toString());
    });
    
    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
