import * as dotenv from "dotenv";
import express from "express";
import sequelize from "./app/db/database.js";
import Description from "./app/models/descriptionModel.js";
import MessageContact from "./app/models/messageContactModel.js";
import { User, Projet, Company, Preview, Genre } from "./app/models/index.js";
import router from "./app/routers/router.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Permet de décoder le corps au format JSON de la requête HTTP
app.use(express.json());

app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true, // Autorise lʼenvoi automatique des cookies
    })
);

<<<<<<< HEAD
app.use('/imageUploads', express.static('app/imageUploads'));
=======
app.use('/uploads', express.static('uploads'));

app.use('/imagesUploads', express.static('imageUploads'));
>>>>>>> 74be6adbae9878bfca8e77dc585159ab1c36f8a3

app.use(router);

// Route racine
app.get("/", (req, res) => {
    res.send("Bienvenue sur l'API Maestro !");
});

// Connexion à la base et lancement du serveur
async function main() {
    try {
        await sequelize.authenticate();
        console.log("✅ Connexion à la base réussie");

        app.listen(port, () => {
            console.log(`🚀 Serveur lancé sur http://localhost:${port}`);
        });
    } catch (error) {
        console.error("❌ Erreur de connexion à la base :", error);
    }
}

main();
