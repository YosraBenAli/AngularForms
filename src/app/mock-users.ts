import {User} from "./user";

export const USERS: User[] = [
  {
    id: 1,
    name: 'Peter Parker',
    email: 'peterParker89@yahoo.com',
    password: {pwd: '12345678', confirmPwd: '12345678'},
    gender: 'Male',
    phone: '021-025-88'
  },
  {
    id: 2,
    name: 'Bruce Wayne',
    email: 'bruceWayne@gmail.com',
    password: {pwd: '2358748lhgjf', confirmPwd: '2358748lhgjf'},
    gender: 'Male',
    phone: '102-547-25'
  },
  {
    id: 3,
    name: 'Julia Clark',
    email: 'juliaClark12@yahoo.com',
    password: {pwd: 'gfdgotM58hkk', confirmPwd: 'gfdgotM58hkk'},
    gender: 'Female',
    phone: '087-002-87'
  },
  {
    id: 4,
    name: 'Daniel Craig',
    email: 'dannyCraig@yahoo.fr',
    password: {pwd: '878587OIT', confirmPwd: '878587OIT'},
    gender: 'Male',
    phone: '871-555-33'
  },
  {
    id: 5,
    name: 'Sarah Anderson',
    email: 'sarahAnderson74@gmail.com',
    password: {pwd: 'kjhgd54725L', confirmPwd: 'kjhgd54725L'},
    gender: 'Female',
    phone: '987-257-71'
  },
];
