let searchInput = document.getElementsByClassName("form-control me-2")[0]
let searchBtn = document.getElementsByClassName("btn btn-outline-success my-2 my-sm-0")[0]

// let actionGenres = document.getElementsByClassName("dropdown-item action")[0]
let dropdownMenu = document.getElementsByClassName("dropdown-menu")[0]
let dropdownItem = document.getElementsByClassName("dropdown-item")



let initListDisplay = () => {

    let api = {
        url: "https://api.themoviedb.org/3/movie/",
        key: "api_key=8ff5e2fbb1b643a55f0256bb89a8a192",

    }

    let apiImg = {
        url: "https://image.tmdb.org/t/p/w200"
    }


    // let urls = [
    //     (`${api.url}now_playing?${api.key}&language=en-US&page=1`),
    //     (`${api.url}upcoming?${api.key}&language=en-US&page=1&region=CA`),
    //     (`https://api.themoviedb.org/3/genre/movie/list?${api.key}&language=en-US`)
    // ]

    let url = (`https://api.themoviedb.org/3/genre/movie/list?${api.key}&language=en-US`)

    
        fetch(url)
        .then(resp => resp.json())
 
        .then(data => {
            // nowPlayingDisplay(data[0])
            // upcomingDisplay(data[1])
            genreListDisplay(data)
            console.log(data.genres)
        })

}

let genreListDisplay = (data) => {

    for (let i = 0; i < data.genres.length; i++) {

        console.log(data.genres[i])

        let ul = dropdownMenu
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.className = (`dropdown-item ${data.genres[i].id} ${data.genres[i].name}`)
        ul.appendChild(li)
        li.appendChild(a)
        a.innerText = (`${data.genres[i].name}`)
        a.setAttribute("href", `./genre.html?id=${data.genres[i].id}=${data.genres[i].name}`)
        a.setAttribute("id", `${data.genres[i].id}`)

        // dropdownItem[i].addEventListener("click", clickGenre(data.genres[i].id))
    }
}

let clickGenre = (id) => {


    const clickGenreData = id
    console.log(clickGenreData)
        localStorage.setItem("GENRE", clickGenreData)
        window.open("./genre.html", "_self");

}

let saveData = () => {


    const searchQueryData = searchInput.value

    if (!searchQueryData == "") {
        localStorage.setItem("SEARCH", searchQueryData)
        window.open("./search.html", "_self");
    }else{
        return alert("Please enter keywords")
    }
}

searchBtn.addEventListener("click", saveData)
// window.addEventListener("load", initListDisplay)
initListDisplay()





// let genreListDisplay = (genre) => {



//     clickGenre = (gerneId) => {
//         Promise.all(urls.map(url =>
//             fetch(url).then(resp => resp.json())
//         ))
//             .then(data => {
//                 console.log(data[0])
//                 console.log(data[1])
//                 console.log(data[1].results[0].genre_ids)

//                 let title = document.getElementsByClassName("catagoryBanner")[0]
//                 let h4 = title.getElementsByTagName("h4")[0]
//                 h4.innerText = (`${genreName}`)
//                 nowPlaying.className = (`row genresResult`)

//                 for (i = 0; i < upcomingList.length; i++) {
//                     nowPlayingUl.appendChild(upcomingList[0])

//                 }

//                 for (i = 0; i < nowPlayingList.length; i++) {

//                     if (nowPlayingList[i].id.includes(gerneId)) {
//                         nowPlayingList[i].style.display = ""

//                     } else if (!nowPlayingList[i].id.includes(gerneId)) {
//                         nowPlayingList[i].style.display = "none"
//                     }
//                 }


//             })
//         upcoming.remove()
//     }
//     for (let i = 0; i < genre.genres.length; i++) {

//         console.log(genre.genres[i])

//         let ul = dropdownMenu
//         let li = document.createElement("li")
//         let a = document.createElement("a")
//         a.className = (`dropdown-item ${genre.genres[i].id} ${genre.genres[i].name}`)
//         ul.appendChild(li)
//         li.appendChild(a)
//         a.innerText = (`${genre.genres[i].name}`)
//         a.setAttribute("href", `./genre.html?id=${genre.genres[i].id}=${genre.genres[i].name}`)
//         a.setAttribute("id", `${genre.genres[i].id}`)

//         dropdownItem[i].addEventListener("click", clickGenre)
//     }


// }

// let nowPlayingDisplay = (movie) => {
//     console.log(movie)
//     // console.log(`${apiImg.url}${movie.results[0].poster_path}`)

//     for (let i = 0; i < movie.results.length; i++) {

//         let ul = nowPlaying.getElementsByTagName("ul")[0]
//         let li = document.createElement("li")
//         li.className = "nowPlayingMovie"
//         ul.appendChild(li)
//         let a = document.createElement("a")
//         a.setAttribute("href", `./info.html?id=${movie.results[i].id}`)
//         li.appendChild(a)

//         li.setAttribute("id", `${movie.results[i].genre_ids}`)
//         let img = document.createElement("img")
//         img.setAttribute("src", (`${apiImg.url}${movie.results[i].poster_path}`))
//         a.appendChild(img)
//         let p = document.createElement("p")
//         p.innerHTML = (`${movie.results[i].title}`)
//         a.appendChild(p)
//     }
// }

// let upcomingDisplay = (movie) => {
//     console.log(movie)
//     // console.log(`${apiImg.url}${movie.results[0].poster_path}`)

//     for (let i = 0; i < movie.results.length; i++) {

//         let ul = upcoming.getElementsByTagName("ul")[0]
//         let li = document.createElement("li")
//         li.className = "upcomingMovie"
//         ul.appendChild(li)
//         let a = document.createElement("a")
//         a.setAttribute("href", `./info.html?id=${movie.results[i].id}`)
//         li.appendChild(a)

//         li.setAttribute("id", `${movie.results[i].genre_ids}`)
//         let img = document.createElement("img")
//         img.setAttribute("src", (`${apiImg.url}${movie.results[i].poster_path}`))
//         a.appendChild(img)
//         let p = document.createElement("p")
//         p.innerHTML = (`${movie.results[i].title}`)
//         a.appendChild(p)
//     }

// }
// // window.addEventListener("load",initDisplay )

// initDisplay()