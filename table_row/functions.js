/**
 * @typedef {{nationality:string,author1:string,creation1:string,author2?:string,creation2?:string}} CountryWriters
 */

/**
 * 
 * @param {Event} e 
 */
function htmlFormEventListener(e)
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
     * @type {CountryWriters}
     */
    const objekt1 = {}
    objekt1.nationality = nemzetvalue
    objekt1.author1 = Szerzo1Value
    objekt1.creation1 = mu1Value
    objekt1.author2 = Szerzo2Value
    objekt1.creation2 = mu2Value

    const tbod = document.getElementById('azon')

    renderTableRow(tbod,objekt1)

    }

    /**
 * 
 * @param {{nationality:string,author1:string,creation1:string,author2?:string,creation2?:string}[]} Array
 */
function renderTablebody(Array)
{
    const tbodyfunc = document.getElementById('jstabla')
    tbody.innerHTML = '';
    for(const a of Array)
{
   renderTableRow(tbodyfunc,a)

}
}

/**
 * 
 * @param {HTMLFormElement} form -lekérjük hogy melyik formhoz csatoljuk
 * @param {string} id -label(for) és input(id,name)
 * @param {string} labelContent - labelen belüli szöveg
 */
function createFormElement(form,id,labelContent)
{
    const div = document.createElement('div')
    form.appendChild(div)
    const label = document.createElement('label')
    div.appendChild(label)
    label.for = id
    label.innerText = labelContent
    const br = document.createElement('br')
    div.appendChild(br)

    const input = document.createElement('input')
    div.appendChild(input)
    input.type = 'text'
    input.id = id
    input.name = id
    const br1 = document.createElement('br')
    div.appendChild(br1)
    const br2 = document.createElement('br')
    div.appendChild(br2)

    const span = document.createElement('span')
    span.classList.add('.error')
    div.appendChild(span)
}

/**
 * 
 * @param {HTMLTableSectionElement} tablebody 
 * @param {CountryWriters} CountryWriters 
 */
function renderTableRow(tablebody, CountryWriters)
{
    const tr1 = document.createElement('tr')
    tablebody.appendChild(tr1)
    const td1 = createCell('td',tr1,CountryWriters.nationality)
    td1.addEventListener('click',function(e)
{
    /**
     * @type {HTMLTableCellElement}
     */
    const f = CountryWriters.target

    const asd = f.parentElement
    const tbody = asd.parentElement

    const valtozo = tbody.querySelector('.marked')
    if(valtozo !== null)
    {
        valtozo.classList.remove('marked')
    }

    f.classList.add('marked')

})


    createCell('td',tr1,CountryWriters.author1)
    createCell('td',tr1,CountryWriters.creation1)
    if(CountryWriters.author2 != undefined)
    {
    const tr2 = document.createElement('tr')
    tablebody.appendChild(tr2)
    createCell('td',tr2,CountryWriters.author2)
    createCell('td',tr2,CountryWriters.creation2)
    td1.rowSpan = 2

    }

}

/**
 * 
 * @param {'td'|'th'} celltype 
 * @param {string} cellContent
 * @param {HTMLTableCellElement} parentRows
 */
function createCell(celltype,parentRow,cellContent)
{
    const a = document.createElement(celltype)
    parentRow.appendChild(a)
    a.innerText = cellContent
    return a

}

/**
 * 
 * @param {HTMLTableElement} table 
 * @param {string []} headerList 
 */
function generateHeader(table,headerList)
{
    const thead = document.createElement('thead')
    table.appendChild(thead)
    const tr = document.createElement('tr')
    thead.appendChild(tr)
    for(const a of headerList)
    {
        createCell('th',tr,a)
    }
}

/**
 * 
 * @param {HTMLInputElement} inputField1 
 * @param {HTMLInputElement} inputField2 
 * @param {HTMLInputElement} inputField3 
 */
function validateFields(inputField1,inputField2,inputField3)
{
    let valid = true
    if(inputField1.value == '')
    {
        const parentDiv = inputField1.parentElement
        const error =parentDiv.querySelector('.error')
        error.innerText = 'Mező kitöltése kötelező'
        valid = false
    }
    return valid

}