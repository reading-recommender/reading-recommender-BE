const request = require("supertest");
const authRouter = require("../server.js");

const endpointPath = "/api";
const userObj = { username: "test", password: "123456...." };

describe("Auth Router", () => {
  describe("[POST] /signup Endpoint", () => {
    it("should accept object with required fields", () => {
      return request(authRouter)
        .post(`${endpointPath}/signup`)
        .send(userObj)
        .then(res => {
            expect(res.status).toBe(201)
        })
    });
//     it("should respond with an object on successful register", () => {
//      return request(authRouter)
//        .post(`${endpointPath}/register`)
//        .send(userObj)
//        .expect(201)
//        .expect(/\{.+\}/g);
//    });

//     it("should respond with success message on successful creation", () => {
//       return request(authRouter)
//         .post(`${endpointPath}/signup`)
//         .send(userObj)
//         .then(res => {
//           expect(res.body.message.match(/signed/i)).toBeTruthy()
//         });
//     });

//     it("should respond with 406 if email already exists", () => {
//       return request(authRouter)
//         .post(`${endpointPath}/signup`)
//         .send(userObj)
//         .then(res => {
//           return request(authRouter)
//             .post(`${endpointPath}/register`)
//             .send(userObj)
//             .expect(406);
//         });
//     });

//     it("should respond with 401 if provided incorrect fields", () => {
//       return request(authRouter)
//         .post(`${endpointPath}/signup`)
//         .send(invalidFieldsObj)
//         .expect(401);
//     });
//   });

//   describe("[POST] /login Endpoint", () => {
//     it("should accept object with required fields", () => {
//       return request(authRouter)
//         .post(`${endpointPath}/signup`)
//         .send(userObj)
//         .then(res => {
//           return request(authRouter)
//             .post(`${endpointPath}/login`)
//             .send(userObj)
//             .expect(200);
//         });
//     });

//     it("should respond with an object on successful login", () => {
//       return request(authRouter)
//         .post(`${endpointPath}/signup`)
//         .send(userObj)
//         .then(res => {
//           return request(authRouter)
//             .post(`${endpointPath}/login`)
//             .send(userObj)
//             .expect(/\{.+\}/g);
//         });
//     });

//     it("should respond with \"welcome\" message on successful login", () => {
//       return request(authRouter)
//         .post(`${endpointPath}/signup`)
//         .send(userObj)
//         .then(res => {
//           return request(authRouter)
//             .post(`${endpointPath}/login`)
//             .send(userObj)
//             .then(res => {
//               expect(res.body.message.match(/welcome/i)).toBeTruthy();
//             });
//         });
//     });

//     it("should respond with 406 on invalid login credentials", () => {
//       return request(authRouter)
//         .post(`${endpointPath}/signup`)
//         .send(userObj)
//         .then(res => {
//           const invalidUserObj = { ...userObj, username: "wrong" };
//           return request(authRouter)
//             .post(`${endpointPath}/login`)
//             .send(invalidUserObj)
//             .expect(406);
//         });
//     });

//     it("should respond with 401 if provided incorrect fields", () => {
//       return request(authRouter)
//         .post(`${endpointPath}/signup`)
//         .send(userObj)
//         .then(res => {
//           return request(authRouter)
//             .post(`${endpointPath}/login`)
//             .send(invalidFieldsObj)
//             .expect(401);
//         });
//     });
  });
});