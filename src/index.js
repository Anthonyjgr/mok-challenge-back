import app from "./app.js";
import { sequelize } from "./db/db.js";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida exitosamente");

    await sequelize.sync({ force: false });

    app.listen(3000, () => {
      console.log("Servidor iniciado en el puerto 3000");
    });
  } catch (error) {
    console.log("Error al conectar a la base de datos:", error);
  }
}

main();
