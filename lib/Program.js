const View = require('./View');
const Add = require('./Add');
const Update = require('./Update');
const Delete = require('./Delete');
const ViewBy = require('./ViewBy');
const inquirer = require('inquirer');
const { type } = require('express/lib/response');



class Program {
    constructor() {
        this.view = new View();
        this.add = new Add();
        this.update = new Update();
        this.delete = new Delete();
        this.viewBy = new ViewBy();
    }
    initializeProgram() {
        inquirer.prompt({
            type: 'list',
            name: 'programChoices',
            message: 'what would you like to do?',
            choices: ['view all departments','view all roles','view all employees','add a department','add a role','add a employee','delete a department','delete a role','delete a employee','update an employees role','update an employee manager','update a roles salary','view employees by manager','view employees by role','EXIT PROGRAM']
        }).then(({programChoices}) => {
            switch (programChoices) {
                case 'view all departments':
                    this.view.departments();
                    this.initializeProgram();
                    break;
                case  'view all roles':
                    this.view.roles();
                    this.initializeProgram(); 
                    break; 
                case  'view all employees':
                    this.view.employees();
                    this.initializeProgram();
                    break;  
                case  'add a department':
                    this.addDept();    
                    break; 
                case 'add a role':
                    this.addRole();
                    break; 
                case  'add a employee':
                   this.addEmp();
                    break; 
                case  'delete a department':
                    this.deleteDept();
                    break; 
                case  'delete a role':
                    this.deleteRole();
                    break;  
                case 'delete a employee':
                    this.deleteEmp();
                    break; 
                case  'update an employees role':
                    this.updateEmpRole();
                    break; 
                case 'update an employee manager':
                    this.updateEmpManager();
                    break; 
                case 'update a roles salary':
                    this.updateRoleSalary();
                    break;  
                case 'view employees by manager':
                    this.viewEmpByManager();
                    break;  
                case 'view employees by role':
                    this.viewEmpByRole();
                    break; 
                case 'EXIT PROGRAM':
                    this.exit();
                    break;                             
            }
        });
        console.log('=======================SCROLL UP TO PICK ANOTHER OPTION===============================')
    }
    addDept () {
        inquirer.prompt({  
        
            type:'text',
            name:'dept_name',
            message:'What is the name of the new department?'
        
     }).then(({dept_name}) => {
         this.add.departments(dept_name);
         this.view.departments();
         this.initializeProgram();
     })
    }
    addRole() {
        inquirer.prompt([
            {
                type:'text',
                name:'title',
                message:'What is the job title of the new role?'
            },
            {
                type:'text',
                name:'salary',
                message:'what is the salary of this new role?'
            },
            {
                type: 'integer',
                name:'dept_id',
                message:'What is the id of the department this new role belongs to?'
            }
        ]).then(({title,salary,dept_id}) => {
            this.add.roles(title,salary,dept_id);
            this.view.roles();
            this.initializeProgram(); 
        })
    }
    addEmp() {
        inquirer.prompt([
            {
                type: 'text',
                name:'first_name',
                message:'what is employees first name?'
            },
            {
                type:'text',
                name:'last_name',
                message:'What is the employees last name?'
            },
            {
              type:'integer',
              name:'role_id',
              message:'What is the new employees role id?'  
            },
            {
                type:'integer',
                name:'manager_id',
                message:'What is the id of the manager for this employee? if none use 0'
            }
        ]).then(({first_name,last_name,role_id,manager_id}) => {
            this.add.employees(first_name,last_name,role_id,manager_id);
            this.view.employees();
            this.initializeProgram();
        });
    }
    deleteDept() {
        inquirer.prompt({
            type:'integer',
            name:'dept_to_delete',
            message:'what is the id of the department you want to delete?'
        })
        .then(({dept_to_delete}) => {
            this.delete.department(dept_to_delete);
            this.view.departments();
            this.initializeProgram();
        });
    }
    deleteRole() {
         inquirer.prompt({
             type:'integer',
             name:'role_to_delete',
             message:'What is the id of the role you want to delete?'
         })
         .then(({role_to_delete}) => {
             this.delete.role(role_to_delete);
             this.view.roles();
             this.initializeProgram();
         });
    }
    deleteEmp() {
        inquirer.prompt({
            type:'integer',
            name:'emp_to_delete',
            message:'What is the  Id of the employee that you would like to delete?'
        })
        .then(({emp_to_delete}) => {
            this.delete.employee(emp_to_delete);
            this.view.employees();
            this.initializeProgram();
        });
    }
    updateEmpRole() {
        inquirer.prompt([
            {
                type:'integer',
                name:'new_role_id',
                message:'What is the new role Id of this employee?'
            },
            {
                type:'integer',
                name:'emp_id',
                message:'what is the id of the employee whos role you are updating?'
            }
        ])
        .then(({new_role_id,emp_id}) => {
            this.update.empRole(new_role_id,emp_id);
            this.view.employees();
            this.initializeProgram();
        });
    }
    updateEmpManager() {
        inquirer.prompt([
            {
                type:'integer',
                name:'new_manager_id',
                message:'What is the id of employees new manager?'
            },
            {
                type:'integer',
                name:'emp_id',
                message:'What is the id of the employee whos manager you are updating?'
            }
        ]).then(({new_manager_id,emp_id}) => {
            this.update.empManager(new_manager_id,emp_id);
            this.view.employees();
            this.initializeProgram();
        });
    }
    updateRoleSalary() {
        inquirer.prompt([
            {
                type:'integer',
                name:'new_salary',
                message:'What is the new salary for this role?'
            },
            {
                type:'integer',
                name:'role_id',
                message:'What is the role id whos salary you are updating?'
            }
        ]).then(({new_salary,role_id}) => {
            this.update.roleSalary(new_salary,role_id);
            this.view.roles();
            this.initializeProgram();
        });
    }
    viewEmpByManager() {
        inquirer.prompt({
            type:'integer',
            name:'manager_id',
            message:'What is the id of the manager whos subordinates you are trying to view?'
        })
        .then(({manager_id}) => {
            this.viewBy.manager(manager_id);
            this.initializeProgram();
        });
    }
    viewEmpByRole() {
        inquirer.prompt({
            type:'integer',
            name:'role_id',
            message:'What is the role id whos employees you would like to see?'
        })
        .then(({role_id}) => {
            this.viewBy.role(role_id);
            this.initializeProgram();
        });
    }
    exit() {
        console.log('HOLD CTRL C TO EXIT PROGRAM')
    }
}

module.exports = Program;