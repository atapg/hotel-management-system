<template>
  <div>
    <div class="row-container">
      <!--Hero-->
      <section id="hero" class="">
        <div class="hero-container border shadow d-flex justify-space-between">
          <div class="info-container text-center">
            <div
              class="d-flex flex-column justify-center fill-height px-15 text-left"
            >
              <h1 class="mb-5 display-3 font-weight-medium">
                Enjoy Your <br />
                Dream Vacation
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis deleniti eos iure laborum libero modi nam neque,
                officia tempora tempore.
              </p>
            </div>
          </div>
          <div class="img-container">
            <img :src="require(`/assets/images/villa1.jpg`)" alt="villa1.jpg" />
          </div>
        </div>
      </section>
      <!--Hero-->
      <!--Hero Bar-->
      <section id="hero-bar" class="border shadow mx-15">
        <div class="bar-container white pa-15">d</div>
      </section>
      <!--Hero Bar-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroItems: [
        {
          img: 'villa1.jpg',
          title: 'Enjoy Your Dream Vacation',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias quam sint tempore vel, voluptatibus.',
          price: 99,
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
#hero {
  .hero-container {
    overflow: hidden;
    width: 100%;
    height: 500px;
    background-color: $grey-color;
    position: relative;

    .info-container {
      width: 50%;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;

      h1 {
      }
    }

    .img-container {
      width: 70%;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      -webkit-mask-image: linear-gradient(to right, transparent 25%, black 75%);
      mask-image: linear-gradient(to right, transparent 25%, black 75%);

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
#hero-bar {
  transform: translateY(-50%);
}
</style>
