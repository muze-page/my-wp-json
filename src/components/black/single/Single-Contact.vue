<script lang="ts" setup>
//联系方式
</script>

<template>
  <h1 style="text-align: center">联系方式</h1>
  <div class="presscontacts component">
    <div class="component-content">
      <h2 class="presscontacts-headline">媒介垂询</h2>
      <div class="contacts-container">
        <div class="contactinfo">
          <p class="contactinfo-title">Yuyu Chang</p>
          <p class="contactinfo-text">Apple</p>
         
          <p class="contactinfo-text">
            <a href="mailto:yuyu_chang@apple.com">yuyu_chang@apple.com</a>
          </p>
         
        </div>

        <div class="contactinfo">
          <p class="contactinfo-title">Apple 媒体联络</p>
         
         
          <p class="contactinfo-text">
            <a href="mailto:media.cn@apple.com">media.cn@apple.com</a>
          </p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.presscontacts.component {
  margin-bottom: 52px;
  margin-top: 52px;
  .component-content {
    border-top: 1px solid #d2d2d7;
    padding-top: 52px;
    .contacts-container {
      margin-top: -4px;
    }
  }
}
.presscontacts {
  position: relative;
  z-index: 1;
}
.component {
  margin-left: auto;
  margin-right: auto;
  width: 980px;
}
.component-content {
  margin-left: auto;
  margin-right: auto;
  width: 653px;
}
.presscontacts-headline {
  font-size: 24px;
  line-height: 1.16667;
  font-weight: 700;
  letter-spacing: 0.009em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}
.contactinfo {
  font-size: 14px;
  line-height: 1.42859;
  font-weight: 500;
  letter-spacing: -0.016em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  width: 326px;
  margin: 28px -4px 0 0;
  box-sizing: border-box;
  word-wrap: break-word;
  display: inline-block;
  vertical-align: top;
  padding-right: 20px;
}

.contactinfo-title {
  font-size: 19px;
  line-height: 1.21053;
  font-weight: 700;
  letter-spacing: 0.012em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  margin-bottom: 3px;
}

.contactinfo-text {
  margin: 0;
}
</style>
