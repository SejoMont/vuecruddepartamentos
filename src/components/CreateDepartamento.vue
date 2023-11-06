<template>
  <div>
    <h1>Crear Departamento</h1>
    <br />
    <form
      class="text-start"
      v-on:submit.prevent="insertDepartamento()"
      style="width: 60%; margin: 0 auto"
    >
      <label>ID Departamento: </label>
      <input
        type="number"
        class="form-control"
        v-model="departamento.idDepartamento"
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
        <button class="btn btn-outline-success">Crear</button>
      </div>
    </form>
  </div>
</template>
<script>
import ServiceDepartamentos from "../services/ServiceDepartamentos";
const service = new ServiceDepartamentos();

export default {
  name: "CreateDepartamento",
  methods: {
    insertDepartamento() {
      service.insertDepartamento(this.departamento).then((result) => {
        console.log(result);
        this.$router.push("/");
        // this.mensaje = "Insertado correctamente";
      });
    },
  },
  data() {
    return {
      departamento: {
        idDepartamento: 0,
        nombre: "",
        localidad: "",
      },
      mensaje: "",
    };
  },
};
</script>
