TradingView 是一个优秀的交易技术分析金融图表，拥有丰富的技术指标库。
如果需要在项目中使用它，请自行去申请即可。

> 这里只讨论使用 `create-react-app` 创建的项目

当我们申请成功后，到官方提供给我们的`Github`链接拿到代码时，大致的结构如下：

```
|-- charting_library-master
    |-- charting_library
		|-- static
			|-- ...
		|-- charting_library.min.js
		|-- charting_library.min.d.ts
		|-- datafeed-api.d.ts
    |-- datafeeds
    |-- index.html
    |-- mobile_black.html
    |-- mobile_white.html
    |-- test.html
    |-- CONTRIBUTING.md
    |-- README.md
```

**这里是重点！！！这里是重点！！！这里是重点！！！**
我们的关注点只放在`charting_library`这个文件夹即可。我们把 `charting_library/static` 文件夹 `剪切`  到 `/public` 文件夹下，可以把`static`文件夹更名为你想要的名字，比如 `charting_library_static`，原 `charting_library` 文件夹下只保留 `charting_library.min.js` 和 `charting_library.min.d.ts` 即可，其余的文件可以按自己心情决定是否保留。
这是我自己的路径示意图：

```
|-- myApp
	|--public
		|--charting_library_static
			|-- ...
		...
	|-- src
		|--assets
    		|-- charting_library
				|-- charting_library.min.js
				|-- charting_library.min.d.ts
		...
```


创建一个`React`组件，我们取名为 `Tradingview.tsx` ，键入以下代码：

```javascript
// 引用路径需按照自己的实际情况更改
import {
    widget,
    ChartingLibraryWidgetOptions,
    LanguageCode,
    IChartingLibraryWidget,
} from '../assets/charting_library/charting_library.min';
import {DataFeed} from '../assets/datafeed.ts'

export function Tradingview(){
	const myWeight = useRef<IChartingLibraryWidget>();
	
	useEffect(()=>{
		myWeight.current = new widget({
			symbol: 'YourSymbol',
            container_id: 'tv-chart_container',
            locale:'zh',
            interval: 'D',
            // 这里我推荐使用自行创建的 datafeed，自由度高！！
            // 稍候会贴上 DataFeed 的简易代码
            datafeed: new DataFeed(),
            
            // 注意：这个属性非常重要！！！他决定了你是否能成功引入 Tradingview
            // 它的取值是相对于项目编译后的根目录，就是原来的 static 文件夹
            // 这个文件夹下的文件是不需要编译的，所以需要放置在 /public 下
            library_path: '/charting_static/',
		});
	},[])
	return <div id='tv-chart_container'></div>
}
```

```javascript
// datafeed.ts

export class DataFeed {
	// 必须包含
	onReady = (callback: any) => {
	 	// 你的默认配置
        callback({...});
    };
    // 必须包含
    searchSymbols = () => {
        console.log('searchSymbols');
    };
    // 必须包含
    resolveSymbol = (
        symbolName: any,
        onSymbolResolvedCallback: any,
        onResolveErrorCallback: any,
    ) => {
    	// 配置
        onSymbolResolvedCallback({...});
    };
    // 必须包含
	getBars = (
        symbolInfo: any,
        resolution: any,
        from: any,
        to: any,
        onHistoryCallback: any,
        onErrorCallback: any,
        firstDataRequest: any,
    ) => {
        if (firstDataRequest) {
        	// 设置全量数据
        	YourRequest.getTradingviewChartData().then(data=>{
				onHistoryCallback(
					[{
						time: Math.round(new Date().getTime()/1000),
						close: 123123,
						open: 123123,
						high: 123123,
						low: 123123,
						volume: 110022,
					}],
					{noData: true}
				);
        	})
        }
    };
    // 必须包含
    subscribeBars = (
        symbolInfo: any,
        resolution: any,
        onRealtimeCallback: any,
        subscriberUID: any,
        onResetCacheNeededCallback: any,
    ) => {
    	// 通过ws消息推送单条数据
		onRealtimeCallback({
			time: Math.round(new Date().getTime()/1000),
			close: 123123,
			open: 123123,
			high: 123123,
			low: 123123,
			volume: 110022,
        });
    };
    unsubscribeBars = (id: string) => {
        console.log('unsubscribeBars');
    };
}
```

至此，通过 `create-react-app` 创建的 `react+typescript`  项目加载 `Tradingview` 分享完毕，谢谢阅读！

相关文档阅读：[Tradingview中文文档](https://zlq4863947.gitbook.io/tradingview/)
