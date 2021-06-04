<template>
  <div id="LiaoTianList" @click="start({imgURL, userName, history})">
    <img :src="imgURL" alt="" />

    <div id="LiaoTianList_right">
      <h1>
        <span>{{ userName }}</span>
        <span>{{ timestamp }}</span>
      </h1>
      <h2>{{ history }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgURL", "userId", "userName", "history", "timestamp"],
  data() {
    return {};
  },
  methods: {
    start(obj) {
      this.$router.push({
        name: "chatpage",
        query: { imgURL: obj.imgURL, userName: obj.userName, history: obj.history },
      });
    },
  },
};
</script>

<style scoped>
#LiaoTianList {
  height: 0.68rem;
  border-bottom: 1px solid #c9c9c9;
  padding: 0 0.15rem;
  display: flex;
  align-items: center;
}
#LiaoTianList img {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: sienna;
  margin-right: 0.1rem;
}
#LiaoTianList_right {
  height: 0.4rem;
  flex: 1;
  line-height: 0.2rem;
}
#LiaoTianList_right h1 {
  display: flex;
  justify-content: space-between;
}
#LiaoTianList_right h1 span:nth-child(1) {
  color: #000;
  font-weight: 600;
  font-size: 0.16rem;
}
#LiaoTianList_right h1 span:nth-child(2) {
  color: #333;
  font-size: 0.12rem;
}
#LiaoTianList_right h2 {
  width: 64%;
  color: #999;
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>