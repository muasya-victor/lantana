import router from "vue-router";

export default {
    methods: {
        back(){
            this.router.go(-1)
        }
    }
}