import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Screenshots = () => {
  const params = {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1499: {
        slidesPerView: 5
      },
      991: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 1
      },
      575: {
        slidesPerView: 1
      }
    }
  };

  return (
    <section className="app-shot-one" id="galeria">
      <img
        src="/assets/images/background/app-shot-bg.png"
        alt="Awesome Image"
        className="app-shot-one__bg"
      />
      <div className="container-fluid">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Nuestros clientes son<br /> <span>lo más importante</span>.
          </h2>
        </div>
        <div
          className="app-shot-one__carousel"
          style={{ position: "relative", paddingBottom: "50px" }}
        >
          <Swiper {...params}>
            {[...Array(9)].map((_, i) => (
              <div className="app-shot-item" key={i}>
                <img src={`/assets/images/app-shots/${i + 1}.webp`} alt="" />
              </div>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div> {/* Paginación fuera del slider */}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;