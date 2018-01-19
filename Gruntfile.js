module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: '70%',
            suffix: '_large',
            quality: 80
          }, {
            width: '50%',
            suffix: '_medium',
            quality: 50
          }, {
            width: '40%',
            suffix: '_small',
            quality: 50
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
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
