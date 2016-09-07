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
			Get object that will have id name value.
		*/
		var form = document.forms[formId],
			childrenLength = form.children.length,
			aNumbers = [], //array for storing random numbers
			formValues = {
				id: "",
				name: "",
				value: 0
			}; 

			for(var i=0;i<childrenLength;i++) {

			//1.wrzocic obiekty do tablicy
			//2.potrzebujemy obiekty - formValues={}
			//3.wrzucic obiekty z formy do tablicy
			 
				if(form[i].id.startsWith("draw")) {
					aNumbers.push({
						id:  form[i].id,
						name: form[i].id,
						value: draw()
					});
				}
			}
				/*
				for(var i=0;i<aNumbers.length;i++) {

					console.log(aNumbers[i]);
				}
				*/
			
			return aNumbers;
	}
	/*
		Set form values
		
		@param1 {String}
		@param2 {Array}
	*/
	function setFormValues(formId, aFormFieldsValues){
		
		/*
			formId - Id formy na ktorej chcemy ustawic zmienne
			aFormFieldsValues - tablica obiektow ktora przechowuje obiekty formy
			
		*/
		
		var form = document.forms[formId],
				childrenLength = form.children.length,
				aFormIndex = 0;
		//debugger;
		for(var i=0;i<childrenLength;i++) {
			
			if(form[i].id.startsWith("draw")) {
				form[i].value = aFormFieldsValues[aFormIndex].value;
				aFormIndex++;
			}
			
		}
	}
	var aForm = getFormFields("displayForm");
	
	setFormValues("displayForm", aForm);
	
})();
