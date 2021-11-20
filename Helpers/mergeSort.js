// Merge sort function that will sort an array of items that all have a specific identifier
const merge = (arr1, arr2, identifier = "id") => {
    // using a map to make sure there arent any duplicate ids or whatever its being sorted by
    const results = new Map();

    let i = 0;
    let j = 0;

    // Pushes values in ascending order
    while(i < arr1.length && j < arr2.length){
        if(arr1[i][identifier] < arr2[j][identifier]){
            results.set(`${arr1[i][identifier]}`, arr1[i]);
            i++;
        }else{
            results.set(`${arr2[j][identifier]}`, arr2[j]);
            j++;
        } 
    }
    
    
    while(i < arr1.length){
        results.set(arr1[i][identifier],arr1[i]);
        i++;
    }

    while(j < arr2.length){
        results.set(arr2[j][identifier], arr2[j]);
        j++;
    }


    return [...results.values()]
}

const mergeSort = (arr, identifier) => {
    if(arr.length == 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), identifier);
    const right = mergeSort(arr.slice(mid), identifier);
    return merge(left, right, identifier);
}

module.exports = {
    mergeSort, 
    merge
}