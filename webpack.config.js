var path = require('path');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!bootstrap/dist/js/bootstrap.min.js',
        './app/app.jsx'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        alias: {
            ProjectManagerApp: './app/components/ProjectManagerApp.jsx'
        },
        modules: ['app', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }],
            },            
        ]
    }
};