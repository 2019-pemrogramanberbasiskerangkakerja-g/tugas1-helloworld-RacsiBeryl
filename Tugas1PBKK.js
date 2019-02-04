var express =  require('express');
var app = express();

app.get('/', function (req,res)
{
    res.send('HELLO WORLD!');
});

app.listen(4567,function ()
{
    console.log('Sukses membuat koneksi pada port 4567 dan dapat diakses di localhost:4567 pada browser')
});