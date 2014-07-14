// 包装函数
module.exports = function (grunt) {

    // 任务配置
    grunt.initConfig({
        basePath: '.',
        distPath: 'dist',
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            src: '<%= distPath %>/*'
        },
        ngtemplates: {
            app: {
                cwd: 'template',
                src: '**/*.html',
                dest: '<%= distPath %>/templates.js',
                options: {
                    prefix: 'app/template/',
                    htmlmin: { collapseWhitespace: true, collapseBooleanAttributes: true }
                }
            }
        },
        concat: {
            "all": {
                options: {
                    banner: '/* App */\n'
                },
                src: ['<%= basePath %>/js/*.js'],
                dest: '<%= distPath %>/modules.js'
            }
        },
        uglify: {
            build: {
                src: ['<%= distPath %>/modules.js', '<%= distPath %>/templates.js'],
                dest: '<%= distPath %>/<%= pkg.name %>.min.js'
            }
        }
    });

    // 任务加载
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-angular-templates');


    // 自定义任务

    grunt.registerTask('default', ['clean', 'ngtemplates', 'concat:all', 'uglify']);


};