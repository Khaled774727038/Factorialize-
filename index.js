//Factorialize-

let Factorialize = (n) => {
    let j = 1;

    for (let i = 1; i <= n; i += 1) {
        let l = j * i
        j = l
    }

    return j
}
//Factorialize of !5
console.log(Factorialize(5)); 
//Factorialize of !10
console.log(Factorialize(10)); 
//Factorialize of !20
console.log(Factorialize(20)); 