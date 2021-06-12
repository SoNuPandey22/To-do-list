import React, { useState } from 'react'
import ReactTable from 'react-table'

const ToDo = () =>{
  const [input, setInput] = useState('');
  const [toDo, setToDo] = useState([]);


  const handleChange = (e) =>{
  	setInput(e.target.value)
  }

  const handleSubmit = (e) => {
  	if(!input){
  		return;
  	}
  	 setToDo([... toDo, input]);
  	 e.preventDefault();
  	 setInput('')

  }
  const handleDelete = (id) => { 
  	   const updatedtoDo = toDo.filter((elem, ind) =>{
          return id !== ind;
  	   })
  	   setToDo(updatedtoDo)
  	}
  
  	

   const handleClearAll =()=>{
  	setToDo([])
  }

	return (

			<>
			 <div>
			 <form>
			    <input 
			       type="text" 
			       placeholder='Enter the task..............'
			       value={input} 
			       onChange={handleChange}
			     />
			    <button 
			        className='add-btn' 
			        onClick={handleSubmit}>
			         Add toDo list 
			    </button>
			    <div>
                   <button 
                      className="clearAll-btn" 
                      onClick={handleClearAll}>
                      Clear All
                   </button>
                </div>
			  </form>
			 </div>
			 
			 <div className='ToDoList'>
			     {
			     	toDo.map((ele, ind) =>{
			     	return (
			     		<p 
	                 	   className='item' 
	                 	   style={{color: 'darkblue', backgroundColor: 'lightgreen'}} 
	                 	   key={ind}
	                 	 >
		                 	   &nbsp;&nbsp;{`${ind+1} : ${ele}`}
		  					   <img 
		  					      onClick={()=> handleDelete(ind) } 
		  					      className='delete-btn' 
		  					      src='https://image.flaticon.com/icons/png/128/1214/1214428.png'
		  					    />
	                 	</p>


			     	)
			     })

			     } 
			     
                
              
			 </div>
			 
			 
			</>
		)
}

export default ToDo;