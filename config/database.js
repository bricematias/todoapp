const mongoose = require("mongoose")
mongoose.set("strictQuery", true)

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then( () => console.log("Connecté to mongoose"))
.catch((err) => console.log(" Not Conected "))

