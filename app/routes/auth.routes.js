// const { verifySignUp } = require("../middlewares");

module.exports = (app) => {
    const controller = require("../controllers/auth.controller");
    app.post(
        "/signup",
        controller.signup
    );
    app.post("/signin", controller.signin);
    app.get("/getall", controller.getall);
};
// module.exports = function(app) {
//     // app.use(function(req, res, next) {
//     //     res.header(
//     //         "Access-Control-Allow-Headers",
//     //         "x-access-token, Origin, Content-Type, Accept"
//     //     );
//     //     next();
//     // });
//
//     app.post(
//         "/signup",
//         [
//             verifySignUp.checkDuplicateUsernameOrEmail,
//         ],
//         controller.signup
//     );
//
//     app.post("/api/auth/signin", controller.signin);
// };