import { createApp } from "vue";

import App from "./App.vue";

import router from "./routes/index.js";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "./style.css";
import "boxicons";
import PrimeVue from "primevue/config";
import Card from "primevue/card";
import Calendar from "primevue/calendar";
import TieredMenu from "primevue/tieredmenu";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import BlockUI from "primevue/blockui";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Breadcrumb from "primevue/breadcrumb";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';   

import InputText from 'primevue/inputtext';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.component("Card", Card);
app.component("DataTable",DataTable);
app.component("Column",Column);
app.component("ColumnGroup",ColumnGroup);
app.component("Row",Row);
app.component("Calendar", Calendar);
app.component("TieredMenu", TieredMenu);
app.component("Button", Button);
app.component("Dropdown", Dropdown);
app.component("Toast", Toast);
app.component("BlockUI", BlockUI);
app.component("Breadcrumb", Breadcrumb);
app.component("InputText",InputText)
app.mount("#app");
