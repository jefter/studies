var express = require('express')
  , bodyParser = require('body-parser')
  , app = express()
  , port
  ;

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

  var contatos = [
	{nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

var products = [
      {name:'sandalias de dedo', description:'Product description test name products teste' , stock:20, price:30, category:'Calçados'},
      {name:'cueca box para gordos', description:'Product description' , stock:100, price:20, category:'Roupa intima'},
      {name:'par de meioa socket', description:'Product description' , stock:10, price:10, category:'Meias'},
      {name:'carteira de couro', description:'Product description' , stock:50, price:1, category:'Cateiras'}
    ];

port = process.env.PORT || 3412;
app.listen(port, function  () {
  console.log('Start Server Port:  ', port);
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});

app.get('/products', function(req, res){
  res.json(products);
});
