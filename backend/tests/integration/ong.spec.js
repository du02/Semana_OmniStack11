const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    // Criando migrate antes de fazer o teste no BD
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG - (Deve ser capaz de criar uma nova ONG)', async () => {
        const response =  await request(app).post('/ongs').send({
            name: "ONGTEST",
            email: "contatos@pan.com.br",
            whatsapp: "81910101010",
            city: "Recife",
            uf: "PE"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})