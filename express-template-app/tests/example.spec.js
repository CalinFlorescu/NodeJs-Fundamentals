/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Defaults testing structure                                                                                      │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

// const expect = require('chai').expect

// describe('Test demo', () => {
//     beforeEach('beforeEach', () => {
//         console.log('Run before each test case')
//     })
//     before('before', () => {
//         console.log('Run before all the test suites')
//     })
//     it('should return 200', () => {
//         expect(200).to.equal(200)
//     })
//     after('after', () => {
//         console.log('Run after all the test suites')
//     })
//     it('should return 200', () => {
//         expect(200).to.equal(200)
//     })
//     afterEach('afterEach', () => {
//         console.log('Run after each test case')
//     })
// })

/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Mocking functions                                                                                               │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

// const expect = require('chai').expect
// const sandbox = require('sinon').createSandbox()
// const rewire = require('rewire')
// const mongoose = require('mongoose')
// let { userServices } = require('../src/services')

// describe('Test user service', () => {
//     let sampleUsers
//     let findStub

//     beforeEach(() => {
//         sampleUsers = [
//             {
//                 _id: 1,
//                 name: 'John Doe',
//                 email: 'email@email.com',
//                 token: 'kasdhkajsd',
//                 salt: 'asdanscbna',
//                 role: 'ADMIN'
//             }
//         ]
//         // We do the rewire to use the stubbed implementation of the module
//         findStub = sandbox.stub(mongoose.Model, 'find').resolves(sampleUsers)
//     })

//     afterEach(() => {
//         // We do the rewire to use the original implementation of the module
//         userServices = rewire('../src/services/user.services')
//         // We restore the stubbed implementation of the module
//         sandbox.restore()
//     })

//     describe('getAllUsers', () => {
//         it('should return a list with users', async () => {
//             let res = await userServices.getAllUsers()
//             expect(res).to.have.lengthOf(1)
//         })
//     })
// })


/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Testing app routes                                                                                              │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

// const expect = require('chai').expect
// const request = require('supertest')
// const sandbox = require('sinon').createSandbox()
// const rewire = require('rewire')

// let { userControllers } = require('../src/controllers')
// let app = require('../app')

// describe('Test /users endpoint', () => {
//   let sampleResponse

//     beforeEach(() => {
//       sampleResponse = [{
//         name: 'test user',
//         email: "email@email.com",
//         role: 'ADMIN',
//       }]

//       sandbox.stub(userControllers, 'listAllUsers').resolves(sampleResponse);
//     });

//   afterEach(() => {
//     app = rewire('../app');
//     sandbox.restore();
//   });

//   describe('GET /users', () => {
//     it('should fail if we do not send the token', async () => {
//       const res = await request(app).get('/users');

//       expect(res.status).to.equal(500);
//     });
//   })
// })