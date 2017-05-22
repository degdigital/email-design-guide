module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-copy');

	var path = require('path');

	grunt.config.merge({
		copy: {
			"patterns_export": {
				"files": [
					{
				        "expand": true,
				        "cwd": "<%= activeTheme.public.assetPaths.patterns %>",
				        "src": ["**/*-pages-*.html", "!**/*-pages-*.markup-only.html"],
				        "dest": path.normalize("<%= activeTheme.export.assetPaths.patterns %>/"),
				        "flatten": true,
				        "filter": 'isFile',
				        "rename": function(dest, src) {
				        	let digits = src.match(/\d+/g),
				        		lastDigit = src.lastIndexOf(digits[digits.length - 1]),
				        		fileName = src.substr(lastDigit + 3);
				            return dest + fileName;
				        }
				    },
				    {
				        "expand": true,
				        "cwd": "<%= activeTheme.public.assetPaths.patterns %>",
				        "src": ["**/*-components-*-*.markup-only.html", "!**/*-components-*-_*.markup-only.html"],
				        "dest": path.normalize("<%= activeTheme.export.assetPaths.patterns %>/components/"),
				        "flatten": true,
				        "filter": 'isFile',
				        "rename": function(dest, src) {
				        	let digits = src.match(/\d+/g),
				        		lastDigit = src.lastIndexOf(digits[digits.length - 1]),
				        		fileName = src.substr(lastDigit + 3).replace('.markup-only', '');

				        	return dest + fileName;
				        }
				    }
			    ]
			}
		}
	});
}