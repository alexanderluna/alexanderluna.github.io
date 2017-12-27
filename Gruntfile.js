/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: '70%',
            suffix: '_large',
            quality: 100
          }, {
            width: '50%',
            suffix: '_medium',
            quality: 30
          }, {
            width: '40%',
            suffix: '_small',
            quality: 100
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'assets/images_src/',
          dest: 'assets/img/'
        }]
      }
    },
    clean: {
      dev: {
        src: ['assets/img'],
      },
    },
    mkdir: {
      dev: {
        options: {
          create: ['assets/img']
        },
      },
    },
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'assets/images_src/*.{gif,jpg,png}',
          dest: 'assets/img/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
