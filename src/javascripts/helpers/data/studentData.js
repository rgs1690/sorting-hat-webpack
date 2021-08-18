import sortingHat from './sortingHat';
import errorMessage from '../errorMessage';
import cardCreator from '../../components/cardCreator';

const studentArray = [];
const voldermortsArmy = [];

const sortStudentsByHouse = (array) => array.sort((a, b) => (a.house > b.house ? 1 : -1));
const addStudentToArray = (e) => {
  if (e.target.id === 'sort' || e.keyCode === 13) {
    const student = document.querySelector('#student-name');
    errorMessage(student.value);

    if (student.value) {
      studentArray.push({
        name: student.value,
        house: sortingHat(),
      });
      student.value = '';
    }
    const sortedArray = sortStudentsByHouse(studentArray);
    cardCreator('#first-years-card-display', sortedArray);
  }
  document.querySelector('#student-name').addEventListener('keyup', addStudentToArray); // this could have easily been accomplished by using a form tag instead of using separate form elements as form submits on enter key press also
};

const expelStudent = (e) => {
  if (e.target.type === 'button') {
    voldermortsArmy.push(studentArray[e.target.id]);
    studentArray.splice(e.target.id, 1);
    cardCreator('#first-years-card-display', studentArray);
    cardCreator('#voldermorts-army', voldermortsArmy);
  }
};

export { addStudentToArray, expelStudent };
