var beforeInstallPrompt = null;
window.addEventListener("beforeinstallprompt", eventHandler, errorHandler);

function eventHandler(event) {
  beforeInstallPrompt = event;
  document.getElementById('installBtn').removeAttribute('disabled');
}
function errorHandler(e) {
  console.log('error: ' + e);
}
function install() {
  if (beforeInstallEvent) beforeInstallPrompt.prompt();
}