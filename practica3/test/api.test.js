const request = require('supertest');
const {app, asignacion} = require('../index');
const server = require('../server');


describe('GET /', () => {
    afterAll((done) => {
        server.close(done);
    });
  
    it('Debe devolver asignación', async () => {
      const response = await request(app).get('/asignacion');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });






describe('POST /asignacion', () => {
  beforeAll(() => {
    server.listen(process.env.PUERTO); 
  });

  afterAll((done) => {
    server.close(done);
});
    beforeEach(() => {
      
      asignacion.length = 0;
    });
  
    it('Debe guardar datos en el array', async () => {
      const body = {
        id:"1",
        idserie:"", 
        idpersonaje:"",
        papelinterpreta:"",
        tipopapel:"", 
        fechainicio:"", 
        fechafin:"", 
        temporadas:""
      };
  
      const response = await request(app).post('/asignacion').send(body);
  
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        message:'Se guarda la asignacion en series de tv', body
      });
  
      expect(asignacion).toHaveLength(1);
      expect(asignacion[0]).toEqual(body);
    });
  });
  
  