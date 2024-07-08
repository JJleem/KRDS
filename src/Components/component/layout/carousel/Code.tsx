import React from "react";
import { useState } from "react";
const Code = () => {
  const [copyState, setCopyState] = useState("copy");
  const handleCopyClick = () => {
    navigator.clipboard.writeText(`
<!-- visual banner -->
<div class="main-vban-wrap bg">
    <div class="inner">
        <div class="vb-swiper">
            <div class="swiper">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                        <div class="in">
                            <div class="text">
                                <p class="tit">나와 내 가족의 보조금 혜택 정보를 <br class="w-hide">지금, 한 번에 확인해 보세요.</p>
                                <p class="txt">나와 내 가족의 보조금 혜택 정보를 <br class="w-hide">지금, 한 번에 확인해 보세요.</p>
                                <a href="#" class="btn primary xlg">자세히 보러가기</a>
                            </div>
                            <div class="im">
                                <img src="../../../resources/img/pattern/content/main_ico_bankBook_L.svg" alt="">
                            </div>
                        </div>
                    </li>
                    <li class="swiper-slide">
                        <div class="in">
                            <div class="text">
                                <p class="tit">나와 내 가족의 보조금 혜택 정보를 <br class="w-hide">지금, 한 번에 확인해 보세요.</p>
                                <p class="txt">나와 내 가족의 보조금 혜택 정보를 <br class="w-hide">지금, 한 번에 확인해 보세요.</p>
                                <a href="#" class="btn primary xlg">자세히 보러가기</a>
                            </div>
                            <div class="im">
                                <img src="../../../resources/img/pattern/content/main_ico_bankBook_L.svg" alt="">
                            </div>
                        </div>
                    </li>
                    <li class="swiper-slide">
                        <div class="in">
                            <div class="text">
                                <p class="tit">나와 내 가족의 보조금 혜택 정보를 <br class="w-hide">지금, 한 번에 확인해 보세요.</p>
                                <p class="txt">나와 내 가족의 보조금 혜택 정보를 <br class="w-hide">지금, 한 번에 확인해 보세요.</p>
                                <a href="#" class="btn primary xlg">자세히 보러가기</a>
                            </div>
                            <div class="im">
                                <img src="../../../resources/img/pattern/content/main_ico_bankBook_L.svg" alt="">
                            </div>
                        </div>
                    </li>
                    <li class="swiper-slide">
                        <div class="in">
                            <div class="text">
                                <p class="tit">나와 내 가족의 보조금 혜택 정보를 <br class="w-hide">지금, 한 번에 확인해 보세요.</p>
                                <p class="txt">나와 내 가족의 보조금 혜택 정보를 <br class="w-hide">지금, 한 번에 확인해 보세요.</p>
                                <a href="#" class="btn primary xlg">자세히 보러가기</a>
                            </div>
                            <div class="im">
                                <img src="../../../resources/img/pattern/content/main_ico_bankBook_L.svg" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <button type="button" class="swiper-button-prev">
                <span class="sr-only">이전</span>
            </button>
            <button type="button" class="swiper-button-next">
                <span class="sr-only">다음</span>
            </button>
            <div class="swiper-indicator text-center">
                <div class="swiper-pagination"></div>
                <a href="#" class="swiper-button-more">
                    <span class="sr-only">더 보기</span>
                </a>
            </div>
        </div>
    </div>
</div>
<!-- //visual banner -->

<script>
    const vbSwiper = new Swiper('.vb-swiper .swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 400,
        loop: true,
        navigation: {
            nextEl: '.vb-swiper .swiper-button-next',
            prevEl: '.vb-swiper .swiper-button-prev',
        },
        pagination: {
            el: ".vb-swiper .swiper-pagination",
        },
    });
</script>
    `);
    setCopyState("copied");
  };

  return           <div
  id="accordionCollapse04_09_01"
  className="accordion-collapse collapse"
  aria-expanded="false"
  aria-labelledby="accordionHeader04_09_01"
>
  <div className="accordion-body">
    <div className="g-code-box">
      <div className="code-toolbar">
        <pre
          data-src="code/component_04_09_01.html"
          className="language-html"
          data-src-status="loaded"
          tabIndex={0}
        >
          <code className="language-html">
            <span className="token comment">
              &lt;!-- visual banner --&gt;
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                main-vban-wrap bg
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                inner
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                vb-swiper
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                swiper
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                ul
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                swiper-wrapper
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                li
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                swiper-slide
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>in
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                text
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                p
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                tit
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            나와 내 가족의 보조금 혜택 정보를{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                br
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                w-hide
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            지금, 한 번에 확인해 보세요.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                p
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                txt
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            나와 내 가족의 보조금 혜택 정보를{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                br
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                w-hide
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            지금, 한 번에 확인해 보세요.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                a
              </span>{" "}
              <span className="token attr-name">href</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>#
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                btn primary xlg
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            자세히 보러가기
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                a
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>im
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                img
              </span>{" "}
              <span className="token attr-name">src</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                https://uiux.egovframe.go.kr/resources/img/pattern/content/main_ico_bankBook_L.svg
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">alt</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                li
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                li
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                swiper-slide
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>in
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                text
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                p
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                tit
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            나와 내 가족의 보조금 혜택 정보를{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                br
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                w-hide
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            지금, 한 번에 확인해 보세요.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                p
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                txt
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            나와 내 가족의 보조금 혜택 정보를{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                br
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                w-hide
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            지금, 한 번에 확인해 보세요.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                a
              </span>{" "}
              <span className="token attr-name">href</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>#
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                btn primary xlg
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            자세히 보러가기
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                a
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>im
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                img
              </span>{" "}
              <span className="token attr-name">src</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                https://uiux.egovframe.go.kr/resources/img/pattern/content/main_ico_bankBook_L.svg
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">alt</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                li
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                li
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                swiper-slide
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>in
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                text
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                p
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                tit
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            나와 내 가족의 보조금 혜택 정보를{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                br
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                w-hide
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            지금, 한 번에 확인해 보세요.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                p
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                txt
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            나와 내 가족의 보조금 혜택 정보를{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                br
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                w-hide
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            지금, 한 번에 확인해 보세요.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                a
              </span>{" "}
              <span className="token attr-name">href</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>#
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                btn primary xlg
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            자세히 보러가기
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                a
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>im
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                img
              </span>{" "}
              <span className="token attr-name">src</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                https://uiux.egovframe.go.kr/resources/img/pattern/content/main_ico_bankBook_L.svg
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">alt</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                li
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                li
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                swiper-slide
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>in
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                text
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                p
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                tit
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            나와 내 가족의 보조금 혜택 정보를{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                br
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                w-hide
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            지금, 한 번에 확인해 보세요.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                p
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                txt
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            나와 내 가족의 보조금 혜택 정보를{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                br
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                w-hide
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            지금, 한 번에 확인해 보세요.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                a
              </span>{" "}
              <span className="token attr-name">href</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>#
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                btn primary xlg
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            자세히 보러가기
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                a
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>im
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                img
              </span>{" "}
              <span className="token attr-name">src</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                https://uiux.egovframe.go.kr/resources/img/pattern/content/main_ico_bankBook_L.svg
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">alt</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                li
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                ul
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                button
              </span>{" "}
              <span className="token attr-name">type</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                button
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                swiper-button-prev
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                span
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                sr-only
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            이전
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                button
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                button
              </span>{" "}
              <span className="token attr-name">type</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                button
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                swiper-button-next
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                span
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                sr-only
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            다음
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                button
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                swiper-indicator text-center
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                swiper-pagination
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                a
              </span>{" "}
              <span className="token attr-name">href</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>#
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                swiper-button-more
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                span
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">
                  =
                </span>
                <span className="token punctuation">"</span>
                sr-only
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            더 보기
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                a
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
                div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token comment">
              &lt;!-- //visual banner --&gt;
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;
                </span>
                script
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token script">
              <span className="token language-javascript">
                <span className="token keyword">const</span>{" "}
                vbSwiper{" "}
                <span className="token operator">=</span>{" "}
                <span className="token keyword">new</span>{" "}
                <span className="token class-name">
                  Swiper
                </span>
                <span className="token punctuation">(</span>
                <span className="token string">
                  '.vb-swiper .swiper'
                </span>
                <span className="token punctuation">,</span>{" "}
                <span className="token punctuation">
                  &lbrace;
                </span>
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
                <span className="token number">0</span>
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
                  navigation
                </span>
                <span className="token operator">:</span>{" "}
                <span className="token punctuation">
                  &lbrace;
                </span>
                <span className="token literal-property property">
                  nextEl
                </span>
                <span className="token operator">:</span>{" "}
                <span className="token string">
                  '.vb-swiper .swiper-button-next'
                </span>
                <span className="token punctuation">,</span>
                <span className="token literal-property property">
                  prevEl
                </span>
                <span className="token operator">:</span>{" "}
                <span className="token string">
                  '.vb-swiper .swiper-button-prev'
                </span>
                <span className="token punctuation">,</span>
                <span className="token punctuation">
                  &rbrace;
                </span>
                <span className="token punctuation">,</span>
                <span className="token literal-property property">
                  pagination
                </span>
                <span className="token operator">:</span>{" "}
                <span className="token punctuation">
                  &lbrace;
                </span>
                <span className="token literal-property property">
                  el
                </span>
                <span className="token operator">:</span>{" "}
                <span className="token string">
                  ".vb-swiper .swiper-pagination"
                </span>
                <span className="token punctuation">,</span>
                <span className="token punctuation">
                  &rbrace;
                </span>
                <span className="token punctuation">,</span>
                <span className="token punctuation">
                  &rbrace;
                </span>
                <span className="token punctuation">)</span>
                <span className="token punctuation">;</span>
              </span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">
                  &lt;/
                </span>
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
</div>;
};

export default Code;
