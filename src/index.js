require.context("./", true, /\.scss$/);

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context("./blocks", true, /index\.js$/));

$('form').on('submit', e => e.preventDefault());