function fetchAll(link) {
    return this.$store.dispatch('fetchAll', link).then(response => {
        console.log(response)
    })
}