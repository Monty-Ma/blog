在上一篇 [001-Tradingview 引入](https://github.com/Monty-Ma/blog/blob/master/Tradingview/001-Tradingview%E5%BC%95%E5%85%A5.md) 已经介绍了如何在项目中引入 Tradingview，虽然讲的是如何在 react 中引入 Tradingview，但是基本都是可以通用的。

那么，这篇文章我将分享一下如何接入数据的问题

其实在上一篇文章的末尾我已经分享了如何接入数据了，不知道大家有没有注意到，就是这个 DataFeed 类。

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
						close: '123123',
						open: '123123',
						high: '123123',
						low: '123123',
						volume: '110022',
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
			close: '123123',
			open: '123123',
			high: '123123',
			low: '123123',
			volume: '110022',
        });
    };
    unsubscribeBars = (id: string) => {
        console.log('unsubscribeBars');
    };
}
```

如上代码所示：必要包含的方法已经列入其中，其他的方法可以参考 [Tradingview js API](https://zlq4863947.gitbook.io/tradingview/3-shu-ju-bang-ding/js-api)，
这里面有详细的说明。

这里我们说说接入数据的最重要的三个方法：

### 1. getBars(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest)

此方法有 7 个参数 ：

1. symbolInfo: 商品信息对象 参考 [商品信息](https://zlq4863947.gitbook.io/tradingview/3-shu-ju-bang-ding/symbology#%E5%95%86%E5%93%81%E4%BF%A1%E6%81%AF%E7%BB%93%E6%9E%84)
2. resolution: string （周期）
3. from: unix 时间戳, 最左边请求的 K 线时间
4. to: unix 时间戳, 最右边请求的 K 线时间
5. **onHistoryCallback**: ({bars:{time, close, open, high, low, volume}[],meta:{noData :true | false; nextTime : unix}})=>void 设置全量数据，
6. onErrorCallback: function(reason：错误原因) 错误回调
7. **firstDataRequest**: 布尔值，以标识是否第一次调用此商品/周期的历史记录。当设置为 true 时
   你可以忽略 to 参数（这取决于浏览器的 Date.now()) 并返回 K 线数组直到当前 K 线（包括它）。

**注意： 如果使用轮询的方式设置数据，请在没有请求到数据时将 meta.noData 设置为 true，否则将会发生不断自动刷新图表的问题。**

### 2. subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback)

> 相同的参数参考上述说明

1. **onRealtimeCallback** : ({time:unix, close:string, open:string, high:string, low:string, volume:string})=>void 设置增量数据
1. subscriberUID : Object
1. onResetCacheNeededCallback : ()=>void 将在 bars 数据发生变化时执行

**订阅数据后，调用 onRealtimeCallback 方法以更新实时数据。**

### 3. unsubscribeBars(subscriberUID)

此方法用于取消订阅 K 线数据

其实 Tradingview 接入数据很简单，需要自己多多尝试即可。以上便是我要分享的内容，感谢 [TradingView 中文开发文档](https://zlq4863947.gitbook.io/tradingview/)
