const { connect } = require("mongoose");

module.exports.dbConnection = async () => {
    connect('mongodb://localhost:27017/sarahah')
        .then(() => {
            console.log('Database connected');
        })
        .catch((error) => {
            console.log("Database connection error: ", error);
        })
}