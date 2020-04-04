const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes...";
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((notes) => notes.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
    } else{
        console.log(chalk.red.inverse('No note found!'))
    }

    savingNotes(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse(getNotes()))

    notes.forEach((notes) => {
        console.log(notes.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()

    const noteFound = notes.find((noteFound) => noteFound.title === title)
    if(noteFound){
        console.log(chalk.green.inverse('Note found!'))
        console.log(chalk.green.inverse(noteFound.title))
        console.log(noteFound.body)
    } else{
        console.log(chalk.red.inverse('No note found!'))
    }
}


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicatesNotes = notes.find((note) => note.title === title)

    if(!duplicatesNotes){
        notes.push({
            title: title,
            body: body
        })
    
        savingNotes(notes)

        console.log('New note added!')
    } else{
        console.log('Note title taken!')
    }
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const savingNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
} 