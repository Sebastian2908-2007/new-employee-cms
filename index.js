const View = require('./lib/View');
const Add = require('./lib/Add');
const Update = require('./lib/Update');
const Delete = require('./lib/Delete');
const ViewBy = require('./lib/ViewBy');




//new Add().departments(dept_name);


const role_id = 2;


// 35 through 37 have roll 11

//new Update().roleSalary(new_salary,role_id);
//new Delete().employee(emp_id);
//new View().employees();
//new View().roles();
//new ViewBy().manager(manager_id);
new ViewBy().role(role_id);
