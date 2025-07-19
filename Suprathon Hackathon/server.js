const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5502;
const LEAVES_FILE = path.join(__dirname, 'leaves.json');

app.use(cors());
app.use(express.json());

// Helper to read leaves from file
function readLeaves() {
    if (!fs.existsSync(LEAVES_FILE)) return [];
    const data = fs.readFileSync(LEAVES_FILE, 'utf-8');
    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
}

// Helper to write leaves to file
function writeLeaves(leaves) {
    fs.writeFileSync(LEAVES_FILE, JSON.stringify(leaves, null, 2));
}

// Get all leaves
app.get('/api/leaves', (req, res) => {
    const leaves = readLeaves();
    res.json(leaves);
});

// Add a new leave
app.post('/api/leaves', (req, res) => {
    const { date, type, reason } = req.body;
    if (!date || !type || !reason) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const leaves = readLeaves();
    leaves.push({ date, type, reason });
    writeLeaves(leaves);
    res.status(201).json({ message: 'Leave added' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 