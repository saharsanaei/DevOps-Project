import express from ('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello, Word!');
});

app.listen(port, () => {
    console.log(`Server is running ot http://localhost:${port}/`);
});