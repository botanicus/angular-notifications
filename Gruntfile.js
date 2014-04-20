// FIXME: This doesn't generate anything.
// http://gruntjs.com/getting-started

module.exports = function (grunt) {
  // https://github.com/gitsome/docular
  grunt.loadNpmTasks('grunt-docular');

  grunt.registerTask('default', ['docular']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    docular: {
      baseUrl: 'http://localhost:8000', //base tag used by Angular
      showAngularDocs: true, //parse and render Angular documentation
      showDocularDocs: true, //parse and render Docular documentation
      docAPIOrder : ['doc', 'angular'], //order to load ui resources
      groups: [] //groups of documentation to parse
    },
  });
};
