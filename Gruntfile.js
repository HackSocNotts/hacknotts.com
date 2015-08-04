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

    concat: { // JS Concat
      options: {
        separator: ';'
      },
      dist: {
        src: ['assets/js/jquery.min.js',
        'assets/js/jquery.easing.min.js',
        'assets/js/bootstrap.min.js',
        'assets/js/grayscale.js'],
        dest: 'assets/main.min.js'
      }
    },

    concatHTML: { // HTML Concat
      options: {
        separator: '\n'
      },
      dist: {
        src: ['assets/html-parts/html-head.html',
        'assets/html-parts/cover.html',
        'assets/html-parts/faq.html',
        'assets/html-parts/schedule.html',
        'assets/html-parts/prizes.html',
        'assets/html-parts/venue.html',
        'assets/html-parts/register.html',
        'assets/html-parts/footer.html',
        'assets/html-parts/sponsors.html',
        'assets/html-parts/html-foot.html'],
        dest: 'assets/development.html'
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'assets/main.min.js': ['assets/main.min.js']
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
        files: ['assets/html-parts/*.html'],
        tasks: ['concatHTML', 'htmlmin']
      },

      javascript: {
        files: ['assets/js/*.js'],
        tasks: ['concat', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // Minify HTML

  // Concatenate JS/HTML
  // Hack: https://github.com/gruntjs/grunt-contrib-concat/issues/113
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.renameTask('concat', 'concatHTML');
  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify JS
  grunt.loadNpmTasks('grunt-contrib-sass'); // Process Sass files
  grunt.loadNpmTasks('grunt-contrib-watch'); // On file update, do task
  grunt.loadNpmTasks('grunt-serve'); // Local server

  grunt.registerTask('default', []); // Set no default task atm

};
