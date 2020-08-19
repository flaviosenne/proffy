import { Router } from "express"
const route = Router()

import ClassesController from './controllers/ClassesController' 
import ConnectionsController from "./controllers/ConnectionsController"

const ClassesControllers = new ClassesController()
const ConnectionsControllers = new ConnectionsController()
route.post('/classes', ClassesControllers.create)
route.get('/classes', ClassesControllers.index)

route.post('/connections', ConnectionsControllers.create)
route.get('/connections', ConnectionsControllers.index)


export default route