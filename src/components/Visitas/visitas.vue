<template>
  <div class="container mt-4">
    <h2>Formulario de Visita</h2>
    <form @submit.prevent="guardarVisita">
      <div class="form-group">
        <label for="ci">CI:</label>
        <input type="text" class="form-control" id="ci" v-model="visita.ci" required>
      </div>
      <div class="form-group">
        <label for="nombre">Nombre Completo:</label>
        <input type="text" class="form-control" id="nombre" v-model="visita.nombre" required>
      </div>
      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" class="form-control" id="fechaNacimiento" v-model="visita.fechaNacimiento" required>
      </div>
      <div class="form-group">
        <label for="direccion">Dirección:</label>
        <input type="text" class="form-control" id="direccion" v-model="visita.direccion" required>
      </div>
      <div class="form-group">
        <label for="prisionero">Prisionero a Visitar:</label>
        <select class="form-control" id="prisionero" v-model="visita.prisionero" required>
          <option v-for="prisionero in prisioneros" :key="prisionero.id" :value="prisionero.nombre">{{ prisionero.nombre
          }}</option>
        </select>
      </div>
      <!-- <button type="submit" class="btn btn-primary">Guardar</button> -->
      <button class="btn btn-primary">Guardar</button>
      <button class="btn btn-secondary ml-2" @click="cancelar">Cancelar</button>
    </form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      visita: {
        ci: '',
        nombre: '',
        fechaNacimiento: '',
        direccion: '',
        prisionero: ''
      },
      prisioneros: [
        { id: 1, nombre: 'Prisionero 1' },
        { id: 2, nombre: 'Prisionero 2' },
        { id: 3, nombre: 'Prisionero 3' },
        // Agrega más prisioneros aquí según sea necesario
      ]
    };
  },
  methods: {
    guardarVisita() {
      // Aquí puedes simular el guardado de los datos
      // Puedes mostrar una notificación o realizar otras acciones necesarias
      console.log('Guardando visita:', this.visita);
      this.resetearFormulario();
    },
    cancelar() {
      this.resetearFormulario();
    },
    resetearFormulario() {
      this.visita = {
        ci: '',
        nombre: '',
        fechaNacimiento: '',
        direccion: '',
        prisionero: ''
      };
    }
  }
};
</script>
  
<style>
/* Agrega estilos personalizados aquí si es necesario */
</style>
  