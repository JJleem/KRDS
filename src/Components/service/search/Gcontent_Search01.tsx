import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";

const Gcontent_Search01 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>검색</em>
          </span>
          <strong>개요</strong>
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
          <h3 className="g-heading-m">용례</h3>

          <div className="g-conts-area">
            <h4 className="g-heading-s">사용하기 적합한 경우</h4>
            <p className="info-txt">
              단일 화면 웹사이트나 서비스 또는 규모가 매우 작은 서비스에서는
              통합 검색 없이 정보를 탐색할 수 있다.
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">통합검색</h4>
            <p className="info-txt">
              웹사이트 또는 애플리케이션 전체를 검색하는 것으로 사용자가
              서비스에 익숙하지 않은 경우, 검색을 통해 서비스의 데이터 구조와
              활용할 수 있는 정보를 더 쉽게 파악할 수 있다. 일반적으로 헤더
              영역에 배치되며, 검색 결과는 별도의 결과 화면에서 제공된다.
            </p>
            <ul className="info-list dash">
              <li>웹사이트 통합 검색</li>
              <li>자료 검색</li>
            </ul>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">부분 검색</h4>
            <p className="info-txt">
              소규모 웹사이트, 단일 화면 서비스, 특정 정보 목록, 표와 같은
              소규모 데이터 집합을 검색하는 데 사용한다. 데이터 집합 상단에
              배치되며, 검색 결과는 데이터 집합에 직접 반영된다.
            </p>
            <ul className="info-list dash">
              <li>게시물 검색</li>
              <li>목록 부분 검색</li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">이용 상황별 플로(Flow)</h3>
          <div className="g-img-wrap flow">
            <div>
              <img
                src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_01_01.png"
                alt=""
              />
            </div>
          </div>
          <ol className="flow-list">
            <li>
              <h4 className="g-heading-s">1) 검색어 입력</h4>
              <ul className="info-list decimal">
                <li>
                  <strong>검색어 입력 도움 받기</strong>
                  <p className="info-txt">
                    검색어를 입력하는 과정에서 참고할 수 있는 정보를 제공받고
                    활용하는 과정
                  </p>
                </li>
                <li>
                  <strong>검색어 입력과 수정</strong>
                  <p className="info-txt">
                    검색 키워드의 입력, 수정, 삭제를 수행
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h4 className="g-heading-s">2) 검색 결과 확인</h4>
              <ul className="info-list decimal">
                <li>
                  <strong>결과 화면 진입</strong>
                  <p className="info-txt">검색 결과 화면으로 진입</p>
                </li>
                <li>
                  <strong>검색 결과 개괄</strong>
                  <p className="info-txt">
                    상세 목록, 목록 내 항목 탐색 전 몇 건의 결과가
                    도출되었는지를 포함하여 전반적인 결과를 파악하는 과정
                  </p>
                </li>
                <li>
                  <strong>목록 탐색</strong>
                  <p className="info-txt">
                    검색 결과 목록의 구성에 대한 파악을 수행
                  </p>
                </li>
                <li>
                  <strong>목표 결과 찾기</strong>
                  <p className="info-txt">목표한 검색 결과에 대한 탐색 수행</p>
                </li>
              </ul>
            </li>
            <li>
              <h4 className="g-heading-s">3) 검색 결과 이용</h4>
              <ul className="info-list decimal">
                <li>
                  <strong>외부/연계 서비스로의 이동</strong>
                  <p className="info-txt">
                    링크를 실행하여 연계된 외부 서비스로 이동하거나 서비스
                    내에서 관련 페이지로 이동하는 과정
                  </p>
                </li>
                <li>
                  <strong>상세 내용 확인</strong>
                  <p className="info-txt">
                    이동 과정 없이 목록 자체에서 필요한 정보를 확인하는 과정
                  </p>
                </li>
                <li>
                  <strong>검색 결과 다운로드/저장</strong>
                  <p className="info-txt">
                    검색 결과를 다른 목적으로 사용하기 위해 파일 형태로 다운로드
                    받거나 저장
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h4 className="g-heading-s">4) 재검색</h4>
              <ul className="info-list decimal">
                <li>
                  <strong>검색 조건 계속 이용</strong>
                  <p className="info-txt">
                    기존 조건이 적용된 목록을 계속하여 탐색하거나, 조건 중
                    일부만을 변경하여 원하는 정보를 계속하여 탐색하는 과정
                  </p>
                </li>
                <li>
                  <strong>새로운 검색 조건 설정</strong>
                  <p className="info-txt">
                    기존 조건을 삭제하고 새로운 검색 조건을 설정하거나, 세부
                    조건 설정 없이 새로운 키워드로 검색을 시도하는 과정
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h4 className="g-heading-s">5) 상세 검색</h4>
              <ul className="info-list decimal">
                <li>
                  <strong>상세 검색 기능 찾기</strong>
                  <p className="info-txt">
                    상세 검색, 정렬/필터링 수단에 대한 탐색 수행
                  </p>
                </li>
                <li>
                  <strong>상세 검색 조건 설정</strong>
                  <p className="info-txt">
                    검색 결과 목록을 원하는 범위로 좁히기 위해 상세 조건을
                    설정하는 과정
                  </p>
                </li>
                <li>
                  <strong>상세 검색 조건의 확인 및 적용</strong>
                  <p className="info-txt">
                    설정한 상세 검색 조건을 최종적으로 적용하고 적용 결과를 확인
                  </p>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      {/* //설명 */}

      <TopBtn />
    </div>
  );
};

export default Gcontent_Search01;
