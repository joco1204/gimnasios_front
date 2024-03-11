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
                                                <div class="col col-video" id="col-video-canvas">
                                                    <div class="loading" v-if="loading">
                                                        <br>
                                                        <h4 id="mensajeCaptura">ACERQUE SU ROSTRO DENTRO DEL CIRCULO</h4>
                                                        <h1 id="contador">{{ count }}</h1>
                                                    </div>
                                                    <div class="contenedor-video">
                                                        <video 
                                                            ref="camera"
                                                            autoplay 
                                                            muted 
                                                            width="600"
                                                            height="440"
                                                            id="camera"
                                                        ></video>
                                                        <canvas 
                                                            ref="canvas"
                                                            width="600"
                                                            height="440"
                                                            id="canvas"
                                                        ></canvas>
                                                    </div>
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
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'TomarFoto',
    data(){
        return {
            loading: true,
            count: 5
        }
    },
    mounted() {
        
    },
    methods: {
        
    }
})
</script>
<style scoped>
.col-video {
    text-align: center;
}

.loading {
    position: absolute; 
    z-index: 2;
    width: 100%; 
    height: 100%; 
    background-color: hsl(0, 0%, 100%); 
    opacity: 0.7; 
    text-align: center;
}

#contador {
    font-size: 150px;
}

.contenedor-video {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
}

video {
    transform: scaleX(-1);
    position: absolute;
    z-index: 1;
    width: 250px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
}

canvas {
    transform: scaleX(-1);
    position: relative;
    z-index: 2;
    width: 250px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
}
</style>