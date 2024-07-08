import React from "react";
import Code from "./Code";
import { useState } from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
const Gcontent_Table = () => {
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
            표 <span className="sub">(Table)</span>
          </strong>
        </h2>
        <p className="g-desc">
          표는 데이터를 하나 이상의 행과 열로 조직화하여 표현하는 형식으로
          사용자가 빠르게 많은 양의 정보를 확인하고 비교할 수 있도록 도와준다.
          기본적으로 대화형 요소가 아니기 때문에 열 제목에 데이터를 정렬하기
          위한 컨트롤 요소가 포함된 상황 외에 행 전체나 데이터 셀이 대화형으로
          작동하지 않는다.
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
                  <strong>표 형식의 데이터를 제공하는 경우</strong>
                  <p className="info-txt">예) 통계 데이터</p>
                </li>
                <li>
                  <strong>
                    다수의 항목에 대해서 유사한 방식으로 구조화된 정보를
                    표현하는 경우
                  </strong>
                  <p className="info-txt">에) 리소스 목록, 게시물 목록</p>
                </li>
              </ul>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">사용하기 적합하지 않은 경우</h4>
              <div className="g-conts-wrap">
                <ul className="info-list decimal">
                  <li>
                    <strong>다른 콘텐츠 형식이 더 적합한 경우</strong>
                    <p className="info-txt">
                      콘텐츠의 의미와 맥락을 고려하였을 때 정의 목록, 순서 있는
                      목록, 순서 없는 목록, 제목과 문단의 조합으로 표현하는 것이
                      적합한 경우에는 표를 사용하지 않을 것을 권장한다. 데이터
                      셀 내의 정보가 복잡하거나 계층적인 구조를 가진 경우에도
                      마찬가지이다.
                    </p>
                  </li>
                  <li>
                    <strong>데이터 간 복잡한 관계를 표현해야 하는 경우</strong>
                    <p className="info-txt">
                      막대그래프와 같은 차트나 인포그래픽으로 정보를 제공하는
                      것이 보다 직관적일 수 있다.
                    </p>
                  </li>
                  <li>
                    <strong>그리드를 표현하고자 하는 경우</strong>
                    <p className="info-txt">
                      요소를 사각형으로 배치하기 위한 목적으로 표를 사용해서는
                      안 된다. 그리드, 플렉스 박스 등 적절한 스타일 속성을
                      활용해야 한다.
                    </p>
                  </li>
                  <li>
                    <strong>데이터 구조에 일관성이 없는 경우</strong>
                    <p className="info-txt">
                      카드와 같은 유연한 레이아웃을 사용하는 것이 적합하다.
                    </p>
                  </li>
                  <li>
                    <strong>
                      데이터와 관련하여 복잡한 상호작용이 필요한 경우
                    </strong>
                    <p className="info-txt">
                      표 컴포넌트 대신 구조화 목록 컴포넌트를 사용해야 한다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_04_11_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>헤더: </strong>각 데이터 셀의 제목
              </li>
              <li>
                <span className="num">2. </span>
                <strong>정렬 버튼(선택): </strong> 특정 열을
                오름차순/내림차순으로 정렬하기 위한 버튼으로 삼각형 아이콘으로
                제공됨
              </li>
              <li>
                <span className="num">3. </span>
                <strong>행: </strong>서로 다른 유형의 데이터를 보여줌
              </li>
              <li>
                <span className="num">4. </span>
                <strong>디바이더: </strong>행과 행 사이를 시각적으로 구분하는
                수단
              </li>
              <li>
                <span className="num">5. </span>
                <strong>데이터 셀: </strong>행을 구성하는 데이터 요소
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
                  표는 데이터 잘림 없이 표시될 수 있는 영역에 사용한다.
                </strong>
                <p className="info-txt">
                  아코디언, 모달과 같이 공간의 제한으로 인해 데이터가 잘리거나
                  데이터 확인을 위해 가로 스크롤을 사용해야 하는 영역에는 표를
                  사용하지 않아야 한다. 필요한 경우, 각각의 열이 아래로
                  떨어지도록 배치한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_04_11_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  열의 최소 너비는 콘텐츠의 길이를 고려하여 설정한다.
                </strong>
                <p className="info-txt">
                  데이터 셀을 구성하는 텍스트는 가능한 3줄을 넘어가지 않도록
                  하고 행과 행 사이의 간격을 적절하게 제공하여 사용자가 한 번에
                  많은 데이터를 비교할 수 있도록 해야 한다.
                </p>
              </li>
              <li>
                <strong>열 구분선의 사용을 지양한다.</strong>
                <p className="info-txt">
                  열 구분선은 표 콘텐츠를 구조화하거나 구분하는 데 도움이 될 수
                  있으나 시각적인 복잡성을 높이므로 반드시 필요한 경우를
                  제외하고 사용하지 않는 것이 바람직하다.
                </p>
              </li>
              <li>
                <strong>
                  양적 데이터를 전달하기 위한 숫자는 오른쪽으로 정렬한다.
                </strong>
                <p className="info-txt">
                  개수, 퍼센트, 용량 등의 양적 데이터는 셀에서 오른쪽으로
                  정렬하여 사용자가 숫자를 더 잘 비교할 수 있도록 해야 한다.
                  숫자를 오른쪽으로 정렬하면 단위 구분 기호(, %, KB 등)가 일관된
                  위치에 배치되므로 가독성을 높인다.
                </p>
              </li>
              <li>
                <strong>텍스트 데이터, 명목 데이터는 왼쪽으로 정렬한다.</strong>
                <p className="info-txt">
                  일반적인 텍스트 데이터와 범주를 구분하기 위한 목적으로
                  사용되는 명목 데이터(예 - 날짜, 우편번호, 핸드폰 번호, IP주소
                  등)는 왼쪽으로 정렬하여 사용자가 데이터를 탐색하기 위해 일관된
                  위치에서 안구 운동을 시작할 수 있도록 해야 한다.
                </p>
              </li>
              <li>
                <strong>열의 개수를 최소화한다.</strong>
                <p className="info-txt">
                  수평으로 길게 배치된 정보를 읽는 것보다 수직으로 배치된 정보를
                  읽는 것이 더 쉬우므로 표를 구성하는 열의 개수를 최소화하는
                  것이 좋다. 가능하다면 불필요하거나 상대적으로 덜 중요한 열을
                  제거하고, 행과 열을 전환하는 방법을 활용할 수 있다.
                </p>
              </li>
              <li>
                <strong>
                  사용자가 원하는 대로 데이터를 정렬할 수 있는 기능을 제공한다.
                </strong>
                <p className="info-txt">
                  데이터의 수가 많은 경우 데이터를 논리적인 순서에 따라
                  정렬하거나 검색, 필터링, 탐색하는 기능을 제공하면 사용자가
                  효율적으로 원하는 데이터를 발견할 수 있다. 열 헤더에 정렬
                  버튼이 제공되는 경우, 기본 상태는 가장 첫 번째 열을 기준으로
                  데이터가 정렬된 상태이다.
                </p>
              </li>
              <li>
                <strong>
                  데이터값이 존재하지 않는 경우 셀을 비워두지 않고 대시(-)를
                  제공한다.
                </strong>
                <p className="info-txt">
                  데이터 셀에 아무런 텍스트가 표시되지 않으면 사용자에게 혼동을
                  줄 수 있으므로 빈 셀에는 대시 기호를 표시하여 이용할 수 있는
                  정보가 존재하지 않음을 안내해야 한다.
                </p>
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
                  화면 너비가 충분하지 않은 경우 데이터의 배열 방식의 변경을
                  고려한다.
                </strong>
                <p className="info-txt">
                  한 줄의 행 헤더 또는 열 헤더로 구성된 단일 차원의 단순한 표의
                  경우, 헤더 텍스트와 데이터 텍스트를 수직으로 배치를 변경할 수
                  있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_04_11_03.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_04_11_03_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  화면 너비가 충분하지 않은 경우 표 영역에 가로 스크롤을
                  사용하는 방안을 고려한다.
                </strong>
                <p className="info-txt">
                  행과 열 간의 관계 표현이 유지되어야 하거나 구성이 복잡하다면
                  셀의 배치를 변경하지 않고 표 섹션에 가로 스크롤을 생성할 수
                  있다. 만약 표에 열 헤더가 존재한다면 가로 스크롤의 위치가
                  변경되더라도 열 헤더를 화면의 왼쪽에 고정함으로써 데이터를
                  탐색하는 과정의 편의성을 높일 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_04_11_04.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">접근성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>데이터의 구조를 적절하게 반영하여 마크업한다.</strong>
                <p className="info-txt">
                  표는 &lt;table&gt;로 마크업하고 &lt;caption&gt;,
                  &lt;thead&gt;, &lt;th&gt;, &lt;tfoot&gt; 태그를 적절히
                  사용하여 시각적으로 표현된 정보의 구조가 스크린 리더를
                  통해서도 동등하게 전달될 수 있도록 해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 표의 구성</li>
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  가로 스크롤이 필요한 경우 단순한 동작으로 스크롤 위치를 조정할
                  수 있도록 한다.
                </strong>
                <p className="info-txt">
                  표 섹션이 스크롤되는 영역임을 인지할 수 있도록 가로 스크롤을
                  표시하고 버튼을 클릭하거나 탭하는 단순한 동작만으로도 스크롤
                  위치를 조정할 수 있도록 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 누르기 동작 지원</li>
                  <li>WCAG 2.1 Pointer Gestures (A)</li>
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
                <div className="tbl-wrap">
                  <table className="tbl col data">
                    <caption>
                      추가 민원 신청 여부 확인 표로 민원 신청인, 구분으로
                      구성되어있으며 민원 신청인인 전출지 전 세대주,새로운
                      세대주,전입지 세대주로 구성되어 있음
                    </caption>
                    <colgroup>
                      <col style={{ width: "30%" }} />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">민원 신청인</th>
                        <th scope="col">구분</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">전출지 전 세대주</th>
                        <td>
                          세대주가 아닌 세대원이 신청하면서 세대주(또는
                          미성년자)를 포함하여 이사하는 경우
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">새로운 세대주</th>
                        <td>세대주 변경이 있는 경우</td>
                      </tr>
                      <tr>
                        <th scope="row">전입지 세대주</th>
                        <td>이사온 곳에 기존에 살고 있는 세대주가 있는 경우</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader04_11_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse04_11_01"
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

export default Gcontent_Table;
