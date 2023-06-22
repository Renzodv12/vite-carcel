<template>
    <div class="flex justify-center items-start h-screen pt-8">
        <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl">
            <h2 class="text-center text-2xl font-bold mb-8">Nuevo Prisionero</h2>
            <div class="flex items-center justify-between mb-4">
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Nombre:</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Ingrese nombre..." v-model="searchTerm">
                </div>
                
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Apellido Materno:</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Ingrese apellido..." v-model="searchTerm">
                </div>
            </div>
            <div class="flex items-center justify-between mb-4">
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Apellido Paterno:</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Ingrese apellido..." v-model="searchTerm">
                </div>
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Fecha de Nacimiento:</label>
                    <div class="card flex justify-content-center">
                        <Calendar v-model="date" showIcon />
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between mb-4">
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Lugar de Nacimiento:</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Ingrese nombre..." v-model="searchTerm">
                </div>
                
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Genero:</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Ingrese apellido..." v-model="searchTerm">
                </div>
            </div>
            <div class="flex items-center justify-between mb-4">
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Nacionalidad:</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Ingrese nombre..." v-model="searchTerm">
                </div>
                
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Direccion:</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Ingrese apellido..." v-model="searchTerm">
                </div>
            </div>
            <div class="flex items-center justify-between mb-4">
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Telefono:</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Ingrese nombre..." v-model="searchTerm">
                </div>
                
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Estado Civil:</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Ingrese apellido..." v-model="searchTerm">
                </div>
            </div>
            <div class="flex items-center justify-between mb-4">
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Escolaridad:</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Ingrese nombre..." v-model="searchTerm">
                </div>
                
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Pabellon:</label>
                    <div class="card flex justify-content-center">
                        <Dropdown v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between mb-4">
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Cubiculo:</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Ingrese nombre..." v-model="searchTerm">
                </div>
                
                <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="pabellon-select" style="font-family: 'Montserrat', sans-serif; font-weight: 600;">Pertenencias:</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Ingrese apellido..." v-model="searchTerm">
                </div>
            </div>

            <button class="bg-blue-500 hover:bg-blue-600 text-white fontbold py-2 px-4 rounded" @click="agregarCeldas">
                    Agregar
            </button>

        </div>
    </div>
</template>
  
  
<script>
import axios from 'axios'


/**
 * const sql = require('mssql');

// Configuración de conexión a la base de datos
const config = {
  user: 'tu_usuario',
  password: 'tu_contraseña',
  server: 'tu_servidor',
  database: 'tu_base_de_datos',
};

// Función para ejecutar el stored procedure
async function ejecutarStoredProcedure() {
  try {
    // Crear una nueva conexión a la base de datos
    await sql.connect(config);

    // Definir los parámetros del stored procedure
    const params = {
      param1: 'valor_parametro_1',
      param2: 'valor_parametro_2',
      // ... otros parámetros
    };

    // Ejecutar el stored procedure
    const result = await sql.query`EXEC nombre_del_stored_procedure @param1 = ${params.param1}, @param2 = ${params.param2}`;

    // Obtener los resultados de la ejecución del stored procedure
    const output = result.recordsets[0];
    console.log(output);

    // Cerrar la conexión a la base de datos
    await sql.close();
  } catch (error) {
    console.error(error);
  }
}

// Llamar a la función para ejecutar el stored procedure
ejecutarStoredProcedure();

 */

export default {
    data() {
        return {
            pabellones: [],
            searchTerm: '',
            currentPage: 1,
            itemsPerPage: 10,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        }
    },
    async created() {
        try {
            const data = {

            };

            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://abbf-34-69-177-245.ngrok-free.app/ListarPabellones',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const response = await axios.request(config);
            console.log(response.data);

            this.pabellones = response.data;
            console.log(this.pabellones);
        } catch (error) {
            console.error(error);
        }
    },
    computed: {
        paginatedPabellones() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.filteredPabellones.slice(startIndex, endIndex);
        },
        filteredPabellones() {
            return this.pabellones.filter(pabellon =>
                pabellon.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
            )
        },
        totalPages() {
            return Math.ceil(this.filteredPabellones.length / this.itemsPerPage);
        },
    },
    methods: {
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }

        },
        agregarCeldas() {
            this.$router.push("/newCeldas")
        },
    },
}
</script>

<style>
    .w-1\/2 {
        margin-top: 10px;
    }
</style>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  