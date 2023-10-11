function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.toString().replaceAll(",", "");
}

function setToArr(set) {
    return Array.from(set);
}

function setToStr(set) {
    let result = "";
    set.forEach((element) => { result += element; });
    return result;
}

function strToArr(str) {
    return str.split("");
}

function strToSet(str) {
    return new Set(str.split(""));
}

function mapToObj(map) {
    return Object.fromEntries(map);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function objToArr(obj) {
    return Object.values(obj);
}

function arrToObj(arr) {
    return Object.assign({}, arr);
}

function strToObj(str) {
    return Object.assign({}, str.split(""));
}

function superTypeOf(element) {
    if (Array.isArray(element)) {
        return "Array";
    } else if (element instanceof Set) {
        return "Set";
    } else if (element instanceof Map) {
        return "Map";
    } else if (element === null) {
        return "null";
    } else if (typeof element === "object") {
        return "Object";
    } else if (typeof element === "string") {
        return "String";
    } else if (typeof element === "number") {
        return "Number";
    } else if (typeof element === "boolean") {
        return "Boolean";
    } else if (typeof element === "undefined") {
        return "undefined";
    } else if (typeof element === "function") {
        return "Function";
    }
}
