const { check, validationResult } = require("express-validator");

exports.getAccessTokenValidator = 
    [
        check("refreshToken")
            .exists({ checkFalsy: true })
            .withMessage("RefreshToken is required")
            .isString()
            .withMessage("User name should be string"),
        (req, res, next) => {
            const error = validationResult(req).formatWith(({ msg }) => msg);
        
            const hasError = !error.isEmpty();
        
            if (hasError) {
                res.status(422).json({ error: error.array() });
            } else {
                next();
            }
            }
    ];

