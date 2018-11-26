<template>
    <div>
        <muheader></muheader>
        <router-view></router-view>
        <player></player>
    </div>
</template>

<script>
import muheader from '../header/header.vue'
import player from '../player/player.vue'
    export default {
        components:{
            muheader,
            player
        }
    }
</script>

<style scoped>

</style>