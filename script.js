const sb1 = document.getElementById("country1");
const sb2 = document.getElementById("country2");
const Convert = document.getElementById("Convert");
const amount1 = document.getElementById("amount1");
const amount2 = document.getElementById("amount2");
var val1 = sb1.value;
var val2 = sb2.value;
var cur1 = amount1.value;
Convert.onclick = (event) => {
	event.preventDefault();
	val1 = sb1.value;
	val2 = sb2.value;
	cur1 = amount1.value;
	if (cur1 === "") {
		alert("Please enter amount");
	} else if (val1 === val2) {
		amount2.value = cur1;
	} else {
		const host = "api.frankfurter.app";
		fetch(`https://${host}/latest?amount=${cur1}&from=${val1}&to=${val2}`)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
				console.log(data.rates);
				let rate = data.rates;
				let arr = Object.values(rate);
				console.log(arr[0]);
				amount2.value = arr[0];
			});
	}
};
