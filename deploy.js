const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/farrelekaputra/farrelekaputra.github.io.git',
  message: 'Deploy React App via Ai-chan ✨',
}, function (err) {
  if (err) {
    console.error('Deploy GAGAL (ಥ﹏ಥ):', err);
  } else {
    console.log('Deploy sukses! ✨🥳✨');
  }
});