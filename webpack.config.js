var webpack = require('webpack');
module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: __dirname + '/static',
        publicPath: 'http://localhost:8080/static/',
        filename: 'index.js'
    },
    module: {
        rules: [
            {test:/\.less$/,use:["style-loader", "css-loader","less-loader"]},
            {
                test:/\.js/,
                loader: "babel-loader",
                exclude: /node_modules/,//转换
                query:{
                    presets:[
                        require.resolve('babel-preset-es2015'),
                        require.resolve('babel-preset-react'),
                        require.resolve('babel-preset-stage-0'),
                    ]
                }
            },
            {test: /\.(jpg|png)$/,use: "url-loader"}
        ]
    },
    devServer:{
        port:8080,
        historyApiFallback: true,  //不允许历史回退
        inline: true,
    },
    plugins:[
        // providePlugin,
        // new webpack.NoEmitOnErrorsPlugin(),
    ]
}