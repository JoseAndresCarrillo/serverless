const EspecieDao = require ('../repositories/especies.dao');

class EspecieService {
  constructor() {}
  async createSpecieService(body) {
    try {
      const especieDao = new EspecieDao();
      return await especieDao.createSpeciesDao(body);
    } catch (error) {
      throw new Error(error)
    }
  }

  async getAllSpeciesService() {
    try {
      const especieDao = new EspecieDao();
      return await especieDao.getAllSpeciesDao();
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = EspecieService;