'use strict';
$(function() {

    $('[data-target]').click(function() {
        let dialogId = $(this).data("target");
        $(dialogId).find(".alert").hide();
    })

    $(".signup").click(function() {
        //get modal content block
        let $modalContentBlock = $(this).closest(".modal-content");
        //get elements block
        let $modalBodyBlock = $modalContentBlock.find(".modal-body");

        //get values
        let email = $modalBodyBlock.find("[name=email]").val();
        let password = $modalBodyBlock.find("[name=password]").val();
        let passwordConfirmation = $modalBodyBlock.find("[name=passwordConfirmation]").val();

        let $alertBlock = $modalContentBlock.find(".alert");
        let errors = [];
        //check for passwords
        if (password == "") {
            errors.push("Password is empty.");
        }

        if (password != passwordConfirmation) {
            errors.push("Passwords does not match.");
        }

        // TODO: validations 
        if (errors.length) {
            showError(errors, $alertBlock);
        } else {
            $alertBlock.empty();
            $alertBlock.hide();
            // that is ok. let's send the data

            $.post("ajax.php", {
                'email': email,
                'password': password,
            }, requestComplete.bind($alertBlock),
            "json")
            .fail(requestFail.bind($alertBlock));

        }

    });
})


function requestComplete(data) {
	showError([data.message], this, false);
}

function requestFail(data) {
	showError([data.status + ":" + data.statusText], this);
}


function showError(errors, alertBlock, danger=true) {
    
	alertBlock.removeClass("alert-success alert-danger");
	alertBlock.addClass(danger?"alert-danger":"alert-success");
	alertBlock.empty();
    alertBlock.show();
  	

    let $ul = $("<ul></ul>");
    for (var i = 0; i < errors.length; i++) {
        $ul.append("<li>" + errors[i] + "</li>");
    }
    alertBlock.append($ul);
}