let items=[];
function getItem(item,value,Qty){
	
	items.push({
		item: item,
		value: value,
		Qty: Qty
	});
	console.log(items);
	
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
		
		getItem(itemName,parseFloat(itemValue),quantity);
	});
}


let checkOut = document.getElementById("checkOut");
checkOut.addEventListener("click", (event) =>{
	
//	let header1 = document.getElementById("header1");
//	let p = document.createElement("p");
//	header1.appendChild(p);
//	header1.innerText="Items";
//	
//	let header2 = document.getElementById("header2");
//	let p1 = document.createElement("p");
//	header2.appendChild(p1);
//	header2.innerText="Price";
	
	
	
//	let col = document.getElementById("col1");
//	let p1 = document.createElement("p");
//	col.appendChild(p1);
//	
//	let col1 = document.getElementById("col2");
//	let p2 = document.createElement("p");
//	col1.appendChild(p2);
	
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
	bill.innerText = "Total is: $"+ total;
	bill.appendChild(p);
	
	
	console.log("total= "+total);
	console.log("the list: " + lists);
//	alert("Item you chose: \n" +lists + "Your total is= "+"$"+ total);
	
	
});



