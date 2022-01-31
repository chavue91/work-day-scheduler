$(document).ready(function () {

    // save button on click save usrInpt to local storage
    $(".saveBtn").on("click", function () {
        // get nearby values
        console.log(this);
        var text = $(this).siblings(".userInpt").val();
        var time = $(this).parent().attr("id");

        // set item in local storage
        localStorage.setItem(time, text);
    })

    // load local storage data
    $("#hour9 .userInpt").val(localStorage.getItem("hour9"));
   

   
   
});