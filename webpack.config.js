const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        /*
            Babel (babel-loader) is a JavaScript transpiler. 
            We are going to tell Webpack to use it to transform our modern JavaScript code 
            to browser compatible JavaScript code before bundling it.
        */
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        /*
            Webpack needs two additional components for processing HTML: 
            html-webpack-plugin and html-loader.
        */
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,
  
        // Set loaders to transform files.
        // Loaders are applying from right to left(!)
        // The first loader will be applied after others
        use: [
                {
                    // After all CSS loaders we use plugin to do his work.
                    // It gets all transformed CSS and extracts it into separate
                    // single bundled file
                    loader: MiniCssExtractPlugin.loader
                }, 
                {
                    // This loader resolves url() and @imports inside CSS
                    loader: "css-loader",
                },
                {
                    // First we transform SASS to standard CSS
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass")
                    }
                }
            ]
        }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    /*
        The MiniCssExtractPlugin is used to extract all 
        that transformed CSS into separate "bundle" file
    */
    new MiniCssExtractPlugin({
        filename: "bundle.css"
    })
  ]
};