/* wakeUp()
  .then(result => haveBreakfast(result))
  .catch(() => {
    console.error('Get hungry');
  }) */


  const haveBreakfast = new Promise((resolve, reject) => {
    const morningRoutine = Math.floor(Math.random() * 2) + 1;
    const breakfast = 'cheese bread';
    const hungry = 'you woke up too late for breakfast';

    if (morningRoutine === 2) {
      return reject(hungry);
    }
    resolve(breakfast);
  })
  .then(resolveOption => console.log(`Nice done, you'll have ${resolveOption} for breakfast`))
  .catch(rejectOption => console.log(`Poor you, ${rejectOption}`));