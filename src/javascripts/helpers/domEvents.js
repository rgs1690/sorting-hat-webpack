import { addStudentToArray, expelStudent } from './data/studentData';
import showForm from './showForm';

const domEvents = () => {
  document.querySelector('#sorting-form').addEventListener('click', addStudentToArray);
  document.querySelector('#first-years-card-display').addEventListener('click', expelStudent);
  document.querySelector('#start-sorting').addEventListener('click', showForm);
};

export default domEvents;
