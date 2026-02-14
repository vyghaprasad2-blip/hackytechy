<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# [CERTI CHECK] 🎯

## Basic Details

### Team Name: [Hacky Techy]

### Team Members
- Member 1: Aiswarya.s - LBSITW
- Member 2:Vygha prasad - LBSITW

### Hosted Project Link
https://hackytechy.onrender.com/
### Project Description
[CertiCheck is a full-stack web application designed to eliminate credential fraud by providing a secure,real-time verification system for digital certificates and achievements.The platform serves as a bridge between issuing authorities and verifiers.]

### The Problem statement
[Traditional digital certificates are easily forged using image editing software,making it difficult for employers to verify their authenticity.]

### The Solution
[CertCheck solves this by providing a secure,database-driven verification system that uses unique IDs to instantly validate credentials against against a central "source of truth".]

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: [HTML,javascript,css3]
- Frameworks used: [Express.js,Tailwind CSS]
- Libraries used: [Mangoose,UUID(v4)]
- Tools used: [VS code,node.js runtime ,mongoDB Atlas,NPM]

---

## Features

List the key features of your project:
- Feature 1: [Unique ID Generation]
- Feature 2: [Dual-Role interface]
- Feature 3: [cloud-based "source of truth" ]
- Feature 4: [zero-friction instant verification]

---

## Implementation

### For Software:

#### Installation
```bash
[Installation commands - mkdir certicheck cd certicheck,npm init -y,npm inistall express mongoose uuid,mkdir public]
```

#### Run
```bash
[Run commands - mkdir certicheck,cd certicheck,npm init -y,npm install express mongoose uuid,npm i,node server.js ,ctrl+c,ls,node-v,pm -v]
```


---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

<img width="896" height="468" alt="Screenshot 2026-02-14 024834" src="https://github.com/user-attachments/assets/fd994a6c-be3b-456c-bf91-a8b262886f7b" />
*screenshots which shows the layout or the front page of the website*

<img width="796" height="475" alt="Screenshot 2026-02-14 024744" src="https://github.com/user-attachments/assets/a4720d58-9098-470c-af0d-9938c578821d" />


#### Diagrams


**Application Workflow:**

![[DocScanner 14 Feb 2026 7-07 am.pdf](https://github.com/user-attachments/files/25309503/DocScanner.14.Feb.2026.7-07.am.pdf)
](docs/workflow.png)
*explains the workflow of the project*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `http://localhost:3000
`

##### Endpoints

**GET /api/endpoint**
- **Description:** [Generates a unique certificate ID and stores certificate details in the database.]
- **Parameters:**
  - `param1` (string): [None (Data is sent in request body)]
  - `param2` (integer): [None (Data is sent in request body)]
- **Response:**
```json

  {
  "certId": "CERT-A1B2C3D4"
}


```

**POST /api/endpoint**
- **Description:** [Verifies certificate authenticity using certificate ID and name]
- **Request Body:**
```json

  {
  "name": "John Doe",
  "date": "2026-02-14",
  "program": "HackyTechy Internship"
}

```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

{
  "error": "All fields required"
}


---



---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
node cert-cli.js [command] [options]

```

**Available Commands:**
- `command1 [generate <name> <date> <program>]` - Generates a new certificate and returns a unique Certificate ID.
- `command2 [verify <certId> <name>]` - Verifies whether the certificate is valid or not
- `command3 [list]` - Lists all generated certificates (admin use only)

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
node cert-cli.js generate "John Doe" "2026-02-14" "HackyTechy Internship"

Certificate Generated Successfully
Certificate ID: CERT-A1B2C3D4


node cert-cli.js verify CERT-A1B2C3D4 "John Doe"


Certificate Status: VALID
Program: HackyTechy Internship
Date: 2026-02-14


Certificate Status: INVALID

node cert-cli.js list




```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
 node cert-cli.js generate "John Doe" "2026-02-14" "HackyTechy Internship"

}
```

**Command:**
```bash
// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Initialize Express app
const app = express();
app.use(express.json());
app.use(express.static('public')); // Serve frontend files

// Connect to MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/certDB')
  .then(() => console.log("Database connected"))
  .catch(err => console.error("Database connection error:", err));

// Certificate Schema Definition
// Stores certificate holder details and unique certificate ID
const certSchema = new mongoose.Schema({
  name: String,
  date: String,
  program: String,
  certId: { type: String, unique: true }
});

// API Route: Generate Certificate
// Creates a unique ID and stores certificate in database
app.post('/api/generate', async (req, res) => {

  // Extract data from request
  const { name, date, program } = req.body;

  // Validate input fields
  if (!name || !date || !program) {
    return res.status(400).json({ error: "All fields required" });
  }

  // Generate unique certificate ID using UUID
  const certId = "CERT-" + uuidv4().split('-')[0].toUpperCase();

  // Save certificate data to database
  const newCert = new Certificate({ name, date, program, certId });
  await newCert.save();

  res.json({ certId });
});


```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  Processing certificate generation...
-----------------------------------
Name: John Doe
Program: HackyTechy Internship
Date: 2026-02-14

Certificate Generated Successfully!
Certificate ID: CERT-A1B2C3D4

Status: Success
Saved to database.
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video


https://github.com/user-attachments/assets/ea214c27-2228-4798-aae8-cbde2af65d3f



*Explains how the demo website works and what it does*



---
**AI Tools Used

**Tool used**chatgpt,gemini.
During development, we used AI tools such as ChatGPT,gemini for guidance in debugging errors, understanding API documentation structure, improving code comments, and refining project documentation.


---

## Team Contributions

- [vygha prasad]: [Frontend development, API integration, and UI design.]
- [Aiswarya.s]: [Backend development, database design, API creation, and system deployment.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
