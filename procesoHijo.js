
const { exec } = require('child_process');

exec('node consola', (err, stdout, sterr) => {
    if (err)  {
        console.error(err);
        return false;
    }

    console.log(stdout);

})

// child_process module is used to execute a shell commmand, 'dir' in this case, and capture its output.
// the function takes a callback as its second argument.This callback will be executed once the command execution is complete.
// Inside the callback, the code checks if there's an error ('err') teturned for the 'exec' function. 
// if there an error, it's printed to the console using 'console.error()' 
// if there is not error, the script prints the standard output(stdout) of the executed commandto the console using 'console.log' 
// The 'stdout' variable contains the output of the shell command, which in this case would in this case would be the list of files
// and directories in the current directory. 