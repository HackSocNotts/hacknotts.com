module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.initConfig({
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'index.html': 'assets/development.html'     // 'destination': 'source'
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/style.css': 'assets/scss/style.scss'
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['assets/js/jquery.min.js', 'assets/js/jquery.easing.min.js', 'assets/js/bootstrap.min.js', 'assets/js/grayscale.js'],
        dest: 'assets/main.min.js'
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'assets/js/main.min.js': ['assets/js/main.min.js']
        }
      }
    },

    watch: {
      css: {
        files: ['assets/scss/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },

      html: {
        files: ['assets/development.html'],
        tasks: ['htmlmin']
      },

      javascript: {
        files: ['assets/js/*.js'],
        tasks: ['concat', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // Minify HTML
  grunt.loadNpmTasks('grunt-contrib-concat'); // Concatenate JS
  grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify JS
  grunt.loadNpmTasks('grunt-contrib-sass'); // Process Sass files
  grunt.loadNpmTasks('grunt-contrib-watch'); // On file update, do task
  grunt.loadNpmTasks('grunt-serve'); // Local server

  grunt.registerTask('default', []); // Set no default task atm

};
