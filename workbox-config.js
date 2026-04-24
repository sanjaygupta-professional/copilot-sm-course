module.exports = {
  globDirectory: 'final-version-static-site/',
  globPatterns: [
    'index.html',
    'course.html',
    'module-*.html'
  ],
  swDest: 'final-version-static-site/sw.js',
  skipWaiting: true,
  clientsClaim: true,
};
