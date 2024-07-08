import React from "react";

import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const FullBanner = () => {
  return (
    <div className="main-vban-wrap bg">
      <div className="inner">
        <div className="vb-swiper">
          <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
            <Swiper
              className="swiper-wrapper"
              id="swiper-wrapper-2a17aa414473d57c"
              aria-live="polite"
              slidesPerView={1}
              spaceBetween={0}
              speed={400}
              loop={true}
              navigation={{
                nextEl: ".vb-swiper .swiper-button-next",
                prevEl: ".vb-swiper .swiper-button-prev",
              }}
              pagination={{
                el: ".vb-swiper .swiper-pagination",
              }}
              modules={[Navigation, Pagination]}
            >
              <SwiperSlide
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 4"
                data-swiper-slide-index="0"
                style={{ width: "1258px" }}
              >
                <div className="in">
                  <div className="text">
                    <p className="tit">
                      나와 내 가족의 보조금 혜택 정보를{" "}
                      <br className="w-hide" />
                      지금, 한 번에 확인해 보세요.
                    </p>
                    <p className="txt">
                      나와 내 가족의 보조금 혜택 정보를{" "}
                      <br className="w-hide" />
                      지금, 한 번에 확인해 보세요.
                    </p>
                    <Link
                      to="/component/layout/carousel"
                      className="btn primary xlg"
                    >
                      자세히 보러가기
                    </Link>
                  </div>
                  <div className="im">
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/pattern/content/main_ico_bankBook_L.svg"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide swiper-slide-next"
                role="group"
                aria-label="2 / 4"
                data-swiper-slide-index="1"
                style={{ width: "1258px" }}
              >
                <div className="in">
                  <div className="text">
                    <p className="tit">
                      나와 내 가족의 보조금 혜택 정보를{" "}
                      <br className="w-hide" />
                      지금, 한 번에 확인해 보세요.
                    </p>
                    <p className="txt">
                      나와 내 가족의 보조금 혜택 정보를{" "}
                      <br className="w-hide" />
                      지금, 한 번에 확인해 보세요.
                    </p>
                    <Link
                      to="/component/layout/carousel"
                      className="btn primary xlg"
                    >
                      자세히 보러가기
                    </Link>
                  </div>
                  <div className="im">
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/pattern/content/main_ico_bankBook_L.svg"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide"
                role="group"
                aria-label="3 / 4"
                data-swiper-slide-index="2"
                style={{ width: "1258px" }}
              >
                <div className="in">
                  <div className="text">
                    <p className="tit">
                      나와 내 가족의 보조금 혜택 정보를{" "}
                      <br className="w-hide" />
                      지금, 한 번에 확인해 보세요.
                    </p>
                    <p className="txt">
                      나와 내 가족의 보조금 혜택 정보를{" "}
                      <br className="w-hide" />
                      지금, 한 번에 확인해 보세요.
                    </p>
                    <Link
                      to="/component/layout/carousel"
                      className="btn primary xlg"
                    >
                      자세히 보러가기
                    </Link>
                  </div>
                  <div className="im">
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/pattern/content/main_ico_bankBook_L.svg"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide"
                role="group"
                aria-label="4 / 4"
                data-swiper-slide-index="3"
                style={{ width: "1258px" }}
              >
                <div className="in">
                  <div className="text">
                    <p className="tit">
                      나와 내 가족의 보조금 혜택 정보를{" "}
                      <br className="w-hide" />
                      지금, 한 번에 확인해 보세요.
                    </p>
                    <p className="txt">
                      나와 내 가족의 보조금 혜택 정보를{" "}
                      <br className="w-hide" />
                      지금, 한 번에 확인해 보세요.
                    </p>
                    <Link
                      to="/component/layout/carousel"
                      className="btn primary xlg"
                    >
                      자세히 보러가기
                    </Link>
                  </div>
                  <div className="im">
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/pattern/content/main_ico_bankBook_L.svg"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
          <button
            type="button"
            className="swiper-button-prev"
            tabIndex={0}
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-2a17aa414473d57c"
          >
            <span className="sr-only">이전</span>
          </button>
          <button
            type="button"
            className="swiper-button-next"
            tabIndex={0}
            aria-label="Next slide"
            aria-controls="swiper-wrapper-2a17aa414473d57c"
          >
            <span className="sr-only">다음</span>
          </button>
          <div className="swiper-indicator text-center">
            <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                aria-current="true"
              ></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
            </div>
            <Link
              to="/component/layout/carousel"
              className="swiper-button-more"
            >
              <span className="sr-only">더 보기</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBanner;
