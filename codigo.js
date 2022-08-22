
		// let nombre = prompt('Ingresá tu nombre')
		// let apellido = prompt('Ingresá tu apellido')
		// let mail = prompt('Ingresá tu mail')
		// let edad = prompt('Ingresá tu edad')
		// let pais = prompt('Ingresá tu país de residencia')
		// let dato = [nombre , apellido , edad , pais , mail]


		let nombre = "Usuario"
		let apellido = ""
		let mail = "ejemplo@gmail.com"
		let edad = "tu edad"
		let pais = "tu pais"
		let dato = [nombre , apellido , edad , pais , mail]


// alert('Gracias por ingresar tus datos:\n' + nombre + ' ' + apellido + ', ' + edad + ' años, ' + pais + '.\nE-mail: ' + mail + '\nRecordá verificarlos en el formulario antes de enviar el mismo.')

function form() {
	// body...
document.getElementById("jsname").value = dato[0] + ' ' + dato[1] + ', ' + dato[2] + ' años, ' + dato[3]
document.getElementById("jsmail").value = dato[4]
}

let viendo = false
let compara
let mostrando = false
let developer


function mostrar(name) {
		let nosacar = document.getElementById(name)
	if (mostrando && nosacar != compara) {
		developer.style.display = 'none'
		developer = document.getElementById(name)
		developer.style.display = 'block'
		developer.style.float = 'left'
		mostrando = true
	} else if (nosacar != compara) {
		developer = document.getElementById(name)
		developer.style.display = 'block'
		developer.style.float = 'left'
		mostrando = true
	} 
}

function ver(name) {


	if (viendo) {
		compara.style.display = 'none'
		compara = document.getElementById(name)
		compara.style.display = 'block'
		compara.style.float = 'right'
		mostrando = false
		viendo = true
	} else {
		compara = document.getElementById(name)
		compara.style.display = 'block'
		compara.style.float = 'right'
		viendo = true
		mostrando = false
	}

}
