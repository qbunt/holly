/**
 * Build system configuration object. 
 * @author Keenan Staffieri
 */

var srcRoot = './src'
var distRoot = './dist'
var docRoot = '/dist/'

module.exports = {
  paths: {
    hollyRoot: __dirname,
    srcRoot: srcRoot,
    distRoot: distRoot,
    distDocRoot: docRoot
  },
  assets: {
    paths: {
      src: srcRoot + '/assets',
      output: distRoot + '/assets'
    }
  },
  styles: {
    paths: {
      src: srcRoot + '/styles',
      output: distRoot + '/css'
    }
  },
  scripts: {
    paths: {
      src: srcRoot + '/scripts',
      output: distRoot + '/js'
    }
  }
}
