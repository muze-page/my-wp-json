//获取数据用
import axios from "axios";
import moment from "moment";
//获取指定要求的数据：http://magick.plugin/wp-json/wp/v2/posts/?_fields=categories,title,link,date,featured_media&per_page=2
//根据特色图片ID获取图片链接：http://magick.plugin/wp-json/wp/v2/media/2312    source_url
//根据分类ID获取分类名：http://magick.plugin/wp-json/wp/v2/categories/1
//根据指定要求获取指定分类的文章：http://magick.plugin/wp-json/wp/v2/posts?filter[cat]=1&per_page=2&_fields=categories,title,link,date,featured_media

