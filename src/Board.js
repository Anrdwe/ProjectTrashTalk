import React from 'react'
import './Style.css'
import BoardComponent from "./BoardComponent"

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

    getPosts() {
        fetch('http://localhost:4000/posts')
            .then(response => response.json())
            .then(response => this.setState({posts: response.data}))
            .catch(err => console.error(err))
    }

    renderBoard ({email, username, message, org}) {
        return (
        <div className='board-box'>
            <BoardComponent username={username} org={org} message={message} email={email}/>
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