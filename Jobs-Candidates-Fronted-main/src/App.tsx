import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FormAdding } from './components/addingForm';
import { JobService } from './services/jobService';
import { CandidateService } from './services/candidateService';
import GenericTable from './components/table'
import { ICandidate } from './models/ICandidate';
import { IJob } from './models/IJob';
import JobPage from './pages/jobPage';
import CandidateTable from './pages/candidateTable';
import Routing from './pages/router';
import Basic from './components/rating';
import ChangeRating from './components/rating';
import Example from './components/showLogo';


export const App = () => {
  return (
    <Routing></Routing>
  );
};