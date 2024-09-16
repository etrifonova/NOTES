// the try statement lets you test a block of code for errors; the catch statement lets you handle the error; the throw statement lets you create custom errors; the finally statement lets you execute code after try and catch regardless of the result

try {
  console.log('Start of try runs');
  unicycle;
  console.log('End of my runs -- never reached');
} catch(err) {
  console.log('Error has occurred ' + err); //err is an object which has two main properties - name and message
} finally {
  console.log('This is always run')
}

console.log('...Then the execution continues');