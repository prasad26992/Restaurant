import React from 'react'
import "./Style.css"

function Todo() {
  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src='./images/todo.svg' alt='todologo'></img>
                    <figcaption>Add your list here</figcaption>
                </figure>
                <div className='addItems'>
                    <input type='text' placeholder='✍Add items' className='form-control'/>
                    <i class="fa fa-plus add-btn"></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo;