
document.addEventListener(("DOMContentLoaded"), ()=>{

	const form = document.getElementById("appointmentForm")
	const confirmation = document.getElementById("confirmation")

	form.addEventListener("submit", (event) =>{
		// used to intercept form submission and run custom logic.
		event.preventDefault()

// From input ids, selecting the elements
	const name = document.getElementById("text")
	const mail = document.getElementById("email")
	const date = document.getElementById("date")
	const department = document.getElementById("department")

// It is a simple validation
	if (!name || !mail || !date || !department)
	{
		alert("Please fill in all the fields!")
		return
	}

confirmation.textContent = `Thank you ${name.value}. Your appointment for ${department.value} is confirmed for ${date.value}.`

confirmation.classList.remove("hidden")

	})




})