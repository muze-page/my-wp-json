/**
 * 获取组件所需数据
 */
import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";
import moment from "moment";
//获取指定要求的数据：http://magick.plugin/wp-json/wp/v2/posts/?_fields=categories,title,link,date,featured_media&per_page=2
//根据特色图片ID获取图片链接：http://magick.plugin/wp-json/wp/v2/media/2312    source_url
//根据分类ID获取分类名：http://magick.plugin/wp-json/wp/v2/categories/1
//根据指定要求获取指定分类的文章：http://magick.plugin/wp-json/wp/v2/posts?categories=1&per_page=6&_fields=categories,title,link,date,featured_media
//获取指定ID的文章：http://magick.plugin/wp-json/wp/v2/posts/1?_fields=categories,title,link,date,featured_media

//统一数据接口格式
interface Jog{
    DataItem: {
        id: string;
        url: string;
        date: string;
        title: string;
        image: string;
        cat: string;
    }[];
} 
// 创建 store
const useGetData = defineStore("userss", {
  // 定义状态：一个函数，返回一个对象
  state: () => ({
    //首页拿数据
    data: {
          latest: [{
            id:"",
            url:"",
            date: "",
            title: "",
            image: "",
            cat:"",
      }], //资讯
      featured: [{
        id:"",
        url:"",
        date: "",
        title: "",
        image: "",
        cat:"",
  }], //幻灯片
      cat: [{
        id:"",
        url:"",
        date: "",
        title: "",
        image: "",
        cat:"",
  }], //更多
    },
    default: {
      site: "http://magick.plugin",
    },
  }),

  // 定义 getters，等同于组件的计算属性
    getters: {
        // getter 函数接收 state 作为参数，推荐使用箭头函数
    },

  // 定义 actions，有同步和异步两种类型
  actions: {
    // 异步 action，一般用来处理异步逻辑
   

    //_______________//
    //拿到基础数据
    async getLatestData() {
      const api = `http://magick.plugin/wp-json/wp/v2/posts/?_fields=id,categories,title,link,date,featured_media&per_page=11`;
      try {
        const response = await axios.get(api);

        this.data.latest = response.data;
        //this.data.latest = "9527";
          console.log("我运行了一下");
          return response.data;
      } catch (error) {
        console.log(error);
      }
      },
    
    //拿到指定分类数据
    async getCatData() {
        const api = `http://magick.plugin/wp-json/wp/v2/posts?categories=1&per_page=6&_fields=categories,title,link,date,featured_media`;
        try {
          const response = await axios.get(api);
  
          this.data.cat = response.data;
            return response.data;
        } catch (error) {
          console.log(error);
        }
        },

    //对输入的特色图片ID的值进行axios查询，拿到图片链接
    async requestMedia(media = 2312) {
      //查询网址
      const api =
        `http://magick.plugin/wp-json/wp/v2/media/` +
        media +
        `?_fields=source_url`;
      console.log("待检查的API是：" + api);
      try {
        //输出值
        const response = await axios.get(api);
        return response.data.source_url;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * 作用：传入分类ID，获取分类名和链接
     * 逻辑：若传入两个id，则只选第一个
     */
   

    async getCategory(id = []) {
      //查询网址
      const api =
        `http://magick.plugin/wp-json/wp/v2/categories/` +
        id[0] +
        `?_fields=name,link`;
      try {
        const response = await axios.get(api);
        return response.data.name;
      } catch (error) {
        console.log(error);
      }
    },

    //对拿到的数据进行处理后输出
    async handleObj(
        obj = {
            id:"",
          link:"",
        date: "",
        title: { rendered: "" },
        titles: "",
        featured_media: 0,
        categories: [],
      }
    ) {
        //新建对象，存入处理好的内容
        const data = {
            id:"",
            url:"",
            date: "",
            title: "",
            image: "",
            cat:"",
        };
        //拿到文章ID
        data["id"] = obj.id;
        //拿到链接
        data["url"] = obj.link;
      //拿到时间，处理后插入
      data["date"] = moment(obj.date).format("YYYY 年  M 月 D 日");
      //拿到标题，处理后插入
      data["title"] = obj.title.rendered;
      //拿到特色图ID，处理成链接后插入
      data["image"] = await this.requestMedia(obj.featured_media);
      //拿到分类，处理后插入
    data["cat"] = await this.getCategory(obj.categories);
        return data;
    },

    //将Latest列表中的原始数据处理后传出
      async getLatest() {
       
          const data = await this.getLatestData();
          const latest = ref<Jog['DataItem']>([]);
          for (const key in data) {
              console.log("处理前");
              console.log(JSON.stringify(data[key]));
              data[key] = await this.handleObj(data[key]);
              console.log("处理后");
              console.log(JSON.stringify(data[key]));
              //将处理好的内容加入数组
              latest.value.push(data[key]);
              //为了类型判断，我们给了数组初始值，为了避免影响，删掉第一个数组
              //latest.value.shift();
              
        }
        this.data.latest = latest.value;
      },
      
          //将Latest列表中的原始数据处理后传出
          async getCat() {
       
            const data = await this.getCatData();
            const latest = ref<Jog['DataItem']>([]);
            for (const key in data) {
                console.log("处理前");
                console.log(JSON.stringify(data[key]));
                data[key] = await this.handleObj(data[key]);
                console.log("处理后");
                console.log(JSON.stringify(data[key]));
                //将处理好的内容加入数组
                latest.value.push(data[key]);
                //为了类型判断，我们给了数组初始值，为了避免影响，删掉第一个数组
                //latest.value.shift();
                
          }
          this.data.cat = latest.value;
      },
          
          
  },
});

export default useGetData;
