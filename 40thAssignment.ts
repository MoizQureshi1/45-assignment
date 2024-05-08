// Task 40

function make_album(artist: string, title: string): {artist: string, title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    }
    return dictionaries
}

let album = make_album("ali", "light")
console.log(album)

album = make_album("sami", "red wave")
console.log(album)

album = make_album("bilal", "seenbreez")
console.log(album)