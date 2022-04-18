const express = require('express')
const router = express.Router()
const Subscriber = require('../modules/subscribers')

//Getting all
router.get('/', async (req,res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch(err){
        res.status(500).json({message: err.message})
    }
})
//Getting one
router.get('/:id', getSubscriber, (req,res) => {
    // res.send(res.subscriber.name)
    res.send(res.subscriber)
})
//Creating one
router.post('/', async (req,res) => {
    const subscribers = new Subscriber({
        name : req.body.name,
        subscribedToChannel : req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscribers.save()
        res.status(201).json(newSubscriber)
    } catch(err){
        res.status(400).json({message: err.message})
    }
     
})
//Updating one
router.patch('/:id', getSubscriber, async (req,res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})
//Deleting one
router.delete('/:id', getSubscriber, async (req,res) => {
    try {
        await res.subscriber.remove()
        res.json('subscriber Deleted')
    } catch (error) {
        res.status(400).json({message: err.message})
    }
})

async function getSubscriber(req, res, next) {
    // var subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({message: 'Cannot find the subscriber'})
        }
    } catch(err) {
        return res.status(500).json({message: err.message})
    }
    res.subscriber = subscriber
    next()
}

module.exports = router