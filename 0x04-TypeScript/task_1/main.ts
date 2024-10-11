
  interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: Boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }

  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

  interface Directors extends Teacher{
    numberOfReports: number;
  }

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
  
console.log(teacher3);