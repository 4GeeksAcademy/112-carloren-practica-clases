
export async function getCharacters() {
    try {
        let response = await fetch('https://www.swapi.tech/api/people', {
            method: 'GET'
        })
        let data = await response.json()
        if (response.ok) {
            return (data.results)
        }

    }
    catch (error) {
        console.log(error);

    }
}

export async function getPlanets() {
    try {
        let response = await fetch('https://www.swapi.tech/api/planets', {
            method: 'GET'
        })
        let data = await response.json()
        if (response.ok) {
            return (data.results)
        }
    }
    catch (error) {
        console.log(error);

    }
}