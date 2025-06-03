import Subjects from './subjects/Cpp';
import JavaSubjects from './subjects/Java';
import ReactSubjects from './subjects/React';

// Create and export constants for each subject
export const cpp = new Subjects.Cpp();
export const java = new JavaSubjects.Java();
export const react = new ReactSubjects.React();

// Create and export a teacher object with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Log outputs for Cpp
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Log outputs for Java
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Log outputs for React
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());