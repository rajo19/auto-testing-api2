const { check, validationResult } = require("express-validator");

exports.userLoginValidator =[
        check("username")
            .exists({checkFalsy: true})
            .withMessage("User name is required")
            .isString()
            .withMessage("User name should be string"),
        check("password")
            .exists()
            .withMessage("Password is required")
            //.isString()
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
              )
            .withMessage("Password should be have atleast one upper case letter, one lower case letter, one number and one special character")
            .isLength({min: 5})
            .withMessage("Password should be at least 5 characters"),
            
        (req, res, next) => {
                const error = validationResult(req).formatWith(({ msg }) => [{msg,errorcode:'422'}]);
            
                const hasError = !error.isEmpty();
            
                if (hasError) {
                  res.status(422).json({ error: error.array() });
                } else {
                  next();
                }
              }
    ]
;

exports.userAddValidator = 
    [
        check("username")
            .exists({checkFalsy: true})
            .withMessage("User name is required")
            .isString()
            .withMessage("User name should be string"),
        check("password")
            .exists()
            .withMessage("Password is required")
            //.isString()
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
              )
            .withMessage("Password should be have atleast one upper case letter, one lower case letter, one number and one special character")
            .isLength({min: 5})
            .withMessage("Password should be at least 5 characters"),
        check("clientId")
        .exists()
        .withMessage("clientID is required"),
        check("email").optional().isEmail().withMessage("Provide valid email"),
        check("phone")
            .optional()
            .isString()
            .withMessage("phone number should be string"),
            (req, res, next) => {
                const error = validationResult(req).formatWith(({ msg }) => [{msg,errorcode:'422'}]);

                const hasError = !error.isEmpty();

                if (hasError) {
                res.status(422).json({ error: error.array() });
                } else {
                next();
                }
            }
    ];

exports.userUpdateValidator = 
     [
        check("_id")
            .exists({checkFalsy: true})
            .withMessage("User ID is required")
            .isString()
            .withMessage("User ID should be string"),
        check("username")
            .exists({checkFalsy: true})
            .withMessage("User name is required")
            .isString()
            .withMessage("User name should be string"),
        check("password")
            .exists()
            .withMessage("Password is required")
            .isString()
            .withMessage("Password should be string")
            .isLength({min: 5})
            .withMessage("Password should be at least 5 characters"),
        check("email").optional().isEmail().withMessage("Provide valid email"),
        check("phone")
            .optional()
            .isString()
            .withMessage("phone number should be string"),
            (req, res, next) => {
                const error = validationResult(req).formatWith(({ msg }) => [{msg,errorcode:'422'}]);

                const hasError = !error.isEmpty();

                if (hasError) {
                res.status(422).json({ error: error.array() });
                } else {
                next();
                }
            }
    ];


exports.userDeleteValidator = 
    [
       check("username")
           .exists({checkFalsy: true})
           .withMessage("Username is required"),
       (req, res, next) => {
           const error = validationResult(req).formatWith(( {msg} ) => [{msg, errorcode:'400'}]);
           const hasError = !error.isEmpty();

           if (hasError) {
           res.status(400).json({ error: error.array() });
           } else {
           next();
           }
       }
   ];

exports.userDeleteByIdValidator = 
   [
      check("clientId")
          .exists({checkFalsy: true})
          .withMessage("ClientId is required"),
      (req, res, next) => {
          const error = validationResult(req).formatWith(( {msg} ) => [{msg, errorcode:'400'}]);
          const hasError = !error.isEmpty();

          if (hasError) {
          res.status(400).json({ error: error.array() });
          } else {
          next();
          }
      }
  ];

// module.exports = {
//     userLoginValidator,
//     userAddValidator,
//     userUpdateValidator,
//     userDeleteValidator
// };