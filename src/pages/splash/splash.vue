<template>
    <div class="splash">
        <img src="./home.png" alt="">
    </div>
</template>

<script>
export default {
    mounted(){
        setTimeout(() => {
            this._toRecommend();
        }, 2100);
    },
    methods: {
        _toRecommend() {
            this.$router.push({
                path:'/appShow/recommend'
            });
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/variable";
    .splash  
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: $color-background;
        display: flex;
        justify-content: center;
        align-items: center;
        img 
            width: 93%;
            height: 75%;
</style>