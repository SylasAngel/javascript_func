/**
 * @type {{name:string,time:string,lover1:string,lover2?:string}[]}
 */

const arr = 
[
    {
        name: 'Balassi Bálint',
        time: 'reformáció',
        lover1: 'Losonczy Anna',
        lover2: 'Dobó Krisztina'
    },
    {
        name: 'Csokonai Vitéz Mihály',
        time: 'felvilágosodás',
        lover1: 'Vajda Juliána'
    },
    {
        name: 'Petőfi Sándor',
        time: 'magyar romantika',
        lover1: 'Mednyánszky Berta',
        lover2: 'Szendrey Júlia'
    },
    {
        name: 'Ady Endre',
        time: 'magyar romantika',
        lover1: 'Léda',
        lover2: 'Csinszka'
    }
]
const table = document.createElement('table')
document.body.appendChild(table)
const thead = document.createElement('thead')
table.appendChild(thead)
const tr = document.createElement('tr')
thead.appendChild(tr)

createCellElement('th','Szerző neve',tr)

createCellElement('th','korszak',tr)

const th3 =createCellElement('th','Szerelmek',tr)
th3.colSpan = 2;

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const sz of arr)
{
    const tr1 = document.createElement('tr')
    tbody.appendChild(tr1)
    createCellElement('td',sz.name,tr1)
    createCellElement('td',sz.time,tr1)
    const td6 = createCellElement('td',sz.lover1,tr1)
    if(sz.lover2 != undefined)
    {
        createCellElement('td',sz.lover2,tr1)
    }
    else{
        td6.colSpan = 2;
    }
}
/**
 * 
 * @param {string} cellType -td vagy th
 * @param {string} cellContent -innertext tartalom
 * @param {HTMLTableRowElement} cellRow -melyik sorhoz csatoljuk hozzá
 * @returns {HTMLTableCellElement} -létrehozott cellát returnoli
 */
function createCellElement(cellType,cellContent,cellRow)
{
    const cell = document.createElement(cellType)
    cellRow.appendChild(cell)
    cell.innerText = cellContent
    return cell

}

const form = document.createElement('form')
document.body.appendChild(form)
form.id = 'form_js'
const h2 = document.createElement('h2')
form.appendChild(h2)
h2.innerText = 'Javascript form'

/**
 * 
 * @param {string} id 
 * @param {string} innerText 
 */
function createLabel(id,text)
{
    const label = document.createElement('label')
    form.appendChild(label)
    label.for = id
    label.innerText = text
    
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
createLabel('kolto_nev','Költő neve:')
createLabel('korszak','Korszak:')
createLabel('szerelem1','Szerelme:')
createLabel('szerelem2','Szerelme:')

const button = document.createElement('button')
form.appendChild(button)
button.innerText = 'Hozzáadás'