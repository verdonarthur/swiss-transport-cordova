const STORAGE_BOOKMARKS_NAME = "bookmarksStationsList"


export default class Bookmarks {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    save() {
        let favoriteStations = localStorage.getItem(STORAGE_BOOKMARKS_NAME) ? JSON.parse(localStorage.getItem(STORAGE_BOOKMARKS_NAME)) : { stations: [] }

        if (!favoriteStations.stations.find((station) => {
            return station.id == this.id
        })) {
            favoriteStations.stations.push({ id: this.id, name: this.name })
            localStorage.setItem(STORAGE_BOOKMARKS_NAME, JSON.stringify(favoriteStations))
        }

    }

    static removeById(id) {
        let bookmarks = this.getSavedBookmarks();
        let index = bookmarks.stations.findIndex((station) => {
            return station.id == id
        })
        if (index != undefined) {
            bookmarks.stations.splice(index, 1)
            localStorage.setItem(STORAGE_BOOKMARKS_NAME, JSON.stringify(bookmarks))
        }
    }

    static getSavedBookmarks() {
        return JSON.parse(localStorage.getItem(STORAGE_BOOKMARKS_NAME))
    }
}