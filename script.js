let output = document.getElementById("output");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let text = document.getElementById("text").value;
  let delay = Number(document.getElementById("delay").value);
  res(text, delay);
});

async function res(text,delay){
	output.innerHTML = "";
	try{
		await new Promise((resolve)=>{
			setTimeout(()=>{
				resolve(text);
			},delay);
		})
	   output.innerHTML = text;
	}
	catch(err){
		console.log(err);
	}
}
