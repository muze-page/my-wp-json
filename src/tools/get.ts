//获取数据用
import axios from "axios";
import moment from "moment";
//获取指定要求的数据：http://magick.plugin/wp-json/wp/v2/posts/?_fields=categories,title,link,date,featured_media&per_page=2
//根据特色图片ID获取图片链接：http://magick.plugin/wp-json/wp/v2/media/2312    source_url
//根据分类ID获取分类名：http://magick.plugin/wp-json/wp/v2/categories/1
//根据指定要求获取指定分类的文章：http://magick.plugin/wp-json/wp/v2/posts?filter[cat]=1&per_page=2&_fields=categories,title,link,date,featured_media

const get = {
//设定网址
//const site = "http://magick.plugin";
//const site = "https://7b2.com";

//获取基础数据
  requestData:(site:string)  =>{
    const api = site+'/wp-json/wp/v2/posts/?_fields=categories,title,link,date,featured_media&per_page=11';
    console.log("待检查的API是：" + api);
    try {
      const response =  axios.get(api);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  
  //传入图片ID，获取图片链接
    requestMedia:(site:string,media = 2312) =>{
    //查询网址
    const api = site+'/wp-json/wp/v2/media/' + media + '?_fields=source_url';
    console.log("待检查的API是：" + api);
    try {
      //输出值
      const response =  axios.get(api);
      return response.data.source_url;
    } catch (error) {
      console.log(error);
    }
  },
  
  //传入分类ID，获取分类名和链接
  
  async  getCategory:(site:string,id = 1)  =>{
    //查询网址
    const api = site+'/wp-json/wp/v2/categories/' + id + '?_fields=name,link';
    try {
      //const cat = { name: "", link: "" };
      //输出值
      const response = await axios.get(api);
      //cat.name = response.data.name;
      //cat.link = response.data.link;
      //return cat;
      return response.data.name;
    } catch (error) {
      console.log(error);
    }
  },


  //处理对象

async  handleObj:(
    obj = {
      date: "",
      title: { rendered: "" },
      titles: "",
      featured_media: 0,
      categories: 0,
    }
  )  =>{
    //拿到时间，处理后插入
    obj["date"] = moment(obj.date).format("YYYY 年  M 月 D 日");
    //拿到标题，处理后插入
    obj["titles"] = obj.title.rendered;
    //拿到特色图ID，处理成链接后插入
    obj["featured_media"] = await requestMedia(obj.featured_media);
    //拿到分类，处理后插入
    console.log("二度确认下：" + obj.categories);
    obj["categories"] = await getCategory(obj.categories);
},
  
};
export default get;