const ul = (data) => {

  let tags=""
  data.map((ele) => {
    // let title = document.createElement("p")
    // title.innerHTML = ele.title

    // let images = document.createElement("img")
    // images.src = ele.thumbnail
    tags+= `
          
         <div class="items">
        <img src=${ele.thumbnail}>
        <h1>${ele.title}</h1>
        
        <p>${ele.rating}</p>
        </div>`
        
        

  })
  document.getElementById("box").innerHTML= tags

}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => ul(data.products))


