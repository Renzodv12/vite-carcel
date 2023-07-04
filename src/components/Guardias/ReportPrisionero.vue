<template>
    <div class="container mt-5">
        <h1 class="mb-4">Asignaciones de Trabajo Penitenciario</h1>
        <div class="filters">
            <div class="form-group">
                <label for="filtroReclusos">Filtrar por Reclusos:</label>
                <select class="form-control" id="filtroReclusos" v-model="filtroReclusos">
                    <option value="">Todos los reclusos</option>
                    <option v-for="recluso in reclusos" :value="recluso.id" :key="recluso.id">
                        {{ recluso.nombre }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="filtroTrabajos">Filtrar por Trabajos:</label>
                <select class="form-control" id="filtroTrabajos" v-model="filtroTrabajos">
                    <option value="">Todos los trabajos</option>
                    <option v-for="trabajo in trabajos" :value="trabajo.id" :key="trabajo.id">
                        {{ trabajo.nombre }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="filtroDias">Filtrar por Días Trabajados:</label>
                <select class="form-control" id="filtroDias" v-model="filtroDias">
                    <option value="">Todos los días</option>
                    <option v-for="dia in dias" :value="dia" :key="dia">
                        {{ dia }}
                    </option>
                </select>
            </div>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Recluso</th>
                    <th>Trabajo</th>
                    <th>Días Trabajados</th>
                    <th>Hora Desde</th>
                    <th>Hora Hasta</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="asignacion in asignacionesFiltradas" :key="asignacion.id">
                    <td>{{ asignacion.id }}</td>
                    <td>{{ getReclusoNombre(asignacion.reclusoId) }}</td>
                    <td>{{ getTrabajoNombre(asignacion.trabajoId) }}</td>
                    <td>{{ asignacion.dias.join(', ') }}</td>
                    <td>{{ asignacion.horaDesde }}</td>
                    <td>{{ asignacion.horaHasta }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            reclusos: [
                { id: 1, nombre: 'Recluso 1' },
                { id: 2, nombre: 'Recluso 2' },
                { id: 3, nombre: 'Recluso 3' },
                { id: 4, nombre: 'Recluso 4' },
                { id: 5, nombre: 'Recluso 5' }
            ],
            trabajos: [
                { id: 1, nombre: 'Trabajo 1' },
                { id: 2, nombre: 'Trabajo 2' },
                { id: 3, nombre: 'Trabajo 3' },
                { id: 4, nombre: 'Trabajo 4' },
                { id: 5, nombre: 'Trabajo 5' }
            ],
            dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
            asignaciones: [],
            filtroReclusos: '',
            filtroTrabajos: '',
            filtroDias: ''
        };
    },
    mounted() {
        this.generarReporte();
    },
    methods: {
        generarReporte() {
            for (let i = 1; i <= 10; i++) {
                const asignacion = {
                    id: i,
                    reclusoId: Math.floor(Math.random() * this.reclusos.length) + 1,
                    trabajoId: Math.floor(Math.random() * this.trabajos.length) + 1,
                    dias: this.dias.filter(() => Math.random() < 0.5),
                    horaDesde: this.generarHoraAleatoria(),
                    horaHasta: this.generarHoraAleatoria()
                };
                this.asignaciones.push(asignacion);
            }
        },
        generarHoraAleatoria() {
            const hora = Math.floor(Math.random() * 24).toString().padStart(2, '0');
            const minutos = Math.floor(Math.random() * 60).toString().padStart(2, '0');
            return `${hora}:${minutos}`;
        },
        getReclusoNombre(reclusoId) {
            const recluso = this.reclusos.find((r) => r.id === reclusoId);
            return recluso ? recluso.nombre : '';
        },
        getTrabajoNombre(trabajoId) {
            const trabajo = this.trabajos.find((t) => t.id === trabajoId);
            return trabajo ? trabajo.nombre : '';
        }
    },
    computed: {
        asignacionesFiltradas() {
            return this.asignaciones.filter((asignacion) => {
                const cumpleFiltroReclusos = !this.filtroReclusos || asignacion.reclusoId === parseInt(this.filtroReclusos);
                const cumpleFiltroTrabajos = !this.filtroTrabajos || asignacion.trabajoId === parseInt(this.filtroTrabajos);
                const cumpleFiltroDias = !this.filtroDias || asignacion.dias.includes(this.filtroDias);
                return cumpleFiltroReclusos && cumpleFiltroTrabajos && cumpleFiltroDias;
            });
        }
    }
};
</script>
  
<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
}

.filters {
    margin-bottom: 1rem;
}

.filters .form-group {
    display: inline-block;
    margin-right: 1rem;
}

.filters label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.filters select {
    width: 200px;
}
</style>
  