"use strict";
// type annotation => 개발자가 타입을 타입스크립트에게 직접 말해주는 것
const rate01 = 5;
// type inference => 타입스크립트가 알아서 타입을 추론하는 것
const rate02 = 5;
// 타입을 추론하지 못해서 타입 annotation을 꼭 해줘야하는 경우
// - any 타입을 리턴하는 경우
// - 변수 선언을 먼저하고 나중에 초기화하는 경우
let greeting; // type: any
greeting = "hello";
// - 변수에 대입될 값이 일정치 못하는 경우
