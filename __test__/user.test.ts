import { getUsers } from "../src/controllers/user.controller";
import { mockRequest, mockResponse } from "../__mocks__/request.mock";

// TODO: fix this mocking test
describe("getUsers", () => {
    it("should return list of registered user", () => {
        getUsers(mockRequest, mockResponse).then((data) => console.log(data));
        expect(mockResponse.json).toHaveBeenCalled();
    });
});
