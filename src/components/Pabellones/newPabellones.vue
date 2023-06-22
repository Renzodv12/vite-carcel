


<template>
  <form ref="form" class="flex justify-center min-h-screen bg-gray-100 form-border">
    <div class="max-w-3xl w-full mt-20">
      <div class="bg-white shadow-md rounded-lg px-8 py-8">
        <h1 class="block text-gray-700 font-bold mb-6 text-center text-xl"
          style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Registro de Pabellones</h1>
        <div class="relative">
          <div class="form-input flex flex-col mb-8">
            <label for="nameInput" class="font-bold mb-2 text-gray-700">Nombre del Pabellón:</label>
            <input id="nameInput" name="name" type="text" v-model="name"
              class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              :placeholder="showLabelName ? '' : 'Ingrese el nombre del pabellón'" @focus="showLabelName = true"
              @blur="showLabelName = !!$event.target.value">
          </div>
        </div>
        <div class="relative">
          <div class="form-input flex flex-col">
            <label for="descriptionInput" class="font-bold mb-2 text-gray-700">Descripción:</label>
            <input id="descriptionInput" name="description" type="text" v-model="description"
              class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              :placeholder="showLabelDesc ? '' : 'Ingrese la descripción del pabellón'" @focus="showLabelDesc = true"
              @blur="showLabelDesc = !!$event.target.value">
          </div>
        </div>
        <div class="flex items-center justify-center mt-14">
          <button
            class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline relative overflow-hidden btn-add"
            @click.prevent="submitForm">
            <span
              class="absolute left-0 top-0 w-full h-full bg-blue-500 opacity-50 transition duration-300 hover:opacity-75"></span>
            <span class="relative z-10">Agregar</span>
          </button>
          <button
            class="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-800 hover:to-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline relative overflow-hidden btn-cancelar ml-4"
            @click.prevent="cancelForm">
            <span
              class="absolute left-0 top-0 w-full h-full bg-pink-500 opacity-50 transition duration-300 hover:opacity-75"></span>
            <span class="relative z-10">Cancelar</span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<style>
/* Agregar estas reglas para la animación del botón */
.btn-add {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.btn-add:hover {
  transform: scale(1.05);
  box-shadow: 0 0px 10px #769deb;
  background: linear-gradient(to left, #dad299, #b0dab9);
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;

}

button i::before {
  font-family: "Font Awesome 5 Free";
  content: "\f067";
  color: #333;
}

.btn-cancelar {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.btn-cancelar:hover {
  transform: scale(1.05);
  box-shadow: 0 0px 10px #e74c3c;
  background: linear-gradient(to left, #870000, #190a05);
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
}

/* Reglas para el efecto de transición */
.form-input {
  background-color: white;
  font-family: 'Montserrat', sans-serif;
  border: none;
  outline: none;

}

.form-input input:hover {
  box-shadow: 0 0 8px #8ca6db;
  color: #1d1b1b;
}

/* Agrega esta regla para el efecto de transición en el input */
.form-input input {
  transition: box-shadow 0.3s ease-in-out;
}

.form-input input:focus {
  box-shadow: 0 0 12px #3a7bd5;

}
</style>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      description: '',
      showLabel: false,
      showLabelDespb: false
    }
  },
  methods: {
    submitForm() {
      if (this.name.trim() === '' || this.description.trim() === '') {
        alert('Por favor, complete todos los campos');
        return;
      }

      const confirmed = confirm(`¿Está seguro de que desea registrar el pabellón "${this.name}" con la descripción "${this.description}"?`);

      if (confirmed) {
        alert('El pabellón ha sido registrado correctamente');
        this.clearForm();
      }
    },
    cancelForm() {
      this.clearForm();
    },
    clearForm() {
      this.name = '';
      this.description = '';
    }
  },
  mounted() {


    let data = JSON.stringify({});

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3001/ListarPabellones',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });




  }
}
</script>


