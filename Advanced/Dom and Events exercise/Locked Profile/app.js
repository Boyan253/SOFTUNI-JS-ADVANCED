function lockedProfile() {
  document.querySelector('main').addEventListener('click', ev => {
      if (ev.target.tagName === 'BUTTON') {
          const canShow = ev.target.parentNode.querySelector('input[value=unlock]').checked
          const userFields = ev.target.parentNode.querySelector('div')

          if (canShow) {
              if (userFields.style.display === 'block') {
                  userFields.style.display = 'none'
                  ev.target.textContent = 'Show more'
              } else {
                  userFields.style.display = 'block'
                  ev.target.textContent = 'Hide it'
              }
          }
      }
  })
}

