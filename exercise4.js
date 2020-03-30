document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelector("#execute").addEventListener("click", (e)=>{
    let body = document.getElementById("page");
    let paragraph = document.getElementById("psalm");
    let width = document.getElementById("widthVal").value;
    let redBo = document.getElementById("redBo").value;
    let greenBo = document.getElementById("greenBo").value;
    let blueBo = document.getElementById("blueBo").value;
    let redBa = document.getElementById("redBa").value;
    let greenBa = document.getElementById("greenBa").value;
    let blueBa = document.getElementById("blueBa").value;

    paragraph.style.cssText = "border: solid " + width + "px rgb(" + redBo + "," + greenBo + "," + blueBo + ");";
    body.style.cssText = "background-color: rgb(" + redBa + "," + greenBa + "," + blueBa + ");";
    //"border: solid " + width + "px rgb(" + redBo + "," + greenBo + ")";
  })
})
