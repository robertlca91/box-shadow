// box dimension inputs
const colorbox=document.querySelector("#color");
const borderRadius=document.querySelector("#border-radius");
const height=document.querySelector("#height");
const width=document.querySelector("#width");

// shadow properties
const horizontal=document.querySelector("#horizontal");
const vertical=document.querySelector("#vertical");
const blur=document.querySelector("#blur"); 
const spread=document.querySelector("#spread");
const shadowColor=document.querySelector("#shadow-color");
// seleccionamos los inputs que modifican la sombra shadow
const inputsShadow=document.querySelectorAll(".input-shadow");
const output=document.querySelector(".output");
//aquare
const square=document.querySelector(".square");


width.addEventListener("input", (e)=>{
const value=e.target.value;
square.style.width=`${value}px`;
});
height.addEventListener("input", (e)=>{
  const value=e.target.value;
  square.style.height=`${value}px`;
  });
borderRadius.addEventListener("input", (e)=>{
  const value=e.target.value;
  square.style.borderRadius=`${value}px`;
  });
colorbox.addEventListener("input", (e)=>{
  const value=e.target.value;
  square.style.backgroundColor=value;
    });

inputsShadow.forEach (function(input){ return input.addEventListener("input",generateShadow);
});

function generateShadow(){
  const horizontalvalue=horizontal.value;
  const verticalvalue=vertical.value;
  const blurvalue=blur.value;
  const spreadvalue=spread.value;
  const colorvalue=shadowColor.value;

  square.style.boxShadow=`${horizontalvalue}px ${verticalvalue}px ${blurvalue}px ${spreadvalue}px ${colorvalue}`;

  output.innerHTML=`<p><strong>box-shadow:${horizontalvalue}px ${verticalvalue}px ${blurvalue}px ${spreadvalue}px ${colorvalue}</strong></p>`

}
