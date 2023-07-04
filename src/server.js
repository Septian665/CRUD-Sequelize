import express  from "express";
import dotenv from "dotenv";
import routeUser from "./routes/user.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(routeUser);

app.listen(PORT, () => {
   console.log(`server running http://${process.env.SERVER}:${PORT}`);
});
