function sum (arg) {
    arg.splice(0, 2);
    var numberArray = arg.map(e => Number(e))
    var res = numberArray.reduce((prev, curr) => prev + curr)
    return res
}

console.log(sum(process.argv))