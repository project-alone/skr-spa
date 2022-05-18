# SKR Front-end Boilerplate

## Specification

-   Enviroment: Node.js(v14 or Higher)
-   Base: `Typescript` + `redux-toolkit` + `MUI`
-   Build: `vite`(rollup)
-   Design System: Storybook(with typescript), MDX(Markdown with JSX) or TSX, Storybook-builder: webpack5(Migration: https://github.com/storybookjs/builder-vite)

## Install VSCode Extsions

> VDI상에서 VSCode Marketplace 이용 가능

1. 좌측 하단 > 설정(톱니바퀴 모양 > Command Pallete... Click, 또는 `Ctrl` + `Shift` + `P` 또는 한글 버전으로 변경한 경우(좌측하단 > 설정 > 명령 팔레트, Click)
2. Install from VSIX 검색 > Click(or Enter)
3. 원하는 vsix 파일(확장 프로그램 설치 파일, \*.visx) 선택

> 프로젝트 내 extension 설치파일 경로(`/.vscode/extensions`)

## git(github)

### git 개행문자 오류 해결

각자의 환경에 맞는 설정 필요

```sh
# window
git config --global core.autocrlf true

# Mac os
git config --global core.autocrlf input
```

### github enterprise token(Persnal Access Token) 발급

1. VDI 내 [GithibEnterprise] 접속 접속
2. 우상단 아바타 클릭 > `Settings` > `Developer settings` > `Persnal access token`
3. 페이지 내 우상단 `Generate new token` 클릭 후 token 생성
4. token은 최초 발급 이후 재확인이 불가하므로 메모장 같은 곳에 저장해 놓고 사용하시기 바랍니다.

### git config

```sh
git config user.name={github에서 사용할 개발자의 별칭}  # commit 메세지에 표시되기 때문에 식별가능한 닉네임을 사용해야 합니다.
git config user.password={발급 받은 token}
```

## npm, yarn 설정

```sh
# npm
npm config set strict-ssl false

# yarn
yarn config set "strict-ssl" false
```

## vite.config.ts

```sh
[vite] http proxy error: Error: self signed certificate in certificate chain
```

위와 같은 오류가 발생시 아래와 같은 설정이 필요합니다.

```ts
export default defineConfig(({ mode, command }) => {
    server: {
			...
			// 프록시 인스턴스 사용
			proxy: {
				// FIXME: CRUD Test
				'/user': {
					target: env.VITE_TEST_API_URL,
					secure: false,      // <-- secure 설정을 false로 합니다.
					changeOrigin: true,
				},
			},
```

## Enviroment Variables

> reference: https://velog.io/@katanazero86/Typescript-%EC%97%90%EC%84%9C-import.meta-%EC%82%AC%EC%9A%A9%EB%B2%95  
> node 환경변수를 사용 할 경우 `process.env`를 직접적으로 사용할 수 없고 `import.meta.env`를 사용해야 합니다.

```sh
# ./config/env/.env.production

MY_ENV=skrentacar
```

```ts
// ./src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
	MY_ENV: string // <-- 추가
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
```

```ts
// annonymous files
const myEnv = import.meta.env.MY_ENV

console.log(myEnv) // 'skrentacar'
```

## Storybook(추후 builder Migration 필요)

> reference: https://github.com/storybookjs/builder-vite
> 현재 storybook 빌드 도구가 webpack5로 지정되어 있지만 추후 vite(rollup)을 지원할 것이기 때문에 추후에 안정화 버전 출시에 맞춰 migration이 필요합니다.
> 따라서 위 참고 사이트에 설명대로 추후 변경해야 합니다.

## TODO

-   ~~[x] Window, Mac 개행문자 오류 (git, autocrlf)~~
-   [ ] 퍼블리싱 공통 ts파일 변환()
-   [ ] TS파일 변환 가이드(?)
-   [ ] router 연동된 Tab Navigation(MDI) 구현
-   [ ] modal 사용성 개선
-   [ ] Error 페이지 개발(400번대: client, 500: server)
-   [ ] Page component 작성 가이드

## 퍼블리싱 반영 시 주의 사항

-   [ ] datepicker, timepicker (기능정의 파악, input, format)
-   [ ] components/Title.js 수정예정(toggle 기능 추가)
-   [ ] form 에서 select 리스트의 넓이(width), 위치가 맞지 않음
-   [x] select에서 나는 에러 [0, 1] 수정 필요
-   [ ] 이벤트 핸들러 가이드 작성 필요
-   [x] 공통 css 삽입 방법 수정(createglobalstyle)
-   [ ] 타임피커 문제(외부라이브러리와 MUI가 연동이 가능한지? 검토 필요)
-   [ ] ~~디자인 반영은 바로바로~~

## 주의사항

경로 설정

1. [componentName]/index.tsx
2. 용도가 다른 컴포넌트 그룹(???)
3.

[githibenterprise]: https://skr-sharedgithub.koreacentral.cloudapp.azure.com

component

1. @mui/material 컴포넌트를 직접적으로 제공하지 않기
    - page: [route-endpoint]Page(children 없이)
    - parts: Button, Form, DataGrid, DataGrid의 parts
    -
