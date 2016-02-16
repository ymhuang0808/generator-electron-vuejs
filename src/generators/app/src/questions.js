export default function questions() {
  return [
    {
      type: 'checkbox',
      name: 'vuejsPlugin',
      message: 'What Vue.js plugins would you like to have?',
      choices: [
        {
          value: {
            key: 'vueResource',
            module: 'vue-resource'
          },
          name: 'vue-resource is a resource component for Vue.js'
        },
        {
          value: {
            key: 'vueAsyncData',
            module: 'vue-async-data'
          },
          name: 'vue-async-data'
        },
        {
          value: {
            key: 'vueRouter',
            module: 'vue-router'
          },
          name: 'vue-router is a offical router for Vue.js 0.12+'
        }
      ]
    },
    {
      type: 'list',
      name: 'ui',
      message: 'Which UI framework do you like?',
      choices: [
        {
          value: {
            key: 'bootstrap',
            value: null
          },
          name: 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.'
        },
        {
          value: {
            key: 'materialDesignLite',
            value: null
          },
          name: 'Material Design Lite lets you add a Material Design look and feel to your websites.'
        },
        {
          value: {
            key: 'noUi',
            value: null
          },
          name: 'I don\'t need any UI components.'
        }
      ]
    },
    {
      type: 'list',
      name: 'bootstrapCompoents',
      message: 'How do you implement your Bootstrap components?',
      choices:  [
        {
          value: {
            key: 'vueStrap',
            module: 'vue-strap'
          },
          name: 'Bootstrap (v3) components built with Vue.js.'
        },
        {
          value: {
            key: 'vueBoot',
            module: 'vueboot'
          },
          name: 'VueBoot is a project designed to ease the use of Bootstrap (v4) in VueJS applications.'
        }
      ]
    },
    {
      type: 'list',
      name: 'mdlComponents',
      message: 'How do you implement your Material Design Lite components?',
      choices: [
        {
          value: {
            key: 'vueMdl',
            module: 'vue-mdl'
          },
          name: 'Vue MDL is a set of reusable Material Design Lite(mdl) components.'
        }
      ]
    },
    {
      type: 'list',
      name: 'cssPreprocessor',
      message: 'Which CSS preprocessor do you like?',
      choices: [
        {
          value: {
            key: 'nodeSass',
            module: 'node-sass',
            extension: 'scss'
          },
          name: 'Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.'
        },
        {
          value: {
            key: 'less',
            module: 'less',
            extension: 'less'
          },
          name: 'Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions.'
        },
        {
          value: {
            key: 'noCssPreprocessor',
            module: null,
            extension: 'css'
          },
          name: 'I only need CSS.'
        }
      ]
    },
    {
      type: 'list',
      name: 'jsPreprocessor',
      message: 'Which JavaScript preprocessor do you like?',
      choices: [
        {
          value: {
            key: 'babel',
            module: 'babel',
            extension: 'js',
            srcExtension: 'es6.js'
          },
          name: 'Babel is a compiler for writing next generation JavaScript (ES6).'
        },
        {
          value: {
            key: 'noJsPreprocessor',
            module: null,
            extension: 'js',
            srcExtension: 'js'
          },
          name: 'I don\'t need any JavaScript pre-processor.'
        }
      ]
    }
  ]
}
