let addBtnEl = document.getElementById("symbol")

function myFunction() {
	addBtnEl = document.createElement("TEXTAREA");
	addBtnEl.setAttribute("type", "text")
	addBtnEl.setAttribute("draggable", "true")
	addBtnEl.setAttribute("cols", "40")
	addBtnEl.setAttribute("rows", "5")
	addBtnEl.setAttribute("id", "#inputContainer")
	addBtnEl.setAttribute("value", "false")
	document.body.appendChild(addBtnEl)
}