import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";

const Gcontent06 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>기본 패턴</span>
          <strong>상세 정보 확인</strong>
        </h2>
        <p className="g-desc">
          상세 정보는 특정한 주제에 관한 정보를 제공하는 패턴으로, 효과적인 정보
          전달을 위해 텍스트 이외에 다양한 시각적 요소들이 활용된다. 사용자들은
          콘텐츠 목록에서 콘텐츠 제목이나 요약 정보를 포함한 링크를 통해 상세
          정보에 접근하기 때문에, 사용자가 예상하는 정보를 명확하고 간결하게
          전달할 수 있어야 한다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">단일 화면</h4>
            <p className="info-txt">
              모든 상세 정보를 하나의 화면에 제공하고 주요 단락을 콘텐츠 탐색
              내비게이션을 활용하여 이동한다. 불가피하게 탭을 사용해야 하는
              상황을 제외하고 상세 정보는 기본적으로 단일 화면 레이아웃으로
              제공되는 것이 바람직하다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">탭</h4>
            <p className="info-txt">
              단일 화면에서 콘텐츠를 소구하기에 콘텐츠 내용이 지나치게
              복잡하거나 콘텐츠 섹션 간 성격이 달라 사용자가 섹션의 내용을
              비교해가며 파악하지 않아도 될 때 사용하기 적합한 레이아웃이다.
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/global/global_06_01_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>제목: </strong>본문 전체에 대한 제목
              </li>
              <li>
                <span className="num">2. </span>
                <strong>요약 정보: </strong>본문의 주요 내용을 요약하여 설명하는
                2~3줄의 텍스트
              </li>
              <li>
                <span className="num">3. </span>
                <strong>상세 정보: </strong>상세 정보를 전달하기 위한 콘텐츠
                섹션으로 구성된 본문
              </li>
              <li>
                <span className="num">4. </span>
                <strong>부가 정보: </strong>본문에 대한 이해를 돕기 위해
                제공되는 콘텐츠 섹션으로 구성됨
              </li>
              <li>
                <span className="num">5. </span>
                <strong>콘텐츠 변경 이력: </strong>정보의 업로드일, 변경일,
                변경된 내용에 대한 로그 기록
              </li>
              <li>
                <span className="num">6. </span>
                <strong>콘텐츠 내 탐색: </strong>본문의 콘텐츠 섹션의 구조를
                파악하고 원하는 섹션으로 이동할 수 있도록 도와주는 탐색 수단
              </li>
              <li>
                <span className="num">7. </span>
                <strong>액션 버튼: </strong>정보와 관련된 기능을 실행하는 버튼
                또는 관련 페이지로 이동할 수 있는 링크
              </li>
            </ol>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>콘텐츠의 작성자, 출처, 저작권을 표시한다.</strong>
                <p className="info-txt">
                  모든 상세 콘텐츠에 작성자, 출처, 저작권 정보를 표시하여
                  사용자가 신뢰를 가지고 정보를 이용할 수 있도록 해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/global/global_06_01_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>정보 등록, 변경 일자와 변경 내역을 제공한다.</strong>
                <p className="info-txt">
                  정보가 업로드된 최초 날짜부터 시작하여 모든 변경 내역의 반영
                  일자와 변경 내역을 헤딩 근처와 본문 마지막에 제공해야 한다.
                  이를 통해 디지털 정부서비스가 지속적으로 관리되고 있음을
                  사용자가 인지할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/global/global_06_01_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>제목은 다른 요소들과 구분되도록 표현한다.</strong>
                <p className="info-txt">
                  제목은 웹사이트에서의 현재 사용자 위치를 알려주고, 본문을 읽기
                  전에 간략한 내용을 파악할 수 있게 도와준다. 따라서 각 콘텐츠의
                  제목은 다른 요소와 명확하게 구분되어 표현되어야 한다.
                </p>
              </li>
              <li>
                <strong>
                  콘텐츠 요소들 사이의 계층구조를 명확하게 구분한다.
                </strong>
                <p className="info-txt">
                  요소들 간 계층구조를 명확하게 구분하면, 사용자는 중요한 정보를
                  더욱 빠르게 처리할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/global/global_06_01_04.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/global/global_06_01_04_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>문단과 문장은 최대한 간단명료하게 구성한다.</strong>
                <p className="info-txt">
                  사용자의 이해를 촉진할 수 있도록, 문단을 구성하는 문장, 문장을
                  구성하는 단어를 가능한 한 간단명료하게 사용해야 한다.
                </p>
              </li>
              <li>
                <strong>핵심 주제는 첫 문단, 첫 문장에 포함시킨다.</strong>
                <p className="info-txt">
                  핵심 주제를 문단이나 문장의 첫 부분에 배치하면 다음에 어떤
                  내용이 나올 것인지를 충분히 예측할 수 있으므로 내용을
                  조직화하고 이해하기 쉽다.
                </p>
              </li>
              <li>
                <strong>
                  인포그래픽, 사진, 동영상 등의 콘텐츠를 적절하게 활용한다.
                </strong>
                <p className="info-txt">
                  시각적 정보를 활용하면 텍스트에만 의존하는 것보다 말하고자
                  하는 바를 효과적으로 전달할 수 있으며 사용자의 흥미를
                  유발한다.
                </p>
              </li>
              <li>
                <strong>
                  외부 서비스로 이동하거나 새 창을 실행하는 액션 버튼에 명확한
                  시각적 단서를 제공한다.
                </strong>
                <p className="info-txt">
                  새 창 열림 아이콘을 표시하여 사용자가 원하지 않는 상황에서
                  현재의 이용 맥락을 벗어나지 않도록 한다.있으므로 내용을
                  조직화하고 이해하기 쉽다.
                </p>
              </li>
              <li>
                <strong>
                  화면 너비가 충분한 경우 콘텐츠 내 탐색을 표시하고 본문 우측의
                  일관된 위치에 고정하여 제공한다.
                </strong>
                <p className="info-txt">
                  콘텐츠의 목차로 작동하여 사용자가 페이지의 구조를 훑어볼 수
                  있으며, 콘텐츠 내 탐색에서 특정 항목을 클릭하면 연결된
                  섹션으로 스크롤 되므로 원하는 콘텐츠로 빠르게 이동할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/global/global_06_01_05.png"
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
                  모바일에서 콘텐츠 내 탐색은 제목과 본문 사이에 배치한다.
                </strong>
                <p className="info-txt">
                  화면 너비가 충분하지 않을 때, 콘텐츠 내 탐색은 특정 위치에
                  고정하지 않고 제목과 본문 사이에 배치한다. 본문의 구조가
                  복잡하여 콘텐츠 내 탐색의 길이가 길어질 경우, 디스클로저와
                  같은 확장 가능한 섹션으로 콘텐츠 내 탐색을 제공할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/global/global_06_01_06.png"
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
                  텍스트 콘텐츠와 배경 간 명도 대비를 4.5:1 이상으로 제공한다.
                </strong>
                <p className="info-txt">
                  텍스트 콘텐츠와 배경 사이의 명도 대비를 4.5:1 이상으로
                  제공하여 저시력 사용자가 어려움 없이 콘텐츠를 이해할 수 있도록
                  해야 한다. 화면을 확대할 수 있는 경우 명도 대비를 3:1까지 낮출
                  수 있다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 텍스트 콘텐츠의 명도 대비</li>
                  <li>WCAG 2.1 Cotrast (Minimum) (AA)</li>
                </ul>
              </li>
              <li>
                <strong>텍스트 이외의 콘텐츠에 대체 수단을 제공한다.</strong>
                <p className="info-txt">
                  보조 기술 사용자 등의 접근성 사용자가 이미지, 음성, 동영상 등
                  텍스트 이외의 콘텐츠 정보를 이해할 수 있도록 대체 수단을
                  제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 대체 텍스트 제공</li>
                  <li>KWCAG 2.2 자막 제공</li>
                  <li>WCAG 2.1 Non-text Content (A)</li>
                  <li>WCAG 2.1 Audio-only and Video-only (Prerecorded) (A)</li>
                  <li>WCAG 2.1 Captions (Prerecorded) (A)</li>
                  <li>
                    WCAG 2.1 Audio Description or Media Alternative
                    (Prerecorded) (A
                  </li>
                  <li>WCAG 2.1 Captions (Live) (AA)</li>
                  <li>WCAG 2.1 Audio Description (Prerecorded) (AA)</li>
                </ul>
              </li>
              <li>
                <strong>
                  멀티미디어 콘텐츠 플레이어는 키보드로 조작할 수 있도록
                  제공한다.
                </strong>
                <p className="info-txt">
                  멀티미디어 콘텐츠의 플레이어에서 사용할 수 있는 재생/정지,
                  음량 조절, 시간 조절 등의 모든 기능은 키보드를 이용하여 조작할
                  수 있어야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 키보드 사용 보장</li>
                  <li>WCAG 2.1 Keyboard (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  멀티미디어 콘텐츠가 자동으로 재생되지 않도록 제공한다.
                </strong>
                <p className="info-txt">
                  음성 정보가 포함된 멀티미디어 콘텐츠가 자동으로 재생되면, 모든
                  웹 문서 정보를 소리를 통해 전달 받는 보조 기술 사용자의 웹
                  페이지 탐색에 방해가 될 수 있다. 그러므로 사용자가 재생 동작을
                  수행하기 전에 멀티미디어 콘텐츠가 자동으로 재생되지 않도록
                  해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 정지 기능 제공</li>
                  <li>KWCAG 2.2 자동 재생 금지</li>
                  <li>WCAG 2.1 Pause, Stop, Hide (A)</li>
                  <li>WCAG 2.1 Audio Control (A)</li>
                </ul>
              </li>
              <li>
                <strong>가능한 한 이미지 텍스트를 사용하지 않는다.</strong>
                <p className="info-txt">
                  텍스트 정보를 이미지 형식으로 제공하게 되면 사용자가 해상도
                  손실 없이 텍스트를 확대/축소할 수 없으며 명도 대비, 자간 동의
                  표현을 상황에 맞게 조정할 수 없게 된다. <br />
                  저시력 사용자, 읽기 장애가 있는 사용자가 텍스트 정보의 표현
                  방식을 변경하여 콘텐츠를 인지할 수 있도록 심미적인 효과 또는
                  특정한 텍스트 표현이 필수적인 경우를 제외하고 이미지 텍스트를
                  사용하지 않아야 한다.
                </p>
                <ul className="info-list dash">
                  <li>WCAG 2.1 Images of Text (AA)</li>
                </ul>
              </li>
              <li>
                <strong>
                  시각적으로 표현된 콘텐츠의 구조, 수준을 프로그램적으로
                  동일하게 제공한다.
                </strong>
                <p className="info-txt">
                  본문을 구성하는 제목, 목록, 표 등 구조화된 정보는
                  &lt;h2&gt;~&lt;h6&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;,
                  &lt;table&gt;, &lt;strong&gt; 등 해당 정보를 의미하는 요소로
                  제공하여 스크린 리더에서도 정보를 동등하게 인지할 수 있어야
                  한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 제목 제공</li>
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                </ul>
              </li>
            </ul>
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
                    <col style={{ width: "15%" }} />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">1Depth</th>
                      <th scope="col">2Depth</th>
                      <th scope="col">3Depth</th>
                      <th scope="col">File Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="name">서비스 신청</td>
                      <td>장애아동수당</td>
                      <td>일반형</td>
                      <td className="file">
                        <Link
                          to="/global/global_6"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td></td>
                      <td>탭형</td>
                      <td className="file">
                        <Link
                          to="/global/global_6"
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

export default Gcontent06;
