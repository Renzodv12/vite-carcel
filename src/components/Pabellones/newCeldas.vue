


<template>
  <form ref="form" class="flex justify-center min-h-screen bg-gray-100">
    <div class="max-w-3xl w-full mt-20">
      <div class="bg-white shadow-md rounded-lg px-8 py-8">
        <h1 class="block text-gray-700 font-bold mb-6 text-center text-xl" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Registro de Celdas</h1>

        <div class="relative mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Seleccione Pabellón:</label>
          <select class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4" id="pabellon-select" name="pabellon" v-model="selectedPabellon" @change="getPisos" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">
            <option value="">Seleccione un pabellón</option>
            <option value="pabellon1">Pabellón 1</option>
              <option value="pabellon2">Pabellón 2</option>
              <option value="pabellon3">Pabellón 3</option>
           
          </select>
        </div>

        <div class="relative mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="piso-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Seleccione un Piso:</label>
          <select class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4" id="piso-select" name="piso" v-model="selectedPiso" @change="getCeldas"  style="font-family: 'Montserrat', sans-serif; font-weight: 600;">
            <option value="" >Seleccione un piso</option>
            <option value="piso1 ">Piso 1</option>
              <option value="piso2">Piso 2</option>
              <option value="piso3">Piso 3</option>
           
          </select>
        </div>

        <div class="flex items-center justify-center mt-20">
    <button class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline relative overflow-hidden btn-aceptar" @click.prevent="submitForm">
      <span class="absolute left-0 top-0 w-full h-full bg-blue-500 opacity-50 transition duration-300 hover:opacity-75"></span>
      <span class="relative z-10">Aceptar</span>
    </button>
    <button class="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-800 hover:to-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline relative overflow-hidden btn-cancel ml-6"  @click.prevent="clearForm" >
      <span class="absolute left-0 top-0 w-full h-full bg-pink-500 opacity-50 transition duration-300 hover:opacity-75"></span>
      <span class="relative z-10">Cancelar</span>
    </button>
    </div>
      </div>
    </div>
  </form>
</template>

<style>
/* Agregar estas reglas para la animación del botón */
.btn-aceptar{
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.btn-aceptar:hover {
  transform: scale(1.05);
  box-shadow: 0 0px 10px #2536ab;
  background: linear-gradient(to bottom, #48BB78, #8ab4f2);
  border: none;
  outline: none;
  cursor: pointer;
}

.btn-cancel{
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.btn-cancel:hover {
  transform: scale(1.05);
  box-shadow: 0 0px 10px #d51a33;
  background: linear-gradient(to bottom, #5e0000, #e31515);
  border: none;
  outline: none;
  cursor: pointer;
}


select {
/* Establecer las propiedades básicas del select */
appearance: none;
background-color: #f3f3f4;
border: solid 2px #e6e6e7;
border-radius: 4px;
color: #fff;
}

/* Establecer las propiedades del select cuando se hace hover */
select:hover {
background-color: #fff;

border-color: #182848;
box-shadow: 0 0 10px #0c337f;
cursor: pointer;
}

/* Establecer las propiedades del select cuando tiene focus */
select:focus {
background-color: #4b6cb7;
color: #fff;
border-color: #fff;
box-shadow: 0 0 10px #9bc1af;
outline: none;
}

/* Establecer las propiedades de los options */
select option {
background-color: #fff;
color: #333;

}






</style>

<script>
export default {
  data() {
    return {
      pabellones: [
        { id: 1, nombre: 'Pabellón 1' },
        { id: 2, nombre: 'Pabellón 2' },
        { id: 3, nombre: 'Pabellón 3' }
      ],
      pisos: [],
      selectedPabellon: null,
      selectedPiso: null,
    }
  },
  methods: {
    getPisos() {
      // Lógica para obtener los pisos del pabellón seleccionado
      // En este ejemplo, simplemente generamos algunos datos de ejemplo
      this.pisos = [
        { id: 1, nombre: 'Piso 1' },
        { id: 2, nombre: 'Piso 2' },
        { id: 3, nombre: 'Piso 3' }
      ];
      this.selectedPiso = null;
    },
   
    submitForm() {
      // Lógica para enviar el formulario
      if (!this.selectedPabellon || !this.selectedPiso) {
      alert('Por favor seleccione todos los campos');
      return;
      }
      const confirmed = confirm(`¿Está seguro de que desea registar el pabellon "${this.selectedPabellon} " en el piso " ${this.selectedPiso}?`);

          if (confirmed) {
          alert('La celda ha sido registrado correctamente');
          this.clearForm();
          }
  },
  clearForm() {
    this.clearForm();
  },
  clearForm() {
    this.selectedPabellon = '';
    this.selectedPiso = '';
   }
  } 
}
</script>