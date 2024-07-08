import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore, { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
// SwiperCore.use([Autoplay]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface SwiperInstance {
  autoplay: {
    start: () => void;
    stop: () => void;
  };
}
const ElementBanner = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onHandleClicked = () => {
    setIsClicked(!isClicked);
  };
  let eleBanSwiper: SwiperInstance;
  const $eleBanSwiperPlay = document.querySelector<HTMLElement>(
    ".main-d-ban-swiper .swiper-button-play"
  );
  const $eleBanSwiperStop = document.querySelector<HTMLElement>(
    ".main-d-ban-swiper .swiper-button-stop"
  );

  // 초기 설정
  if ($eleBanSwiperPlay) {
    $eleBanSwiperPlay.style.display = "none";
  }

  // 이벤트 핸들러
  if ($eleBanSwiperPlay) {
    $eleBanSwiperPlay.addEventListener("click", () => {
      if (eleBanSwiper) {
        eleBanSwiper.autoplay.start();
        if ($eleBanSwiperStop) {
          $eleBanSwiperStop.style.display = "";
        }
        $eleBanSwiperPlay.style.display = "none";
      }
    });
  }

  if ($eleBanSwiperStop) {
    $eleBanSwiperStop.addEventListener("click", () => {
      if (eleBanSwiper) {
        eleBanSwiper.autoplay.stop();
        $eleBanSwiperStop.style.display = "none";
        if ($eleBanSwiperPlay) {
          $eleBanSwiperPlay.style.display = "";
        }
      }
    });
  }

  return (
    <div className="main-sect">
      <div className="inner">
        <div className="main-box-responsive type-wrap">
          <div className="d-auto">
            <div className="main-tit-wrap">
              <h2 className="tit">원스톱서비스</h2>
            </div>

            <div className="in">
              <div className="one-serv-wrap">
                <div className="main-d-text">
                  <p className="cate">꾸러미 서비스</p>
                  <p className="tit">
                    생활에 필요한 정보와 서비스를
                    <br />
                    쉽게 찾아보세요!
                  </p>
                  <p className="txt">
                    원스톱서비스, 생애주기별 서비스, 꾸러미 서비스등 간편한
                    서비스를 이용해보세요.
                  </p>
                </div>

                <div className="main-d-links">
                  <Link
                    to="/component/layout/carousel"
                    className="btn btn-txt sm iico-more"
                  >
                    보금자리
                  </Link>
                  <Link
                    to="/component/layout/carousel"
                    className="btn btn-txt sm iico-more"
                  >
                    가족안전
                  </Link>
                  <Link
                    to="/component/layout/carousel"
                    className="btn btn-txt sm iico-more"
                  >
                    동네할인
                  </Link>
                  <Link
                    to="/component/layout/carousel"
                    className="btn btn-txt sm iico-more"
                  >
                    나라지킴
                  </Link>
                  <Link
                    to="/component/layout/carousel"
                    className="btn btn-txt sm iico-more"
                  >
                    퇴직후 생활
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="d-fix">
            <div className="main-tit-wrap">
              <h2 className="tit">복합 콘텐츠</h2>
            </div>

            <div className="in">
              <div className="main-d-ban-swiper">
                <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <Swiper
                    className="swiper-wrapper"
                    id="swiper-wrapper-9ff5acebd946a5ec"
                    aria-live="off"
                    style={{
                      transitionDuration: "0ms",
                      // transform: "translate3d(-362px, 0px, 0px)",
                      transitionDelay: "0ms",
                    }}
                    slidesPerView={1}
                    spaceBetween={16}
                    speed={400}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      nextEl: ".main-d-ban-swiper .swiper-button-next",
                      prevEl: ".main-d-ban-swiper .swiper-button-prev",
                    }}
                    pagination={{
                      el: ".main-d-ban-swiper .swiper-pagination",
                      type: "fraction",
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                  >
                    <SwiperSlide
                      className="swiper-slide swiper-slide-next swiper-slide-prev"
                      role="group"
                      aria-label="2 / 2"
                      data-swiper-slide-index="1"
                      style={{
                        width: "346px",
                        marginRight: "16px",
                      }}
                    >
                      <div className="text">
                        <p className="cate">알아두면 좋은 정부서비스</p>
                        <p className="tit">전기요금</p>
                      </div>
                      <div className="im">
                        <img
                          src="https://uiux.egovframe.go.kr/resources/img/pattern/content/main_ico_battery_M.svg"
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      className="swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="1 / 2"
                      data-swiper-slide-index="0"
                      style={{
                        width: "346px",
                        marginRight: "16px",
                      }}
                    >
                      <div className="text">
                        <p className="cate">알아두면 좋은 정부서비스</p>
                        <p className="tit">전기요금</p>
                      </div>
                      <div className="im">
                        <img
                          src="https://uiux.egovframe.go.kr/resources/img/pattern/content/main_ico_battery_M.svg"
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  ></span>
                </div>
                <div className="swiper-indicator">
                  <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal">
                    <span className="swiper-pagination-current">1</span> /{" "}
                    <span className="swiper-pagination-total">2</span>
                  </div>
                  <div className="swiper-controller">
                    <button
                      type="button"
                      className="swiper-button-play"
                      style={{ display: isClicked ? "" : "none" }}
                      onClick={onHandleClicked}
                    >
                      <span className="sr-only">슬라이드 재생</span>
                    </button>
                    <button
                      type="button"
                      className="swiper-button-stop"
                      style={{ display: isClicked ? "none" : "" }}
                      onClick={onHandleClicked}
                    >
                      <span className="sr-only">슬라이드 멈춤</span>
                    </button>
                  </div>
                  <div className="swiper-navigation">
                    <button
                      type="button"
                      className="swiper-button-prev"
                      tabIndex={0}
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-9ff5acebd946a5ec"
                    >
                      <span className="sr-only">이전</span>
                    </button>
                    <button
                      type="button"
                      className="swiper-button-next"
                      tabIndex={0}
                      aria-label="Next slide"
                      aria-controls="swiper-wrapper-9ff5acebd946a5ec"
                    >
                      <span className="sr-only">다음</span>
                    </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementBanner;
