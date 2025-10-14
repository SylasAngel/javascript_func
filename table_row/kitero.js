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