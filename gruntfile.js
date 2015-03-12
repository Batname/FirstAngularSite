'use strict';

var fs = require('fs');

var paths = {
    jade: ['src/jade/**/*.jade'],
    js: ['src/js/**/*.js'],
    sass: ['src/scss/**/*.scss'],
    coffee: ['src/coffee/**/*.coffee']
};

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        env: {
            test: {
                NODE_ENV: 'test'
            }
        },
        watch: {
            client: {
                files: ['public/**', '!public/bower_components/**'],
                options: {
                    livereload: true
                }
            },
            server: {
                files: ['.nodemon'],
                options: {
                    livereload: true
                }
            },
            jade: {
                files: paths.jade,
                tasks: 'jade'
            },
            coffee : {
                files : paths.coffee,
                tasks : 'coffee'
            },
            concat: {
                files: paths.js,
                tasks: 'concat'
            },
            sass: {
                files: paths.sass,
                tasks: 'sass'
            }
        },
        jade: {
            compile: {
                files: [{
                    expand: true,
                    cwd: "src/jade",
                    src: ["**/*.jade"],
                    dest: "public",
                    ext: ".html"
                }],
                options: {
                    livereload: true
                }
            }
        },
        sass : {
            compile: {
                files: [{
                    expand: true,
                    cwd: "src/scss",
                    src: ["**/*.scss"],
                    dest: "public/css",
                    ext: ".css"
                }]
            }
        },
        concat : {
          dist: {
            expand: true,
            cwd: "src/js",
            src: ["**/*.js"],
            dest: 'public/js',
            ext: ".js"
          }
        },
        coffee : {
          compile: {
            files: {
              "public/js/app.0.0.1.js" : 
              [
              'src/coffee/app.coffee',
              'src/coffee/common_modules/modules/*.coffee',
              'src/coffee/common_modules/services/*.coffee',
              'src/coffee/common_modules/top_navigation/*.coffee',
              'src/coffee/home_module/modules/*.coffee',
              'src/coffee/home_module/services/*.coffee',
              'src/coffee/home_module/filters/*.coffee',
              'src/coffee/home_module/controllers/*.coffee',
              'src/coffee/home_module/directives/*.coffee',
              'src/coffee/news_module/modules/*.coffee',
              'src/coffee/news_module/controllers/*.coffee',
              ]
            }
          }
        },
        uglify: {
          my_target: {
            files: {
              "public/js/app.0.0.1.min.js": "public/js/app.0.0.1.js",
              "public/js/vendors.min.js": 
              [
              'public/bower_components/jquery/dist/jquery.js',
              'public/bower_components/lodash/lodash.js',
              'public/bower_components/angular/angular.js',
              'public/bower_components/angular-animate/angular-animate.js',
              'public/bower_components/angular-route/angular-route.js',
              'public/bower_components/angular-elastic/elastic.js',
              'public/bower_components/angular-loading-bar/build/loading-bar.js',
              'public/bower_components/angular-bindonce/bindonce.js',
              'public/bower_components/angular-translate/angular-translate.js',
              'public/bower_components/angular-translate-loader-partial/angular-translate-loader-partial.js',
              'public/bower_components/bootstrap/dist/js/bootstrap.js',
              ]
            }
          }
        },
        nodemon: {
            dev: {
                script: './app/index.js',
                options: {
                    nodeArgs: ['--debug', '--harmony'],
                    env: {
                        PORT: 2015,
                        NODE_ENV: "development"
                    },
                    ignore: ['node_modules/**', 'public/**'],
                    callback: function (nodemon) {
                        fs.writeFileSync('.nodemon', 'started');
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });
                        nodemon.on('restart', function () {
                            setTimeout(function () {
                                fs.writeFileSync('.nodemon', 'restarted');
                            }, 250);
                        });
                    }
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch', 'coffee', 'sass', 'concat', 'jade', 'uglify'],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concurrent']);
};