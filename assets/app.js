$(document).ready(function () {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    $("#my-email-address").on("click", function () {

        /* Select the text field */
        var copyEmailAddress = $(this);

        copyEmailAddress.select();

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        alert("Copied the text: " + copyEmailAddress);
    });

    AOS.init();
})