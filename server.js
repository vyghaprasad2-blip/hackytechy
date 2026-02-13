const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);


// ---------------------
// server.js
// ---------------------
const express = require('express');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());
app.use(express.static('public')); // Serves HTML from 'public' folder

// ---------------------
// 1️⃣ MongoDB Connection
// ---------------------
const mongoURI = 'mongodb+srv://vyghaprasad2_db_user:Admin123@cluster0.umrevhw.mongodb.net/certDB';
mongoose.connect(mongoURI)
    .then(() => console.log("✅ Database Connected!"))
    .catch(err => console.log("❌ DB Error:", err));

// ---------------------
// 2️⃣ Mongoose Schema
// ---------------------
const certSchema = new mongoose.Schema({
    name: String,
    date: String,
    program: String,
    certId: { type: String, unique: true } // ensure IDs are unique
});
const Certificate = mongoose.model('Certificate', certSchema);

// ---------------------
// 3️⃣ Generate Certificate Route
// ---------------------
app.post('/api/generate', async (req, res) => {
    try {
        const { name, date, program } = req.body;

        if (!name || !date || !program) {
            return res.status(400).json({ error: "All fields required" });
        }

        const idPart = uuidv4().split('-')[0].toUpperCase();
        const certId = `CERT-${idPart}`;

        const newCert = new Certificate({ name, date, program, certId });
        await newCert.save();

        res.json({ certId });
    } catch (err) {
        console.error("❌ Error generating certificate:", err);
        res.status(500).json({ error: "Certificate generation failed" });
    }
});

// ---------------------
// 4️⃣ Verify Certificate Route
// ---------------------
app.post('/api/verify', async (req, res) => {
    try {
        const { certId, name } = req.body;
        const found = await Certificate.findOne({ certId });

        if (found && found.name.toLowerCase() === name.toLowerCase()) {
            res.json({ valid: true, data: found });
        } else {
            res.json({ valid: false });
        }
    } catch (err) {
        console.error("❌ Verification error:", err);
        res.status(500).json({ error: "Verification failed" });
    }
});

// ---------------------
// 5️⃣ Start Server
// ---------------------
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server live at http://localhost:${PORT}`));




