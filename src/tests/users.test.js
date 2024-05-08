// You already have the methods imported
//import { default as expect } from "expect";
import users from "../data";
import { getUserById, getUsers} from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want
describe("getUserById",()=> {
    it("Debe dar el usuario de acuerdo al id dado", ()=>{
        const user= users[0];
        expect(getUserById(1)).toEqual(user);
    });
});

// READ documentation
