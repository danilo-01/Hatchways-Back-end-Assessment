// File to connect all routes to the app
const express = require("express");
const app = express();

// Import routes
const apiRouter = require("./Routes/apiRoutes");

// Connect Routes
app.use("/api", apiRouter);

// Export app
module.exports = app;