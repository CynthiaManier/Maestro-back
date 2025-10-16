import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database.js";

class Projet extends Model {}

Projet.init(
    {
        // Identifiant unique du projet
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        // Nom du projet
        name: {
            type: DataTypes.STRING,
            allownull: false,
        },

        // Statut du projet(à commencer, en cours, en attente de retour, terminé)
        status: {
            type: DataTypes.ENUM(
                "à commencer",
                "en cours",
                "en attente de retour",
                "terminé",
                "en attente d'acceptation"
            ),
            defaultValue: "en attente d'acceptation",
        },

        // Date limite du projet(facultative)
        deadline: {
            type: DataTypes.DATEONLY,
            allownull: true,
        },
    },
    {
        sequelize,
        modelName: "Projet",
        tableName: "projet",
        // On pourra avoir la date de création et de modification du projet
        // (Du coup pas de champs "date de création du projet" dans la table -> remplacé par "created_at" ).
        timestamps: true,
    }
);

export default Projet;
