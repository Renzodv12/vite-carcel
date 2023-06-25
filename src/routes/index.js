import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createRouter, createWebHistory } from "vue-router";
import Comida from "../components/Comedor/Comida.vue";
import HorarioComida from "../components/Comedor/HorarioComida.vue";
import Ingrediente from "../components/Comedor/Ingrediente.vue";
import Menu from "../components/Comedor/Menu.vue";
import NewMenu from "../components/Comedor/NewMenu.vue";
import Proveedor from "../components/Comedor/Proveedor.vue";
import Fallecimientos from "../components/Fallecimientos/Fallecimientos.vue";
import Incidencias from "../components/Fallecimientos/Incidencias.vue";
import AsignarTrabajo from "../components/Guardias/AsignarTrabajo.vue";
import Personas from "../components/Guardias/Personas.vue";

import Asignar from "../components/Guardias/Asignar.vue";
import Asistencias from "../components/Pabellones/Asistencias.vue";
import Celdas from "../components/Pabellones/Celdas.vue";
import Pabellones from "../components/Pabellones/Pabellones.vue";
import Reportes from "../components/Pabellones/Reportes.vue";
import cards from "../components/Pabellones/cards.vue";
import newCeldas from "../components/Pabellones/newCeldas.vue";
import newPabellones from "../components/Pabellones/newPabellones.vue";
import Visitas from "../components/Visitas/visitas.vue";
import Prisionero from "../components/admision/Prisionero.vue";
import newPrisionero from "../components/admision/newPrisionero.vue";
import profilePrisionero from "../components/admision/profilePrisionero.vue";
const routes = [
  {
    path: "/",
    name: "cards",
    component: cards,
  },
  {
    path: "/pabellones",
    name: "Pabellones",
    component: Pabellones,
  },
  {
    path: "/newPabellones",
    name: "newPabellones",
    component: newPabellones,
  },

  {
    path: "/celdas",
    name: "Celdas",
    component: Celdas,
  },

  {
    path: "/newCeldas",
    name: "newCeldas",
    component: newCeldas,
  },
  {
    path: "/asistencias",
    name: "asistencias",
    component: Asistencias,
  },
  {
    path: "/reportes",
    name: "reportes",
    component: Reportes,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/HorarioComida",
    name: "HorarioComida",
    component: HorarioComida,
  },
  {
    path: "/Comida",
    name: "Comida",
    component: Comida,
  },
  {
    path: "/Ingrediente",
    name: "Ingrediente",
    component: Ingrediente,
  },
  {
    path: "/NewMenu",
    name: "NewMenu",
    component: NewMenu,
  },
  {
    path: "/Proveedor",
    name: "Proveedor",
    component: Proveedor,
  },
  {
    path: "/fallecimientos",
    name: "Fallecimientos",
    component: Fallecimientos,
  },
  {
    path: "/Prisionero",
    name: "Prisionero",
    component: Prisionero,
  },
  {
    path: "/newPrisionero",
    name: "newPrisionero",
    component: newPrisionero,
  },
  {
    path: "/profilePrisionero",
    name: "profilePrisionero",
    component: profilePrisionero,
  },

  { path: "/incidencias", name: "Incidencias", component: Incidencias },
  { path: "/Visitas", name: "Visitas", component: Visitas },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
  {
    path: "/personas",
    name: "Personas",
    component: Personas,
  },
  {
    path: "/asignar",
    name: "Asignar",
    component: Asignar,
  },
  {
    path: "/asignartrabajo",
    name: "AsignarTrabajo",
    component: AsignarTrabajo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
