<script lang="ts" setup>
//品牌
</script>

<template>
  <aside class="footertile">
    <a href="#" class="block">
      <div class="footertile-copy">
        <figure class="footertile-copy-image">
          <span class="visuallyhidden">Apple Newsroom</span>
        </figure>
        <p class="footertile-copy-headline">来自 Apple 的最新消息</p>
        <p class="footertile-copy-cta block-link">了解更多</p>
      </div>
    </a>
  </aside>
</template>

<style lang="less" scoped>
.footertile {
  position: relative;
  width: 100%;
  background-color: #fbfbfd;
}

.footertile {
  margin-top: 80px;
}

a.block {
  box-sizing: border-box;
  display: block;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  .footertile-copy-cta.block-link {
    border-radius: 30px;
    display: inline-block;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.25, 1) 0ms,
      border-color 300ms cubic-bezier(0.4, 0, 0.25, 1) 0ms,
      color 300ms cubic-bezier(0.4, 0, 0.25, 1) 0ms;
    font-size: 14px;
    line-height: 1.42859;
    font-weight: 700;
    letter-spacing: -0.016em;
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    padding: 8px 16px;
    background: #e8e8ed;
    color: #161617;
  }

  .footertile-copy-cta.block-link {
    margin-top: 18px;
    cursor: pointer;
  }
}
a.block::before,
a.block::after {
  content: " ";
  display: table;
}

.footertile-copy {
  margin: 52px auto;
  width: 653px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footertile-copy-image {
  width: 158px;
  height: 23px;
  background: url("/logo.svg") no-repeat;
  background-size: cover;
}

.visuallyhidden {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
  clip-path: inset(0px 0px 99.9% 99.9%);
  overflow: hidden;
  height: 1px;
  width: 1px;
  padding: 0;
  border: 0;
}

.footertile-copy-headline {
  margin-top: 12px;
  font-size: 19px;
  line-height: 1.21053;
  font-weight: 700;
  letter-spacing: 0.012em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  color: @font-color-assist;
  text-align: center;
}
</style>
