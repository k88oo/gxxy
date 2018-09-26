// fxq 2014

/*标签切换*/
function showsub(name,num,id) {
    for (i = 1;i<=num;i++){
        document.getElementById("tab_"+name+"_"+i).className = "";
        document.getElementById("sub_"+name+"_"+i).style.display = "none";
    }
    document.getElementById("tab_"+name+"_"+id).className = "act";
    document.getElementById("sub_"+name+"_"+id).style.display = "";
}



$(function() {  

/*下拉菜单*/
$(".menudown").hover(
　　function () {
　　$(this).addClass("hover");
　　},
　　function () {
　　$(this).removeClass("hover");
　　}
);



})






