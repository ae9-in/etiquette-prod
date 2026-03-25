import { Course } from '../types';

/* 
 * Importing individual course modules to fix truncation issues 
 * and satisfy the required 'assessment' property in the Course type.
 */
import posh from './courses/posh_prevention_of_sexual_harassment';
import conduct from './courses/employee_code_of_conduct';
import legal from './courses/legal_and_industrial_regulations';
import safety from './courses/health_and_safety_ohs';
import ethics from './courses/business_ethics_and_integrity';
import infosec from './courses/information_security_awareness';
import ai from './courses/ai_ethics_and_workplace_usage';
import abc from './courses/anti_bribery_and_corruption_abc';
import diversity from './courses/diversity_and_inclusion';
import software from './courses/software_security_concerns';
import fire from './courses/fire_safety_and_evacuation';
import dataPrivacy from './courses/data_privacy';

export const COURSES: Course[] = [
  posh,
  conduct,
  legal,
  safety,
  ethics,
  infosec,
  ai,
  abc,
  diversity,
  software,
  fire,
  dataPrivacy
];