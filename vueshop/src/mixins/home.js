
export const home = {
    data(){
        return {

        }
    },
    methods:{
        async goHome(){
            this.$router.push({name:'index'})
        },
        async goWhere(){
            this.$message('暂未开放！');
        },
        async goBuyCar(){
            this.$router.push({name:'buycar'})
        },
        async goUserCenter(){
            this.$router.push({name:'userCenter',params:{
                id:"0"
            }})
        },
        async changeOK(){
            this.$store.commit('changeHeader',true)
            this.$store.commit('changeTop',true)
            this.$store.commit('changeRight',true)
        },
        async goOrder(){
            this.$router.push({name:'userCenter',params:{
                id:"1"
            }})
        }
    }
}
