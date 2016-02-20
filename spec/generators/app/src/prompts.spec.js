import 'babel-polyfill'
import helpers from 'yeoman-test'
import path from 'path'
import Prompts from '../../../../src/generators/app/src/prompts'
import mockQuestions from '../../../mocks/questions'

// Get mock data
let questions = mockQuestions()

describe('Prompts actions', () => {
  // Mock generator for Prompts dependency injection (DI)
  let mockGenerator
  let packages

  beforeAll(() => {
    mockGenerator = jasmine.createSpyObj('mockGenerator', ['prompt', 'async'])
  })

  it('should ask Vue.js plugins', () => {
    let prompts = new Prompts(mockGenerator)
    prompts.setQuenstions(questions).askQuestions()
    expect(mockGenerator.prompt).toHaveBeenCalledWith(questions, jasmine.any(Function))
  })

  it('should remove the element with loadStoredConfig', () => {
    let prompts = new Prompts(mockGenerator)
    let questionsList = prompts.setQuenstions(questions).removeQuestion('ui').questionsList
    expect(questionsList).not.toContain(questions[1])
  })
})

describe('Prompt ask questions', () => {
  // Mock generator for Prompts dependency injection (DI)
  let mockGenerator
  let packages
  let answers

  beforeAll(done => {
    answers = {
      vuejsPlugin: [
        {
          key: "vueResource",
          module: "vue-resource"
        },
        {
          key: "vueRouter",
          module: "vue-router"
        }
      ]
    }
    mockGenerator = helpers.createGenerator('electron-vuejs:app',
      [path.join(__dirname, '../../../../generators/app')])
    helpers.mockPrompt(mockGenerator, answers)

    done() // async
  })

  it('should get answers', done => {
    let prompts = new Prompts(mockGenerator)
    prompts.setQuenstions(questions, packages).askQuestions('vuejsPlugin')
    done() // async
    expect(prompts.getAnswers()).toEqual(answers)
  })
})
