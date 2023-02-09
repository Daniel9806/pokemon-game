<template>
    <div class="flex mt-4 h-64">
        <img :src="getPokemon"
         alt="pokemon" class="brightness-0">

        <img v-if="showPokemon" :src="getPokemon"
         alt="pokemon">
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';

export default {
    props: {
        pokemonId: {
            type: Number,
            required: true  
        },

        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },

    setup (props) {

        //Computed
        const getPokemon = computed(() => {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`
        })

        return {
            getPokemon
        }
    }
}
</script>

<style scoped>

img {
    position: absolute;
    right: 37%;
    height: 250px;    
}

</style>