/**
 * Makes all features available to outer modules.
 */

let routes = [], swagger = [], swaggerSchemas=[];

if(process.env.ADMIN_ROUTES === 'True') {
    routes = [...routes, ...require('./admin/').routes]
}
module.exports = {
    routes: routes,
};
