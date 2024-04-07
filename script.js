var bar = document.querySelector(".bar")
var mob = document.querySelector(".mobile")
var me = 0
var ma = document.querySelector(".cont")
var me = document.querySelector(".box")

var load = document.querySelector("#loader")
var main = document.querySelector("#main")

bar.addEventListener("click", function(e){
  
    if(me==0){
        mob.style.marginLeft= 0
        me = 1
    }

else{
    mob.style.marginLeft= "-100%"
    me = 0
    }
})

ma.addEventListener("click",function(){
    mob.style.marginLeft = "-100%"
})
me.addEventListener("click",function(){
    mob.style.marginLeft = "-100%"
})


window.onload=function(){
    load.style.display = "none"
    main.style.display = "block"

}
