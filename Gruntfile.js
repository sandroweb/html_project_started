module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		stylus: {

			compile: {

				files: {
					'css/main.min.css': ['sources/css/*.styl']
				},

				options: {
					compress: true
				}

			}

		},

		uglify: {
			compress: {
			//build: {
				files: {
					'js/main.min.js': ['sources/js/**/*.js', 'sources/js/*.js']
				},
				options: {
					mangle: false
				}
			}
		},

		watch: {
			scripts: {
				files: ['sources/js/*.js', 'sources/js/**/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['sources/css/*.styl','sources/css/**/*.styl'],
				tasks: ['stylus'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify', 'stylus']);
};