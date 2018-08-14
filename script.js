//Changing icons by toggling classes
/*$('#bot').click(function() {
    $(this).find('i').toggleClass('fa-pause fa-play')
});*/

//pauses background animation
(function () {
    var x = document.getElementsByTagName("BODY")[0];
    var bot = document.getElementById("bot");
    bot.onclick = function () {
        if (x.style.animationPlayState === "paused") {
            x.style.animationPlayState = "running";
          //box.style.animationPlayState = "running";

        } else {
            x.style.animationPlayState = "paused";
          //box.style.animationPlayState = "paused"
        }

    };
 })();
/*(function() {
    var gear = document.getElementById('gear');

    gear.onclick= function(){

        if (gear.style.animationPlayState == "paused"){
            gear.style.animationPlayState = "running";
        }
        else{
            gear.style.animationPlayState = "paused";
        }
  };*/
});   
</script>
