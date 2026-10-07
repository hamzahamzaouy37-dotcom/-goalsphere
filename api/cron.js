export default async function handler(req,res){
try{
const r=await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://feeds.bbci.co.uk/sport/football/rss.xml');
const j=await r.json();
const BAD=["full match","live","copyright","beIN","DAZN"];
let item=j.items.find(x=>!BAD.some(b=>x.title.toLowerCase().includes(b)))||j.items[0];
return res.json({ok:true,news:item.title,link:item.link});
}catch(e){return res.json({ok:false,error:e.message});}
}
