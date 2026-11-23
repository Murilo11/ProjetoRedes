import express from "express";
import path from "path";
import alunoRoutes from "./routes/alunoRoutes";

const app = express();

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Arquivos estáticos (CSS, imagens e JavaScript)
app.use(express.static(path.join(__dirname, "public")));

app.use("/", alunoRoutes);

export default app;