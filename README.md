"# nodejs-basic" 

## 노드란 무엇인가
1. 노드는 런타임이다. 
    - 컴퓨터가 실행되는 동안 프로세스나 프로그램들을 위한 소프트 웨어 가상머신.
    - 자바 스크립트를 웹 외부에서 사용할 수 있도록 하는 프로그램.

## REPL
1. REPL 이란 무엇인가?
    - Read, Evalute, Print, Loop
    var a = 1;
    1-1) 입력값을 읽기 (var a = 1)
    1-2) 입력값 평가 (a 에 1을 대입하는구나)
    1-3) 출력 ( 대입은 undefined)
    1-4) 반복 ( 입력 대기)

## 호출 스택과 이벤트 루프
1. REPL 이란 무엇인가?
    - Read, Evalute, Print, Loop
    var a = 1;
    1-1) 입력값을 읽기 (var a = 1)
    1-2) 입력값 평가 (a 에 1을 대입하는구나)
    1-3) 출력 ( 대입은 undefined)
    1-4) 반복 ( 입력 대기)

## 이벤트기반, 싱글쓰레드, 논블러킹IO
1. REPL 이란 무엇인가?
    - Read, Evalute, Print, Loop
    var a = 1;
    1-1) 입력값을 읽기 (var a = 1)
    1-2) 입력값 평가 (a 에 1을 대입하는구나)
    1-3) 출력 ( 대입은 undefined)
    1-4) 반복 ( 입력 대기)

## ES2015
1. Promise (결과를 가지고 있지만 밖에 표현을 안해주는 것. 원하는 위치에서 결과를 뺄 수 있다.)
    - Promise.all([p1,p2,p3])
<pre>
<code>
//콜백 헬... 
User.findOne("user", (err, user)=>{
    if(err){
        return console.error(err);
    }
console.log(user);
    User.update("user",(err, updateUser) => {
        
    });
});

User.findOne("user")
.then(user)
.catch(e){
    console.error(e);
}
// 프로미스 만들어 보기

const plus = new Promise((res, reject) =>{
    const a = 1;
    const b = 2;
    if( a + b > 3){
        res(a+b);
    }else{
        reject(a+b);
    }
})

plus
.then(res => {
    console.log(res)
})
.catch(error => {
    console.error(error)
})

</code>
</pre>
2. 