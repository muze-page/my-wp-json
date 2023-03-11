/**
 * 获取组件所需数据
 */
import axios from "axios";
import { defineStore } from "pinia";
import moment from "moment";

// 创建 store
const useGetData = defineStore("userss", {
    // 定义状态：一个函数，返回一个对象
    state: () => ({
        //首页拿数据
        data: {
            latest: {}, //资讯
            featured: {},//幻灯片
            more:{},//更多
        },
        default: {
            site:'http://magick.plugin',
        },
      username: "",
      token: "",
      name:"雷猴",
    }),
  
    // 定义 getters，等同于组件的计算属性
    getters: {
      // getter 函数接收 state 作为参数，推荐使用箭头函数
      hello: (state) => "Hello!" + state.username,
      fullName: (state) => {
        return '我叫 ' + state.name
      }
    },
  
    // 定义 actions，有同步和异步两种类型
    actions: {
      // 异步 action，一般用来处理异步逻辑
      async login(userData:{}) {
        const result = await axios.post("/api/user/login", userData);
        const { data, code } = result.data;
        if (code === 0) {
          // action 中修改状态
          this.username = data.username;
          this.token = data.token;
        }
      },
  
      // 同步 action
      logout() {
        this.token = "";
        this.username = "";
      },
  
      updateName(name:string) {
        this.name = name
      },

      //_______________//
      //拿到基础数据
        async getLatestData() {
            const api = `http://magick.plugin/wp-json/wp/v2/posts/?_fields=categories,title,link,date,featured_media&per_page=2`;
            try {
                const response = await axios.get(api);

                this.data.latest = response.data;
                console.log("我运行了一下2")
                return response.data;
                
            } catch (error) {
                console.log(error)
            }

        },

        //对输入的特色图片ID的值进行axios查询，拿到图片链接
        async  requestMedia(media = 2312) {
            //查询网址
            const api = `http://magick.plugin/wp-json/wp/v2/media/` + media + `?_fields=source_url`;
            console.log("待检查的API是：" + api);
            try {
              //输出值
              const response = await axios.get(api);
              return response.data.source_url;
            } catch (error) {
              console.log(error);
            }
        },

        //传入分类ID，获取分类名和链接

        async  getCategory(id = 1) {
            //查询网址
            const api = `http://magick.plugin/wp-json/wp/v2/categories/` + id + `?_fields=name,link`;
            try {
              const response = await axios.get(api);
              return response.data.name;
            } catch (error) {
              console.log(error);
            }
        },

        //对拿到的数据进行处理后输出
        async  handleObj(
            obj = {
              date: "",
              title: { rendered: "" },
              titles: "",
              featured_media: 0,
              categories: 0,
            }
          ) {
            //拿到时间，处理后插入
            obj["date"] = moment(obj.date).format("YYYY 年  M 月 D 日");
            //拿到标题，处理后插入
            obj["titles"] = obj.title.rendered;
            //拿到特色图ID，处理成链接后插入
            obj["featured_media"] = await this.requestMedia(obj.featured_media);
            //拿到分类，处理后插入
            console.log("二度确认下：" + obj.categories);
            obj["categories"] = await this.getCategory(obj.categories);
        },
        
        //Latest列表数据

    
    
    },
  });
  
  export default useGetData;
  