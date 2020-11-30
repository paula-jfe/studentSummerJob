const niceGrades = true

const newConsole = new Promise(
  (resolve, reject) => {
    if (niceGrades) {
      const console = {
        brand: 'Nintendo',
        model: 'Switch',
        color: 'gray',
        game: 'Super Mario Odyssey'
      }
      resolve(console)
    } else {
      /* const didntStudied = ('I will not get a new console because my grades are bad') */
      reject('I will not get a new console because my grades are bad')
    }
  }
)