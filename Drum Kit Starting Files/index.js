var no_of_drums=document.querySelectorAll(".drum").length;
for(var i=0;i<no_of_drums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var z=this.innerHTML;
        makesound(z);
        btnanimation(z);
});
}
document.addEventListener("keypress",function(event){
        var keys=event.key;
        makesound(keys);
        btnanimation(keys);
})

function makesound(z){
    ary=["w=crash.mp3","a=kick-bass.mp3","s=snare.mp3","d=tom-1.mp3","j=tom-2.mp3","k=tom-3.mp3","l=tom-4.mp3"];
        for(var j=0;j<no_of_drums;j++){
            if(z===(ary[j]).slice(0,1)){
                var si=(ary[j]).slice(2);
                var pth = "sounds"+"/"+si;
                var audio=new Audio(pth);
                audio.play();
            }
        }
}
function btnanimation(key){
    var charclass=document.querySelector("."+key);
    charclass.classList.add("pressed");
    setTimeout(function() {
        charclass.classList.remove("pressed");
    }, 100);
}
