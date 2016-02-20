'use strict'

import { Base } from 'yeoman-generator'
import Prompts from './src/prompts'
import questions from './src/questions'

let prompts
let answersList

class EVGenerator extends Base {

  constructor(...args) {
    super(...args)
    prompts = new Prompts(this)
  }

  prompting() {
    prompts.welcomeMsg()

    // Dependencies for prompts
    let questionsList = questions()
    let packagesMap = new Map()

    answersList = prompts.setQuenstions(questionsList).askQuestions().getAnswers()
  }
}

module.exports = EVGenerator
