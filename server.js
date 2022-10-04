const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()


app.set('view engine','ejs')

app.use('/articles',articleRouter)


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

     

 
    res.render('index', {articles: articles})
})

 


app.listen(5000)

