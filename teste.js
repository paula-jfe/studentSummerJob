const winHackathon = (onTrack) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (onTrack === false) {
        return reject(console.log("Preciso terminar meus projetos"));
      }
      return resolve(console.log("Bora codar!"));
    }, 2000);
  });
}

winHackathon(true);

/* const winHackathon = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
}); */