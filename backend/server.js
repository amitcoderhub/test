const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, "../frontend"))); // Serve frontend files

app.get("/api", (req, res) => {
  res.json({ message: "Backend is deployed successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
