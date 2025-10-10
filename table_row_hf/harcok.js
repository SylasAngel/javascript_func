/**
 * @type {{war:string, team1:string, team1Size:string, team2?:string,team2Size?:string}[]}
 */
const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]
const table = document.createElement('table')
document.body.appendChild(table)
const thead = document.createElement('thead')
table.appendChild(thead)
const tr = document.createElement('tr')
thead.appendChild(tr)
const tomb = ['Harc megnevezése','Szembenálló felek','Haderő']
for(let a of tomb)
{
    const th = document.createElement('th')
    tr.appendChild(th)
    th.innerText = a
}
const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(let b of arr)
{
    const tr1 = document.createElement('tr')
    tbody.appendChild(tr1)
    td1 = document.createElement('td')
    td2 = document.createElement('td')
    td3 = document.createElement('td')
    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)
    td1.innerText = b.war
    td2.innerText = b.team1
    td3.innerText = b.team1Size
    if(b.team2 != undefined && b.team2Size != undefined)
    {
        const tr2 = document.createElement('tr')
        tbody.appendChild(tr2)
        td4 = document.createElement('td')
        td5 = document.createElement('td')
        tr2.appendChild(td4)
        tr2.appendChild(td5)
        td4.innerText = b.team2
        td5.innerText = b.team2Size
        td1.rowSpan = 2

    }
}