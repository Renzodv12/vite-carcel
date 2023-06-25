<template>
    <div class="container mt-5">
        <h1 class="mb-4">Asignaciones de Trabajo Penitenciario</h1>
        <form>
            <div class="form-group">
                <label for="reclusos">Reclusos:</label>
                <el-select v-model="selectedReclusos" multiple placeholder="Selecciona uno o varios reclusos">
                    <el-option v-for="recluso in reclusos" :key="recluso.id" :value="recluso.id">
                        {{ recluso.nombre }}
                    </el-option>
                </el-select>
            </div>
            <div class="form-group">
                <label for="trabajo">Trabajo:</label>
                <select class="form-control" id="trabajo" v-model="selectedTrabajo">
                    <option v-for="trabajo in trabajos" :value="trabajo.id" :key="trabajo.id">
                        {{ trabajo.nombre }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="diasTrabajados">Días Trabajados:</label>
                <el-select v-model="selectedDias" multiple placeholder="Selecciona uno o varios días">
                    <el-option v-for="dia in dias" :key="dia" :value="dia">
                        {{ dia }}
                    </el-option>
                </el-select>
            </div>
            <div class="form-group">
                <label for="horaDesde">Hora Desde:</label>
                <input type="time" class="form-control" id="horaDesde" v-model="horaDesde">
            </div>
            <div class="form-group">
                <label for="horaHasta">Hora Hasta:</label>
                <input type="time" class="form-control" id="horaHasta" v-model="horaHasta">
            </div>
            <div class="text-center">
                <button class="btn btn-primary mr-2" @click="aceptar">Aceptar</button>
                <button class="btn btn-secondary" @click="cancelar">Cancelar</button>
            </div>
        </form>
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
            selectedReclusos: [],
            trabajos: [
                { id: 1, nombre: 'Trabajo 1' },
                { id: 2, nombre: 'Trabajo 2' },
                { id: 3, nombre: 'Trabajo 3' },
                { id: 4, nombre: 'Trabajo 4' },
                { id: 5, nombre: 'Trabajo 5' }
            ],
            selectedTrabajo: null,
            dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
            selectedDias: [],
            horaDesde: '',
            horaHasta: ''
        };
    },
    methods: {
        aceptar() {
            // Simular envío del formulario
            console.log('Reclusos seleccionados:', this.selectedReclusos);
            console.log('Trabajo seleccionado:', this.selectedTrabajo);
            console.log('Días trabajados:', this.selectedDias);
            console.log('Hora Desde:', this.horaDesde);
            console.log('Hora Hasta:', this.horaHasta);
            // Realizar acciones necesarias con los datos
        },
        cancelar() {
            // Limpiar los campos y volver al estado inicial
            this.selectedReclusos = [];
            this.selectedTrabajo = null;
            this.selectedDias = [];
            this.horaDesde = '';
            this.horaHasta = '';
        }
    }
};
</script>
  
<style scoped>
.container {
    max-width: 500px;
    margin: 0 auto;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}

.btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
}
</style>
  