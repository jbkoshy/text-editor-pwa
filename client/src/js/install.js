const butInstall = document.getElementById("buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("hit");
  console.log("event" + event);
  event.preventDefault();
  //Store triggered events
  window.deferredPrompt = event;

  //Remove hidden class from button
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  //console.log(promptEvent)
  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();

  // Reset deferred prompt variable
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  // Clear prompt
  console.log("install hit");
  window.deferredPrompt = null;
});
