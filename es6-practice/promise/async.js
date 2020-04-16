const sleep = t=> {
    // return setTimeout(()=> t)
    return new Promise(resolve => setTimeout(resolve,t))
}

const start = async() => {
    const startTime = new Date().getTime();
    for(let i=0; i<1000000; i++){
        console.log(i);
        await sleep(1000);
    }

    const endTime = new Date().getTime();
    console.log((endTime-startTime)/1000 + "sec");
}
start();