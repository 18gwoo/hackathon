document.addEventListener('DOMContentLoaded', () => {

    const dogPic = document.getElementById('dogPic');
    const body = document.getElementsByTagName('body');
    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(data => data.json())
        .then(data => {
            const message = data['message'];
            console.log(message)
            dogPic.setAttribute('src', message);
        });
        
    


    const catPic = document.getElementById('catPic');
    fetch('https://api.thecatapi.com/v1/images/search')
        .then((data)=>data.json())
        .then((data)=>{
            // console.log(data[0]["url"])
            catPic.setAttribute('src',data[0]["url"])
        })
        
    fetch("https://corporatebs-generator.sameerkumar.website/")
        .then((data)=>data.json())
        .then((data)=>{
            // console.log(data)
            document.getElementById('title').innerText = data["phrase"]
        })
            

    fetch('https://www.boredapi.com/api/activity')
        .then((data)=>data.json())
        .then((data)=>{
            document.getElementById('activity').innerText = data["activity"]
        })

    function newBuzz(e){
        e.preventDefault();
        fetch('https://corporatebs-generator.sameerkumar.website/')
            .then(data => data.json())
            .then((data)=>{
                document.getElementById('title').innerText = data["phrase"]            
            })
    }


    
    function newDog(e) {
        e.preventDefault();
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(data => data.json())
        .then(data => {
            const message = data['message'];
            console.log(message);
            dogPic.setAttribute('src', message);
        });
    }
    
    function newAct(e) {
        e.preventDefault();
        fetch('https://www.boredapi.com/api/activity')
        .then((data)=>data.json())
        .then((data)=>{
            document.getElementById('activity').innerText = data["activity"]
        });
       
    }

    function newCat(e) {
        e.preventDefault();
        fetch('https://api.thecatapi.com/v1/images/search')
        .then((data)=>data.json())
        .then((data)=>{
            console.log(data[0]["url"])
            catPic.setAttribute('src',data[0]["url"])
        })
    }

    document.querySelector('#newsButton').onclick = newBuzz

    const dogButton = document.querySelector('#dogButton');
    dogButton.onclick = newDog;
    const actButton = document.querySelector('#actButton');
    actButton.onclick = newAct;
    const catButton = document.querySelector('#catButton');
    catButton.onclick = newCat;
    
    // chrome.browserAction.onClicked.addListener(function(tab){
    //     chrome.tabs.create({url: "index.html"})
    // })
    document.addEventListener('keydown', (e) => {
        if (e.key === '1') {
          console.log('click')
          dogButton.click();
        }
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === '2') {
          console.log('click')
          catButton.click();
        }
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === '3') {
          console.log('click')
          newsButton.click();
        }
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === '4') {
          console.log('click')
          actButton.click();
        }
      });
})