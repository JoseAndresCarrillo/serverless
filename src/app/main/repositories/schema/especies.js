const dynamoose = require('dynamoose');

const SpieceSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
  },
  nombre: {
    type: String,
    required: true,
    index: {
      global: true,
    }
  },
  clasificacion: {
    type: String,
  },
  designacion: {
    type: String,
  },
  altura_promedio: {
    type: String,
  },
  tiempo_de_vida_promedio: {
    type: String,
  },
  color_ojo: {
    type: String,
  },
  color_cabello: {
    type: String,
  },
  color_piel: {
    type: String,
  },
  lenguaje: {
    type: String,
  },
  mundo_hogar: {
    type: String,
  },
  personas: {
    type: String,
  },
  peliculas: {
    type: String,
  },
  url: {
    type: String,
  },
  creado: {
    type: String,
  },
  editado: {
    type: String,
  }
})

module.exports = dynamoose.model('especies', SpieceSchema);