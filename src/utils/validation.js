import Joi from "joi";
import happyJoi from "@hapi/joi";

// Validar el nombre
const validatedName = Joi.string().min(3).max(30).required();
// Esquema de validación para el correo electrónico
const validatedEmail = Joi.string().email().required();
// Esquema de validación para la contraseña
const validatedPass = Joi.string().min(6).required();
const validatedBio = Joi.string().min(50).max(255);

//Esquema para links:
const schema = Joi.object({
  url: Joi.string().uri().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
});

//Validar voto de link:
const validatedRating = Joi.number().integer().min(0).max(10).required();

//Validar tipo de imagen:
const imageSchema = Joi.object({
  mimetype: Joi.string()
    .valid("image/jpeg", "image/png", "image/gif")
    .required(),
});

//Exporto las variables:
export {
  validatedName,
  validatedEmail,
  validatedPass,
  schema,
  validatedRating,
  validatedBio,
  imageSchema,
};
