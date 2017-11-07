'use strict';
$(function(){

	$('[data-target]').click(function(){
		let dialogId = $(this).data("target");
		$(dialogId).find(".alert").hide();
	})

	$(".signup").click(function () {
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
		if(password == ""){
			errors.push("Password is empty.");
		}

		if(password != passwordConfirmation){
			errors.push("Passwords does not match.");
		}
			
		// TODO: validations 



		if(errors.length){
			$alertBlock.empty();
			$alertBlock.show();
			let $ul = $("<ul></ul>");
			for (var i = 0; i < errors.length; i++) {
				$ul.append("<li>"+errors[i]+"</li>");
			}
			$alertBlock.append($ul);
		}else{
			$alertBlock.empty();
			$alertBlock.hide();
		}

	});
})