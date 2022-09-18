(() => {
    "use strict";
    function add_logs(txt) {
        $("#output").val($("#output").val() + "\n" + txt);
    }
    function clean_logs() {
        $("#output").val("");
    }
    $(document).ready((function() {
        $(".request-form-home").submit((function(e) {
            e.preventDefault();
            clean_logs();
            var tokens = $.trim($(".request-form-home__input").val()).split("\n");
            $.each(tokens, (function(idx, token) {
                var cur_tokens = token.split("|");
                var last_idx = cur_tokens.length - 1;
                console.log("https://2fa.live/tok/" + cur_tokens[last_idx].replace(/\ /g, ""));
                $.get("https://2fa.live/tok/" + cur_tokens[last_idx].replace(/\ /g, "")).done((function(data) {
                    add_logs(data.token);
                }));
            }));
        }));
        $(".response-form-home").submit((function(e) {
            e.preventDefault();
            $(".response-form-home__input").select();
            document.execCommand("copy");
        }));
    }));
    window["FLS"] = false;
})();