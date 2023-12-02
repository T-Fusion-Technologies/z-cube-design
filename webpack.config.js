
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const isDevelopment = process.env.NODE_ENV !== 'production'
// module.exports = {
//   entry: './js/index.js', // Update with your entry file
//   output: {
//     filename: 'bundle.js', // Update with your desired output file name
//     path: path.resolve(__dirname, 'dist'), // Update with your desired output directory
//   },
//   // Add other webpack configurations if needed
// };
console.log('dotenv ', dotenv);
module.exports = {
  // The entry point file described above
  entry: './js/index.js',
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
      'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
    }),
  ].filter(Boolean),
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',
  watch: true,
};



