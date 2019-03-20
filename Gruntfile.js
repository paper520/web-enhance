'use strict';

module.exports = function (grunt) {

    /*配置插件*/
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {//本地服务器
                options: {
                    keepalive: true,
                    port: 20000,
                    base: '.'
                }
            }
        }
    });

    /*加载插件*/
    grunt.loadNpmTasks('grunt-contrib-connect');

    /*注册任务*/
    grunt.registerTask('server', ['connect:server']);
};