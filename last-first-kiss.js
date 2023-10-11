function first(args){
    return args[0]
}

function last(args){
    return args[args.length-1]
}

function kiss(args){
    return [last(args), first(args)];
}
