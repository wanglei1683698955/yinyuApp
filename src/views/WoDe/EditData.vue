<template>
  <div id="EditData">
    <h1>
      <span class="iconfont icon-forward" @click="backBut"></span>
      <p>编辑资料</p>
      <span @click="dataSave">保存</span>
    </h1>
    <div id="EditImg">
      <van-uploader :after-read="afterRead" />
    </div>

    <div id="EditText">
      <van-cell-group>
        <van-field
          v-model="userValue"
          label="用户名"
          placeholder="请输入用户名"
        />
      </van-cell-group>

      <van-cell is-link @click="showPopup"
        >生日<span></span>{{ birthday }}</van-cell
      >
      <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="timeconfirm"
          @cancel="timecancel"
        />
      </van-popup>

      <van-cell is-link title="性别" @click="showb = true" />
      <van-action-sheet
        v-model="showb"
        :actions="actions"
        @select="onSelect"
        close-on-click-action
      />

      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="地区"
        placeholder="请选择所在地区"
        @click="showc = true"
      />
      <van-popup v-model="showc" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择所在地区"
          :options="options"
          @close="showc = false"
          @finish="onFinish"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import "../../../public/iconfont/icon_WoDe/iconfont.css";
import { Toast } from "vant";

export default {
  data() {
    return {
      userValue: "我是默认",
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(2000, 0, 1),
      birthday: "",
      show: false,
      showb: false,
      actions: [{ name: "男" }, { name: "女" }],
      sex: "",
      showc: false,
      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }],
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }],
        },
      ],
    };
  },
  methods: {
    backBut(){
      this.$router.push({name:"wode"})
    },
    //时间选择完成触发
    timeconfirm(val) {
      let year = val.getFullYear();
      let month = val.getMonth() + 1;
      let day = val.getDate();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      this.birthday = year + "-" + month + "-" + day;
      this.timecancel();
    },
    //保存页面数据
    dataSave() {
      this.userValue; //用户名
      this.birthday; //生日
      //性别
      //城市
    },
    //时间选择遮罩层的显示
    showPopup() {
      this.show = true;
    },
    //时间选择遮罩层的隐藏
    timecancel() {
      this.show = false;
    },
    //性别选择
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
      this.sex = item.name;
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
    },
    //图片上传组件函数
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
};
</script>

<style>
.van-popup--center {
  width: 100%;
}
.van-cell__value--alone span {
  width: 0.66rem;
  display: inline-block;
}
.van-uploader__upload{
  width: 2.56rem;
  height: 2.16rem;
}
</style>

<style scoped>
#EditData {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#EditData h1 {
  width: 100%;
  height: 0.5rem;
  font-size: 0.18rem;
  display: flex;
  padding: 0 0.1rem;
  line-height: 0.5rem;
}
#EditData h1 span:nth-child(1) {
  width: 0.4rem;
  font-size: 0.2rem;
}
#EditData h1 span:nth-child(2) {
  width: 0.4rem;
  font-size: 0.16;
}
#EditData h1 p {
  flex: 1;
  text-align: center;
}
#EditData #EditImg {
  background-color: rgb(180, 255, 230);
  border: 0.04rem solid rgb(236, 247, 138);
  height: 3.6rem;
}
#EditData #EditText {
  background-color: rgba(203, 247, 250,.6);
  height: 3.6rem;
}
</style>