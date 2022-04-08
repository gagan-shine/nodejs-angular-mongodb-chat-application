'use strict';

let mongoURI = "";

if (process.env.NODE_ENV === "test") {
    mongoURI = `mongodb://${process.env.mongo_test_user}:${process.env.mongo_test_password}@localhost:27017/${process.env.mongo_test_db}`;
} else if (process.env.NODE_ENV === "dev") {
    mongoURI = `mongodb+srv://whim:1Sde1qo8uPDzVBOq@cluster0.7ieqs.mongodb.net/tokumaru?retryWrites=true&w=majority`
    // mongoURI = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
} else if (process.env.NODE_ENV === "local") {
    mongoURI = `mongodb://localhost:27017/wiot360`;
}
console.log("1111111111111111111111")
console.log("2222222222222222222222222222", mongoURI)
console.log("33333333333333333333333333333333", process.env.NODE_ENV)

module.exports = {
    mongo: mongoURI
};

