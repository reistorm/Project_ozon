const getData = () => {
    return fetch('https://projectozon-efaaa-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json
        })
}

export default getData;