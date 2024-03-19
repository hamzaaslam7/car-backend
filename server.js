const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect(process.env.mongoURI).then((con) => {
  console.log(":::::::::::::: Connection Success !!! :::::::::::::::::::");
});


const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('UnHandel rejection');
    server.close(() => {
        process.exit(1);
    });
});
