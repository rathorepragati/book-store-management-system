const express = require("express");
const app = express();
const cors = require("cors");
require("./database/config");

const bookRoute = require("./routes/booksRoutes");
const userRoute = require("./routes/usersRoutes");
app.use(express.json());
app.use(cors());

// this is comment
app.use("/api/v1", bookRoute);
app.use("/api/v2", userRoute);

app.listen(1000, () => {
  console.log("server running on port http://localhost:1000");
});
