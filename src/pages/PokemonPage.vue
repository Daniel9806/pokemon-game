<template>
    <div class="relative top-0">
        <h2 class="font-bold text-2xl font-mono">What Pokemon is this?</h2>

        <!-- TODO: img  -->
        <PokemonPicture/>

        <!-- TODO: options -->
        <PokemonOptions/>

        <!-- TODO: conform button -->

    </div>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';

export default {
    components: {
        PokemonOptions,
        PokemonPicture
    },

    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>