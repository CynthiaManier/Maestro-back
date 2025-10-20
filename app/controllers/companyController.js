import { User, Projet, Company, Preview, Genre } from "../models/index.js";

const companyController = {
    
    // GET /api/admin/company
    findAll: async (req, res) => {
        try {
            // je vais dans la table Company et je te demande de me renvoyer toutes les company
            const companies = await Company.findAll();
            if (companies.length > 0) {
                res.json(companies);
            } else {
                res.status(404).json({message : "Aucune entreprise trouvée"});
            }
        } catch (error) {
            console.error("Erreur lors de la recherche des entreprises", error);
            res.status(500).json({error: "Erreur interne du serveur"});
        }
    }


}

export default companyController;