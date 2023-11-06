<template>
  <div>
    <h1>Update Departamento {{ $route.params.id }}</h1>
    <br />
    <router-link to="/">Volver a home</router-link>
    <form
      v-if="departamento"
      class="text-start"
      v-on:submit.prevent="updateDepartamento()"
      style="width: 60%; margin: 0 auto"
    >
      <label>ID Departamento: </label>
      <input
        type="number"
        class="form-control"
        v-model="departamento.idDepartamento"
        disabled
      /><br />
      <label>Nombre: </label>
      <input
        type="text"
        class="form-control"
        v-model="departamento.nombre"
      /><br />
      <label>Localidad:</label>
      <input
        type="text"
        class="form-control"
        v-model="departamento.localidad"
      /><br />
      <br />
      <div class="text-end">
        <button class="btn btn-outline-success">Update</button>
      </div>
    </form>
  </div>
</template>
<script>
import ServiceDepartamentos from "@/services/ServiceDepartamentos";
const service = new ServiceDepartamentos();

export default {
  name: "UpdateDepartamento",
  methods: {
    updateDepartamento() {
      service.updateDepartamento(this.departamento).then((result) => {
        console.log(result);
        this.$router.push("/");
        // this.mensaje = "Insertado correctamente";
      });
    },
  },
  mounted() {
    var id = this.$route.params.id;
    service.findDepartamento(id).then((result) => {
      this.departamento = result;
    });
  },
  data() {
    return {
      departamento: null,
    };
  },
};
</script>