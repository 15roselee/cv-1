let html=document.querySelector("#html")
let style=document.querySelector("#style");
let string=`
/*白梦冰是我大哥
*虽然他是一个傻蛋
*但是我依然不会抛弃他！
*接下来我演示一下我的前端功底
*首先我要准备一个div
**/
#div1{
    border: 1px solid blue;
            width: 200px;
            height: 200px;          
} 
/*接下来我把div变成一个八卦图
*一黑一白
**/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border: none;
    background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球
**/
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    transform:translateX(-50%);
    border-radius: 50%;
    background: rgb(255, 255, 255);
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 20%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 100%);
}
#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    right: 0;
    transform:translateX(-50%);
    border-radius: 50%;
    background: rgb(0, 0, 0);
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 20%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 100%);
}
`

// string=string.replace(/\n/g,"<br>");
let n=0;

let string2=''
// demo.innerHTML=n;
// 1 把要做的事封装成函数
let step=()=>{
    // console.log(n)
    setTimeout(() => {        
        //如果是回车就加上回车,如果不是就照搬
        if (string[n]=='\n') {
            string2+="<br>"
        }else if (string[n]==' ') {
            string2+='&nbsp'
        } else {
            string2+=string[n] 
        }
        console.log(n)
        html.innerHTML=string2   
        style.innerHTML=string.substring(0,n)
        window.scrollTo(0,document.body.scrollHeight)
        html.scrollTo(0,99999)
        if (n+1<string.length) { 
            // 如果n不是最后一个值就继续

           
            n+=1;                     
            step()           
        } 
    }, 30);         
}
step();

 
style.innerHTML=`
body{
    color:red;
}
`

