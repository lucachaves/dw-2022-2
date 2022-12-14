import express from "express";
import morgan from "morgan";

import routes from "./routes.js";

const port = 3000;

const app = express();

app.use(morgan("tiny"));

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
