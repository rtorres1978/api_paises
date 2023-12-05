const banderas = document.getElementById("banderas");
const query = new URLSearchParams(window.location.search);
const params = query.get('name');

console.log(params)

document.addEventListener("DOMContentLoaded", e => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    const filtroData = data.filter(item => item.name.common === params)
    console.log(filtroData )

    pintar(filtroData); // creamos una funcion
   
  } catch (e) {
    console.log(e);
  }
};

const pintar = data => {
  let element = ""; // creamos una variable vacia

  data.forEach((item) => {
    element += `
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
                            </div>
                            </article>
                           `;
    banderas.innerHTML = element;
  });
};
