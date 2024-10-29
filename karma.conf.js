module.exports = function(config) {
    config.set({
      frameworks: ['qunit'],
      files: [
        'src/**/*.js',
        'test/**/*.js'
      ],
      browsers: ['Chrome'],
      singleRun: true,
      reporters: ['progress']
    });
  };