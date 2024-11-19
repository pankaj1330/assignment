import { useState } from "react"

export default function Dashboard(){
    const [formData,setFormData] = useState({
        fullname : "",
        age : null,
        fileName : ""
    });
    const [showtext,setShowtext] = useState(false);
    function handleChange(e){
        setShowtext(false);
        
        setFormData(prev => {
            if(e.target.name == 'age'){
                if(e.target.value < 0){
                    return {
                        ...prev,
                        [e.target.name] : 0
                    }
                }
            }
            return{
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        setShowtext(true);
    }

    return(
        <>
            <div className="input-form">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange}/>
                    <input type="number" name="age" id="age" placeholder="Age" value={formData.age} onChange={handleChange}/>
                    <input type="file" name="file" id="file" onChange={handleChange}/>
                    <input type="submit" value="Submit"/>
                    <p style={showtext ? {display : 'block'} : {display : 'none'}}>Thank you {formData.fullname} for sharing your feedback</p>
                </form>
            </div>
        </>
    )
}