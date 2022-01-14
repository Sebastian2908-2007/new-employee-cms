const View = require('./View');
const Add = require('./Add');
const Update = require('./Update');
const Delete = require('./Delete');
const ViewBy = require('./ViewBy');
const inquirer = require('inquirer');



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
            }
        });
        console.log('======================================================')
    }
   

}

module.exports = Program;