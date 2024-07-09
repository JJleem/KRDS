import React from "react";
import Code from "./Code";
import { useState } from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
const Gcontent_StepIndicator = () => {
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
            단계 표시기 <span className="sub">(Step indicator)</span>
          </strong>
        </h2>
        <p className="g-desc">
          단계 표시기는 서비스 이용을 위해 사용자가 거쳐야 하는 일련의 단계를
          시각화하여 표현한 것으로 진행 상태에 대한 피드백을 사용자에게
          전달한다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_07_01_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>단계 숫자: </strong>단계 레이블 옆에 표시되는 작은
                텍스트로 각 단계의 번호를 나타냄. 작은 디스플레이에서는 현재
                단계, 전체 단계 수를 제외한 정보는 생략할 수 있음(예 - 4단계 중
                1단계)
              </li>
              <li>
                <span className="num">2. </span>
                <strong>단계 레이블: </strong>레이블: 각 단계에서 사용자가
                수행해야 할 작업을 요약한 텍스트
              </li>
              <li>
                <span className="num">3. </span>
                <strong>현재 단계 식별자: </strong>진행 중인 단계를 다른 단계와
                구분하는 식별자
              </li>
              <li>
                <span className="num">4. </span>
                <strong>완료된 단계 식별자: </strong>완료된 단계를 다른 단계와
                구분하는 식별자
              </li>
              <li>
                <span className="num">5. </span>
                <strong>연결선: </strong>단계와 단계 사이를 연결하는 선으로
                프로세스의 선형성을 보여줌
              </li>
            </ol>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  단계 레이블은 해당 프로세스에 대한 간결하고 명확한 내용으로
                  제공한다.
                </strong>
                <p className="info-txt">
                  레이블은 해당 단계/프로세스에서 사용자가 수행해야 하는 작업의
                  특성을 명확하게 보여줄 수 있는 내용으로 제공해야 한다.
                  레이블로만 설명을 제공하기 어려운 경우, 보조 텍스트를 인접
                  영역에 제공할 수 있으나, 레이블 자체는 텍스트가 잘리거나 줄
                  바꿈이 발생하지 않도록 짧은 단어, 문구로 구성해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_07_01_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_07_01_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  단계는 좌에서 우 또는 상에서 하의 순서로 논리적으로 전개될 수
                  있도록 구성한다.
                </strong>
                <p className="info-txt">
                  사용자가 여러 단계로 구성된 프로세스에 관여 중임을 분명하게
                  인지하고 프로세스의 진행 방향을 확인할 수 있도록 각 단계는
                  선형적으로 표현한다. 단계의 흐름은 연결선, 화살표, 꺾쇠 기호
                  등을 활용하여 표현할 수 있다. 이 중 화살표, 꺾쇠 기호는 각
                  단계를 선형적으로 탐색하는 경우에 적합한 표현 방식이다. 어떤
                  표현 방식을 사용하든 한 사이트 내에서 단계는 일관성 있게
                  표현되어야 한다.
                </p>
              </li>
              <li>
                <strong>단계의 수는 최소 3개에서 최대 7개로 제공한다.</strong>
                <p className="info-txt">
                  사용자의 인지적 부담을 줄이기 위해 단계의 수는 최대 7개로
                  제한할 것을 권장한다. 프로세스를 단계로 구분할 때 불필요한
                  단계나 사용자의 행동이 포함되지 않았는지 반복적으로 점검하고
                  논리적, 효율성 측면에서 문제가 없는 과업은 가능한 한 하나의
                  단계에서 처리될 수 있도록 해야 한다.
                </p>
              </li>
              <li>
                <strong>현재 단계를 명확하게 인지할 수 있도록 표현한다.</strong>
                <p className="info-txt">
                  사용자가 자신이 거쳐온 단계, 앞으로 거쳐야 할 단계를 확인하고
                  진행 중인 단계의 과업을 명확하게 인지할 수 있도록 현재 단계를
                  다른 단계와 구분하여 표현해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_07_01_03.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_07_01_03_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>과업의 성격에 적합한 탐색 모델을 제공한다.</strong>
                <p className="info-txt">
                  단계 표시기는 프로세스 및 단계의 논리적인 구성에 따라 순차적
                  탐색, 적응형 탐색 방식을 지원한다. 순차적 탐색 방식에서
                  사용자는 일단 정해진 순서에 따라 단계를 진행해야 한다. 한
                  단계에서 필요한 행동이 완료되지 않으면 다음 단계로 이동하는 데
                  사용되는 UI는 비활성화 상태로 제공된다. 반면 적응형 탐색
                  방식에서 사용자는 특정 단계를 건너뛰고 다른 단계를 먼저 탐색할
                  수 있고 건너뛴 단계에 자유로운 순서로 접근할 수 있다.
                </p>
              </li>
              <li>
                <strong>선택적인 단계를 건너뛸 수 있는 수단을 제공한다.</strong>
                <p className="info-txt">
                  선택적인 단계는 가능한 한 모든 필수 단계를 거친 후 가장
                  마지막에 제공하는 것이 바람직하다. 프로세스에 선택적인 단계가
                  포함된 경우, 사용자가 선택적인 단계를 건너뛰어 다음 필수
                  단계로 이동할 수 있는 수단을 제공해야 한다. 남은 필수 단계가
                  존재하지 않는다면 최종 단계(최종 검토/제출)로 건너뛴다.
                  건너뛰기 UI에는 사용자가 쉽게 식별하고 이해할 수 있도록
                  ‘건너뛰기’, ‘다음에 입력하기’ 등 명확한 텍스트 레이블을
                  제공해야 한다.
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
                <strong>순서 있는 목록을 사용한다.</strong>
                <p className="info-txt">
                  단계 목록과 항목을 &lt;ol&gt;, &lt;li&gt;로 마크업하여 스크린
                  리더에서 전체 단계 수와 구성을 빠르게 파악할 수 있도록 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 제목 제공</li>
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  단계 식별자를 색상으로만 구분하여 표현하지 않는다.
                </strong>
                <p className="info-txt">
                  현재 단계, 완료된 단계를 색상 이외의 수단으로 구분할 수 있는
                  시각적 단서를 제공해야 한다. 밑줄 제공, 1px 이상의 테두리
                  차이, 식별자 제공 등의 방법으로 크기나 형태 차원에서 정보를
                  구분하는 방법을 사용할 수 있다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 색에 무관한 콘텐츠 인식</li>
                  <li>WCAG 2.1 Use of Color (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  현재 단계를 스크린 리더로 확인할 수 있도록 한다.
                </strong>
                <p className="info-txt">
                  단계 인디케이터가 시각적으로만 구분되는 것이 아니라 스크린
                  리더로도 전달될 수 있도록 해야 한다. 만약 단계 레이블에
                  ‘현재’, ‘현재 단계’라는 텍스트가 제공되지 않고 있다면 현재
                  탐색 중인 단계에 ariacurrent=”true” 속성을 추가한다.
                  aria-current 속성을 사용할 수 없는 경우, 현재 단계 레이블에
                  ‘현재 단계’라는 텍스트를 추가하여 시각적으로 표시되도록 하거나
                  프로그램적으로만 전달되도록 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 대체 텍스트 제공</li>
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
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
              <div className="g-example ex-full">
                <ol className="step-wrap">
                  <li className="done">
                    <span>
                      <i className="step">1단계</i>
                      <p className="step-tit">단계 레이블</p>
                    </span>
                  </li>
                  <li className="done">
                    <span>
                      <i className="step">2단계</i>
                      <p className="step-tit">단계 레이블</p>
                    </span>
                  </li>
                  <li className="done">
                    <span>
                      <i className="step">3단계</i>
                      <p className="step-tit">단계 레이블</p>
                    </span>
                  </li>
                  <li className="active">
                    <span>
                      <em className="sr-only">현재단계</em>
                      <i className="step">4단계</i>
                      <p className="step-tit">단계 레이블</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="step">5단계</i>
                      <p className="step-tit">단계 레이블</p>
                    </span>
                  </li>
                </ol>

                <br />
                <br />

                <div className="page-title-wrap between">
                  <h2 className="h-tit">타이틀</h2>

                  <ol className="step-wrap">
                    <li className="done">
                      <span>
                        <i className="step">1단계</i>
                        <p className="step-tit">유의사항 확인</p>
                      </span>
                    </li>
                    <li className="done">
                      <span>
                        <i className="step">2단계</i>
                        <p className="step-tit">신청인 정보</p>
                      </span>
                    </li>
                    <li className="active">
                      <span>
                        <em className="sr-only">현재단계</em>
                        <i className="step">3단계</i>
                        <p className="step-tit">이사 전 살던 곳</p>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="step">4단계</i>
                        <p className="step-tit">이사 온 곳</p>
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader07_01_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse07_01_01"
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

export default Gcontent_StepIndicator;
