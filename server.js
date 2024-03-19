const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");
const keys = require("./config/key");


// mongoose.connect("mongodb+srv://hamza:p9kmTfuAjUngXVem@cluster0.rbauogk.mongodb.net/carServiceDb?retryWrites=true&w=majority&appName=Cluster0").then((con) => {
//   console.log(":::::::::::::: Connection Success !!! :::::::::::::::::::");
// });


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
