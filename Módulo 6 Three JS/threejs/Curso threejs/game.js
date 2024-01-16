// Configurando a cena
const scene = new THREE.Scene();
// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
// Renderizador
const renderer = new THREE.WebGLRenderer();
// Tamanho da tela
renderer.setSize(window.innerWidth, window.innerHeight);
// Linkando o renderizador
document.body.appendChild(renderer.domElement);

// Instanciando o loader
const loader = new THREE.GLTFLoader();
/*
// Carregando a árvore
loader.load("../tree/scene.gltf",function(gltf){
	scene.add(gltf.scene);
	gltf.scene.scale.set(16, 16, 16);
	gltf.scene.position.set(0, -6, -12);
})*/

// Classe Player
class Player{
	constructor(){
		const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
		const material = new THREE.MeshBasicMaterial({color: 0xffffff});
		const player = new THREE.Mesh(geometry,material);
		scene.add(player);
		this.player = player;

		player.position.x = 3;
		player.position.y = 0;
		player.position.z = 0;

		this.playerInfo={
			positionX: 6,
			velocity: 0
		}
	}

	anda(){
		this.playerInfo.velocity = 0.1;
	}

	update(){
		this.checa();
		this.playerInfo.positionX -= this.playerInfo.velocity;
		this.player.position.x = this.playerInfo.positionX
	}

	para(){
		this.playerInfo.velocity = 0;
	}

	checa(){
		if(this.playerInfo.velocity>0 && !tadecostas){
		    text.innerText = "Você perdeu!"
			gamestatus = "fimdejogo"
		}
		if(this.playerInfo.positionX < -6){
			text.innerText = "Você ganhou!"
			gamestatus = "fimdejogo"
		}
	}
}


function delay(ms){
	return new Promise(resolve => setTimeout(resolve,ms));
}

// Classe boneca
class boneca{
	constructor(){
		loader.load("../model/scene.gltf", (gltf)=>{
		scene.add(gltf.scene);
		gltf.scene.scale.set(0.4, 0.4, 0.4);
		gltf.scene.position.set(0, -1, -1);
		this.Boneca1 = gltf.scene;
})
	}

	praTras(){
		gsap.to(this.Boneca1.rotation, {y:-3.15, duration: 1});
		setTimeout(()=>tadecostas=true,150);
	}

	praFrente(){
		gsap.to(this.Boneca1.rotation, {y:0, duration: 1});
		setTimeout(()=>tadecostas=false, 450);
	}

	async start(){
		this.praTras();
		await delay((Math.random()*1000)+2000);
		this.praFrente();
		await delay((Math.random()*1000)+1000);
		this.start();
	}
}

let Player1 = new Player();
let Boneca1 = new boneca();
const text = document.querySelector(".text");
const tmaximo = 100;
let gamestatus = "esperando";
let tadecostas = true;

async function init(){
	await delay(500);
	text.innerText = "Começando em 3";
	await delay(500);
	text.innerText = "Começando em 2";
	await delay(500);
	text.innerText = "Começando em 1";
	await delay(500);
	text.innerText = "VAI!";
	startGame();
}

function startGame(){
	gamestatus = "jogando"
	Boneca1.start();
	setTimeout(()=>{
		if(gamestatus != "fimdejogo"){
			text.innerText = "Timeout!"
			gamestatus = "fimdejogo"
		}
	}, tmaximo*1000)
}

init()


// Adicionando luz
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

renderer.setClearColor(0x8601af,1);

// Configurar a profundidade da camera
camera.position.z = 5;

function animate(){
	if(gamestatus == "fimdejogo") return
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	Player1.update();
}

animate();

// Capturando a alteração da resolução
window.addEventListener('resize', onWindowResize, false)

// função que torna a tela responsiva
function onWindowResize(){
	camera.aspect = window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight)
}

// pressiona a tecla
window.addEventListener('keydown', function(e){
	if(gamestatus != "jogando") return;
	if(e.keyCode == 37){
		Player1.anda();
	}
})

// libera a tecla
window.addEventListener('keyup',function(e){
	if(e.keyCode == 37){
		Player1.para()
	}
})