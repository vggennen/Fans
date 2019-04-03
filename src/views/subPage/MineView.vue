<template>
    <div class='MineView'>
        <HeadPictrue :personal='personMsg'/>
        <Upload />
        <LinkItem />
    </div>
</template>

<script>
import HeadPictrue from '../../components/MineView/HeadPicture';
import Upload from '../../components/MineView/Upload';
import LinkItem from '../../components/MineView/LinkItem';
import qs from 'querystring';
import { mapActions, mapGetters} from 'vuex';
export default {
    name: "Mineview",
    components: {
        HeadPictrue,
        Upload,
        LinkItem
    },
    data(){
        return{
            personMsg: {}
        }
    },
    mounted(){
        //个人中心头像网络请求
        this.$axios.post(this.HOST + '/login',
        qs.stringify({
            phonenum: this.getLoginInfo.username
        }))
        .then(res => {
            // console.log(res.data);
            this.personMsg = res.data;
            // console.log(this.personMsg);
        })
        .catch(error => {
            console.log(error);
        })
    },
    computed: {
        ...mapGetters(['getLoginInfo'])
    }
}
</script>

<style scoped>
.MineView{
    width: 100%;
    height: 100%;
}
</style>


