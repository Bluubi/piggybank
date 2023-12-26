export function deviceController() {
	window.addEventListener('load', (event) => setBackgroundBlock(event))
	window.addEventListener('resize', (event) => setBackgroundBlock(event))
}

function setBackgroundBlock(event: Event) {
	const elementBlock = document.body.querySelector('[data-testid="block"]')

	console.log('hola rafa')
	if (event === undefined) {
		return
	}
	const target = event.target as Window

	if (target.innerWidth > 1085) {
		const background = createBackgroundBlockElement()
		if (elementBlock === null) {
			createAlertMessage(background)
			document.body.appendChild(background)
		}
	} else {
		if (elementBlock !== null) {
			document.body.removeChild(elementBlock)
		}
	}
}

function createBackgroundBlockElement() {
	const background = document.createElement('div')
	background.setAttribute('data-testid', 'block')
	background.className = 'blocker'
	document.body.style.pointerEvents = 'none'

	return background
}

function createAlertMessage(backgroundElement: HTMLDivElement) {
	const alertMessage = document.createElement('p')
	alertMessage.textContent =
		'Esta aplicación solo está disponible en dispositivos móviles'
	backgroundElement.appendChild(alertMessage)
}
