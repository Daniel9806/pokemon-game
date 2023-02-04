<template>
    <div class="flex">
        <img v-if="true" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
         alt="pokemon" class="brightness-0">

         <img v-if="false" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
         alt="pokemon">
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

img {
    position: absolute;
    right: 20%;

}

</style>