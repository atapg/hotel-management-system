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
      <section id="hero-bar" class="border shadow mx-15 mb-15">
        <div class="bar-container white px-15 py-7">
          <div class="facilities adjust-items-with-height">
            <p class="title">Facilities</p>
            <div class="facility-items">
              <div
                class="d-flex flex-column justify-center align-center facility-card"
                v-for="(item, index) in facilityItems"
                :key="index"
              >
                <v-btn outlined icon :color="item.color">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-btn>
                <p class="mb-0">{{ item.title }}</p>
              </div>
            </div>
          </div>
          <div class="total-customers adjust-items-with-height">
            <div>
              <p class="title mb-0">Total Customers</p>
              <p class="caption">And counting on...</p>
            </div>
            <p class="display-1 mb-0">+3,323,123</p>
          </div>
          <div class="online-services adjust-items-with-height">
            <div>
              <p class="title mb-0">Online Services</p>
              <p class="caption">Talk to our online advisors!</p>
            </div>
            <div class="advisors">
              <v-tooltip
                bottom
                v-for="(item, index) in onlineAdvisors"
                :key="index"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-avatar
                    color="primary"
                    size="56"
                    class="mr-5"
                    v-bind="attrs"
                    v-on="on"
                    style="cursor: pointer"
                  >
                    <img
                      :src="require(`/assets/images/${item.img}`)"
                      :alt="item.name"
                    />
                  </v-avatar>
                </template>
                <span>{{ item.name }}</span>
              </v-tooltip>
              ...
            </div>
          </div>
        </div>
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
      facilityItems: [
        {
          icon: 'mdi-sun-snowflake',
          title: 'Cooler',
          color: 'purple',
        },
        {
          icon: 'mdi-face-agent',
          title: '24h Service',
          color: 'orange',
        },
        {
          icon: 'mdi-food',
          title: 'Free Food',
          color: 'pink',
        },
        {
          icon: 'mdi-parking',
          title: 'Parking',
          color: 'cyan',
        },
        {
          icon: 'mdi-pool',
          title: 'Pool',
          color: 'green',
        },
      ],
      onlineAdvisors: [
        {
          name: 'Bill Gates',
          img: 'person1.jpg',
        },
        {
          name: 'Morgan Freeman',
          img: 'person2.jpg',
        },
        {
          name: 'Deepika Padukone',
          img: 'person3.jpg',
        },
        {
          name: 'Megan Fox',
          img: 'person4.jpg',
        },
        {
          name: 'Dwayne Johnson',
          img: 'person5.jpg',
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

  .bar-container {
    display: grid;
    grid-template-columns: 40% 20% 40%;

    .adjust-items-with-height {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .facilities {
      .facility-items {
        display: flex;
        flex-wrap: wrap;
      }

      .facility-card {
        margin-right: 30px;
      }
    }
  }
}
</style>
