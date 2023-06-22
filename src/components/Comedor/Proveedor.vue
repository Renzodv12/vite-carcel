<template>
    <card>
      <template #content>
        <div class="card">
          <div class="flex justify-center items-start h-screen pt-8">
            <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-7xl">
              <h2 class="text-center text-2xl font-bold mb-8">Listado de Proveedores</h2>
              <div class="flex items-center justify-between mb-4">
                <div class="w-1/2 mr-2">
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="search" type="text" placeholder="Buscar menu" v-model="searchTerm">
                </div>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" @click="agregarMenu">
                  Agregar
                </button>
              </div>
              <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-4 py-2">Menu</th>
              <th class="px-4 py-2">Fecha del Menu</th>
              <th class="px-4 py-2">Turno</th>
              <th class="px-4 py-2">Comida</th>
              <th class="px-4 py-2">Hora Inicio</th>
              <th class="px-4 py-2">Hora Fin</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="menu in paginatedMenu" :key="menu.id">
              <td class="border px-4 py-2 text-center">{{ menu.Menu }}</td>
              <td class="border px-4 py-2 text-center">{{ formatDate(menu.Menu_del_dia) }}</td>
              <td class="border px-4 py-2 text-center">{{ menu.Turno }}</td>
              <td class="border px-4 py-2 text-center">{{ menu.Comida }}</td>
              <td class="border px-4 py-2 text-center">{{ formatTime(menu.Hora_Inicio) }}</td>
              <td class="border px-4 py-2 text-center">{{ formatTime(menu.Hora_Fin) }}</td>
            </tr>
          </tbody>
        </table>
            
            </div>
          </div>
        </div>  
      </template>
    </card>
    
    
  </template>
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        menus: [],
        searchTerm: '',
        currentPage: 1,
        itemsPerPage: 10,
      }
    },
    async created() {
      try {
        const data = {
  
        };
  
        const config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://971d-34-69-177-245.ngrok-free.app/ListarMenuDia',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
  
        const response = await axios.request(config);
        console.log(response.data);
  
        this.menus = response.data;
        console.log(this.menus);
      } catch (error) {
        console.error(error);
      }
    },
    computed: {
      paginatedMenu() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.filteredMenu.slice(startIndex, endIndex);
      },
      filteredMenu() {
        return this.menus.filter(menu =>
          menu.Menu.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      },
      totalPages() {
        return Math.ceil(this.filteredMenu.length / this.itemsPerPage);
      },
    },
    methods: {
      // Función para formatear la fecha del menú
      formatDate(dateString) {
          const fechaISO = dateString;
          const fecha = new Date(fechaISO);
  
          const dia = fecha.getUTCDate().toString().padStart(2, '0');
          const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, '0');
          const anio = fecha.getUTCFullYear().toString();
  
          return `${dia}-${mes}-${anio}`;
      },
  
      // Función para formatear la hora
      formatTime(timeString) {
          const timeParts = timeString.split(':');
          const hour = timeParts[0];
          const minute = timeParts[1];
          return `${hour}:${minute}`;
      },
  
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
  
      },/*
      agregarMenu() {
        this.$router.push("/newMenu")
      },*/
    },
  } //bg-white rounded-lg shadow-lg p-8 w-full max-w-7xl
  </script>
  
  <style scoped>
    .shadow-lg  {
      --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 55%), 0 4px 6px -4px rgb(0 0 0 / 34%);
      --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      
  }
  
  
  </style>