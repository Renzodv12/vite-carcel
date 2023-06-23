<template>
  <div class="container mt-5">
    <h1 class="mb-4">Asignar Guardia</h1>
    <form>
      <div class="form-group">
        <label for="persona">Persona:</label>
        <select class="form-control" id="persona" v-model="selectedPersona">
          <option v-for="persona in personas" :value="persona.id" :key="persona.id">
            {{ persona.nombre }} {{ persona.apellido }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" class="form-control" id="nombre" v-model="selectedNombre" disabled>
      </div>
      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input type="text" class="form-control" id="apellido" v-model="selectedApellido" disabled>
      </div>
      <div class="form-group">
        <label for="pabellon">Pabellón:</label>
        <select class="form-control" id="pabellon" v-model="selectedPabellon">
          <option value="A">Pabellón A</option>
          <option value="B">Pabellón B</option>
          <option value="C">Pabellón C</option>
        </select>
      </div>
      <div class="form-group">
        <label for="dias">Días:</label>
        <el-select v-model="selectedDias" multiple placeholder="Selecciona uno o varios elementos">
          <el-option v-for="item in diasOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="form-group">
        <label for="horaEntrada">Hora de Entrada:</label>
        <input type="time" class="form-control" id="horaEntrada" v-model="horario.horaEntrada">
      </div>
      <div class="form-group">
        <label for="horaSalida">Hora de Salida:</label>
        <input type="time" class="form-control" id="horaSalida" v-model="horario.horaSalida">
      </div>
      <div class="text-center mt-3">
        <button class="btn btn-primary mr-2" @click="asignarGuardia">Asignar Guardia</button>
        <button class="btn btn-secondary" @click="cancelar">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      personas: [
        { id: 1, nombre: 'Juan', apellido: 'Pérez' },
        { id: 2, nombre: 'María', apellido: 'Gómez' },
        { id: 3, nombre: 'Pedro', apellido: 'Sánchez' },
      ],
      selectedPersona: null,
      selectedNombre: '',
      selectedApellido: '',
      selectedPabellon: '',
      selectedDias: [],
      horario: {
        horaEntrada: '',
        horaSalida: ''
      }
    };
  },
  watch: {
    selectedPersona() {
      const persona = this.personas.find(p => p.id === this.selectedPersona);
      if (persona) {
        this.selectedNombre = persona.nombre;
        this.selectedApellido = persona.apellido;
      } else {
        this.selectedNombre = '';
        this.selectedApellido = '';
      }
    }
  },
  computed: {
    diasOptions() {
      return [
        { value: 'Lunes', label: 'Lunes' },
        { value: 'Martes', label: 'Martes' },
        { value: 'Miércoles', label: 'Miércoles' },
        { value: 'Jueves', label: 'Jueves' },
        { value: 'Viernes', label: 'Viernes' },
        { value: 'Sábado', label: 'Sábado' },
        { value: 'Domingo', label: 'Domingo' }
      ];
    }
  },
  methods: {
    asignarGuardia(e) {
      e.preventDefault();
      // Aquí puedes realizar alguna acción para asignar la guardia a la persona seleccionada
      console.log('Persona seleccionada:', this.selectedPersona);
      console.log('Nombre:', this.selectedNombre);
      console.log('Apellido:', this.selectedApellido);
      console.log('Pabellón:', this.selectedPabellon);
      console.log('Días:', this.selectedDias);
      console.log('Hora de Entrada:', this.horario.horaEntrada);
      console.log('Hora de Salida:', this.horario.horaSalida);
    },
    cancelar() {
      // Limpiar los campos y volver al estado inicial
      this.selectedPersona = null;
      this.selectedNombre = '';
      this.selectedApellido = '';
      this.selectedPabellon = '';
      this.selectedDias = [];
      this.horario = {
        horaEntrada: '',
        horaSalida: ''
      };
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
