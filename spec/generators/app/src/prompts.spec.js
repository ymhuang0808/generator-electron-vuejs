import 'babel-polyfill'
import helpers from 'yeoman-test'
import path from 'path'
import Prompts from '../../../../src/generators/app/src/prompts'
import mockQuestions from '../../../mocks/questions'

// Get mock data
let questions = mockQuestions()

describe('Prompts actions', () => {
  // Mock generator for Prompts dependency injection
  let mockGenerator
  let packages

  beforeAll(() => {
    mockGenerator = jasmine.createSpyObj('mockGenerator', ['prompt'])
    packages = new Map()
  })

  it('should ask Vue.js plugins', () => {
    let prompts = new Prompts(mockGenerator, questions, packages)
    prompts.askQuestions('vuejsPlugin')
    expect(mockGenerator.prompt).toHaveBeenCalledWith(questions[0], jasmine.any(Function))
  })
})

describe('Prompt ask questions', () => {
  // Mock generator for Prompts dependency injection
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
    packages = jasmine.createSpyObj('packages', ['set'])
    done() // async
  })

  it('should set in packagesMap', done => {
    let prompts = new Prompts(mockGenerator, questions, packages)
    prompts.askQuestions('vuejsPlugin')
    done() // async
    expect(packages.set).toHaveBeenCalledWith('vuejsPlugin', answers)
  })
})
