<template>
    <div class="mt-5">
       <ul class="w-64 space-y-4 mx-auto">
        <li v-for="item in options" @click="pokemonSelected(item)" 
        class="border-gray-600 bg-gray-300 rounded-sm text-gray-700 hover:bg-gray-400 cursor-pointer">
        {{ item }}</li>
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

    setup (_, context) {
        


        return {
            pokemonSelected: (item) => {
                context.emit('pokemonSelected', item)
            }
        }
    }
}
</script>

<style scoped>

</style>