const yargs = require('yargs')
const notesReader = require('./notes.js')

yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },

        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },

    handler: (argv) => {
        notesReader.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Remove Title',
            demandOption: true,
            type: 'string'
        }
    },

    handler: (argv) => {
        notesReader.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe: 'Listing the notes',

    handler: () => {
        notesReader.listNotes()
    }
})

yargs.command({
    command:'read',
    describe: 'Reading a note',
    builder: {
        title:{
            describe: 'Read Titles',
            demandOption: true,
            type: 'string'
        }
    },

    handler: (argv) => {
        notesReader.readNotes(argv.title)
    }
})

yargs.parse()
