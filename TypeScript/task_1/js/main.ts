// 1. Définition de l'interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Permet d'ajouter des attributs supplémentaires
}

// Exemple d'utilisation
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: false,
  contract: false, // Attribut dynamique
};

console.log(teacher3);

// 2. Définition de l'interface Directors qui hérite de Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 3. Fonction printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // "J. Doe"

// 4. Création de la classe StudentClass avec interface
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const studentInstance = new StudentClass({ firstName: "Alice", lastName: "Johnson" });
console.log(studentInstance.displayName()); // "Alice"
console.log(studentInstance.workOnHomework()); // "Currently working"

