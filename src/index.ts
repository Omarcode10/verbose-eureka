import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Loader.shared.add({url: "./dino.png", name: "myDino"})
Loader.shared.add({url: "./clampy.png", name: "clampy.png"})
Loader.shared.add({url: "./monster.png", name: "monster.png"})


Loader.shared.onComplete.add(()=>{

	const clampy: Sprite = Sprite.from("monster.png");

	console.log("Hola Mundo",clampy.width, clampy.height );
	
	clampy.anchor.set(0.5);
	
	clampy.x = 350;
	clampy.y = 200;
	
	app.stage.addChild(clampy);


})


Loader.shared.load();