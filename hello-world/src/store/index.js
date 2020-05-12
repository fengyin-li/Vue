import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")):{  
        header:true,
        top:true,
        right:true,
    },
    mutations:{
        changeHeader(state,payload){
            state.header = payload
        },
        changeTop(state,payload){
            state.top = payload
        },
        changeRight(state,payload){
            state.right = payload
        },
    }
})

export default store