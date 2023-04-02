import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
    response.status(200).json({
        message: "hello from server"
    })
})

const start = () => {
    try {
        app.listen(5000, () => {
            console.log(`App is listening on url: http://localhost:5000`);
        })
    }
    catch (error) {
        console.log(error);
    }
}

start();