const delay = timeDelay => new Promise ((resolve, reject) => {
    if (timeDelay === 0) reject();
    setTimeout(() => resolve(timeDelay), timeDelay);
})

delay(0)
    .then((timeDelay) => console.log(`Fire after ${timeDelay} m/sec`))
    .catch(() => console.log('Error!'));

delay(10)
    .then((timeDelay) => console.log(`Fire after ${timeDelay} m/sec`))
    .catch(() => console.log('Error!'));