const EspecieService = require('../services/especie.service');

const STATUS_OK = "ok";
const STATUS_ERROR = "error";
let httpStatus = 200;

async function getBySpecieNameHandler(request) {
  let body = {
    status: '',
    number_records: '',
    message: '',
    data: {},
  }
  try {
    const especieService = new EspecieService();
    const especie = await especieService.getByNameService(request);
    body.status = STATUS_OK;
    body.number_records = 1;
    body.message = 'Success';
    body.data = especie;
    return {
      statusCode: httpStatus,
      body: JSON.stringify(body),
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
  getBySpecieNameHandler,
}