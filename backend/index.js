const express = require('express');
const zod = require('zod');
import { createTodo } from './types';
import { updateTodo } from './types';

const app = express();

app.use(express.json());

app.post('/todo', function(req, res) {
    const validation = createTodo.safeParse(req.body);
    if (!validation.success) {
        res.status(411).json({
            message: "You sent the wrong inputs."
        })
        return;
    }
    // put in mongodb
})

app.get('/todos', function(req, res) {

})

app.put('/completed', function(req, res) {
    const validation = updateTodo.safeParse(req.body);
    if (!validation.success) {
        res.status(411).json({
            message: "You sent the wrong inputs."
        })
        return;
    }
})