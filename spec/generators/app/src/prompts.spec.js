import install from 'jasmine-es6'
import helpers from 'yeoman-test'
import path from 'path'
import Prompts from '../../../../src/generators/app/src/prompts'
install()

describe('Prompts actions', () => {
  // Mock generator for Prompts dependency injection
  let mockGenerator
  let questions
  let packages

  beforeAll(() => {
      mockGenerator = jasmine.createSpyObj('mockGenerator', ['prompt'])
      questions = [
        {
          type: "checkbox",
          name: "vuejsPlugin",
          message: "What Vue.js plugins would you like to have?",
          choices: [
            {
              value: {
                key: "vueResource",
                module: "vue-resource"
              },
              name: "vue-resource is a resource component for Vue.js"
            },
            {
              value: {
                key: "vueAsyncData",
                module: "vue-async-data"
              },
              name: "vue-async-data"
            },
            {
              value: {
                key: "vueRouter",
                module: "vue-router"
              },
              name: "vue-router is a offical router for Vue.js 0.12+"
            },
          ]
        }]
      packages = new Map()
  })

  it('should ask Vue.js plugins', () => {
    let prompts = new Prompts(mockGenerator, questions, packages)
    prompts.askVuejsPlugin()
    expect(mockGenerator.prompt).toHaveBeenCalledWith(questions[0], jasmine.any(Function))
  })
})

describe('Prompt answer action', () => {
  let mockGenerator
  let questions
  let packages
  let answers

  beforeAll(() => {
    answers = {
      vuejsPlugin: [
        { key: "vueResource", module: "vue-resource" },
        { key: "vueRouter", module: "vue-router" }
      ]
    }
    mockGenerator = helpers.createGenerator('electron-vuejs:app', [ '../../../../generators/app' ])
    helpers.mockPrompt(mockGenerator, answers)
    questions = [
      {
        type: "checkbox",
        name: "vuejsPlugin",
        message: "What Vue.js plugins would you like to have?",
        choices: [
          {
            value: {
              key: "vueResource",
              module: "vue-resource"
            },
            name: "vue-resource is a resource component for Vue.js"
          },
          {
            value: {
              key: "vueAsyncData",
              module: "vue-async-data"
            },
            name: "vue-async-data"
          },
          {
            value: {
              key: "vueRouter",
              module: "vue-router"
            },
            name: "vue-router is a offical router for Vue.js 0.12+"
          },
        ]
      }]
    packages = jasmine.createSpyObj('packages', ['set'])
  })

  it('should set in packagesMap', () => {
    let prompts = new Prompts(mockGenerator, questions, packages)
    prompts.askVuejsPlugin()
    expect(packages.set).toHaveBeenCalledWith('vuejsPlugin', answers)
  })
})
