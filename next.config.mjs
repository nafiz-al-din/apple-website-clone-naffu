/** @type {import('next').NextConfig} */
export default {
    webpack(config, { isServer }) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv|mov|avi)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/videos/',
              outputPath: 'static/videos/',
              name: '[name].[hash].[ext]',
              esModule: false,
            },
          },
        ],
      });
  
      return config;
    },
  };
