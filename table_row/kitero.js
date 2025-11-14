/*const arr = {}
let szam = 4;
if(szam>5)
{
    arr.name = "rah";
}
else
{
    arr["name"] = "segítség"
}
console.log(arr)
console.log(arr["name"])

if(arr.age == undefined) //if(arr.age) ha arr.age nem egyenlő nulla akkor elég
{

}*/
/**
 *@type {{nationality:string,author1:string,creation1:string,author2?:string,creation2?:string}[]}
 */
const arr = [
    {
        nationality : 'Orosz',
        author1 : 'Gogol',
        creation1 : 'A köpönyeg',
        author2 : 'Csehov',
        creation2 : 'A csinovnyik halála',
    }
    ,{
        nationality : 'Cseh',
        author1 : 'Franz Kafka',
        creation1 : 'Az átváltozás',

    },
    {
        nationality : 'Magyar',
        author1 : 'Örkény István',
        creation1 : 'Egyperces Novellák',
        author2 : 'József Attila',
        creation2 : 'Klárisok',
    },
    {
        nationality : 'Svájc',
        author1 : 'Friedrich Dürrenmatt',
        creation1 : 'A fizikusok',
    }
]

const table = document.createElement('table')
document.body.appendChild(table)
const headerList = ['Nemzetiseg','Szerző','Mű']
generateHeader(table,headerList)
const tbody = document.createElement('tbody')
table.appendChild(tbody)
tbody.id = 'jstabla'

renderTablebody(arr)

const form = document.getElementById('htmlform')
form.addEventListener('submit',htmlFormEventListener)

const form1 = document.createElement('form')
form1.id = 'jsform'
document.body.appendChild(form1)

createFormElement(form1,'nemzetiseg','Nemzetiség: ')
createFormElement(form1,'szerzo1','Szerző: ')
createFormElement(form1,'mu1','Mű: ')
createFormElement(form1,'szerzo2','Szerző: ')
createFormElement(form1,'mu2','Mű: ')

const button = document.createElement('button')
form1.appendChild(button)
button.innerText = 'Hozzáadás'

const jsform = document.getElementById('jsform')
jsform.addEventListener('submit', function(e)
{
    e.preventDefault();
/**
 * @type {HTMLFormElement}
 */
    const f = e.target

    /**
     * @type {HTMLInputElement}
     */
    const Nemzetiseg = f.querySelector('#nemzetiseg')

        /**
     * @type {HTMLInputElement}
     */
    const Szerzo1 = f.querySelector('#szerzo1')

        /**
     * @type {HTMLInputElement}
     */
    const Mu1= f.querySelector('#mu1')

        /**
     * @type {HTMLInputElement}
     */
    const Szerzo2 = f.querySelector('#szerzo2')

        /**
     * @type {HTMLInputElement}
     */
    const Mu2 = f.querySelector('#mu2')
/**
 * @type {string}
 */
    const nemzetvalue = Nemzetiseg.value

    /**
 * @type {string}
 */
    const Szerzo1value = Szerzo1.value

    /**
 * @type {string}
 */
    const Mu1value = Mu1.value

    /**
 * @type {string}
 */
    const Szerzo2Value = Szerzo2.value

    /**
 * @type {string}
 */
    const mu2Value = Mu2.value
 /**
  * @type {COunt}
  */
    const objekt2 = {}
    if(validateFields(nemzetvalue,Szerzo1value,Mu1value,Szerzo2Value,mu2Value))
        objekt2.nationality = nemzetvalue
        objekt2.author1 = Szerzo1value
        objekt2.creation1 = Mu1value
        objekt2.author2 = Szerzo2Value
        objekt2.creation2 = mu2Value

    arr.push(objekt2)

    renderTablebody(arr)

})




