const $numbersInput = $('.numbers-input') //referinta la element
// console.log($(this).data('value'), $(this).attr('data-value'))

let op = null;
let initialNumber = null;
let firstNumber = null;

$('.numbers-section').find('span').click(function(){
	// console.log($(this).data('type'))
	if($(this).data('type') === 'no'){
		// console.log($(this).data('type'))
		let no = $(this).data('value');
		const inputNumber = $numbersInput.text()
		if(no === 0 && inputNumber === '0') {
			
			return;
		}

		if(no === '.' && inputNumber.indexOf('.') > -1) {
			return;
		}

		if(initialNumber === null) {
			if(no === '.'){
				no = '0.';
			}
			initialNumber = no;			
			//a

		} else {
			if(initialNumber === 0 && no !== '.') {
				initialNumber = '';
			}
			initialNumber = "" + initialNumber + no;
			//a
			
		}
		$numbersInput.text(initialNumber);//a
		
	}

	if($(this).data('type') === 'op'){
		if(firstNumber !== null && initialNumber !== null ) {
			const lastNumber = Number($numbersInput.text())
			doTheMath(firstNumber, lastNumber, op);			
		}

		firstNumber = Number($numbersInput.text());
		initialNumber = null;		

		op =$(this).data('value');

	}
	
})
//eval
$('.equal').click(function(){
	if(op === null || firstNumber === null){
		return;
	}
	const lastNumber = Number($numbersInput.text())
	doTheMath(firstNumber, lastNumber, op)
	op = null;
	initialNumber = null;
	firstNumber = null;
})

$('.reset').click(function() {
	op = null;
	initialNumber = null;
	firstNumber = null;
	$numbersInput.text(0);
})

function doTheMath(first, second, op) {
	// const lastNumber = Number($numbersInput.text())
	// console.log(lastNumber)
	let result = null;
	switch(op) {
		case '+':
			result = first + second;
			break;
		case '-':
			result = first - second;
			break;
		case '/':
			result = first / second;
			break;
		case '*':
			result = first * second;
			break;
	}

		$numbersInput.text(result)
}