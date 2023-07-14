

import { jobController } from '../controllers/jobController'
import express from 'express'

const jobRouter = express.Router()
const jobC = new jobController()
jobRouter.get('/getAllJobs', jobC.getJobs)
jobRouter.get('/getJobById/:id', jobC.getJobById)
jobRouter.post('/addJob', jobC.addJob)
jobRouter.delete('/deleteJob/:id', jobC.deleteJob)
jobRouter.put('/updateJob', jobC.updateJob)
jobRouter.get('/decodeLogo/:logo', jobC.decodeLogo)

export default jobRouter;