// function Person(name) {
//   this.name = name;
//   this.walk = function () {
//     return this.name + ' esta andando';
//   };
// }

// const amadeu = new Person('Amadeu');
// console.log(amadeu.walk());

// function sayMyName(name = '') {
//   if (name === '') {
//     throw new Error('Nome eh obrigatorio');
//   }
//   console.log('After error');
// }

// try {
//   sayMyName();
// } catch (e) {
//   console.log(e);
// }

// DESAFIO 1 - TRANSFORMAR NOTAS ESCOLARES

// function convertGrades(currentGrade) {
//   let letterGrade;
//   if (currentGrade >= 90) letterGrade = 'A';
//   else if (currentGrade >= 80) letterGrade = 'B';
//   else if (currentGrade >= 70) letterGrade = 'C';
//   else if (currentGrade >= 60) letterGrade = 'D';
//   else if (currentGrade >= 0) letterGrade = 'F';
//   else letterGrade = 'Invalid input';

//   return letterGrade;
// }

// console.log(convertGrades(101));

// DESAFIO 2 - SISTEMA DE GASTOS FAMILIARES

// const family = {
//   incomes: [5, 7, 10.5],
//   expenses: [6.71, 10],
// };

// function calcSum(array) {
//   let total = 0;

//   for (let value of array) {
//     total += value;
//   }
//   return total;
// }

// function calcTotalExpenses(family) {
//   let incomes = calcSum(family.incomes),
//     expenses = calcSum(family.expenses);

//   return incomes - expenses;
// }

// console.log(calcTotalExpenses(family).toFixed(2));

// DESAFIO 3 - CELSIUS EM FAHRENHEIT

// function checkType(string) {
//   switch (string[string.length - 1].toUpperCase()) {
//     case 'C':
//       return 'F';
//     case 'F':
//       return 'C';
//     default:
//       throw new Error('Invalid Degree Type');
//   }
// }

// function transformDegree(degree) {
//   let degreeValue = Number(degree.substring(0, degree.length - 1));
//   let degreeType = checkType(degree);

//   if (degreeType === 'F') {
//     return `${(degreeValue * 9) / 5 + 32}F`;
//   } else if (degreeType === 'C') {
//     return `${((degreeValue - 32) * 5) / 9}C`;
//   }
// }

// try {
//   console.log(transformDegree('50f'));
// } catch (e) {
//   console.log(e);
// }

// DESAFIO 4 - BUSCANDO E CONTANDO DADOS EM ARRAYS

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker',
      },
      {
        title: 'O homem mais rico da Babilonia',
        author: 'George S. Clason',
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter',
      },
    ],
  },
  {
    category: 'Inteligência Emocional',
    books: [
      { title: 'Voce é Insubstituivel', author: 'Augusto Cury' },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury',
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey',
      },
    ],
  },
];

function calcTotalCategorys(array) {
  return array.length;
}

function calcTotalBooks(array) {
  for (let eachCategory of array) {
    console.log(
      `${eachCategory.books.length} livros em categoria ${eachCategory.category}`
    );
  }
}

function calcTotalAuthors(array) {
  const authors = [];

  for (let eachCategory of array) {
    for (let eachBook of eachCategory.books) {
      authors.push(eachBook.author);
    }
  }
  console.log(new Set(authors).size);
}
function printAugustBooks(array) {
  for (let eachCategory of array) {
    for (let eachBook of eachCategory.books) {
      if (eachBook.author === 'Augusto Cury') {
        console.log(`${eachBook.title} - Augusto Cury`);
      }
    }
  }
}

function printPerAuthor(array, author) {
  for (let eachCategory of array) {
    for (let eachBook of eachCategory.books) {
      if (eachBook.author === author) {
        console.log(`${eachBook.title} - ${author}`);
      }
    }
  }
}

console.log(`${calcTotalCategorys(booksByCategory)} categorias`);
calcTotalBooks(booksByCategory);
calcTotalAuthors(booksByCategory);

printAugustBooks(booksByCategory);

printPerAuthor(booksByCategory, 'Robert T. Kiyosaki e Sharon L. Lechter');
