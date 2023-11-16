// 1. Boolean
let boolean: boolean
let falseBoolean: boolean = false

// 2. Number
let number: number
let integer: number = 6
let float: number = 1.2345

// 3. String
let string: string
let firstName: string = "Marco"

// 4. Array
// 한 가지 타입만 가지는 배열
let names1: string[] = ["John", "Kim"]
let names2: Array<string> = ["John", "Kim"]

// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ["John", 1, 2]
let array2: Array<string | number> = ["John", 1, 2]

// 여러 타입을 단언할 수 없을 때
let someArray: any[] = ["John", 1, [], {}, false]

// 읽기 전용 배열 생성(readOnly, ReadonlyArray)
let stringArray: readonly string[] = ["A", "B"]
let numberArray: ReadonlyArray<number> = [1, 3, 2]

// 5. Tuple
let tuple1: [string, number]
tuple1 = ["a", 1]
// tuple1 = ["a", 1, 2] => 에러

let users: [number, string][]
users = [
    [1, "1"],
    [2, "2"],
]

// tuple이라고 하더라도 실제로 push 메소드를 이용해서 값을 넣는 것은 허용이 된다고 알아두면 된다.
let tuple2: [string, number]
tuple2 = ["A", 1]
tuple2.push(2)
console.log(tuple2) // ["A", 1, 2]

// 6. any
let any: any = "abc"
any = 1
any = []

// 7. unknown: 다른 변수의 값으로 할당할 수가 없다.
let unknown: unknown = "unknown"

// 8. object
let obj: object = {}
let arr: object = []
// let nul: object = null
let date: object = new Date()

const obj1: { id: number; title: string; description: string } = {
    id: 1,
    title: "title",
    description: "description",
}

// function
let func1: (arg1: number, arg2: number) => number
func1 = function (x, y) {
    return x * y
}

let func2: () => void
func2 = function () {
    console.log("Hi")
}
