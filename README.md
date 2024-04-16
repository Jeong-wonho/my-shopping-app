# Node Shopping App

## 프로젝트 소개
첫 nodejs 프로젝트 입니다. shopping몰을 구현하며 간단한 crud와 sequelize를 활용한 몽고 db활용, 결제, 이메일 서드파티 라이브러리를 사용했습니다.
<img width="700" alt="스크린샷 2024-04-16 오후 2 45 45" src="https://github.com/Jeong-wonho/my-shopping-app/assets/67899479/d816a577-f721-4faf-ad15-3411e2888739">

## 개발환경
* visual studio code
* node version 18.15
* mongo db compass
* github
  
## 실행방법
```
npm install
```
```
npm start
```
> dotenv 사용으로 MAIL_API, DB_URI 입력이 필요합니다. MailAPI 는 brevo API 에서 email API를 발급 받아서 사용했습니다. [brevo api](https://www.brevo.com/) DB_URL은 mongoDB Atlas의 무료 저장소를 사용했습니다.

## 기술 스택
* node express
* mongoose
* mongoDB
* bcrypt
* brevo email api
* express validator
  
## 주요기능
* CRUD
* MongoDB
* 이메일 서드파티 라이브러리 사용
* 유효성 검사
* 파일 업로드 , 파일 다운로드
* 페이지네이션


