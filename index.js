const View = require('./lib/View');
const Add = require('./lib/Add');
const Update = require('./lib/Update');
const Delete = require('./lib/Delete');




//new Add().departments(dept_name);


const emp_id = 41;

// 35 through 37 have roll 11

//new Update().roleSalary(new_salary,role_id);
new Delete().employee(emp_id);
new View().employees();
//new View().employees();
