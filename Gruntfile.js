module.exports = function(grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      watch: {
          sass: {
              files: ['assets/sass/*.{scss,sass}','assets/sass/_partials/*.{scss,sass}'],
              tasks: ['sass:dist']
          },
          livereload: {
              files: ['*.html', '*.php', 'assets/js/*.{js,json}', 'assets/css/*.css','assets/img/*.{png,jpg,jpeg,gif,webp,svg}'],
              options: {
                  livereload: true
              }
          }
      },
      sass: {
          dist: {
              files: {
                  'assets/css/app.css': 'assets/sass/app.scss'
              }
          }
      }
  });
  grunt.registerTask('default', ['sass:dist', 'watch']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

};



