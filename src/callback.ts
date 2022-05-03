// Callbacks

function callback() {
  console.log('À demain tiktok!');
}
function traitementAsynchrone(data: string, next: () => void) {
  console.log(data);
  next();
}
traitementAsynchrone('Bonjour tiktok', callback);

