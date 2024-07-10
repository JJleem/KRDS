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
┃ ┃ ┣ 📂old

┃ ┃ ┃ ┗ 📜style.css

┃ ┃ ┣ 📜style.css

┃ ┃ ┣ 📜style.css.map

┃ ┃ ┣ 📜style.min.css

┃ ┃ ┗ 📜style.min.css.map

┃ ┣ 📂fonts

┃ ┃ ┣ 📜PretendardGOV-Bold.subset.woff

┃ ┃ ┣ 📜PretendardGOV-Medium.subset.woff

┃ ┃ ┗ 📜PretendardGOV-Regular.subset.woff

┃ ┣ 📂img

┃ ┃ ┣ 📂component

┃ ┃ ┃ ┗ 📂common

┃ ┃ ┃ ┃ ┣ 📜ico_arr1_20_right.svg

┃ ┃ ┃ ┃ ┣ 📜ico_arr_20_down_blue.svg

┃ ┃ ┃ ┃ ┣ 📜ico_arr_accordion.svg

┃ ┃ ┃ ┃ ┣ 📜ico_close_24.svg

┃ ┃ ┃ ┃ ┣ 📜ico_file_20.svg

┃ ┃ ┃ ┃ ┣ 📜ico_go_20.svg

┃ ┃ ┃ ┃ ┗ 📜ico_sch_40.svg

┃ ┃ ┣ 📂guide
┃ ┃ ┃ ┣ 📂common
┃ ┃ ┃ ┃ ┣ 📜arr_lnb.svg
┃ ┃ ┃ ┃ ┗ 📜head_logo.svg
┃ ┃ ┃ ┗ 📂contents
┃ ┃ ┃ ┃ ┗ 📂main
┃ ┃ ┗ 📂pattern
┃ ┗ 📂scss
┃ ┃ ┣ 📂component
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┃ ┣ 📜_accordion.scss
┃ ┃ ┃ ┃ ┣ 📜_buttons.scss
┃ ┃ ┃ ┃ ┣ 📜_coach.scss
┃ ┃ ┃ ┃ ┣ 📜_disclosure.scss
┃ ┃ ┃ ┃ ┣ 📜_fileupload.scss
┃ ┃ ┃ ┃ ┣ 📜_helper.scss
┃ ┃ ┃ ┃ ┣ 📜_lists.scss
┃ ┃ ┃ ┃ ┣ 📜_modal.scss
┃ ┃ ┃ ┃ ┣ 📜_spinner.scss
┃ ┃ ┃ ┃ ┣ 📜_tables.scss
┃ ┃ ┃ ┃ ┣ 📜_tabs.scss
┃ ┃ ┃ ┃ ┗ 📜_tooltip.scss
┃ ┃ ┃ ┣ 📂forms
┃ ┃ ┃ ┃ ┣ 📜_checkbox.scss
┃ ┃ ┃ ┃ ┣ 📜_datepicker.scss
┃ ┃ ┃ ┃ ┣ 📜_input.scss
┃ ┃ ┃ ┃ ┣ 📜_layout.scss
┃ ┃ ┃ ┃ ┣ 📜_radio.scss
┃ ┃ ┃ ┃ ┗ 📜_select.scss
┃ ┃ ┃ ┣ 📂mixins
┃ ┃ ┃ ┃ ┣ 📜_breakpoints.scss
┃ ┃ ┃ ┃ ┗ 📜_utils.scss
┃ ┃ ┃ ┣ 📜_colors.scss
┃ ┃ ┃ ┣ 📜_c_components.scss
┃ ┃ ┃ ┣ 📜_c_forms.scss
┃ ┃ ┃ ┣ 📜_c_initialize.scss
┃ ┃ ┃ ┣ 📜_c_kds.scss
┃ ┃ ┃ ┣ 📜_fonts.scss
┃ ┃ ┃ ┣ 📜_functions.scss
┃ ┃ ┃ ┣ 📜_group_components.scss
┃ ┃ ┃ ┣ 📜_group_forms.scss
┃ ┃ ┃ ┣ 📜_group_mixins.scss
┃ ┃ ┃ ┣ 📜_include.scss
┃ ┃ ┃ ┣ 📜_reset.scss
┃ ┃ ┃ ┣ 📜_root.scss
┃ ┃ ┃ ┗ 📜_variables.scss
┃ ┃ ┣ 📂guide
┃ ┃ ┃ ┣ 📜_g_guide.scss
┃ ┃ ┃ ┗ 📜_prism.scss
┃ ┃ ┣ 📂pattern
┃ ┃ ┃ ┣ 📜p_content.css
┃ ┃ ┃ ┣ 📜p_content.css.map
┃ ┃ ┃ ┣ 📜_p_common.scss
┃ ┃ ┃ ┣ 📜_p_content.scss
┃ ┃ ┃ ┗ 📜_p_layout.scss
┃ ┃ ┣ 📜style.css
┃ ┃ ┣ 📜style.css.map
┃ ┃ ┗ 📜style.scss
┣ 📂atom
┃ ┗ 📜Atom.tsx
┣ 📂Components
┃ ┣ 📂common
┃ ┃ ┣ 📂aside
┃ ┃ ┃ ┗ 📜Gaside.tsx
┃ ┃ ┣ 📂Footer
┃ ┃ ┃ ┗ 📜Footer.tsx
┃ ┃ ┣ 📂Header
┃ ┃ ┃ ┗ 📜Header.tsx
┃ ┃ ┣ 📂Header-top
┃ ┃ ┃ ┗ 📜HeaderTop.tsx
┃ ┃ ┗ 📂topbtn
┃ ┃ ┃ ┗ 📜TopBtn.tsx
┃ ┣ 📂component
┃ ┃ ┣ 📂action
┃ ┃ ┃ ┣ 📂button
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┣ 📜CodeFive.tsx
┃ ┃ ┃ ┃ ┣ 📜CodeFour.tsx
┃ ┃ ┃ ┃ ┣ 📜CodeThree.tsx
┃ ┃ ┃ ┃ ┣ 📜CodeTwo.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Button.tsx
┃ ┃ ┃ ┗ 📂link
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Link.tsx
┃ ┃ ┣ 📂feedback
┃ ┃ ┃ ┣ 📂spinner
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Spinner.tsx
┃ ┃ ┃ ┗ 📂stepindicator
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_StepIndicator.tsx
┃ ┃ ┣ 📂help
┃ ┃ ┃ ┣ 📂coachmark
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_CoachMark.tsx
┃ ┃ ┃ ┣ 📂contextualhelp
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_ContextualHelp.tsx
┃ ┃ ┃ ┣ 📂helppanel
┃ ┃ ┃ ┃ ┗ 📜Gcontent_HelpPanel.tsx
┃ ┃ ┃ ┗ 📂tutorialpanel
┃ ┃ ┃ ┃ ┗ 📜Gcontent_TutorialPanel.tsx
┃ ┃ ┣ 📂identity
┃ ┃ ┃ ┣ 📂footer
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Footer.tsx
┃ ┃ ┃ ┣ 📂header
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Header.tsx
┃ ┃ ┃ ┣ 📂Identifier
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Identifier.tsx
┃ ┃ ┃ ┗ 📂masthead
┃ ┃ ┃ ┃ ┣ 📂code
┃ ┃ ┃ ┃ ┃ ┗ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent.tsx
┃ ┃ ┣ 📂input
┃ ┃ ┃ ┣ 📂dateinput
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_DateInput.tsx
┃ ┃ ┃ ┣ 📂fileupload
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_FileUpload.tsx
┃ ┃ ┃ ┣ 📂textarea
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Textarea.tsx
┃ ┃ ┃ ┗ 📂textinput
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_TextInput.tsx
┃ ┃ ┣ 📂layout
┃ ┃ ┃ ┣ 📂accordion
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Accordion.tsx
┃ ┃ ┃ ┣ 📂badge
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Badge.tsx
┃ ┃ ┃ ┣ 📂calendar
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┣ 📜CodeTwo.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Calendar.tsx
┃ ┃ ┃ ┣ 📂carousel
┃ ┃ ┃ ┃ ┣ 📂Banner
┃ ┃ ┃ ┃ ┃ ┣ 📜ElementBanner.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜FullBanner.tsx
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┣ 📜CodeTwo.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Carousel.tsx
┃ ┃ ┃ ┣ 📂criticalalerts
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_CriticalAlerts.tsx
┃ ┃ ┃ ┣ 📂disclosure
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Disclosure.tsx
┃ ┃ ┃ ┣ 📂image
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Image.tsx
┃ ┃ ┃ ┣ 📂modal
┃ ┃ ┃ ┃ ┣ 📂code
┃ ┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜CodeThree.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜CodeTwo.tsx
┃ ┃ ┃ ┃ ┣ 📂modalItem
┃ ┃ ┃ ┃ ┃ ┣ 📜Basic.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜Earlut.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜Fade.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Modal.tsx
┃ ┃ ┃ ┣ 📂structuredlist
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_StructuredList.tsx
┃ ┃ ┃ ┣ 📂tab
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Tab.tsx
┃ ┃ ┃ ┗ 📂table
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Table.tsx
┃ ┃ ┣ 📂search
┃ ┃ ┃ ┣ 📂breadcrumb
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Breadcrumb.tsx
┃ ┃ ┃ ┣ 📂inpagenavigation
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_InPageNavigation.tsx
┃ ┃ ┃ ┣ 📂mainmenu
┃ ┃ ┃ ┃ ┗ 📜Gcontent_MainMenu.tsx
┃ ┃ ┃ ┣ 📂pagination
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Pagination.tsx
┃ ┃ ┃ ┣ 📂sidenavigation
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_SideNavigation.tsx
┃ ┃ ┃ ┗ 📂skiplink
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_SkipLink.tsx
┃ ┃ ┗ 📂select
┃ ┃ ┃ ┣ 📂checkbox
┃ ┃ ┃ ┃ ┣ 📂code
┃ ┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜CodeFive.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜CodeFour.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜CodeSeven.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜CodeSix.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜CodeThree.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜CodeTwo.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Checkbox.tsx
┃ ┃ ┃ ┣ 📂radiobutton
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┣ 📜CodeFive.tsx
┃ ┃ ┃ ┃ ┣ 📜CodeFour.tsx
┃ ┃ ┃ ┃ ┣ 📜CodeThree.tsx
┃ ┃ ┃ ┃ ┣ 📜CodeTwo.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_RadioButton.tsx
┃ ┃ ┃ ┣ 📂select
┃ ┃ ┃ ┃ ┣ 📂code
┃ ┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜CodeTwo.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Select.tsx
┃ ┃ ┃ ┗ 📂tag
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜Gcontent_Tag.tsx
┃ ┣ 📂foundation
┃ ┃ ┣ 📜Gcontent.tsx
┃ ┃ ┣ 📜Gcontent02.tsx
┃ ┃ ┣ 📜Gcontent03.tsx
┃ ┃ ┣ 📜Gcontent04.tsx
┃ ┃ ┣ 📜Gcontent05.tsx
┃ ┃ ┣ 📜Gcontent06.tsx
┃ ┃ ┗ 📜Gcontent07.tsx
┃ ┣ 📂global
┃ ┃ ┣ 📂global01
┃ ┃ ┃ ┣ 📂code
┃ ┃ ┃ ┃ ┗ 📜Code.tsx
┃ ┃ ┃ ┗ 📜Gcontent.tsx
┃ ┃ ┣ 📂global02
┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┗ 📜Gcontent02.tsx
┃ ┃ ┣ 📂global03
┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┗ 📜Gcontent03.tsx
┃ ┃ ┣ 📂global04
┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┗ 📜Gcontent04.tsx
┃ ┃ ┣ 📂global05
┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┗ 📜Gcontent05.tsx
┃ ┃ ┣ 📂global06
┃ ┃ ┃ ┗ 📜Gcontent06.tsx
┃ ┃ ┣ 📂global07
┃ ┃ ┃ ┣ 📂code
┃ ┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┃ ┗ 📜CodeTwo.tsx
┃ ┃ ┃ ┗ 📜Gcontent07.tsx
┃ ┃ ┣ 📂global08
┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┗ 📜Gcontent08.tsx
┃ ┃ ┣ 📂global09
┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┗ 📜Gcontent09.tsx
┃ ┃ ┣ 📂global10
┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┗ 📜Gcontent10.tsx
┃ ┃ ┗ 📂global11
┃ ┃ ┃ ┣ 📜Code.tsx
┃ ┃ ┃ ┗ 📜Gcontent11.tsx
┃ ┣ 📂guideline
┃ ┃ ┣ 📜Gcontent.tsx
┃ ┃ ┣ 📜Gcontent2.tsx
┃ ┃ ┗ 📜Gcontent3.tsx
┃ ┣ 📂home
┃ ┃ ┗ 📂content
┃ ┃ ┃ ┣ 📂figmaArea
┃ ┃ ┃ ┃ ┣ 📜FigmaArea.tsx
┃ ┃ ┃ ┃ ┗ 📜FigmaAreaPdf.tsx
┃ ┃ ┃ ┣ 📂mainArea
┃ ┃ ┃ ┃ ┗ 📜MainArea.tsx
┃ ┃ ┃ ┣ 📂searchArea
┃ ┃ ┃ ┃ ┗ 📜SearchArea.tsx
┃ ┃ ┃ ┣ 📂visualArea
┃ ┃ ┃ ┃ ┗ 📜VisualArea.tsx
┃ ┃ ┃ ┗ 📜Gcontent.tsx
┃ ┣ 📂service
┃ ┃ ┣ 📂login
┃ ┃ ┃ ┣ 📜Gcontent_Login01.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Login02.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Login03.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Login04.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Login05.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Login06.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Login07.tsx
┃ ┃ ┃ ┗ 📜Gcontent_Login08.tsx
┃ ┃ ┣ 📂policy
┃ ┃ ┃ ┣ 📜Gcontent_Policy01.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Policy02.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Policy03.tsx
┃ ┃ ┃ ┗ 📜Gcontent_Policy04.tsx
┃ ┃ ┣ 📂request
┃ ┃ ┃ ┣ 📜Gcontent_Request01.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Request02.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Request03.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Request04.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Request05.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Request06.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Request07.tsx
┃ ┃ ┃ ┗ 📜Gcontent_Request08.tsx
┃ ┃ ┣ 📂search
┃ ┃ ┃ ┣ 📜Gcontent_Search01.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Search02.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Search03.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Search04.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Search05.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Search06.tsx
┃ ┃ ┃ ┣ 📜Gcontent_Search07.tsx
┃ ┃ ┃ ┗ 📜Gcontent_Search08.tsx
┃ ┃ ┗ 📂visit
┃ ┃ ┃ ┣ 📜Gcontent_Visit01.tsx
┃ ┃ ┃ ┗ 📜Gcontent_Visit02.tsx
┃ ┗ 📂styleguide
┃ ┃ ┣ 📜Gcontent.tsx
┃ ┃ ┣ 📜Gcontent_Color.tsx
┃ ┃ ┣ 📜Gcontent_Layout.tsx
┃ ┃ ┣ 📜Gcontent_Shape.tsx
┃ ┃ ┣ 📜Gcontent_SystemIcon.tsx
┃ ┃ ┗ 📜Gcontent_Typography.tsx
┣ 📂data
┃ ┣ 📜db.d.ts
┃ ┗ 📜db.json
┣ 📂pages
┃ ┣ 📂component
┃ ┃ ┣ 📂action
┃ ┃ ┃ ┣ 📜Component_Button.tsx
┃ ┃ ┃ ┗ 📜Component_Link.tsx
┃ ┃ ┣ 📂feedback
┃ ┃ ┃ ┣ 📜Component_Spinner.tsx
┃ ┃ ┃ ┗ 📜Component_StepIndicator.tsx
┃ ┃ ┣ 📂help
┃ ┃ ┃ ┣ 📜Component_CoachMark.tsx
┃ ┃ ┃ ┣ 📜Component_ContextualHelp.tsx
┃ ┃ ┃ ┣ 📜Component_HelpPanel.tsx
┃ ┃ ┃ ┗ 📜Component_TutorialPanel.tsx
┃ ┃ ┣ 📂identity
┃ ┃ ┃ ┣ 📜Component.tsx
┃ ┃ ┃ ┣ 📜Component_Footer.tsx
┃ ┃ ┃ ┣ 📜Component_Header.tsx
┃ ┃ ┃ ┗ 📜Component_Identifier.tsx
┃ ┃ ┣ 📂input
┃ ┃ ┃ ┣ 📜Component_DateInput.tsx
┃ ┃ ┃ ┣ 📜Component_FileUpload.tsx
┃ ┃ ┃ ┣ 📜Component_Textarea.tsx
┃ ┃ ┃ ┗ 📜Component_TextInput.tsx
┃ ┃ ┣ 📂layout
┃ ┃ ┃ ┣ 📜Component_Accordion.tsx
┃ ┃ ┃ ┣ 📜Component_Badge.tsx
┃ ┃ ┃ ┣ 📜Component_Calendar.tsx
┃ ┃ ┃ ┣ 📜Component_Carousel.tsx
┃ ┃ ┃ ┣ 📜Component_CriticalAlerts.tsx
┃ ┃ ┃ ┣ 📜Component_Disclosure.tsx
┃ ┃ ┃ ┣ 📜Component_Image.tsx
┃ ┃ ┃ ┣ 📜Component_Modal.tsx
┃ ┃ ┃ ┣ 📜Component_StructuredList.tsx
┃ ┃ ┃ ┣ 📜Component_Tab.tsx
┃ ┃ ┃ ┗ 📜Component_Table.tsx
┃ ┃ ┣ 📂search
┃ ┃ ┃ ┣ 📜Component_Breadcrumb.tsx
┃ ┃ ┃ ┣ 📜Component_InPageNavigation.tsx
┃ ┃ ┃ ┣ 📜Component_MainMenu.tsx
┃ ┃ ┃ ┣ 📜Component_Pagination.tsx
┃ ┃ ┃ ┣ 📜Component_SideNavigation.tsx
┃ ┃ ┃ ┗ 📜Component_SkipLink.tsx
┃ ┃ ┗ 📂select
┃ ┃ ┃ ┣ 📜Component_CheckBox.tsx
┃ ┃ ┃ ┣ 📜Component_RadioButton.tsx
┃ ┃ ┃ ┣ 📜Component_Select.tsx
┃ ┃ ┃ ┗ 📜Component_Tag.tsx
┃ ┣ 📂foundation
┃ ┃ ┣ 📜Foundation.tsx
┃ ┃ ┣ 📜Foundation02.tsx
┃ ┃ ┣ 📜Foundation03.tsx
┃ ┃ ┣ 📜Foundation04.tsx
┃ ┃ ┣ 📜Foundation05.tsx
┃ ┃ ┣ 📜Foundation06.tsx
┃ ┃ ┗ 📜Foundation07.tsx
┃ ┣ 📂global
┃ ┃ ┣ 📜Global.tsx
┃ ┃ ┣ 📜Global02.tsx
┃ ┃ ┣ 📜Global03.tsx
┃ ┃ ┣ 📜Global04.tsx
┃ ┃ ┣ 📜Global05.tsx
┃ ┃ ┣ 📜Global06.tsx
┃ ┃ ┣ 📜Global07.tsx
┃ ┃ ┣ 📜Global08.tsx
┃ ┃ ┣ 📜Global09.tsx
┃ ┃ ┣ 📜Global10.tsx
┃ ┃ ┗ 📜Global11.tsx
┃ ┣ 📂guideline
┃ ┃ ┣ 📜Guideline.tsx
┃ ┃ ┣ 📜Guideline02.tsx
┃ ┃ ┗ 📜Guideline03.tsx
┃ ┣ 📂service
┃ ┃ ┣ 📂login
┃ ┃ ┃ ┣ 📜Login01.tsx
┃ ┃ ┃ ┣ 📜Login02.tsx
┃ ┃ ┃ ┣ 📜Login03.tsx
┃ ┃ ┃ ┣ 📜Login04.tsx
┃ ┃ ┃ ┣ 📜Login05.tsx
┃ ┃ ┃ ┣ 📜Login06.tsx
┃ ┃ ┃ ┣ 📜Login07.tsx
┃ ┃ ┃ ┗ 📜Login08.tsx
┃ ┃ ┣ 📂policy
┃ ┃ ┃ ┣ 📜Policy01.tsx
┃ ┃ ┃ ┣ 📜Policy02.tsx
┃ ┃ ┃ ┣ 📜Policy03.tsx
┃ ┃ ┃ ┗ 📜Policy04.tsx
┃ ┃ ┣ 📂request
┃ ┃ ┃ ┣ 📜Request01.tsx
┃ ┃ ┃ ┣ 📜Request02.tsx
┃ ┃ ┃ ┣ 📜Request03.tsx
┃ ┃ ┃ ┣ 📜Request04.tsx
┃ ┃ ┃ ┣ 📜Request05.tsx
┃ ┃ ┃ ┣ 📜Request06.tsx
┃ ┃ ┃ ┣ 📜Request07.tsx
┃ ┃ ┃ ┗ 📜Request08.tsx
┃ ┃ ┣ 📂search
┃ ┃ ┃ ┣ 📜Search01.tsx
┃ ┃ ┃ ┣ 📜Search02.tsx
┃ ┃ ┃ ┣ 📜Search03.tsx
┃ ┃ ┃ ┣ 📜Search04.tsx
┃ ┃ ┃ ┣ 📜Search05.tsx
┃ ┃ ┃ ┣ 📜Search06.tsx
┃ ┃ ┃ ┣ 📜Search07.tsx
┃ ┃ ┃ ┗ 📜Search08.tsx
┃ ┃ ┗ 📂visit
┃ ┃ ┃ ┣ 📜Visit01.tsx
┃ ┃ ┃ ┗ 📜Visit02.tsx
┃ ┣ 📂styleguide
┃ ┃ ┣ 📜StyleGuide.tsx
┃ ┃ ┣ 📜StyleGuide_Color.tsx
┃ ┃ ┣ 📜StyleGuide_Layout.tsx
┃ ┃ ┣ 📜StyleGuide_Shape.tsx
┃ ┃ ┣ 📜StyleGuide_SystemIcon.tsx
┃ ┃ ┗ 📜StyleGuide_Typography.tsx
┃ ┗ 📜Home.tsx
┣ 📂resource
┃ ┣ 📂img
┃ ┃ ┣ 📂guideline
┃ ┃ ┣ 📂home
┃ ┃ ┗ 📂outline
┃ ┗ 📂variable
┣ 📜App.tsx
┣ 📜index.tsx
┗ 📜Wrap.tsx
