function solve() {
    let firstName = document.getElementById('first-name')
    let lastName = document.getElementById('last-name')
    let age = document.getElementById('age')
    let storyTitle = document.getElementById('story-title')
    let genre = document.getElementById('genre')
   
    let main = document.getElementById('main')
    let storyContent = document.getElementById('story')
   
    let previewListUl = document.getElementById('preview-list')
   
    let publishBtn = document.getElementById('form-btn')
    publishBtn.addEventListener('click', publish)
    function publish(ev){
        ev.preventDefault()
      if(firstName.value && lastName.value && age.value && storyTitle.value && storyContent.value){
        previewListUl.innerHTML += `
        <li class="story-info">
          <article>
            <h4>Name: ${firstName.value} ${lastName.value}</h4>
            <p>Age: ${age.value}</p>
            <p>Title: ${storyTitle.value}</p>
            <p>Genre: ${genre.value}</p>
            <p>${storyContent.value}</p>
          </article>
          <button class="save-btn">Save Story</button>
          <button class="edit-btn">Edit Story</button>
          <button class="delete-btn">Delete Story</button>
        </li>`
        firstName.value = ''
        lastName.value = ''
        age.value = ''
        storyTitle.value = ''
        storyContent.value = ''
        genre.value = ''
        document.getElementById('form-btn').disabled = true
   
        Array.from(document.getElementsByClassName('edit-btn'))
        .forEach(el => el.addEventListener('click', edit))
        function edit(ev){
            ev.preventDefault()
          let parent = ev.target.parentNode;
          let parentText = parent.children[0]
          let splittedName = parentText.children[0].textContent.split('Name: ')[1]
          let first = splittedName.split(' ')[0]
          let second = splittedName.split(' ')[1]
   
   
          let splittedAge = parentText.children[1].textContent.split('Age: ')
          let agee = splittedAge[1]
          let splittedTitle = parentText.children[2].textContent.split('Title: ')[1]
          let splittedGenre = parentText.children[3].textContent.split('Genre: ')[1]
          firstName.value = first
          lastName.value = second
          age.value = agee
          storyTitle.value = splittedTitle
          genre.value = splittedGenre
          storyContent.value = parentText.children[4].textContent
 
          document.getElementById('form-btn').disabled = false
          Array.from(document.getElementsByClassName('save-btn')).forEach(el => el.disabled = true)
          Array.from(document.getElementsByClassName('edit-btn')).forEach(el => el.disabled = true)
          Array.from(document.getElementsByClassName('delete-btn')).forEach(el => el.disabled = true)
   
          parent.remove()
        }
        Array.from(document.getElementsByClassName('save-btn'))
        .forEach(el => el.addEventListener('click', save))
        function save(ev){
          main.innerHTML = `<h1>Your scary story is saved!</h1>`
        }
        Array.from(document.getElementsByClassName('delete-btn'))
        .forEach(el => el.addEventListener('click', del))
        function del(ev){
          let parent = ev.target.parentNode;
          parent.remove() 
          document.getElementById('form-btn').disabled = false
        }
   
      }
    }
  }