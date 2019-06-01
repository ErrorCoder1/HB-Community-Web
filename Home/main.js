let firestore = firebase.firestore()

// on page load
$(() => {

  // read clans from database
  firestore.collection("Home").get().then((querySnapshot) => {
    let Home = []
    querySnapshot.forEach((doc) => {
      let data = doc.data()
      Home.push(data)
    })

    for(let Home of Home) addClan(Home)
  })

  let text = `
  
  </span>
  `
  $('#Home').append(`<div style="color: white; text-align: center;" class="clan">${text}</div>`)
})


function addHome(Home) {
  let html = `
  <div class="clan" id="clan-${Home.name}">
    <img src="${Home.image}"/>
    <span class="name">${Home.name}</span>
    <span class="desc">${Home.desc}</span>
    <a class="discord" href="https://discord.gg/${Home.invite}"><img src="https://i.imgur.com/2lEoaBb.png"/></a>
    <span class="memberCount">Members: ${Home.memberCount}</span>
    <span class="tag">TAG: ${Home.tag}</span>
  </div>
  `
  $('#Home').append(html)

}