<script lang="ts" setup>
import { reactive } from "vue";
const data = reactive({
  list: [
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030609415480.jpg",
      tag: "更新",
      title: " 依托 Apple Watch，研究人员探索更多心脏健康功能0",
      time: "2023 年 2 月 21 日",
    },
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030609571941.jpg",
      tag: "特写",
      title: "McIntosh S.E.E.D. 在美国南部与非裔土地所有者共同保护土地和传统",
      time: "2023 年 2 月 15 日",
    },
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030609582753.jpg",
      tag: "特写",
      title: "iPad 助力中国餐饮零售行业焕发新生",
      time: "2023 年 2 月 8 日",
    },
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030608522248.jpg",
      tag: "新闻稿",
      title: "Apple 公布第一季度业绩",
      time: "2023 年 2 月 8 日",
    },
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030608522248.jpg",
      tag: "新闻稿",
      title: "Apple 公布第一季度业绩",
      time: "2023 年 2 月 8 日",
    },
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030608522248.jpg",
      tag: "新闻稿",
      title: "Apple 公布第一季度业绩",
      time: "2023 年 2 月 8 日",
    },
  ],
});
</script>
<template>
  <div class="gallery">
    <div class="tabnav-wrapper">
      <div class="dotnav">
        <ul class="dotnav-items">
          <li class="current">
            <a class="dotnav-item current">
              <span class="visuallyhidden"
                >Oceanic+ app 让 Apple Watch Ultra 变成方便易用的潜水电脑。
              </span>
            </a>
          </li>
          <li>
            <a class="dotnav-item">
              <span class="visuallyhidden"
                >Oceanic+ app 让 Apple Watch Ultra 变成方便易用的潜水电脑。
              </span>
            </a>
          </li>
          <li>
            <a class="dotnav-item">
              <span class="visuallyhidden"
                >Oceanic+ app 让 Apple Watch Ultra 变成方便易用的潜水电脑。
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--内容-->
    <ul class="item-container">
      <li class="gallery-item current">
        <a href="#" class="tile">
          <div class="tile__media">
            <img
              src="http://magick.plugin/wp-content/uploads/2023/03/2023030709575782.jpg"
            />
          </div>
          <div class="tile__gradient">
            <div class="tile__description">
              <div class="tile__head">
                <div class="tile__headline">
                  Oceanic+ app 与 Apple Watch Ultra 伴你探索海底世界
                </div>
              </div>
              <div class="tile__timestamp">2022 年 11 月 28 日</div>
            </div>
          </div>
        </a>
      </li>

      <li class="gallery-item" v-for="item in data.list">
        <a :href="item.link" class="tile">
          <div class="tile__media">
            <el-image :src="item.img" fit="fill" :lazy="true"></el-image>
          </div>
          <div class="tile__gradient">
            <div class="tile__description">
              <div class="tile__head">
                <div class="tile__headline">
                  {{ item.title }}
                </div>
              </div>
              <div class="tile__timestamp">{{ item.time }}</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <!--切换按钮-->
    <div class="paddlenav">
      <ul class="paddlenav-items">
        <li>
          <el-button class="paddlenav-arrow paddlenav-arrow-previous" circle>
            <el-icon>
              <ArrowLeftBold />
            </el-icon>
          </el-button>
        </li>
        <li>
          <el-button class="paddlenav-arrow paddlenav-arrow-next" circle>
            <el-icon><ArrowRightBold /></el-icon>
          </el-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
//幻灯片
.gallery {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  ul {
    padding: 0;
  }
  .tabnav-wrapper {
    .dotnav {
      text-align: left;
      > ul {
        margin: 0;
        list-style: none;
        display: inline-flex;
        justify-content: center;
      }
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        margin: 0 7px;
        width: 8px;
        height: 8px;
        position: relative;
      }
      li:first-of-type {
        margin-left: 0;
      }
      .dotnav-items {
        margin-top: 2.35294rem;
        margin-bottom: 1.17647rem;

        .dotnav-item {
          background-color: #6e6e73;

          cursor: default;
        }
        .dotnav-item.current {
          background-color: #f5f5f7;
        }
      }
    }
  }
  //内容

  .item-container {
    display: flex;
    list-style: none;
    margin: 0;
    //被选中了就高亮

    .gallery-item {
      position: relative;
      margin-right: min(calc(1.87091vw + 3.51993 * (1vw - 10.69px)), 40px);
      .tile {
        background-color: transparent;
        opacity: 0.6;
        transition: opacity 1s cubic-bezier(0.4, 0, 0.25, 1) 0ms;

        display: block;
        position: relative;

        height: 100%;
        .tile__media {
          width: 980px;
          height: 551px;
        }
        .tile__gradient {
          position: absolute;
          bottom: 0;
          width: 100%;
          z-index: 0;
          .tile__description {
            padding: 0 36px 36px;

            width: 100%;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            .tile__headline {
              font-size: 40px;
              line-height: 1.1;
              font-weight: 700;
              letter-spacing: 0em;
              -webkit-line-clamp: 5;
              -webkit-box-orient: vertical;
              display: -webkit-box;
              overflow: hidden;
            }
            .tile__timestamp {
              margin-top: 12px;
            }
          }
        }
        .tile__gradient::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 250%;
          z-index: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.77311) 12.83%,
            rgba(0, 0, 0, 0.72685) 24%,
            rgba(0, 0, 0, 0.66487) 33.77%,
            rgba(0, 0, 0, 0.59081) 42.37%,
            rgba(0, 0, 0, 0.50831) 50.07%,
            rgba(0, 0, 0, 0.421) 57.13%,
            rgba(0, 0, 0, 0.33252) 63.78%,
            rgba(0, 0, 0, 0.24652) 70.3%,
            rgba(0, 0, 0, 0.16663) 76.92%,
            rgba(0, 0, 0, 0.09648) 83.91%,
            rgba(0, 0, 0, 0.03973) 91.52%,
            rgba(0, 0, 0, 0)
          );
          background-size: 100.1% 100.1%;
        }
      }
    }
    .current {
      .tile {
        opacity: 1;
      }
    }
  }
  //切换按钮
  .paddlenav {
    margin: 0;
    list-style: none;

    position: absolute;
    right: 0;
    bottom: 0;

    .paddlenav-items {
      display: flex;
      margin: 0;
      list-style: none;
      .paddlenav-arrow {
        font-size: 19px;
        width: 2.58824rem;
        height: 2.58824rem;
        line-height: 2.58824;
        border: 2px solid #fff;
        border-radius: 50%;
        box-sizing: border-box;
        position: static;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0);
        color: #fff;

        margin-top: -22px;

        font-weight: 300;
      }
      .paddlenav-arrow-previous {
        margin-right: 8px;
      }
    }
  }
}

//幻灯片左下点
.dotnav-item {
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  outline: none;
  position: absolute;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 0;
}
.dotnav-item.current {
  cursor: default;
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

//颜色
.tile__headline,
.tile__category,
.tile__timestamp {
  color: #fff;
}

//修整下按钮
.paddlenav-arrow {
  padding: 20px;
}
</style>
