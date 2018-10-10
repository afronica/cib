const express = require('express');
const bodyParser= require('body-parser')
/*const app=express();*/
const router = express.Router();
const MongoClient = require('mongodb').MongoClient

router.use(bodyParser.urlencoded({extended: true}))

var db
MongoClient.connect('mongodb://cinemainabox_test:cinemainabox2018@ds121753.mlab.com:21753/cinemainabox',{ useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)
  db = client.db('cinemainabox') // whatever your database name is
  console.log('MongoDB Connected database')  
})

//router.use(express.static('public'))

router.get('/api/buzzindex', (req, res) => {
    db.collection('buzzindex').find({ Year: "2016", Genre: "Romantic" }).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      //console.log('MongoDB Connected database11') 
      //alert (result)       
      //res.render('index', {movies: result})
      //return ({movies: result})
      res.json(result)
    })
  })
module.exports = router;

