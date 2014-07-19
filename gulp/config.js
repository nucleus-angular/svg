var gulpConfig = {
  webPath: 'dalek-web',
  appPath: 'dalek-web/app',
  buildPath: 'dalek-web/app/build',
  vendorComponentsPath: 'dalek-web/components',
  compileFiles: {
    javascript: {
      'ui-testing.js': [
        'dalek-web/components/angular-mockable-http-provider/mockable-http-provider.js'
      ],
      'application.js': [
        'dalek-web/app/application.js',
        'dalek-web/app/components/core/module.js',
        'dalek-web/app/components/core/http-interceptors-config.js',
        'dalek-web/app/components/home/module.js',
        'dalek-web/app/components/home/home-controller.js'
      ],
      'libraries.js': [
        'dalek-web/components/jshashes/hashes.js',
        'dalek-web/components/moment/moment.js',
        'dalek-web/components/jquery/dist/jquery.js',
        'dalek-web/components/svg-injector/dist/svg-injector.min.js',
        'dalek-web/components/angular/angular.js',
        'dalek-web/components/angular-ui-router/release/angular-ui-router.js',
        'dalek-web/components/nucleus-angular-svg/module.js',
        'dalek-web/components/nucleus-angular-svg/svg-directive.js'
      ]
    },
    sass: {
      'dalek-web/app/styles/main.scss': 'dalek-web/app/build/main.css'
    }
  },
  sourceFiles: {
    javascript: [
      'dalek-web/app/application.js',
      'dalek-web/app/components/**/*.js',
      '!dalek-web/app/components/**/*.spec.js'
    ],
    html: [
      'dalek-web/*.html',
      //this is a symlink
      'dalek-web/components/!(nucleus-angular-svg)/**/*.html',
      'dalek-web/components/nucleus-angular-svg/assets/**/*.html',
      'dalek-web/app/components/**/*.html'
    ],
    sass: [
      'dalek-web/app/**/*.scss'
    ]
  },
  bowerCopy: [
    'lodash/dist/lodash.min.js',
    'jshashes/hashes.js',
    'moment/moment.js',
    'jquery/dist/jquery.js',
    'angular/angular.js',
    'angular-ui-router/release/angular-ui-router.js',
    'angular-mockable-http-provider/mockable-http-provider.js',
    'angular-mocks/angular-mocks.js'
  ]
};

module.exports = gulpConfig;

