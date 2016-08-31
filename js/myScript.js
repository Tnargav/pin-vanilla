/*
	Get values from each form,
	Compare those values,
	Compare numbers in the same index
*/


(function() {
	
	//draw random numbers from 1 to 9
	function draw() {
		
		return Math.floor((Math.random() * 10) +1);
	}
	
	//get form fields
	function getFormFields(formId) {
		
		/*
			form - elements with all input fields.
			It is needed for allowing a comparison between forms.
		*/
		var form = document.forms[formId],
			childrenLength = form.children.length,
			aNumbers = []; //array for storing random numbers

			for(var i=0;i<childrenLength;i++) {

				if(form[i].id.startsWith("draw")) {
					aNumbers.push(draw());
				}
			}
			return aNumbers;
	}
	/*
		Set form values
		
		@param1 {String}
		@param2 {Array}
	*/
	function setFormValues(formId, aFormFieldsValues) {
		
		
	}
	getFormFields("displayForm");
})();