const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS middleware

const app = express();
const port = 3020;

app.use(bodyParser.json());

// Allow requests from all origins (you can configure it to allow only specific origins)
app.use(cors());

app.post("/auth/signup", (req, res) => {
  // Handle signup logic here
  console.log("Received signup request:", req.body);
  // Assuming some signup logic here, for example:
  res.json({ message: "Signup successful!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
