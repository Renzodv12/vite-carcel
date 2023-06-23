import { createApp } from "vue";

import App from "./App.vue";

import "boxicons";
import "primeicons/primeicons.css";
import BlockUI from "primevue/blockui";
import Breadcrumb from "primevue/breadcrumb";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; // optional
import PrimeVue from "primevue/config";
import DataTable from 'primevue/datatable';
import Dropdown from "primevue/dropdown";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import Row from 'primevue/row';
import TieredMenu from "primevue/tieredmenu";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import router from "./routes/index.js";
import "./style.css";

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import InputText from 'primevue/inputtext';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(ElementPlus);

app.component("Card", Card);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("Row", Row);
app.component("Calendar", Calendar);
app.component("TieredMenu", TieredMenu);
app.component("Button", Button);
app.component("Dropdown", Dropdown);
app.component("Toast", Toast);
app.component("BlockUI", BlockUI);
app.component("Breadcrumb", Breadcrumb);
app.component("InputText", InputText)
app.mount("#app");
