function changeColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgcolor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgcolor;
    document.getElementById("rgb").innerHTML = bgcolor;
  }
  changeColor();

  // copy the code
    document.querySelector("#copyBtn").addEventListener("click",()=>{
      let content = document.getElementById("rgb");
      let cb = navigator.clipboard;
      cb.writeText(content.innerText);
      // let cpyTxtTime=;
      let cpyTxt=document.getElementById("copyBtn");
      cpyTxt.innerHTML="copied";
      setTimeout(() => {
        cpyTxt.innerHTML="copy";
      }, 2000);
      
    });