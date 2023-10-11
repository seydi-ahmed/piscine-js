const urlExp = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/=]*)/g;

function getURL(dataSet) {
    return dataSet.match(urlExp) || [];
}

function greedyQuery(dataSet) {
    const urls = getURL(dataSet);
    return urls.filter(url => {
        const queryRegex = /\?([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*&){2,255}([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*)/g;
        return url.match(queryRegex) !== null;
    });
}

function notSoGreedy(dataSet) {
    const urls = getURL(dataSet);
    return urls.filter(url => {
        const queryRegex = /\?([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*&){1,2}([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*)$/g;
        return url.match(queryRegex) !== null;
    });
}

/*
const dataSet = "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you";
console.log("All URLs:", getURL(dataSet));
console.log("URLs with at least 3 query parameters:", greedyQuery(dataSet));
console.log("URLs with 2 to 3 query parameters:", notSoGreedy(dataSet));*/