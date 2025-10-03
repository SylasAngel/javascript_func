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
th.innertext = "Fizika területe"
tr.appendChild(th)

const th2 = document.createElement('th')
th2.innertext ="Időszak"
tr.appendChild(th2)

const th3 = document.createElement('th')
th3.innertext ="Képviselők"
tr.appendChild(th3)

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const a of arr)
{
    const tr1 = createElement('tr')
    tbody.appendChild(tr)
    const td4 = createElement('td')
    td4.innertext=a.theme
    tr1.appendChild(td4)
    const td5 = createElement('td')
    td5.innertext=a.time
    tr1.appendChild(td5)
    const td6 = createElement('td')
    td6.innertext=a.scientist1
    tr1.appendChild(td6)
    if(a.scientist2 != undefined)
    {
        const td7 = createElement('td')
        td7.innertext = a.scientist2
        tr1.appendChild(td7)
    }
}

