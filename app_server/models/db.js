const { mongo } = require('mongoose');
const mongoose = require('moongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;
const readLine = require('readline');

// avoid 'current current server discovery and Monitoring engine is deprecated'
mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true
    }), 1000)
}

mongoose.connection.on('connected', () => {
    console.log('connected to mongo');
});

//bring in the travel shema
require('./travel')