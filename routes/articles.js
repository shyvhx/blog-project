const express = require('express')
const router = express.Router()
const Article = require('./../models/article')
const marked = require('marked')
const slugify = require('slugify')



router.get('/new', (req,res) => {
    res.render('articles/new',{article: new Article()})

})

router.get('/edit/:id', async (req,res) => {
    const article = await Article.findById(req.params.id)
    res.render('articles/edit',{article: article})

})


router.get('/:slug', async (req,res) => {
    const article = await Article.findOne({slug: req.params.slug});

    if (article == null) res.redirect('/')
    
    res.render('articles/show',{article: article })
    
})

router.post('/', async (req,res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try{
        await article.save()
        res.redirect(`/articles/${article.slug}`)
    } catch (e){
        res.render('articles/new', {article: article})
        console.log(e)
    }
    
})


router.delete('/:id', async (req,res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})


router.put('/:id', (req,res) => {



})


function saveArticleAndRedirect(path){


    
}

module.exports = router