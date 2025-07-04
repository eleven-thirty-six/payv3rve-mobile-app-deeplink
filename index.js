const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
