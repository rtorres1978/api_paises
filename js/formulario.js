const formulario = document.getElementById('formulario');
const inputFormulario = document.getElementById('input-formulario');

const formularioCliente = (data) => {
 formulario.addEventListener('keyup', async(e) => {
      e.preventDefault()

      const letraclient = inputFormulario.value.toLowerCase()
//       console.log(letraclient)
      const arrayFiltrado = data.filter(item => {
            const letraApi = item.name.common.toLowerCase()
         if(letraApi.indexOf(letraclient) !== -1){
           return item
         }   
      })
      pintar(arrayFiltrado)
 })
}