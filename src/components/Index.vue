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
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12 text-center p-5">
                                                    <h4>
                                                        ¿Que acción requiere tomar?
                                                    </h4>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row text-center p-5">
                                                <div class="col-md-6 gap-2">
                                                    <a href="/crear-usuario" class="d-grid gap-2 btn btn-primary btn-lg">
                                                        Registrar
                                                    </a>
                                                </div>
                                                <div class="col-md-6 gap-2">
                                                    <a href="/acceso-usuario" class="d-grid gap-2 btn btn-outline-primary btn-lg">
                                                        Ingresar
                                                    </a>
                                                </div>
                                            </div>
                                            <br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
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

export default defineComponent({
    name: 'Index',
    data(){
        return {

        }
    },
    methods: {
        
    }
})
</script>