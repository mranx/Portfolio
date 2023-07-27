
let items = document.getElementsByClassName("item");
for (let a = 0; items.length > a; a++) {
  items[a].addEventListener("click", function () {
    for (let k = 0; items.length > k; k++) {
      items[k].classList.remove("fgactive");
    }
    items[a].classList.add("fgactive");
    let getitem = items[a].getAttribute("data-item");
    console.log(getitem);
    let myImg = document.getElementsByClassName("myImg");
    console.log(myImg);
    for (let f = 0; myImg.length > f; f++) {
      let filter = myImg[f].getAttribute("data-filter");
      console.log(filter);
      myImg[f].style.display = "none";
      if (getitem == filter) {
        myImg[f].style.display = "block";
      }
      if (getitem == "all") {
        myImg[f].style.display = "block";
      }
    }
  });
}

var mainimg = document.getElementById("main-img");
var subimg = document.getElementsByClassName("subimg");
for (let i = 0; i < subimg.length; i++) {
  subimg[i].onclick = function(){
    mainimg.src = subimg[i].src;
  }
  
}
var mainimg2 = document.getElementById("main-img-2");
var subimg2 = document.getElementsByClassName("subimg-2");
for (let i = 0; i < subimg2.length; i++) {
  subimg2[i].onclick = function(){
    mainimg2.src = subimg2[i].src;
  }
  
}