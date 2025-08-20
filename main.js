async function fetchProducts() {
    try {
        let res = await fetch('https://fakestoreapi.com/products')
        return await res.json();
    }
    catch {
        console.error("Fetching Not Successful");

    }
}



function createProducts({ id, title, price, description, category, image }){
    return `
    <div class = "inner">
                    <p class = "id">id : ${id} </p>
                    <h2>title : ${title}</h2>
                    <p class = "price">price : ${price}</p>
                    <p class= "des">description:${description}</p>
                    <p class = "cat">category:${category}</p>
                    <img src="${image}" width="100"/>
                </div>
    `        

}

function renderProducts(product){
        
   output = product.map(createProducts).join("")
  
      document.getElementById("main").innerHTML = output
}



async function init() {
    let  data = await fetchProducts()
    renderProducts(data)
  
    
}


init()


