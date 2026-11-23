import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = Number(process.env.PORT) || 8004;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
