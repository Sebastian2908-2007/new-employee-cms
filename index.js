const View = require('./lib/View');
const Add = require('./lib/Add');

//const dept_name = "Tractor Depatrtment"

//new View().employees();
//new Add().departments(dept_name);

/*const title = 'Tractor Driver';
const salary = 60000;
const dept_id = 6;

new Add().roles(title,salary,dept_id);*/

const first_name = "Alastaire";
const last_name = "Bowen";
const role_id = 16;
const manager_id = 29;

new Add().employees(first_name,last_name,role_id,manager_id);