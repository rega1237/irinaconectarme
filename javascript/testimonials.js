// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import testimonial_1 from "../assets/images/testimonial_1.webp";
import testimonial_2 from "../assets/images/testimonial_2.webp";
import testimonial_3 from "../assets/images/testimonial_3.webp";
import testimonial_4 from "../assets/images/testimonial_4.webp";
import testimonial_5 from "../assets/images/testimonial_5.webp";

const testimonialsContainer = document.getElementById("container");

const testimonials = [
  {
    name: "Lina",
    photo: testimonial_1,
    text: `“Jamás había asistido a un taller vivencial y para mi  fue revelador, a mis 50 años me hace sentido lo que vivo  hoy y lo que soy  y lo mejor es aprender a  decidir lo que quiero SER eligiendo el camino de mi bienestar”`,
  },
  {
    name: "Mónica",
    photo: testimonial_2,
    text: `"Conectarme para mí fue una experiencia y completamente transformadora. Me permití observar mis emociones y me sentí en un espacio seguro"`,
  },
  {
    name: "Geraldine",
    photo: testimonial_3,
    text: `"Conectarme fue una experiencia muy linda y llegó a mi en un momento que lo necesitaba, lo describo como un bálsamo. Me gustaron las dinámicas y como se reflejaban con mis sentimientos actuales"`,
  },
  {
    name: "Adriana",
    photo: testimonial_4,
    text: `"Descubrí que aún me falta por aprender, a pesar de que voy a terapia este taller fue esencial para mi crecimiento y mi proceso de encontrarme, conecté conmigo y con personas maravillosas. Es un taller necesario, vas a aprender de ti y lo que puedes lograr de una forma increíble"`,
  },
  {
    name: "Trina",
    photo: testimonial_5,
    text: `"Después de vivir esta experiencia mi mayor descubrimiento fue el daño que me hace ser tan exigente y perfeccionista conmigo. Pude reconocer esas creencias que me limitan y salir de allí con plan para dejar fluir las cosas. El taller te da muchas herramientas para la vida, aprendes a confiar en ti y en el proceso"`,
  },
];

// init Swiper:
const swiper = new Swiper(".mySwiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Autoplay],
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 400,
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 684px
    684: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

testimonials.forEach((testimonial) => {
  const testimonialDiv = document.createElement("div");
  testimonialDiv.classList.add("swiper-slide");
  testimonialDiv.innerHTML = `
  <div class="bg-cream rounded-lg">
    <div class="p-5">
      <i class="fa-solid fa-star" style="color: #ffd43b"></i>
      <i class="fa-solid fa-star" style="color: #ffd43b"></i>
      <i class="fa-solid fa-star" style="color: #ffd43b"></i>
      <i class="fa-solid fa-star" style="color: #ffd43b"></i>
      <i class="fa-solid fa-star" style="color: #ffd43b"></i>
    </div>
    <div class="testimonial-text-container">
      <p>
        ${testimonial.text}
      </p>
    </div>
    <div class="flex gap-5 items-center p-5">
      <img
        class="w-[30%]"
        src=${testimonial.photo}
        alt=""
      />
      <p class="font-kaoly text-pink text-lg">${testimonial.name}</p>
    </div>
  </div>
  `;
  testimonialsContainer.appendChild(testimonialDiv);
});

/* 
        <div class="swiper-slide">
          <div class="bg-cream rounded-lg">
            <div class="p-5">
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
            </div>
            <div class="w-[90%] mx-auto">
              <p>
                “Conectarme para mí fue una experiencia y completamente
                transformadora. Me permití observar mis emociones y me sentí en
                un espacio seguro”
              </p>
            </div>
            <div class="flex gap-5 items-center p-5">
              <img
                class="max-w-[70px]"
                src="assets/images/testimonial_1.webp"
                alt=""
              />

              <p class="font-kaoly text-pink text-lg">Nombre</p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="bg-cream rounded-lg">
            <div class="p-5">
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
            </div>
            <div class="w-[90%] mx-auto">
              <p>
                “Conectarme para mí fue una experiencia y completamente
                transformadora. Me permití observar mis emociones y me sentí en
                un espacio seguro”
              </p>
            </div>
            <div class="flex gap-5 items-center p-5">
              <img
                class="max-w-[70px]"
                src="assets/images/testimonial_2.webp"
                alt=""
              />

              <p class="font-kaoly text-pink text-lg">Nombre</p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="bg-cream rounded-lg">
            <div class="p-5">
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
            </div>
            <div class="w-[90%] mx-auto">
              <p>
                “Conectarme para mí fue una experiencia y completamente
                transformadora. Me permití observar mis emociones y me sentí en
                un espacio seguro”
              </p>
            </div>
            <div class="flex gap-5 items-center p-5">
              <img
                class="max-w-[70px]"
                src="assets/images/testimonial_3.webp"
                alt=""
              />

              <p class="font-kaoly text-pink text-lg">Nombre</p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="bg-cream rounded-lg">
            <div class="p-5">
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              <i class="fa-solid fa-star" style="color: #ffd43b"></i>
            </div>
            <div class="w-[90%] mx-auto">
              <p>
                “Conectarme para mí fue una experiencia y completamente
                transformadora. Me permití observar mis emociones y me sentí en
                un espacio seguro”
              </p>
            </div>
            <div class="flex gap-5 items-center p-5">
              <img
                class="max-w-[70px]"
                src="assets/images/testimonial_4.webp"
                alt=""
              />

              <p class="font-kaoly text-pink text-lg">Nombre</p>
            </div>
          </div>
        </div>





        
    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <!-- Initialize Swiper -->
    <script>
      var swiper = new Swiper(".mySwiper", {
        autoplay: {
          delay: 3000,
        },
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      });
    </script>
        */
