<template>
    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-gray-50">
        <img
            :alt="`${name} image`"
            class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            :src="image">
        <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">{{ name }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EmployeeCard',
        props: {
            name: {
                type: String,
                required: true
            },
            image: {
                type: String,
                default: 'https://via.placeholder.com/300'
            }
        }
    }
</script>
