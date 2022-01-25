import httpClient from "@/api/httpClient"

export default {
    state: {
        cards: {
            hold: [],
            progress: [],
            reveiw: [],
            approved: []
        },
        columnsMap: {
            0: 'hold',
            1: 'progress',
            2: 'reveiw',
            3: 'approved'
        }
    },
    mutations: {
        createCard: (state, newCard) => {
             const type = state.columnsMap[newCard.row]
             state.cards[type].push(newCard)
        },
        deleteCard: (state, deleteCardData) => {
            state.cards[deleteCardData.type] = state.cards[deleteCardData.type].filter(card => card.id !== deleteCardData.id)
        },
    },
    actions: {
        getCards: async ({commit}) => {
            const res = await httpClient.get("/cards/");
            const cards = res.data
            cards.map((card) => commit('createCard', card))
        },
        newCard: async ({commit}, card) => {
            const res = await httpClient.post('/cards/', card)
            const newCard = res.data
            commit('createCard', newCard)
        },
        delCard: async ({commit}, deleteCardData) => {
            const res = await httpClient.delete('/cards/'+ deleteCardData.id)
            commit('deleteCard', deleteCardData)
        },
        updateCard: async ({commit}, card) => {
            const res = await httpClient.patch('/cards/'+ card.id, {
                row: card.row,
                seq_num: card.seq_num,
                text: card.text
            })
            const newCard = res.data
        }
    },

    getters: {
        allCards: (state) => {
            return state.cards
        },
        columnsMap: (state) => {
            return state.columnsMap
        }

    },
}