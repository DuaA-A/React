import React from 'react';

class StudentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            liked: false
        };
    }

    handleLikes = () => {
        this.setState({
            likes: this.state.likes + 1 
        });
    }

    render() {
    const { student } = this.props;

    return (
        <div className="student-card">
            <img
                src={student.img}
                alt={`${student.name}'s profile`}
                width="200px"
                height="300px"
            />
            <div className="like-container">
                <h2>{student.name}</h2>
                <div className="like-icon">
                    <button className="btn" onClick={this.handleLikes} >
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </button>
                    <p> {this.state.likes}</p>
                </div>
            </div>
            <p className="uni"> {student.university}</p>
            <p className="trak"> {student.track}</p>
            <p className="grd"> GPA: {student.grade}</p>
        </div>
    );
}

}

export default StudentCard;