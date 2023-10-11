function dnaToRna(str){
    if (str == 'G'){
        return 'C'
    }else if (str == 'C'){
        return 'G'
    }else if (str == 'T'){
        return 'A'
    }else if (str == 'A'){
        return 'U'
    }else{
        return null
    }
}

function rnaToDna(str){
    if (str == 'C'){
        return 'G'
    }else if (str == 'G'){
        return 'C'
    }else if (str == 'A'){
        return 'T'
    }else if (str == 'U'){
        return 'A'
    }else{
        return null
    }
}

function RNA(str){
    var result = ""
    for (var i = 0; i < str.length; i++){
        var aux = dnaToRna(str[i])
        if (aux === null){
            return null
        }
        result += aux
    }
    return result
}

function DNA(str){
    var result = ""
    for (var i = 0; i < str.length; i++){
        var aux = rnaToDna(str[i])
        if (aux === null){
            return null
        }
        result += aux
    }
    return result
}



const str = "TAGC"
console.log(RNA(str))