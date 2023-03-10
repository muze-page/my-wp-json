<script lang="ts" setup>
//文底部

import { Search, ArrowDown } from "@element-plus/icons-vue";
</script>

<template>
  <div class="ac-ln-menu">
    <div class="ac-ln-menu-tray">
      <ul class="ac-ln-menu-items">
        <!--测试菜单-->
        <li class="ac-ln-menu-item">
          <el-button class="nr-sf-link bt-menu">
            <router-link to="/">首页</router-link>
          </el-button>
        </li>
        <li class="ac-ln-menu-item">
          <el-button class="nr-sf-link bt-menu">
            <router-link to="/single">文章页</router-link>
          </el-button>
        </li>
        <li class="ac-ln-menu-item">
          <el-button class="nr-sf-link bt-menu">
            <router-link to="/category">分类页</router-link>
          </el-button>
        </li>
        <li class="ac-ln-menu-item">
          <el-button class="nr-sf-link bt-menu">
            <router-link to="/404">404页</router-link>
          </el-button>
        </li>
        <li class="ac-ln-menu-item">
          <el-button class="nr-sf-link bt-menu">
            <router-link to="/test">测试页</router-link>
          </el-button>
        </li>
        <!--左边-->
        <li class="ac-ln-menu-item">
          <div class="ac-ln-menu-link nr-sf-content">
            <form></form>
            <el-button class="nr-sf-link bt-search" :icon="Search">
              Newsroom 搜索
            </el-button>
          </div>
        </li>
        <!--右边-->
        <li class="ac-ln-menu-item">
          <el-button class="nr-sf-link bt-menu">
            热门话题
            <el-icon><ArrowDown /></el-icon>
          </el-button>
        </li>
        <!--热门话题-->
        <div class="topics--narrow"></div>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ac-ln-menu {
  letter-spacing: 0em;

  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  float: right;
  margin-top: 0;

  .ac-ln-menu-tray {
    transition-property: height, visibility;
    transition-timing-function: cubic-bezier(0.4, 0, 0.25, 1);
    transition-duration: 0.4s;
    transition-delay: 0s, 0.4s;

    float: left;
    padding-top: 18px;
    .ac-ln-menu-item {
      position: relative;
      margin-left: 52px;
      float: left;
      list-style: none;
      .nr-sf-content {
        min-width: 234px;
        text-align: right;
      }
      .ac-ln-menu-link {
        color: #1d1d1f;
        display: inline-block;
        line-height: 22px;
        white-space: nowrap;
      }
    }
  }
  .nr-sf-link {
    opacity: 1;
    transition: opacity 500ms ease-in 200ms;
    color: #1d1d1f;
    background-color: #ffffff00;
  }
  .nr-sf-link:hover {
    color: #06c;
  }

  button.nr-sf-link {
    font-size: 1em;
    border: 0;
  }
  .nr-sf-link.bt-search {
    i {
      padding-right: 0.3em;
    }
  }
  .nr-sf-link.bt-menu {
    i {
      margin-left: 6px;
    }
  }
}

//细节微调
.nr-sf-link {
  a {
    color: #1d1d1f;
  }
}
.nr-sf-link:hover {
  a {
    color: #06c;
  }
}
</style>
