const createSpecie = require('../../../app/main/handlers/createSpecie');
const getAllSpecie = require('../../../app/main/handlers/getAllSpecie');
const getBySpecieName = require('../../../app/main/handlers/getBySpecieName');


jest.mock(
  '../../../app/main/repositories/especies.dao',
  () => {
    return jest.fn().mockImplementation(() => {
        return {
          createSpeciesDao: () => {
            return {
              name: 'Droid',
              classification: 'artificial',
              designation: 'sentient',
              average_height: 'n/a',
              skin_colors: 'n/a',
              hair_colors: 'n/a',
              eye_colors: 'n/a',
              average_lifespan: 'indefinite',
              homeworld: null,
              language: 'n/a',
              people: [
                'https://swapi.py4e.com/api/people/2/',
                'https://swapi.py4e.com/api/people/3/',
                'https://swapi.py4e.com/api/people/8/',
                'https://swapi.py4e.com/api/people/23/'
              ],
              films: [
                'https://swapi.py4e.com/api/films/1/',
                'https://swapi.py4e.com/api/films/2/',
                'https://swapi.py4e.com/api/films/3/',
                'https://swapi.py4e.com/api/films/4/',
                'https://swapi.py4e.com/api/films/5/',
                'https://swapi.py4e.com/api/films/6/',
                'https://swapi.py4e.com/api/films/7/'
              ],
              url: 'https://swapi.py4e.com/api/species/2/'
            }
          },
          getAllSpeciesDao: () => {
            return [
              {
                name: 'Droid',
                classification: 'artificial',
                designation: 'sentient',
                average_height: 'n/a',
                skin_colors: 'n/a',
                hair_colors: 'n/a',
                eye_colors: 'n/a',
                average_lifespan: 'indefinite',
                homeworld: null,
                language: 'n/a',
                people: [
                  'https://swapi.py4e.com/api/people/2/',
                  'https://swapi.py4e.com/api/people/3/',
                  'https://swapi.py4e.com/api/people/8/',
                  'https://swapi.py4e.com/api/people/23/'
                ],
                films: [
                  'https://swapi.py4e.com/api/films/1/',
                  'https://swapi.py4e.com/api/films/2/',
                  'https://swapi.py4e.com/api/films/3/',
                  'https://swapi.py4e.com/api/films/4/',
                  'https://swapi.py4e.com/api/films/5/',
                  'https://swapi.py4e.com/api/films/6/',
                  'https://swapi.py4e.com/api/films/7/'
                ],
                created: '2014-12-10T15:16:16.259000Z',
                edited: '2014-12-20T21:36:42.139000Z',
                url: 'https://swapi.py4e.com/api/species/2/'
              }
            ]
          },
          getSpecieByName: () => {
            return {
              name: 'Droid',
              classification: 'artificial',
              designation: 'sentient',
              average_height: 'n/a',
              skin_colors: 'n/a',
              hair_colors: 'n/a',
              eye_colors: 'n/a',
              average_lifespan: 'indefinite',
              homeworld: null,
              language: 'n/a',
              people: [
                'https://swapi.py4e.com/api/people/2/',
                'https://swapi.py4e.com/api/people/3/',
                'https://swapi.py4e.com/api/people/8/',
                'https://swapi.py4e.com/api/people/23/'
              ],
              films: [
                'https://swapi.py4e.com/api/films/1/',
                'https://swapi.py4e.com/api/films/2/',
                'https://swapi.py4e.com/api/films/3/',
                'https://swapi.py4e.com/api/films/4/',
                'https://swapi.py4e.com/api/films/5/',
                'https://swapi.py4e.com/api/films/6/',
                'https://swapi.py4e.com/api/films/7/'
              ],
              created: '2014-12-10T15:16:16.259000Z',
              edited: '2014-12-20T21:36:42.139000Z',
              url: 'https://swapi.py4e.com/api/species/2/'
            }
          }
        }
      })
  }
)

describe('Specie', () => {
  test('Create Specie', async () => {
    const request = {
      body: '{ "name": "Droid", "classification": "artificial", "designation": "sentient", "average_height": "n/a", "skin_colors": "n/a", "hair_colors": "n/a", "eye_colors": "n/a", "average_lifespan": "indefinite", "homeworld": null, "language": "n/a", "people": [ "https://swapi.py4e.com/api/people/2/", "https://swapi.py4e.com/api/people/3/", "https://swapi.py4e.com/api/people/8/", "https://swapi.py4e.com/api/people/23/" ], "films": [ "https://swapi.py4e.com/api/films/1/", "https://swapi.py4e.com/api/films/2/", "https://swapi.py4e.com/api/films/3/", "https://swapi.py4e.com/api/films/4/", "https://swapi.py4e.com/api/films/5/", "https://swapi.py4e.com/api/films/6/", "https://swapi.py4e.com/api/films/7/" ], "url": "https://swapi.py4e.com/api/species/2/" }',
    }
    const response = await createSpecie.createSpecieHandler(request);
    console.log(response);
    expect(response.statusCode).toBe(200)
  })

  test('Get All Specie', async () => {
    const response = await getAllSpecie.getAllSpecieHandler();
    console.log(response);
    expect(response.statusCode).toBe(200)
  })

  test('Get By Name', async () => {
    const request = {
      queryStringParameters: {
        external: 'false'
      },
      pathParameters: {
        name: 'Droid'
      }
    }
    const response = await getBySpecieName.getBySpecieNameHandler(request);
    console.log(response);
    expect(response.statusCode).toBe(200)
  })
})