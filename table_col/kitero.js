console.log("hello world")
/**
 * @type {string}
 */
const tyuki = "egy leprikon"
console.log(tyuki)
/**
 * @type {string[]}
 */
const tomb = ["szó_1","szó_2","szó_3"]
console.log(tomb[0])

for(let i=0;i<tomb.length;i++)
{
    console.log(tomb[i])
}

for(const a of tomb)
{
    console.log(a)
}

for(const key in tomb)
{
    console.log(`${key}:${tomb[key]}`) //key+":"+tomb[key]
}
/**
 * @type {{nev:string, age:number }}
 */
const a = {
//  key   value
    nev: `Zoli`,
    age:  18
}
console.log(a)
console.log(a.nev)
