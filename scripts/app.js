console.log('hello world')

window.addEventListener("load", function(){
	const delay = 2;
	const nodes = document.querySelectorAll
(".animate");
	for(let i=0; i<nodes.length; i++){
		const words = nodes[i].innerText.split(" ");
		nodes[i].innerHTML = "";
for(let i2=0; i2<words.length; i2++){
			const item = document.createElement("span");
			item.innerText = words[i2];
			const calc = (delay+((nodes.length + i2)/3));
	item.style.animationDelay = calc+"s";
			nodes[i].appendChild(item);
}
	}
});