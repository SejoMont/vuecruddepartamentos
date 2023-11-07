<template>
  <div>
    <h1>CRUD Departamento</h1>
    <img
      src="./../assets/images/Loading.gif"
      v-if="status == false"
      style="width: 50%; margin: 0 auto"
    />
    <table
      v-else
      class="table table-striped text-center"
      style="width: 70%; margin: 0 auto"
    >
      <thead>
        <tr>
          <th>ID Departamento</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th>Detalles</th>
          <th>Update</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dept in departamentos" :key="dept">
          <td>{{ dept.idDepartamento }}</td>
          <td>{{ dept.nombre }}</td>
          <td>{{ dept.localidad }}</td>
          <td>
            <router-link
              class="nav-link"
              :to="
                '/detalles/' +
                dept.idDepartamento +
                '/' +
                dept.nombre +
                '/' +
                dept.localidad
              "
              >📄
            </router-link>
          </td>
          <td>
            <router-link :to="'/update/' + dept.idDepartamento" class="nav-link">
              ✏️
            </router-link>
          </td>
          <td>
            <router-link :to="'/delete/'+dept.idDepartamento" class="nav-link">🗑️</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import ServiceDepartamentos from "../services/ServiceDepartamentos";
const service = new ServiceDepartamentos();
export default {
  name: "DepartamentosComponent",
  mounted() {
    service.getDepartamentos().then((result) => {
      this.departamentos = result;
      this.status = true;
    });
  },
  data() {
    return {
      departamentos: [],
      status: false,
    };
  },
};
</script>