function ClothingItem(name, source, tags) {
    this.name = name
    this.source = source
    this.tags = tags
}


//iterate through folder assests and print out filenames
// create ClothingItem object
const fs = require('fs');
const path = require('path');
const sourceDirectory = '../assets';

(async () => {
    try {
        const files = await fs.promises.readdir(sourceDirectory)

        for (const file of files) {
            const filepath = path.join(sourceDirectory, file)

            const stat = await fs.promises.stat(filepath)
            if (stat.isFile())
                console.log(`${file} is a file at path ${filepath}`)
                const clothingItem = new ClothingItem(file, filepath, [])
                console.log(clothingItem)
                
        }
    }
    catch (e) {
        console.error('We have thrown an error: ', (e))
    }
}) ();