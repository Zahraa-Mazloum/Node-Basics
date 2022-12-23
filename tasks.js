
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("************************************")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n'|| text==='exit\n') {
    quit();
  }
  else if(text.startsWith('hello')){
    hello(text);
  }
  else if(text==='help\n'){
    help(text)

  }
  else if(text.startsWith('add'))  {
    add(text);
  }
  else if(text==='list\n'){
    list()

  }
  else if(text.startsWith('remove')){
    remove(text)

  }
  else{
    unknownCommand(text);
  }
}
let task=["eat","sleep","code","repeat"]

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 * @returns {void}
 */
function hello(text){ 
  console.log(text.trim()+"!")
}

/**
 * Return thr list of commands
 *
 * @returns {void}
 */
function help(){
  console.log('the list of commands : \n1.hello + if you want to add something\n2.quit\n3.exit\n')
}

function list() {
  task.map((item, number) => {
    number++;
    console.log(`${number}. ${item}`)
  })
}

function add(newTask) {
  if (newTask === "add\n") {
    console.log('Please you need to specify your task \n type help if you need a hint');
  } else {
    task.push(newTask.replace("add", " ").trim());
    console.log('your new task has been recorded!')
  }
}

function remove(rm){
  if (rm==='remove\n'){
  task.pop()
  console.log('your last task has been removed')
  }
  else{
    let index=rm.replace("remove",'').trim()-1
    if(index<0||index>task.length-1){
      console.log(`task number ${index+1} is not in the task list`)
    }
    else{task.splice(index,1) 
      console.log(`your ${index+1} task has been removed`)}
    }

}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('sad to see you quitting, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Zahraa Mazloum")
