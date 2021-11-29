function ClothingItem(name, source, tags) {
    this.name = name
    this.source = source
    this.tags = tags
}


//iterate through folder assests and print out filenames
const fs = require('fs');
const path = require('path');
const sourceDirectory = '../../public/assets';
const srcPath = 'assets';

(async () => {
    try {
        const files = await fs.promises.readdir(sourceDirectory)

        for (const file of files) {
            const filepath = path.join(sourceDirectory, file)
            const fileSrcPath = path.join(srcPath, file)

            const stat = await fs.promises.stat(filepath)
            if (stat.isFile())
                console.log(`${fileSrcPath} is a file`)
        }
    }
    catch (e) {
        console.error('We have thrown an error: ', (e))
    }
}) ();