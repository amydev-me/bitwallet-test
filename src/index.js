const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(express.json());

const axios = require('axios');
app.get('/api/get/best-selling-price', async (req,res) =>{
    try{
        let message = '';
        let binance_price = 0;
        let bittrex_price = 0;
        const binance_response = await axios.get('https://api.binance.com/api/v1/ticker/price?symbol=LTCBTC');
        const bittrex_response = await axios.get('https://api.bittrex.com/api/v1.1/public/getticker?market=BTC-LTC');

        binance_price = parseFloat(binance_response.data.price).toFixed(5);
        bittrex_price = parseFloat(bittrex_response.data.result['Last']).toFixed(5);

        if(binance_price<bittrex_price){
            message = `Bittrex Price ${bittrex_price} is higher than Binance Price ${binance_price}`;
        }
        else if(binance_price > bittrex_price){
            message = `Binance Price ${binance_price} is higher than bittrex_price ${bittrex_price}`;
        }else{
            message = `Bittrex Price ${bittrex_price} and Binance Price ${binance_price} are equal`;
        }

        res.status(200).send({
            success:true,
            message
        });    
    }catch(e){
        res.status(500);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));