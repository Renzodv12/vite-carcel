<template>
  <div class="mt-4 rounded-lg shadow-lg pb-4">
    <nav class="flex justify-between items-center">
      <div class="flex items-center">
        <img src="./assets/prison_icon.png" alt="Logo" class="ml-4 w-8 h-8">
        <h1 class="ml-4 font-bold text-slate-700">Penitenciaría de Tacumbú</h1>

      </div>

      <div class=" flex justify-center">
        <nav class="ml-auto flex justify-center space-x-4">



          <Button type="button" label="Inicio" @click="clickB" aria-haspopup="true" aria-controls="overlay_tmenu"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 " />

          <Button type="button" label="Pabellones" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 " />
          
            <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
          
            <Button type="button" label="Menu" @click="toggleM" aria-haspopup="true" aria-controls="overlay_tmenu"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 " />
          
            <TieredMenu ref="menuM" id="overlay_tmenu" :model="itemsM" popup />

              <Button type="button" label="Guardia" @click="toggleG" aria-haspopup="true" aria-controls="menuguardia"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 " />
          
            <TieredMenu ref="menuG" id="menuguardia" :model="itemsG" popup />

          <router-link to="/fallecimientos"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Fallecimientos</router-link>
          <router-link to="/condenas"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Condenas</router-link>
          <router-link to="/Prisionero"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Prisionero</router-link>

          <router-link to="/Incidencias"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Incidencias</router-link>
          <router-link to="/Visitas"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Visitas</router-link>
          <!--<router-link to="/fallecimientos"></router-link>
              </router-link>class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Fallecimientos</router-link>
            <router-link to="/fallecimientos"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Fallecimientos</router-link>
            <router-link to="/fallecimientos"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Fallecimientos</router-link> -->
        </nav>
      </div>

      <div>
        <div class="relative">
          <button class="flex items-center focus:outline-none" @click="showMenu = !showMenu">
            <i class='pi pi-user'></i>


            <svg class="w-4 h-4 mr-4  ml-2 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M16.59 8.59L12 13.17l-4.59-4.58L6 10l6 6 6-6-1.41-1.41z" />
            </svg>
          </button>
          <div v-if="showMenu" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
            <router-link to="/profile"
              class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900">Perfil</router-link>

            <button class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900" @click="logout">Cerrar
              sesión</button>
          </div>
        </div>
      </div>
    </nav>

  </div>

  <div>

    <router-view />
  </div>
</template> 

<script>

export default {
  data() {
    return {
      showMenu: false,
      items: [
        {
          label: 'Pabellones',
          icon: 'pi pi-sitemap',
          command: () => {
            this.$router.push("/pabellones")
          }

        },
        {
          label: 'Celdas',
          icon: 'pi pi-ban',
          command: () => {
            this.$router.push("/celdas")
          }

        },
        {
          label: 'Asistencias',
          icon: 'pi pi-check-square',
          command: () => {
            this.$router.push("/asistencias")
          }

        },
        {
          label: 'Reportes',
          icon: 'pi pi-file-import',
          command: () => {
            this.$router.push("/reportes")
          }

        },


      ],

      itemsM: [
        {
          label: 'Menu',
          icon: 'pi pi-sitemap',
          command: () => {
            this.$router.push("/Menu")
          }

        },
        {
          label: 'Comida',
          icon: 'pi pi-sitemap',
          command: () => {
            this.$router.push("/Comida")
          }

        },
        
        


      ],

      itemsG: [
        {
          label: 'Personas',
          icon: 'pi pi-sitemap',
          command: () => {
            this.$router.push("/Personas")
          }

        },
               {
          label: 'Asignar',
          icon: 'pi pi-sitemap',
          command: () => {
            this.$router.push("/Asignar")
          }

        },
     
     
        
        


      ]
    }
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    toggleM(event) {
      this.$refs.menuM.toggle(event);
    },
    toggleG(event) {
      this.$refs.menuG.toggle(event);
    },
    clickB() {
      this.$router.push('/')
    }
  }
}
</script>

<style  scoped>
.p-button:enabled:hover {
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
  color: #424555;
  border-color: white;
}


.p-button {
  color: #424555;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 6px;
  border-color: white;
}

.p-button:focus {
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #eaeaff, 0 1px 2px 0 black;
}
</style>