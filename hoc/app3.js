const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  if(h1.className = "active") {
    h1.className = "";
  } else {
    h1.className = "active";
  }
}
document.addEventListener("click" , function(){
  h1.innerText = "hihihih";
});
document.addEventListener("click", handleTitleClick);