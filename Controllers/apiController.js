// Controllers for /api

// Controller for GET /api/ping
module.exports.getPing = async (req, res, next) => {
    // Return successful
    res.statusCode = 200;
    res.send(JSON.stringify({"success": true}))
}

// controller for GET /api/posts
module.exports.getPosts = async (req, res, next) => {

}

