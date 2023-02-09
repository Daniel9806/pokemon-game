<template>
    <div class="mt-5">
       <ul class="w-64 space-y-4 mx-auto">
        <li v-for="item in options" 
        class="border-gray-600 bg-gray-300 rounded-sm text-gray-700 hover:bg-gray-400">{{ item }}</li>
       </ul>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        }
    },

    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>