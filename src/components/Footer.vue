<script lang="ts" setup>
//文底部
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<template>
  <footer id="ac-globalfooter">
    <div class="ac-gf-content">
      <nav class="ac-gf-breadcrumbs">
        <el-breadcrumb
          :separator-icon="ArrowRight"
          class="ac-gf-breadcrumbs-path"
        >
          <el-breadcrumb-item :to="{ path: '/' }">
            <a class="ac-gf-breadcrumbs-home">
              <span class="ac-gf-breadcrumbs-home-icon"></span>
            </a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>Newsroom</el-breadcrumb-item>
          <el-breadcrumb-item>
            你好，黄色！Apple 推出新款 iPhone 14 和 iPhone 14 Plus
          </el-breadcrumb-item>
        </el-breadcrumb>
      </nav>
      <section class="ac-gf-footer">
        <div class="ac-gf-footer-shop">
          更多选购方式
          <a href="#">查找你附近的 Apple Store 零售店</a>
          或致电
        </div>
        <div class="ac-gf-footer-legal">
          <div class="ac-gf-footer-legal-copyright">
            Copyright © 2023 Apple Inc. 保留所有权利。
          </div>
          <ul class="ac-gf-footer-legal-links">
            <li class="ac-gf-footer-legal-links-item">
              <a href="#" class="ac-gf-footer-legal-link">隐私政策</a>
            </li>
            <li class="ac-gf-footer-legal-links-item">
              <a href="#" class="ac-gf-footer-legal-link">使用条款</a>
            </li>
            <li class="ac-gf-footer-legal-links-item">
              <a href="#" class="ac-gf-footer-legal-link">销售政策</a>
            </li>
            <li class="ac-gf-footer-legal-links-item">
              <a href="#" class="ac-gf-footer-legal-link">法律信息</a>
            </li>
            <li class="ac-gf-footer-legal-links-item">
              <a href="#" class="ac-gf-footer-legal-link">网站地图</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </footer>
</template>

<style lang="less" scoped>
#ac-globalfooter {
  --footer-background: #f5f5f7;
  --footer-border-color: #d2d2d7;
  --footer-text-color: #6e6e73;
  --footer-link-color: #424245;
  --footer-pipe-color: #86868b;
  --footer-directory-title-color: #1d1d1f;
  --footer-directory-title-color-hover: #000;
  font-size: 12px;
  line-height: 1.33337;
  font-weight: 400;
  letter-spacing: -0.01em;
  font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
    "SF Pro Icons", "Apple Legacy Chevron", "PingFang SC", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  background: var(--footer-background);
  color: var(--footer-text-color);
  min-width: 1024px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
#ac-globalfooter {
  .ac-gf-content {
    margin: 0 auto;
    max-width: 980px;
    padding: 0 22px;
    padding-left: max(22px, env(safe-area-inset-left));
    padding-right: max(22px, env(safe-area-inset-right));
  }
  .ac-gf-breadcrumbs {
    padding: 17px 0;
    position: relative;
    z-index: 1;
    color: var(--footer-link-color);
  }
  .ac-gf-breadcrumbs-home {
    left: 0;
    //position: absolute;
    z-index: 2;
    top: 17px;
  }
  a {
    color: var(--footer-link-color);
    text-decoration: none;
  }
  .ac-gf-breadcrumbs-home-icon {
    width: 14px;
    height: 72px;
    background-size: 14px 72px;
    background-repeat: no-repeat;
    background-image: url(/icon_large.svg);
    height: 18px;
    display: block;
    position: relative;
    z-index: 2;
    color: transparent;
    background-position-y: -36px;
  }
  .ac-gf-breadcrumbs-path {
    font-size: 12px;
    line-height: 1.33337;
    font-weight: 400;
    letter-spacing: -0.01em;

    position: relative;
    z-index: 1;
  }
  .ac-gf-footer {
    padding-top: 34px;
    border-top: none;
    padding: 17px 0 21px;
  }
  .ac-gf-footer-shop {
    margin-bottom: 7px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--footer-border-color);

    --footer-mini-shop-link-color: #06c;
    max-height: 9999px;
    a {
      color: var(--footer-mini-shop-link-color);
      text-decoration: underline;
    }
  }
  //最低
  .ac-gf-footer-legal {
    position: relative;
    top: -3px;
    z-index: 1;

    overflow: hidden;
  }
  .ac-gf-footer-legal-copyright {
    max-height: 9999px;

    margin-right: 30px;
    float: left;
    margin-top: 5px;
    list-style-type: none;
  }

  //列表
  .ac-gf-footer-legal-links {
    position: relative;
    top: -5px;
    margin-inline-start: 0;
    z-index: 1;

    margin-right: 30px;
    float: left;
    margin-top: 5px;
    list-style-type: none;
  }
  .ac-gf-footer-legal-links-item {
    border-right: 1px solid var(--footer-pipe-color);
    margin-right: 7px;
    display: inline-block;
    margin-top: 5px;
  }
  .ac-gf-footer-legal-links-item:last-child {
    border: none;
    margin: 0;
    padding: 0;
  }
  .ac-gf-footer-legal-link {
    padding-right: 10px;
    display: inline-block;
    white-space: nowrap;

    font-weight: 400;
  }
}
</style>
