const EspecieService = require('../services/especie.service');

const STATUS_OK = "ok";
const STATUS_ERROR = "error";
let httpStatus = 200;

async function createSpecieHandler(request) {
  let body = {
    status: '',
    number_records: '',
    message: '',
    data: {},
  }
  try {
    if (Object.keys(request.body).length !== 0) {
      const especieService = new EspecieService();
      const specie = JSON.parse(request.body);
      const specieResponse = await especieService.createSpecieService(specie);
      body.status = STATUS_OK;
      body.number_records = 1;
      body.message = 'Success';
      body.data = specieResponse;
      return {
        statusCode: 200,
        body: JSON.stringify(body),
      }
    } else {
      throw {
        httpStatus: 400,
        message: 'The request body cannot be empty',
      };
    }
  } catch (error) {
    const err = error.message ? error.message : error;
    httpStatus = error.httpStatus ? error.httpStatus : (error.statusCode ? error.statusCode : 500);
    body.status = STATUS_ERROR;
    body.number_records = 0;
    body.message = err;
    return {
      statusCode: httpStatus,
      body: JSON.stringify(body),
    }
  }

}

module.exports = {
  createSpecieHandler,
}