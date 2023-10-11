function sign(number){
    if (number > 0){
        return 1
    }else if (number < 0){
        return -1
    }else{
        return 0
    }
}

function sameSign(num1, num2){
    return sign(num1)===sign(num2)
}