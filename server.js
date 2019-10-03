const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const axios = require('axios');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3030;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebookdb");


app.get('/sample_route', (req, res) => {
  console.log('hit search route');
  res.send('some sample text');
});

app.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});


if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "client")));
    // Handle React routing, return all requests to React app
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
};

// Start the API server
app.listen(PORT, function() {
    console.log("app running on http://localhost:" + PORT);
});