import {BitcharmSDK} from 'bitcharm-sdk';
import React from 'react';
import './App.css';
import logo from './logo.svg';
// import {ChartDataResult} from 'bitcharm-sdk/dist/modules/chart';

// const SDK = bitcharmSDK({reconnectTimes: 5});

// export const subs = new Subject();

const bs = BitcharmSDK({
    reconnectTimes: 3,

    // hooks: {
    //     close(event) {
    //         // subs.next(event);
    //         console.log(event, 'hooks');
    //     },
    //     authState(message) {},
    // },
});

const {modules: SDK, reconnectAdd, beforeSend, onMessage, onOpen, onClose} = bs;

// setTimeout(() => {
//     SDK.Test.getFF();
// }, 3000);
// SDK.Reconnect.getsd();

// console.log(bs);

// onClose(() => {
//     console.log('onclose');
// });

SDK.Account.assets({assetType: 'MARGIN'}, () => {
    console.log('sdf');
});

// const sdd = reconnectAdd(SDK.Chart.config);

// const sd = sdd(
//     res => {
//         console.log('sdf', res.supported_resolutions);
//     },
//     errr => {
//         console.log(errr.code);
//     },
// );

// // const sd2 = sdd((res: {dsdf: string}) => {
// //     console.log('sdf2', res);
// // });

// // SDK.Quotes.getPrecision({kind: 'future', currency: 'BTC'}, res => {
// //     console.log(res.priceDp);
// // });

// SDK.Account.auth(
//     {
//         grant_type: 'jwt_token',
//         client_id: '3ba28e23',
//         jwt:
//             'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIyMzM0NCIsImVtYWlsIjoidGVzdHNzQDEyNi5jb20iLCJjbGllbnRJZCI6IjNiYTI4ZTIzIiwianRpIjoiYzcwNTdjOTYtYjQxMC00ZjJhLWFjM2MtZjcxNjM5ZWE0YWI0IiwiaWF0IjoxNjA3OTExNTQ1LCJleHAiOjE2MDc5MTUxNDV9._J5Rdum331WW9mP8eq_X-6TsaqsRQYXyQSn50MCTwTE',
//     },
//     message => {
//         console.log(message, 'SDK.Market.orderBook');
//     },
// );
// beforeSend(({message, next}) => {
//     console.log(message, next);
// });
// setTimeout(() => {
//     sd();
// }, 15000);
// SDK.Chart.dataIncrement({name: 'BTC-25DEC20', resolution: '5'}, message => {
//     console.log(message);
// });

// SDK.Quotes.orderBook('dsfsdf',(res)=>{

// });
// SDK.Quotes('')
// SDK.Trade.buy({type: 'market', instrument_name: 'sdf', amount: 'ffs'}, message => {
//     // message.
// });
// const sss = SDK.Auth.signIn(
//     {
//         grant_type: 'jwt_token',
//         client_id: '3ba28e23',
//         jwt:
//             'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIyMzM0NCIsImVtYWlsIjoidGVzdHNzQDEyNi5jb20iLCJjbGllbnRJZCI6IjNiYTI4ZTIzIiwianRpIjoiYzcwNTdjOTYtYjQxMC00ZjJhLWFjM2MtZjcxNjM5ZWE0YWI0IiwiaWF0IjoxNjA3OTExNTQ1LCJleHAiOjE2MDc5MTUxNDV9._J5Rdum331WW9mP8eq_X-6TsaqsRQYXyQSn50MCTwTE',
//     },
//     message => {
//         console.log(message, 'SDK.Market.orderBook');
//     },
// );

// setTimeout(() => {
//     sss();
// }, 3000);
// SDK.Auth

// const sss = SDK.Market.chartData(
//     {
//         end_timestamp: '1608175974',
//         instrument_name: 'BTC-25DEC20',
//         resolution: '5',
//         start_timestamp: '1606851114',
//     },
//     message => {
//         // console.log(message);
//     },
// );
// const sdfs: ChartDataResult = {};

// const sdk = DisorganizedTest({
//   hooks: {
//     close(event) {
//       console.log(event, "hooks");
//     },
//   },
// });

// sdk.test.auth({ test: "" }, (message) => {
//   console.log(message, 2);
// });
// sdk.test.auth({ test: "" }, (message) => {
//   console.log(message, 1);
// });
// const sss = sdk.test.ticker("BTC-25DEC20", (message) => {
//   // console.log("BTC-25DEC20001", message);
// });
// const sub = sdk.test.ticker("BTC-25DEC20", (message) => {
//   // console.log("BTC-25DEC20002", message);
// });
// const subd = sdk.test.ticker("BTC-25DEC21", (message) => {
//   // console.log("BTC-25DEC20002", message);
// });

// setTimeout(() => {
//   // sss.unSubscribe();
//   subd.unSubscribe();
// }, 2000);

// setTimeout(() => {
//   sub.unSubscribe();
// }, 5000);

// setTimeout(() => {
//   const sub = sdk.test.ticker("BTC-25DEC20", (message) => {
//     // console.log("BTC-25DEC20003", message);
//   });
// }, 5000);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to load.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
