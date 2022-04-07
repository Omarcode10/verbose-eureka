import { Application, Container, Loader, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720 
});

window.addEventListener("resize", ()=>{

	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const gamewidth = Math.round(app.screen.width * scale);
	const gameheight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gamewidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameheight) / 2);


	app.view.style.width = gamewidth + "px";
	app.view.style.height = gameheight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";


	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";

})

window.dispatchEvent(new Event("resize"));


Loader.shared.add({url: "./dino.png", name: "Dino"})
Loader.shared.add({url: "./dinohat.png", name: "Hat"})



Loader.shared.onComplete.add(()=>{
	const dino: Sprite = Sprite.from("/dino.png");
	


	
	const hat: Sprite  = Sprite.from("Hat");

	hat.position.set(60,60);
	hat.scale.set(0.1)
	hat.rotation = -50;

	const dinoWithHat: Container = new Container ();

	dinoWithHat.addChild(dino);
	dinoWithHat.addChild(hat);


	dinoWithHat.scale.set(0.4);
    dinoWithHat.x = 400;
	dinoWithHat.y = 200;

	console.log(hat.toGlobal(new Point()));
	console.log(hat.parent.toGlobal(hat.position));


	app.stage.addChild(dinoWithHat);

})


Loader.shared.load();