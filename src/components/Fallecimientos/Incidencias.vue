<template>
    <div class="flex justify-center mt-20">
      <div class="bg-white p-6 rounded-lg shadow-lg w-2/3 mx-auto" :class="{ 'opacity-50': registrado }">
        <h2 class="text-xl font-bold mb-4">Registro de Fallecimientos </h2>
        <div v-if="paso === 1">
          <!-- Paso 1: Formulario de registro -->
          <form>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="pabellon">
                Pabellón
              </label>
              <select class="form-select block w-full mt-1" id="pabellon" v-model="pabellon">
                <option value="">Seleccione un pabellón</option>
                <option value="pabellon1">Pabellón 1</option>
                <option value="pabellon2">Pabellón 2</option>
                <option value="pabellon3">Pabellón 3</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="piso">
                Piso
              </label>
              <select class="form-select block w-full mt-1" id="piso" v-model="piso">
                <option value="">Seleccione un piso</option>
                <option value="piso1">Piso 1</option>
                <option value="piso2">Piso 2</option>
                <option value="piso3">Piso 3</option>
              </select>
            </div>
            <button class="bg-gradient-to-r from-emerald-500 to-sky-400 hover:to-emerald-500 text-white font-bold py-2 px-4 rounded" type="button" @click="siguiente">
              Siguiente
            </button>
          </form>
        </div>
        <div v-else-if="paso === 2">
          <!-- Paso 2: Tabla de registro -->
          <table class="table-auto w-full">
            <thead>
              <tr>
                <th class="px-4 py-2">Nombre</th>
                <th class="px-4 py-2">Apellido</th>
                <th class="px-4 py-2">Presente</th>
                <th class="px-4 py-2">Ausente</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(persona, index) in personas" :key="index">
                <td class="border px-4 py-2">{{ persona.nombre }}</td>
                <td class="border px-4 py-2">{{ persona.apellido }}</td>
                <td class="border px-4 py-2"><input type="checkbox" checked style="display:block; margin: 0 auto; text-align:center;" v-model="persona.presente" true-value="true" false-value="false"></td>
                <td class="border px-4 py-2"><input type="checkbox" checked style="display:block; margin: 0 auto; text-align:center;" v-model="persona.presente" true-value="false" false-value="true"></td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-between mt-4">
            <button class="bg-gradient-to-r from-red-500 to-yellow-400 hover:to-red-500 text-white font-bold py-2 px-4 rounded" type="button" @click="anterior">
                Atrás
          </button>
          <button class="bg-gradient-to-r from-teal-600 to-yellow-500 hover:to-teal-600 text-white font-bold py-2 px-4 rounded" type="button" @click="confirmar">
              Confirmar
            </button>
            <div>
                  <label class="fecha-label text-black font-medium font-montserrat">Fecha:</label>
                  {{  fechaActual  }}
              </div>
              
                <div>
                  <label class="hora-label text-black font-medium font-montserrat">Hora:</label>
                  {{ horaActual }}
              </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    <style>
        /* Estilos para los checkboxes */


input[type="checkbox"] {
  --primary-color: #189682;
  --secondary-color: #fff;
  box-shadow: 0 0 10px white;
  /* checkbox */
  --checkbox-diameter: 25px;
  --checkbox-border-radius: 5px;
  --checkbox-border-color: black;
  --checkbox-border-width: 3px;
  --checkbox-border-style: solid;
  /* checkmark */
  --checkmark-size: 1.7;
}
input[type="checkbox"]:hover  {
  --primary-color:  #fff;
  --secondary-color: #70ef8b;

  box-shadow: 0 0 10px #86f1d1;

  
}


input[type="checkbox"],
input[type="checkbox"]*, 
input[type="checkbox"]*::before, 
input[type="checkbox"] *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: var(--checkbox-diameter);
  height: var(--checkbox-diameter);
  border-radius: var(--checkbox-border-radius);
  background: var(--secondary-color);
  border: var(--checkbox-border-width) var(--checkbox-border-style) var(--checkbox-border-color);
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
}

input[type="checkbox"]::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
  box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
  border-radius: inherit;
  opacity: 0;
  -webkit-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  -o-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
}
input[type="checkbox"]::before {
  top: 40%;
  left: 50%;
  content: "";
  position: absolute;
  width: 4px;
  height: 7px;
  border-right: 2px solid var(--secondary-color);
  border-bottom: 2px solid var(--secondary-color);
  -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
  -ms-transform: translate(-50%, -50%) rotate(45deg) scale(0);
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
  opacity: 0;
  -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),opacity 0.1s;
  -o-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),opacity 0.1s;
  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),opacity 0.1s;
}

/* actions */

input[type="checkbox"]:hover {
  border-color: var(--primary-color);
}

input[type="checkbox"]:checked {
  background: var(--primary-color);
  border-color: transparent;
}

input[type="checkbox"]:checked::before {
  opacity: 1;
  -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  -ms-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  -o-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
}

input[type="checkbox"]:active:not(:checked)::after {
  -webkit-transition: none;
  -o-transition: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  transition: none;
  opacity: 1;
}
    </style>


  <script>
  export default {
    data() {
      return {
        paso: 1,
        pabellon: '',
        piso: '',
        fechaActual: "",
        horaActual: "",
        personas: [
          { nombre: 'Juan', apellido: 'Pérez', presente: false },
          { nombre: 'María', apellido: 'Gómez', presente: true },
          { nombre: 'Pedro', apellido: 'Rodríguez', presente: false }
        ],
        registrado: false // variable para controlar si se ha registrado la asistencia
      }
    },
    methods: {
      siguiente() {
        if (this.pabellon && this.piso) {
          this.paso = 2;
        } else {
          alert('Debe seleccionar un pabellón y una celda');
        }
      },
      anterior() {
        this.paso = 1;
      },
      confirmar() {
  // Aquí puedes enviar los datos a un servidor o hacer lo que necesites con ellos
      const fechaActual = new Date();
      const horaActual = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`;
      console.log(`Asistencias confirmadas a las ${horaActual}`);
     this.actualizarHoraActual(); // llamamos a la función para actualizar la hora actual
     this.registrado = true; // cambia el valor de la variable registrado a true
},
        actualizarHoraActual() {
        const fecha = new Date();
        const hora = fecha.getHours();
        const minuto = fecha.getMinutes();
        const segundo = fecha.getSeconds();
        this.horaActual = hora + ':' + minuto + ':' + segundo;
         }
  },
       mounted() {
        // llamamos a la función cada segundo para actualizar la hora en tiempo real
        setInterval(() => {
      const fecha = new Date();
      const hora = fecha.getHours().toString().padStart(2, "0");
      const minuto = fecha.getMinutes().toString().padStart(2, "0");
      const segundo = fecha.getSeconds().toString().padStart(2, "0");
      this.horaActual = `${hora}:${minuto}:${segundo}`;
    }, 1000);
         // Obtener la fecha actual
    const now = new Date();
    const dia = now.getDate();
    const mes = now.getMonth() + 1;
    const anio = now.getFullYear();
    this.fechaActual = `${dia}/${mes}/${anio}`;
  },
};
  </script>