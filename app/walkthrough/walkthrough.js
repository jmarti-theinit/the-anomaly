const c = require('scure-dialogflow').sdk.dsl.aCommand;
const { runWalkthrough } = require('scure-dialogflow').sdk;
const { data } = require('../data/data-es');

const commands = [
  c('_welcome', ''),
  c('look', ''),
  c('walk', ''),
  c('look', 'mesa'),
  c('look', 'cajón'),
  c('use', 'cajón'),
  c('walk', 'laboratorio'),
  c('look', ''),
  c('walk', 'laboratorio del otro lado'),
  c('look', 'anomalía'),
  c('walk', 'anomalía'),
  c('walk', 'laboratorio'),
  c('walk', 'laboratorio'),
  c('look', 'anomalia'),
  c('look', 'laser'),
  c('look', ''),
  c('walk', 'entrada'),
  c('look', 'mesa'),
  c('look', 'caja'),
  c('look', 'teclado'),
  c('use', 'cajon'),
  c('pickup', 'papel'),
  c('look', 'juego'),
  c('pickup', 'llave'),
  c('look', 'llave'),
  c('use', 'juego'),
  c('answer', '', '373'),
  c('use', 'juego'),
  c('answer', '', '345'),
  c('use', 'juego'),
  c('answer', '', '674'),
  c('use', 'juego'),
  c('answer', '', '831'),
  c('use', 'juego'),
  c('answer', '', 'data.mastermindNumber'), //the number changes each game
  c('use', 'juego'),
  c('answer', '', 'data.mastermindNumber'),
  c('walk', 'laboratorio'),
  c('walk', 'laboratorio'),
  c('walk', 'entrada'),
  c('use', ['llave', 'cajón']),
  c('walk', 'laboratorio'),
  c('walk', 'laboratorio'),
  c('look', 'estantería'),
  c('look', 'libro'),
  c('use', 'libro'),
  c('use', 'libro'),
  c('use', 'libro'),
  c('walk', 'comunicaciones'),
  c('look', 'conversaciones'),
  c('use', 'ordenador'),
  c('use', 'ordenador'),
  c('use', 'ordenador'),
  c('use', 'ordenador'),
  c('use', 'ordenador'),
  c('use', 'ordenador'),
  c('walk', 'laboratorio'),
  c('use', 'anomalía'),
  c('walk', 'comunicaciones'),
  c('look', 'ordenador'),
  c('use', 'ordenador'),
  c('answer', '', '1111'),
  c('use', 'ordenador'),
  c('answer', '', '4567'),
  c('use', 'ordenador'),
  c('answer', '', '5350'),
  c('walk', 'laboratorio'),
  c('walk', 'laboratorio'),
  c('look', 'laser'),
  c('use', ['linterna', 'anomalía']),
  c('use', 'laser'),
  c('answer', '', '211015'),
  c('use', ['linterna', 'laser']),
  c('walk', 'laboratorio'),
  c('use', ['linterna', 'anomalía']),
];

try {
  runWalkthrough(data, commands);
} catch (ex) {
  console.log('error', ex);
  throw ex;
}


