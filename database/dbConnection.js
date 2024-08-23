const { connect } = require("mongoose");

module.exports.dbConnection = async () => {
    // connect('mongodb://localhost:27017/sarahah')
    connect('mongodb+srv://aemail2260:NKK1wE5v6TYw0foM@node.rtr1h.mongodb.net/sarahah')
        .then(() => {
            console.log('Database connected');
        })
        .catch((error) => {
            console.log("Database connection error: ", error);
        })
}