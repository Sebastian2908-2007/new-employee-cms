const View = require('./lib/View');
const Add = require('./lib/Add');
const Update = require('./lib/Update');
const Delete = require('./lib/Delete');




//new Add().departments(dept_name);


const role_id = 11;

// 35 through 37 have roll 11

//new Update().roleSalary(new_salary,role_id);
new Delete().role(role_id);
new View().roles();
new View().employees();
