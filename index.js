const View = require('./lib/View');
const Add = require('./lib/Add');
const Update = require('./lib/Update');




//new Add().departments(dept_name);

const manger_id = 1;
const emp_id = 18;
// bill roberts original role id 6

new Update().empManager(manger_id,emp_id);
new View().employees();
