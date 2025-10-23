import multer from "multer"; // import de multer, pour l'upload de fichier


const storage = multer.diskStorage({
    destination: (req, file, cb) => { // dans destination, je stock le dossier uploads/
        cb(null, 'uploads/') // (à vérifier si besoin du '/' devant ou pas pour qu'il soit à la racine)
    },
    filename: (req, file, cb) => { // ici je 'modélise' le filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) // on va ajouter un suffixe pour le nom du fichier
        cb(null, file.originalname + '-' + uniqueSuffix) // mon filename sera donc le fieldname (name du form) suivi d'un '-' puis du suffixe créé précédemment
    }
});


export const upload = multer({ storage: storage }); // je stocke dans upload
