let btn = document.querySelector("#btn");
    let mode = "lightmode";

btn.addEventListener ("click" ,() => {
    if(mode  === "lightmode"){
    mode = "darkmode"; 
   document.querySelector("body").style.backgroundColor ="black";
    }else{
      mode = "lightmode";
      document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(mode);
});
 