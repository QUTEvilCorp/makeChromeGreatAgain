function displayPasswords() {
    $("input[type=password]").each(function() {
        $(this).attr("type", "text");
    });
}

