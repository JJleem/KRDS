import React from "react";
import { useState } from "react";
const Code = () => {
  const [copyState, setCopyState] = useState("copy");
  const handleCopyClick = () => {
    navigator.clipboard.writeText(`
<!-- table list -->
<div class="tbl-wrap">
	<table class="tbl col data">
		<caption>추가 민원 신청 여부 확인 표로 민원 신청인, 구분으로 구성되어있으며 민원 신청인인 전출지 전 세대주,새로운 세대주,전입지
			세대주로 구성되어 있음</caption>
		<colgroup>
			<col style="width: 30%;">
			<col>
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
			<td>세대주가 아닌 세대원이 신청하면서 세대주(또는 미성년자)를 포함하여 이사하는 경우</td>
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
<!-- //table list -->
    `);
    setCopyState("copied");
  };
  return (
    <div
      id="accordionCollapse04_11_01"
      className="accordion-collapse collapse"
      aria-expanded="false"
      aria-labelledby="accordionHeader04_11_01"
    >
      <div className="accordion-body">
        <div className="g-code-box">
          <div className="code-toolbar">
            <pre
              data-src="code/component_04_11_01.html"
              className="language-html"
              data-src-status="loaded"
              tabIndex={0}
            >
              <code className="language-html">
                <span className="token comment">&lt;!-- table list --&gt;</span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    tbl-wrap
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    table
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    tbl col data
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    caption
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                추가 민원 신청 여부 확인 표로 민원 신청인, 구분으로
                구성되어있으며 민원 신청인인 전출지 전 세대주,새로운
                세대주,전입지 세대주로 구성되어 있음
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    caption
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    colgroup
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    col
                  </span>{" "}
                  <span className="token special-attr">
                    <span className="token attr-name">style</span>
                    <span className="token attr-value">
                      <span className="token punctuation attr-equals">=</span>
                      <span className="token punctuation">"</span>
                      <span className="token value css language-css">
                        <span className="token property">width</span>
                        <span className="token punctuation">:</span> 30%
                        <span className="token punctuation">;</span>
                      </span>
                      <span className="token punctuation">"</span>
                    </span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    col
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    colgroup
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    thead
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    tr
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    th
                  </span>{" "}
                  <span className="token attr-name">scope</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    col
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                민원 신청인
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    th
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    th
                  </span>{" "}
                  <span className="token attr-name">scope</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    col
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                구분
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    th
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    tr
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    thead
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    tbody
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    tr
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    th
                  </span>{" "}
                  <span className="token attr-name">scope</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    row
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                전출지 전 세대주
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    th
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    td
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                세대주가 아닌 세대원이 신청하면서 세대주(또는 미성년자)를
                포함하여 이사하는 경우
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    td
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    tr
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    tr
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    th
                  </span>{" "}
                  <span className="token attr-name">scope</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    row
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                새로운 세대주
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    th
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    td
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                세대주 변경이 있는 경우
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    td
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    tr
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    tr
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    th
                  </span>{" "}
                  <span className="token attr-name">scope</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    row
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                전입지 세대주
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    th
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    td
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                이사온 곳에 기존에 살고 있는 세대주가 있는 경우
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    td
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    tr
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    tbody
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    table
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token comment">
                  &lt;!-- //table list --&gt;
                </span>
              </code>
            </pre>
            <div className="toolbar">
              <div className="toolbar-item">
                <button
                  className="copy-to-clipboard-button"
                  type="button"
                  data-copy-state={copyState}
                  onClick={handleCopyClick}
                >
                  <span>{copyState.toUpperCase()}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
