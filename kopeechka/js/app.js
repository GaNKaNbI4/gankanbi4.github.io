(() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", (() => {
        const formEmail = document.querySelector(".form-main-home");
        formEmail["email"].onfocus = () => {
            if (formEmail.classList.contains("_email-error")) formEmail.classList.remove("_email-error");
        };
        formEmail.addEventListener("submit", getEmailResponse);
    }));
    async function getEmailResponse(e) {
        e.preventDefault();
        const inputEmail = e.target["email"].value;
        const firstRequestURL = `https://api.kopeechka.store/mailbox-reorder?site=facebook.com&email=${inputEmail}&token=b721c490ae84a5b9588ffdb88d160213&type=json&api=2.0`;
        const firstRequestResponse = await fetch(firstRequestURL, {
            method: "GET"
        });
        const firstRequestResponseResult = await firstRequestResponse.json();
        if (firstRequestResponse.ok) if ("OK" === firstRequestResponseResult.status) {
            alert("E-mail получен");
            const id = firstRequestResponseResult.id;
            const secondRequestURL = `https://api.kopeechka.store/mailbox-get-message?full=1&id=${id}&token=b721c490ae84a5b9588ffdb88d160213&type=json&api=2.0`;
            let responseTimer = setInterval((async () => {
                const secondRequestResponse = await fetch(secondRequestURL, {
                    method: "GET"
                });
                const secondRequestResponseResult = await secondRequestResponse.json();
                if (secondRequestResponse.ok) if ("OK" === secondRequestResponseResult.status) {
                    const finalResponse = secondRequestResponseResult.fullmessage;
                    document.querySelector(".main-home__response-block-wrapper").innerHTML = finalResponse;
                    clearInterval(responseTimer);
                    clearInterval(errorTimeout);
                }
            }), 2e3);
            let errorTimeout = setTimeout((() => {
                clearInterval(responseTimer);
                alert("SMS код не доставлен, попробуйте еще раз");
            }), 2e4);
        } else e.target.classList.add("_email-error");
    }
    window["FLS"] = false;
})();