## TRIPLE_ASSIGNMENT

지원자 : 권은서

### ✈️ 프로젝트 실행 방법

```
프로젝트 클론 받기
$ git clone https://github.com/lisarnjs/triple-assignment.git

디펜던시 설치하기
$ npm install

프로젝트 실행하기
$ npm start
```

### 🛠️ 사용한 기술

- React
- TypeScript
  - 컴파일 단계에서 오류를 확인하고 코드의 안전성을 위해 사용하였습니다.
- styled-components
  - 해당 과제는 인터렉션이 크게 필요하지 않고, props를 사용하기 위해 선택하였습니다.
  - 유지보수가 쉽고, 가독성을 위해 코드의 길이가 너무 길어지지 않도록 JS와 CSS를 분리하였습니다.

### 🗂️ 폴더 구조

- assets
  - images : 이미지 파일 모음
- components
  - features : page를 구성하는 컴포넌트
  - shared : 공유되는 공통 컴포넌트 예) header, footer, nav...
- hooks : 커스텀 훅
- pages : 컴포넌트로 이루어진 페이지들
- styles
  - GlobalStyle : reset css
  - variable.css : 변수로 저장해둔 컬러 팔레트
- types : 타입 모음
