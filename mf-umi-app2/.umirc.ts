import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require("webpack").container;

export default defineConfig({
  publicPath: "http://localhost:8001/",
  nodeModulesTransform: {
    type: 'none',
  },
  devServer: {
    port: 8001
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  webpack5: {},
  dynamicImport: {},
  mfsu: {},
  plugins: [
    // './plugins/mf-bootstrap.js'
  ],
  chainWebpack(memo) {
    memo
      .plugin('mf')
      .use(ModuleFederationPlugin, [{
        name: "umiapp2",
        library: { type: 'umd', name: 'umiapp2' },
        filename: "remoteEntry.js",
        exposes: {
          "./Button": './src/components/Button',
        },
        // shared: { react: { eager: true }, "react-dom": { eager: true } }











        // shared: {
        //   react: {
        //     eager: true,
        //     singleton: true,
        //   },
        //   "react-dom": {
        //     eager: true,
        //     singleton: true,
        //   },
        //   lodash: {
        //     eager: true,
        //     singleton: true,
        //   },
        // }
      }])
  },
});
