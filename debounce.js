// Fonction debounce sans options
function debounce(func, delay) {
    let timerId;
  
    return function (...args) {
      // Effacer le timer existant
      clearTimeout(timerId);
  
      // Créer un nouveau timer
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  
  // Fonction opDebounce avec option leading
  function opDebounce(func, delay, leading = false) {
    let timerId;
    let immediate = true; // Utilisé pour suivre si la fonction a été appelée immédiatement
  
    return function (...args) {
      if (leading && immediate) {
        func(...args); // Exécute la fonction immédiatement si leading est true
        immediate = false;
      } else {
        clearTimeout(timerId); // Effacer le timer existant
        timerId = setTimeout(
            () => {
                func(...args)
                immediate = true
            },
            delay
        )
      }
    }
  }

  // Exemple d'utilisation de debounce sans options
  const debouncedFunction = debounce(function () {
    console.log('La fonction debounced a été appelée.');
  }, 500);
  
  // Utilisation de debouncedFunction
  debouncedFunction(); // Cette fonction ne sera pas immédiatement exécutée
  setTimeout(() => {
    debouncedFunction(); // Attendez 500ms, puis la fonction sera exécutée
  }, 600);
  
  // Exemple d'utilisation de opDebounce avec option leading
  const opDebouncedFunction = opDebounce(function () {
    console.log('La fonction opDebounced a été appelée.');
  }, 500, true);
  
  // Utilisation de opDebouncedFunction
  opDebouncedFunction(); // Cette fonction sera immédiatement exécutée
  setTimeout(() => {
    opDebouncedFunction(); // Attendez 500ms, la fonction sera exécutée à nouveau
  }, 600);
  