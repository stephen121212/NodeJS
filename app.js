//const validator = require('validator')
//const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
//const add = require('./utils.js')
const notesReader = require('./notes.js')

//fs.writeFileSync('Hello.txt', 'Hello my name is Stephen')
//fs.appendFileSync('Hello.txt', ' Gay')

//const string = notesReader()
//const sum = add(4,5)
//console.log(sum)
//console.log(string)
//console.log(validator.isEmail('andrew/example.com'))
//console.log(chalk.green.bold.inverse.italic('Success!'))
//console.log(chalk.green.bold.inverse.italic('Success!'))


/* Challenge: Append a message to notes.txt
1 Use appendFileSync to append to a file
2 Run the script
3 Check your work by opening the file and viewing the appended text
*/


/* Challenge: Use the chalk library in your project
1 Install version 2.4.1 of chalk
2 Load chalk into app.js
3 Use it to print the string "Success" to the console in green
4 Test your work
Bonus: Use docs to mess around with other styles. Make text bold and inverted.
*/

console.log(process.argv)
//How to access arg arguments given into command
const command = process.argv[2]

if(command === 'add'){
    console.log('Adding note!')
} else if(command === 'remove'){
    console.log('Removing note!')
}
