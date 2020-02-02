import "jest"
import * as request from "supertest"

test("get /users", () => {
   return request("http://localhost:3000")
        .get("/users")
        .then( response => {
            expect(response.status).toBe(200)
            //expect(response.body.items).toBeInstanceOf(Array)
        } ).catch(fail)
} )

test("post /users", () => {
    return request("http://localhost:3000")
        .post("/users")
        .send( {
            name: "user 1",
            email: "user1@teste.com",
            password: "123456",
            zip_code: "1234-213",
            gender: "male"
        } ).then( response => {
            expect(response.status).toBe(200)
            expect(response.body._id).toBeDefined()
            expect(response.body.name).toBe("user 1")
            expect(response.body.email).toBe("user1@teste.com")
            expect(response.body.zip_code).toBe("1234-213")
            expect(response.body.gender).toBe("male")
            expect(response.body.password).toBeUndefined()
        } ).catch(fail)
} )