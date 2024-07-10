# KRDS - 디지털 정부 서비스 UI/UX 가이드라인 클론코딩

Typescript를 통하여 KRDS - UI/UX가이드라인 웹사이트 클론코딩 프로젝트입니다.

## 프로젝트 소개

KRDS는 한국정보화진흥원에서 제공하는 디지털 정부 서비스 UI/UX 가이드라인입니다.

이 프로젝트는 KRDS의 가이드라인을 참고하여 웹사이트를 구현한 것입니다.

## 기술 스택

- Typescript

### 사용 라이브러리

- SCSS
- Swiper
- React-router-dom
- React-helmet
- Recoil

## 주요 기능

- KRDS 웹사이트 모든 페이지 클론코딩
- 반응형 웹 디자인 적용
- 컴포넌트 구현 및 기능 적용

## 파일 구조

📦src
<br>
┣ 📂assets
<br>
┃ ┣ 📂css
<br>
┃ ┃ ┣ 📂old
<br>
┃ ┃ ┃ ┗ 📜style.css
<br>
┃ ┃ ┣ 📜style.css
<br>
┃ ┃ ┣ 📜style.css.map
<br>
┃ ┃ ┣ 📜style.min.css
<br>
┃ ┃ ┗ 📜style.min.css.map
<br>
┃ ┣ 📂fonts
<br>
┃ ┃ ┣ 📜PretendardGOV-Bold.subset.woff
<br>
┃ ┃ ┣ 📜PretendardGOV-Medium.subset.woff
<br>
┃ ┃ ┗ 📜PretendardGOV-Regular.subset.woff
<br>
┃ ┣ 📂img
<br>
┃ ┃ ┣ 📂component
<br>
┃ ┃ ┃ ┗ 📂common
<br>
┃ ┃ ┃ ┃ ┣ 📜ico_arr1_20_right.svg
<br>
┃ ┃ ┃ ┃ ┣ 📜ico_arr_20_down_blue.svg
<br>
┃ ┃ ┃ ┃ ┣ 📜ico_arr_accordion.svg
<br>
┃ ┃ ┃ ┃ ┣ 📜ico_close_24.svg
<br>
┃ ┃ ┃ ┃ ┣ 📜ico_file_20.svg
<br>
┃ ┃ ┃ ┃ ┣ 📜ico_go_20.svg
<br>
┃ ┃ ┃ ┃ ┗ 📜ico_sch_40.svg
<br>
┃ ┃ ┣ 📂guide
<br>
┃ ┃ ┃ ┣ 📂common
<br>
┃ ┃ ┃ ┃ ┣ 📜arr_lnb.svg
<br>
┃ ┃ ┃ ┃ ┗ 📜head_logo.svg
<br>
┃ ┃ ┃ ┗ 📂contents
<br>
┃ ┃ ┃ ┃ ┗ 📂main<br>
┃ ┃ ┗ 📂pattern<br>
┃ ┗ 📂scss<br>
┃ ┃ ┣ 📂component<br>
┃ ┃ ┃ ┣ 📂components<br>
┃ ┃ ┃ ┃ ┣ 📜_accordion.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_buttons.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_coach.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_disclosure.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_fileupload.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_helper.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_lists.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_modal.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_spinner.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_tables.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_tabs.scss<br>
┃ ┃ ┃ ┃ ┗ 📜_tooltip.scss<br>
┃ ┃ ┃ ┣ 📂forms<br>
┃ ┃ ┃ ┃ ┣ 📜_checkbox.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_datepicker.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_input.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_layout.scss<br>
┃ ┃ ┃ ┃ ┣ 📜_radio.scss<br>
┃ ┃ ┃ ┃ ┗ 📜_select.scss<br>
┃ ┃ ┃ ┣ 📂mixins<br>
┃ ┃ ┃ ┃ ┣ 📜_breakpoints.scss<br>
┃ ┃ ┃ ┃ ┗ 📜_utils.scss<br>
┃ ┃ ┃ ┣ 📜_colors.scss<br>
┃ ┃ ┃ ┣ 📜_c_components.scss<br>
┃ ┃ ┃ ┣ 📜_c_forms.scss<br>
┃ ┃ ┃ ┣ 📜_c_initialize.scss<br>
┃ ┃ ┃ ┣ 📜_c_kds.scss<br>
┃ ┃ ┃ ┣ 📜_fonts.scss<br>
┃ ┃ ┃ ┣ 📜_functions.scss<br>
┃ ┃ ┃ ┣ 📜_group_components.scss<br>
┃ ┃ ┃ ┣ 📜_group_forms.scss<br>
┃ ┃ ┃ ┣ 📜_group_mixins.scss<br>
┃ ┃ ┃ ┣ 📜_include.scss<br>
┃ ┃ ┃ ┣ 📜_reset.scss<br>
┃ ┃ ┃ ┣ 📜_root.scss<br>
┃ ┃ ┃ ┗ 📜_variables.scss<br>
┃ ┃ ┣ 📂guide<br>
┃ ┃ ┃ ┣ 📜_g_guide.scss<br>
┃ ┃ ┃ ┗ 📜_prism.scss<br>
┃ ┃ ┣ 📂pattern<br>
┃ ┃ ┃ ┣ 📜p_content.css<br>
┃ ┃ ┃ ┣ 📜p_content.css.map<br>
┃ ┃ ┃ ┣ 📜_p_common.scss<br>
┃ ┃ ┃ ┣ 📜_p_content.scss<br>
┃ ┃ ┃ ┗ 📜_p_layout.scss<br>
┃ ┃ ┣ 📜style.css<br>
┃ ┃ ┣ 📜style.css.map<br>
┃ ┃ ┗ 📜style.scss<br>
┣ 📂atom<br>
┃ ┗ 📜Atom.tsx<br>
┣ 📂Components<br>
┃ ┣ 📂common<br>
┃ ┃ ┣ 📂aside<br>
┃ ┃ ┃ ┗ 📜Gaside.tsx<br>
┃ ┃ ┣ 📂Footer<br>
┃ ┃ ┃ ┗ 📜Footer.tsx<br>
┃ ┃ ┣ 📂Header<br>
┃ ┃ ┃ ┗ 📜Header.tsx<br>
┃ ┃ ┣ 📂Header-top<br>
┃ ┃ ┃ ┗ 📜HeaderTop.tsx<br>
┃ ┃ ┗ 📂topbtn<br>
┃ ┃ ┃ ┗ 📜TopBtn.tsx<br>
┃ ┣ 📂component<br>
┃ ┃ ┣ 📂action<br>
┃ ┃ ┃ ┣ 📂button<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┣ 📜CodeFive.tsx<br>
┃ ┃ ┃ ┃ ┣ 📜CodeFour.tsx<br>
┃ ┃ ┃ ┃ ┣ 📜CodeThree.tsx<br>
┃ ┃ ┃ ┃ ┣ 📜CodeTwo.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Button.tsx<br>
┃ ┃ ┃ ┗ 📂link<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Link.tsx<br>
┃ ┃ ┣ 📂feedback<br>
┃ ┃ ┃ ┣ 📂spinner<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Spinner.tsx<br>
┃ ┃ ┃ ┗ 📂stepindicator<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_StepIndicator.tsx<br>
┃ ┃ ┣ 📂help<br>
┃ ┃ ┃ ┣ 📂coachmark<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_CoachMark.tsx<br>
┃ ┃ ┃ ┣ 📂contextualhelp<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_ContextualHelp.tsx<br>
┃ ┃ ┃ ┣ 📂helppanel<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_HelpPanel.tsx<br>
┃ ┃ ┃ ┗ 📂tutorialpanel<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_TutorialPanel.tsx<br>
┃ ┃ ┣ 📂identity<br>
┃ ┃ ┃ ┣ 📂footer<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Footer.tsx<br>
┃ ┃ ┃ ┣ 📂header<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Header.tsx<br>
┃ ┃ ┃ ┣ 📂Identifier<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Identifier.tsx<br>
┃ ┃ ┃ ┗ 📂masthead<br>
┃ ┃ ┃ ┃ ┣ 📂code<br>
┃ ┃ ┃ ┃ ┃ ┗ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent.tsx<br>
┃ ┃ ┣ 📂input<br>
┃ ┃ ┃ ┣ 📂dateinput<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_DateInput.tsx<br>
┃ ┃ ┃ ┣ 📂fileupload<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_FileUpload.tsx<br>
┃ ┃ ┃ ┣ 📂textarea<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Textarea.tsx<br>
┃ ┃ ┃ ┗ 📂textinput<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_TextInput.tsx<br>
┃ ┃ ┣ 📂layout<br>
┃ ┃ ┃ ┣ 📂accordion<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Accordion.tsx<br>
┃ ┃ ┃ ┣ 📂badge<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Badge.tsx<br>
┃ ┃ ┃ ┣ 📂calendar<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┣ 📜CodeTwo.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Calendar.tsx<br>
┃ ┃ ┃ ┣ 📂carousel<br>
┃ ┃ ┃ ┃ ┣ 📂Banner<br>
┃ ┃ ┃ ┃ ┃ ┣ 📜ElementBanner.tsx<br>
┃ ┃ ┃ ┃ ┃ ┗ 📜FullBanner.tsx<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┣ 📜CodeTwo.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Carousel.tsx<br>
┃ ┃ ┃ ┣ 📂criticalalerts<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_CriticalAlerts.tsx<br>
┃ ┃ ┃ ┣ 📂disclosure<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Disclosure.tsx<br>
┃ ┃ ┃ ┣ 📂image<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Image.tsx<br>
┃ ┃ ┃ ┣ 📂modal<br>
┃ ┃ ┃ ┃ ┣ 📂code<br>
┃ ┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┃ ┣ 📜CodeThree.tsx<br>
┃ ┃ ┃ ┃ ┃ ┗ 📜CodeTwo.tsx<br>
┃ ┃ ┃ ┃ ┣ 📂modalItem<br>
┃ ┃ ┃ ┃ ┃ ┣ 📜Basic.tsx<br>
┃ ┃ ┃ ┃ ┃ ┣ 📜Earlut.tsx<br>
┃ ┃ ┃ ┃ ┃ ┗ 📜Fade.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Modal.tsx<br>
┃ ┃ ┃ ┣ 📂structuredlist<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_StructuredList.tsx<br>
┃ ┃ ┃ ┣ 📂tab<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Tab.tsx<br>
┃ ┃ ┃ ┗ 📂table<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Table.tsx<br>
┃ ┃ ┣ 📂search<br>
┃ ┃ ┃ ┣ 📂breadcrumb<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Breadcrumb.tsx<br>
┃ ┃ ┃ ┣ 📂inpagenavigation<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_InPageNavigation.tsx<br>
┃ ┃ ┃ ┣ 📂mainmenu<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_MainMenu.tsx<br>
┃ ┃ ┃ ┣ 📂pagination<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Pagination.tsx<br>
┃ ┃ ┃ ┣ 📂sidenavigation<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_SideNavigation.tsx<br>
┃ ┃ ┃ ┗ 📂skiplink<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_SkipLink.tsx<br>
┃ ┃ ┗ 📂select<br>
┃ ┃ ┃ ┣ 📂checkbox<br>
┃ ┃ ┃ ┃ ┣ 📂code<br>
┃ ┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┃ ┣ 📜CodeFive.tsx<br>
┃ ┃ ┃ ┃ ┃ ┣ 📜CodeFour.tsx<br>
┃ ┃ ┃ ┃ ┃ ┣ 📜CodeSeven.tsx<br>
┃ ┃ ┃ ┃ ┃ ┣ 📜CodeSix.tsx<br>
┃ ┃ ┃ ┃ ┃ ┣ 📜CodeThree.tsx<br>
┃ ┃ ┃ ┃ ┃ ┗ 📜CodeTwo.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Checkbox.tsx<br>
┃ ┃ ┃ ┣ 📂radiobutton<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┣ 📜CodeFive.tsx<br>
┃ ┃ ┃ ┃ ┣ 📜CodeFour.tsx<br>
┃ ┃ ┃ ┃ ┣ 📜CodeThree.tsx<br>
┃ ┃ ┃ ┃ ┣ 📜CodeTwo.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_RadioButton.tsx<br>
┃ ┃ ┃ ┣ 📂select<br>
┃ ┃ ┃ ┃ ┣ 📂code<br>
┃ ┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┃ ┗ 📜CodeTwo.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Select.tsx<br>
┃ ┃ ┃ ┗ 📂tag<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Tag.tsx<br>
┃ ┣ 📂foundation<br>
┃ ┃ ┣ 📜Gcontent.tsx<br>
┃ ┃ ┣ 📜Gcontent02.tsx<br>
┃ ┃ ┣ 📜Gcontent03.tsx<br>
┃ ┃ ┣ 📜Gcontent04.tsx<br>
┃ ┃ ┣ 📜Gcontent05.tsx<br>
┃ ┃ ┣ 📜Gcontent06.tsx<br>
┃ ┃ ┗ 📜Gcontent07.tsx<br>
┃ ┣ 📂global<br>
┃ ┃ ┣ 📂global01<br>
┃ ┃ ┃ ┣ 📂code<br>
┃ ┃ ┃ ┃ ┗ 📜Code.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent.tsx<br>
┃ ┃ ┣ 📂global02<br>
┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent02.tsx<br>
┃ ┃ ┣ 📂global03<br>
┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent03.tsx<br>
┃ ┃ ┣ 📂global04<br>
┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent04.tsx<br>
┃ ┃ ┣ 📂global05<br>
┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent05.tsx<br>
┃ ┃ ┣ 📂global06<br>
┃ ┃ ┃ ┗ 📜Gcontent06.tsx<br>
┃ ┃ ┣ 📂global07<br>
┃ ┃ ┃ ┣ 📂code<br>
┃ ┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜CodeTwo.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent07.tsx<br>
┃ ┃ ┣ 📂global08<br>
┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent08.tsx<br>
┃ ┃ ┣ 📂global09<br>
┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent09.tsx<br>
┃ ┃ ┣ 📂global10<br>
┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent10.tsx<br>
┃ ┃ ┗ 📂global11<br>
┃ ┃ ┃ ┣ 📜Code.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent11.tsx<br>
┃ ┣ 📂guideline<br>
┃ ┃ ┣ 📜Gcontent.tsx<br>
┃ ┃ ┣ 📜Gcontent2.tsx<br>
┃ ┃ ┗ 📜Gcontent3.tsx<br>
┃ ┣ 📂home<br>
┃ ┃ ┗ 📂content<br>
┃ ┃ ┃ ┣ 📂figmaArea<br>
┃ ┃ ┃ ┃ ┣ 📜FigmaArea.tsx<br>
┃ ┃ ┃ ┃ ┗ 📜FigmaAreaPdf.tsx<br>
┃ ┃ ┃ ┣ 📂mainArea<br>
┃ ┃ ┃ ┃ ┗ 📜MainArea.tsx<br>
┃ ┃ ┃ ┣ 📂searchArea<br>
┃ ┃ ┃ ┃ ┗ 📜SearchArea.tsx<br>
┃ ┃ ┃ ┣ 📂visualArea<br>
┃ ┃ ┃ ┃ ┗ 📜VisualArea.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent.tsx<br>
┃ ┣ 📂service<br>
┃ ┃ ┣ 📂login<br>
┃ ┃ ┃ ┣ 📜Gcontent_Login01.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Login02.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Login03.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Login04.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Login05.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Login06.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Login07.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent_Login08.tsx<br>
┃ ┃ ┣ 📂policy<br>
┃ ┃ ┃ ┣ 📜Gcontent_Policy01.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Policy02.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Policy03.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent_Policy04.tsx<br>
┃ ┃ ┣ 📂request<br>
┃ ┃ ┃ ┣ 📜Gcontent_Request01.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Request02.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Request03.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Request04.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Request05.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Request06.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Request07.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent_Request08.tsx<br>
┃ ┃ ┣ 📂search<br>
┃ ┃ ┃ ┣ 📜Gcontent_Search01.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Search02.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Search03.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Search04.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Search05.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Search06.tsx<br>
┃ ┃ ┃ ┣ 📜Gcontent_Search07.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent_Search08.tsx<br>
┃ ┃ ┗ 📂visit<br>
┃ ┃ ┃ ┣ 📜Gcontent_Visit01.tsx<br>
┃ ┃ ┃ ┗ 📜Gcontent_Visit02.tsx<br>
┃ ┗ 📂styleguide<br>
┃ ┃ ┣ 📜Gcontent.tsx<br>
┃ ┃ ┣ 📜Gcontent_Color.tsx<br>
┃ ┃ ┣ 📜Gcontent_Layout.tsx<br>
┃ ┃ ┣ 📜Gcontent_Shape.tsx<br>
┃ ┃ ┣ 📜Gcontent_SystemIcon.tsx<br>
┃ ┃ ┗ 📜Gcontent_Typography.tsx<br>
┣ 📂data<br>
┃ ┣ 📜db.d.ts<br>
┃ ┗ 📜db.json<br>
┣ 📂pages<br>
┃ ┣ 📂component<br>
┃ ┃ ┣ 📂action<br>
┃ ┃ ┃ ┣ 📜Component_Button.tsx<br>
┃ ┃ ┃ ┗ 📜Component_Link.tsx<br>
┃ ┃ ┣ 📂feedback<br>
┃ ┃ ┃ ┣ 📜Component_Spinner.tsx<br>
┃ ┃ ┃ ┗ 📜Component_StepIndicator.tsx<br>
┃ ┃ ┣ 📂help<br>
┃ ┃ ┃ ┣ 📜Component_CoachMark.tsx<br>
┃ ┃ ┃ ┣ 📜Component_ContextualHelp.tsx<br>
┃ ┃ ┃ ┣ 📜Component_HelpPanel.tsx<br>
┃ ┃ ┃ ┗ 📜Component_TutorialPanel.tsx<br>
┃ ┃ ┣ 📂identity<br>
┃ ┃ ┃ ┣ 📜Component.tsx<br>
┃ ┃ ┃ ┣ 📜Component_Footer.tsx<br>
┃ ┃ ┃ ┣ 📜Component_Header.tsx<br>
┃ ┃ ┃ ┗ 📜Component_Identifier.tsx<br>
┃ ┃ ┣ 📂input<br>
┃ ┃ ┃ ┣ 📜Component_DateInput.tsx<br>
┃ ┃ ┃ ┣ 📜Component_FileUpload.tsx<br>
┃ ┃ ┃ ┣ 📜Component_Textarea.tsx<br>
┃ ┃ ┃ ┗ 📜Component_TextInput.tsx<br>
┃ ┃ ┣ 📂layout<br>
┃ ┃ ┃ ┣ 📜Component_Accordion.tsx<br>
┃ ┃ ┃ ┣ 📜Component_Badge.tsx<br>
┃ ┃ ┃ ┣ 📜Component_Calendar.tsx<br>
┃ ┃ ┃ ┣ 📜Component_Carousel.tsx<br>
┃ ┃ ┃ ┣ 📜Component_CriticalAlerts.tsx<br>
┃ ┃ ┃ ┣ 📜Component_Disclosure.tsx<br>
┃ ┃ ┃ ┣ 📜Component_Image.tsx<br>
┃ ┃ ┃ ┣ 📜Component_Modal.tsx<br>
┃ ┃ ┃ ┣ 📜Component_StructuredList.tsx<br>
┃ ┃ ┃ ┣ 📜Component_Tab.tsx<br>
┃ ┃ ┃ ┗ 📜Component_Table.tsx<br>
┃ ┃ ┣ 📂search<br>
┃ ┃ ┃ ┣ 📜Component_Breadcrumb.tsx<br>
┃ ┃ ┃ ┣ 📜Component_InPageNavigation.tsx<br>
┃ ┃ ┃ ┣ 📜Component_MainMenu.tsx<br>
┃ ┃ ┃ ┣ 📜Component_Pagination.tsx<br>
┃ ┃ ┃ ┣ 📜Component_SideNavigation.tsx<br>
┃ ┃ ┃ ┗ 📜Component_SkipLink.tsx<br>
┃ ┃ ┗ 📂select<br>
┃ ┃ ┃ ┣ 📜Component_CheckBox.tsx<br>
┃ ┃ ┃ ┣ 📜Component_RadioButton.tsx<br>
┃ ┃ ┃ ┣ 📜Component_Select.tsx<br>
┃ ┃ ┃ ┗ 📜Component_Tag.tsx<br>
┃ ┣ 📂foundation<br>
┃ ┃ ┣ 📜Foundation.tsx<br>
┃ ┃ ┣ 📜Foundation02.tsx<br>
┃ ┃ ┣ 📜Foundation03.tsx<br>
┃ ┃ ┣ 📜Foundation04.tsx<br>
┃ ┃ ┣ 📜Foundation05.tsx<br>
┃ ┃ ┣ 📜Foundation06.tsx<br>
┃ ┃ ┗ 📜Foundation07.tsx<br>
┃ ┣ 📂global<br>
┃ ┃ ┣ 📜Global.tsx<br>
┃ ┃ ┣ 📜Global02.tsx<br>
┃ ┃ ┣ 📜Global03.tsx<br>
┃ ┃ ┣ 📜Global04.tsx<br>
┃ ┃ ┣ 📜Global05.tsx<br>
┃ ┃ ┣ 📜Global06.tsx<br>
┃ ┃ ┣ 📜Global07.tsx<br>
┃ ┃ ┣ 📜Global08.tsx<br>
┃ ┃ ┣ 📜Global09.tsx<br>
┃ ┃ ┣ 📜Global10.tsx<br>
┃ ┃ ┗ 📜Global11.tsx<br>
┃ ┣ 📂guideline<br>
┃ ┃ ┣ 📜Guideline.tsx<br>
┃ ┃ ┣ 📜Guideline02.tsx<br>
┃ ┃ ┗ 📜Guideline03.tsx<br>
┃ ┣ 📂service<br>
┃ ┃ ┣ 📂login<br>
┃ ┃ ┃ ┣ 📜Login01.tsx<br>
┃ ┃ ┃ ┣ 📜Login02.tsx<br>
┃ ┃ ┃ ┣ 📜Login03.tsx<br>
┃ ┃ ┃ ┣ 📜Login04.tsx<br>
┃ ┃ ┃ ┣ 📜Login05.tsx<br>
┃ ┃ ┃ ┣ 📜Login06.tsx<br>
┃ ┃ ┃ ┣ 📜Login07.tsx<br>
┃ ┃ ┃ ┗ 📜Login08.tsx<br>
┃ ┃ ┣ 📂policy<br>
┃ ┃ ┃ ┣ 📜Policy01.tsx<br>
┃ ┃ ┃ ┣ 📜Policy02.tsx<br>
┃ ┃ ┃ ┣ 📜Policy03.tsx<br>
┃ ┃ ┃ ┗ 📜Policy04.tsx<br>
┃ ┃ ┣ 📂request<br>
┃ ┃ ┃ ┣ 📜Request01.tsx<br>
┃ ┃ ┃ ┣ 📜Request02.tsx<br>
┃ ┃ ┃ ┣ 📜Request03.tsx<br>
┃ ┃ ┃ ┣ 📜Request04.tsx<br>
┃ ┃ ┃ ┣ 📜Request05.tsx<br>
┃ ┃ ┃ ┣ 📜Request06.tsx<br>
┃ ┃ ┃ ┣ 📜Request07.tsx<br>
┃ ┃ ┃ ┗ 📜Request08.tsx<br>
┃ ┃ ┣ 📂search<br>
┃ ┃ ┃ ┣ 📜Search01.tsx<br>
┃ ┃ ┃ ┣ 📜Search02.tsx<br>
┃ ┃ ┃ ┣ 📜Search03.tsx<br>
┃ ┃ ┃ ┣ 📜Search04.tsx<br>
┃ ┃ ┃ ┣ 📜Search05.tsx<br>
┃ ┃ ┃ ┣ 📜Search06.tsx<br>
┃ ┃ ┃ ┣ 📜Search07.tsx<br>
┃ ┃ ┃ ┗ 📜Search08.tsx<br>
┃ ┃ ┗ 📂visit<br>
┃ ┃ ┃ ┣ 📜Visit01.tsx<br>
┃ ┃ ┃ ┗ 📜Visit02.tsx<br>
┃ ┣ 📂styleguide<br>
┃ ┃ ┣ 📜StyleGuide.tsx<br>
┃ ┃ ┣ 📜StyleGuide_Color.tsx<br>
┃ ┃ ┣ 📜StyleGuide_Layout.tsx<br>
┃ ┃ ┣ 📜StyleGuide_Shape.tsx<br>
┃ ┃ ┣ 📜StyleGuide_SystemIcon.tsx<br>
┃ ┃ ┗ 📜StyleGuide_Typography.tsx<br>
┃ ┗ 📜Home.tsx<br>
┣ 📂resource<br>
┃ ┣ 📂img<br>
┃ ┃ ┣ 📂guideline<br>
┃ ┃ ┣ 📂home<br>
┃ ┃ ┗ 📂outline<br>
┃ ┗ 📂variable<br>
┣ 📜App.tsx<br>
┣ 📜index.tsx<br>
┗ 📜Wrap.tsx<br>
