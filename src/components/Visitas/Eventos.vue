<template>
  <div class="container mt-4">
    <h2>Registro de Visitantes</h2>
    <form @submit.prevent="registrarVisita">
      <div class="form-group">
        <label for="prisionero">Prisionero a Visitar:</label>
        <select class="form-control" id="prisionero" v-model="visita.prisionero" required>
          <option v-for="prisionero in prisioneros" :key="prisionero.id" :value="prisionero.id">{{ prisionero.nombre }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="visitante">Visitante:</label>
        <select class="form-control" id="visitante" v-model="visita.visitante" required>
          <option v-for="visitante in visitantes" :key="visitante.ci" :value="visitante.ci">{{ visitante.ci }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="motivo">Motivo de la Visita:</label>
        <input type="text" class="form-control" id="motivo" v-model="visita.motivo" required>
      </div>
      <div class="form-group">
        <label for="fechaEntrada">Fecha y Hora de Entrada:</label>
        <input type="datetime-local" class="form-control" id="fechaEntrada" v-model="visita.fechaEntrada" required>
      </div>
      <div class="form-group">
        <label for="fechaSalida">Fecha y Hora de Salida:</label>
        <input type="datetime-local" class="form-control" id="fechaSalida" v-model="visita.fechaSalida" required>
      </div>
      <!-- <button type="submit" class="btn btn-primary">Aceptar</button> -->
      <button class="btn btn-primary">Aceptar</button>
      <button class="btn btn-secondary ml-2" @click="cancelar">Cancelar</button>
    </form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      visita: {
        prisionero: '',
        visitante: '',
        motivo: '',
        fechaEntrada: '',
        fechaSalida: ''
      },
      prisioneros: [
        { id: 1, nombre: 'Prisionero 1' },
        { id: 2, nombre: 'Prisionero 2' },
        { id: 3, nombre: 'Prisionero 3' },
        // Agrega más prisioneros aquí según sea necesario
      ],
      visitantes: [
        { ci: '1234567', nombre: 'Visitante 1' },
        { ci: '9876543', nombre: 'Visitante 2' },
        { ci: '5678912', nombre: 'Visitante 3' },
        // Agrega más visitantes aquí según sea necesario
      ]
    };
  },
  methods: {
    registrarVisita() {
      // Aquí puedes simular el envío de los datos
      // Puedes mostrar una notificación o realizar otras acciones necesarias
      console.log('Registrando visita:', this.visita);
      this.resetearFormulario();
    },
    cancelar() {
      this.resetearFormulario();
    },
    resetearFormulario() {
      this.visita = {
        prisionero: '',
        visitante: '',
        motivo: '',
        fechaEntrada: '',
        fechaSalida: ''
      };
    }
  }
};
</script>
  
<style>
/* Agrega estilos personalizados aquí si es necesario */
</style>
  