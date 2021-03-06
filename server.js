const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

const searchGoogle = require('./scrapper/searchGoogle');
const searchForLinks = require("./scrapper/searchInLinks");
const searchInPage = require("./scrapper/searchInLinks");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/search', async (req, res) => {
    const dataValue = req.body.post
    console.log(dataValue)
    const dataSearchUrls = await searchGoogle(dataValue)
    console.log(dataSearchUrls)
    const searchData = []
    console.log(searchData)
    if (dataSearchUrls) {
        for(let link of dataSearchUrls){
            const value = await searchInPage(link.url)
            searchData.push(value)
        }
    }
    const value = await searchInPage(dataSearchUrls)
    searchData.push(value)
    console.log(value)
    res.send(searchData);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));