"use strict";

var fs = require('fs');
var path = require('path');
var srcRoot = __dirname + "/src/coffee";
var srcLibRoot = srcRoot + "/lib";
var publicRoot = __dirname + "/public/js";


var paths = {
    jade: ['src/jade/**/*.jade'],
    sass: ['src/scss/**/*.scss']
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
        uglify: {
          my_target: {
            files: {
              "public/js/application.bundle.min.js": "public/js/application.bundle.js",
              "public/js/home.bundle.min.js": "public/js/home.bundle.js",
              "public/js/vendors.min.js": 
              [
              'public/bower_components/jquery/dist/jquery.min.js',
              'public/bower_components/lodash/lodash.min.js',
              'public/bower_components/angular/angular.min.js',
              'public/bower_components/angular-animate/angular-animate.min.js',
              'public/bower_components/angular-strap/dist/angular-strap.min.js',
              'public/bower_components/angular-strap/dist/angular-strap.tpl.min.js',
              'public/bower_components/angular-ui-router/release/angular-ui-router.min.js',
              'public/bower_components/angular-resource/angular-resource.min.js',
              'public/bower_components/angular-elastic/elastic.js',
              'public/bower_components/angular-loading-bar/build/loading-bar.min.js',
              'public/bower_components/angular-bindonce/bindonce.min.js',
              'public/bower_components/angular-translate/angular-translate.min.js',
              'public/bower_components/angular-translate-loader-partial/angular-translate-loader-partial.min.js',
              'public/bower_components/oclazyload/dist/ocLazyLoad.min.js',
              'public/bower_components/bootstrap/dist/js/bootstrap.min.js'
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

        webpack: {
          webpackDefault: {
            entry: {
              application: srcRoot + "/index.coffee",
              vendors: srcLibRoot + "/index.coffee",
              home: srcLibRoot + "/home/index.coffee"
            },

            output: {
              path: publicRoot,
              filename: "[name].bundle.js",
              chunkFilename: "[id].chunk.js"
            },

            module: {
                loaders: [
                    { test: /\.coffee$/, loader: "coffee-loader" }
                ]
            },
            stats: {
                // Configure the console output
                colors: false,
                modules: true,
                reasons: true
            },

            failOnError: false, // don't report error to grunt if webpack find errors
            // Use this if webpack errors are tolerable and grunt should continue

            watch: true, // use webpacks watcher
            // You need to keep the grunt process alive

            keepalive: true, // don't finish the grunt task
            // Use this in combination with the watch option

          }
        },

        ngdocs: {
          options: {
            dest: 'public/docs',
            startPage: '/api',
            scripts: ['angular.js', '../src.js'],
            html5Mode: true
          },
          all: ['public/js/application.bundle.js']
        },
        clean: ['public/docs'],
        concurrent: {
            tasks: ['clean', 'webpack', 'watch', 'sass', 'jade', 'uglify', 'ngdocs', 'nodemon'],
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-webpack');

    // for docs
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['concurrent']);
};