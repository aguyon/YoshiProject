var carousel = $(".carousel"),
    items = $(".item"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
    if(e.data.d=="n"){
        currdeg = currdeg - 60;
    }
    if(e.data.d=="p"){
        currdeg = currdeg + 60;
    }
    carousel.css({
        "transform": "rotateY("+currdeg+"deg)"
    });
    items.css({
        "transform": "rotateY("+(-currdeg)+"deg)"
    });
}