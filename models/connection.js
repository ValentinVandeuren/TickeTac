const mongoose = require('mongoose');

const options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect('mongodb+srv://admin:eqwqvrbzM0D2KsCY@cluster0.1lynr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', options,        
    function(err) {
      console.log(err);
    }
);
mongoose.connection.on("connected", () => console.log("La DB est connectée!"));