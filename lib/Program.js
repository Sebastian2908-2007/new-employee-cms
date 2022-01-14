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
            choices: ['view all departments','view all roles','view all employees','add a department','add a role','add a employee','delete a department','delete a role','delete a employee','update an employees role','update an employee manager','update a roles salary','view employees by manager','view employees by role']
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
            }
        });
        console.log('=======================move up to pick another option===============================')
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
            
        }).then(() => {
            this.initializeProgram(); 
        })
    }
}

module.exports = Program;