const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog')


app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))





app.get('/', (req,res) => {
    const articles= [{
        title: 'Test article',
        createdAt: new Date(),
        description: 'test-description'
        },{
        title: 'Test article2',
        createdAt: new Date(),
        description: 'test-description2'
        }]

     
 
    
 
    res.render('articles/index', {articles: articles})
})

 

app.use('/articles',articleRouter)
app.listen(5000)

