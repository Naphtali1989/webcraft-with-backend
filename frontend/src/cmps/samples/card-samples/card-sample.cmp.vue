<template>
  <div >
      <section class="hero">
        <div class="hero-introduction flex column justify-center align-center">
          <h2>
            Elena Joy <br />
            Photography
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            minima assumenda expedita similique quaerat maiores ab, itaque hic
            explicabo eaque!
          </p>
          <a href="#gallery">Gallery</a>
        </div>
        <div class="hero-images">
          <img
            class="hero-elena"
            src="@/assets/img/elenajoy.png"
            alt="picture of elena joy"
          />
          <img src="@/assets/img/plant1.png" alt="" class="plant1 plant" />
          <img src="@/assets/img/plant2.png" alt="" class="plant2 plant" />
        </div>
      </section>
      <!-- <section class="about" id="about">
        <div class="about-image">
          <h5>MINIMAL</h5>
          <img src="@/assets/img/aboutimage.png" alt="portrait-picture" />
        </div>
        <div class="about-text flex column justify-center align-center" id="work">
          <h2>Elena Joy</h2>
          <div class="about-life">
            <h3>My Life</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptas, maxime reprehenderit. Assumenda necessitatibus id
              consectetur asperiores harum dolore nihil fuga?
            </p>
          </div>
          <div class="about-work">
            <h3>My Work</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptas, maxime reprehenderit. Assumenda necessitatibus id
              consectetur asperiores harum dolore nihil fuga?
            </p>
          </div>
          <div class="about-contact">
            <h3>Get in touch</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptas, maxime reprehenderit. Assumenda necessitatibus id
              consectetur asperiores harum dolore nihil fuga?
            </p>
          </div>
        </div>
      </section>  -->
  </div>
</template>

<script>

export default {
    name:'card-sample',
    data(){
        return {
            
        }
    }

}
</script>

<style>
.hero {
  min-height: 90vh;
  width: 95%;
  margin: 0 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}

.hero-introduction {
  flex: 2 1 40rem;
  text-align: center;
}
.hero-introduction p {
  padding: 5rem 10rem;
  color: var(--gray-text);
}
.hero-introduction h2 {
  padding-top: 3rem;
}
.hero-introduction a {
  padding: 2rem 8rem;
  border: 3px solid black;
  margin-bottom: 4rem;
}

.hero-images {
  flex: 1 1 40rem;
  background: linear-gradient(#dad8dd, #dad1d4);
  position: relative;
  z-index: 1;
}
.hero-elena {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.plant {
  position: absolute;
  bottom: 0;
  left: -20%;
  z-index: -1;
  transform: translateY(10%) rotateZ(-10deg) rotateX(-90deg);
  animation: plant-entrance 1.5s ease-in-out 0.5s forwards,
    plant-shake 2.5s infinite ease alternate-reverse 2s;
  transform-origin: bottom;
  max-height: 80%;
}
.plant2 {
  left: 40%;
}
</style>



