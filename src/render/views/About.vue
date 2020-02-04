<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="tishi">{{greet()}}</button>
  </div>
</template>

<script lang="ts">
import Vue, { VNode } from "vue";
export default Vue.extend({
  data() {
    return {
      msg: "Hello"
    };
  },
  created: function(): void {
    this.$axios.get("https://api.juniancc.top/").then(function(response: any) {
      console.log(response);
    });
  },
  methods: {
    tishi(): void {
      let myNotification = new Notification("标题", {
        body: "通知正文内容"
      });

      myNotification.onclick = () => {
        console.log("通知被点击");
      };
    },
    // 需要标注有 `this` 参与运算的返回值类型
    greet(): string {
      return this.msg + " world";
    }
  },
  computed: {
    // 需要标注
    greeting(): string {
      return this.greet() + "!";
    }
  },
  // `createElement` 是可推导的，但是 `render` 需要返回值类型
  render(createElement): VNode {
    return createElement("div", this.greeting);
  }
});
</script>