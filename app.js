// File to connect all routes to the app
const express = require("express");
const app = express();

// Import routes
const apiRouter = require("./Routes/apiRoutes");

// app.use((req, res, next) => {
//     console.log(req);
//     next();
// })

// Connect Routes
app.use("/api", apiRouter);

// Export app
module.exports = app;