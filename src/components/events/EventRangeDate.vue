<template>
    <div>
        <div class="flex relative pt-10 pb-20 sm:items-center mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-100 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="transform w-4 h-4 block" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p class="text-gray-900 mb-1 text-xl">Starts at:</p>
                <p class="leading-relaxed text-gray-500 text-lg font-bold">{{formatDate(startDate)}}</p>
                </div>
            </div>
        </div>
        <div class="flex relative pb-20 sm:items-center mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-100 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 font-medium text-sm">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="transform rotate-180 w-4 h-4 block" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p class="text-gray-900 mb-1 text-xl">Ends at:</p>
                <p class="leading-relaxed text-gray-500 text-lg font-bold">{{formatDate(endDate)}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: 'EventRangeDate',
        props: {
            startDate: {
                type: String,
                required: true
            },
            endDate: {
                type: String,
                required: true
            }
        },
        methods: {
            formatDate(date){
                return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a')
            }
        }
    }
</script>
