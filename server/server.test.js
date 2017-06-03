const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server tests', () => {
    describe('Get /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });


    describe('Get /users', () => {
        it('should contain user with name Some', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Some',
                        age: 25
                    });
                })
                .end(done);
        });
    });
});
