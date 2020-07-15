var inquirer = require("inquirer");
var Manager = require("./lib/manager");
var Engineer = require("./lib/engineer");
var Intern = require("./lib/intern");
var render = require("./lib/htmlrenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const employees = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function newTeamMember() {

   promptUser()([
        {
            type: "list",
            message: "What's your role within the company?",
            name: "role",
            choices: [
                'Manager',
                'Engineer',
                'Intern'
            ]
        }

    ]).then(userRole => {
        switch (userRole.role) {
            case "Manager":
                addManager();
                break;

            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;
                case "No more employees":
                    render(employees);
                    break


        }
    })

    function addManager() {
       
        inquirer
        .prompt([
            {
                type: "input",
                message: "What is your first name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your employee ID?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email? ",
                name: "memail"
            },
            {
                type: "input",
                message: "What is your office number?",
                name: "officePhone"
            }
        ]).then(userRole => {
            console.log(userRole);
            const manager = new Manager(userRole.name, userRole.id, userRole.email, userRole.officPhone);

            employees.push(manager);

            newTeamMember();

        })
    }


        function addEngineer() {
          inquirer
          .prompt([
                {
                    type: "input",
                    message: "What is your first name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is your email? ",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is your github username?",
                    name: "github"
                }
            ]).then(userRole => {
                console.log(userRole);

                const engineer = new Engineer(userRole.name, userRole.id, userRole.email, userRole.github);

                employees.push(engineer);

                newTeamMember();

            })
        }


            function addIntern() {
                return inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your first name?",
                        name: "name"
                    },
                    {
                        type: "input",
                        message: "What is your employee ID?",
                        name: "id"
                    },
                    {
                        type: "input",
                        message: "What is your email? ",
                        name: "email"
                    },
                    {
                        type: "input",
                        message: "What school do you attend?",
                        name: "school"
                    }
                ]).then(userRole => {
                    console.log(userRole);
                    const intern = new Intern(userRole.name, userRole.id, userRole.email, userRole.school);

                    employees.push(intern);

                    newTeamMember();

                })
            }
        }

module.exports = employees

newTeamMember()
            
        
            

        
        

        
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```