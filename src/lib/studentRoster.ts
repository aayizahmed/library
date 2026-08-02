export interface StudentProfile {
  studentId: string;
  name: string;
  studentClass: string;
  rollNumber: string;
  email: string;
}

const FIRST_NAMES = [
  'Alex', 'Sophia', 'Marcus', 'Emily', 'Liam', 'Olivia', 'Ethan', 'Ava',
  'Noah', 'Isabella', 'Lucas', 'Mia', 'Oliver', 'Harper', 'Benjamin', 'Evelyn',
  'Elijah', 'Abigail', 'James', 'Emily', 'William', 'Elizabeth', 'Henry', 'Sofia',
  'Sebastian', 'Avery', 'Jack', 'Ella', 'Daniel', 'Scarlett', 'Matthew', 'Grace'
];

const LAST_NAMES = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas',
  'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White'
];

const CLASSES = [
  'Grade 9-A', 'Grade 9-B',
  'Grade 10-A', 'Grade 10-B',
  'Grade 11-Science', 'Grade 11-Arts',
  'Grade 12-Science', 'Grade 12-Arts'
];

// Generate 160 realistic student profiles
export function generateStudentRoster(): StudentProfile[] {
  const roster: StudentProfile[] = [];
  
  for (let i = 1; i <= 160; i++) {
    const fnIndex = (i * 7) % FIRST_NAMES.length;
    const lnIndex = (i * 11) % LAST_NAMES.length;
    const classIndex = (i - 1) % CLASSES.length;
    
    const firstName = FIRST_NAMES[fnIndex];
    const lastName = LAST_NAMES[lnIndex];
    const fullName = `${firstName} ${lastName}`;
    const studentClass = CLASSES[classIndex];
    const paddedIndex = String(i).padStart(3, '0');
    const studentId = `STU-2026-${paddedIndex}`;
    const rollNumber = `R-${1000 + i}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@oakridge.edu`;

    roster.push({
      studentId,
      name: fullName,
      studentClass,
      rollNumber,
      email,
    });
  }

  return roster;
}

export const SCHOOL_ROSTER: StudentProfile[] = generateStudentRoster();
