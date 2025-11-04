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
                res.status(404).json({ message: "Aucune entreprise trouvée" });
            }
        } catch (error) {
            console.error("Erreur lors de la recherche des entreprises", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // GET /api/company/companyProfile
    companyProfile: async (req, res) => {
        try {
            const user = await User.findByPk(req.user.id);
            console.log("companyControlleur log", user.company_id);
            const company = await Company.findByPk(user.company_id);
            if (!company) {
                return res
                    .status(404)
                    .json({ message: "Entreprise introuvable" });
            }
            return res.json({
                message: "Profil de l'entreprise récupéré",
                company: company,
            });
        } catch (error) {
            console.error(
                "Erreur lors de la recupération des informations de l'entreprise : ",
                error
            );
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // POST /api/company
    create: async (req, res) => {
        // console.log(req);
        console.log(req.body);

        try {
            const user = await User.findByPk(req.user.id);
            const datas = req.body;
            console.log(datas);
            const newCompany = await Company.create(datas);
            await newCompany.addListUsers([user]);
            console.log(req.body);
            res.status(201).json(newCompany);
        } catch (error) {
            console.error(
                "Erreur lors de la création de l'entreprise : ",
                error
            );
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // PATCH /api/company/:id
    update: async (req, res) => {
        try {
            console.log(req.body);
            const datas = req.body;
            const user = await User.findByPk(req.user.id);
            console.log("companyControlleur log", user.company_id);
            const company = await Company.findByPk(user.company_id);
            if (!company) {
                return res
                    .status(404)
                    .json({ message: "Entreprise non trouvée" });
            }
            await company.update(datas);
            res.json(company);
        } catch (error) {
            console.error(
                "Erreur lors de la modification de l'entreprise : ",
                error
            );
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;
            console.log(id);
            const company = await Company.findByPk(id);
            if (!company) {
                return res
                    .status(404)
                    .json({ message: "Entreprise non trouvée" });
            }
            await company.destroy();
            res.status(200).json({ message: "Entreprise supprimée" });
        } catch (error) {
            console.error(
                "Erreur lors de la suppression de l'entreprise : ",
                error
            );
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },
};

export default companyController;
