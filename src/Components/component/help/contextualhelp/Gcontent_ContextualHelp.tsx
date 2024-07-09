import React from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
import Code from "./Code";
import { useState } from "react";
const Gcontent_ContextualHelp = () => {
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
            맥락적 도움말 <span className="sub">(Contextual help)</span>
          </strong>
        </h2>
        <p className="g-desc">
          컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를
          제공하는 컴포넌트이다. 맥락적 도움말은 정보 아이콘이나 도움 아이콘
          버튼을 통해 사용자가 요청하는 경우에만 화면에 표시된다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">용례</h3>

          <div className="g-conts-area">
            <h4 className="g-heading-s">사용하기 적합하지 않은 경우</h4>
            <div className="g-conts-wrap">
              <ul className="info-list decimal">
                <li>
                  <strong>컨트롤 요소에 대한 레이블을 제공할 때</strong>
                  <p className="info-txt">
                    텍스트 레이블 없는 아이콘 단독 컨트롤 요소에 레이블을
                    표시하고자 하는 경우에는 툴팁을 사용하는 것이 적절하다.
                  </p>
                </li>
                <li>
                  <strong>
                    사용자가 작업을 완료하는 데 필요한 중요한 정보를 전달할 때
                  </strong>
                  <p className="info-txt">
                    사용자가 맥락적 도움말을 발견하지 못할 수 있으므로 사용자가
                    반드시 확인해야 하는 중요한 정보를 도움말 팝오버에 숨겨서는
                    안 된다. 중요한 정보를 전달하는 데는 인라인 도움말이나 도움
                    패널이 적합하다.
                  </p>
                </li>
                <li>
                  <strong>간단한 추가 정보를 제공할 때</strong>
                  <p className="info-txt">
                    툴팁이나 인라인 도움말을 사용하는 것이 적절하다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">사용하기 적합한 경우</h4>
            <div className="g-conts-wrap">
              <ul className="info-list decimal">
                <li>
                  <strong>요소에 대한 설명을 제공할 때</strong>
                </li>
                <li>
                  <strong>
                    접근이나 사용이 불가능한 요소에 대한 설명을 제공할 때
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">정보 제공</h4>
            <p className="info-txt">
              버튼이 정보(i) 아이콘으로 표현된다. 컴포넌트나 레이블 옆에
              배치되어 해당 요소에 관한 부가적인 정보나 사용자가 알았을 때
              도움이 되는 정보를 전달하기 위해 사용된다. 본문은 간략하지만
              요소에 대한 구체적인 안내를 포함하고 있어야 한다. <br />
              예) 비활성화 상태인 컨트롤 요소에 대해 현시점에서 사용할 수 없는
              이유에 대한 설명 등
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">도움 제공</h4>
            <p className="info-txt">
              버튼이 물음표(?) 아이콘으로 표현된다. 사용자의 과업을 적극적으로
              돕기 위한 정보를 전달하기 위해 사용한다. 컴포넌트 자체 또는
              컴포넌트 이용에 관한 보다 상세하고 심층적인 정보를 제공하며
              이미지, 동영상, 링크를 포함할 수 있다. <br />
              예) 입력 방법에 대한 설명, 전문 용어에 대한 해설 등
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap dark">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_08_02_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>아이콘 버튼: </strong>도움말 콘텐츠의 표시를 토글하는
                버튼. 정보의 유형에 따라 정보(i) 아이콘, 물음표(?) 아이콘으로
                구분됨
              </li>
              <li>
                <span className="num">2. </span>
                <strong>컨테이너: </strong>도움말 영역과 배경을 구분하는 요소
              </li>
              <li>
                <span className="num">3. </span>
                <strong>제목: </strong>도움말의 제목
              </li>
              <li>
                <span className="num">4. </span>
                <strong>본문: </strong>구체적인 설명 텍스트. 일반적으로 짧은
                단락으로 구성되며, 링크를 포함할 수 있음
              </li>
              <li>
                <span className="num">5. </span>
                <strong>닫기 버튼: </strong>컨테이너에 포함된 x 아이콘 버튼
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
                  아이콘 버튼은 도움 정보를 제공하고자 하는 요소 주변에
                  배치한다.
                </strong>
                <p className="info-txt">
                  정보를 제공하고자 하는 컴포넌트나 레이블 옆에 배치하여 관련
                  요소와의 연관성이 명확하게 인지될 수 있도록 한다.
                </p>
              </li>
              <li>
                <strong>팝오버 영역이 화면을 벗어나지 않도록 표현한다.</strong>
                <p className="info-txt">
                  도움말 팝오버 영역이 시각적으로 확인할 수 없는 화면 밖의
                  영역에 배치되어 내부 콘텐츠가 가려지지 않도록 해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  팝오버 영역이 본문의 중요 콘텐츠를 가리지 않도록 표현한다.
                </strong>
                <p className="info-txt">
                  팝오버 영역이 활성화 버튼과 맥락적으로 도움을 제공하고자 하는
                  본문 콘텐츠 요소를 가리지 않도록 적절한 표시 방향을 설정한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_08_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  사용자가 작업을 수행하기 위해 반드시 알아야 하는 필수 정보가
                  맥락적 도움말 콘텐츠에서만 제공되지 않도록 한다.
                </strong>
                <p className="info-txt">
                  맥락적 도움말을 발견하지 못할 수 있으므로 사용자가 반드시
                  확인해야 하는 중요한 정보를 도움말 팝오버에만 제공해서는 안
                  된다. 맥락적 도움말은 필수 정보가 아니라 제공되었을 때
                  사용자가 더 쉽게 이용하는 데 도움되는 정보를 제공해야 한다.
                  필수 정보를 잘 요약하여 본문에 표현하고 관련된 유용한 정보를
                  맥락적 도움말로 제공한다.
                </p>
              </li>
              <li>
                <strong>
                  맥락적 도움말에서 또 다른 맥락적 도움말을 실행하거나 모달을
                  실행하지 않도록 한다.
                </strong>
                <p className="info-txt">
                  여러 개의 도움말 팝업을 동시에 활성화 하거나 하나의 팝오버를
                  다른 팝오버 내부에 중첩시켜서는 안 된다. 또한 맥락적
                  도움말에서 모달이 생성되지 않도록 하여 복잡성을 피해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_08_02_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>도움말 내부 링크는 새 창으로 실행한다.</strong>
                <p className="info-txt">
                  본문에 링크가 포함되어 있는 경우에는 항상 새 창으로 링크를
                  실행시켜 사용자의 현재 과업 맥락이 중단되지 않도록 한다.
                </p>
              </li>
              <li>
                <strong>
                  맥락적 도움말과 도움 패널을 함께 사용하지 않는다.
                </strong>
                <p className="info-txt">
                  사용자가 인터페이스의 작동 방식을 혼동하지 않도록 하나의 과업
                  흐름에서 맥락적 도움말과 도움 패널을 동시에 사용하지 않아야
                  한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_08_02_04.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">플랫폼에 대한 고려 사항</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  모든 화면 크기에서 팝오버 영역이 완전히 표시되는지 확인한다.
                </strong>
                <p className="info-txt">
                  특정 너비에서 도움말 팝오버 영역이 시각적으로 확인할 수 없는
                  화면 밖의 영역에 배치되지 않는지 확인하여 문제가 발견된 경우
                  적절한 영역으로 배치를 변경해야 한다.
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
                  아이콘과 인접 배경 간 명도 대비를 3:1 이상으로 제공한다.
                </strong>
                <p className="info-txt">
                  사용자가 아이콘이 컨트롤로 사용되고 있으며 유형에 따라 다른
                  정보를 제공함을 인지할 수 있도록 아이콘과 인접 배경의 명도
                  대비를 3:1 이상으로 제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 텍스트 콘텐츠의 명도 대비</li>
                  <li>WCAG 2.1 Non-text Contrast (AA)</li>
                </ul>
              </li>
              <li>
                <strong>아이콘 버튼에 이름을 제공한다.</strong>
                <p className="info-txt">
                  스크린 리더 사용자가 활성화 버튼의 용도를 이해할 수 있도록
                  각각의 아이콘 버튼에 이름을 제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 링크 텍스트</li>
                  <li>WCAG 2.1 Non-text Content (A)</li>
                  <li> WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
              <li>
                <strong>아이콘 버튼에 고유하고 적절한 이름을 제공한다.</strong>
                <p className="info-txt">
                  아이콘 버튼이 맥락적으로 도움을 제공하고자 하는 본문 콘텐츠의
                  내용을 포함하고 있지 않다면 해당 정보를 아이콘 버튼의 이름으로
                  포함하여 스크린 리더 사용자가 정확한 용도를 이해할 수 있도록
                  제공한다. 페이지에 존재하는 다른 아이콘 버튼과 혼동되지 않도록
                  모든 아이콘 버튼의 이름은 고유해야 한다. <br />
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 링크 텍스트</li>
                  <li>WCAG 2.1 Headings and Labels (AA)</li>
                </ul>
              </li>
              <li>
                <strong>
                  맥락적 도움말은 사용자가 요청한 경우에만 실행되어야 한다.
                </strong>
                <p className="info-txt">
                  페이지가 로딩되자마자 특정 맥락적 도움말이 활성화되는 등
                  사용자가 의도하지 않는 상황에서 자동으로 실행되어서는 안 된다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 사용자 요구에 따른 실행</li>
                  <li>WCAG 2.1 On Focus (A)</li>
                  <li>WCAG 2.1 On Input (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  아이콘 버튼과 도움말 팝오버 콘텐츠를 적절한 순서로 제공한다.
                </strong>
                <p className="info-txt">
                  스크린 리더 사용자가 도움말 팝오버 콘텐츠에 논리적인 순서로
                  접근할 수 있도록 관련 있는 아이콘 버튼 다음 요소로 제공해야
                  한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 콘텐츠의 선형화</li>
                  <li>WCAG 2.1 Meaningful Sequence (A)</li>
                </ul>
              </li>
              <li>
                <strong>키보드 초점은 논리적인 순서로 이동해야 한다.</strong>
                <p className="info-txt">
                  맥락적 도움말 팝오버 내부에 링크가 포함된 경우, 맥락적
                  도움말을 활성화했을 때 키보드 초점은 팝오버 내부의 대화형
                  요소로 이동해야 한다. 이때, 팝오버 내부에서 키보드 함정이
                  발생하지 않도록 유의해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 초점 이동과 표시</li>
                  <li>WCAG 2.1 Focus Order (A)</li>
                  <li>WCAG 2.1 No Keyboard Trap (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  아이콘 버튼의 크기를 44px * 44px 이상으로 제공하는 방안을
                  고려한다.
                </strong>
                <p className="info-txt">
                  클릭이나 터치 영역을 정교하게 조작하기 어려운 사용자를
                  고려하여 아이콘 버튼의 크기를 44px X 44px 이상으로 제공하는
                  방안을 고려한다. 이때, 단위는 CSS 픽셀을 기준으로 한다. <br />
                  만약 아이콘 버튼이 문장의 끝에 제공되고 있다면 문장의 일부
                  요소로 간주되기 때문에 크기에 대한 요구사항을 충족하지 않아도
                  된다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 조작 가능</li>
                  <li>WCAG 2.1 Target Size (AAA)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">상호작용 가이드라인</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">맥락적 도움말 실행</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 맥락적 도움말 실행에 대한 표로
                  구분/설명으로 구성되어있으며 구분 항목은 Click, Enter, Space
                  로 구성되어있음
                </caption>
                <colgroup>
                  <col style={{ width: "15%" }} />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Click</th>
                    <td>아이콘 버튼을 Click 하면 도움말 콘텐츠가 표시된다.</td>
                  </tr>
                  <tr>
                    <th scope="row">Enter, Space</th>
                    <td>
                      아이콘 버튼이 초점을 가진 상태에서 Enter 또는 Space 키를
                      누르면 도움말 콘텐츠가 표시된다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">도움말 내부 콘텐츠 탐색</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 도움말 내부 콘텐츠 탐색에 대한 표로 이동에
                  대한 표로 구분/설명으로 구성되어있으며 구분 항목은 Tab 로
                  구성되어있음
                </caption>
                <colgroup>
                  <col style={{ width: "15%" }} />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Tab</th>
                    <td>
                      도움말 팝오버가 활성화된 상태에서 내부 링크 요소를
                      순차적으로 탐색한다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">맥락적 도움말 비활성화</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 맥락적 도움말 비활성화에 대한 표로 이동에
                  대한 표로 구분/설명으로 구성되어있으며 구분 항목은 Click, Esc,
                  Enter, Space 로 구성되어있음
                </caption>
                <colgroup>
                  <col style={{ width: "15%" }} />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Click</th>
                    <td>
                      아이콘 버튼 또는 도움말 팝오버 바깥쪽 본문 영역을 Click
                      하면 도움말 콘텐츠가 숨겨진다. <br />
                      키보드 초점은 관련된 아이콘 버튼으로 돌아간다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Esc</th>
                    <td>
                      초점의 위치와 상관 없이 Esc 키를 누르면 도움말 콘텐츠가
                      숨겨진다. <br />
                      키보드 초점은 관련된 아이콘 버튼으로 돌아간다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Enter, Space</th>
                    <td>
                      아이콘 버튼이 초점을 가진 상태에서 Enter 또는 Space 키를
                      누르면 도움말 콘텐츠가 숨겨진다. <br />
                      키보드 초점은 관련된 아이콘 버튼으로 돌아간다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                <div className="krds-tooltip-wrap top left">
                  <div className="tool-txt">
                    예시이미지(상단 왼쪽)
                    <button type="button" className="tool-btn">
                      <span className="sr-only">열기</span>
                    </button>
                  </div>
                  <div className="tool-in">
                    <h4 className="tool-tit">도움말 제목</h4>
                    <div className="tool-cnt">
                      <p>
                        컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된
                        상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보
                        아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는
                        경우에만 화면에 표시된다.
                      </p>
                      <p>
                        <a href="#" className="btn btn-txt ico-arr xsm">
                          바로가기
                        </a>
                      </p>
                    </div>
                    <button type="button" className="tool-close">
                      <span className="sr-only">닫기</span>
                    </button>
                  </div>
                </div>
                <div className="krds-tooltip-wrap top center">
                  <div className="tool-txt">
                    예시이미지(상단 중앙)
                    <button type="button" className="tool-btn">
                      <span className="sr-only">열기</span>
                    </button>
                  </div>
                  <div className="tool-in">
                    <h4 className="tool-tit">도움말 제목</h4>
                    <div className="tool-cnt">
                      <p>
                        컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된
                        상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보
                        아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는
                        경우에만 화면에 표시된다.
                      </p>
                      <p>
                        <a href="#" className="btn btn-txt ico-arr xsm">
                          바로가기
                        </a>
                      </p>
                    </div>
                    <button type="button" className="tool-close">
                      <span className="sr-only">닫기</span>
                    </button>
                  </div>
                </div>
                <div className="krds-tooltip-wrap top right">
                  <div className="tool-txt">
                    예시이미지(상단 오른쪽)
                    <button type="button" className="tool-btn">
                      <span className="sr-only">열기</span>
                    </button>
                  </div>
                  <div className="tool-in">
                    <h4 className="tool-tit">도움말 제목</h4>
                    <div className="tool-cnt">
                      <p>
                        컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된
                        상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보
                        아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는
                        경우에만 화면에 표시된다.
                      </p>
                      <p>
                        <a href="#" className="btn btn-txt ico-arr xsm">
                          바로가기
                        </a>
                      </p>
                    </div>
                    <button type="button" className="tool-close">
                      <span className="sr-only">닫기</span>
                    </button>
                  </div>
                </div>

                <br />
                <br />

                <div className="krds-tooltip-wrap bottom left">
                  <div className="tool-txt">
                    예시이미지(하단 왼쪽)
                    <button type="button" className="tool-btn">
                      <span className="sr-only">열기</span>
                    </button>
                  </div>
                  <div className="tool-in">
                    <h4 className="tool-tit">도움말 제목</h4>
                    <div className="tool-cnt">
                      <p>
                        컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된
                        상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보
                        아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는
                        경우에만 화면에 표시된다.
                      </p>
                      <p>
                        <a href="#" className="btn btn-txt ico-arr xsm">
                          바로가기
                        </a>
                      </p>
                    </div>
                    <button type="button" className="tool-close">
                      <span className="sr-only">닫기</span>
                    </button>
                  </div>
                </div>

                <div className="krds-tooltip-wrap bottom center">
                  <div className="tool-txt">
                    예시이미지(하단 중앙)
                    <button type="button" className="tool-btn">
                      <span className="sr-only">열기</span>
                    </button>
                  </div>
                  <div className="tool-in">
                    <h4 className="tool-tit">도움말 제목</h4>
                    <div className="tool-cnt">
                      <p>
                        컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된
                        상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보
                        아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는
                        경우에만 화면에 표시된다.
                      </p>
                      <p>
                        <a href="#" className="btn btn-txt ico-arr xsm">
                          바로가기
                        </a>
                      </p>
                    </div>
                    <button type="button" className="tool-close">
                      <span className="sr-only">닫기</span>
                    </button>
                  </div>
                </div>

                <div className="krds-tooltip-wrap bottom right">
                  <div className="tool-txt">
                    예시이미지(하단 오른쪽)
                    <button type="button" className="tool-btn">
                      <span className="sr-only">열기</span>
                    </button>
                  </div>
                  <div className="tool-in">
                    <h4 className="tool-tit">도움말 제목</h4>
                    <div className="tool-cnt">
                      <p>
                        컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된
                        상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보
                        아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는
                        경우에만 화면에 표시된다.
                      </p>
                      <p>
                        <a href="#" className="btn btn-txt ico-arr xsm">
                          바로가기
                        </a>
                      </p>
                    </div>
                    <button type="button" className="tool-close">
                      <span className="sr-only">닫기</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader08_02_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse08_02_01"
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

export default Gcontent_ContextualHelp;
