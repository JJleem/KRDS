import React from "react";
import Code from "./Code";
import { useState } from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
const Gcontent_Textarea = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>컴포넌트</span>
          <strong>
            텍스트 영역 <span className="sub">(Textarea)</span>
          </strong>
        </h2>
        <p className="g-desc">
          텍스트 영역은 사용자가 키보드로 글자, 숫자, 기호 등이 조합된 여러 줄의
          텍스트를 입력하는 경우에 사용하는 요소이다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">용례</h3>

          <div className="g-conts-area">
            <h4 className="g-heading-s">사용하기 적합한 경우</h4>
            <div className="g-conts-wrap">
              <ul className="info-list decimal">
                <li>
                  <strong>입력값이 여러 줄의 텍스트로 예상되는 경우</strong>
                  <p className="info-txt">
                    텍스트 입력 필드가 아니라 텍스트 영역을 사용해야 한다.
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
                  <strong>여러 가지 질문에 대한 응답을 받기 위한 경우</strong>
                  <p className="info-txt">
                    질문을 여러 개로 분할하고, 가능하다면 응답을 라디오 버튼이나
                    체크박스로 구성하여 사용자가 텍스트를 직접 입력하지 않고도
                    빠르게 질문에 응답할 수 있게 해야 한다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_09_02_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>레이블: </strong>사용자가 어떤 텍스트를 입력해야
                하는지를 알려줌
              </li>
              <li>
                <span className="num">2. </span>
                <strong>입력 영역: </strong>텍스트가 입력되는 영역으로 배경과
                입력 영역을 구분하여 사용자가 텍스트 영역임을 인지할 수 있게 함
              </li>
              <li>
                <span className="num">3. </span>
                <strong>플레이스홀더(선택): </strong>어떤 값을 입력해야 하는지에
                대한 힌트 또는 예시를 제공함
              </li>
              <li>
                <span className="num">4. </span>
                <strong>입력된 글자 수: </strong>입력 가능한 글자 수와 입력된
                글자 수를 안내하는 텍스트
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
                  입력 영역은 텍스트의 길이를 고려하여 적절한 크기로 제공한다.
                </strong>
                <p className="info-txt">
                  입력 영역의 높이는 사용자가 입력할 것으로 예상되는 최대 텍스트
                  길이에 비례하도록 제공하여 사용자가 별도의 스크롤 동작 없이도
                  한 번에 적절한 양의 텍스트를 확인할 수 있게 만든다.
                </p>
              </li>
              <li>
                <strong>모든 텍스트 영역에는 레이블을 제공한다.</strong>
                <p className="info-txt">
                  텍스트 입력 영역에 레이블이 제공되지 않으면 사용자는 어떤
                  정보를 입력해야 하는지 알 수 없다. 레이블을 생략하고자 하는
                  경우에는 레이블 없이도 사용자가 값을 선택하는 데 문제가 없다는
                  근거가 명확해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  플레이스홀더가 레이블이나 도움말의 대체 수단으로 사용되어서는
                  안 된다.
                </strong>
                <p className="info-txt">
                  플레이스홀더는 사용자가 값을 입력하기 시작하는 순간 사라진다.
                  플레이스홀더가 레이블이나 도움말의 대체 수단으로 활용되는
                  경우, 사용자는 값을 입력하는 도중 어떤 값을 입력하는
                  중이었는지, 어떤 형식으로 입력해야 하는지 다시 확인할 수 없다.
                  또한 거의 모든 웹 브라우저가 플레이스홀더 텍스트의 기본 색상을
                  최소 명도 대비 기준보다 낮게 제공하므로 읽기 어렵다. 이와 같이
                  플레이스홀더는 다양한 사용자 그룹에서 여러 사용성 문제를
                  야기하므로 단순히 사용자의 행동을 유도하기 위한 수단으로
                  사용해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_09_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_09_02_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>복사, 붙여쓰기를 제한하지 않는다.</strong>
                <p className="info-txt">
                  사용자가 다른 웹사이트나 플랫폼에서 텍스트를 복사하여 붙여
                  넣어야 하는 경우가 있을 수 있으므로 복사, 붙여쓰기 기능을
                  제한하지 않는 것이 바람직하다.
                </p>
              </li>
              <li>
                <strong>
                  입력 가능한 글자 수에 제한이 있는 경우 사용자에게 글자 수
                  정보를 제공한다.
                </strong>
                <p className="info-txt">
                  입력폼 주변에 레이블 다음 또는 입력 영역 다음 요소로 최대 글자
                  수와 남은 입력 가능 글자 수 정보를 제공한다. 남은 입력 가능
                  글자 수는 사용자의 입력에 따라 동적으로 업데이트하여 사용자가
                  입력폼을 제출하기 전에 입력 제약 사항에 대해 예측할 수 있도록
                  해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_09_02_03.png"
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
                <strong>
                  입력 영역과 인접 배경 간 명도 대비를 3:1 이상으로 제공한다.
                </strong>
                <p className="info-txt">
                  입력 영역의 테두리 또는 채움 색상이 인접한 배경과 3:1 이상의
                  명도 대비를 갖도록 스타일을 제공하는 것을 권장한다. 인접한
                  배경과의 명도 대비가 충분한 경우 사용자가 텍스트 영역임을 보다
                  명확하게 인지할 수 있다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 텍스트 콘텐츠의 명도 대비</li>
                  <li>WCAG 2.1 Non-text Contrast (AA)</li>
                </ul>
              </li>
              <li>
                <strong>텍스트 영역에 접근 가능한 이름을 제공한다.</strong>
                <p className="info-txt">
                  스크린 리더 사용자가 텍스트 영역의 용도를 확인할 수 있도록
                  &lt;label&gt;, title, aria-label, aria-labelledby 중 1가지
                  방식을 이용하여 레이블을 제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 레이블 제공</li>
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">상호작용 가이드라인</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">마우스</h4>
            {/* table list */}
            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 마우스에 대한 표로 구분/설명으로
                  구성되어있으며 구분 항목은 Click, Scroll 로 구성되어있음
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
                      레이블 또는 입력 영역을 Click 하면 입력 영역에 커서가
                      활성화되면서 텍스트를 입력할 수 있게 된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Scroll</th>
                    <td>
                      사용자가 많은 양의 텍스트를 작성하여 영역의 기본 높이를
                      초과하는 경우 영역에 세로 스크롤이 생성되며, 작성한
                      콘텐츠를 상/하로 탐색할 수 있다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* //table list */}
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">키보드</h4>
            {/* table list */}
            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 키보드에 대한 표로 구분/설명으로
                  구성되어있으며 구분 항목은 Tab, Shift + Tab, 방향키 ↑, ↓ 로
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
                    <th scope="row">Tab, Shift + Tab</th>
                    <td>
                      모든 텍스트 필드는 사용 불가인 상태를 제외하고 Tab, Shift
                      + Tab 키를 눌렀을 때 접근할 수 있어야 한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">방향키 ↑, ↓</th>
                    <td>
                      사용자가 많은 양의 텍스트를 작성하여 영역의 기본 높이를
                      초과하는 경우 영역에 세로 스크롤이 생성되며, 작성한
                      콘텐츠를 상/하로 탐색할 수 있다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* //table list */}
          </div>
        </div>
      </div>
      {/* //설명 */}

      {/* 예시 */}
      <div className="g-example-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">마크업 예시</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본</h4>
            <div className="g-example-wrap">
              <div className="g-example ex-full">
                {/* 폼그룹 */}
                <div className="form-group">
                  <div className="form-tit">레이블</div>
                  <div className="form-conts">
                    <div className="textarea-wrap">
                      <textarea
                        name=""
                        className="form-control"
                        placeholder="플레이스홀더"
                      ></textarea>
                      <p className="textarea-count">
                        <span className="text-primary">0</span>
                        <span className="text-num">/100</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* //폼그룹 */}
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader09_02_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse09_02_01"
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
      {/* //예시 */}

      <TopBtn />
    </div>
  );
};

export default Gcontent_Textarea;
