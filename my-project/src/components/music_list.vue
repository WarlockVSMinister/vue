<style type="text/css">
.colorRed{
  color: #c10000;
}
  .tx{
    text-align: center;
  }
</style>

<template>
  <div>
    <input type="text" v-model="inputVal"><input v-on:click="getCustomers" type="button" value="查询歌曲">
    <div class="colorRed">
      音乐播放列表{{musicSrc}}
    </div>
    <video id="musiC" autoplay controls v-bind:src="musicSrc"></video>
    <pre class="tx">{{musicTxt}}</pre>
  </div>
</template>

<script>
  export default {
    name:"list",
    data () {
      return {
        id_num:"23",
        inputVal:"1",
        musicSrc:"",
        musicTxt:"as"
      }
    },
    methods:{
      getCustomers:function () {
        var id=this.inputVal
        fetch("https://api.imjad.cn/cloudmusic/?type=song&id="+id+"&br=128000").then(res=>{
          return res.json();
        }).then(data=>{
//          console.log(data)
          this.musicSrc=data.data[0].url
        })
        fetch("https://api.imjad.cn/cloudmusic/?type=lyric&id="+id+"&br=128000").then(res=>{
          return res.json();
        }).then(data=>{
          console.log(data.lrc.lyric)
          this.musicTxt=data.lrc.lyric
        })
      },
      encodeTextarea:function(str) {
        str = str.replace(/\n/g, "<br/>");
        return str;
      }/*,
      musiC:function () {

      }*/
    }
  }
</script>
