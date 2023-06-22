<template>
  <div class="flex justify-center items-start h-screen pt-8">
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-7xl">
      <h2 class="text-center text-2xl font-bold mb-8">Listado de Pabellones</h2>


      <DataTable v-model:filters="filters" :value="this.pabellones" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"
        :globalFilterFields="['nombre']" tableStyle="min-width: 50rem"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}">
        <template #header>
          <div style="display: inline-flex; justify-content: start; width: 50%; flex-direction: row;">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText v-model="filters['global'].value" placeholder="Buscar" />
            </span>

          </div>
          <div style="display: inline-flex; justify-content: end; width: 50%; flex-direction: row;">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" @click="agregarPabellon">
              Agregar
            </button>

          </div>


        </template>
        <template #paginatorstart>
          <Button type="button" icon="pi pi-refresh" text />
        </template>
        <template #paginatorend>
          <Button type="button" icon="pi pi-download" text />
        </template>
        <Column field="nombre" header="Nombre del Pabellon" style="width: 25%"></Column>
        <Column field="descripcion" header="Piso" style="width: 25%"></Column>

      </DataTable>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import { FilterMatchMode } from 'primevue/api';
export default {
  data() {
    return {
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
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
        url: 'https://971d-34-69-177-245.ngrok-free.app/ListarPabellones',
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
    agregarPabellon() {
      this.$router.push("/newPabellones")
    },
  },
}
</script>

<style scoped>
.p-datatable >>> .p-datatable-header {
    background: white;
    color: white;
    border: 0;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
}
</style>