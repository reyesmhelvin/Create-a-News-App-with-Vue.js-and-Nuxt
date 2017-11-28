import axios from "~/plugins/axios"

export const state = () => ({
    news: [{
        id: 0,
        login: "mhelvin"
    }]
})

export const mutations = {
    setNews(state, news) {
        state.news = news
    }
}

export const actions = {
    async nuxtServerInit({commit}) {
        const response = await axios.get("news")
        console.log(response)
        const news = response.data

        commit("setNews", news)
    }
}