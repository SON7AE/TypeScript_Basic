// 타입스크립트에서 타입이란?
// 어떤 Value가 가지고 있는 프로퍼티나 함수를 추론할 수 있는 방법이다.
// 예) "apple" => string 문자열 / 이것은 value인데 문자열이 가지는 프로퍼티, 메소드를 가지고 있는 value이다.
// 타입스크립트는 자바스크립트에서 기본으로 제공하는 기본 제공 유형(built-in types)을 상속한다.
// 1. 원시타입
// - string: 문자열을 나타낸다.
// - number: 숫자 값을 나타낸다.
// - boolean: true와 false 값을 가지고 있다.
// - null: 하나의 값을 가진다. null
// - undefined: 하나의 값을 가진다. undefined. 초기화 되지 않은 변수의 기본값이다.
// - symbol: 고유한 상수 값을 나타낸다.
// 2. Object 타입
// - function: 함수를 나타낸다.
// - array: 배열을 나타낸다.
// - classes: 클래스를 나타낸다.
// - 0bjects: 객체를 나타낸다.
// 3. 타입스크립트에 추가된 타입
// 3-1 any
// 애플리케이션을 만들 때, 잘 알지 못하는 타입을 표현해야 할 수가 있다.
// 이 값들은 사용자로부터 받은 데이터나 서드파티 라이브러리 같은 동적인 컨텐츠에서 올 수도 있다.
// 이 경우 타입 검사를 하지 않고, 그 값들이 컴파일 시간에 검사를 통과하길 원한다. 이를 위해, any 타입을 사용할 수 있다.
// 하지만 이 타입을 최대한 사용하지 않는 것이 좋다. 타입스크립트를 사용하는 이유가 정확한 타입을 지정해주기 위해서인데
// any 타입을 사용해버리면, 타입스크립트를 사용하는 이유가 무색해진다.
// 3-2 Union
// 타입스크립트를 사용하면 변수 또는 함수 매개변수에 대해 둘 이상의 데이터 유형을 사용할 수 있다.
// 이것을 유니온 타입이라 한다.
let code;
code = 123; // Okay
code = "ABC"; // Okay
// code = false // Compiler Error
// 3-3 Enum
// enum은 enumerated type(열거형)의 약자이며, 이를 의미한다.
// enum은 값들의 집합을 명명하고 이를 사용하도록 한다.
// 예를 들어, PrintMedia라 불리는 집합을 기억하기 어려운 숫자 대신 친숙한 이름으로 사용하기 위해
// enum을 사용할 수 있다. 열거된 각 PrintMedia는 별도의 값이 설정되지 않은 경우 기본적으로 0부터 시작한다.
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
let mediaType = PrintMedia.Book; // => 3
// 아래 코드에서 Test 변수에 할당된 값은 56이다.
// 설정된 Test 열거형 데이터의 Book의 값이 56이기 때문이다.
var Test;
(function (Test) {
    Test[Test["Newspaper"] = 1] = "Newspaper";
    Test[Test["Newsletter"] = 50] = "Newsletter";
    Test[Test["Magazine"] = 55] = "Magazine";
    Test[Test["Book"] = 56] = "Book";
})(Test || (Test = {}));
let test = PrintMedia.Book; // => 56
// enum 타입의 편리한 기능으로 숫자 값을 통해 enum 값의 멤버 이름을 도출할 수 있다.
let type = PrintMedia[55]; // => Magazine
// 또한, 어떠한 언어 코드를 정의하는 코드를 작성할 때, 언어의 집합을 만들 때도 enum을 사용할 수 있다.
export var LanguageCode;
(function (LanguageCode) {
    LanguageCode["korean"] = "ko";
    LanguageCode["english"] = "en";
    LanguageCode["japanese"] = "ja";
    LanguageCode["chinese"] = "ch";
    LanguageCode["spanish"] = "es";
})(LanguageCode || (LanguageCode = {}));
const languageCode = LanguageCode.english;
// 이렇게 enum을 이용해서 언어 집합을 만들어주면 어떠한 코드가 어떠한 나라의 언어 코드가 무엇인지 알지 못해도
// 쉽게 코드를 작성해줄 수 있고 코드를 읽는 사람 입장에서도 가독성이 높아지게 된다.
// enum과 객체의 차이점
// 객체는 코드 내에서 새로운 속성을 자유롭게 추가할 수 있지만, enum은 선언할 때 이후에 변경할 수 없다.
// 객체의 속성 값은 JS가 허용하는 모든 타입이 올 수 있지만, enum의 속성 값으로는 문자열 혹은 숫자만 허용된다.
// 3-4 Void
// 타입이 없는 상태이며, any와 반대 의미를 가진다.
// 주로 함수의 리턴이 없을 때, 사용해주면 된다.
// 3-5 Never
// 절대 발생하지 않을 값을 나타내는 새 Type never를 도입했다.
// Never 유형은 어떤 일이 절대 일어나지 않을 것이라고 확신할 때 사용된다.
// 일반적으로 함수의 리턴 타입으로 사용된다.
// 함수의 리턴 타입으로 never가 사용될 경우, 항상 오류를 리턴하거나 리턴 값을 절대로 내보내지 않음을 의미한다.
// 이는 무한루프에 빠지는 것과 같다.
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function keepProcessing() {
    while (true) {
        console.log("I always do something and never ends");
    }
}
// void와 never 타입의 차이점
// void는 null과 undefined의 값을 가질 수 있다.
// never는 어떠한 값도 가질 수 없다.
