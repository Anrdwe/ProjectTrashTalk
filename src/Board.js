import React from 'react'
import './Style.css'

class Board extends React.Component {

    constructor() {
        super()
        this.state = {
           posts: []
        }
        this.getPosts=this.getPosts.bind(this)
    }

    componentDidMount() {
        this.getPosts();
    }
    /*componentDidUpdate() {
        fetch('http://localhost:4000/posts')
        .then(response => response.json())
        .then(response => {
            if (response.data !== posts) {
                this.setState({posts: response.data})
            }
        }
    }*/

    getPosts() {
        fetch('http://localhost:4000/posts')
            .then(response => response.json())
            .then(response => this.setState({posts: response.data}))
            .catch(err => console.error(err))
    }

    renderBoard ({email, username, message, org}) {
        return (
        <div  className="board-box">
            <div className="board-name">{username}, {org}</div>
            <div className="board-text">{message}</div>
            <div className="board-email">{email}</div>
        </div>
        )
    }
    
    render() {
        const { posts } = this.state;
        return(
            <div>
                {posts.map(this.renderBoard)}
            </div>
        )
    }
}

export default Board