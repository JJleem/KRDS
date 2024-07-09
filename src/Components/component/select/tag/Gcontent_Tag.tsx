import React from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
import Code from "./Code";
import { useState } from "react";
const Gcontent_Tag = () => {
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
            태그 <span className="sub">(Tag)</span>
          </strong>
        </h2>
        <p className="g-desc">
          태그는 키워드 또는 레이블을 사용하여 콘텐츠를 분류하는 수단이다.
          콘텐츠 항목에 직접 관련 분류 체계, 데이터 속성을 표시하거나, 목록에서
          특정 분류 체계, 데이터 속성을 가진 항목이 선택되었음을 보여주기 위한
          태그 그룹으로 사용된다.
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
                  <strong>필터링·정렬 패턴에서 설정된 옵션을 표시할 때</strong>
                  <p className="info-txt">
                    사용자가 선택한 필터링·정렬 옵션 목록을 표시하고 선택된
                    조건을 삭제하는 데 태그를 이용할 수 있다.
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
                    상호작용 없이 데이터의 특성 분류, 속성을 강조하여 표현하고자
                    할 때
                  </strong>
                  <p className="info-txt">배지를 사용한다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">단순 레이블</h4>
            <p className="info-txt">
              텍스트 레이블로만 구성된 태그 형식이다. 대개 데이터 집합의 개별
              항목에 배치되어 항목의 분류 체계, 데이터 속성을 보여준다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">선행 아이콘과 레이블</h4>
            <p className="info-txt">
              체크 아이콘과 레이블로 구성된 태그 형식이다. 필터링·정렬 옵션의
              하나로 선행 아이콘이 있는 태그 목록을 배치하여, 목록에 표시되고
              있는 데이터 분류 또는 속성을 보여줄 수 있다. 이때, 태그 목록은
              대화형 요소로 사용되며 사용자가 선택을 해제하면 단순 레이블 형태로
              변경된다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">레이블과 삭제 아이콘</h4>
            <p className="info-txt">
              레이블과 삭제 아이콘으로 구성되어, 실행 시 설정된 필터링·정렬
              옵션에서 해당 레이블 관련 옵션 설정이 해제됨을 안내한다.
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="../../../resources/img/guide/contents/component/component_06_04_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>레이블: </strong>태그를 통해 전달하고자 하는 메타 데이터
              </li>
              <li>
                <span className="num">2. </span>
                <strong>컨테이너: </strong>배지를 배경과 구분하는 윤곽선 또는
                배경색
              </li>
              <li>
                <span className="num">3. </span>
                <strong>삭제 아이콘: </strong>레이블과 관련된 데이터의 필터링을
                해제할 수 있음을 안내함
              </li>
              <li>
                <span className="num">4. </span>
                <strong>일괄 액션 버튼: </strong>태그 그룹 우측에 배치되어 전체
                그룹에 대해 한 번에 동일한 동작을 수행하는 데 사용되는 버튼
              </li>
              <li>
                <span className="num">5. </span>
                <strong>더 보기 버튼: </strong>표와 같이 공간이 제한되어 있는
                경우 그룹 내 일부 토큰을 숨길 수 있음
              </li>
            </ol>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>텍스트 레이블을 제공한다.</strong>
                <p className="info-txt">
                  접근성과 명확한 이해를 위해 태그에 항상 텍스트 레이블을
                  제공해야 한다.
                </p>
              </li>
              <li>
                <strong>레이블은 정확한 내용으로 간결하게 제공한다.</strong>
                <p className="info-txt">
                  태그 레이블은 태그의 주제를 간결하고 명확하게 전달해야 한다.
                  레이블은 2단어 이내로 구성하고 텍스트 줄바꿈이 발생하지 않도록
                  해야 한다.
                </p>
              </li>
              <li>
                <strong>태그는 관련 요소 주변에 배치한다.</strong>
                <p className="info-txt">
                  한 페이지에서 여러 항목에 걸쳐 동일한 형태와 내용의 태그
                  반복적으로 사용되므로 사용자가 어떤 항목에 대한 태그인지를
                  명확하게 변별할 수 있도록 관련 요소 주변에 배치하고 항목이
                  서로 구분될 수 있도록 표현해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  대화형 태그와 비대화형 태그를 같은 그룹에 포함하지 않는다.
                </strong>
                <p className="info-txt">
                  대화형 태그와 비대화형 태그가 같은 그룹에 혼합되어 있으면
                  사용자는 어떤 태그가 대화형으로 사용되는지 혼동을 느낄 수
                  있다.
                </p>
              </li>
              <li>
                <strong>지나치게 많은 태그를 사용하지 않는다.</strong>
                <p className="info-txt">
                  태그를 많이 사용할수록 인지 부담이 증가되므로 최소의 태그를
                  사용한다. 이후, 사용자 의견 수렴 과정을 통해 추가가 필요한
                  태그를 확인하여 표시 개수를 늘릴 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="../../../resources/img/guide/contents/component/component_06_04_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  태그의 표현에 지나치게 많은 색상을 사용하지 않는다.
                </strong>
                <p className="info-txt">
                  여러 색상은 사용자의 주의를 분산시키고 혼동을 줄 수 있으므로
                  가능한 한 태그에는 하나의 색상만 사용하는 것이 적합하다.
                  색상을 추가하고자 하는 경우, 색상을 활용한 태그 구분이
                  사용자에게 의미가 있는지를 가장 먼저 고려해야 한다. 그 다음
                  동시에 표시되는 태그 수를 고려하여, 모든 태그가 동등한
                  수준으로 강조될 수 있는 색상을 사용해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="../../../resources/img/guide/contents/component/component_06_04_03.png"
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
                <strong>대화형 태그의 초점을 명확하게 표시한다.</strong>
                <p className="info-txt">
                  대화형 태그가 초점을 가진 상태일 때, 태그에 인접 배경과 3:1
                  이상의 명도 대비를 갖는 윤곽선이 명확하게 표시되어야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 초점 이동</li>
                  <li>WCAG 2.1 Focus Visible (AA)</li>
                  <li>WCAG 2.1 Non-text Contrast (AA)</li>
                </ul>
              </li>
              <li>
                <strong>
                  대화형 태그에 기능 또는 상태 정보를 명확하게 제공한다.
                </strong>
                <p className="info-txt">
                  사용자가 태그를 실행하였을 때 어떤 동작이 발생하는지 예측할 수
                  있도록 용도에 적합한 접근 가능한 이름이나 상태 정보를 제공해야
                  한다. <br /> <br />
                  필터링/조회 패턴의 일부로서 실행 시 해당 태그를 가진 요소에
                  대한 필터링 동작이 발생하는 경우: <br />
                  aria-pressed=”true”, aria-pressed=”false” 속성을 활용하여 선택
                  상태에 대한 정보를 제공 <br />
                  필터링/조회 패턴의 일부로서 실행 시 해당 태그에 대한 필터링
                  옵션이 해제되는 경우: <br />
                  aria-label=”[태그 레이블] 옵션 삭제” <br />
                  관련된 항목 주변에 배치되어 실행 시 해당 태그에 대한 필터링
                  옵션이 설정되는 경우: <br />
                  aria-label=”[태그 레이블] 필터 옵션 추가”
                </p>
                <ul className="info-list dash">
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
              <li>
                <strong>태그의 색상으로 의미를 전달하지 않아야 한다.</strong>
                <p className="info-txt">
                  색상을 사용하여 태그를 구분할 수 있지만, 색상을 사용하여
                  의미를 전달해서는 안 된다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 색에 무관한 콘텐츠 인식</li>
                  <li>WCAG 2.1 Use of Color (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  태그 레이블, 아이콘이 인접 배경과 3:1 이상의 명도 대비를
                  갖도록 표현한다.
                </strong>
                <p className="info-txt">
                  태그 레이블뿐만 아니라 태그 내부 아이콘이 인접 배경과 3:1
                  이상의 명도 대비를 갖도록 표현해야 한다. 아이콘은 태그를 통해
                  어떤 동작이 수행될 것인지를 예측하는 데 참고할 수 있는 중요한
                  정보이다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 색에 무관한 콘텐츠 인식</li>
                  <li>WCAG 2.1 Contrast (Minimum) (AA)</li>
                  <li>WCAG 2.1 Non-text Contrast (AA)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">상호작용 가이드라인</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">태그 탐색과 실행</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 태그 탐색과 실행에 대한 표로 구분/설명으로
                  구성되어있으며 구분 항목은 Click, Tab, Space, Enter 로
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
                    <th scope="row">Click</th>
                    <td>
                      대화형 태그인 경우, Click 시 해당 태그 조건이 필터링
                      옵션으로 추가된다. 초점은 적용된 필터링 옵션을 표시하는
                      막대로 이동한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Tab</th>
                    <td>
                      대화형 태그인 경우, 태그 그룹으로 Tab 하면 첫 번째 태그에
                      초점이 위치한다. 한 번에 하나의 태그만 키보드 초점을
                      가진다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Space, Enter</th>
                    <td>
                      대화형 태그인 경우, 태그가 초점을 가진 상태에서 Space 또는
                      Enter 키에서 Keyup 이벤트가 발생하면 해당 태그 조건이
                      필터링 옵션으로 추가된다. 초점은 적용된 필터링 옵션을
                      표시하는 막대로 이동한다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">태그 선택</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 태그 선택에 대한 표로 이동에 대한 표로
                  구분/설명으로 구성되어있으며 구분 항목은 Click, Space 로
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
                    <th scope="row">Click</th>
                    <td>
                      Click 시 해당 태그 조건의 선택 상태가 토글된다. 초점은
                      Click한 요소에 유지된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Space</th>
                    <td>
                      태그가 초점을 가진 상태에서 Space 또는 Enter 키에서 Keyup
                      이벤트가 발생하면 해당 태그 조건의 선택 상태가 토글된다.
                      초점은 Keyup 이벤트가 발생한 태그에 유지된다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">태그 삭제</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 태그 삭제에 대한 표로 이동에 대한 표로
                  구분/설명으로 구성되어있으며 구분 항목은 Click, Space 로
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
                    <th scope="row">Click</th>
                    <td>
                      Click 시 해당 태그 조건이 목록에서 제거된다. 초점은 삭제된
                      태그의 이전 태그로 이동한다. 만약 초점을 이동할 태그가
                      목록에 남아 있지 않다면 태그 목록을 표시하는 컨테이너
                      자체로 초점이 이동한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Space</th>
                    <td>
                      태그가 초점을 가진 상태에서 Space 또는 Enter 키에서 Keyup
                      이벤트가 발생하면 해당 태그 조건이 목록에서 제거된다.
                      초점은 삭제된 태그의 이전 태그로 이동한다. 만약 초점을
                      이동할 태그가 목록에 남아 있지 않다면 태그 목록을 표시하는
                      컨테이너 자체로 초점이 이동한다.
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
              <div className="g-example flex ex-full">
                <span className="btn-chip-outline">
                  Input-chips
                  <button type="button" className="btn-del">
                    <span className="sr-only">삭제</span>
                  </button>
                </span>
                <span className="btn-chip-outline">
                  Input-chips
                  <button type="button" className="btn-del">
                    <span className="sr-only">삭제</span>
                  </button>
                </span>
                <span className="btn-chip-outline disabled">
                  Input-chips : disabled
                  <button type="button" className="btn-del">
                    <span className="sr-only">삭제</span>
                  </button>
                </span>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader06_04_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse06_04_01"
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

export default Gcontent_Tag;
