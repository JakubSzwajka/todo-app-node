import express from "express";
import cors from 'cors';
import todoRouter from "./routes/todo";


const app = express();
const port = process.env.PORT || 3001;



app.use(cors());
app.use(express.json());

app.use('/api', todoRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
