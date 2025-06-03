// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // Allow arbitrary additional properties
  [key: string]: any;
}

// Example Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Define Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Directors object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function using the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Interface describing the constructor signature
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the Student class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass('Alice', 'Johnson');
console.log(student.displayName());     // Output: Alice
console.log(student.workOnHomework()); // Output: Currently working