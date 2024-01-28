const express = require("express");
const app = express();
const PORT = process.env.port || 9000;

//---------------------------------------------------middlewares--------------------------------->>>
app.use(express.json());

app.listen(PORT, () => {
  console.log(`hello listinig to the port ${PORT}...`);
});
