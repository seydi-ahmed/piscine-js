function triangle(str, num){
    var result = ""
    for (var i = 0; i < num; i++){
        for (var j = 0; j < i+1; j++){
            result += str
        }
        if (i != num-1){
            result += "\n"
        }
    }
    return result
}

/*
console.log(triangle("#",4))*/