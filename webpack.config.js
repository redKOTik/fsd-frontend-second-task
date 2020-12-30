const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cssLoaders = extra => {
    const loaders = [ {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: true,
            reloadAll: true
        }
    }, 'css-loader'];

    if(extra) {
        loaders.push(extra);
    }

    return loaders;
}

const PAGES_DIR = `${path.resolve(__dirname, 'src/pug/pages')}`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(filename => filename.endsWith('.pug'));


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: '../src',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].[id].js',
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            '@multiselect': path.join(__dirname, "src/assets/plugins/multiselect/multiselect"),
            '@datepicker': path.join(__dirname, "src/assets/plugins/datepicker/datepicker")
        }
    },
    module: {
        rules: [            
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/, 
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            { 
                test: /\.pug$/,
                exclude: /node_modules/, 
                loader: "pug-loader" 
            },
            { 
                test: /\.(png|svg|gif|jpg)$/, 
                exclude: /node_modules/, 
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: path.resolve(__dirname, 'dist/images'),
                            useRelativePath: true
                        }
                    }, 
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            svgo: {
                                progressive: true,
                                quality: 80
                            }
                        }
                    }
                ]
            },
            { 
                test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, 
                exclude: /node_modules/, 
                loader: "file-loader", 
            },
            {
                test: /\.bundle\.js$/,
                use: {
                    loader: 'bundle-loader',
                    options: {
                    name: 'my-chunk'
                    }
                }
            }
        ]
    },
    devServer: {
        port: 8082,
        hot: false,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: true     
    },
    plugins: [
        ...PAGES.map(page => new HTMLWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
          })),    
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({ 
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/static/favicon.ico'), to: path.resolve(__dirname, 'dist/assets')
                },
                {   
                    from: path.resolve(__dirname, 'src/assets/fonts'), to: path.resolve(__dirname, 'dist/assets/fonts')
                },
                {   
                    from: path.resolve(__dirname, 'src/assets/img'), to: path.resolve(__dirname, 'dist/assets/img')
                },
                {   
                    from: path.resolve(__dirname, 'src/blocks'), to: path.resolve(__dirname, 'dist/assets/img'),
                    globOptions: {
                        ignore: [
                          // Ignore all `txt` files
                          '**/*.js', 
                          '**/*.scss',
                          '**/*.pug'
                        ],
                      },
                },
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery',
            moment: 'moment'
        })
    ]
}