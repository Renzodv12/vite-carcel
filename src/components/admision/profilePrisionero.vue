<template>
    <div class="flex justify-center items-start h-screen pt-8">
        <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-7xl">
            <h2 class="text-center text-2xl font-bold mb-8">Perfil Prisionero</h2>
            <div class="flex items-center justify-between mb-4">
                <div class="w-1/2 mr-2">
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder="Buscar Prisionero" v-model="searchTerm">
                </div>
                <button class="bg-blue-500 hover:bg-blue-600 text-white fontbold py-2 px-4 rounded" @click="agregarCeldas">
                    Agregar
                </button>
            </div>
        </div>
    </div>
</template>
  
  
<script>
import axios from 'axios'

export default {
    data() {
        return {
            pabellones: [],
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  