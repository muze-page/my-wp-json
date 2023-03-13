<script lang="ts" setup>
import { ref } from "vue";
import { Promotion, CircleCloseFilled } from "@element-plus/icons-vue";
import vueQr from "vue-qr/src/packages/vue-qr.vue";
import logoImgs from "@/assets/vue.svg";

export interface Props {
  link: string;
}
const props = defineProps<Props>();

const visible = ref(false);

//生成二维码用图片
const logoImg = ref("");
logoImg.value = logoImgs;
</script>

<template>
  <el-button
    text
    size="default"
    :icon="Promotion"
    @click="visible = true"
  ></el-button>

  <el-dialog
    v-model="visible"
    :show-close="false"
    class="modal-content-container"
  >
    <template #header="{ close }">
      <div class="header">
        <el-button text @click="close" :icon="CircleCloseFilled"> </el-button>
      </div>
    </template>

    <p class="wechat-instructions">
      <span class="qr-instr">微信扫描二维码分享文章</span>
      <figure>
        <div class="wechat-qrcode">
          <vue-qr
            ref="qrCode"
            :text="props.link"
            :logoSrc="logoImg"
            :logoScale="40"
            :size="190"
            :margin="10"
          />
           
        </div>
      </figure>
    </p>
  </el-dialog>
</template>

<style lang="less" scoped>
.wechat-instructions {
  text-align: center;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 0em;

  color: #1d1d1f;
  margin-top: 1.2rem;
}

.wechat-qrcode {
  display: inline-block;
  vertical-align: top;
  margin-top: 50px;
}
</style>
