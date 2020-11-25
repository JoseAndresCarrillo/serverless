const specieSchema = require('./schema/especies');
const { v1: uuidv1 } = require('uuid');

class EspeciesDao {
  constructor() {}

  async getAllSpeciesDao() {
     try {
       return await specieSchema.scan().exec()
     } catch (error) {
       throw { message: error.message }
     } 
  }

  async createSpeciesDao(specie) {
    try {
      specie.id = uuidv1();
      specie.creado = new Date().toISOString();
      return await specieSchema.create(specie);
    } catch (error) {
      throw { message: error.message }
    }
  }

  async getSpecieByName(name) {
    try {
      return await specieSchema.get(name);
    } catch (error) {
      throw { message: error.message }
    }
  }
}

module.exports = EspeciesDao;