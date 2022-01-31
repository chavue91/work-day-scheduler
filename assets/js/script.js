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
    $("#hour10 .userInpt").val(localStorage.getItem("hour10"));
    $("#hour11 .userInpt").val(localStorage.getItem("hour11"));
    $("#hour12 .userInpt").val(localStorage.getItem("hour12"));
    $("#hour13 .userInpt").val(localStorage.getItem("hour13"));
    $("#hour14 .userInpt").val(localStorage.getItem("hour14"));
    $("#hour15 .userInpt").val(localStorage.getItem("hour15"));
    $("#hour16 .userInpt").val(localStorage.getItem("hour16"));
    $("#hour17 .userInpt").val(localStorage.getItem("hour17"));


   
   
});