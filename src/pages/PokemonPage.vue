<template>
    <div class="relative top-0">
        <h2 class="font-bold text-2xl font-mono">What Pokemon is this?</h2>

        <PokemonPicture v-if="rightPoke" :pokemonId="rightPoke" :showPokemon="true" />
        <PokemonOptions :options="options" />

        <!-- TODO: conform button -->

    </div>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import pokemonApi from '../api/pokemonApi.js'
import { ref, reactive, onMounted } from 'vue'

import useUtils from '../composables/useUtils'

export default {
    components: {
        PokemonOptions,
        PokemonPicture
    },

    setup() {
        const { getRandomBetween } = useUtils()

        const options = ref(new Array(4))
        const rightPoke = ref(null)

        //Methods
        const getPokemonsNames = async () => {
            //getting right pokemon
            let rdm = getRandomBetween(1, 600)
            const { data } = await pokemonApi.get(`/${rdm}`)
            rightPoke.value = data.id

            rdm =  getRandomBetween(0, 3)
            options.value[rdm] = data.name

            console.log(data)
            console.log(options.value)

            //getting wrongs pokemons names
            const resp = await pokemonApi.get()
            const wrongsPoke = resp.data.results

            for (let i = 0; i < 4; i++) {
                rdm = getRandomBetween(0, 19)
                const newPoke = wrongsPoke[rdm]

                for (let j = 0; j < options.value.length; j++) {
                  if(!options.value[j]) {
                    options.value[j] = newPoke.name
                    break
                  }
                }

            }

        }

        const initGame = async () => {
            getPokemonsNames()
        }

        onMounted(async () => {
            console.log(`the component is now mounted.`)
            await initGame()
        })

        //Created

        return {
            options,
            rightPoke
        }
    }
}
</script>

<style scoped>

</style>