$(document).ready(function () {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // function copyEmail() {

    //     /* Get the text field */
    //     var copyText = document.getElementById("myInput");

    //     /* Select the text field */
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    //     /* Copy the text inside the text field */
    //     document.execCommand("copy");

    //     /* Alert the copied text */
    //     // alert("Copied the text: " + copyText.value);

    // };

    $(".up-arrow").on("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    AOS.init();
})