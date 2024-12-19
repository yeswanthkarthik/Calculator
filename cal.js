let n=document.getElementsByTagName("button");
let n1=document.getElementById("bi1");
for(let i=0;i<n.length;i++)
{
    n[i].onclick=function(){
        let h=this.innerText;
        if(n1.innerText=="0" && h!=("C") && h!="=")
        {
            n1.innerText="";
            n1.innerText=h;
        }
        else if(h=="C")
        {
            n1.innerText="0";
        }
        else if(n1.innerText!="0" && h!="C" && h!="=")
        {
            n1.innerText+=h;
        }
        else if(h=="=")
        {
            n1.innerText=eval(n1.innerText);
        }
    }
}