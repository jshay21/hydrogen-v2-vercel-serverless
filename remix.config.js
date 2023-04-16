/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  // appDirectory: 'app',
  ignoredRouteFiles: ['**/.*'],
  // watchPaths: ['./public'],
  //server: process.env.NODE_ENV === 'development' ? undefined : './server.ts',

  //adding server-dev from here
  // https://shopifyhydrogen.io/blog/how-to-deploy-shopify-hydrogen-2-to-vercel
  server:
    process.env.NODE_ENV === 'development' ? './server-dev.ts' : './server.ts',

  serverBuildPath: 'api/index.js',
  /**
   * The following settings are required to deploy Hydrogen apps to Oxygen:
   */
  publicPath: (process.env.HYDROGEN_ASSET_BASE_URL ?? '/') + 'build/',
  // assetsBuildDirectory: 'dist/client/build',
  // serverBuildPath: 'dist/worker/index.js',
  // serverMainFields: ['browser', 'module', 'main'],
  // serverConditions: ['worker', process.env.NODE_ENV],
  // serverDependenciesToBundle: 'all',
  // serverModuleFormat: 'esm',
  // serverPlatform: 'neutral',
  // serverMinify: process.env.NODE_ENV === 'production',
};
