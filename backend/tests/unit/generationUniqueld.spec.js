const genereteUniqueId = require('../../src/utils/generationUniqueld');

describe('Generete Unique ID', () => {
    it('should generate an unique ID (deve gerar um ID exclusivo)', () => {
        const id = genereteUniqueId();

        expect(id).toHaveLength(8);
    })
});