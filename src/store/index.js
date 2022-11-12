import { createStore } from 'vuex'

import {base_url , headers} from '../utils/constants'
import api from "../utils/api";
import {Error, Success} from "../utils/error_success";


const state = {
    rooms:[],
    restaurant_cart_items:[]
}
const getters = {
    getRooms(state){
        return state.rooms
    },
    getRestaurantCartItems(state){
        return state.restaurant_cart_items
    }
}
const mutations = {
    setRooms(state,payload){
        state.rooms = payload
    },
    setRestaurantCartItems(state,payload){
        state.restaurant_cart_items = payload
    }
}
const actions = {

    async fetchData ({ commit, state }, payload) {

        return await api.get(`${base_url}${payload.url}`)
            .then(response => {
                    return response
                }
            ).catch(err => {
                return err
                throw err

            })

    },
    async fetchItem ({ commit, state }, payload) {
        try {
            return await api.get(`${base_url}${payload.url}/${payload.id}/`)
                .then(response => {
                        commit("setAgents", response.data)
                        return response
                    }
                )

        }catch (err){
            throw err
        }

    },
    async postData ({ state, commit }, payload) {
        try {
            const response = await api.post(`${base_url}${payload.url}/`, payload.value, { headers })
            Success()

        } catch (err) {
            throw err
            Error()

        }
    },

    async patchItem ({ state, commit }, payload) {
        try {
            const response = await api.patch(`${base_url}${payload.url}/${payload.id}/`, payload.value, { headers })
            Success()
        } catch (err) {
            throw err
            Error()
        }
    },
    async deleteItem ({ state, commit }, payload) {
        try {
            const response = await api.delete(`${base_url}${payload.url}`, { headers })
            Success()
        } catch (err) {
            throw err
            Error()
        }
    },
}

export default createStore({
    state,getters,mutations,actions
})