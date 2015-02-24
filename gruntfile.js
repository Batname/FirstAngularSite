'use strict';

var fs = require('fs');

var paths = {
    jade: ['src/jade/**/*.jade'],
    js: ['src/js/**/*.js'],
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
        nodemon: {
            dev: {
                script: './app/index.js',
                options: {
                    nodeArgs: ['--debug', '--harmony'],
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
            tasks: ['nodemon', 'watch', 'sass', 'concat', 'jade'],
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
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concurrent']);
};