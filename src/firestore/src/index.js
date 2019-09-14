import { db } from './lib/firebase/initialize'
const { Elm } = require('./Main.elm')

const app = Elm.Main.init({
  node: document.getElementById('root'),
  flags: undefined
})

export { db }

app.ports.confirm.subscribe(message => {
  const answer = confirm(message)
  app.ports.receiveAnswer.send(answer)
})
