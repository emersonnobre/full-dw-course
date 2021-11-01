// conceito de realizar diversas chamadas que seriam aninhadas se executadas com
// callback, mas com promise, que fica bem melhor.

function waitFor(seconds = 2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('executing...')
      resolve()
    }, seconds * 1000)
  })
}

// clean
waitFor()
  .then(waitFor)
  .then(waitFor)
  .then(waitFor)
