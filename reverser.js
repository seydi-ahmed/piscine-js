function reverse(args){
    if (Array.isArray(args)){
        let tab = []
        for (let i = args.length-1; i >= 0; i--){
            tab.push(args[i])
        }
        return tab
    }

    if (typeof args == "string"){
        let str = ""
        for (let i = args.length-1; i >= 0; i--){
            str += args[i]
        }
        return str
    }
}

/*
arr = [1,2,3,4,5]
str = "hello"
console.log(reverse(arr))
console.log(reverse(str))*/