const specieSchema = require('./schema/especies');
const { v1: uuidv1 } = require('uuid');

class EspeciesDao {
  constructor() {}

  async getAllSpeciesDao() {
     try {
       return await specieSchema.scan().exec()
     } catch (error) {
       throw new Error(error)
     } 
  }

  async createSpeciesDao(specie) {
    try {
      specie.id = uuidv1();
      specie.creado = new Date().toISOString();
      return await specieSchema.create(specie);
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = EspeciesDao;