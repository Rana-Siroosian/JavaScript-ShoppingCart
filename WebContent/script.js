let game =[
	
	{
		item:'Greed Fall',
		value:49.99,
		qty:""
	},
	{
		item:'For Honor',
		value: 11.99
	},
	{
		item: 'Out Riders',
		value: 59.99
	},
	{
		item: 'Jumanji',
		value: 39.99
	},
	{
		item: 'Dead Rising',
		value: 11.99
	}
]


let items=[];
function getItem(item,value,Qty){
	
	items.push({
		item: item,
		value: value,
		Qty: Qty
	});
	console.log(items);
	
}


let showChart = document.getElementById("show");
for(let i=0;i<game.length;i++){
	let tr = document.createElement("tr");
	showChart.appendChild(tr);
	
	let td1 = document.createElement("td");
	td1.innerText = game[i].item;
	tr.appendChild(td1);
	
	let td2 = document.createElement("td");
	td2.innerText = game[i].value;
	tr.appendChild(td2);
	
//	let userInput = document.createElement("input");
//	tr.appendChild(userInput);
//	function getQty(){
//// td3.innerText = game[i].qty.push(userInput);
//// let userInput = document.createElement("input");
//	let q=""; q += userInput.value;
//	console.log("qq"+q);
//// let q = parseInt(userInput);
//	console.log(game[i]);
////	tr.appendChild(userInput);
//	}
	
	let button = document.createElement("button");
	button.innerText = "Add";
	tr.appendChild(button);
	button.setAttribute("type", "button");
// button.setAttribute("onclick", "getItem('" + game[i].item+ "', "
// +game[i].value + ")");
// button.setAttribute("onclick", "getItem('" + game[i].item+ "', "
// +game[i].value + ")");
	button.setAttribute("onclick", "getItem('"+game[i].item+"',"+game[i].value+")");
}



let buttons = document.querySelectorAll('.item-purchas')
for (let button of buttons){
	
	button.addEventListener("click", (event)=>{
		let itemName = event.target.getAttribute("name");
		let itemValue = event.target.getAttribute("value");
		let quantity=0;
		let qtyInput = document.getElementById("qty");
		console.log(qtyInput);
		quantity = qtyInput.value;
		quantity = parseInt(quantity);
		console.log(quantity);
		
		getItem(itemName,(itemValue),quantity);
	});
}


let checkOut = document.getElementById("checkOut");
checkOut.addEventListener("click", (event) =>{
	

	
	let lists= "";
	let total=0;
	let file = document.getElementById("gameTable");

	for (let i=0;i<items.length
	;i++ ){
		let tr = document.createElement("tr");
		file.appendChild(tr);
		
		let td1 = document.createElement("td");
		td1.innerText = items[i].item;
		tr.appendChild(td1);

		let td = document.createElement("td");
		td.innerText = "$"+items[i].value;
		tr.appendChild(td);
		
		

		total += (items[i].value);

	}
	let bill = document.getElementById("total");
	let p = document.createElement("p");
	bill.innerText = "Your total is: $"+ total;
	bill.appendChild(p);
	
	
	console.log("total= "+total);
	console.log("the list: " + lists);
// alert("Item you chose: \n" +lists + "Your total is= "+"$"+ total);
	
	
});



