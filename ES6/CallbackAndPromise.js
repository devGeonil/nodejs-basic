User.findOne("user", (err, user)=>{
    if(err){
        return console.error(err);
    }
    console.log(user);
    User.update("user",(err, updateUser) => {
        
    });
});

//콜백 헬 발생.
console.log('Found User')
