let link = document.getElementById("sendMail")


link.addEventListener('click', () => {
console.log("papapapapapapapapapapa")
})

// axios.post("/events/details")
// .then( x => sendEmail() )
// .catch(error => console.log(error))





// function getToken() {
// 	const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 	let token = '';
// 	for (let i = 0; i < 25; i++) {
// 			token += characters[Math.floor(Math.random() * characters.length )];
// 	}
// 	return token
// }

// const confirmationCode = getToken()

// const link = document.getElementById("sendMail")
// console.log(link)

// link.addEventListener('click', () => {

//   console.log("papapapa")

// mailer.sendMail({
// 	from: '"M\'EAT 👻" request@meat-app.com',
// 	to: 'teikvk@gmail.com', //El email del Host que va a celebrar el event
//   subject: "New request for your event!!!",
//   text: `Hola`,
// 	html: `<p>Hola</p>`
	// text: `http://localhost:3000/auth/confirm/${confirmationCode}`,
	// html: `<b>http://localhost:3000/auth/confirm/${confirmationCode}</b>`
// })
// .then ( x => res.redirect("/events/show"))
// // .then(info => res.render('email-sent', { email, subject, message, info }))
// .catch(error => console.log(error));

// })