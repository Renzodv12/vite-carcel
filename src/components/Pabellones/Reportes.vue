<template>
  <div class="flex justify-center items-center h-screen relative">
    <div class="w-full max-w-7xl mt-10 absolute top-0 inset-x-0 mx-auto">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-center text-2xl font-bold mb-8">Listado Poblacional</h2>
        <form @submit.prevent="submitForm" class="mt-8">
          <table class="table-auto border-collapse w-full text-center">
            <thead class="bg-gray-200">
              <tr>
                <th class="px-4 py-2 border font-medium text-lg font-semibold">Pabellones</th>
                <th class="px-4 py-2 border font-medium text-lg font-semibold">Total de personas por pabellón</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(registro, index) in registros" :key="index">
                <td class="px-4 py-2 border font-light">{{ registro.pabellon }}</td>
                <td class="px-4 py-2 border font-light">{{ registro.total }}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-between mt-8">
            <div>
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Guardar</button>
            </div>
            <div>
              <label class="font-medium text-lg">Total de Personas:</label>
              <input type="number" :value="totalPersonas" class="w-24 ml-2" disabled>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registros: [
        { pabellon: "Pabellón 1", total: 10 },
        { pabellon: "Pabellón 2", total: 10 },
        { pabellon: "Pabellón 3", total: 10 },
        { pabellon: "Pabellón 4", total: 10 }
      ]
    };
  },
  computed: {
    totalPersonas() {
      return this.registros.reduce((total, registro) => {
        return total + registro.cantidadPersonas;
      }, 0);
    }
  },
  methods: {
    submitForm() {
      // Aquí puedes agregar la lógica para enviar los datos del formulario
      console.log(this.registros);
    }
  }
};
</script>