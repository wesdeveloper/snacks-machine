import request from 'supertest';
import chai from 'chai';
import app from '../src/app';

process.env.NODE_ENV = 'test';

global.app = app;
global.request = request(app);
global.assert = chai.assert;
