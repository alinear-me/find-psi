const mongoose = require("mongoose");

const PsicologiaSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },
        name: {
            type: String,
            required: true,
        },
        institution: {
            type: String,
            required: true,
        },
        email: {
            type:String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        service: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            minLength: 0,
            maxLength: 500,
            default: "Não informado",
          },
    },
    { timestamp: true }
);

const Model = mongoose.model("Psicologia", PsicologiaSchema);

module.exports = Model;