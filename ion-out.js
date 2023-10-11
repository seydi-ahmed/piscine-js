function ionOut(str) {
    const arr = str.split(" ");
    const rexp = /tion/g;
    const res = arr
        .filter((word) => word.match(rexp))
        .map((word) => word.replace(/[.,?!]/g, "").slice(0, -3));
    return res;
}




const inputString = "This is a demonstration of ionOut function. It extracts information from a portion.";
const extractedWords = ionOut(inputString);

console.log(extractedWords);
