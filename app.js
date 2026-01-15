const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Sunucu çalışıyor 🚀");
});
app.use("/api/siparisler", require("./routes/siparisRoutes"));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server çalışıyor");
});

