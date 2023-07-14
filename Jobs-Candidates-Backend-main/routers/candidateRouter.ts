// import { jobController } from '../controllers/jobController'
// import express from 'express'

// const jobRouter = express.Router()
// const jobC = new jobController()
// jobRouter.get('/getAllJobs', jobC.getJobs)
// jobRouter.get('/getJobById/:id', jobC.getJobById)
// jobRouter.post('/addJob', jobC.addJob)
// jobRouter.delete('/deleteJob/:id', jobC.deleteJob)
// jobRouter.put('/updateJob', jobC.updateJob)

// export default jobRouter;
import {candidateController} from '../controllers/candidateController'
import express from 'express'
const candidateRouter = express.Router()
const candidateC=new candidateController()
candidateRouter.get('/getCandidates',candidateC.getCandidates)
candidateRouter.get('/getCandidatesByJobId/:jobId',candidateC.getCandidatesByJobId)
candidateRouter.get('/getCandidateById/:id',candidateC.getCandidateById)
candidateRouter.post('/addCandidate',candidateC.addCandidate)
candidateRouter.delete('/deleteCandidate/:id',candidateC.deleteCandidate)
candidateRouter.put('/updateCandidate',candidateC.updateCandidate)
// candidateRouter.put('/updateRating/:id',candidateC.updateRating)
export default candidateRouter;