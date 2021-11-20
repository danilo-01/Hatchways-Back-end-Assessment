// Simple way to validate if the options for sortBy and direction are valid

module.exports.sortByoptions = new Set(["id", "reads", "likes", "popularity"]);

module.exports.directionOptions = new Set(["asc", "desc"]);