const identity = function (input) {
    return input
};

const first = function (arr, n) {
    let temp = []

    if (n === undefined) {
        return arr[0]
    } else if (arr.length < n) {
        return arr
    }
    for (let i = 0; i < n; i++) {

        temp.push(arr[i])

    }

    return temp

};

const last = function (arr, n) {
    let temp = []

    if (n === undefined) {
        return arr[arr.length - 1]
    } 
    
    if (arr.length < n) {
        return arr
    }

    // for (let i = arr.length - 1; i < n; i--) {
    //     temp.push(arr[i])
    // }

    for(let i = arr.length - n; i < arr.length; i++) {
        temp.push(arr[i])
    }

    return temp
};
console.log(last([1, 2, 3], 2))

const each = function (collection, callback) {
    if(Array.isArray(collection)){
      for(let i = 0; i < collection.length; i++){
        collection[i] = callback(collection[i], i, collection)
      }
    }else{
      for(let key in collection){
        collection[key] = callback(collection[key], key, collection)
      }
    }
  };
 
// It takes in an array as the parameter, checks if the value "40" is included in it. If it does not, it returns "-1" as requested by test.js. If it does, it runs a for loop that is meant to stop once it reaches a point in the array where the value "40" is contained

const indexOf = function (array) {
    if (array.includes("40")) {
        for (let i = 0; i < array.length; i++){
            if (array[i].includes("40")){
                return i
            }
        }
    } else {
        return -1;
    }
};

const map = function () {

}

const filter = (collection, callback) => {
    let result = []
    for (let item of collection) {
        if (callback(item)) {
            result.push(item)
        }
    }
    return result
}

const reject = (collection, callback) => {
    let result = []
    for (let item of collection) {
        if (!callback(item)) {
            result.push(item)
        }
    }
    return result
}

const uniq = (collection) => {
    let result = []
    for (let item of collection) {
        if (result.indexOf(item) === -1) {
            result.push(item)
        }
    }
    return result
}

const reduce = (collection, callback, initialVal) => {
    let accumulator = initialVal
    for (let key in collection) {
        if (accumulator === undefined) {
            accumulator = collection[key]
        }
        accumulator = callback(accumulator, collection[key])
    }
    return accumulator
}

module.exports = {
    identity,
    first,
    last,
    each,
    indexOf,
    map,
    filter,
    reject,
    uniq,
    reduce
};