import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        // for (let i = 0; i < 1000; i++) {
        //     const fish = new Actor()
        //     fish.graphics.use(Resources.Fish.toSprite())
        //     fish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
        //     fish.vel = new Vector(Math.random() * 200 - 100 , Math.random() * 200 - 100)
        // fish.events.on("exitviewport", (e) => this.fishLeft(e))
        //     this.add(fish)
        // }




        //bg 
        const bg = new Actor()
        const sprite = Resources.bliss.toSprite()
        bg.graphics.use(sprite)
        bg.pos = new Vector(0, 0)
        bg.scale = new Vector(10, 6)
        this.add(bg)


        for (let i = 0; i < 3; i++) {
            const fish = new Actor()
            fish.graphics.use(Resources.Jonesy.toSprite())
            fish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            fish.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)
            fish.scale = new Vector(0.2, 0.2)
            this.add(fish)
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
        }

        for (let i = 0; i < 3; i++) {
            const fish = new Actor()
            fish.graphics.use(Resources.sans.toSprite())
            fish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            fish.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)
            fish.scale = new Vector(0.2, 0.2)
            this.add(fish)
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
        }

        for (let i = 0; i < 5; i++) {
            const fish = new Actor()
            fish.graphics.use(Resources.shark.toSprite())
            fish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            fish.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)
            fish.scale = new Vector(0.2, 0.2)
            this.add(fish)
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
        }

        for (let i = 0; i < 10; i++) {
            const fish = new Actor()
            fish.graphics.use(Resources.spongebob.toSprite())
            fish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            fish.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)
            fish.scale = new Vector(0.4, 0.4)
            this.add(fish)
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
        }

        for (let i = 0; i < 10; i++) {
            const fish = new Actor()
            fish.graphics.use(Resources.patrick.toSprite())
            fish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            fish.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)
            fish.scale = new Vector(0.3, 0.3)
            this.add(fish)
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
        }

        for (let i = 0; i < 10; i++) {
            const fish = new Actor()
            fish.graphics.use(Resources.squidward.toSprite())
            fish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            fish.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)
            fish.scale = new Vector(0.08, 0.08)
            this.add(fish)
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
        }

    }

    fishLeft(e) {
        e.target.pos = new Vector(Math.random() * 1280, Math.random() * 720)
    }


}

new Game()
