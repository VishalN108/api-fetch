const ul = (data) => {
  data.map((ele) => {
    let title = document.createElement("p")
    title.innerHTML = ele.title

    document.getElementById("box").append(title)
  })
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => ul(data.products));


