'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            options: {
                port: 9001,
                hostname: 'localhost',
                keepalive: true
            },
            livereload: {
                options: {
                    open: {
                        target: 'http://localhost:<%= connect.options.port %>'
                    },
                    base: [
                        'client'
                    ]
                }
            }
        }
    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'connect:livereload',
            'open'
        ]);
    });

};