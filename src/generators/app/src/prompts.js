'use strict'

import 'babel-polyfill'
import _ from 'lodash'
import chalk from 'chalk'
import yosay from 'yosay'

let _generator
let answersList

export default class Prompts {

  constructor(evGenerator) {
    _generator = evGenerator
  }

  welcomeMsg() {
    _generator.log(yosay(
      `Welcome to ` +
      `${chalk.red('Electron-Vuejs')} generator`))
  }

  setQuenstions(questions) {
    this.questionsList = questions

    return this;
  }

  removeQuestion(name) {
    this.questionsList = this.questionsList.filter(value => {
      return value.name !== name
    })

    return this
  }

  askQuestions() {
    let done = _generator.async()
    _generator.prompt(this.questionsList, answers => {
      answersList = answers
      done()
    })

    return this
  }

  getAnswers() {
    return answersList
  }
}
