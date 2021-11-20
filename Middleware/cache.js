// Middleware to cache a response
const mcache = require("memory-cache");

const cache = (duration) => {
    return (req, res, next) => {
        // Create key for cache
        const key = `__express__${req.originalUrl || req.url}`;

        // Get cached data with key
        const cachedBody = mcache.get(key);

        // If there was a key send cached data
        if(cachedBody){
            return res.send(cachedBody);
        }else {
            // If there wasnt a key prepare the next response to be cached
            // Hold the real res.send in another variable
            res.sendResponse = res.send;

            // res.send is now a function that will take the data to be sent and will cache it
            res.send = (body) => {
                mcache.put(key, body, duration * 1000);
                
                // Use the real res.send to send back the data
                res.sendResponse(body);
            }
            return next();
        }
    }
}

module.exports = cache;