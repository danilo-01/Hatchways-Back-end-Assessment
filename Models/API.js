const {BASEURL} = require("../config");
const axios = require("axios");
const {mergeSort} = require("../Helpers/mergeSort");

class API {
    static async getPosts(tags, sortBy = "id", direction = "asc") {
        let posts = []
        const urls = [];
        
        for(let tag of tags){
            // Generate urls for each tag and cleans up any white space before and after tag
            urls.push(`${BASEURL}?tag=${tag.trim()}`);
        }
        
        // Get all promises
        const promises = urls.map((url) =>
        axios.get(url).then((response) => response)
        );
    
        // Resolve all promises
        const promiseData = await Promise.all(promises);

        // Combines all posts together
        promiseData.map(promiseData => {posts.push(...promiseData.data.posts)});

        // If no posts were collected return the empty array
        if(posts.length == 0) return posts;

        // Sort collected posts
        const result = mergeSort(posts, sortBy);
        
        // Change order of posts if needed
        return direction == "asc" ? result : result.reverse();
    }
}

module.exports = API;