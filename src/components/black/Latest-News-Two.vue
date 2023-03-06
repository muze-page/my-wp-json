<script setup>
//第二个
</script>

<template>
  <el-col :span="12">
    <a href="#" class="title-2up">
      <el-card :body-style="{ padding: '0px' }">
        <div class="tile__media">
          <img
            src="http://magick.plugin/wp-content/uploads/2023/03/5af76af474e023b42408a4fcf02f148a.jpg"
          />
        </div>

        <div class="tile__description">
          <div class="tile__head">
            <div class="tile__category">更新</div>
            <div class="tile__headline">
              依托 Apple Watch，研究人员探索更多心脏健康功能
            </div>
          </div>
          <div class="tile__timestamp">2023 年 2 月 21 日</div>
        </div>
      </el-card>
    </a>
  </el-col>

  <el-col :span="12">2</el-col>
  <el-col :span="12">3</el-col>
  <el-col :span="12">4</el-col>
</template>

<style lang="less" scoped>
.title-2up {
  flex-direction: column;
  width: 472px;
  height: 100%;

  background-color: #fff;
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  z-index: 0;
  position: relative;
  .tile__media {
    width: 100%;
    height: 266px;
    min-height: auto;
    flex-basis: auto;
    flex-shrink: 1;

    direction: ltr;

    position: relative;
    z-index: 0;
    flex-grow: 0;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }
  .tile__description {
    padding: 32px;
    justify-content: space-between;
    flex-basis: auto;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 1;
    .tile__head {
      .tile__category {
        color: @font-color-assist;
        margin-bottom: 8px;
        letter-spacing: 0em;
        font-size: 12px;
        line-height: 1.33337;
        font-weight: 700;
        font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
          "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      }
      .tile__headline {
        font-size: 24px;
        line-height: 1.16667;
        font-weight: 700;
        letter-spacing: 0.009em;
        font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons",
          "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;

        color: #1d1d1f;
      }
    }
  }
  .tile__timestamp {
    margin-top: 12px;
    font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    letter-spacing: 0em;
    font-size: 14px;
    line-height: 1.28577;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: @font-color-assist;
  }
}
</style>
