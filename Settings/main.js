let firestore = firebase.firestore()

// on page load
$(() => {

  // read clans from database
  firestore.collection("Settings").get().then((querySnapshot) => {
    let Settings = []
    querySnapshot.forEach((doc) => {
      let data = doc.data()
      Settings.push(data)
    })

    for(let Settings of Settings) addSettings(Settings)
  })

  let text = `
  
  </span>
  `
  $('#Settings').append(`<div style="color: white; text-align: center;" class="clan">${text}</div>`)
})


function addSettings(Settings) {
  let html = `
  <div class="clan" id="clan-${Settings.name}">
    <img src="${Settings.image}"/>
    <span class="name">${Settings.name}</span>
    <span class="desc">${Settings.desc}</span>
    <a class="discord" href="https://discord.gg/${Settings.invite}"><img src="https://i.imgur.com/2lEoaBb.png"/></a>
    <span class="memberCount">Members: ${Settings.memberCount}</span>
    <span class="tag">TAG: ${Settings.tag}</span>
  </div>
  `
  $('#Settings').append(html)

}