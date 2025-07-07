import React from 'react';
import StudentCard from './StudentCard';
import imageB from './imageB.png';
import girlImg from './girlImg.jpg';

class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    id: 1,
                    name: "Yussuf Ali",
                    university: "Cairo University",
                    track: "Frontend",
                    grade: "90%",
                    img: imageB
                },
                {
                    id: 2,
                    name: "Lelly Magdy",
                    university: "Assiut University",
                    track: "Backend",
                    grade: "85%",
                    img: girlImg
                },
                {
                    id: 3,
                    name: "Duaa Ati",
                    university: "Cairo University",
                    track: "Fullstack",
                    grade: "78%",
                    img: girlImg
                },
                {
                    id: 4,
                    name: "Ali Mohamed",
                    university: "Ain Shams University",
                    track: "Bioinformatics",
                    grade: "88%",
                    img: imageB
                }
            ]
        };
    }

    render() {
        return (
            <div className="student-list">
                {this.state.students.map(student => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        );
    }
}

export default StudentList;
