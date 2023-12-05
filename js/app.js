const banderas = document.getElementById('banderas');
//consumo a nuestra api
document.addEventListener('DOMContentLoaded', e =>{
  fetchData()
})

const fetchData = async () => {
 try {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json()
 
  pintar(data) // creamos una funcion 
  formularioCliente(data)
  filtros(data)

 } catch (e) {
      console.log(e)                   
 }

}

const pintar = (data) => {
  let element = ''; // creamos una variable vacia

  data.forEach(item => {
    element +=`
    <article class="card">
    <img src="${item.flags.svg}" class="img-fluid" alt="img-p">
     <div class="card-content">
      <h3>${item.name.common}</h3>
      <p>
        <b>Population: </b>
        ${item.population}
      </p>
      <p>
        <b>Capital: </b>
        ${item.capital}
      </p>
      <p>
        <b>Region: </b>
        ${item.region}
      </p>

      <p>
      <a href="pais.html?name=${item.name.common}">Mas info</a>
      </p>

     </div>
     </article>
    `
 banderas.innerHTML = element;   
    
  });
}