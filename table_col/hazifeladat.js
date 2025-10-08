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

const th = document.createElement('th')
tr.appendChild(th)
th.innerText = 'Szerző neve';

const th2 = document.createElement('th')
tr.appendChild(th2)
th2.innerText = 'Korszak';

const th3 = document.createElement('th')
tr.appendChild(th3)
th3.innerText = 'Szerelmek';
th3.colSpan = 2;

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const sz of arr)
{
    const tr1 = document.createElement('tr')
    tbody.appendChild(tr1)
    const td4 = document.createElement('td')
    tr1.appendChild(td4)
    td4.innerText = sz.name;
    const td5 = document.createElement('td')
    tr1.appendChild(td5)
    td5.innerText = sz.time;
    const td6 = document.createElement('td')
    tr1.appendChild(td6)
    td6.innerText = sz.lover1;
    if(sz.lover2 != undefined)
    {
        const td7 = document.createElement('td')
        td7.innerText = sz.lover2
        tr1.appendChild(td7)
    }
    else{
        td6.colSpan = 2;
    }
}

