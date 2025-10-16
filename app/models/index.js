import User from "./userModel.js";
import Company from "./compagnyModel.js";
import Projet from "./projetModel.js";

// Associations
// as = alias (C'est le nom qu'on va utiliser pour acceder à l'autre table)

// Un utilisateur demande 0 ou plusieurs projet
// "Un User a plusieur Projet et le lien entre User et Projet c'est user_id"
User.hasMany(Projet, {
    foreignKey: "user_id",
    as: "listProjets",
});

// Un projet est demandé par 1 seul utilisateur
// "Un Projet Appartient à un User et le lien entre User et Projet c'est aussi user_id"
Projet.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
});

// Un utilisateur travaille dans une seul entreprise
// "Un User Appartient à une Company et le lien entre User et company c'est company_id"
User.belongsTo(Company, {
    foreignKey: "company_id",
    as: "company",
});

// Une entreprise peut avoir plusieurs utilisateurs
// "Une Company a plusieur User et le lien entre Company et User c'est company_id"
Company.hasMany(User, {
    foreignKey: "company_id",
    as: "listUsers",
});

export { User, Projet, Company };
