var kepek = ["kep1.jpg", "kep2.jpg","kep3.jpg","kep4.jpg","kep5.jpg","kep6.jpg","kep7.jpg","kep8.jpg","kep9.jpg","kep10.jpg", "kep1.jpg", "kep2.jpg","kep3.jpg","kep4.jpg","kep5.jpg","kep6.jpg","kep7.jpg","kep8.jpg","kep9.jpg","kep10.jpg"];
var kepekalt = ["lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny"];
var kattintSzamlalo = 1;
var kattintott = [];
$(function(){

  console.log("Hello világ!");
  
    for (var i = 0; i < kepek.length; i++) {
//        $("article").append('<img src="kepek/'+ kepek[i] + '" alt="">');
        $("article").append('<img/>');
//        $("article img").eq(i).attr("src", "kepek/"+ kepek[i]);
        $("article img").eq(i).attr("alt", "szornyhatter");
        $("article img").eq(i).attr("src", "kepek/hatter.jpg");
        $("article img").eq(i).attr("id", i);
    }
    $("article img").click(kattint);
});


function kattint(){
    var id = $(this).attr("id");
//    console.log(id);
    $(this).attr("src", "kepek/" + kepek[id]);
    $(this).attr("alt", kepekalt[id]);
    kattintSzamlalo ++;
    console.log(kattintSzamlalo);
    kattintott[kattintSzamlalo] = $(this).attr("src");
    if(kepek[kattintott[1]] === kepek[kattintott[2]]){
        $("article img").eq(kattintott[1]).attr("src", "");
        $("article img").eq(kattintott[2]).attr("src", "");
    }else{
        setTimeout(visszafordit(), 1000);
    }
}


function visszafordit(){
    $("article img").eq(kattintott[1]).attr("src","kepek/hatter.jpg" );
    $("article img").eq(kattintott[2]).attr("src","kepek/hatter.jpg" );
}