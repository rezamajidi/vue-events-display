<template>
    <router-link :to="`/events/${id}`" class="block h-full">
        <div class="flex flex-col items-center h-full bg-gray-100 bg-opacity-75 px-8 py-10 rounded-lg overflow-hidden text-center">
            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-2">{{ title }}</h1>
            <p class="py-px w-12 bg-gray-500 mx-auto mb-6" :style="`background-color: ${color}`"></p>
            <div class="w-full">
                <div class="flex relative pb-12">
                    <div class="h-full w-5 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                    </div>
                    <div class="flex-grow text-left leading-tight pl-2">
                        <p class="text-gray-500 text-xs">{{formatDate(startString)}}</p>
                    </div>
                </div>
                <div class="flex relative">
                    <div class="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                    </div>
                    <div class="flex-grow text-left leading-tight pl-2">
                        <p class="text-gray-500 text-xs">{{formatDate(endString)}}</p>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    import moment from 'moment'
    export default {
        name: 'EventCard',
        props: {
            id: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            color: {
                type: String,
                default: ''
            },
            startString: {
                type: String,
                required: true
            },
            endString: {
                type: String,
                required: true
            },
        },
        methods: {
            formatDate(date){
                return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a')
            }
        }
    }
</script>
