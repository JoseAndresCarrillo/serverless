const EspecieDao = require ('../repositories/especies.dao');
const axios = require('axios');

const SWAPI_URL = 'https://swapi.py4e.com/api'

class EspecieService {
  constructor() {}
  async createSpecieService(body) {
    try {
      const especieDao = new EspecieDao();
      return await especieDao.createSpeciesDao(body);
    } catch (error) {
      throw { httpStatus: 500, message: error.message }
    }
  }

  async getAllSpeciesService() {
    try {
      const especieDao = new EspecieDao();
      return await especieDao.getAllSpeciesDao();
    } catch (error) {
      throw { httpStatus: 500, message: error.message }
    }
  }

  async getByNameService(request) {
    try {
      const isExternal = request.queryStringParameters.external === 'true' ? true : false;
      const name = request.pathParameters.name;
      if (isExternal) {
        const response = await axios.get(SWAPI_URL + '/species');
        const species = response.data.results;
        const specie = species.filter(s => {
          console.log(s.name);
          return s.name === name
        });
        if (specie.length > 0) {
          return specie[0];
        } else {
          throw { httpStatus: 404, message: "Especie no encontrada" }
        }
      } else {
        const especieDao = new EspecieDao();
        const especie = await especieDao.getSpecieByName(name);
        console.log(especie);
        if (!especie) {
          throw { httpStatus: 404, message: "Especie no encontrada" }
        }
        return especie;
      }
    } catch (error) {
      throw { httpStatus: 500, message: error.message }
    }
  }


}

module.exports = EspecieService;