'use strict';
$(function(){
	$(".signup").click(function () {
		//get modal content block
		let $modalContentBlock = $(this).closest(".modal-content");
		//get elements block
		let $modalBodyBlock = $modalContentBlock.find(".modal-body");

		let email = $modalBodyBlock.find("[name=email]").val();
		let password = $modalBodyBlock.find("[name=password]").val();
		let passwordConfirmation = $modalBodyBlock.find("[name=passwordConfirmation]").val();

		console.log(email);
		console.log(password);
		console.log(passwordConfirmation);

	});
})