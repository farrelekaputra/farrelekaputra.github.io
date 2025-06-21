import ghpages from 'gh-pages';

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/farrelekaputra/farrelekaputra.github.io.git',
  message: 'Deploy dari Ai-chan~ ✨',
}, (err) => {
  if (err) {
    console.error('Gagal deploy:', err);
  } else {
    console.log('BERHASIL! Yay!');
  }
});