function printPopup() {
    $(".avatar").animate({
        bottom: 0,
    }, 500);
}

function checkcookie() {
    var storedate = localStorage.getItem("popUpExpiredDate");
    console.log("storedate: ", storedate);
    if (storedate) {
        var d = new Date(parseInt(storedate));
        var today = new Date().getTime();
        return (today >= d.getTime())
    }
    return true
}

function myPopup() {
    if (checkcookie()) {
        window.setTimeout(printPopup, 2000);
    }
}

function onButtonClick() {
    console.log("button has been clicked");
    var exp = new Date(new Date().getTime() + (30 * 24 * 60 * 60 * 1000));
    localStorage.setItem("popUpExpiredDate", exp.getTime());
    $(".avatar").fadeOut();
}


function closePopup() {
    $('.navbar').fadeOut();
}
$(document).keyup(function(e) {
  if (e.keyCode === 27) $(".avatar").hide(); 
});
