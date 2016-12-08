$(function () {
    'use strict';
    function contentLoad() {
        var password = $('#password'),
            confpassword = $('#confpassword');
        function validatePassword() {
            (password.val() != confpassword.val()) ? confpassword.setCustomValidity("Passwords don't match") : confpassword.setCustomValidity('');
        }
        password.on('change', function () { validatePassword(); });
        confpassword.on('keyup', function () { validatePassword(); });
        function replaceValidationUI(form) {
            form.on({
                'invalid': function (event) {
                    event.preventDefault();
                },
                'submit': function (event) {
                    (!this.checkValidity()) && event.preventDefault();
                }
            }, true);
            var submitButton = form.find('button[type=submit]');
            submitButton.on('click', function (event) {
                var invalidFields = form.find("input:invalid"),
                    errorMessages = form.find(".error_message"),
                    parent;
                if (errorMessages instanceof Node) {
                    errorMessages.parentNode.removeChild(errorMessages);
                }
                else {
                    errorMessages.forEach(function (item, i) {
                        item.parentNode.removeChild(errorMessages[i]);
                    });
                }
                if (invalidFields instanceof Node) {
                    parent = invalidFields.parentNode;
                    parent.insertAdjacentHTML('beforeEnd', '<div class="error_message">' +
                        invalidFields.validationMessage +
                        '</div>');
                }
                else {
                    for (var i = 0; i < invalidFields.length; i++) {
                        parent = invalidFields[i].parentNode;
                        parent.insertAdjacentHTML('beforeEnd', '<div class="error_message">' +
                            invalidFields[i].validationMessage +
                            '</div>');
                    }
                }
                (invalidFields.length > 0) && invalidFields[0].focus();
            });
        }
        var forms = $('form');
        for (var i = 0; i < forms.length; i++) {
            replaceValidationUI(forms instanceof Node ? forms : forms[i]);
        }
    }
    contentLoad();
});





