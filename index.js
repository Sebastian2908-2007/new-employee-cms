const View = require('./lib/View');
const Add = require('./lib/Add');
const Update = require('./lib/Update');




//new Add().departments(dept_name);

const new_salary = 110000;
const role_id = 1;

// bill roberts original role id 6

new Update().roleSalary(new_salary,role_id);
new View().roles();
