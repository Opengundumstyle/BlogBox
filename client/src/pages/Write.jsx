import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MdOutlinePublish } from "react-icons/md";
import { useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios'
import moment from 'moment'

const Write = () => {

  const state = useLocation().state
  const [value, setValue] = useState(state?.desc|| "");
  const [title,setTitle] = useState(state?.title||"")
  const [img,setImg] = useState(null)
  const [cat,setCat] = useState(state?.cat||"")
  const navigate = useNavigate()

  const upload = async ()=>{

     try{
        const formData = new FormData()
        formData.append("file",img)
        const res = await axios.post("/upload",formData)
        return res.data 
     }catch(err){
       
     }
  }

  const handleSubmit = async (e)=>{
     e.preventDefault()
      const imgUrl = await upload()
      try{
          state? await axios.put(`/posts/${state.id}`,{title,desc:value,cat,img:img?imgUrl:""})
               : await axios.post(`/posts/`,{title,desc:value,cat,img:img?imgUrl:"",date:moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")})
               // update or publish success go back to homepage
               navigate("/")

      }catch(err){
         console.log(err)
      }
  }

  return ( 
    <div className='writePage'>
        <div className="content">
           <input type="text" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
           <div className="editorContainer">
              <ReactQuill className='editor' theme="snow" value={value} onChange={setValue}/>
           </div>
        </div>
        <div className="menu">

        <div className="item var1">

              <div><h1>Publish</h1></div> 

              <div className='status'>
                  <span>
                    <b>Status:</b>Draft
                  </span>
                  <span>
                    <b>Visibility:</b>Public
                  </span>
              </div>
              
              <div className='update'>

                  <div>
                  <input type="file" id='file' style={{display:"none"}} onChange={e=>setImg(e.target.files[0])}/>
                  <label className = 'file' htmlFor="file">Upload Image</label>
                  </div>

                  <div className="buttons">
                    <button>Save as a draft</button>
                    <button onClick={handleSubmit}>
                      <MdOutlinePublish/>
                      {state?"Update":"Publish"}  
                    </button>
                  </div>
              </div>

       </div>
       
          <div className="item var2">
            <h1>Category</h1>

            <div className="cat">
            <input type="radio" name='cat'  checked ={cat ==="art"}value='art' id='art' onChange={e=>setCat(e.target.value)} />
            <label htmlFor="art">Art</label>
            </div>
            <div className="cat">
            <input type="radio" name='cat'  checked ={cat ==="science"}value='science' id='science' onChange={e=>setCat(e.target.value)} />
            <label htmlFor="science">Science</label>
            </div>
            
            <div className="cat">
            <input type="radio" name='cat' checked ={cat ==="technology"} value='technology' id='technology' onChange={e=>setCat(e.target.value)} />
            <label htmlFor="technology">Technology</label>
            </div>

            <div className="cat">
            <input type="radio" name='cat' checked ={cat ==="cinema"} value='cinema' id='cinema' onChange={e=>setCat(e.target.value)} />
            <label htmlFor="cinema">Cinema</label>
            </div>

            <div className="cat">
            <input type="radio" name='cat'  checked ={cat ==="food"}value='food' id='food' onChange={e=>setCat(e.target.value)} />
            <label htmlFor="food">Food</label>
            </div>

            <div className="cat">
            <input type="radio" name='cat'  checked ={cat ==="music"}value='music' id='music' onChange={e=>setCat(e.target.value)} />
            <label htmlFor="music">Music</label>
            </div>

            <div className="cat">
            <input type="radio" name='cat'  checked ={cat ==="business"}value='business' id='business' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="business">Business</label>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Write
