import React from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
import Code from "./Code";
import { useState } from "react";
import { Link } from "react-router-dom";
const Gcontent_SideNavigation = () => {
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
            사이드 메뉴 <span className="sub">(Side navigation)</span>
          </strong>
        </h2>
        <p className="g-desc">
          사이드 메뉴는 서브 화면 내에서의 이동을 위해 사용하는 메뉴이다.
          일반적으로 본문 영역의 좌측에 사이드바 형태로 제공된다. 메인 메뉴보다
          훨씬 좁고 깊은 페이지 구조 탐색에 사용되기 때문에 링크의 개수가 많고
          복잡하게 표현되기 쉽다. 사이트 규모가 클수록 사이드 메뉴를 단순하고
          직관적으로 설계하여 사용자가 탐색 중에 길을 잃지 않도록 해야 한다.
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
                  <strong>
                    메인 메뉴에서 선택한 메뉴 하위에 많은 화면이 존재하는 경우
                  </strong>
                  <p className="info-txt">
                    제한된 메인 메뉴 영역에서 가로로 배치된 목록을 탐색하는
                    것보다 세로로 배치된 사이드 메뉴 링크 목록을 훑어보는 것이
                    쉽다.
                  </p>
                </li>
                <li>
                  <strong>
                    사용자가 사이트 정보의 계층 구조에서 특정 수준의 메뉴를
                    상세하게 탐색할 필요가 있는 경우
                  </strong>
                  <p className="info-txt">
                    메인 메뉴 항목 하위 링크 목록이 유사한 정보 그룹으로
                    구성되어 있고 사용자가 링크 목록을 비교하여 탐색하는 행동을
                    빈번하게 수행하는 경우, 본문 옆에 배치된 사이드 메뉴가 탐색
                    과정을 효율적으로 수행하는 것을 도울 수 있다.2수준까지 탐색
                    가능한 메인 메뉴를 통해 서비스의 정보 구조를 충분히 탐색할
                    수 있다.
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
                  <strong>사이트 규모가 작은 경우</strong>
                  <p className="info-txt">
                    화면 수가 5개 미만인 소규모 서비스는 메인 메뉴 또는 다른
                    보조적 탐색 수단을 통해 사이트 정보 구조를 충분히 탐색할 수
                    있다.
                  </p>
                </li>
                <li>
                  <strong>
                    콘텐츠 표현과 인지를 위해 넓은 본문 영역이 필요한 경우
                  </strong>
                  <p className="info-txt">
                    넓은 본문 영역이 필요한 경우, 수준이 깊은 메인 메뉴 형식을
                    사용하여 사용자가 메인 메뉴를 통해 로컬 탐색을 수행하도록
                    한다. 화면 너비가 충분하다면 화면 전체 너비로 레이아웃을
                    확장하고 사이드 메뉴와 본문을 함께 표시할 수 있다.
                  </p>
                </li>
                <li>
                  <strong>
                    탐색 계층 구조가 2수준 이내이고 탐색 항목 수가 적은 경우
                  </strong>
                  <p className="info-txt">
                    2수준까지 탐색 가능한 메인 메뉴를 통해 서비스의 정보 구조를
                    충분히 탐색할 수 있다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">단순 목록</h4>
            <ul className="info-list decimal">
              <li>
                <p className="info-txt">
                  사이드 메뉴의 가장 기본적인 형태로 모든 수준의 링크가
                  표시된다. 사용자는 메인 메뉴와 메인 메뉴의 식별자를 통해
                  사이드 메뉴 목록의 계층 구조를 파악할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_03_04_01.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">헤더가 있는 목록</h4>
            <ul className="info-list decimal">
              <li>
                <p className="info-txt">
                  4수준 이상의 계층 구조를 가진 서비스에서 4수준 이상의 메뉴를
                  점진적으로 공개할 때, 상위 수준 메뉴 텍스트를 보여주는 제목과
                  이동 버튼으로 구성된 헤더를 포함하여 사용한다. <br />
                  링크 목록이 메인 메뉴에 표시된 정보 구조의 하위 수준에 속하지
                  않는 경우, 사용자가 정보 구조를 명확하게 파악하는 것을 돕기
                  위해 제목을 제공할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_03_04_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">드롭다운</h4>
            <ul className="info-list decimal">
              <li>
                <p className="info-txt">
                  4수준 이상의 계층 구조를 가진 서비스에서 햄버거 메뉴로
                  전환되었을 때 메인 메뉴를 보조하여 탐색할 수 있는 수단으로
                  사용한다. 본문의 제목이 드롭다운 버튼으로 사용되며, 실행 시
                  동일한 수준의 메뉴 링크 목록을 표시한다.
                </p>
                <div className="g-img-wrap">
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_03_04_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_03_04_04.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>컨테이너: </strong> 사이드 메뉴 링크 목록을 담고 있는
                영역으로 배경면 또는 구분선으로 본문 및 인접 영역과 구분함
              </li>
              <li>
                <span className="num">2. </span>
                <strong>구분선: </strong>링크 목록 내의 항목을 구분하기 위한
                가로선{" "}
              </li>
              <li>
                <span className="num">3. </span>
                <strong>헤더(선택): </strong> 메뉴 목록의 제목을 제공하는 영역{" "}
                <br />
                <strong>a. 제목: </strong>메뉴 목록 전체의 상위 수준 정보 구조를
                알려주는 텍스트 <br />
                <strong>b. 화살표: </strong>제목으로 제공되는 상위 수준 정보
                구조로 이동하는 데 사용되는 버튼
              </li>
              <li>
                <span className="num">4. </span>
                <strong>기본 화면 링크 목록: </strong>기본 탐색 링크 그룹{" "}
              </li>
              <li>
                <span className="num">5. </span>
                <strong>하위 수준 페이지 링크 목록: </strong>기본 페이지 링크
                하위 수준에 속하는 링크 목록{" "}
              </li>
              <li>
                <span className="num">6. </span>
                <strong>식별자: </strong> 선택된 링크를 변별하기 위한 시각적
                단서{" "}
              </li>
              <li>
                <span className="num">7. </span>
                <strong>꺾쇠 아이콘: </strong>하위 수준 화면 링크 목록의
                확장/축소 상태를 나타냄. 사용자는 꺾쇠 아이콘의 유무를 통해 개별
                기본 화면 링크 하위에 추가적으로 탐색할 수 있는 링크 목록이
                존재하는지를 인지할 수 있음{" "}
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
                  현재 탐색 중인 화면에 대한 링크를 강조 표시한다.
                </strong>
                <p className="info-txt">
                  사용자가 탐색 계층 구조 내에서 어디에 있는지 알 수 있도록
                  식별자를 통해 탐색 중인 링크를 강조 표시한다.
                </p>
              </li>
              <li>
                <strong>메뉴의 계층 구조는 최대 2개 수준까지 사용한다.</strong>
                <p className="info-txt">
                  사이드 메뉴 영역의 너비는 제한되어 있기 때문에 3개 이상의
                  수준을 한 번에 표시할 경우 인지와 탐색이 어려워질 수 있다. 2개
                  이상의 수준에 대한 탐색이 필요한 경우 더 깊은 수준의 메뉴를
                  점진적으로 공개하고 헤더가 있는 목록을 사용하거나, 본문에
                  보조적인 탐색 수단을 제공하는 것이 적절하다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_03_04_05.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_03_04_05_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  하위 수준 메뉴 표시에 확장 가능한 영역을 사용하는 방안을
                  고려한다.
                </strong>
                <p className="info-txt">
                  긴 계층 구조를 한 번에 표시할 경우 정보가 복잡해지며 사용자가
                  뷰포트 바깥에 제공된 링크를 놓칠 수 있다. 하위 수준 메뉴를
                  확장 가능한 영역으로 구성하고 페이지가 로딩되었을 때 사용자가
                  탐색 중인 메뉴의 하위 수준 메뉴를 확장된 상태로 제공하면
                  사용자가 목록을 보다 쉽게 탐색할 수 있다. <br />
                  만약 모든 수준의 메뉴를 표시하였을 때 목록이 사이드 메뉴
                  영역을 벗어나지 않으며 간결하다면 기본으로 모든 메뉴가
                  보이도록 표현할 수 있다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_03_04_06.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_03_04_06_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>메뉴의 계층 구조를 명확하게 구분하여 표현한다.</strong>
                <p className="info-txt">
                  사용자의 탐색을 방해하지 않도록 수직으로 나란히 배치된 링크 간
                  수준을 들여쓰기, 배경 구분 등의 방식을 활용하여 명확하게
                  구분해야 한다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_03_04_07.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_03_04_07_02.png"
                        alt=""
                      />
                    </div>
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
                  화면 너비가 충분하지 않은 경우 사이드 메뉴를 표시하지 않는다.
                </strong>
                <p className="info-txt">
                  사용자는 햄버거 아이콘으로 축소된 메인 메뉴를 통해 정보 구조를
                  탐색한다. 4수준 이상의 정보 구조가 필요하다면 본문 제목을
                  4수준 메뉴에 대한 보조적 탐색 수단으로 사용하여 사용자의
                  탐색을 도울 수 있다.
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
                  메뉴의 컨테이너가 내비게이션 섹션임을 스크린 리더에서 인지할
                  수 있도록 한다.
                </strong>
                <p className="info-txt">
                  메뉴의 전체 컨테이너는 &lt;nav&gt;로 감싸거나 WAI-ARIA 영역을
                  role="navigation”으로 지정하여 스크린 리더에서 내비게이션
                  요소임을 인지할 수 있도록 제공해야 한다. 내비게이션 섹션에
                  aria-label=”사이드 메뉴”를 제공하면 스크린 리더 사용자는
                  사이드 메뉴의 역할을 보다 명확하게 인지할 수 있다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 제목 제공</li>
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                </ul>
              </li>
              <li>
                <strong>메뉴 링크의 계층 구조를 표현한다.</strong>
                <p className="info-txt">
                  스크린 리더 사용자가 사이트의 정보 구조를 파악하는 데 도움을
                  줄 수 있도록 &lt;h2&gt;~&lt;h6&gt;, &lt;ul&gt;, &lt;li&gt;
                  태그를 활용하여 계층 구조로 정보를 제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 제목 제공</li>
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  활성화된 메뉴 정보가 스크린 리더로 전달될 수 있도록 한다.
                </strong>
                <p className="info-txt">
                  인디케이터가 시각적으로만 구분되는 것이 아니라 스크린 리더로도
                  전달될 수 있도록 WAI-ARIA ariacurrent 속성을 제공한다. 현재
                  탐색 중인 화면에 대한 링크인 경우 aria-current=”page” 속성을
                  추가한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 대체 텍스트 제공</li>
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
              <li>
                <strong>메뉴 링크는 키보드로 탐색할 수 있도록 한다.</strong>
                <p className="info-txt">
                  사이드 메뉴의 링크는 반드시 키보드가 접근할 수 있도록 제공해야
                  한다. 사용자가 키보드를 이용하여 영역을 확장하거나 축소하고
                  목록을 탐색할 수 있는지 점검해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 키보드 사용 보장</li>
                  <li>WCAG 2.1 Keyboard (A)</li>
                  <li>WCAG 2.1 No Keyboard Trap (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  키보드의 초점은 메뉴의 계층 순서대로 이동하도록 한다.
                </strong>
                <p className="info-txt">
                  키보드를 이용하여 메뉴를 탐색하는 경우, 키보드의 탐색 위치를
                  표시하는 초점이 메뉴의 계층 순서에 맞게 이동되도록 제공해야
                  한다. 문서에 메뉴의 계층 구조를 표현하지 않거나 임의로 키보드
                  초점의 이동 순서를 조작하면 보조 기술 사용자는 메뉴 탐색에
                  혼동을 느끼게 된다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 초점 이동과 표시</li>
                  <li>WCAG 2.1 Focus Order (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  스크린 리더에서 하위 수준 메뉴의 확장/축소 상태를 확인할 수
                  있도록 한다.
                </strong>
                <p className="info-txt">
                  aria-expanded 속성이나 title 속성을 활용하여 하위 메뉴 영역의
                  활성화 상태 정보가 스크린 리더에 탐지될 수 있도록 해야 한다.
                </p>
                <ul className="info-list dash">
                  <li> WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  축소된 메뉴 링크에 보조 기술이 접근되지 않도록 제공한다.
                </strong>
                <p className="info-txt">
                  시각적으로 확인할 수 없는 메뉴 링크에 보조 기술이 접근하게
                  되면, 보조 기술 사용자들은 의도와 상관 없이 숨겨진 링크에 모두
                  접근해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 초점 이동과 표시</li>
                  <li>WCAG 2.1 Focus Order (A)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">상호작용 가이드라인</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">메뉴 링크 탐색</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 메뉴 링크 탐색에 대한 표로 구분/설명으로
                  구성되어있으며 구분 항목은 Enter, Click, Tab, Shift + tab 로
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
                    <th scope="row">Enter</th>
                    <td>연결된 링크 목적지로 이동한다.</td>
                  </tr>
                  <tr>
                    <th scope="row">Click</th>
                    <td>연결된 링크 목적지로 이동한다.</td>
                  </tr>
                  <tr>
                    <th scope="row">Tab, Shift + Tab</th>
                    <td>시각적으로 표시된 메뉴 링크에 순차적으로 접근한다.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">메뉴 영역 확장 및 축소</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 메뉴 영역 확장 및 축소에 대한 표로 이동에
                  대한 표로 구분/설명으로 구성되어있으며 구분 항목은 Click,
                  Enter로 구성되어있음
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
                      꺾쇠 아이콘이 있는 메뉴 링크가 초점을 가진 상태에서 마우스
                      Click 이벤트가 발생하였을 때 하위 수준 메뉴가 펼쳐지거나
                      접혀야 한다. <br />
                      하나의 하위 링크 목록의 확장 상태는 다른 하위 링크 목록에
                      영향을 미치지 않는다. 즉, 어떤 하위 메뉴가 확장되어 있는
                      상태에서 다른 하위 링크 목록이 확장되더라도 기존에 확장된
                      링크 목록의 확장 상태가 유지되어야 한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Enter</th>
                    <td>
                      꺾쇠 아이콘이 있는 메뉴 링크가 초점을 가진 상태에서 키보드
                      Enter 이벤트가 발생하였을 때 하위 수준 메뉴가 펼쳐지거나
                      접혀야 한다. <br />
                      하나의 하위 링크 목록의 확장 상태는 다른 하위 링크 목록에
                      영향을 미치지 않는다. 즉, 어떤 하위 메뉴가 확장되어 있는
                      상태에서 다른 하위 링크 목록이 확장되더라도 기존에 확장된
                      링크 목록의 확장 상태가 유지되어야 한다.
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
              <div className="g-example ex-full">
                <div id="container">
                  <div className="inner in-between">
                    <div className="left-menu">
                      <div className="left-in">
                        <h2 className="lnb-tit">1depth title</h2>
                        <ul
                          className="acco-list lnb-list"
                          data-action="accordion"
                        >
                          <li className="li">
                            <div className="acco-head">
                              <h3 className="tit">2depth-title</h3>
                              <button
                                type="button"
                                className="btn btn-ico acco-btn"
                              >
                                <span className="sr-only">펼침</span>
                              </button>
                            </div>
                            <div
                              className="acco-body"
                              style={{ display: "none" }}
                            >
                              <div className="acco-in">
                                <ul className="sub-ul">
                                  <li>
                                    <button
                                      type="button"
                                      className="subm is-depth4"
                                    >
                                      3depth title
                                      <span className="sr-only">열기</span>
                                    </button>
                                    <div className="depth4-wrap">
                                      <button
                                        type="button"
                                        className="depth4-tit"
                                      >
                                        3depth-title
                                        <span className="sr-only">닫기</span>
                                      </button>
                                      <ul className="depth4-ul">
                                        <li>
                                          <a href="#">depth title</a>
                                        </li>
                                        <li>
                                          <a href="#">depth title</a>
                                        </li>
                                        <li>
                                          <a href="#">depth title</a>
                                        </li>
                                        <li>
                                          <a href="#">depth title</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <a href="#" className="subm">
                                      3depth title
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="subm">
                                      3depth title
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="subm">
                                      3depth title
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="li">
                            <div className="acco-head">
                              <h3 className="tit">2depth-title</h3>
                              <button
                                type="button"
                                className="btn btn-ico acco-btn"
                              >
                                <span className="sr-only">펼침</span>
                              </button>
                            </div>
                            <div
                              className="acco-body"
                              style={{ display: "none" }}
                            >
                              <div className="acco-in">
                                <ul className="sub-ul">
                                  <li>
                                    <a href="#" className="subm">
                                      3depth title
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="subm">
                                      3depth title
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="subm">
                                      3depth title
                                    </a>
                                  </li>
                                  <li>
                                    <button
                                      type="button"
                                      className="subm is-depth4"
                                    >
                                      3depth title
                                      <span className="sr-only">열기</span>
                                    </button>
                                    <div className="depth4-wrap">
                                      <button
                                        type="button"
                                        className="depth4-tit"
                                      >
                                        3depth title
                                        <span className="sr-only">닫기</span>
                                      </button>
                                      <ul className="depth4-ul">
                                        <li>
                                          <a href="#">depth title</a>
                                        </li>
                                        <li>
                                          <a href="#">depth title</a>
                                        </li>
                                        <li>
                                          <a href="#">depth title</a>
                                        </li>
                                        <li>
                                          <a href="#">depth title</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="li">
                            <div className="acco-head">
                              <h3 className="tit">2depth-title</h3>
                              <button
                                type="button"
                                className="btn btn-ico acco-btn"
                              >
                                <span className="sr-only">펼침</span>
                              </button>
                            </div>
                            <div
                              className="acco-body"
                              style={{ display: "none" }}
                            >
                              <div className="acco-in">
                                <ul className="sub-ul">
                                  <li>
                                    <a href="#" className="subm">
                                      3depth title
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="subm">
                                      3depth title
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="subm">
                                      3depth title
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="subm">
                                      3depth title
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="contents">
                      <div className="page-title-wrap" data-type="responsive">
                        <h2 className="h-tit">page title</h2>
                        <div className="krds-drop-wrap h-tit-drop">
                          <button type="button" className="h-tit drop-btn">
                            서비스 소개<span className="sr-only">열기</span>
                          </button>
                          <div className="drop-menu">
                            <div className="drop-in">
                              <ul className="drop-list">
                                <li>
                                  <a href="#" className="item-link">
                                    서비스 소개
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="item-link">
                                    국내에서 외국발간자료 신청
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="item-link">
                                    해외에서 국내발간자료 신청
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      컨텐츠 영역
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader03_04_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse03_04_01"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <Code />
                </div>
              </div>
            </div>
          </div>

          <div className="g-conts-area">
            <div className="g-cont-in">
              <div className="tbl-wrap scroll">
                <table className="tbl col data">
                  <colgroup>
                    <col style={{ width: "15%" }} />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">1Depth</th>
                      <th scope="col">File Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="name">레이아웃</td>
                      <td className="file">
                        <Link
                          to="/component/search/sidenavigation"
                          // target="_blank"
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

      <TopBtn />
    </div>
  );
};

export default Gcontent_SideNavigation;
