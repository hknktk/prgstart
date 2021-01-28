document.addEventListener('DOMContentLoaded',function(){
  document.getElementById("menuButton").addEventListener("click",function(){
    this.classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("mask").classList.toggle("active");
    document.getElementById("bar").classList.toggle("active");
    document.getElementById("topMenu").classList.toggle("active");
    document.getElementById("miniMenu").classList.toggle("active");
    document.querySelector("html").classList.toggle("none");
    document.querySelector("body").classList.toggle("none");

  });


  document.getElementById("mask").addEventListener("click",function(){
    this.classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    document.querySelector("html").classList.toggle("none");
    document.querySelector("body").classList.toggle("none");
    document.getElementById("menuButton").classList.toggle("active");
    document.getElementById("bar").classList.toggle("active");
  })

  document.getElementById("list").addEventListener("click",function(){
    document.getElementById("nav").classList.toggle("active");
    document.querySelector("html").classList.toggle("none");
    document.querySelector("body").classList.toggle("none");
    document.getElementById("menuButton").classList.toggle("active");
    document.getElementById("mask").classList.toggle("active");
    document.getElementById("bar").classList.toggle("active");
  })

})


