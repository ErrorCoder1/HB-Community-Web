let firestore = firebase.firestore()

// on page load
$(() => {

  // read clans from database
  firestore.collection("Commands").get().then((querySnapshot) => {
    let Commands = []
    querySnapshot.forEach((doc) => {
      let data = doc.data()
      Commands.push(data)
    })

    for(let Commands of Commands) addCommands(Commands)
  })

  let text = `
  
  </span>
  `
  $('#Commands').append(`<div style="color: white; text-align: center;" class="clan">${text}</div>`)
})


function addCommands(Commands) {
  let html = `
  <div class="clan" id="clan-${Commands.name}">
    <img src="${Commands.image}"/>
    <span class="name">${Commands.name}</span>
    <span class="desc">${Commands.desc}</span>
    <a class="discord" href="https://discord.gg/${Commands.invite}"><img src="https://i.imgur.com/2lEoaBb.png"/></a>
    <span class="memberCount">Members: ${Commands.memberCount}</span>
    <span class="tag">TAG: ${Commands.tag}</span>
  </div>
  `
  $('#Commands').append(html)

}