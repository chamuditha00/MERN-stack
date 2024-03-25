require('dotenv').config(); 
const express  =  require('express');
const pagesroutes = require('./routes/pages');

// Create express app
const app = express();

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
}
)
app.use(pagesroutes)

app.get

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});
