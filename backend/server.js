const express  =  require('express');


// Create express app
const app = express();

//routes
app.get('/',(req,res)=>{
    res.json({message: 'Welcome to the application'})
})

//listen for requests
app.listen(process.env.PORT, () => {

    console.log('Server is running on port 4000');
});