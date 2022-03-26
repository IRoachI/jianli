let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/*你好，我叫小曾
 *接下来我来演示一下我的前端功底
 *首先我先准备一个div
 */
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把div变成一个八卦图
 *首先把div变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的，一黑一白*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*加两个神秘的小球*/
#div1::before{
    width:100px;
    height:100px;
    left:50%;
    top:0;
    transform:translateX(-50%);
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
    border-radius:50%;
}
#div1::after{
    width:100px;
    height:100px;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
    border-radius:50%;
}
`;
let string2 = '';
let n = -1;
//string=string.replace(/\n/g,"<br>");    正则表达式
let step = ()=>{
    setTimeout(()=>{
        n++;
        if (string[n] === '\n') string2 = string2 + '<br>'; //demo.innerHTML=string.substring(0,n);   //substring
        else if (string[n] === ' ') string2 = string2 + '&nbsp;';
        else string2 = string2 + string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        if (n < string.length - 1) step();
    }, 100);
};
step();

//# sourceMappingURL=index.c6c5d4a1.js.map
