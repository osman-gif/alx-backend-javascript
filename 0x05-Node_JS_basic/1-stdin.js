// A program that reads from stdin and writes to stdout.
process.stdout.write('Welcome to Holberton School, what is your name?\n')
process.stdin.on('readable', function(){
    input = process.stdin.read()
    if (input !== null){
        process.stdout.write('Your name is: ' + input)
    }
    
})
process.stdin.on('end', function(){
    process.stdout.write('This important software is now closing\n')
})