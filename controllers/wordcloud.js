// const fs = require("fs");
// const chartExporter = require("highcharts-export-server");
// chartExporter.initPool();

// const data = `{
//   "title": "",
//   "words": [
//       {
//           "key": "市场调研/市场企划/咨询行业",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       },
//       {
//           "key": "母婴用品行业",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       },
//       {
//           "key": "广告行业",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       },
//       {
//           "key": "公共关系行业",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       },
//       {
//           "key": "新闻/传媒行业",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       },
//       {
//           "key": "建筑业",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       },
//       {
//           "key": "医疗行业",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       },
//       {
//           "key": "物流/运输行业",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       },
//       {
//           "key": "政府机关单位",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       },
//       {
//           "key": "旅游业",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       },
//       {
//           "key": "教育行业",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       },
//       {
//           "key": "学生",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       },
//       {
//           "key": "以上均无",
//           "num": "0",
//           "rate": "0",
//           "config": {
//               "is_hidden": 0
//           },
//           "showPrimaryWord": false,
//           "loading": false
//       }
//   ],
//   "calculations": [
//       null,
//       null,
//       null,
//       null,
//       null,
//       null,
//       null,
//       null,
//       null,
//       null,
//       null,
//       null,
//       null
//   ],
//   "tableId": "60618601"
// }`

// const wordcloud = async (ctx, next) => {
//   try {

//     // Chart details object specifies chart type and data to plot
//     const chartDetails = {
//       type: "png",
//       options: {
//         chart: { backgroundColor: '#fff' },
//         colors: ["#6690FA","#74D0F7","#45D6AC","#71D15E","#C5D962","#F7B819","#FF8269","#F58CB7","#B87AE6","#8F7AF5"],
//         plotOptions: {
//           wordcloud: {
//             groupPadding: 0.01,
//             dataLabels: {
//               padding: 0.01
//             },
//             lineWidth: 1,
//             maxFontSize: 82,
//             minFontSize: 12,
//             minPointLength: 4,
//             rotation: {
//               to: 0
//             },
//             cropThreshold: 2,
//             style: {
//               fontFamily: 'Microsoft YaHei'
//             },
//             tooltip: {
//               appendToBody: true,
//               enabled: false
//             }
//           }
//         },
//         credits: {
//           enabled: false
//         },
//         series: [{
//           type: 'wordcloud',
//           data: data
//         }],
//         title: {
//           text: '词云图',
//           style: {
//             color: '#fff',
//             overflow: 'hidden',
//             textOverflow: 'ellipsis',
//             whiteSpace: 'nowrap'
//           }
//         }
//       }
//     };

//     chartExporter.export(chartDetails, (err, res) => {
//       console.log(11111111)
//       // Get the image data (base64)
//       let imageb64 = res.data;
//       // Filename of the output
//       let outputFile = "wordcloud.png";
//       // Save the image to file
//       fs.writeFileSync(outputFile, imageb64, "base64", function(err) {
//           if (err) console.log(err);
//       });
//       console.log("Saved image!");
//       // ctx.response.set("content-type", "image/png");
//       // ctx.response.set("content-disposition", "attachment; filename=aaa.png");
//       // ctx.body = imageb64;
//       chartExporter.killPool();
//    });

//     return ctx.body = {
//       code: 200,
//       msg: '获取信息成功'
//     }
//   } catch (error) {
//     console.log(error)
//     ctx.Back(error.message, ctx.ErrCode.INTERNAL_ERROR);
//   }
// }


// module.exports = {
//   wordcloud
// }


