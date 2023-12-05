const title = document.querySelector(".hello h1");

function handleTitleClick(){
  title.innerText = "change";
}

title.addEventListener("click", function(){
  title.innerText="changee!";  
});