<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
    
        .row.mb-4
          .col-12.col-xl-7.d-flex.flex-column
            .d-flex.align-items-start.bg-azul.p-4.mb-4(data-aos="fade-right")
              p.pe-xl-3.mb-0(data-aos="fade-up") La Constitución Política de Colombia, no solo organiza el Estado, sino que también garantiza el derecho a la educación, considerado un pilar fundamental para el desarrollo social. En esta unidad, se analizarán los principios constitucionales, los derechos fundamentales y los objetivos de la educación, elementos claves que estructuran el sistema educativo del país y son fundamentales para el progreso de la sociedad.
            span.text-bold(data-aos="fade-up") Al finalizar esta unidad, será capaz de:
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')  

        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-2.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Primero
              p.px-1.text-small.mb-0.d-flex.text-center Reconocer los principios constitucionales que regulan la educación.
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-3.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Segundo
              p.px-1.text-small.mb-0.d-flex.text-center Analizar los derechos fundamentales, con énfasis en el derecho a la educación, según el Artículo 67 de la Constitución. 
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-4.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Tercero
              p.px-1.text-small.mb-0.d-flex.text-center Identificar los objetivos generales de la educación y el papel del Estado en garantizar su cumplimiento.
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-5.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Cuarto
              p.px-1.text-small.mb-0.d-flex.text-center Reflexionar sobre la importancia del estudio de la evolución histórica del marco normativo, en relación con la educación en Colombia.
    h2 ¿Qué pasaría si no existiera un marco normativo que defina y proteja el derecho a la educación? 
    p.mb-4 Conocer estos principios no solo le permitirá entender cómo se organiza el sistema educativo, sino que también le brindará las herramientas necesarias para participar activamente en su mejora. El Artículo 67 de la Constitución, por ejemplo, establece que la educación es un derecho fundamental y un servicio esencial para formar ciudadanos críticos y responsables.

    p.text-bold.mb-4 La unidad se organiza en 4 secciones claves:
    .row.mb-4
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Principios fundamentales")
            p Se estudiarán los valores que sustentan nuestra Constitución y su impacto social.
          .div(titulo="Derechos fundamentales")
            p Se analizarán los derechos constitucionales, con especial énfasis en el derecho a la educación.
          .div(titulo="Objetivos de la educación en Colombia")
            p Se reflexionará sobre los fines de la educación y el rol del Estado en su implementación.
          .div(titulo="Decreto 1075 del 2015")
            p Decreto Reglamentario Único del Sector Educación. Cómo se organiza y regula el sistema educativo en Colombia, a través de un marco normativo detallado y estructurado
    p.mb-4 Se espera que participe activamente, reflexionando y conectando lo aprendido con su entorno. No es necesario ser un experto en leyes, pero sí se requiere disposición para cuestionar y profundizar en los conceptos, y para aplicar lo aprendido al contexto social y educativo.
    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        .bg-azul.p-4.mb-4
          span Al finalizar la unidad, habrá adquirido un conocimiento claro sobre los principios constitucionales que regulan la educación en Colombia y comprenderá la importancia de estudiar la evolución histórica del marco normativo. Esto le permitirá establecer conexiones entre el pasado, el presente y el futuro del sistema educativo colombiano.
        span ¡Está a punto de descubrir cómo las leyes que fundamentan nuestra sociedad, también definen su futuro! Comprender estos principios le permitirá no solo conocer su entorno educativo, sino también participar activamente en su transformación. 
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')  

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-amarillo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-8.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 ¡Comience este viaje de aprendizaje con la certeza que cada concepto que explore tiene un impacto directo en su vida y en la de todos!




    
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
