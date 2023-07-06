<template>
    <div class="container mt-4">
      <h2>Reporte de Visitantes</h2>
      <div class="form-group">
        <label for="filtroPrisionero">Filtrar por Prisionero:</label>
        <select class="form-control" id="filtroPrisionero" v-model="filtro.prisionero">
          <option value="">Todos</option>
          <option v-for="prisionero in prisioneros" :key="prisionero.id" :value="prisionero.id">{{ prisionero.nombre }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="filtroVisitante">Filtrar por Visitante:</label>
        <select class="form-control" id="filtroVisitante" v-model="filtro.visitante">
          <option value="">Todos</option>
          <option v-for="visitante in visitantes" :key="visitante.ci" :value="visitante.ci">{{ visitante.nombre }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="filtroMotivo">Filtrar por Motivo:</label>
        <input type="text" class="form-control" id="filtroMotivo" v-model="filtro.motivo">
      </div>
      <div class="form-group">
        <label for="filtroFechaDesde">Filtrar por Fecha Desde:</label>
        <input type="datetime-local" class="form-control" id="filtroFechaDesde" v-model="filtro.fechaDesde">
      </div>
      <div class="form-group">
        <label for="filtroFechaHasta">Filtrar por Fecha Hasta:</label>
        <input type="datetime-local" class="form-control" id="filtroFechaHasta" v-model="filtro.fechaHasta">
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Prisionero</th>
            <th>Visitante</th>
            <th>Motivo</th>
            <th>Fecha y Hora de Entrada</th>
            <th>Fecha y Hora de Salida</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="visita in visitasFiltradas" :key="visita.id">
            <td>{{ obtenerNombrePrisionero(visita.prisionero) }}</td>
            <td>{{ obtenerNombreVisitante(visita.visitante) }}</td>
            <td>{{ visita.motivo }}</td>
            <td>{{ visita.fechaEntrada }}</td>
            <td>{{ visita.fechaSalida }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visitas: [
          { id: 1, prisionero: 1, visitante: '1234567', motivo: 'Visita familiar', fechaEntrada: '2023-06-21T10:00', fechaSalida: '2023-06-21T12:00' },
          { id: 2, prisionero: 2, visitante: '9876543', motivo: 'Visita legal', fechaEntrada: '2023-06-21T13:00', fechaSalida: '2023-06-21T15:00' },
          { id: 3, prisionero: 3, visitante: '5678912', motivo: 'Visita religiosa', fechaEntrada: '2023-06-21T16:00', fechaSalida: '2023-06-21T18:00' },
          // Agrega más visitas aquí según sea necesario
        ],
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
        ],
        filtro: {
          prisionero: '',
          visitante: '',
          motivo: '',
          fechaDesde: '',
          fechaHasta: ''
        }
      };
    },
    computed: {
      visitasFiltradas() {
        return this.visitas.filter(visita => {
          const cumpleFiltroPrisionero = !this.filtro.prisionero || visita.prisionero.toString() === this.filtro.prisionero.toString();
          const cumpleFiltroVisitante = !this.filtro.visitante || visita.visitante === this.filtro.visitante;
          const cumpleFiltroMotivo = !this.filtro.motivo || visita.motivo.toLowerCase().includes(this.filtro.motivo.toLowerCase());
          const cumpleFiltroFechaDesde = !this.filtro.fechaDesde || visita.fechaEntrada >= this.filtro.fechaDesde;
          const cumpleFiltroFechaHasta = !this.filtro.fechaHasta || visita.fechaEntrada <= this.filtro.fechaHasta;
          return cumpleFiltroPrisionero && cumpleFiltroVisitante && cumpleFiltroMotivo && cumpleFiltroFechaDesde && cumpleFiltroFechaHasta;
        });
      }
    },
    methods: {
      obtenerNombrePrisionero(prisioneroId) {
        const prisionero = this.prisioneros.find(p => p.id === prisioneroId);
        return prisionero ? prisionero.nombre : '';
      },
      obtenerNombreVisitante(ciVisitante) {
        const visitante = this.visitantes.find(v => v.ci === ciVisitante);
        return visitante ? visitante.nombre : '';
      }
    }
  };
  </script>
  
  <style>
  /* Agrega estilos personalizados aquí si es necesario */
  </style>
  