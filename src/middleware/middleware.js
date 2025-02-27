import { allowedOrigins } from "../configs/config.js";


export const validaCORS = (req, res, next) => {
    const origin = req.headers.origin;
  
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }
  
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
  
    next();
  };