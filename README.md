# SKR Front-end Boilerplate

## chart.js 수정

-   components/pages/dashboard 에 있는 chart 사용 컴포넌트 수정하기

## @mui - breakpoint

-   xs, extra-small: 0px
-   sm, small: 600px
-   md, medium: 900px
-   lg, large: 1200px
-   xl, extra-large: 1536px

## Specification

-   JS: typescript + Redux(toolkit) + MUI
-   CI: vite(rollup)
-   DS: storybook(typescript), MDX or TSX, webpack5

## Enviroment Variables

> https://velog.io/@katanazero86/Typescript-%EC%97%90%EC%84%9C-import.meta-%EC%82%AC%EC%9A%A9%EB%B2%95

```sh
# .env.production

MY_ENV=skrentacar
```

```ts
const myEnv = import.meta.env.MY_ENV

console.log(myEnv)
// => 'skrentacar'
```
