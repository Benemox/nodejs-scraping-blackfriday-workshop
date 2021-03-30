//Paquetes


const request = require("request")
const cheerio = require("cheerio")

/// Configurar la peticion de busqueda///

let urlShop = "https:/www.pccomponentes.com"
let searchParams = "/buscar/?query="
let keywords = "sony+playstation+4"
let options = ""

let optionsSearch = {
    url: urlShop + searchParams + keywords+ options,
    Headers:{}
}
request(optionsSearch,(error,response,body)=>{
  if(!error && Response.statusCode == 200){
    const $ = cheerio.load(body)
    let constProduct = $("#precio-main").attr("data-price")
    console.log(constProduct)
}  
  request(optionsSearch)
})
