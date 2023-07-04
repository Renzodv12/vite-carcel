<template>
    <div class="container mt-5">
        <h1 class="mb-4">Reporte de Guardia</h1>
        <div class="filters">
            <div class="form-group">
                <label for="filtroPersona">Filtrar por Persona:</label>
                <select class="form-control" id="filtroPersona" v-model="filtroPersona">
                    <option value="">Todos</option>
                    <option v-for="persona in personas" :value="persona.id" :key="persona.id">
                        {{ persona.nombre }} {{ persona.apellido }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="filtroPabellon">Filtrar por Pabellón:</label>
                <select class="form-control" id="filtroPabellon" v-model="filtroPabellon">
                    <option value="">Todos</option>
                    <option value="A">Pabellón A</option>
                    <option value="B">Pabellón B</option>
                    <option value="C">Pabellón C</option>
                </select>
            </div>
            <div class="form-group">
                <label for="filtroDia">Filtrar por Día:</label>
                <select class="form-control" id="filtroDia" v-model="filtroDia">
                    <option value="">Todos</option>
                    <option v-for="dia in diasOptions" :value="dia.value" :key="dia.value">
                        {{ dia.label }}
                    </option>
                </select>
            </div>
        </div>
        <div v-if="filteredGuardias.length > 0">
            <div v-for="guardia in filteredGuardias" :key="guardia.id" class="guardia">
                <p><strong>Persona:</strong> {{ guardia.nombre }} {{ guardia.apellido }}</p>
                <p><strong>Pabellón:</strong> {{ guardia.pabellon }}</p>
                <p><strong>Días:</strong> {{ guardia.dias.join(', ') }}</p>
                <p><strong>Hora de Entrada:</strong> {{ guardia.horaEntrada }}</p>
                <p><strong>Hora de Salida:</strong> {{ guardia.horaSalida }}</p>
            </div>
        </div>
        <div v-else>
            <p>No se encontraron guardias con los filtros seleccionados.</p>
        </div>
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
            guardias: [],
            filtroPersona: '',
            filtroPabellon: '',
            filtroDia: '',
        };
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
        },
        filteredGuardias() {
            let guardias = this.guardias;
            if (this.filtroPersona !== '') {
                guardias = guardias.filter(g => g.personaId === this.filtroPersona);
            }
            if (this.filtroPabellon !== '') {
                guardias = guardias.filter(g => g.pabellon === this.filtroPabellon);
            }
            if (this.filtroDia !== '') {
                guardias = guardias.filter(g => g.dias.includes(this.filtroDia));
            }
            return guardias;
        }
    },
    mounted() {
        // Generar datos aleatorios de guardias (puedes reemplazar esto con tus datos reales)
        for (let i = 1; i <= 10; i++) {
            const persona = this.personas[Math.floor(Math.random() * this.personas.length)];
            const pabellon = ['A', 'B', 'C'][Math.floor(Math.random() * 3)];
            const dias = this.diasOptions
                .filter(() => Math.random() < 0.5)
                .map(dia => dia.value);
            const horaEntrada = randomTime();
            const horaSalida = randomTime();
            this.guardias.push({
                id: i,
                personaId: persona.id,
                nombre: persona.nombre,
                apellido: persona.apellido,
                pabellon: pabellon,
                dias: dias,
                horaEntrada: horaEntrada,
                horaSalida: horaSalida
            });
        }

        function randomTime() {
            const hour = String(Math.floor(Math.random() * 24)).padStart(2, '0');
            const minute = String(Math.floor(Math.random() * 60)).padStart(2, '0');
            return `${hour}:${minute}`;
        }
    }
};
</script>
  
<style scoped>
.container {
    max-width: 500px;
    margin: 0 auto;
}

.filters {
    margin-bottom: 1rem;
}

.guardia {
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 4px;
}
</style>
  