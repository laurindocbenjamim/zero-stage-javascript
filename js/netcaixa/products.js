
let products = [
    {"id": 1, "code": "0011", "product_name": "Rize", "price": '12.594555'},
    {"id": 2, "code": "0012", "product_name": "Stroberry", "price": '29.544'}
]

let suppliers = [
    {"id": 1, "name": "LSR-FOOD", "address": "Portugal"},
    {"id": 2, "name": "World-Food", "address": "Angola"}
]

function removeCanvasChildElement(parent, child){
    try {
        //var old = document.querySelector('canvas')
        if(child){
            parent.removeChild(child)
        }else{
            console.log(child)
        }
    } catch (error) {
        console.log(error)
    }
}

const getProducts = () => {
     /**
     * Approach Change
     * let product_container = document.querySelector('products-container')
     * The line above does not work in context to append a child component
     */
     let product_container = document.getElementById('products-container')
     var tableDiv = document.createElement('div')
     tableDiv.setAttribute('class', "col-lg-12")
     tableDiv.setAttribute('id', "main-table-products")
     
     var childTableDiv = document.createElement('div')
     childTableDiv.setAttribute('class', "g-3")
     
     var headerDiv = document.createElement('div')
     headerDiv.setAttribute('class', "header")

     var title = document.createElement('h1')
     title.setAttribute('class', 'text-black-emphasis')
     title.textContent = "List of Products"
     
     var productsDiv = document.createElement('div')
     productsDiv.setAttribute('class', "table-products")
     
     var table = document.createElement('table')
     table.setAttribute('class', "table")
     table.setAttribute('id', "table")
 
     var tHead = document.createElement('thead')
     var tBody = document.createElement('tbody')
     var tr = document.createElement('tr')
 
     
     var thID = document.createElement('th')
     thID.textContent = "ID"
     var thCode = document.createElement('th')
     thCode.textContent = "Code"
     var thName = document.createElement('th')
     thName.textContent = "Arroz"
     var thPrice = document.createElement('th')
     thPrice.textContent = 'Price'
 
     tr.appendChild(thID)
     tr.appendChild(thCode)
     tr.appendChild(thName)
     tr.appendChild(thPrice)
 
     tHead.appendChild(tr)
 
     let decimalPlace = 2;
     let factor = Math.pow(10, decimalPlace);
     
     if(products.length){
         if(products.length>0){
             products.forEach((item, key) => {
                 var tr = document.createElement('tr')
                 var tdId = document.createElement('td')
                 tdId.textContent = item.id
                 var tdCode = document.createElement('td')
                 tdCode.textContent = item.code
                 var tdName = document.createElement('td')
                 tdName.textContent = item.product_name
                 var tdPrice = document.createElement('td')
                 tdPrice.textContent = Math.round(parseFloat(item.price) * factor)
                 tr.appendChild(tdId)
                 tr.appendChild(tdCode)
                 tr.appendChild(tdName)
                 tr.appendChild(tdPrice)
                 tBody.appendChild(tr)
             })
         }
     }
 
     headerDiv.appendChild(title)
     
     table.appendChild(tHead)
     table.appendChild(tBody)
     
     productsDiv.appendChild(table)
     childTableDiv.appendChild(headerDiv)
     childTableDiv.appendChild(productsDiv)
     tableDiv.appendChild(childTableDiv)

     const tableDivChild = document.getElementById('main-table-products')
     
     removeCanvasChildElement(product_container, tableDivChild)

     product_container.appendChild(tableDiv)
};
const getSuppliers = () => {
     /**
     * Approach Change
     * let product_container = document.querySelector('products-container')
     * The line above does not work in context to append a child component
     */
     let product_container = document.getElementById('products-container')
     var tableDiv = document.createElement('div')
     tableDiv.setAttribute('class', "col-lg-12")
     tableDiv.setAttribute('id', "main-table-products")
     
     var childTableDiv = document.createElement('div')
     childTableDiv.setAttribute('class', "g-3")
     
     var headerDiv = document.createElement('div')
     headerDiv.setAttribute('class', "header")

     var title = document.createElement('h1')
     title.setAttribute('class', 'text-black-emphasis')
     title.textContent = "List of Suppliers"
     
     var productsDiv = document.createElement('div')
     productsDiv.setAttribute('class', "table-products")
     
     var table = document.createElement('table')
     table.setAttribute('class', "table")
     table.setAttribute('id', "table")
 
     var tHead = document.createElement('thead')
     var tBody = document.createElement('tbody')
     var tr = document.createElement('tr')
 
     
     var thID = document.createElement('th')
     thID.textContent = "ID"
     var thCode = document.createElement('th')
     thCode.textContent = "Name"
     var thName = document.createElement('th')
     thName.textContent = "Address"
 
     tr.appendChild(thID)
     tr.appendChild(thCode)
     tr.appendChild(thName)
 
     tHead.appendChild(tr)
 
     let decimalPlace = 2;
     let factor = Math.pow(10, decimalPlace);
     
     if(suppliers.length){
         if(suppliers.length>0){
            suppliers.forEach((item, key) => {
                 var tr = document.createElement('tr')
                 var tdId = document.createElement('td')
                 tdId.textContent = item.id
                 var tdCode = document.createElement('td')
                 tdCode.textContent = item.name
                 var tdName = document.createElement('td')
                 tdName.textContent = item.address
                 tr.appendChild(tdId)
                 tr.appendChild(tdCode)
                 tr.appendChild(tdName)
                 tBody.appendChild(tr)
             })
         }
     }
     
     headerDiv.appendChild(title)

     table.appendChild(tHead)
     table.appendChild(tBody)
     
     productsDiv.appendChild(table)

     childTableDiv.appendChild(headerDiv)
     childTableDiv.appendChild(productsDiv)
     tableDiv.appendChild(childTableDiv)

     const tableDivChild = document.getElementById('main-table-products')
         
     removeCanvasChildElement(product_container, tableDivChild)

     product_container.appendChild(tableDiv)
};



