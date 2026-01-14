import listOfStudent from '../listOfStudent';
import Card from './Card';
import '../StudentList.css';

function StudentList() {
  return (
    <div className="student-list-container">
      <h1>Danh sách sinh viên</h1>
      <div className="student-grid">
        {listOfStudent.map((student) => (
          <Card key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
