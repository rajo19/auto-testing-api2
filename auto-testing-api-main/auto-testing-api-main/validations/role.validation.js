const { check, validationResult } = require("express-validator");

exports.roleAddValidator = 
     [
        body("roleName")
            .exists({checkFalsy: true})
            .withMessage("Role name is required")
            .isString()
            .withMessage("Role name should be string"),
            (req, res, next) => {
                const error = validationResult(req).formatWith(({ msg }) => msg);
            
                const hasError = !error.isEmpty();
            
                if (hasError) {
                    res.status(422).json({ error: error.array() });
                } else {
                    next();
                }
                }
    ]
;

exports.roleUpdateValidator =
    [
        body("_id")
            .exists({checkFalsy: true})
            .withMessage("Role ID is required")
            .isString()
            .withMessage("Role ID should be string"),
        body("roleName")
            .exists({checkFalsy: true})
            .withMessage("Role name is required")
            .isString()
            .withMessage("Role name should be string"),
            (req, res, next) => {
                const error = validationResult(req).formatWith(({ msg }) => msg);
            
                const hasError = !error.isEmpty();
            
                if (hasError) {
                    res.status(422).json({ error: error.array() });
                } else {
                    next();
                }
                }
    ]
;

exports.roleDeleteValidator =
     [
        body("roleId")
            .exists({checkFalsy: true})
            .withMessage("Role ID is required")
            .isString()
            .withMessage("Role ID should be string"),
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

