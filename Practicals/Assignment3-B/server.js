const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Song = require('./models/song');

const app = express();

app.use(bodyParser.json());

app.set('view engine', 'ejs');

mongoose.connect("mongodb://127.0.0.1:27017/music")
.then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(8080, () => console.log("🚀 Server running"));
});

/* ===== INSERT ===== */
app.get('/insert', async (req, res) => {
    await Song.insertMany([
        { songname: "Tum Hi Ho", film: "Aashiqui 2", music_director: "Mithoon", singer: "Arijit Singh" },
        { songname: "Kesariya", film: "Brahmastra", music_director: "Pritam", singer: "Arijit Singh" },
        { songname: "Malang", film: "Malang", music_director: "Ankit Tiwari", singer: "Ved Sharma" },
        { songname: "Kal Ho Na Ho", film: "KHNH", music_director: "Shankar-Ehsaan-Loy", singer: "Sonu Nigam" },
        { songname: "Channa Mereya", film: "ADHM", music_director: "Pritam", singer: "Arijit Singh" }
    ]);
    res.send("Inserted 5 songs");
});

/* ===== ALL SONGS ===== */
app.get('/songs', async (req, res) => {
    const data = await Song.find();
    res.render('table', { songs: data, title: "All Songs" });
});

/* ===== BY DIRECTOR ===== */
app.get('/director/:name', async (req, res) => {
    const data = await Song.find({ music_director: req.params.name });
    res.render('table', { songs: data, title: "Songs by Director" });
});

/* ===== DIRECTOR + SINGER ===== */
app.get('/filter', async (req, res) => {
    const { director, singer } = req.query;
    const data = await Song.find({ music_director: director, singer });
    res.render('table', { songs: data, title: "Director + Singer" });
});

/* ===== SINGER + FILM ===== */
app.get('/songfilter', async (req, res) => {
    const { singer, film } = req.query;
    const data = await Song.find({ singer, film });
    res.render('table', { songs: data, title: "Singer + Film" });
});

/* ===== DELETE ===== */
app.get('/delete/:name', async (req, res) => {
    await Song.deleteOne({ songname: req.params.name });
    res.send("Deleted");
});

/* ===== UPDATE ===== */
app.get('/update/:name', async (req, res) => {
    await Song.updateOne(
        { songname: req.params.name },
        { actor: "Ranbir Kapoor", actress: "Alia Bhatt" }
    );
    res.send("Updated");
});