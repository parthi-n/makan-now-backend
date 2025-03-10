// npm
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");



// Import routers
const testJwtRouter = require("./controllers/test-jwt");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const shopsRouter = require("./routes/shops");
const queueNumRouter = require("./routes/queueNum")

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
	console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

// Routes
app.use("/test-jwt", testJwtRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/shops", shopsRouter);
app.use("/queue-num", queueNumRouter)

// Start the server and listen on port 3000
app.listen(3000, () => {
	console.log("The express app is ready!");
});