import React,{useState,useEffect, useContext} from 'react'
import { CiEdit,CiTrash } from "react-icons/ci";
import { Link,useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment'
import { AuthContext } from '../context/authContext';

const Single = () => {

  const [post,setPost] = useState({})
  const location = useLocation()
  const navigate = useNavigate()

 const postId = location.pathname.split("/")[2]

 const currentUser = useContext(AuthContext)

  useEffect(()=>{

       const fetchData = async()=>{
          try{
              const res = await axios.get(`/posts/${postId}`)

              setPost(res.data)

          }catch(err){
              console.log(err)
          }
       }
 
      fetchData()

  },[postId])

    // Check if the post state variable is empty
    if (Object.keys(post).length === 0) {
      return <div>Loading...</div>;
    }

  const handleDelete = async ()=>{

        try{
          await axios.delete(`/post/${postId}`)
          navigate("/")
        }catch(err){
          
        }

  }


  return (
    <div className='single'>
       <div className="content">
           <img src={post?.img} alt={post.title}/>
            <div className="user">
               <img src={post.userImg} alt="" />
                <div className="info">
                <span>{post.username}</span>
                <p>posted {moment(post.date).fromNow}</p>
                </div>
             {(currentUser?.currentUser?.username === post.username) && ( 
                      
                    <div className="edit">
                   <Link to={`/write?edit=2`}>
                     <CiEdit size={25} className='editPost'/>
                   </Link>
                     <CiTrash onClick={handleDelete} size={25} className='deletePost'/>
                   </div>
                   )}
           
            </div>
            <h1>{post.title}</h1>
            {post.desc}
       </div>
      <Menu/>
    </div>
  )
}

export default Single
