$(".person-intro").hide();
$(".group-intro").hide();

$(document).ready(function () {
    let count = 0;
    $("#title").click(function () {
        count++;
        // console.log("count = " + count);
        // console.log("count % 2 === 1 " + (count % 2 === 1));

        if (count % 2 === 1) {  //個人介紹入場
            // console.log("in person-intro");
            if (count !== 1)
                $(".group-intro").transition({ animation: 'fade up' });
            $(".person-intro").show();
            $(".person-intro .item").hide();
            $(".person-intro .item-left").transition({ animation: 'fly right' });
            $(".person-intro .item-right").transition({ animation: 'fly left' });
        } else {  //團體介紹入場
            // console.log("in group-intro");
            $(".person-intro .item-left").transition({ animation: 'fly right' });
            $(".person-intro .item-right").transition({ animation: 'fly left' });
            setTimeout(function () {
                $(".person-intro").hide();
                $(".group-intro").transition({ animation: 'fade up' });
            }, 800);
        }

    });
});
