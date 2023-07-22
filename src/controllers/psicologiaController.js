const PsicologiaModel = require("../models/psicologiaModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const findAllPsicologos = async (req, res) => {
    try {
        const authHeader = req.get("authorization");
        if (!authHeader) {
            return res.status(401).send("Você esqueceu de passar as informações de autorização")
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(token, SECRET, async function(erro) {
            if (erro) {
                return res.status(403).send("Acesso não autorizado!")
            }

            const allPsicologos = await PsicologiaModel.find();
            res.status(200).json(allPsicologos);
        })
    } catch {
        console.log(erro);
        res.status(500).json({message: erro.message});
    };
};

const findByLocation = async (req, res) => {
    try {
        const authHeader = req.get("authorization");
        if (!authHeader) {
            return res.status(401).send("Você esqueceu de passar as informações de autorização!")
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(token, SECRET, async function(erro) {
            if (erro) {
                return res.status(403).send("Acesso não autorizado")
            }
        })

        const {location} = req.query
        const findLocation = await PsicologiaModel.find({location: location});
        res.status(200).json(findLocation);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message})
    };
};

const findByService = async (req, res) => {
    try {
        const authHeader = req.get("authorization");
        if (!authHeader) {
            return res.status(401).send("Você esqueceu de passar as informações de autorização!")
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(token, SECRET, async function(erro) {
            if (erro) {
                return res.status(403).send("Acesso não autorizado")
            }
        })

        const {service} = req.query
        const findService = await PsicologiaModel.find({service: service});
        res.status(200).json(findService);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    };
};

const addNewPsicologo = async (req, res) => {
    try {
        const authHeader = req.get("authorization");
        if (!authHeader) {
            return res.status(401).send("Você esqueceu de passar as informações de autenticação!")
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(token, SECRET, async function(erro) {
            if (erro) {
                return res.status(403).send("Acesso não autorizado")
            }
        })
        const {
            name,
            institution,
            email,
            address,
            location,
            service,
            description,
        } = req.body;
        const newPsicologo = new PsicologiaModel({
            name,
            institution,
            email,
            address,
            location,
            service,
            description,
        });

        const savedPsicologo = await newPsicologo.save();
        
        res.status(201).json({message: "Novo psicólogo cadastrado!", savedPsicologo});
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    };
};

const updatePsicologo = async (req, res) => {
    try {
        const authHeader = req.get("authorization");
        if (!authHeader) {
            return res.status(401).send("Você esqueceu de passar as informações de autorização!")
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(token, SECRET, async function(erro) {
            if (erro) {
                return res.status(403).send("Acesso não autorizado")
            }
        })

        const {
            name,
            institution,
            email,
            address,
            location,
            service,
            description,
        } = req.body;
        const updatePsicologo = await PsicologiaModel.findByIdAndUpdate(req.params.id, {
            name,
            institution,
            email,
            address,
            location,
            service,
            description,
        });

        res.status(200).json({message: "Psicólogo atualizado", updatePsicologo});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    };
};

const deletePsicologo = async (req, res) => {
    try {
        const authHeader = req.get("authorization");

        if (!authHeader) {
          return res.status(401).send("Você esqueceu de passar as informações de autorização")
    
        }
    
        const token = authHeader.split(" ")[1];
    
        jwt.verify(token, SECRET, async function(erro) {
          if (erro) {
            return res.status(403).send("Acesso não autoruzado")
          }
        }) 

        const { id } = req.params;
        const deletePsicologo = await PsicologiaModel.findByIdAndDelete(id);
        const message = `Psicólogo com o id de ${deletePsicologo.name} foi deletado`;
        res.status(200).json({ message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

module.exports = {
    findAllPsicologos,
    findByLocation,
    findByService,
    addNewPsicologo,
    updatePsicologo,
    deletePsicologo,
};