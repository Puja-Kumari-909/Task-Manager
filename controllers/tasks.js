const Task = require('../models/Task')
const handle = require('../middleware/async')

const getAllTasks = handle(async(req, res)=>{
        const task = await Task.find({})
        res.status(200).json({task})

})

const createTask = handle(async (req, res)=>{
        const task = await Task.create(req.body)
        res.status(201).json({ task })
})

const getTask = handle(async(req, res)=>{
    
        const {id:taskId} = req.params
        const task = await Task.findOne({_id:taskId})
        if(!task){
          return  res.status(404).json({msg:"No task found"})
        }
        res.status(200).json({task})
    
})


const updateTask = handle(async(req, res)=>{
       const {id:taskId} = req.params
        const task = await Task.findOneAndUpdate({_id:taskId}, req.body, {
            new:true,
            runValidators:true,
        })
        if(!task){
            res.status(404).json({msg:`no task found to update`})
        }
        res.status(200).json({task})
      
})


const deleteTask = handle(async (req, res)=>{
    const {id:taskId} = req.params
    const task = await Task.findOneAndDelete({_id:taskId})
    if(!task){
        res.status(404).json({msg:`no task found to delete`})
    }
    res.status(200).json({task})
   
})



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}