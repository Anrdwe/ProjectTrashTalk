import React from 'react'

class Board extends React.Component {

    state = {
        posts: []
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
        return <div className="board-text">{message}</div>
    }
    
    render() {
        const { posts } = this.state;
        return(
            <div ClassName="board-box">
                {posts.map(this.renderBoard)}
            </div>
        )
    }
}

export default Board