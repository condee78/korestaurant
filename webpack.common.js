const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/scripts/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", // <-- retain original file name
              outputPath: "hero-image",
              publicPath: "hero-image",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/templates/index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
          globOptions: {
            ignore: ["**/images/heros/**"], // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
          },
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        imageminPngquant(),
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, "src/scripts/sw.js"),
    }),
    new WebpackPwaManifest({
      name: "Korestaurant",
      short_name: "Koresto",
      filename: "manifest.json",
      description: "Aplikasi PWA Restaurants",
      start_url: "index.html",
      display: "standalone",
      background_color: "#152c5b",
      theme_color: "#152c5b",
      ios: true,
      crossorigin: "use-credentials", // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve("src/public/images/icons/icon.png"),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512],
          type: "image/png",
          purpose: "any",
          destination: "icons",
        },
        {
          src: path.resolve("src/public/images/icons/maskable/icon.png"),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512],
          type: "image/png",
          purpose: "maskable",
          destination: "icons/maskable",
        },
        {
          src: path.resolve("src/public/images/icons/icon.png"),
          sizes: [120, 152, 167, 180, 192],
          purpose: "maskable",
          destination: "icons/ios",
        },
      ],
    }),
  ],
};
