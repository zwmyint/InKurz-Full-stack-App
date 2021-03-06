const express = require("express");
const cors = require("cors");
const server = express();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/newsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(console.log("mongoDB connected successfully"))
  .catch(err => console.log(err));

server.listen(3333, () => console.log("Server is ready on port 3333"));
server.use(express.json({ extended: false }));
server.use(cors());
server.set("json spaces", 2);

server.use("/news", require("./routes/cards"));
server.use("/reviews", require("./routes/reviews"));
server.use("/users", require("./routes/users"));
server.use("/auth", require("./routes/auth"));
server.use("/profile", require("./routes/profile"));
