const View = require('./lib/View');
const Add = require('./lib/Add');

//const dept_name = "Tractor Depatrtment"

//new View().employees();
//new Add().departments(dept_name);

const title = 'Tractor Driver';
const salary = 60000;
const dept_id = 6;

new Add().roles(title,salary,dept_id);