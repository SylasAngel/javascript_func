/**
 *@type {{theme:string,time:string,scientist1:string,scientist2?:string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]
const table = document.createElement('table') //létrehoz html elemet a memóriában
document.body.appendChild(table) //hozzáfűz egy html elemet valamihez
const thead = document.createElement('thead')
table.appendChild(thead)
const tr = document.createElement('tr')
thead.appendChild(tr)

const th = document.createElement('th')
tr.appendChild(th)
th.innerText = "Fizika területe";

const th2 = document.createElement('th')
tr.appendChild(th2)
th2.innerText = "Időszak"

const th3 = document.createElement('th')
tr.appendChild(th3)
th3.innerText ="Képviselők"
th3.colSpan = 2;

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const a of arr)
{
    const tr1 = document.createElement('tr')
    tbody.appendChild(tr1)
    const td4 = document.createElement('td')
    tr1.appendChild(td4)
    td4.innerText = a.theme;
    const td5 = document.createElement('td')
    tr1.appendChild(td5)
    td5.innerText=a.time
    const td6 = document.createElement('td')
    tr1.appendChild(td6)
    td6.innerText=a.scientist1
    if(a.scientist2 != undefined)
    {
        const td7 = document.createElement('td')
        td7.innerText = a.scientist2
        tr1.appendChild(td7)
    }
    else
    {
        td6.colSpan = 2
    }
}

