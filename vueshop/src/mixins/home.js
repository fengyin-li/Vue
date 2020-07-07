
export const home = {
    data(){
        return {

        }
    },
    methods:{
        goHome(){
            this.$router.push({name:'index'})
        },
        goWhere(){
            this.$message('暂未开放！');
        },
        goBuyCar(){
            this.$router.push({name:'buycar'})
        },
        changeOK(){
            this.$store.commit('changeHeader',true)
            this.$store.commit('changeTop',true)
            this.$store.commit('changeRight',true)
        },
        goOrder(){
            this.$router.push({path:'/order'})
        }
    }
}
