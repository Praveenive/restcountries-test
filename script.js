let container = document.createElement("div");
container.setAttribute("class","container");
let row = document.createElement("div");
row.setAttribute("class" ,"row");
container.append(row);


var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));


function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=
        `<div class="col-lg-4">
         <div class="card">
   <h1 id="title" class="text-center">${data1[i].name}</h1>
   <img class="card-img-top"  src="${data1[i].flag}"  alt="card image cap"></img>
  <div class="card-body">
  <h5 class="card-title">
    <p class="card-text">Capital:${data1[i].capital}
     <p>Region:${data1[i].region}</p>
     <p>Country Code: ${data1[i].alpha3Code}</p></p>
     <a href="https://openweathermap.org/" class="btn btn-primary">Click for Whether</a>
  </h5></div>
</div></div>`
    }
    
    document.body.append(container);
}

