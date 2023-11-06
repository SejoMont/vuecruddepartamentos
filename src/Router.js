import { createWebHistory, createRouter } from "vue-router";
import DepartamentosComponent from './components/DepartamentosComponent.vue'
import CreateDepartamento from './components/CreateDepartamento.vue'
import DetallesDepartamento from './components/DetallesDepartamento.vue'
import UpdateDepartamento from './components/UpdateDepartamento.vue'

const myRouters = [
  {
    path: "/",
    component: DepartamentosComponent,
  },
  {
    path: "/createdepartamento",
    component: CreateDepartamento,
  },
  {
    path: "/detalles/:id/:nombre/:localidad",
    component: DetallesDepartamento,
  },
  {
    path: "/update/:id",
    component: UpdateDepartamento,
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes: myRouters,
});

export default router;
