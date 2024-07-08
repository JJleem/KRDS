import React from "react";
import { useState } from "react";
const CodeTwo = () => {
  const [copyState, setCopyState] = useState("copy");
  const handleCopyClick = () => {
    navigator.clipboard.writeText(`
<!-- 원스톱서비스 & 복합 콘텐츠 -->
<div class="main-sect">
    <div class="inner">
        <div class="main-box-responsive type-wrap">
            <div class="d-auto">
                <div class="main-tit-wrap">
                    <h2 class="tit">원스톱서비스</h2>
                </div>

                <div class="in">
                    <div class="one-serv-wrap">
                        <div class="main-d-text">
                            <p class="cate">꾸러미 서비스</p>
                            <p class="tit">생활에 필요한 정보와 서비스를<br>쉽게 찾아보세요!</p>
                            <p class="txt">원스톱서비스, 생애주기별 서비스, 꾸러미 서비스등 간편한 서비스를
                                이용해보세요.</p>
                        </div>

                        <div class="main-d-links">
                            <a href="#" class="btn btn-txt sm ico-more">보금자리</a>
                            <a href="#" class="btn btn-txt sm ico-more">가족안전</a>
                            <a href="#" class="btn btn-txt sm ico-more">동네할인</a>
                            <a href="#" class="btn btn-txt sm ico-more">나라지킴</a>
                            <a href="#" class="btn btn-txt sm ico-more">퇴직후
                                생활</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-fix">
                <div class="main-tit-wrap">
                    <h2 class="tit">복합 콘텐츠</h2>
                </div>

                <div class="in">
                    <div class="main-d-ban-swiper">
                        <div class="swiper">
                            <ul class="swiper-wrapper">
                                <li class="swiper-slide">
                                    <div class="text">
                                        <p class="cate">알아두면 좋은 정부서비스</p>
                                        <p class="tit">전기요금</p>
                                    </div>
                                    <div class="im">
                                        <img src="../../../resources/img/pattern/content/main_ico_battery_M.svg" alt="">
                                    </div>
                                </li>
                                <li class="swiper-slide">
                                    <div class="text">
                                        <p class="cate">알아두면 좋은 정부서비스</p>
                                        <p class="tit">전기요금</p>
                                    </div>
                                    <div class="im">
                                        <img src="../../../resources/img/pattern/content/main_ico_battery_M.svg" alt="">
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="swiper-indicator">
                            <div class="swiper-pagination"></div>
                            <div class="swiper-controller">
                                <button type="button" class="swiper-button-play">
                                    <span class="sr-only">슬라이드 재생</span>
                                </button>
                                <button type="button" class="swiper-button-stop">
                                    <span class="sr-only">슬라이드 멈춤</span>
                                </button>
                            </div>
                            <div class="swiper-navigation">
                                <button type="button" class="swiper-button-prev">
                                    <span class="sr-only">이전</span>
                                </button>
                                <button type="button" class="swiper-button-next">
                                    <span class="sr-only">다음</span>
                                </button>
                                <a href="#" class="swiper-button-more">
                                    <span class="sr-only">더 보기</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- //원스톱서비스 & 복합 콘텐츠 -->

<script>
    const eleBanSwiper = new Swiper('.main-d-ban-swiper .swiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        speed: 400,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main-d-ban-swiper .swiper-button-next',
            prevEl: '.main-d-ban-swiper .swiper-button-prev',
        },
        pagination: {
            el: ".main-d-ban-swiper .swiper-pagination",
            type: "fraction",
        },
    });
    const $eleBanSwiperPlay = document.querySelector('.main-d-ban-swiper .swiper-button-play');
    const $eleBanSwiperStop = document.querySelector('.main-d-ban-swiper .swiper-button-stop');

    $eleBanSwiperPlay.style.display = "none";

    $eleBanSwiperPlay.addEventListener("click", () => {
        eleBanSwiper.autoplay.start();
        $eleBanSwiperStop.style.display = "";
        $eleBanSwiperPlay.style.display = "none";
    });

    $eleBanSwiperStop.addEventListener("click", () => {
        eleBanSwiper.autoplay.stop();
        $eleBanSwiperStop.style.display = "none";
        $eleBanSwiperPlay.style.display = "";
    });
</script>
    `);
    setCopyState("copied");
  };

  return (
    <div
      id="accordionCollapse04_09_02"
      className="accordion-collapse collapse"
      aria-expanded="false"
      aria-labelledby="accordionHeader04_09_02"
    >
      <div className="accordion-body">
        <div className="g-code-box">
          <div className="code-toolbar">
            <pre
              data-src="code/component_04_09_02.html"
              className="language-html"
              data-src-status="loaded"
              tabIndex={0}
            >
              <code className="language-html">
                <span className="token comment">
                  &lt;!-- 원스톱서비스 &amp; 복합 콘텐츠 --&gt;
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    main-sect
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    inner
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    main-box-responsive type-wrap
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    d-auto
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    main-tit-wrap
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    h2
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    tit
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                원스톱서비스
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    h2
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>in
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    one-serv-wrap
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    main-d-text
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>p
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    cate
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                꾸러미 서비스
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>p
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>p
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    tit
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                생활에 필요한 정보와 서비스를
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    br
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                쉽게 찾아보세요!
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>p
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>p
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    txt
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                원스톱서비스, 생애주기별 서비스, 꾸러미 서비스등 간편한 서비스를
                이용해보세요.
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>p
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    main-d-links
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>a
                  </span>{" "}
                  <span className="token attr-name">href</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>#
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    btn btn-txt sm ico-more
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                보금자리
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>a
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>a
                  </span>{" "}
                  <span className="token attr-name">href</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>#
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    btn btn-txt sm ico-more
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                가족안전
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>a
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>a
                  </span>{" "}
                  <span className="token attr-name">href</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>#
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    btn btn-txt sm ico-more
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                동네할인
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>a
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>a
                  </span>{" "}
                  <span className="token attr-name">href</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>#
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    btn btn-txt sm ico-more
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                나라지킴
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>a
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>a
                  </span>{" "}
                  <span className="token attr-name">href</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>#
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    btn btn-txt sm ico-more
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                퇴직후 생활
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>a
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    d-fix
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    main-tit-wrap
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    h2
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    tit
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                복합 콘텐츠
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    h2
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>in
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    main-d-ban-swiper
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    ul
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper-wrapper
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    li
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper-slide
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    text
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>p
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    cate
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                알아두면 좋은 정부서비스
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>p
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>p
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    tit
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                전기요금
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>p
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>im
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    img
                  </span>{" "}
                  <span className="token attr-name">src</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    https://uiux.egovframe.go.kr/resources/img/pattern/content/main_ico_battery_M.svg
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">alt</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    li
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    li
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper-slide
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    text
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>p
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    cate
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                알아두면 좋은 정부서비스
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>p
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>p
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    tit
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                전기요금
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>p
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>im
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    img
                  </span>{" "}
                  <span className="token attr-name">src</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    https://uiux.egovframe.go.kr/resources/img/pattern/content/main_ico_battery_M.svg
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">alt</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    li
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    ul
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper-indicator
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper-pagination
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper-controller
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    button
                  </span>{" "}
                  <span className="token attr-name">type</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    button
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper-button-play
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    span
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    sr-only
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                슬라이드 재생
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    span
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    button
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    button
                  </span>{" "}
                  <span className="token attr-name">type</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    button
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper-button-stop
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    span
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    sr-only
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                슬라이드 멈춤
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    span
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    button
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper-navigation
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    button
                  </span>{" "}
                  <span className="token attr-name">type</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    button
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper-button-prev
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    span
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    sr-only
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                이전
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    span
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    button
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    button
                  </span>{" "}
                  <span className="token attr-name">type</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    button
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper-button-next
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    span
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    sr-only
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                다음
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    span
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    button
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>a
                  </span>{" "}
                  <span className="token attr-name">href</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>#
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    swiper-button-more
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    span
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    sr-only
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                더 보기
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    span
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>a
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token comment">
                  &lt;!-- //원스톱서비스 &amp; 복합 콘텐츠 --&gt;
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    script
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token script">
                  <span className="token language-javascript">
                    <span className="token keyword">const</span> eleBanSwiper{" "}
                    <span className="token operator">=</span>{" "}
                    <span className="token keyword">new</span>{" "}
                    <span className="token class-name">Swiper</span>
                    <span className="token punctuation">(</span>
                    <span className="token string">
                      '.main-d-ban-swiper .swiper'
                    </span>
                    <span className="token punctuation">,</span>{" "}
                    <span className="token punctuation">&lbrace;</span>
                    <span className="token literal-property property">
                      slidesPerView
                    </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token number">1</span>
                    <span className="token punctuation">,</span>
                    <span className="token literal-property property">
                      spaceBetween
                    </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token number">16</span>
                    <span className="token punctuation">,</span>
                    <span className="token literal-property property">
                      speed
                    </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token number">400</span>
                    <span className="token punctuation">,</span>
                    <span className="token literal-property property">
                      loop
                    </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token boolean">true</span>
                    <span className="token punctuation">,</span>
                    <span className="token literal-property property">
                      autoplay
                    </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token punctuation">&lbrace;</span>
                    <span className="token literal-property property">
                      delay
                    </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token number">2500</span>
                    <span className="token punctuation">,</span>
                    <span className="token literal-property property">
                      disableOnInteraction
                    </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token boolean">false</span>
                    <span className="token punctuation">,</span>
                    <span className="token punctuation">&rbrace;</span>
                    <span className="token punctuation">,</span>
                    <span className="token literal-property property">
                      navigation
                    </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token punctuation">&lbrace;</span>
                    <span className="token literal-property property">
                      nextEl
                    </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token string">
                      '.main-d-ban-swiper .swiper-button-next'
                    </span>
                    <span className="token punctuation">,</span>
                    <span className="token literal-property property">
                      prevEl
                    </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token string">
                      '.main-d-ban-swiper .swiper-button-prev'
                    </span>
                    <span className="token punctuation">,</span>
                    <span className="token punctuation">&rbrace;</span>
                    <span className="token punctuation">,</span>
                    <span className="token literal-property property">
                      pagination
                    </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token punctuation">&lbrace;</span>
                    <span className="token literal-property property">el</span>
                    <span className="token operator">:</span>{" "}
                    <span className="token string">
                      ".main-d-ban-swiper .swiper-pagination"
                    </span>
                    <span className="token punctuation">,</span>
                    <span className="token literal-property property">
                      type
                    </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token string">"fraction"</span>
                    <span className="token punctuation">,</span>
                    <span className="token punctuation">&rbrace;</span>
                    <span className="token punctuation">,</span>
                    <span className="token punctuation">&rbrace;</span>
                    <span className="token punctuation">)</span>
                    <span className="token punctuation">;</span>
                    <span className="token keyword">const</span>{" "}
                    $eleBanSwiperPlay <span className="token operator">=</span>{" "}
                    document
                    <span className="token punctuation">.</span>
                    <span className="token function">querySelector</span>
                    <span className="token punctuation">(</span>
                    <span className="token string">
                      '.main-d-ban-swiper .swiper-button-play'
                    </span>
                    <span className="token punctuation">)</span>
                    <span className="token punctuation">;</span>
                    <span className="token keyword">const</span>{" "}
                    $eleBanSwiperStop <span className="token operator">=</span>{" "}
                    document
                    <span className="token punctuation">.</span>
                    <span className="token function">querySelector</span>
                    <span className="token punctuation">(</span>
                    <span className="token string">
                      '.main-d-ban-swiper .swiper-button-stop'
                    </span>
                    <span className="token punctuation">)</span>
                    <span className="token punctuation">;</span>
                    $eleBanSwiperPlay
                    <span className="token punctuation">.</span>
                    style
                    <span className="token punctuation">.</span>
                    display <span className="token operator">=</span>{" "}
                    <span className="token string">"none"</span>
                    <span className="token punctuation">;</span>
                    $eleBanSwiperPlay
                    <span className="token punctuation">.</span>
                    <span className="token function">addEventListener</span>
                    <span className="token punctuation">(</span>
                    <span className="token string">"click"</span>
                    <span className="token punctuation">,</span>{" "}
                    <span className="token punctuation">(</span>
                    <span className="token punctuation">)</span>{" "}
                    <span className="token operator">=&gt;</span>{" "}
                    <span className="token punctuation">&lbrace;</span>
                    eleBanSwiper
                    <span className="token punctuation">.</span>
                    autoplay
                    <span className="token punctuation">.</span>
                    <span className="token function">start</span>
                    <span className="token punctuation">(</span>
                    <span className="token punctuation">)</span>
                    <span className="token punctuation">;</span>
                    $eleBanSwiperStop
                    <span className="token punctuation">.</span>
                    style
                    <span className="token punctuation">.</span>
                    display <span className="token operator">=</span>{" "}
                    <span className="token string">""</span>
                    <span className="token punctuation">;</span>
                    $eleBanSwiperPlay
                    <span className="token punctuation">.</span>
                    style
                    <span className="token punctuation">.</span>
                    display <span className="token operator">=</span>{" "}
                    <span className="token string">"none"</span>
                    <span className="token punctuation">;</span>
                    <span className="token punctuation">&rbrace;</span>
                    <span className="token punctuation">)</span>
                    <span className="token punctuation">;</span>
                    $eleBanSwiperStop
                    <span className="token punctuation">.</span>
                    <span className="token function">addEventListener</span>
                    <span className="token punctuation">(</span>
                    <span className="token string">"click"</span>
                    <span className="token punctuation">,</span>{" "}
                    <span className="token punctuation">(</span>
                    <span className="token punctuation">)</span>{" "}
                    <span className="token operator">=&gt;</span>{" "}
                    <span className="token punctuation">&lbrace;</span>
                    eleBanSwiper
                    <span className="token punctuation">.</span>
                    autoplay
                    <span className="token punctuation">.</span>
                    <span className="token function">stop</span>
                    <span className="token punctuation">(</span>
                    <span className="token punctuation">)</span>
                    <span className="token punctuation">;</span>
                    $eleBanSwiperStop
                    <span className="token punctuation">.</span>
                    style
                    <span className="token punctuation">.</span>
                    display <span className="token operator">=</span>{" "}
                    <span className="token string">"none"</span>
                    <span className="token punctuation">;</span>
                    $eleBanSwiperPlay
                    <span className="token punctuation">.</span>
                    style
                    <span className="token punctuation">.</span>
                    display <span className="token operator">=</span>{" "}
                    <span className="token string">""</span>
                    <span className="token punctuation">;</span>
                    <span className="token punctuation">&rbrace;</span>
                    <span className="token punctuation">)</span>
                    <span className="token punctuation">;</span>
                  </span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    script
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
              </code>
            </pre>
            <div className="toolbar">
              <div className="toolbar-item">
              <button
                  className="copy-to-clipboard-button"
                  type="button"
                  data-copy-state={copyState}
                  onClick={handleCopyClick}
                >
                  <span>{copyState.toUpperCase()}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeTwo;
