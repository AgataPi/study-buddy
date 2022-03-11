import { rest } from 'msw';
import { db } from 'mocks/db';
import { groups } from './groups';
import { students } from './students';

export const handlers = [...groups, ...students];
