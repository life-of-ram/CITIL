require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//mongoDB connection//
mongoose.connect(process.env.URI);
mongoose.connection.once('connected', () => {
    console.log(`Connected to MongoDB`);
});

//mongoose schemas//
const careerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    interests: {
        type: String,
        required: true
    },
    others: {
        type: String,
        required: true
    }
});
const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

//mongoose models//
const Career = mongoose.model('Career', careerSchema);
const Subscribe = mongoose.model('Subscribe', subscriptionSchema);

//get routes//
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/fun.html", (req, res) => {
    res.sendFile(__dirname + "/fun.html");
});
app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/portfolio.html", (req, res) => {
    res.sendFile(__dirname + "/portfolio.html");
});
app.get("/facilities.html", (req, res) => {
    res.sendFile(__dirname + "/facilities.html");
});
app.get("/about.html", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});
app.get("/incubation.html", (req, res) => {
    res.sendFile(__dirname + "/incubation.html");
});
app.get("/events.html", (req, res) => {
    res.sendFile(__dirname + "/events.html");
});
app.get("/career.html", (req, res) => {
    res.sendFile(__dirname + "/career.html");
});
app.get("/subscribe.html", (req, res) => {
    res.sendFile(__dirname + "/subscribe.html");
});
app.get("/subscribe", (req, res) => {
    res.sendFile(__dirname + "/subscribe.html");
});
app.get("/events/Startup20X.html", (req, res) => {
    res.sendFile(__dirname + "/events/Startup20X.html");
});
app.get("/events/Startup_Thiruvizha.html", (req, res) => {
    res.sendFile(__dirname + "/events/Startup_Thiruvizha.html");
});
app.get("/events/Workshop_On_Entrepreneurship.html", (req, res) => {
    res.sendFile(__dirname + "/events/Workshop_On_Entrepreneurship.html");
});
app.get("/events/Catapult.html", (req, res) => {
    res.sendFile(__dirname + "/events/Catapult.html");
});
app.get("/events/Ideathon.html", (req, res) => {
    res.sendFile(__dirname + "/events/Ideathon.html");
});
app.get("/events/ScaleUp_StartUp.html", (req, res) => {
    res.sendFile(__dirname + "/events/ScaleUp_StartUp.html");
});
app.get("/events/Impexpo.html", (req, res) => {
    res.sendFile(__dirname + "/events/Impexpo.html");
});
app.get("/events/Self_Reliant_Bharath.html", (req, res) => {
    res.sendFile(__dirname + "/events/Self_Reliant_Bharath.html");
});
app.get("/events/Makeathon.html", (req, res) => {
    res.sendFile(__dirname + "/events/Makeathon.html");
});

//post routes//
app.post('/career', async (req, res) => {
    try {
        const career = new Career({
            name: req.body.name,
            number: req.body.number,
            email: req.body.address,
            experience: req.body.experience,
            interests: req.body.interests,
            others: req.body.others
        });
        console.log(req.body.name);
        const savedApplication = await career.save();
        res.status(201).json({ message: 'Application submitted successfully', data: savedApplication });;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/subscribe', async (req, res) => {
    try {
        const subscribe = new Subscribe({
            name: req.body.name,
            number: req.body.number,
            email: req.body.address,
        });
        const savedSubscription = await subscribe.save();
        res.status(201).json({ message: 'Application submitted successfully', data: savedSubscription });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//port connection//
app.listen(3000, function () {
    console.log("Server Up");
});