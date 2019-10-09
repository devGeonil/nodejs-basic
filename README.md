"# nodejs-basic" 

## 노드란 무엇인가
1. 노드는 런타임이다. 
    - 컴퓨터가 실행되는 동안 프로세스나 프로그램들을 위한 소프트 웨어 가상머신.
    - 자바 스크립트를 웹 외부에서 사용할 수 있도록 하는 프로그램.

## REPL
1. REPL 이란 무엇인가?
    - Read, Evalute, Print, Loop<br/>
    var a = 1;<br/>
    1-1) 입력값을 읽기 (var a = 1)<br/>
    1-2) 입력값 평가 (a 에 1을 대입하는구나)<br/>
    1-3) 출력 ( 대입은 undefined)<br/>
    1-4) 반복 ( 입력 대기)

## 호출 스택과 이벤트 루프
<pre>
<code>
자바스크립트 실행순서

function first(){
    second();
    console.log(1);
}
function second(){
    third();
    console.log(2);
}
function third(){
    console.log(3)
}
first() 실행 - // 3, 2, 1


-------------------                               태스크 큐 (FIFO))       
|                  |                     3s.    ex) 이벤트 루프가 3s 체크   
|                  |          setTimeout(x)     |================
| console.log(3)   | ===== [ 이벤트 루프 ]======|  run[3s]
| 실행 : third (x) |           순서 체크         |================
| 실행 : second(x) |                            |================          
| 실행 : first (x) |                            |================  
-------------------                             |================
LIFO (호출 스택 / 콜스택 - 함수가 실행되는 순간에 쌓기이 시작)

태스크 큐 (FIFO)) 
setTimeout
setInterval
setImmediate
Promise
async / await
</code>
</pre>


## 이벤트기반, 싱글쓰레드, 논블러킹IO(파일 / 네트워크))
1. 이벤트 리스너를 통한 이벤트 등록 = 태스크 큐에 쌓는다.
2. 태스크 큐로 보내버리는 것 (논블러킹)


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
2. async / await
<pre>
<code>
async () => {
    try{
        const user = await User.findOne("user");
        const updateUser = await User.update(user);
        const removeUser = await User.remove(user);
        console.log("done");
    }catch(e){
        console.log(e)
    }
    
}
</code>
</pre>

## 노드기능
1. 노드 모듈 시스템
<pre>
<code>
exports.odd = "홀수 입니다.";
exports.even = "짝수 입니다.";

/*
const odd = "홀수 입니다.";
const even = "짝수 입니다.";

    module.exports = {
        odd,
        even
    }

*/

const {odd , even} = require("./var");

console.log("index.js 입니다 \n\n");
console.log(odd, even)

</code>
</pre>

2. global 객체
<pre>
<code>
    노드의 전역객체 global / 브라우저의 window 개념
    globala.js
        module.exports = () => global.message
    globalb.js
        const a = require('./globala');
        global.message = "Hello It's globala
        console.log(a());
</code>
</pre>

3. console 객체
<pre>
<code>
    console.time("check");
    console.timeEnd("check");
    console.log("");
    console.error("");
    console.dir({color:false, text:none}). {옵션};
</code>
</pre>

4. 타이머 객체
<pre>
<code>
    setTimeout = clearTimeout
    setInterval = clearInterval
    setImmediate
</code>
</pre>

4. __filename, __dirname, process
<pre>
<code>
    console.log(__dirname);
    console.log(__filename);
    process windwo 프로그램을 만들때 사용.
</code>
</pre>

4. os 모듈
<pre>
<code>
    os.homedir()
    os.totalmem()
    os.cpus()
</code>
</pre>

5. path 모듈
<pre>
<code>
    const path = require('path');
    path.sep(폴더 구분자)
    path.delimiter(세미콜론 / 환경변수 구분자)
    path.dirname(__filename); 디렉토리
    path.extname(__filename); 확장자
    path.basename(__filename); 파일명
    path.parse(__filename); 파일 관련 객체를 리턴.
    path.normalize();
    path.isAbsolute("C:\\") 절대경로 : true / 상대경로 : false
    ***
    path.join() 절대 결로 무시하고 합침 - 현재 위치서 부터
    path.resolve() 절대 경로 고려하고 합침  /user => c/user 가 됨
</code>
                      
5. url 모듈
<pre>
<code>
    const url = new URL("http://www.naver.com/user/1?query=geonil")
    console.dir(url)
</code>
</pre>


### 버버와 스트림
<pre>
<code>
    DATA -----> |  버퍼 | 버퍼 | 버퍼 | |
    버퍼를 꽉! 채우고 전송 
    버퍼를 꽉! 채우고 전송 
    버퍼를 꽉! 채우고 전송 
    버퍼를 꽉! 채우고 전송 STREAM
</code>
</pre>

### 이벤트
<pre>
<code>
    
</code>
</pre>