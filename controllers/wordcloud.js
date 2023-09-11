const fs = require("fs");
const chartExporter = require("highcharts-export-server");
chartExporter.initPool();

const data = `{
  "title": "",
  "words": [
      {
          "key": "市场调研/市场企划/咨询行业",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      },
      {
          "key": "母婴用品行业",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      },
      {
          "key": "广告行业",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      },
      {
          "key": "公共关系行业",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      },
      {
          "key": "新闻/传媒行业",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      },
      {
          "key": "建筑业",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      },
      {
          "key": "医疗行业",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      },
      {
          "key": "物流/运输行业",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      },
      {
          "key": "政府机关单位",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      },
      {
          "key": "旅游业",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      },
      {
          "key": "教育行业",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      },
      {
          "key": "学生",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      },
      {
          "key": "以上均无",
          "num": "0",
          "rate": "0",
          "config": {
              "is_hidden": 0
          },
          "showPrimaryWord": false,
          "loading": false
      }
  ],
  "calculations": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
  ],
  "tableId": "60618601"
}`

var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, sagittis ut tempus sit amet, consectetur eget erat. Sed ornare gravida lacinia. Curabitur iaculis metus purus, eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada, vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.';
// 注意：这里的代码只是对上面的句子进行分词并计算权重（重复次数）并构建词云图需要的数据，其中 arr.find 和 
// 	reduce 函数可能在低版本 IE 中无法使用（属于ES6新增的函数），如果不能正常使用（对应的函数有报错），请自行加相应的 Polyfill
//  array.find 的 ployfill 参见：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill
// 	array.reduce 的 ployfill ：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Polyfill
var example = text.split(/[,\. ]+/g)
.reduce(function (arr, word) {
	var obj = arr.find(function (obj) {
		return obj.name === word;
	});
	if (obj) {
		obj.weight += 1;
	} else {
		obj = {
			name: word,
			weight: 1
		};
		arr.push(obj);
	}
	return arr;
}, []).sort((a, b) => b.weight - a.weight)

console.log(example)

const wordcloud = async (ctx, next) => {
  try {

    // Chart details object specifies chart type and data to plot
    const chartDetails = {
      type: "png",
      options: {
        chart: { type: 'wordcloud' },
        colors: ["#111111","red","#45D6AC","#71D15E","#C5D962","#F7B819","#FF8269","#F58CB7","#B87AE6","#8F7AF5"],
        plotOptions: {
          wordcloud: {
            groupPadding: 0.01,
            dataLabels: {
              padding: 0.01
            },
            lineWidth: 2,
            maxFontSize: 82,
            minFontSize: 12,
            minPointLength: 4,
            rotation: {
              to: 0
            },
            cropThreshold: 2,
            style: {
              fontFamily: 'Microsoft YaHei'
            },
            tooltip: {
              appendToBody: true,
              enabled: false
            }
          }
        },
        credits: {
          enabled: false
        },
        series: [{
          type: 'wordcloud',
          data: example
        }],
        title: {
          text: '词云图',
          style: {
            color: '#6690FA',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }
        }
      }
    };
    console.time('timer')

    const resImg = await new Promise((resolve, reject) => {
      chartExporter.export(chartDetails, async (err, res) => {
        // Get the image data (base64)
        // let imageb64 = res.data;
        // Filename of the output
        let outputFile = "wordcloud.png";
        // Save the image to file

        // console.log(res.data, 'res.data')
        console.log("Saved image!");

        chartExporter.killPool();
        console.log('111111')
        resolve(res.data)
     });
    })
    let outputFile = 'wordcloud.png'
    // fs.writeFileSync(outputFile, resImg, "base64", function(err) {
    //   if (err) console.log(err);
    // });
    const newImg = new Buffer(resImg, 'base64')
    console.log('22222')
    ctx.response.set("content-type", "image/png");
    ctx.response.set("content-disposition", "attachment; filename=wordcloud.png");
    console.timeEnd('timer')

    // ctx.body = resImg;
    return ctx.body = newImg
    // {
    //   code: 200,
    //   msg: '获取信息成功'
    // }
  } catch (error) {
    console.log(error)
    ctx.Back(error.message, ctx.ErrCode.INTERNAL_ERROR);
  }
}


module.exports = {
  wordcloud
}


