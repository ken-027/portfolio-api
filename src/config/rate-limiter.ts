import rateLimitPackage from "express-rate-limit";

const rateLimit = rateLimitPackage({
    windowMs: 60 * 1000, // per minute
    limit: 50,
    standardHeaders: true,
    legacyHeaders: false,
});

export const visitorLimit = rateLimitPackage({
    windowMs: 60 * 1000, // per minute
    limit: 1,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => req.ip as string,
});

export const resourceLimit = rateLimitPackage({
    windowMs: 60 * 1000, // per minute
    limit: 10,
    standardHeaders: true,
    legacyHeaders: false,
});

export const modifyResourceLimit = rateLimitPackage({
    windowMs: 60 * 1000, // per minute
    limit: 5,
    standardHeaders: true,
    legacyHeaders: false,
});

export const emailResourceLimit = rateLimitPackage({
    windowMs: 1000 * 60 * 60 * 24, // 24 hours
    limit: 3,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => req.ip as string,
    message: {
        emailLimit:
            "⚠️ Email request limit reached for today. Please try again tomorrow",
        limit: 3,
    },
});

export default rateLimit;
