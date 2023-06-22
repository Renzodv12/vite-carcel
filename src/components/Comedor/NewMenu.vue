<template>
    <card>
      <template #content>
        <div class="card">
          <div class="flex justify-center items-start h-screen pt-8">
            <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-7xl">
              <h2 class="text-center text-2xl font-bold mb-8">Crear un Nuevo Menu del Dia</h2> 
              
              <div class="formGlobal">
                <div class="formGlobal1">
                    <div class="formContent">
                        <label for="Menu">Nombre del Menu: </label>
                        <InputText
                        type="text"
                        id="Menu"
                        class="formatInput"
                        v-model="Menu"
                        placeholder="Ingrese aqui el menu."
                        />

                    </div>

                    <div class="formContent">
                        <label for="Menu">Fecha del Menu: </label>
                        <InputText
                        type="text"
                        id="Menu"
                        class="formatInput"
                        v-model="Menu"
                        placeholder="Ingrese aqui la fecha del menu."
                        />

                    </div>
                </div>

                <div class="formGlobal1">
                    <div class="formContent2">
                        <label for="Comida">Comida del Menu  : </label>
                        <Textarea
                        type="text"
                        id="Comida"
                        class="formatTexarea"
                        v-model="Comida"
                        placeholder="Ingrese aqui la comida del menu."
                        rows="5" cols="30"
                        />

                    </div>
                    
                </div>

                <div class="formGlobal1">
                    <div class="formContent">
                        <label for="Hora_Inicio">Hora de Inicio del Menu  : </label>
                        <InputText
                        type="text"
                        id="Hora_Inicio"
                        class="formatInput"
                        v-model="Hora_Inicio"
                        placeholder="Ingrese aqui la hora de inicio del menu."
                        />

                    </div>

                    <div class="formContent">
                        <label for="Hora_Fin">Hora Final del Menu   : </label>
                        <InputText
                        type="text"
                        id="Hora_Fin"
                        class="formatInput"
                        v-model="Hora_Fin"
                        placeholder="Ingrese aqui la hora final del menu."
                        />

                    </div>
                </div>

                <div class="formButton">
                    <div class="formContent">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" @click="guardar">
                            Guardar
                        </button>

                    </div>
                    <div class="formContent">
                        <button class="bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" @click="cancelar">
                            Cancelar
                        </button>

                    </div>
                </div>

                
              </div>     
            
            </div>
          </div>
        </div>  
      </template>
    </card>
    
    
  </template>
 <script>
 import axios from 'axios'
 import { FilterMatchMode } from 'primevue/api';
 import { ref } from 'vue';

const Comida = ref('');
 
 export default {
   data() {
     return {
       filters: {
         global: { value: null, matchMode: FilterMatchMode.CONTAINS },
       },
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
 
     },
     cancelar() {
       this.$router.push("/Menu")
     },
   },
 } //bg-white rounded-lg shadow-lg p-8 w-full max-w-7xl
 </script>
  <style scoped>  
  .shadow-lg  {
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 55%), 0 4px 6px -4px rgb(0 0 0 / 34%);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    
}

    .formContent{ 
        display: flex;
        flex-direction: column;
        width: 30%;
    }

    .formContent2{ 
        display: flex;
        flex-direction: column;
        width: 80%;
    }

    
.formatInput {
    width: 100%;
}

.formGlobal1 {
    display: flex;
    justify-content: space-around;
    margin-top: 3%;
}

.formButton {
    display: flex;
    justify-content: space-around;
    margin-top: 3%;
    text-align: right;
}

.formGlobal {
    display: flex;
    flex-direction: column;
    
}

.formatTexarea {
    width: 100%;
    
}

  </style>
  