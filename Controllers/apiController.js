// Controllers for /api
const API = require("../Models/API");
const {sortByoptions, directionOptions} = require("../Helpers/getPostsParams");
const ExpressError = require("../Helpers/ExpressError");

// Controller for GET /api/ping
module.exports.getPing = async (req, res, next) => {
    // Return successful
    res.status(200).send(JSON.stringify({"success": true}))
}

// controller for GET /api/posts
async function getPosts(req, res, next){
    try{
        // Tags separated by commas
        if(!req.query.tags) return next(new ExpressError( "Tags parameter is required", 400));
        const tags = req.query.tags.split(",");

        // sortBy and direction if any
        const {sortBy, direction} = req.query;

        // Check if sortBy and direction parameters are valid
        if(sortBy && !sortByoptions.has(sortBy)) return next(new ExpressError("sortBy parameter is invalid", 400));
        if(direction && !directionOptions.has(direction)) return next(new ExpressError("direction parameter is invalid", 400));

        // Request hatchways api for posts with specific tags
        const result = await API.getPosts(tags, sortBy, direction);
        
        // Send back posts in correct order and assortment
        return res.status(200).send(JSON.stringify(
            {
                posts : result
            }
        ));
        
    }catch(error){
        next(new ExpressError("Server Error", 500);
    }
}


module.exports.getPosts = getPosts;
