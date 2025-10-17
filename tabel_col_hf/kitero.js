const szam = 7;
valami1()
valami2()
valami3()
const opsum = valami4(6)
console.log(opsum)
/**
 * kilogol egy stringet
 * 
 * @returns {void} //void js-ben azt jelenti hogy undefined-al tér vissza az érték
 */
function valami1()
{
    console.log("rah")
}
/**
 * 
 * @returns {void}
 */
function valami2()
{
    console.log(szam) //kisebb scopeból is elérjük a nagyobb scopeban lévő változót
}
/**
 * ez a függvény lokális változót fog tartalmazni
 * 
 * @returns {void}
 */
function valami3()
{
    const b = 9;
    console.log(b)

}
/**
 * 
 * @param {number} param1 -ez a bemeneti paraméter
 * @returns {number}
 */
function valami4(param1)
{
    const a = 6
    const c = a+param1
    return c

}