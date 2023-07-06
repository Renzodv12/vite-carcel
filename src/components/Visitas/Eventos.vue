<template>
  <div class="container mt-4">
    <h2>Registro de Visitantes</h2>
    <form @submit.prevent="registrarVisita">
      <div class="form-group">
        <label for="prisionero">Prisionero a Visitar:</label>
        <select class="form-control" id="prisionero" v-model="visita.prisionero" required @change="actualizarVisitante">
          <option v-for="prisionero in prisioneros" :key="prisionero.id" :value="prisionero.id">{{ prisionero.nombre }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="visitante">Visitante:</label>
        <select class="form-control" id="visitante" v-model="visita.visitante" disabled>
          <option v-for="visitante in obtenerVisitantesPrisionero(visita.prisionero)" :key="visitante.ci"
            :value="visitante.ci">{{ visitante.nombre }}</option>
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
        { id: 1, nombre: 'Prisionero 1', visitante: '1234567' },
        { id: 2, nombre: 'Prisionero 2', visitante: '9876543' },
        { id: 3, nombre: 'Prisionero 3', visitante: '5678912' },
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
      // Verificar si se ha seleccionado un visitante y un prisionero antes de registrar la visita
      if (this.visita.visitante && this.visita.prisionero) {
        // Aquí puedes simular el envío de los datos
        // Puedes mostrar una notificación o realizar otras acciones necesarias
        console.log('Registrando visita:', this.visita);
        this.resetearFormulario();
      } else {
        alert('Debe seleccionar un visitante y un prisionero.');
      }
    },
    cancelar() {
      this.resetearFormulario();
    },
    actualizarVisitante() {
      const prisioneroSeleccionado = this.prisioneros.find(prisionero => prisionero.id === this.visita.prisionero);
      if (prisioneroSeleccionado) {
        this.visita.visitante = prisioneroSeleccionado.visitante;
      }
    },
    obtenerVisitantesPrisionero(prisioneroId) {
      const prisionero = this.prisioneros.find(prisionero => prisionero.id === prisioneroId);
      if (prisionero) {
        const visitanteAsociado = this.visitantes.find(visitante => visitante.ci === prisionero.visitante);
        return visitanteAsociado ? [visitanteAsociado] : [];
      }
      return [];
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
