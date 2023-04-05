import app from "./src/app.js";

const port = process.env.PORT || 8000;

//APP DEVIDO AO IMPORT

app.listen(port, () => { 

     console.log(`servidor escutando em http://localhost:${port}`)
})