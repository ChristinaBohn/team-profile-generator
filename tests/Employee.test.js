const Employee = require('../lib/Employee');

test('Can set name via constructor arguments', () => {
    const name  = 'Sam';
    const employee = new Employee(name, 9, 'sam@mail.com');
    expect(employee.name).toBe(name);
})

test('Can set ID via constructor arguments', () => {
    const id  = 9;
    const employee = new Employee('Sam', id, 'sam@mail.com');
    expect(employee.id).toBe(id);
})

test('Can set email via constructor arguments', () => {
    const email  = 'sam@mail.com';
    const employee = new Employee('Sam', 9, email);
    expect(employee.email).toBe(email);
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