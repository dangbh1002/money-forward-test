
# Money Forward Test
> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<p align="center">
  <img alt="Preview 2" src="https://raw.githubusercontent.com/dangbh1002/money-forward-test/master/public/preview2.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Preview 3" src="https://raw.githubusercontent.com/dangbh1002/money-forward-test/master/public/preview3.png" width="45%">
</p>

![Preview Image](https://raw.githubusercontent.com/dangbh1002/money-forward-test/master/public/preview.png)

## 1. Requirements

App requires [Node.js](https://nodejs.org/), [yarn](https://classic.yarnpkg.com/en/docs/getting-started) and [firebase hosting](https://firebase.google.com/docs/hosting) to run. Make sure requirements are met:

| Software      | Minimum version |
| ------------- | --------------- |
| Node.js       | 12.x            |
| npm           | 6.x             |
| yarn          | 1.22.x          |
| firebase      | 9.x             |


```
sudo npm i -g yarn
sudo npm i -g firebase-tools
```


## 2. Development

First, run the development server:

```bash
yarn
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the hot-reload result.

## 3. Test

```bash
yarn cypress
```
Choose test files `users_search.spec.js`, `accounts_search.spec.js` with Cypress popup to see the test result.

## 4. Deploy

```bash
sudo npm i -g firebase-tools
firebase login
firebase init
firebase deploy
```

Open [https://money-forward-test.web.app/](https://money-forward-test.web.app/) with your browser to see the live result.


## Support the Project

<a href="https://www.buymeacoffee.com/briandhang" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

© 2021 Created by Bui Hai Dang. Powered by coffee, anime, React and love.
