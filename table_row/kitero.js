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


/**
 * @typedef {{id:string,label:string}} FormField
 */
/**
 * @type {{headerList:string[],fields:FormField[]}}
 */
const objec = {
    headerList: ['Nemzetiseg','Szerző','Mű'],
    fields: [
          {
        id: 'nemzetiseg',
        label: 'Nemzetiség:'
    },
        {
        id: 'szerzo1',
        label: 'Szerző:'
    },
        {
        id: 'mu1',
        label: 'Mű:'
    },
        {
        id: 'szerzo2',
        label: 'Másik szerző:'
    },
        {
        id: 'mu2',
        label: 'Mű:'
    }
    ]
};
generateTable(objec.headerList,'jstabla')
renderTablebody(arr)

const form = document.getElementById('htmlform')
form.addEventListener('submit',htmlFormEventListener)

const form1 = generateForm('jsform',objec.fields)
document.body.appendChild(form1)


const jsform = document.getElementById('jsform')
jsform.addEventListener('submit', function(e)
{
    e.preventDefault();
/**
 * @type {HTMLFormElement}
 */
    const f = e.target
    const errors = f.querySelectorAll('.error')
    for(const a of errors)
    {
        a.innerText = '';
    }

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

    if(!validateFields(Nemzetiseg,Szerzo1,Mu1))
    {
        return;
    }
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
        objekt2.nationality = nemzetvalue
        objekt2.author1 = Szerzo1value
        objekt2.creation1 = Mu1value
        objekt2.author2 = Szerzo2Value !== '' ? Szerzo2Value : undefined;
        objekt2.creation2 = mu2Value !== '' ? mu2Value : undefined

    arr.push(objekt2)

    renderTablebody(arr)

})






