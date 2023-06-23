<template>
  <div class="container mt-5">
    <h1 class="mb-4">Guardar Datos de Persona</h1>
    <form>
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" class="form-control" id="nombre" v-model="persona.nombre">
      </div>
      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input type="text" class="form-control" id="apellido" v-model="persona.apellido">
      </div>
      <div class="form-group">
        <label for="cedula">Cédula:</label>
        <input type="text" class="form-control" id="cedula" v-model="persona.cedula">
      </div>
      <div class="form-group">
        <label for="direccion">Dirección:</label>
        <input type="text" class="form-control" id="direccion" v-model="persona.direccion">
      </div>
      <div class="form-group">
        <label for="correo">Correo:</label>
        <input type="email" class="form-control" id="correo" v-model="persona.correo">
      </div>
      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" class="form-control" id="fechaNacimiento" v-model="persona.fechaNacimiento">
      </div>
      <div class="text-center mt-3">
        <button class="btn btn-primary mr-2" @click="registrar">Registrar</button>
        <button class="btn btn-secondary" @click="cancelar">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persona: {
        nombre: '',
        apellido: '',
        cedula: '',
        direccion: '',
        correo: '',
        fechaNacimiento: ''
      }
    };
  },
  methods: {
    registrar() {
      // Aquí puedes enviar los datos de la persona al servidor o realizar alguna acción necesaria
      console.log(this.persona);
    },
    cancelar() {
      // Limpiar los campos y volver al estado inicial
      this.persona = {
        nombre: '',
        apellido: '',
        cedula: '',
        direccion: '',
        correo: '',
        fechaNacimiento: ''
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
