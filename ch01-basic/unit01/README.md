# ch01 start

이번 장에서는 기본 리액트 설치법을 다룬다.
간단하게 package.json의 내용을 살펴 보고 넘어가자.

- CRA를 활용한 리액트프로젝트
- package.json 모듈명세 기입하고 설치하기
- babel-loader 버전 충돌 해결 : 환경변수 만들기 .env
- vscode 플러그인 설치하기

## package.json

라이브러리(모듈,패키지) 명세를 기입하고 한번에 설치할 수 있다.

## babel-loader 충돌해결

CRA로 설치한뒤 package.json을 수정하여 나머지 모듈을 설치하려 한다.(이전 프로젝트 devDependencies, dependencies 복붙)
CRA에 이미 babel-loader가 설치되어 있기 때문에 새로 작성한 package.json의 내용의 babel-loader 버전이 충돌할 경우가 있다.
이럴때는 프로젝트 루트에 npm 환경변수 파일을 만들어 설정을 수정한다.

### 환경변수 파일 만들기 `.env`

프로젝트 루트에 `.env`를 만들고 `SKIP_PREFLIGHT_CHECK=true`

## vscode plugin

### reactjs code snippets

자주쓰는 리액트 코드 단축키로 자동완성

### prettier

코드 스타일 자동변환, 코드 포메터

```js
// vscode setting.json  prettier 설정
{
  "useTabs":false, // 탭 사용안함
  "printWidth":100, // 코드페이지 최대폭 100자
  "tabWidth" : 2, // 간격 너비 2칸
  "trailingComma":"all", // 나열 마지막에 ,(콤마) 자동기입
  "semi":true, // 실행문 마지막에 ;(세미콜론) 자동기입
  "singleQuote":true // (") 말고 (') 사용
}
```
