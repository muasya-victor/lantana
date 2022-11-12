export default {
    watch: {
        $route (to, from) {
            this.refreshData()
        },
    }
}