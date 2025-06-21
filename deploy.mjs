import ghpages from 'gh-pages';

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/farrelekaputra/farrelekaputra.github.io.git',
  message: 'Deploy with love 💖 from Ai-chan~',
}, function (err) {
  if (err) {
    console.error('Deploy gagal:', err);
  } else {
    console.log('Deploy sukses! 🥳');
  }
});