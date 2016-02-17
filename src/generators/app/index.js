'use strict'

import { Base } from 'yeoman-generator'

class EVGenerator extends Base {
  get prompting() {
    return {
      appName() {
        let done = this.async()
        let prompt = [
          {
            type: 'input',
            name: 'appName',
            message: 'Enter a name for your app:'
          }
        ]

        this.prompt(prompt, ({appName}) => {
          this.options.appName = appName
          done()
        })
      }
    }
  }
}

module.exports = EVGenerator
