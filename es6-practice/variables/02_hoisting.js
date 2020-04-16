console.log(helloworld);
var helloworld = "hello world";

// 컴파일 단계에서 var 를 위로 다 올려버려서 컴파일 에러가 나지 않음




print();

print2();

// 함수 표현식. 사용되는 곳 위에 선언되어야 사용 가능
var print = function() {
    console.log("print");
}

// 함수 선언문. 
function print2() {
    console.log("print2");
}