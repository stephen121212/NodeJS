const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return "Your notes...";
}

const removeNote = function(title){
    const notes = loadNotes()

    const notesToKeep = notes.filter(function(notes){
        return notes.title !== title   
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
    } else{
        console.log(chalk.red.inverse('No note found!'))
    }

    savingNotes(notesToKeep)
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicatesNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicatesNotes.length === 0){
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

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const savingNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
} 