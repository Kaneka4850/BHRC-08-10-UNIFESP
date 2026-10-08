const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Endpoint to call the Python script
app.get('/api/data', (req, res) => {
    const pythonProcess = spawn('python', [path.join(__dirname, 'data_processor.py')]);

    let dataString = '';

    pythonProcess.stdout.on('data', (data) => {
        dataString += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Python Error: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        if (code !== 0) {
            return res.status(500).json({ error: 'Failed to process data' });
        }
        try {
            const jsonData = JSON.parse(dataString);
            res.json(jsonData);
        } catch (e) {
            res.status(500).json({ error: 'Failed to parse Python output' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
