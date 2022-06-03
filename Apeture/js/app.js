(() => {
    "use strict";
    const flsModules = {};
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    function menuClose() {
        bodyUnlock();
        document.documentElement.classList.remove("menu-open");
    }
    function FLS(message) {
        setTimeout((() => {
            if (window.FLS) console.log(message);
        }), 0);
    }
    let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
        const targetBlockElement = document.querySelector(targetBlock);
        if (targetBlockElement) {
            let headerItem = "";
            let headerItemHeight = 0;
            if (noHeader) {
                headerItem = "header.header";
                headerItemHeight = document.querySelector(headerItem).offsetHeight;
            }
            let options = {
                speedAsDuration: true,
                speed,
                header: headerItem,
                offset: offsetTop,
                easing: "easeOutQuad"
            };
            document.documentElement.classList.contains("menu-open") ? menuClose() : null;
            if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                window.scrollTo({
                    top: targetBlockElementPosition,
                    behavior: "smooth"
                });
            }
            FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
        } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
    };
    function formFieldsInit(options = {
        viewPass: false,
        autoHeight: false
    }) {
        const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
        if (formFields.length) formFields.forEach((formField => {
            if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
        }));
        document.body.addEventListener("focusin", (function(e) {
            const targetElement = e.target;
            if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                if (!targetElement.hasAttribute("data-no-focus-classes")) {
                    targetElement.classList.add("_form-focus");
                    targetElement.parentElement.classList.add("_form-focus");
                }
                formValidate.removeError(targetElement);
            }
        }));
        document.body.addEventListener("focusout", (function(e) {
            const targetElement = e.target;
            if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                if (!targetElement.hasAttribute("data-no-focus-classes")) {
                    targetElement.classList.remove("_form-focus");
                    targetElement.parentElement.classList.remove("_form-focus");
                }
                if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
            }
        }));
        if (options.viewPass) document.addEventListener("click", (function(e) {
            let targetElement = e.target;
            if (targetElement.closest('[class*="__viewpass"]')) {
                let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                targetElement.classList.toggle("_viewpass-active");
            }
        }));
        if (options.autoHeight) {
            const textareas = document.querySelectorAll("textarea[data-autoheight]");
            if (textareas.length) {
                textareas.forEach((textarea => {
                    const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                    const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                    setHeight(textarea, Math.min(startHeight, maxHeight));
                    textarea.addEventListener("input", (() => {
                        if (textarea.scrollHeight > startHeight) {
                            textarea.style.height = `auto`;
                            setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                        }
                    }));
                }));
                function setHeight(textarea, height) {
                    textarea.style.height = `${height}px`;
                }
            }
        }
    }
    let formValidate = {
        getErrors(form) {
            let error = 0;
            let formRequiredItems = form.querySelectorAll("*[data-required]");
            if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                if ((null !== formRequiredItem.offsetParent || "SELECT" === formRequiredItem.tagName) && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
            }));
            return error;
        },
        validateInput(formRequiredItem) {
            let error = 0;
            if ("email" === formRequiredItem.dataset.required) {
                formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                if (this.emailTest(formRequiredItem)) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
            } else if ("checkbox" === formRequiredItem.type && !formRequiredItem.checked) {
                this.addError(formRequiredItem);
                error++;
            } else if (!formRequiredItem.value.trim()) {
                this.addError(formRequiredItem);
                error++;
            } else this.removeError(formRequiredItem);
            return error;
        },
        addError(formRequiredItem) {
            formRequiredItem.classList.add("_form-error");
            formRequiredItem.parentElement.classList.add("_form-error");
            let inputError = formRequiredItem.parentElement.querySelector(".form__error");
            if (inputError) formRequiredItem.parentElement.removeChild(inputError);
            if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
        },
        removeError(formRequiredItem) {
            formRequiredItem.classList.remove("_form-error");
            formRequiredItem.parentElement.classList.remove("_form-error");
            if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
        },
        formClean(form) {
            form.reset();
            setTimeout((() => {
                let inputs = form.querySelectorAll("input,textarea");
                for (let index = 0; index < inputs.length; index++) {
                    const el = inputs[index];
                    el.parentElement.classList.remove("_form-focus");
                    el.classList.remove("_form-focus");
                    formValidate.removeError(el);
                }
                let checkboxes = form.querySelectorAll(".checkbox__input");
                if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                    const checkbox = checkboxes[index];
                    checkbox.checked = false;
                }
                if (flsModules.select) {
                    let selects = form.querySelectorAll(".select");
                    if (selects.length) for (let index = 0; index < selects.length; index++) {
                        const select = selects[index].querySelector("select");
                        flsModules.select.selectBuild(select);
                    }
                }
            }), 0);
        },
        emailTest(formRequiredItem) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
        }
    };
    function formSubmit() {
        const forms = document.forms;
        if (forms.length) for (const form of forms) {
            form.addEventListener("submit", (function(e) {
                const form = e.target;
                formSubmitAction(form, e);
            }));
            form.addEventListener("reset", (function(e) {
                const form = e.target;
                formValidate.formClean(form);
            }));
        }
        async function formSubmitAction(form, e) {
            const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
            if (0 === error) {
                const ajax = form.hasAttribute("data-ajax");
                if (ajax) {
                    e.preventDefault();
                    const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                    const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                    const formData = new FormData(form);
                    form.classList.add("_sending");
                    const response = await fetch(formAction, {
                        method: formMethod,
                        body: formData
                    });
                    if (response.ok) {
                        let responseResult = await response.json();
                        form.classList.remove("_sending");
                        formSent(form, responseResult);
                    } else {
                        alert("Ошибка");
                        form.classList.remove("_sending");
                    }
                } else if (form.hasAttribute("data-dev")) {
                    e.preventDefault();
                    formSent(form);
                }
            } else {
                e.preventDefault();
                const formError = form.querySelector("._form-error");
                if (formError && form.hasAttribute("data-goto-error")) gotoblock_gotoBlock(formError, true, 1e3);
            }
        }
        function formSent(form, responseResult = ``) {
            document.dispatchEvent(new CustomEvent("formSent", {
                detail: {
                    form
                }
            }));
            setTimeout((() => {
                if (flsModules.popup) {
                    const popup = form.dataset.popupMessage;
                    popup ? flsModules.popup.open(popup) : null;
                }
            }), 0);
            formValidate.formClean(form);
            formLogging(`Форма отправлена!`);
        }
        function formLogging(message) {
            FLS(`[Формы]: ${message}`);
        }
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
    menuInit();
    formFieldsInit({
        viewPass: false,
        autoHeight: false
    });
    formSubmit();
})();