import axios from '@/utils/axiosInterceptors'

export const types = {
    SET_EVENT: 'SET_EVENT',
    RESET_EVENT: 'RESET_EVENT',
    SET_EVENTS: 'SET_EVENTS',
    SET_EVENTS_LOADING: 'SET_EVENTS_LOADING',
    MORE_EVENTS: 'MORE_EVENTS',
    SET_MORE_EVENTS_LOADING: 'SET_MORE_EVENTS_LOADING',
    INCREASE_EVENTS_OFFSET: 'INCREASE_EVENTS_OFFSET',
    SET_EVENTS_META: 'SET_EVENTS_META',
}

const event = {
    namespaced: true,
    state: () => ({
        offset: 0,
        limit: 12,
        events: [],
        isEventsLoading: false,
        isMoreEventsLoading: false,
        eventsMeta: null,
        event: null,
    }),
    mutations: {
        [types.SET_EVENT](state, event){
            state.event = {...event}
        },
        [types.RESET_EVENT](state){
            state.event = null
        },
        [types.SET_EVENTS](state, events){
            state.events = [...events]
        },
        [types.SET_EVENTS_LOADING](state, isLoading){
            state.isEventsLoading = isLoading
        },
        [types.SET_MORE_EVENTS_LOADING](state, isLoading){
            state.isMoreEventsLoading = isLoading
        },
        [types.MORE_EVENTS](state, events){
            state.events.push(...events)
        },
        [types.INCREASE_EVENTS_OFFSET](state){
            state.offset = state.offset + state.limit
        },
        [types.SET_EVENTS_META](state, meta){
            state.eventsMeta = {...meta}
        }
    },
    actions: {
        async fetchEvents({commit, state}, params) {
            commit(types.SET_EVENTS_LOADING, true)
            await axios.get("events",{ 
                params:{ 
                    limit: params?.limit ?? state.limit,
                    offset: params?.offset ?? state.offset,
                    startsAt: params?.startsAt ,
                    endsAt: params?.endsAt
                }
                }).then(result => {
                    commit(types.SET_EVENTS, result.items)
                    commit(types.SET_EVENTS_META, result.pagination)
                    commit(types.SET_EVENTS_LOADING, false)
                }).catch((e) => {
                    console.log(e)
                })
        },
        async fetchMoreEvents({commit, state}) {
            commit(types.SET_MORE_EVENTS_LOADING, true)
            await commit(types.INCREASE_EVENTS_OFFSET)
            await axios.get("events",{ 
                params:{ 
                    limit: state.limit,
                    offset: state.offset
                }
            }).then(result => {
                commit(types.MORE_EVENTS, result.items)
                commit(types.SET_MORE_EVENTS_LOADING, false)
            }).catch((e) => {
                console.log(e)
            })
        },
        async fetchEventById({ commit }, eventId) {
            await commit(types.RESET_EVENT,)
            await axios.get(`events/${eventId}`).then(result => {
                commit(types.SET_EVENT, result)
                }).catch((e) => {
                    this.$router.redirect('/404')
                    console.log(e)
                })
        },
    },
    getters: {
        eventDetail: (state) => state.event,
        events: (state) => state.events ?? [],
        totalEvents: (state) => state.eventsMeta?.count ?? 0,
        eventEmployees: (state) => state.event?.employees ?? [],
        isEventsLoading: (state) => state.isEventsLoading,
        isMoreEventsLoading: (state) => state.isMoreEventsLoading,
    }
}
export default event