// Fonction throttle sans options
function throttle(func, delay) {
    // Variable pour suivre l'état du throttling
    let isThrottled = false;
  
    // Renvoie une fonction qui agit comme un throttler
    return function (...args) {
      // Vérifie si la fonction n'est pas déjà en cours d'exécution (non throttled)
      if (!isThrottled) {
        // Exécute la fonction avec les arguments passés
        func(...args);
        
        // Active le throttling en réglant isThrottled à true
        isThrottled = true;
  
        // Définit un délai pour réinitialiser isThrottled à false
        setTimeout(
            () => {
                isThrottled = false;
            },
            delay
        );
      }
    };
}
  
function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    let last = 0;
    let timer = null;
    
    return /*function ()*/ function(...args) {
        const now = +new Date();
        if (!last && leading === false) {
            last = now;
        }
        if (now - last > delay) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            //fn.apply(this, arguments);
            fn(...args);
            last = now;
        } else if (!timer && trailing !== false) {
            timer = setTimeout(
                () => {
                    //fn.apply(this, arguments);
                    fn(...args);
                    last = +new Date();
                    timer = null;
                },
                delay
            );
        }
    };
}

  //example d'utilisation

  // Définition de la fonction printMessage
function printMessage(message) {
    console.log(message);
  }
  
  // Utilisation de opThrottle avec options leading et trailing
  const throttledPrint = opThrottle(printMessage, 2000, { leading: true, trailing: true });
  
  // Appelons la fonction plusieurs fois avec un délai très court
  throttledPrint("Premier appel"); // La fonction sera exécutée immédiatement
  setTimeout(() => {
    throttledPrint("Deuxième appel"); // La fonction sera retardée de 2 secondes
  }, 500);
  
  setTimeout(() => {
    throttledPrint("Troisième appel"); // La fonction sera ignorée en raison du trailing
  }, 1000);
  
  setTimeout(() => {
    throttledPrint("Quatrième appel"); // La fonction sera exécutée après un délai de 2 secondes
  }, 2500);
  