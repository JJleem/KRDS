import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";

const Gcontent_Search03 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>검색</em>
          </span>
          <strong>검색어 입력</strong>
        </h2>
        <p className="g-desc">
          검색은 사용자가 큰 데이터 집합에서 원하는 정보를 찾을 수 있도록
          도와주는 기능이다. 사용자가 무엇을 찾고 싶은지 알고 있는 경우에는
          일차적인 정보 탐색 수단으로 사용될 수 있으며, 탐색 수단을 통해 원하는
          콘텐츠를 찾지 못하는 상황에는 특정 정보와 관련된 단서를 제공함으로써
          사용자가 필요한 콘텐츠를 쉽게 찾을 수 있도록 해준다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_03_01.png"
                  alt=""
                />
              </div>
            </div>
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_03_08.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>검색어 입력 필드: </strong>사용자가 검색어를 입력하는
                텍스트 입력 영역
              </li>
              <li>
                <span className="num">2. </span>
                <strong>레이블: </strong>사용자가 검색할 수 있는 내용을 암시하는
                유용하고 짧은 텍스트
              </li>
              <li>
                <span className="num">3. </span>
                <strong>돋보기 아이콘: </strong>검색을 실행하는 버튼
              </li>
              <li>
                <span className="num">4. </span>
                <strong>플레이스홀더(선택): </strong> 검색을 유도하기 위한 문구
              </li>
              <li>
                <span className="num">5. </span>
                <strong>검색어 삭제 버튼: </strong> 사용자가 검색어 입력 필드에
                글자를 입력한 후 제공되어, 실행 시 입력한 검색어 전체를 삭제하는
                기능이 작동됨
              </li>
              <li>
                <span className="num">6. </span>
                <strong>스코프 필터(선택): </strong>특정 정보 범주나 섹션에 대한
                검색으로 결과를 제한하는 데 사용됨
              </li>
              <li>
                <span className="num">7. </span>
                <strong>실시간 검색어 제안(선택): </strong>검색어 입력 필드가
                활성화된 상태에서는 사용자의 최근 검색어, 인기 검색어와 같은
                추천 검색어가 제공되며, 검색어 입력 필드에 텍스트 입력이
                시작되면 검색어에 기반한 검색어 제안이 제공됨
              </li>
              <li>
                <span className="num">8. </span>
                <strong>검색 도움말(선택): </strong>간단한 검색의 경우 검색어
                입력 방식에 대한 예제나 도움말을 직접 제공할 수 있으며, 검색
                도움말 문서에 접근할 수 있는 링크로 제공할 수 있음
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
                  사용자가 검색어 입력 행위에 집중할 수 있도록 한다.{" "}
                  <span className="krds-badge bg3">우수</span>
                </strong>
                <p className="info-txt">
                  헤더에서 확장된 검색어 입력 필드를 사용하는 경우, 검색어 입력
                  필드와 실시간 검색어 제안 레이어를 제외한 나머지 영역의 명도나
                  불투명도를 낮추어 사용자가 검색어를 입력하는 행동에 집중할 수
                  있도록 도와야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 1]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_03_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 2]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_03_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  스코프 필터를 사용하는 경우, ‘전체’ 옵션을 제공한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  스코프 필터를 사용하면 목록의 특정 섹션 또는 특정 범주의
                  데이터로 사전에 검색을 제한할 수 있다. 범위 필터는 한 번에
                  하나의 옵션만을 선택할 수 있기 때문에 항상 '전체' 옵션을
                  제공하고 기본값으로 설정하여 모든 정보의 범주를 검색할 수
                  있도록 해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  검색어 입력 필드는 일반적인 검색어가 한눈에 파악될 수 있는
                  너비로 제공하고 줄바꿈이나 말줄임표를 사용하지 않는다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  사용자가 입력한 검색어 검색어 입력 필드의 너비를 초과하였을 때
                  말줌임표를 사용하게 되면 사용자는 입력한 검색어를 확인할 수
                  없게 된다. 검색어 입력 필드에 스크롤이 생성되면 커서의 위치를
                  조정하여 입력한 검색어를 부분적으로 확인할 수 밖에 없으므로
                  사용자의 일반적인 검색어 텍스트 길이를 고려하여 입력 필드를
                  적절한 너비로 제공해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  통합 검색이 아닌 검색에는 입력 필드에 레이블을 제공한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  통합 검색 입력 필드는 용도가 명확하여 사용자가 서비스 전체
                  콘텐츠를 검색하게 됨을 예측할 수 있으므로 레이블을 제공하지
                  않는 것이 적절하다. 그러나 범위 검색, 길찾기와 같은 부분
                  검색인 경우 검색할 수 있는 대상에 대한 단서를 가능한 간결하고
                  명확하게 명시해야 한다. 이를 통해 사용자는 검색의 목적이
                  무엇인지 직관적으로 이해할 수 있다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_03_03.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_03_03_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  플레이스홀더를 사용하는 경우, 유도 문구 외에 검색에 대한
                  단서나 레이블을 포함해서는 안 된다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  플레이스홀더 텍스트는 사용자가 입력을 시도하는 순간 사라지기
                  때문에 사용자가 검색어를 입력하는 시점에는 도움을 받을 수
                  없다. 플레이스홀더를 사용하는 경우, 검색어 입력 필드의
                  레이블에 제공되지 않은 추가적인 정보를 플레이스홀더로 전달하지
                  않아야 한다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_03_04.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_03_04_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  사용자에게 다양한 방식의 검색어 입력 도움을 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  검색 가능한 항목이 복잡한 경우 사용자가 원하는 항목을 찾는 데
                  도움이 된다. 사용자에게 제공할 수 있는 검색 도움은 다음과
                  같다.
                </p>
                <ul className="info-list dash">
                  <li>검색어 예제</li>
                  <li>다른 사용자가 많이 사용한 검색어</li>
                  <li>사용자가 이전에 입력한 검색어</li>
                  <li>첫 단어 제안</li>
                  <li>검색 도움말 등</li>
                </ul>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_03_05.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  검색어 입력 도움은 가능한 사용자가 검색어를 입력하는 시점에
                  실시간으로 제공한다.{" "}
                  <span className="krds-badge bg3">우수</span>
                </strong>
                <p className="info-txt">
                  실시간 검색어 제안은 검색어를 입력하는 시간을 단축함으로써
                  사용자가 빠르게 검색을 수행할 수 있도록 돕는다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_03_06.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  실시간으로 검색어를 제안할 수 없는 경우, 검색 결과 화면에서
                  보조적인 도움 수단을 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
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
                  검색어 입력/실행 관련 컨트롤 요소에 적절한 이름을 제공한다.
                </strong>
                <p className="info-txt">
                  각 요소에 명시적인 텍스트 레이블이 제공되지 않더라도 스크린
                  리더가 접근할 수 있는 이름을 제공해야 한다. 검색어 입력 필드,
                  검색어 삭제 버튼, 검색 실행 버튼에 각각 ‘검색어’, ‘검색어 전체
                  삭제’, ‘검색’이라는 이름을 제공한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 링크 텍스트</li>
                  <li>KWCAG 2.2 레이블 제공</li>
                  <li>WCAG 2.1 Headings and Labels (AA)</li>
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  검색어 입력/실행 관련 대화형 요소는 키보드로 접근과 조작이
                  가능하도록 한다.
                </strong>
                <p className="info-txt">
                  검색어 입력/실행과 관련된 모든 대화형 요소는 키보드로 접근과
                  조작이 가능해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 키보드 사용 보장</li>
                  <li>WCAG 2.1 Keyboard (A)</li>
                  <li>WCAG 2.1 No Keyboard Trap (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  자동완성이나 추천 검색 정보에 보조 기술이 접근할 수 있도록
                  표현한다.
                </strong>
                <p className="info-txt">
                  보조 기술 사용자가 자동완성이나 추천 검색어를 활용할 수
                  있으려면 검색어가 표시되는 콘텐츠 영역에 키보드 및 보조 기술이
                  접근할 수 있도록 제공되어야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 키보드 사용 보장</li>
                  <li>WCAG 2.1 Keyboard (A)</li>
                  <li>WCAG 2.1 No Keyboard Trap (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  실시간 검색어 입력 도움창의 출현 여부 및 추천 검색어를 스크린
                  리더가 탐지할 수 있도록 한다.
                </strong>
                <p className="info-txt">
                  스크린 리더 사용자는 검색어 입력 도움창의 출현과 검색어 입력에
                  따른 추천 검색어의 변경 사항을 인지하지 못할 수 있다. WAI-ARIA
                  표준을 활용하여 추천 검색어 정보가 보조 기술 사용자에게
                  실시간으로 전달되도록 제공함으로써 보조 기술 사용자의 사용성을
                  향상시킬 수 있다.
                </p>
                <ul className="info-list dash">
                  <li>WCAG 2.1 Status Messages (AA)</li>
                </ul>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_03_07.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  실시간 검색어 입력 도움창은 검색어 입력 필드의 다음 요소로
                  제공한다.
                </strong>
                <p className="info-txt">
                  검색어 입력 도움창을 검색어 입력 필드와 검색 버튼 사이에
                  제공하여 스크린 리더 가상 초점으로 콘텐츠에 접근하는 경우에도
                  논리적인 순서에 따라 콘텐츠를 이용할 수 있도록 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 콘텐츠의 선형화</li>
                  <li>WCAG 2.1 Meaningful Sequence (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  자동완성이나 추천 검색어 목록을 계층화하여 제공한다.
                </strong>
                <p className="info-txt">
                  자동완성이나 추천 검색어 목록을 계층화하여 표현하면 사용자는
                  보조 기술을 통해 검색어 목록에 관한 요약된 정보를 제공받을 수
                  있다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 제목 제공</li>
                  <li>WCAG 2.1 Info and Relationships</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">상호작용 가이드라인</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">검색어 입력 필드</h4>
            {/* table list */}
            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 검색어 입력 필드에 대한 표로 구분/설명으로
                  구성되어있으며 구분 항목은 Focusin, Keyup, Enter, 방향키 ↓ 로
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
                    <th scope="row">Focusin</th>
                    <td>
                      검색어 입력 필드가 키보드 초점을 가진 상태이고 아무런 값이
                      입력되지 않았다면 인기 검색어와 이전 검색 기록이 제공된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Keyup</th>
                    <td>
                      검색어 입력 필드가 키보드 초점을 가진 상태이고 Keyup
                      이벤트가 발생하였으며 사용자가 검색어를 한 글자 이상
                      입력한 경우 인기 검색어와 이전 검색 기록은 검색어 제안으로
                      변경된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Enter</th>
                    <td>
                      검색어 입력 필드가 키보드 초점을 가진 상태에서 Enter 키를
                      누르면 검색이 실행된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">방향키 ↓</th>
                    <td>
                      검색어 입력 필드가 키보드 초점을 가진 상태이면서 검색어
                      제안 목록이 제공되는 경우, 방향키 ↓를 누르면 검색어 제안
                      목록 중 가장 첫 번째 요소로 초점이 이동한다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* //table list */}
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">실시간 검색어 입력 도움</h4>
            {/* table list */}
            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 도움말 내부 콘텐츠 탐색에 대한 표로 이동에
                  대한 표로 구분/설명으로 구성되어있으며 구분 항목은 방향키 ↑,
                  ↓, Click, Enter, Esc 로 구성되어있음
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
                    <th scope="row">방향키 ↑, ↓</th>
                    <td>
                      검색어 제안 목록을 순회한다. 목록 가장 첫 번째 항목에서
                      방향키 ↑를 누르면 가장 마지막 항목으로 초점이 이동하며,
                      가장 마지막 항목에서 방향키 ↓를 누르면 가장 첫 항목으로
                      초점이 이동한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Click</th>
                    <td>
                      검색어 제안 목록에서 특정 항목을 Click 하면 선택된
                      항목으로 검색 동작이 실행된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Enter</th>
                    <td>
                      키보드 초점을 가진 검색어 제안 목록에서 Enter 키를 누르면
                      해당 항목으로 검색 동작이 실행된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Esc</th>
                    <td>
                      실시간 검색어 입력 도움창이 활성화된 상태에서 Esc 키를
                      누르면 창이 닫히면서 키보드 초점이 검색어 입력 필드로
                      이동한다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* //table list */}
          </div>

          <div className="g-conts-area">
            <h3 className="g-heading-m">관련 구성 요소</h3>
            <div className="g-conts-area">
              <h4 className="g-heading-s">컴포넌트</h4>
              <div className="g-flex component">
                <span className="btn-chip-outline">링크</span>
                <span className="btn-chip-outline">버튼</span>
                <span className="btn-chip-outline">텍스트 입력 필드</span>
              </div>
            </div>
            <div className="g-conts-area">
              <h4 className="g-heading-s">기본 패턴</h4>
              <div className="g-flex component">
                <span className="btn-chip-outline">도움</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //설명 */}

      {/* 예시 */}
      <div className="g-example-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">마크업 예시</h3>
          <div className="g-conts-area">
            <div className="g-cont-in">
              <div className="tbl-wrap scroll">
                <table className="tbl col data">
                  <colgroup>
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "15%" }} />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">1Depth</th>
                      <th scope="col">2Depth</th>
                      <th scope="col">File Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="name">검색</td>
                      <td>통합검색</td>
                      <td className="file">
                        <Link
                          to="/service/search_03"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td>서비스신청</td>
                      <td className="file">
                        <Link
                          to="/service/search_03"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td>정책정보</td>
                      <td className="file">
                        <Link
                          to="/service/search_03"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default Gcontent_Search03;
