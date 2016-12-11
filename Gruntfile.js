module.exports = function(grunt) {

  // grunt responsive_images --targetdir=sofas

  var targetdir = grunt.option("targetdir") || ""
  // http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
  grunt.initConfig({
    responsive_images: {
       main: {
         options: {
           engine: "im",
           separator: "_",
           sizes: [{
             quality: 90,
             name: "lg",
             upscale: true,
             width: 1200,
             height: 860
           }, {
             quality: 90,
             name: "md",
             upscale: true,
             width: 600,
             height: 430
           }, {
             quality: 80,
             name: "sm",
             aspectRatio: false,
             upscale: true,
             width: 234,
             height: 167
           }]
         },
         files: [{
           expand: true,
           src: ["**/*.jpg"],
           cwd: "todo/" + targetdir,
           dest: "dest/" + targetdir
         }]
       }
    }
  });

  grunt.loadNpmTasks("grunt-responsive-images");
  grunt.registerTask("default", ["responsive_images"]);


}
