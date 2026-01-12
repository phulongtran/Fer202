import listOfStudent from '../listOfStudent';
import About from './About';
import '../StudentList.css';

function StudentList() {
  return (
    <div className="student-list-container">
      <h1>Danh sách sinh viên</h1>
      <div className="student-grid">
        {listOfStudent.map((student) => (
          <div key={student.id} className="student-card">
            <About student={student} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
