export const copyClass = (classCopy) => {
  navigator.permissions.query({name: "clipboard-write"}).then(result => {
    if (result.state === "granted" || result.state === "prompt") {
      var copyText = document.getElementById(classCopy);
      copyText.select();
      document.execCommand("copy");
      popUp(classCopy)
    }
  });
}

export const  popUp = (classCopy) => {
  var popup = document.createElement('div');
  popup.className = 'tailwindstorybook-popup';
  popup.innerHTML = "Copy sucesso! <br/> <strong>" + classCopy.replace('__', '')  + '</strong>' ;
  document.body.appendChild(popup);

  Array.from(document.getElementsByClassName("tailwindstorybook-popup")).forEach(function(item) {
      removePopup(item)
  });
}


const removePopup = (_element) => {
    setTimeout(() => {
      if(!!_element) {
        _element.classList.add('remove-popup');
        setTimeout(() => {
          _element.remove()
        }, 800);
      }
    }, 1400);
} 

