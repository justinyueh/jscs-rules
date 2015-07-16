module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jscs: {
      gruntfile: ['Gruntfile.js'],
      options: {
        config: '.jscsrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-jscs');

  // Default task(s).
  grunt.registerTask('default', ['jscs']);
};
