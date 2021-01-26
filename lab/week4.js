// Week 4 lab – Similar to last week's lab – but without the help!

// The provided code now goes out to the Internet to get our products data.
// You can visit the provided URL – https://kiei451.com/api/products.json –
// in Chrome to see what the data looks like.

// Write a loop to iterate through the product data; each iteration of the loop
// should call a function called renderProduct, which accepts an object representing
// a single product object as input, and appends HTML to an existing element on the page
// with the class "products". You can use the existing HTML in the "products" element
// as a template, deleting it when you're finished.

// 🔥 define your renderProduct function here
let renderProduct = function(products){
  for (let i = 0; i < products.length; i++) { 

    let outputElement = document.querySelector('.products')
    outputElement.insertAdjacentHTML('beforeend', ` 
      <div class="p-4 w-full md:w-1/2 lg:w-1/3">
      <div class="border h-full p-4 flex flex-col">
        <h2 class="text-lg font-bold mb-4">${products[i].name}</h2>
        <div class="mb-4"><img src="${products[i].image}">
        </div>
        <div class="mb-4 text-gray-900">
        ${products[i].description}
        </div>
        <div class="mt-auto text-purple-500 text-2xl">${products[i].price}</div>
      </div>
    </div>
    `)
    // console.log(`remember to buy ${burger[i]}`) 
  }

}



async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/products.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.log(json)
  
  // 🔥 start here: write code to loop through the products; each
  // iteration of the loop should call your renderProduct function
  // make it work first; then extract to the separate renderProduct
  // function after it's 100% working without it
  renderProduct(json.products)


  
}

window.addEventListener('DOMContentLoaded', pageLoaded)