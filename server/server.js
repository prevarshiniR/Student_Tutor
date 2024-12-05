const express = require("express");
const signup = require("./src/controllers/signup-controller");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const corsOptions = {
  origin: "http://localhost:3000", // Allow only requests from this origin
  methods: "GET,POST,PUT,DELETE", // Allow only these methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only these headers
};

app.use(cors(corsOptions));

app.post("/api/auth/signup", signup);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
