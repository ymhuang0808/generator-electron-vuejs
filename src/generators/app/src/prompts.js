'use strict'

import _ from 'lodash'

// Constants
const PROMPT_NAME_VUEJS_PLUGIN = 'vuejsPlugin'
const PROMPT_NAME_UI = 'ui'
const PROMPT_NAME_BOOTSTRAP = 'bootstrapCompoents'
const PROMPT_NAME_MDL = 'mdlComponents'
const PROMPT_NAME_CSS_PREPRO = 'cssPreprocessor'
const PROMPT_NAME_JS_PREPRO = 'jsPreprocessor'

let generator
let questionsList
let packagesMap

export default class Prompts {

  constructor(evGenerator, questions, packages) {
    generator = evGenerator
    questionsList = questions
    packagesMap = packages
  }

  askQuestions(name) {
    let index = _.findIndex(questionsList, {
      'name': name // property name in questions.js
    })

    if (index != -1) {
      let question = questionsList[index]
      generator.prompt(question, (answers) => {
        packagesMap.set(name, answers[name])
      })
    }
  }
}
