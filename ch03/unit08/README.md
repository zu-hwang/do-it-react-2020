- [가상 - 코인거래 사이트 만들기](#가상---코인거래-사이트-만들기)
  - [1.설계](#1설계)
    - [1) 공용컴포넌트 = UI 구분하기](#1-공용컴포넌트--ui-구분하기)
  - [2. 요구사항 분석](#2-요구사항-분석)
    - [1) 글로벌-네비게이션바 (GNB)](#1-글로벌-네비게이션바-gnb)
    - [2) 본문 상단 : 코인동향](#2-본문-상단--코인동향)
    - [3) 본문 하단 : 거래현황](#3-본문-하단--거래현황)
    - [4) 처리정보](#4-처리정보)
  - [3. 만들기시작](#3-만들기시작)
    - [1) 공용 컴포넌트 제작](#1-공용-컴포넌트-제작)
    - [2) withStyle 하이어오더 컴포넌트 제작](#2-withstyle-하이어오더-컴포넌트-제작)
    - [3) 전체 스타일 파일 작성: reset.css](#3-전체-스타일-파일-작성-resetcss)
    - [4) axios 사용하기](#4-axios-사용하기)
      - [`axios.get(URL, config)`](#axiosgeturl-config)
      - [`axios.create()`](#axioscreate)
    - [4) 페이지네이션 구현하기](#4-페이지네이션-구현하기)
      - [state : `pagenations:{}`](#state--pagenations)
      - [리덕스 액션 : page정보추가](#리덕스-액션--page정보추가)
    - [5) axios 호출작업 모듈화](#5-axios-호출작업-모듈화)
      - [(1) 액션모듈화](#1-액션모듈화)
    - [6) next.js 도입](#6-nextjs-도입)
    - [7) 파이어베이스 x nextjs 서비스 배포](#7-파이어베이스-x-nextjs-서비스-배포)
    - [8) 파이어베이스 DB 연결하기](#8-파이어베이스-db-연결하기)

# 가상 - 코인거래 사이트 만들기

사이트제작 프로세스 한눈에 보기

## 1.설계

화면을 그린 뒤 박스를 그려 컴포넌트 배치를 계획한다

- 전체화면
  - 상단메뉴(GBN)
  - 본문
    - 상단 - 코인동향
    - 하단 - 거래현황
      - 검색창
      - 결과창
  - 처리정보 : fixed

### 1) 공용컴포넌트 = UI 구분하기

- 매도/매수/검색 버튼 : value에 따라 디자인 변화주기

## 2. 요구사항 분석

### 1) 글로벌-네비게이션바 (GNB)

- 홈 : 첫 화면으로 돌아가기
- 회원가입 : 회원가입 모달 띄우기

### 2) 본문 상단 : 코인동향

- 코인 목록보기 : 가상 코인 목록 데이터 받아 리스트로 보여주기
- 구매하기 : 구매하기 버튼 클릭시 구매 모달 띄우기
- 판매하기 : 판매하기 버튼 클릭시 판매 모달 띄우기

### 3) 본문 하단 : 거래현황

- 검색어 입력
- 검색 요청 : 서버에 데이터 요청
- 검색 결과 목록보기 : 응답결과 목록 보여주기

### 4) 처리정보

- 화면 알림 : 서버에서 처리 정보 결과 요청하기
- 처리 결과 표시 : 서버에서 응답받은 메세지 표시하고, 자동 off

## 3. 만들기시작

- stylesheet : styled-components 사용
- react
- redux

### 1) 공용 컴포넌트 제작

- 스타일 전체의 규격 관리를 위한 theme.js 파일생성
  - 색상
  - 크기
  - 단위

### 2) withStyle 하이어오더 컴포넌트 제작

나는 styled-component 쓸거야.. 이거 필요읎다.
~~테마파일 연동을 위해 withStyle 컴포넌트를 제작하여 theme 사용할 컴포넌트에 씌우기~~

### 3) 전체 스타일 파일 작성: reset.css

styled-components : Globalstyle 작성하기

### 4) axios 사용하기

#### `axios.get(URL, config)`

`npm i axios`

```js
import axios from 'axios';

// get
axios
  .get(`${SERVER_URL}/transactions`)
  .then((res) => res.data)
  .catch((error) => console.log(error));

// get+params
// code항목이 'BTX'인 가저온다.
// 배열에 포함하는 것들 전부 가져온다!
axios
  .get(`${SERVER_URL}/transactions`, { params: { code: ['BTX'] } })
  .then((res) => res.data)
  .catch((error) => console.log(error));
```

`axios.get(URL,config)`
**config에 올수 있는 것**

```js
{
  // 기본호스트주소
  baseURL : 'http://domain.com/api'
  // 해더정보 : {다양한 것들! 아래는 예제}
  headers : {'X-Requested-With':'XMLHttpRequest'}
  // 파라미터 정보
  params : { id:1234, name:'test'}
  // 전달되는 데이터의 형태 (기본json)
  responseType:'json'
}
```

#### `axios.create()`

axios에서는 자주사용하는 API 등록해둘수 있도록 `create()`함수를 제공한다.

- api.js 파일 생성
  ```js
  import axios from 'axios';
  const API = axois.create({
    baseURL: 'http://localhost:4000',
  });
  ```
- 서버요청할 곳에서 활용하기
  ```js
  import API from '../util/api'
  ...
  componentDidMount(){
    API // 엔드포인트만 바로 넣어 요청할 수 있다.
      .get('/endpoints',{params:{id, name}})
      .then(res=>res.data)
      .catch(error=>console.log(error))
  }
  ```

### 4) 페이지네이션 구현하기

데이터의 목록을 일정 단위로 구획을 나누어 요청한다.

- 불러들일 목록이 1000개다
- 1페이지에 10개 목록(1-10) 가저오기
- 2페이지에 10개 목록(11-20) 가저오기
- 3페이지에 10개 목록(21-30) 가저오기
- `http://url.com/api?page=1&size=10` :1 페이지 단위 10(1-10)

#### state : `pagenations:{}`

state에 `pagenations:{}`를 추가한다. pagenations는 요청 페이지의 번호와 페이지의 크기 정보를 담는다.

#### 리덕스 액션 : page정보추가

리덕스 액션크리에이터에 페이지 사이즈를 상수로 담는다.

```js
const PAGE_SIZE = 10; // 10개 단위로 가저오기
export const resultTraansactionsList = (params, _page = 1) => {
  return {
    type: FETCH_TRANSACTION_LIST, // fetch_transaction_list일때
    // promise값에 fetch내용을 담는다.
    //prams에 이전 모든 params와, page, limit를 추가한다.
    promise: API.get('/transactions', {
      prams: {
        ...params,
        _page,
        _limit: PAGE_SIZE,
      },
    }),
    meta: {
      pageNumber: _page, // 1
      pageSize: PAGE_SIZE, // 10
      notification: {
        success: '업데이트 완료',
        error: '문제발생',
      },
    },
  };
};
```

### 5) axios 호출작업 모듈화

서버의 새로운 데이터를 (액션/리듀서/셀렉트/리셀렉트)등을 작성없이 axios 호출작업 모듈화를 통해 간단히 해결하즈아!

#### (1) 액션모듈화

```js
// types.js
export const FETCH_LIST = 'api-redux-pack/FETCH_LIST';
export const FETCH = 'api-redux-pack/FETCH';
export const UPDATE = 'api-redux-pack/UPDATE';
export const CREATE = 'api-redux-pack/CREATE';
export const RESET = 'api-redux-pack/RESET';
```

---

```js
// actions.js
import { FETCH_LIST, FETCH, CREATE, UPDATE, RESET } from './types';
import API from '../util/api';

const fetchList = (endpoint, key='id') => {
  return {
    collection : (params= {}, meta= {}) => {
      type: FETCH_LIST,
      promise: API.get(endpoint, {params}),
      meta: {
        ...meta,
        key,
        endpoint
        }
      },
    member : (id,params={},meta={})=>({
      type:FETCH,
      promise : API.get(`${endpoint}/${id}`, {params}),
      meta:{
        ...meta,
        key,
        endpoint
      }
    }),
    create : (data, prams={},meta={})=>({
      type:CREATE,
      promise:API.post(endpoint,data,{params}),
      meta:{
        ...meta,
        key,
        endpoint
      }
    }),
    update : (id,data,params={},meta={})=>({
      type:UPDATE,
      promise:API.put(`${endpoint}/${id}`, data, {params}),
      meta:{...meta,key,endpoint}
    }),
    reset : ()=>({
      type:RESET,
      meta:{endpoint}
    }),
  },
}
export default fetchList
```

- 메타 항목에 추가된 endpoint, key는 리듀서에서 참조할 예정!

---

### 6) next.js 도입

SEO를 위해 SSR을 도입하자

- next.js 설치 : `npm i next`
- script명령어 추가 : `dev : next`
- next 출력화면 만들기 : `_document.js`

  ```js
  import React from 'react';
  import Document, { Html, Main, Head, NextScript } from 'next/document';
  import { StyleSheetServer } from 'aphrodite';

  class MyDocument extends Document {
    static async getInitialProps({ renderPage }) {
      const { html, css } = StyleSheetServer.renderStatic(() => renderPage());
      const { renderedClassNames: ids } = css;
      return { ...html, css, ids };
    }
    constructor(props) {
      super(props);
      const { __NEXT_DATA__, ids } = props;
      if (ids) {
        __NEXT_DATA__.ids = this.props.ids
      }
    }
    render(){
      return (
        <Html>
        <Head>
        <!-- 아프로디테 스타일 시트 적용 : 시작 -->
        <style>{`
        body{
          ... reset.css 내용
        }`}
        <style
          data-aphrodite
          dangerouslySetInnerHtml={{__html:this.props.css.content}}
          />
        <!-- 아프로디테 스타일 시트 적용 : 끝 -->
        </Head>
        <body>
        <!-- Main에는 Components들이 들어간다 -->
        <Main />
        <!-- NextScript에는 스크립트가 들어간다 -->
        <NextScript />
        </body>
        </Html>
      )
    }
  }
  export default MyDocument
  ```

  - 아프로디테의 SSR기능을 통해 서버 출력에 필요한 스타일 코드를 생성
  - 아프로디테의 `renderPage()`함수로 생성된 스타일 코드를 문서에 추가
  - `getInitialProps()`는 서버측에서 최초 1회만 실행된다. 여러컴포넌트에서 실행 할 수 없다. 여러번 써도 최초 실행되는 첫 코드만 실행, 이후 `getInitialProps`는 무시된다. 주의!

- next `_App.js` : nextjs가 처음 출력할 컴포넌트 초기세팅

  ```js
  import React from'react'
  import App,{Container} from 'next/app'
  // 각종 프로바이더,라우터,스타일테마,등등 첫 CSR의 App.js와 같이  import & 구성한다.
  import 라우트, 프로바이터, 스타일테마, 컴포넌트들 from '';
  // 라우트의 경우 SSR라우트, CSR라우트 2종을 import 한다
  import {StaticRouter} from 'react-router'
  import {BrowserRouter} from 'react-router-dom'

  // 현재 구동된 곳에 window 객체가
  // 있다면 isServer = false
  // 없다면 isServer = true
  // window 객체는 브라우저DOM! 즉 클라이언트 사이드란말!

  const isServer = typeof window ==='undefined';

  class MyApp extends App {
  // 1. 리덕스 스토어 가저오기
    store = createStore(...);
    render(){
      const {Component, router, pageProps}= this.props
      // 서버에서 구동할 경우 StaticRouter를 사용하고,
      // 브라우저에서 구동할경우 CSR-BrowserRouter로 이동!
      const Router = isServer ? StaticRouter : BrowserRouter;
      const routerProps = isServer ? {location:router.asPath} : {};

      return(
        <Container>
          <Provider store={store}>
            <Router {...routerProps}>
              <ModalProvider>
                <AppLayout>
                 <Component {...pageProps}>
                 <NotificationCompo / >
                </AppLayout>
              </ModalProvider>
            </Router>
          </Provider>
        </Container>
      )
    }
  }
  ```

- IndexDocument 컴포넌트 : /pages/index.js 와 같이 pages폴더에 index.js 파일을 만들어 서버용 next라우터를 구성하자!

### 7) 파이어베이스 x nextjs 서비스 배포

배포할 프로젝트 폴더에 패키지 설치 , 파이어베이스 설치, 파이어베이스 설정 하기

- 파이어베이스에서 **functions라는 노드호스팅 서비스**를 사용한다.
  - (1) `firebase init` 을 통해 프로젝트에 **functions** 기능 추가
  - (2) 파이어베이스 호스팅 설정
    - 질문1 : 자바스크립트써? 타입스크립트써? **사용한거 선택**
    - 질문2 : eslint로 에러 출력할래 ? **NO**!(배포에선 안해)
    - 질문3 : 의존성패키지 설치할텨? **YES**!
    - 질문4 : 너 공용폴더 뭐쓸래 ? **public**(공용폴더주소를 build에서 public으로 변경하기!)
    - 질문5 : SPA로 구성.index.html에 모든 url 다시 쓸래? **No**
    - 질문6 : 파일 public/index.html 이미 있음. 덮어쓸래? **No**
- 파이어베이스 `./functions` 폴더에 필요한 도구 설치 `yarn upgrade firebase-admin firebase-functions`
- `./functions/package.json` 에 `engines` 추가
  ```js
  "engines":{"node":"8"},
  ```
- nextjs프로젝트에 functions서비스 설치 :**버전 경고 무시 옵션 `--ignore-engines` 꼭 입력**
  `yarn add next react react-dom axios aphrodite redux react-redux react-with-Styles recompose redux-pack redux-thunk reselect selector-action react-with-styles-interface-aphrodite react-router redux-devtools-extension --ignore-engines`
- `./functions/package.json`에 **SSR빌드** 스크립트 추가:`"ssrbuild":"next build"`
- 서버 배포 코드 설정 : SSR빌드후 생성된 정적파일을 functions/next폴더에 저장하도록 next.config.js 설정파일을 작성하자
  ```js
  // 프로젝트 루트에 next.config.js 생성
  module.exports = {
    distDir: './functions/next',
  };
  ```
- 빌드하기 : `yarn ssrbuild`
- next.js에 **파이어베이스 functions**구동 코드 추가

  ```js
  const functions = require('firebase-functions');
  const next = require('next');

  var dev = process.env.NODE_ENV !== 'production';
  var app = next({ dev, conf: { distDir: 'next' } });
  var handle = app.getRequestHandler();

  exports.next = functions.https.onRequest((res, req) => {
    return app.prepare().then(() => handle(req, res));
  });
  ```

- 배포하기: 콘솔에 `firebase deploy --only functions`
- `firebase.json`수정하기 : 포함된 주소가 계속 바뀜으로 내용수정하자!
  ```js
  {
    "hosting":{
      // "public":"build"
      "public":"public",
      "rewites":[
        {
          "source":"**",
          // "destination":"/index.html",
          "function":next,
        },
        ],
        "ignore":[
          "firebase.json",
          "**/.*",
          "**/node_modules/**"
        ]
    },
    "functions":{
      "source":"functions"
    }
  }
  ```
- public폴더 안의 html파일 모두 지우기
- 다시 배포하기 : 콘솔에 `firebase deploy`

### 8) 파이어베이스 DB 연결하기

- 파이어베이스 DBtodtjd
- 테스트모드로 설정
- 컬렉션에 필드 입력
- 필드입력
- 색인기능 추가 : 검색필터기능 사용
- functions에 필요한 도구 설치(./functions) `yarn add express body-parser moment --ignore-engines`
- functions에서 동작할 노드서버 코드작성

  ```js
  // /apiserver/index.js
  const functions = require('firebase-functions')
  const admin=require('firebase-admin')
  const express =require('express')
  const bodyParser = require('body-parser')

  admin.initializeApp(functions.config().firebase)
  const db = admin.firestore();
  const app = express()
  const main = express()

  main.use('/api',app);
  main.use(bodyParser.json())
  main.use(bodyParser.urlencoded({extended : false}))

  app.post('/transactions', (req,res)=>{
    const currentPrice = parseInt(req.body.currentPrice.replace(/[^0-9]+/g,''))
    const amount= req.body.amount;
    ...중략
  })
  app.get('/transactions',(req,res)=>{
    ...중략
    collection = collection.orderBy('datetime','desc');
    if(_limit){
      collection = collection.limit(_limit*page);
    }
    collection.get().then(snapshot =>{
      let data=[];
      snapshot.forEach(doc=>{
        const {datetime,...result} = doc.data();
        const formattedDatetime = moment(datetime.toMillis()).format();
        data.push(
          Object.assign(result,{
            id:doc.id,
            datetime:formattedDatetime,
          })
        );
      })
      res.status(200).send(data.slice(_limit * (page -1)))
    })
  })
  moduld.exports = main'
  ```

  ```js
  // ./functions/index.js 수정 > apiserver 추가하기
  const functions = require('firebase-functions')
  ...

  const apiserver = require('./apiserver')

  export.apiserver = functions.https.onRequest(apiserver)
  ```

- 배포하기 `firebase deploy --only functions`
- 데이터 서버 기능 확인 : 서버URL/api/transactions에서 json데이터 확인
- 파이어베이스 호스팅 주소에 functions연결

```json
{
  "hosting": {
    "public": "public",
    "reqrites": [
      {
        "source": "/api/**",
        "function": "apiserver"
      },
      { "source": "**", "functions": "next" }
    ],
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  },
  "functions": {
    "source": "functions"
  }
}
```
