function sayHello(name){
    // if(name === undefined){
    //     name = "default";
    // }
    return "hello" + (name || "default");
}
console.log(sayHello());