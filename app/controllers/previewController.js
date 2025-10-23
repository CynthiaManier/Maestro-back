import { User, Projet, Company, Preview, Genre } from "../models/index.js";

const previewController = {

    findAll: async (req, res) => {
        try {
            const previews = await Preview.findAll();
            if (previews.length > 0) {
                res.json(previews);
            } else {
                res.status(404).json({message : "Aucun extrait trouvé"});
            }
        } catch (error) {
            console.error("Erreur lors de la recherche des extraits", error);
            res.status(500).json({error: "Erreur interne du serveur"});
        }
    },

    findByFilter: async (req, res) => {
        console.log('in findByFilter');
        console.log(req.query.genre);
        console.log(req.query.orderByDate);
        
        try {
            // if ...
            const { genre } = req.query;
            if (genre) {
                console.log('in genre');
                
                const previews = await Preview.findAll({
                    include: [{
                        model: Genre,
                        as: "listGenres",
                        where: {
                            label: genre
                        }
                    }],
                    order: [['date', 'DESC']]
                });
                res.json(previews);
            } else {
                console.log("dans le if");
                const previews = await Preview.findAll({
                    order: [['date', 'DESC']]
                })
                console.log("après la recherche");
                
                res.json(previews);
                console.log("après res.json");
                
            };

            
        } catch (error) {
            console.error("Erreur lors de la recherche des extraits filtrés : ", error);
            res.status(500).json({error: "Erreur interne du serveur"});
        }
    },

    addPreview: async (req, res) => {

        const link = `${req.file.destination}${req.file.filename}`;
        req.body.link = link;
        // Je crois : ne pas oublier le title (et les autres champs) qui seront dans le req.body ?
        const datas = req.body;
        // dans le model Preview, ajout du link du fichier :
        const newUpload = await Preview.create(datas);
        res.status(201).json(newUpload);
    }


}


export default previewController;