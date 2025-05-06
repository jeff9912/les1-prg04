import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Jonesy: new ImageSource('images/Survivalist_Jonesy_Epic.png'),
    bliss: new ImageSource('images/bliss.png'),
    sans: new ImageSource('images/sans.png'),
    shark: new ImageSource('images/shark.png'),
    squidward: new ImageSource('images/squidward.png'),
    spongebob: new ImageSource('images/spongebob.png'),
    patrick: new ImageSource('images/patrick.png'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }