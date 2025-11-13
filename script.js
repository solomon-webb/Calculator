  let display = document.getElementById('disp');
    let justCalculated = false;

    function press(value) {
      if (justCalculated) {
        display.value = '';
        justCalculated = false;
      }
      display.value += value;
    }

    function calculate() {
      try {
        display.value = eval(display.value);

        justCalculated = true;
      } catch {
        display.value = "Syntax Error";
        justCalculated = true;
      }
    }

   
    function clearDisplay() {
      display.value = "";
      justCalculated = false;
    }
  function deletee() {
     if (!justCalculated) {
        display.value = display.value.slice(0, -1);
      }
  }


  if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(() => {
    console.log("Service Worker Registered");
  });
}

window.addEventListener('beforeinstallprompt', (e) => {
     e.prompt(); // Triggers the prompt
   });

   if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker Registered'));
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
   document.getElementById("year").textContent = new Date().getFullYear();
   function copy() {
      let text = document.getElementById("disp");
      
      navigator.clipboard.writeText(text.value) 
      .then (() => alert("text copied successfully " + text.value))
   }
