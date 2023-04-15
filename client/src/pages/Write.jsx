import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MdOutlinePublish } from "react-icons/md";

const Write = () => {

  const [value, setValue] = useState('');


  return ( 
    <div className='writePage'>
        <div className="content">
           <input type="text" placeholder='Title'/>
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
                  <input type="file" id='file' style={{display:"none"}}/>
                  <label className = 'file' htmlFor="file">Upload Image</label>
                  </div>

                  <div className="buttons">
                    <button>Save as a draft</button>
                    <button>
                      <MdOutlinePublish/>
                        Update
                    </button>
                  </div>
              </div>

       </div>
       
          <div className="item var2">
            <h1>Category</h1>

            <div className="cat">
            <input type="radio" name='cat' value='art' id='art' />
            <label htmlFor="art">Art</label>
            </div>

            <div className="cat">
            <input type="radio" name='cat' value='science' id='science' />
            <label htmlFor="science">Science</label>
            </div>
            
            <div className="cat">
            <input type="radio" name='cat' value='technology' id='technology' />
            <label htmlFor="technology">Technology</label>
            </div>

            <div className="cat">
            <input type="radio" name='cat' value='cinema' id='cinema' />
            <label htmlFor="cinema">Cinema</label>
            </div>

            <div className="cat">
            <input type="radio" name='cat' value='design' id='design' />
            <label htmlFor="design">Design</label>
            </div>

            <div className="cat">
            <input type="radio" name='cat' value='food' id='food' />
            <label htmlFor="food">Food</label>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Write
