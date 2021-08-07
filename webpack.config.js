//import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin  = require('copy-webpack-plugin')

// export
module.exports = {
    //parcel index.html
    //파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',
    
    
    //결과물(번들)을 반환하는 설정
    //__dirname : 현재 파일이 있는경로
    output: {
        // path: path.resolve(__dirname, 'dist'),   //파일경로
        // filename: 'main.js', //파일이름
        clean: true //그전에 만든 파일 제거
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }   
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}

