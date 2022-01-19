const Employee = require('../lib/Employee');

test('Can set name via constructor arguments', () => {
    const name  = 'Sam';
    const employee = new Employee(name, 'sam@mail.com', 9);
    expect(employee.name).toBe(name);
})

// describe("Employee", () => {

//     // Methods
//     describe("Initialization / Constructor", () => {

//         // Testing of object properties after constructing a new object
//         it("should build with prop x when given y", () => {

//         })

//     });

//     describe("getName", () => {

//         // Arrange
//         // Create a new Employee object

//         // Act
//         // Call the getName method and store the result
        
//         // Assert
//         // The result is equal to an expected value
    
//     });

//     describe("getId", () => {

        

//     });

//     describe("getEmail", () => {

        

//     });

// });