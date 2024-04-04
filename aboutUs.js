$(".person-intro").hide();
$(".group-intro").hide();

$(document).ready(function () {
    let count = 0;
    $("#title").click(function () {
        count++;
        // console.log("count = " + count);
        // console.log("count % 2 === 1 " + (count % 2 === 1));

        if (count === 1) {
            $(this).parent().toggleClass('logo-upper');

        }

        if (count % 2 === 1) {  //個人介紹入場
            // console.log("in person-intro");

            if (count === 1) {
                setTimeout(function () {    //等待標題上移動畫
                    $(".person-intro").show();
                    $(".person-intro .item").hide();
                    $(".person-intro .item-left").transition({ animation: 'fly right', duration: 1000 });
                    $(".person-intro .item-right").transition({ animation: 'fly left', duration: 1000 });
                }, 700);
            } else {
                $(".group-intro").transition({ animation: 'fade up' });
                $(".person-intro").show();
                $(".person-intro .item").hide();
                $(".person-intro .item-left").transition({ animation: 'fly right' });
                $(".person-intro .item-right").transition({ animation: 'fly left' });
            }
        } else {  //團體介紹入場
            // console.log("in group-intro");
            $(".person-intro .item-left").transition({ animation: 'fly right' });
            $(".person-intro .item-right").transition({ animation: 'fly left' });
            setTimeout(function () {
                $(".person-intro").hide();
                $(".group-intro").transition({ animation: 'fade up' });
            }, 700);
        }

    });


    $(".pic img").hover(    // $(selector).hover(inFunction,outFunction)
        function () {

            // $(".person-intro").css("opacity", .5);
            $(this).css("transform", "scale(1.8)");
            // $(this).css("opacity", 1);
        },
        function () {
            // $(".person-intro").css("opacity", 1);
            $(this).css("transform", "scale(1)");
        }
    );


})