$(function(){
	$('#userInf').on('mouseover',function(){
		$('.userInfo').addClass("userdisplay").removeClass("userhidden");
	})
	$('.userInfo').on('mouseleave',function(){
		setTimeout(function () { $('.userInfo').addClass("userhidden").removeClass("userdisplay"); }, 1000);
	})
	var myChart1 = echarts.init(document.getElementById('checkWork1'));
			
	// 指定图表的配置项和数据
	var option = {
	    title: {
	        text: ''
	    },
	    tooltip: {},
	    legend: {
	        data:['小时']
	    },
	    xAxis: {
	        data: ["测试架桥机","镇平架桥机","测试起重机"],
			axisLine: {//x轴样式
			              show: true,
			              lineStyle: {
			                color: "#00c7ff",
			                width: 1,
			                type: "solid"
			              }
			            }

	    },
	    yAxis: {
			axisLine: {//y轴样式
			              show: true,
			              lineStyle: {
			                color: "#00c7ff",
			                width: 1,
			                type: "solid"
			              },
						  }
		},
	    series: [{
	        name: '考勤',
	        type: 'bar',
			color:'#F4A460',
	        data: [5, 8, 10],
			barWidth: 50
	    }]
	};
			
	// 使用刚指定的配置项和数据显示图表。
	myChart1.setOption(option);
	var myChart2 = echarts.init(document.getElementById('checkWork2'));
	var option2 = {
	    series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius: '55%',
				// roseType: 'angle',
	            data:[
	                {value:2, name:'正在作业',itemStyle:{color:'#00FFFF'}},
	                {value:1, name:'未作业',itemStyle:{color:"#FFFF00"}}
	            ]
	        }
	    ]
	};
	myChart2.setOption(option2);

});