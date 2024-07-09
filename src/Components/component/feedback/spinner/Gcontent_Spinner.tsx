import React from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
import Code from "./Code";
import { useState } from "react";
const Gcontent_Spinner = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>컴포넌트</span>
          <strong>
            스피너 <span className="sub">(Spinner)</span>
          </strong>
        </h2>
        <p className="g-desc">
          스피너는 페이지나 요소의 다양한 처리 상태를 시각적으로 표시한 것으로
          화면 전체나 일부 요소에 접근하기 위해 일정 시간 동안 대기해야 함을
          사용자에게 안내한다.
        </p>
      </div>

      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">용례</h3>

          <div className="g-conts-area">
            <h4 className="g-heading-s">사용하기 적합한 경우</h4>
            <div className="g-conts-wrap">
              <ul className="info-list decimal">
                <li>
                  <strong>화면이 완전히 새롭게 로딩되는 경우</strong>
                  <p className="info-txt">
                    페이지 전체가 로딩되거나 페이지의 맥락이 완전히 변경된
                    영역의 콘텐츠가 변경되는 경우에 사용한다. 스피너를 화면 중앙
                    또는 맥락이 변경되는 콘텐츠 영역 중앙에 배치하여 전체
                    페이지의 콘텐츠가 로딩되고 있음을 표시한다. 페이지 로딩에
                    오랜 시간이 걸리고 중대한 변경이 발생하는 프로세스에
                    적합하다.
                  </p>
                </li>
                <li>
                  <strong>
                    화면에서 일부 요소의 상태에 변경이 발생하는 경우
                  </strong>
                  <p className="info-txt">
                    화면이나 페이지의 전환 없이 일부 요소에 시스템의 작업이
                    진행되고 있는 경우 해당 요소 컨테이너 내부에 스피너를 표시할
                    수 있다. 검색 필드, 버튼과 같은 컴포넌트에 사용한다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">사용하기 적합하지 않은 경우</h4>

            <div className="g-conts-wrap">
              <ul className="info-list decimal">
                <li>
                  <strong>
                    완료 상태로 변경되는 데 1초 미만의 시간이 걸리는 경우
                  </strong>
                  <p className="info-txt">
                    스피너 제공을 고려하고 있는 화면, 요소가 완료 상태로
                    변경되는 데 안정적으로 1초 미만의 시간이 걸리는 경우
                    스피너를 사용하지 않는다. 이용 가능한 상태로 빠르게 전환될
                    수 있음에도 불구하고 스피너를 제공하게 되면 오히려 주의가
                    산만해질 수 있다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">확정 스피너</h4>
            <p className="info-txt">
              확정 스피너는 완료 상태로 변경되기까지의 진행률을 계산할 수 있는
              경우에 사용한다. 식별자가 도넛형 경로의 0도에서부터 360도까지
              채워지면서 진행 정도를 표시한다. 파일 다운로드, 업로드와 같이
              명확한 종료 지점이 존재하는 경우에 사용하기 적합하다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">불확정 스피너</h4>
            <p className="info-txt">
              불확정 스피너는 계산할 수 없는 대기 시간을 표현할 때 사용한다.
              필터링·정렬 옵션을 사용했을 때와 같이 시스템의 작업이 진행
              중이지만 완료까지 걸리는 시간을 확정할 수 없는 경우에 사용하기
              적합하다.
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_07_02_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>경로: </strong>식별자가 표시되는 경로로 표현 방식에 따라
                시각적으로 경로를 표시하거나 식별자의 운동 경로를 위해 가상으로
                설정할 수 있음
              </li>
              <li>
                <span className="num">2. </span>
                <strong>식별자: </strong>경로를 따라 이동하는 시각적 표시기로
                상태 정보를 안내함
              </li>
            </ol>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>스피너를 장식용으로 사용하지 않는다.</strong>
                <p className="info-txt">
                  스피너는 실제 대기 상태가 필요한 경우에 사용해야 한다. 화면이
                  빠르게 표시될 수 있음에도 불구하고 스피너를 제공하게 되면
                  오히려 주의가 산만해질 수 있다.
                </p>
              </li>
              <li>
                <strong>상황에 맞는 적절한 크기의 스피너를 사용한다.</strong>
                <p className="info-txt">
                  페이지 전체의 맥락이 변경되거나 공간적으로 제약이 없는
                  요소에서의 대기 상태를 표현하는 경우에는 큰 크기의 스피너를
                  사용하여 사용자가 스피너를 명확하게 인지할 수 있도록 한다.
                  버튼, 메뉴 항목, 입력 필드와 같이 세로 및 가로 공간이 제한되어
                  있는 경우 작은 스피너를 사용한다.
                </p>
              </li>
              <li>
                <strong>스피너는 처리가 진행 중인 영역 근처에 배치한다.</strong>
                <p className="info-txt">
                  사용자가 주의를 기울일 것으로 예상되는 위치에 배치해야 한다.
                  예를 들어 특정 콘텐츠 영역에 대한 데이터가 검색되고 있음을
                  표시하는 경우 해당 영역에 스피너를 표시한다. 입력폼의 제출
                  처리 상태를 표시하기 위해서는 제출 버튼 내부에 스피너를 사용할
                  수 있다.
                </p>
              </li>
              <li>
                <strong>
                  불확정 스피너의 애니메이션의 루프를 중지하지 않는다.
                </strong>
                <p className="info-txt">
                  불확정 스피너에서 식별자가 0도 위치에 도달하였을 때
                  애니메이션이 중지되면 사용자는 시스템이 작동을 멈춘 것으로
                  오인할 수 있다.
                </p>
              </li>
              <li>
                <strong>
                  컴포넌트의 일부로 작게 표시되지 않는 한, 두 개 이상의 스피너를
                  동시에 표시하지 않는다.
                </strong>
                <p className="info-txt">
                  정보 과부하와 시각적 노이즈를 줄이기 위해 가능한 한 화면에는
                  1개의 스피너만 표시될 수 있도록 한다. 파일 업로드 컴포넌트와
                  같이 개별 항목에 진행 상태 정보가 표시되어야 하는 경우를
                  제외하고, 화면이나 관련 영역 중앙에 1개의 스피너를 사용하는
                  것이 적절하다.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">접근성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  인접 배경과 경로 간 명도대비, 경로와 식별자 간 명도대비를 3:1
                  이상으로 표현한다.
                </strong>
                <p className="info-txt">
                  시력이 좋지 않은 사용자도 스피너의 출현 여부와 진행 상태를
                  인지할 수 있도록 인접 배경과 경로 간 명도대비, 경로와 식별자
                  간 명도대비를 3:1 이상으로 제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 텍스트 콘텐츠의 명도 대비</li>
                  <li>KWCAG 2.2 색에 무관한 콘텐츠 인식</li>
                  <li>WCAG 2.1 Use of Color (A)</li>
                  <li>WCAG 2.1 Non-text Contrast (AA)</li>
                </ul>
              </li>
              <li>
                <strong>
                  스피너 상태에 대한 설명을 스크린 리더에서 확인할 수 있도록
                  한다.
                </strong>
                <p className="info-txt">
                  스크린 리더 사용자가 스피너를 통해 제공되는 페이지 로딩 상태
                  정보를 확인할 수 있도록 스피너가 제공되기 시작했을 때와 로딩이
                  완료되었을 때의 상태 정보를 제공해야 한다. 페이지의 핵심
                  정보에 대한 음성 안내 방해를 최소화하도록 aria-live 속성값은
                  assertive가 아닌 polite를 사용해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 링크 텍스트</li>
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                  <li>WCAG 2.1 Status Messages (AA)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">상호작용 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>확정 스피너</strong>
                <p className="info-txt">
                  식별자가 도넛형 경로의 0도에서부터 360도까지 채워지면서 진행
                  정도를 표시한다. 식별자가 채워진 정도는 실제 진행률을 반영해야
                  하며, 360도 전체가 채워지면 스피너를 숨기고 페이지를 표시한다.
                  식별자는 0도에서 운동을 시작하여 시계 방향으로 경로를 채운다.
                </p>
              </li>
              <li>
                <strong>불확정 스피너</strong>
                <p className="info-txt">
                  식별자가 도넛형 경로의 0도에서부터 360도를 따라 회전하면서
                  대기 상태에 있음을 표시한다. 페이지가 표시되기 전까지 식별자의
                  회전 운동은 반복되어야 한다. 식별자는 0도에서 운동을 시작하여
                  시계 방향으로 회전한다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="g-example-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">마크업 예시</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본</h4>
            <div className="g-example-wrap">
              <div className="g-example">
                <div className="form-group">
                  <div className="form-tit">Label</div>
                  <div className="form-conts">
                    <div className="form-spinner">
                      <input
                        type="text"
                        id="consult_name"
                        className="form-control"
                        placeholder="placeholder"
                      />
                      <div className="spinner"></div>
                    </div>
                  </div>
                </div>
                <br />
                <br />

                <div className="spinner">Loading data..</div>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader07_02_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse07_02_01"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <Code />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TopBtn />
    </div>
  );
};

export default Gcontent_Spinner;
