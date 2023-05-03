const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const foodData = require('./data/foodData.json')
const priceList = require('./data/priceList.json')

app.use(cors())


app.get('/', (req, res) => {
    res.send('The Eaters server is runnig')
})

app.get('/foods', (req, res) => {
    res.send(foodData)
})

app.get('/foods/:id', (req, res) => {
    const id = req.params.id;
    const selectedFood = foodData.find(f => f._id === id);
    res.send(selectedFood)
})

app.get('/price', (req, res) => {
    res.send(priceList)
})

app.listen(port, () => {
    console.log('The eaters server is runnign on port:', port)
})