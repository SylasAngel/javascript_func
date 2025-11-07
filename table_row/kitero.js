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
const thead = document.createElement('thead')
table.appendChild(thead)
const tr = document.createElement('tr')
thead.appendChild(tr)
const th = document.createElement('th')
tr.appendChild(th)
th.innerText = 'Nemzetiség'

const th1 = document.createElement('th')
tr.appendChild(th1)
th1.innerText = 'Szerző'

const th2 = document.createElement('th')
tr.appendChild(th2)
th2.innerText = 'Mű'

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const a of arr)
{
    const tr1 = document.createElement('tr')
    tbody.appendChild(tr1)
    const td1 = document.createElement('td')
    td1.addEventListener('click',function(e)
{
    /**
     * @type {HTMLTableCellElement}
     */
    const f = e.target
    f.classList.add('marked')

})


    
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)
    td1.innerText = a.nationality
    td2.innerText = a.author1
    td3.innerText = a.creation1
    if(a.author2 != undefined)
    {
    const tr2 = document.createElement('tr')
    tbody.appendChild(tr2)
    const td4 = document.createElement('td')
    const td5 = document.createElement('td')
    tr2.appendChild(td4)
    tr2.appendChild(td5)
    td4.innerText = a.author2
    td5.innerText = a.creation2
    td1.rowSpan = 2

    }

}

const form = document.getElementById('htmlform')
form.addEventListener('submit',function(e)
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
    const mu1 = f.querySelector('#mu1')
        /**
     * @type {HTMLInputElement}
     */
    const Szerzo2 = f.querySelector('#szerzo2')
        /**
     * @type {HTMLInputElement}
     */
    const mu2 = f.querySelector('#mu2')
    /**
     * @type {string}
     */
    const nemzetvalue = Nemzetiseg.value
        /**
     * @type {string}
     */
    const Szerzo1Value = Szerzo1.value
        /**
     * @type {string}
     */
    const mu1Value = mu1.value
        /**
     * @type {string}
     */
    const Szerzo2Value = Szerzo2.value
        /**
     * @type {string}
     */
    const mu2Value = mu2.value
    /**
     * @type {{nationality:string,author1:string,creation1:string,author2?:string,creation2?:string}}
     */
    const objekt1 = {}
    objekt1.nationality = nemzetvalue
    objekt1.author1 = Szerzo1Value
    objekt1.creation1 = mu1Value
    objekt1.author2 = Szerzo2Value
    objekt1.creation2 = mu2Value

    const tbod = document.getElementById('azon')

        const tr1 = document.createElement('tr')
    tbod.appendChild(tr1)
    const td1 = document.createElement('td')
    td1.addEventListener('click',function(e)
{
    /**
     * @type {HTMLTableCellElement}
     */
    const f = e.target
    f.classList.add('marked')

})


    
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)
    td1.innerText = objekt1.nationality
    td2.innerText = objekt1.author1
    td3.innerText = objekt1.creation1
    if(objekt1.author2 != undefined)
    {
    const tr2 = document.createElement('tr')
    tbod.appendChild(tr2)
    const td4 = document.createElement('td')
    const td5 = document.createElement('td')
    tr2.appendChild(td4)
    tr2.appendChild(td5)
    td4.innerText = objekt1.author2
    td5.innerText = objekt1.creation2
    td1.rowSpan = 2

    }


})

const form1 = document.createElement('form')
form1.id = 'jsform'
document.body.appendChild(form1)
/**
 * 
 * @param {HTMLFormElement} form -lekérjük hogy melyik formhoz csatoljuk
 * @param {string} id -label(for) és input(id,name)
 * @param {string} labelContent - labelen belüli szöveg
 */
function createFormElement(form,id,labelContent)
{
    const label = document.createElement('label')
    form.appendChild(label)
    label.for = id
    label.innerText = labelContent
    const br = document.createElement('br')
    form.appendChild(br)

    const input = document.createElement('input')
    form.appendChild(input)
    input.type = 'text'
    input.id = id
    input.name = id
    const br1 = document.createElement('br')
    form.appendChild(br1)
    const br2 = document.createElement('br')
    form.appendChild(br2)
}
createFormElement(form1,'nemzetiseg','Nemzetiség: ')
createFormElement(form1,'szerzo1','Szerző: ')
createFormElement(form1,'mu1','Mű: ')
createFormElement(form1,'szerzo2','Szerző: ')
createFormElement(form1,'mu2','Mű: ')

const button = document.createElement('button')
form1.appendChild(button)
button.innerText = 'Hozzáadás'
