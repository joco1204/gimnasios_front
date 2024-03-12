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
                                                <div class="col-lg-12">
                                                    <video 
                                                        id="video"
                                                        width="640"
                                                        height="480"
                                                        @loadedmetadata="onPlay"
                                                        autoplay 
                                                        muted
                                                        playsinline
                                                    ></video>
                                                    <canvas 
                                                        id="canvas" 
                                                        width="640" 
                                                        height="480"
                                                    ></canvas>
                                                </div>
                                            </div>
                                        </div>
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
import * as faceapi from 'face-api.js'
import Swal from 'sweetalert2'
import axios from 'axios'

export default defineComponent({
    name: 'TomarFoto',
    data(){
        return {
            model: '/model',
        }
    },
    mounted() {
    },
    methods: {
        
        async onPlay() {
            
        } 
    }
})
</script>
<style scoped>
video {
    position: absolute;
    z-index: 1;
}

canvas {
    position: relative;
    z-index: 20;
}
</style>