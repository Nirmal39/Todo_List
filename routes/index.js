const express = require('express');

const router = express.Router();

const homeController = require("../controllers/home_controller")


router.get('/',homeController.home)

router.post('/create_todo', homeController.createTodo)//controller for creating todo list
router.get('/delete_todo/:id',homeController.deleteTodo) // controller for deleting the todo list
router.get('/editdata',homeController.EditPage)  // controller to go to the edit page
router.post('/edit-todolist',homeController.editDetails) // controller to edit the details in todolist

module.exports = router;