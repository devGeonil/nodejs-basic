setInterval(()=>{
        throw new Error('Destroy Server');
},2000)

setInterval(()=>{
    console.log("HELLO");
},3000)


process.on("uncaughtException", (e)=>{
    console.log(e)
});