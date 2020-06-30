window.onload = () => {
	console.log('Tuim.app is loaded!')
}

window.dataLayer = window.dataLayer || []

function gtag() {
	dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'UA-171288641-1')
