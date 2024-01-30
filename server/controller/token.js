const axios = require("axios")


// create access token
const createToken = async(req, res, next)=>{
 // Import secret from .env
  const secret = process.env.MPESA_CONSUMER_SECRET;
  const consumer = process.env.MPESA_CONSUMER_KEY;

  const   auth = new Buffer.from(`${consumer}:${secret}`).toString("base64")

  await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
      headers:{
        authorization: `Basic ${auth}`,
      },
    }
    )
    .then((item)=>{
      token = item.data.access_token
      console.log(item.data)
      next()
    })
    .catch((err)=>{
      console.log(err)
      res.status(400).json(err.message)
    })

}

// create stk push validation
const stkpush = async(req, res)=>{
  const shortCode = 174379
  const phone = req.body.phone.substring(1)
  const amount  = req.body.amount
  const passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919"
  const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

  const date = new Date()
  const timestamp = 
  date.getFullYear() +
  ("0" + (date.getMonth() +1)).slice(-2) +
  ("0" + (date.getDate() +1)).slice(-2) +
  ("0" + (date.getHours() +1)).slice(-2) +
  ("0" + (date.getMinutes() +1)).slice(-2) +
  ("0" + (date.getSeconds() +1)).slice(-2) 

  const password = new Buffer.from(shortCode + passkey + timestamp).toString(
    "base64"
  )
  const data =  {    
    "BusinessShortCode": shortCode,    
    "Password": password,    
    "Timestamp": timestamp,    
    "TransactionType": "CustomerPayBillOnline",    
    "Amount": amount,    
    "PartyA": `254${phone}`,    
    "PartyB":"174379",    
    "PhoneNumber":`254${phone}`,    
    "CallBackURL": "https://mydomain.com/pat",    
    "AccountReference":"mpesa test",    
    "TransactionDesc":"Testing stk push "
 }
 await axios.post(url, data, {
    headers: {
      authorization: `Bearer ${token}`
    },
  } ) 
  .then((item)=>{
    console.log(item.data)
    res.status(200).json(item.data)
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json(err.message)
  })
} 

 

module.exports = {createToken, stkpush}
