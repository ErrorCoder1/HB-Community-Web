let firestore = firebase.firestore()

// on page load
$(() => {

  // read clans from database
  firestore.collection("Updates").get().then((querySnapshot) => {
    let Updates = []
    querySnapshot.forEach((doc) => {
      let data = doc.data()
      Updates.push(data)
    })

    for(let Updates of Updates) addSettings(Settings)
  })

  let text = `
  
  </span>
  `
  $('#Updates').append(`<div style="color: white; text-align: center;" class="clan">${text}</div>`)
})


function addUpdates(Updates) {
  let html = `
  <div class="clan" id="clan-${Updates.name}">
    <img src="${Updates.image}"/>
    <span class="name">${Updates.name}</span>
    <span class="desc">${Updates.desc}</span>
    <a class="discord" href="https://discord.gg/${Updates.invite}"><img src="https://i.imgur.com/2lEoaBb.png"/></a>
    <span class="memberCount">Members: ${Updates.memberCount}</span>
    <span class="tag">TAG: ${Updates.tag}</span>
  </div>
  `
  $('#Updates').append(html)

}