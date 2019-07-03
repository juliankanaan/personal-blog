import react, {useEffect, useState} from 'react'
import axios from 'axios'

/**
  Note: Must get URL params so that I can
 query contently for the right content 
 * */ 
const Post = props => {
    const [blogContent, setBlogContent] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const response = await axios.get('from api') 
            setBlogContent(response.data)
            setLoading(false)
        }
    }, [])

    return (
        <div className='post'>
            <div className='blog-title'>
                {blogContent.title}
            </div>
            <div className='blog-body'>
                {blogContent.body}
            </div>
        </div>
    );
}
export default Post