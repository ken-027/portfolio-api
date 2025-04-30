import request from "supertest";
import { Express } from "express";
import createApp from "../src/app";

describe("/api/v1/users", () => {
    let app: Express;

    beforeAll(() => {
        app = createApp;
    });

    it("should return list of user", async () => {
        const res = await request(app).get("/api/v1/users");

        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
