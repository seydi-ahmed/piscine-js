function nasa(N){
    var result = ""
    for (var i = 1; i <= N; i++){
        if (i%3==0 && i%5==0){
            result += "NASA"
            if (i != N){
                result+= " "
            }
        }else if (i%3==0){
            result += "NA"
            if (i != N){
                result+= " "
            }
        }else if (i%5==0){
            result += "SA"
            if (i != N){
                result+= " "
            }
        }else{
            result += i.toString()
            if (i != N){
                result+= " "
            }
        }
    }
    return result
}


console.log(nasa(15))