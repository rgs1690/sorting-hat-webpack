// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import { addStudentToArray, expelStudent } from './helpers/data/studentData';
import '../styles/main.scss';
import renderToDOM from './helpers/renderToDom';

const showForm = () => {
  document.querySelector('#button-div').innerHTML = '';
  const content = `<div class="card m-3 justify-content-center">
                        <div class="card-body text-center">  
                            <h4>
                                Enter First Year's Name
                            </h4>
                            <div id="error-message"></div>
                            <div class="d-flex col-md-6 offset-md-3">
                                <label for="inlineFormInput">Student: </label>
                                <input type="text" class="form-control mx-3" id="student-name" placeholder="Luna Lovegood" required>
                               <button id="sort" class="btn btn-primary mb-2">Sort!</button>
                            </div>
                        </div>
                    </div>`;
  renderToDOM('#sorting-form', content);
};
const domEvents = () => {
  document.querySelector('#sorting-form').addEventListener('click', addStudentToArray);
  document.querySelector('#first-years-card-display').addEventListener('click', expelStudent);
  document.querySelector('#start-sorting').addEventListener('click', showForm);
};
const init = () => {
  domEvents();
};

init();
