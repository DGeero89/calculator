(function(){
	var calculator = document.getElementById('calculator'),
			outputField = calculator.querySelector('#output'),
			buttons = calculator.querySelectorAll('.button'),
			previous = calculator.querySelector('.previous'),
			btnsLength = buttons.length,
			operators = ["+", "-", "*","/","%"],
			buttonVal,
			i, 
			equation = "",
			output;
			
	for(i = 0; i < btnsLength; i++) {

		buttons[i].addEventListener('click', function(){

			buttonVal = this.value;
			
			
			if( buttonVal === "C"){

				equation = "";
				previous.innerHTML = equation;

			}	else if(buttonVal >= 0 && buttonVal <= 9){
				
				equation += buttonVal;
				//outputField.value = equation;

			} else if(operators.indexOf(buttonVal) > -1){

				if ( !validator.isEmpty(equation) && equation[equation.length-1] !== buttonVal ){
					equation += buttonVal;
				} else if (validator.isEmpty(equation) && buttonVal === "-"){
					equation += buttonVal;
				} else {
					equation += "";
				}

			} else if(buttonVal === "."){
				if( !validator.isEmpty(equation) && equation.indexOf(".") > -1 ){
					equation += "";
				} else {
					equation += buttonVal;
				}

			} else if (buttonVal === "DEL"){

				if(equation.length > 0){
					equation = equation.substr(0, equation.length-1);
				} else {
					equation = "";
				}

			} else if (buttonVal === "="){
				previous.innerHTML = equation;
				output = parseFloat(eval(equation).toPrecision(8));
				outputField.value = output;
				equation = output.toString();

			}  else {

				equation += buttonVal;
				//outputField.value = equation;

			}

			outputField.innerHTML = equation;



			
		});
		
	}

})();