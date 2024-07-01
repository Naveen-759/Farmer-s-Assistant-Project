const express = require("express");
const app = express();
const port = 3050;
const cors = require("cors");
const fertilizersroutes = require("./routes/Crops");
const cropsroutes = require("./routes/Crops");
const diseasesroutes = require("./routes/Crops");
const pesticidesroutes = require("./routes/Crops");
const { farmerSignup, farmerLogin } = require("./controllers/farmers");
const adminLogin = require("./controllers/admin");

app.use(cors());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", fertilizersroutes);
app.use("/api/v2", cropsroutes);
app.use("/api/v3", diseasesroutes);
app.use("/api/v4", pesticidesroutes);
app.post("/signup", farmerSignup);
app.post("/login", farmerLogin);
app.post("/adminlogin", adminLogin);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
