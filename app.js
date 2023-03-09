const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from express using elastic beanstack..'})
})

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})