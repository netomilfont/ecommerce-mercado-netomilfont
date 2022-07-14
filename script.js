function listProduct (produto) {

    for(let i = 0; i < produto.length; i++) {
        
        if(produto[i].category == 'Frutas') {

            createFruitCards(produto[i])

        } else if (produto[i].category == 'Bebidas') {

            createDrinkCards(produto[i])

        } else if (produto[i].category == 'Higiene') {

            createHygieneCards(produto[i])
        }
        
    }
}

listProduct(products)

function createFruitCards(produto){

    let titleProduct = produto.title
    let categoryProduct = produto.category
    let priceProduct = produto.price
    
    let ul = document.querySelector(".product-list-fruits")
    let li = document.createElement("li")
    let img = document.createElement("img")
    let main = document.createElement("main")
    let h1 = document.createElement("h1")
    let h5 = document.createElement("h5")
    let strong = document.createElement("strong")

    li.classList.add("product")
    img.classList.add("product-img")
    main.classList.add("product-main")
    h1.classList.add("product-title")
    h5.classList.add("product-category")
    strong.classList.add("product-price")

    if(produto.image == undefined) {

        img.src = './img/products/no-img.svg'
    } else {
        img.src = produto.image
    }


    h1.innerText = titleProduct
    h5.innerText = categoryProduct
    strong = priceProduct


    main.append(h1, h5, strong)
    li.append(img, main)
    ul.append(li)
    
}
function createDrinkCards(produto){

    let titleProduct = produto.title
    let categoryProduct = produto.category
    let priceProduct = produto.price

    let ul = document.querySelector(".product-list-drinks")
    let li = document.createElement("li")
    let img = document.createElement("img")
    let main = document.createElement("main")
    let h1 = document.createElement("h1")
    let h5 = document.createElement("h5")
    let strong = document.createElement("strong")

    li.classList.add("product")
    img.classList.add("product-img")
    main.classList.add("product-main")
    h1.classList.add("product-title")
    h5.classList.add("product-category")
    strong.classList.add("product-price")

    if(produto.image == undefined) {

        img.src = './img/products/no-img.svg'
    } else {
        img.src = produto.image
    }


    h1.innerText = titleProduct
    h5.innerText = categoryProduct
    strong = priceProduct


    main.append(h1, h5, strong)
    li.append(img, main)
    ul.append(li)
    
    
}
function createHygieneCards(produto){

    let titleProduct = produto.title
    let categoryProduct = produto.category
    let priceProduct = produto.price

    let ul = document.querySelector(".product-list-hygiene")
    let li = document.createElement("li")
    let img = document.createElement("img")
    let main = document.createElement("main")
    let h1 = document.createElement("h1")
    let h5 = document.createElement("h5")
    let strong = document.createElement("strong")

    li.classList.add("product")
    img.classList.add("product-img")
    main.classList.add("product-main")
    h1.classList.add("product-title")
    h5.classList.add("product-category")
    strong.classList.add("product-price")

    if(produto.image == undefined) {

        img.src = './img/products/no-img.svg'
    } else {
        img.src = produto.image
    }


    h1.innerText = titleProduct
    h5.innerText = categoryProduct
    strong = priceProduct


    main.append(h1, h5, strong)
    li.append(img, main)
    ul.append(li)
    
    
}


