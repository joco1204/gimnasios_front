<template>
    <div class="bg-primary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header">
                                        <h3 class="text-center font-weight-light my-4">Sistema De Gimnasios</h3>
                                    </div>
                                    <div class="card-body">
                                        <form
                                            id="registerForm"
                                            autocomplete="off"
                                            @submit.prevent="registerForm"
                                        >
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-12 p-3">
                                                        <label for="nombre" class="form-label">Nombre</label>
                                                        <input 
                                                            type="text" 
                                                            name="nombre"
                                                            id="nombre"
                                                            class="form-control" 
                                                            v-model="nombre"
                                                            required
                                                        >
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 p-3">
                                                        <label for="apellido" class="form-label">Apellido</label>
                                                        <input 
                                                            type="text" 
                                                            name="apellido"
                                                            id="apellido"
                                                            class="form-control" 
                                                            v-model="apellido"
                                                            required
                                                        >
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 p-3">
                                                        <label for="tipo_identificacion" class="form-label">Tipo identificación</label>
                                                        <select
                                                            class="form-control"
                                                            name="tipo_identificacion"
                                                            id="tipo_identificacion"
                                                            v-model="tipo_identificacion"
                                                            required
                                                        >
                                                        <option
                                                            value=""
                                                            selected
                                                        >
                                                            [Seleccione tipo de documento]
                                                        </option>
                                                        <option
                                                            v-for="option in select_tipo_identificacion"
                                                            :key="option.id"
                                                            v-bind:value="option.id"
                                                        >
                                                            {{ option.codigo }} - {{ option.nombre }}
                                                        </option>
                                                    </select>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 p-3">
                                                        <label for="numero_identificacion" class="form-label">Número de Identificación</label>
                                                        <input 
                                                            type="text" 
                                                            name="numero_identificacion"
                                                            id="numero_identificacion"
                                                            class="form-control" 
                                                            v-model="numero_identificacion"
                                                            required
                                                        >
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 p-3">
                                                        <label for="fecha_nacimiento" class="form-label">Fecha de Nacimiento</label>
                                                        <input 
                                                            type="date" 
                                                            name="fecha_nacimiento"
                                                            id="fecha_nacimiento"
                                                            class="form-control" 
                                                            v-model="fecha_nacimiento"
                                                            required
                                                        >
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 p-3">
                                                        <label for="telefono" class="form-label">Celular</label>
                                                        <input 
                                                            type="text" 
                                                            name="telefono"
                                                            id="telefono"
                                                            class="form-control" 
                                                            v-model="telefono"
                                                            required
                                                        >
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 p-3">
                                                        <label for="email" class="form-label">Email</label>
                                                        <input 
                                                            type="text" 
                                                            name="email"
                                                            id="email"
                                                            class="form-control" 
                                                            v-model="email"
                                                            required
                                                        >
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 p-3">
                                                        <label for="direccion" class="form-label">Dirección</label>
                                                        <input 
                                                            type="text" 
                                                            name="direccion"
                                                            id="direccion"
                                                            class="form-control" 
                                                            v-model="direccion"
                                                        >
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 p-3 text-center">
                                                        <button type="submit" class="btn btn-success btn-lg">
                                                            Registrar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div class="py-5"></div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Johan Alexis Cortes Hoyos</div>
                            <div>
                                <a href="#">Políticas de Privacidad</a>
                                &middot;
                                <a href="#">Terminos &amp; Condiciones</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

export default defineComponent({
    name: 'CrearUsuario',
    data(){
        return {
            api: process.env.VUE_APP_ROOT_API,
            select_tipo_identificacion: null,
            tipo_identificacion: '',
            numero_identificacion: '',
            nombre: '',
            apellido: '',
            fecha_nacimiento: '',
            telefono: '',
            email: '',
            direccion: '',
        }
    },
    mounted() {
        this.tipoIdentificacion()
    },
    methods: {
        tipoIdentificacion(){
            axios.get(
                this.api + '/api/tipo-tidentificacion/',
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
            .then((response) => {
                this.select_tipo_identificacion = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        },
        registerForm(){
            axios.post(
                this.api + '/api/users/',
                JSON.stringify({
                    tipo_identificacion: this.tipo_identificacion,
                    numero_identificacion: this.numero_identificacion,
                    nombre: this.nombre,
                    apellido: this.apellido,
                    fecha_nacimiento: this.fecha_nacimiento,
                    telefono: this.telefono,
                    email: this.email,
                    direccion: this.direccion,
                    active: 1
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
            .then((response) => {
                console.log('id usuario: ' + response.data.id)
                Swal.fire({
                    title: "Correcto",
                    text: "Ha registrado sus datos de forma correcta",
                    icon: "success",
                    showCancelButton: false,
                    confirmButtonText: "Aceptar"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/'
                    }
                });
            })
            .catch((error) => {
                console.log(error)
                
            })

        }
    }
})
</script>