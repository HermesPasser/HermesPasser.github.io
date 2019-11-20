"use strict"

const type = { 
	ACTOR_TO_ACTIVITY: 1, ACTIVITY_TO_ACTIVITY: 2, INCLUDE: 3, EXTENDS: 4
}

class Link {
	to = null // GameObj
	from = null // GameObj
	type = type.ACTOR_TO_ACTIVITY 
	
	constructor(from, to, type) {
		this.to = to
		this.from = from
		this.type = type
	}
}

function saveImage(name) {
	let img = Ramu.canvas.toDataURL('image/png')
	img = img.replace("image/png", "image/octet-stream")
		
	const link = document.getElementById('download')
	link.setAttribute('download', 'usecase.png')
	link.setAttribute('href', img)
	//link.click();
}

// TODO: verificar se a entidade existe antes de adc
// para isso terá que ser checado se o texto de ambos são iguais
// não a tag pois eu trocarei para que cada tag seja unica e gerada baseado só na
// 1 palavra do texto
function interpret(txt) {
	// convém comando para ler (em audio) o conteudo de uma entidade
	
	const words = txt.split(' ')
	const name = words.slice(2).join(" ")
	switch(words[0]) {
		case 'add':
			switch(words[1]) {
					// TODO: create way to prevent two cases of be instatied in the same place
					case 'actor':
					
						addEntityToProps(new Actor(20, 20, 40, 40, name))
						break;
						
					case 'activity':
						addEntityToProps(new Activity(name, 20, 20, 75, 50))
						break;
						
					case 'relation':
						// get entities by tag
						new Line()
						break
				}
			break;
	}
}

function addEntityToProps(entity) {
	const props = document.getElementById('select-props')
	const option = document.createElement('option')
	option.text = entity.tag
	
	for(let el of props.options)
		if (el.value == entity.tag)
			return
		
	props.add(option)
}

// ---------- ---------- ---------- //
// ---------- Ramu logic ---------- //
// ---------- ---------- ---------- //

// TODO: remove the hardcoded entities
new Activity("participei do seu podcast", 100, 100, 75, 50)
// para impedir de sair, aumentar todos os activities e diminuir o tamanho
// do texto e o max width de forma que ele não vaze
new Activity("participei do seu podcast participei do seu podcast", 100, 200, 75, 50)
const a = new Activity("emitir nota", 300, 200, 75, 50)
const g1 = new Actor(10,100, 40,40, 'user')
const g2 = new Actor(300, 300, 40, 40, 'adm')
const li = new Line(new Link(g1, a))
const li2 = new Include(new Link(g2, a))

function getEntity(e) {
	if (e.button != 1) // scroll
		return
	
	const bound = Ramu.canvas.getBoundingClientRect();
	const posX = e.clientX - bound.x - Ramu.canvas.clientLeft
	const posY = e.clientY - bound.y - Ramu.canvas.clientTop
	const rect = new Rect(posX, posY, 1, 1);
	let obj = null
	
	// search the MovableEntity object in the clicked position
	for (let i = 0; i < Ramu.gameObjs, obj = Ramu.gameObjs[i]; ++i) {
		if (!(obj instanceof MovableEntity))
			continue
		
		if (Ramu.Math.overlap(obj.toRect(), rect)){
			// LOGICA DE PEGAR AS INFORMAÇÕES AQUI
			addEntityToProps(obj)
		}
	}
}

window.onload = () => {
	const cmd = document.getElementById('command-input')
	new GameObj().update = function() {
		if (Ramu.onKeyDown('ctrl')) {
			cmd.focus();
		}
		
		if (Ramu.onKeyDown('enter') && document.activeElement == cmd) {
			interpret(cmd.value)
			cmd.value = ''
		}
	}
	
	const divCanvas = document.getElementsByClassName('div-canvas')[0]
	Ramu.init(divCanvas.clientWidth, 400, divCanvas)
	
	Ramu.canvas.addEventListener('mousedown', getEntity)
}

//https://www.w3schools.com/JSREF/tryit.asp?filename=tryjsref_select_add

// Ramu.debugMode = true

// como retirar o link entre dois atores? tem que remover a linha. Talvez percorrer nas linhas
// até achar aquela que tem os dois objs com a tag dos atores/atividades
