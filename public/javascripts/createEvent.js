router.post('/create', (req, res) => {

  const newEventsInputs = document.querySelectorAll('input select')
  
  const forms = document.querySelectorAll("form")

  forms[0].onsumit = e => {
    e.preventDefault()
  

	const newEvent = {
		name: newEventsInputs[0].value,
		description: newEventsInputs[1].value,
		type: newEventsInputs[2].value,
		glutenfree: newEventsInputs[3].checked,
		dairyfree: newEventsInputs[4].checked,
		veg: newEventsInputs[5].checked,
		vegan: newEventsInputs[6].checked,
		shellfish: newEventsInputs[7].checked,
		nuts: newEventsInputs[8].checked,
		date: newEventsInputs[9].value,
		time: newEventsInputs[10].value,
		address: newEventsInputs[11].value,
		forks: newEventsInputs[12].value
  }
  
}

axios.post({/*mandarlo a nuestra base de datos*/}, newEvent)
.then(response => {
  const { name, description, type, glutenfree, dairyfree, veg, vegan, shellfish, nuts, date, time, address, forks } = response.data 
  forms[0].reset()
  })
  .catch(err => console.log(err))

})
// Event.create({ name, description, inversions, length, park })