const View = require('./lib/View');
const Add = require('./lib/Add');
const Update = require('./lib/Update');




//new Add().departments(dept_name);

const role_id = 2;
const emp_id = 18;
// bill roberts original role id 6

new Update().empRole(role_id,emp_id);
new View().employees();
