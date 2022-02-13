const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig_Dev = require('./webpack.dev');
const webpackConfig_Prod = require('./webpack.prod');

const NODE_ENV = {
    NODE_ENV_Production: 'production',
    NODE_ENV_Development: 'development',
}

module.exports = (env) => {
    console.log(env);
    let config;
    if (env.NODE_ENV === NODE_ENV.NODE_ENV_Development) {
        config = webpackConfig_Dev;
    } else if (env.NODE_ENV === NODE_ENV.NODE_ENV_Production) {
        config = webpackConfig_Prod;
    } else {
        console.error("请在package的script里配置NODE_ENV, 默认development");
        config = webpackConfig_Dev;
    }
    return config;
}