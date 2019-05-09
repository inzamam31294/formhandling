import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        message: 'Hello Vuex',
        message1: 'Hello',
        message2: 'Vuex',
    },
    mutations: {
        updateMessage (state, message) {
            state.message = message
        },
        updateMessage1 (state, message1) {
            state.message1 = message1
        },
        updateMessage2 (state, message2) {
            state.message2 = message2
        }
    }
})

import { mapState } from 'vuex';

new Vue({ 
    el: '#app',
    store,
    data: {
    },
    computed: {
        message: {
            get () {
                return this.$store.state.message
            },
            set (value) {
                this.$store.commit('updateMessage', value)
            }
        },
        message1: {
            get () {
                return this.$store.state.message1
            },
            set (value) {
                this.$store.commit('updateMessage1', value)
            }
        },
        message2: {
            get () {
                return this.$store.state.message2
            },
            set (value) {
                this.$store.commit('updateMessage2', value)
            }
        }
    },
    methods: {
        updateMessage (e) {
            this.$store.commit('updateMessage', e.target.value)
        },
        updateMessage1 (e) {
            this.$store.commit('updateMessage1', e.target.value)
        },
        updateMessage2 (e) {
            this.$store.commit('updateMessage2', e.target.value)
        }
    }
})
