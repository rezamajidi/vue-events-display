<template>
    <button
        @click="$emit('onClick')"
        class="flex items-center mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg mt-8"
        :class="{'cursor-not-allowed' : isLoading || isDisabled}"
        type="button"
        :disabled="isDisabled || isLoading"
    >
        <span v-if="isLoading" class="w-6 h-6">
            <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
            <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                <animateTransform 
                attributeName="transform" 
                dur="1s" 
                type="translate" 
                values="0 15 ; 0 -15; 0 15" 
                repeatCount="indefinite" 
                begin="0.1"/>
            </circle>
            <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
                <animateTransform 
                attributeName="transform" 
                dur="1s" 
                type="translate" 
                values="0 10 ; 0 -10; 0 10" 
                repeatCount="indefinite" 
                begin="0.2"/>
            </circle>
            <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
                <animateTransform 
                attributeName="transform" 
                dur="1s" 
                type="translate" 
                values="0 5 ; 0 -5; 0 5" 
                repeatCount="indefinite" 
                begin="0.3"/>
            </circle>
            </svg>
        </span>
        <span>{{ title }}</span>
    </button>
</template>

<script>
    export default {
        name: 'Btn',
        props: {
            title: {
                type: String,
                required: true
            },
            isLoading: {
                type: Boolean,
                default: false
            },
            isDisabled: {
                type: Boolean,
                default: false
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>