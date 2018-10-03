function convert(){
	let x = document.getElementById("textarea1").value;
	let y = x.length;
	let k= document.getElementById("key").value;
	let num=Number(k);
	let c =[]
	let m =[]
	for (i=0;i<y;i++){
		code=x.charCodeAt(i)+num;
		c.push(code);
		m.push(String.fromCharCode(c[i]));

	}
	console.log(m.join(''));
	var coded = m.join('');
	document.getElementById("textarea2").innerHTML = coded;
	




}

