module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.initConfig({
    htmlmin: { // Minify HTML
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'assets/development.html' // 'destination': 'source'
        }
      }
    },

    sass: { // Process SCSS -> CSS
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/style.css': 'assets/scss/style.scss' // 'destination' : 'source'
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
        'assets/js/main.js'], // In order of concat
        dest: 'assets/main.min.js'
      }
    },

    concatHTML: { // HTML Concat
      options: {
        separator: '\n'
      },
      dist: {
        src: ['assets/html-parts/html-head.html',
        'assets/html-parts/navbar.html',
        'assets/html-parts/cover.html',
        'assets/html-parts/faq.html',
        'assets/html-parts/schedule.html',
        'assets/html-parts/prizes.html',
        'assets/html-parts/venue.html',
        'assets/html-parts/sponsors.html',
        'assets/html-parts/register.html',
        'assets/html-parts/footer.html',
        'assets/html-parts/html-foot.html'], // In order of concat
        dest: 'assets/development.html'
      }
    },

    uglify: { // Minify JS
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
      css: { // On .SCSS file change, process scss files
        files: ['assets/scss/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },

      html: { // On .html part file change, merge then minify HTML
        files: ['assets/html-parts/*.html'],
        tasks: ['concatHTML', 'htmlmin']
      },

      javascript: { // On .js part file change, merge then minify
        files: ['assets/js/*.js'],
        tasks: ['concat', 'uglify']
      }
    }
  });


  // Concatenate JS/HTML
  // Hack: https://github.com/gruntjs/grunt-contrib-concat/issues/113
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.renameTask('concat', 'concatHTML');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // Minify HTML
  grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify JS
  grunt.loadNpmTasks('grunt-contrib-sass'); // Process Sass files
  grunt.loadNpmTasks('grunt-contrib-watch'); // On file update, do task
  grunt.loadNpmTasks('grunt-serve'); // Local server

  var initial_tasks = 'concatHTML htmlmin concat uglify sass';
  grunt.registerTask('default', [initial_tasks]); // Set the initial 'grunt' task to do everything
  grunt.registerTask('heroku:development', initial_tasks); // heroku_grunt_tasks
};
