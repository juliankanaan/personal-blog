import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post'

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(result.data)
            setLoading(false)
        }
        fetchPosts()

    }, []);
    
   return (
       
       <ul className='list-group'>
           {posts.map(post => (
                <li className='list-group-item' key={post.id}>
                <a href='#'>{post.title}</a>
                </li>
            
            ))}
       </ul>
   ) 
}
export default PostList;