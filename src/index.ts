import express from "express";
import cors from 'cors';
import sequelize from "./database";
import todoRouter from "./routes/todo";


const app = express();
const port = process.env.PORT || 3001;


(async () => {
    try {
        await sequelize.authenticate();
        console.log('DB Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();


app.use(cors());
app.use(express.json());

app.use('/todos', todoRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
