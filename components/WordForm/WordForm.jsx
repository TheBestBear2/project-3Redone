import React, {useRef} from 'react'
import './WordForm.css'
function WordForm({addWord}) {
        const enRef = useRef(null);
        const deRef = useRef(null);
        const dbRef = useRef(null);
        const dsRef = useRef(null); 
    const handleSubmit = (e) => {
         
        const enField = enRef.current; 
        const deField = deRef.current;
        const dbField = dbRef.current;
        const dsField = dsRef.current;


        const enValue = enField.value; 
        const deValue = deField.value;
        const dbValue = dbField.value;
        const dsValue = dsField.value;

        enField.value = '';
        deField.value = '';
        dbField.value = '';
        dsField.value = ''; 

        addWord(enValue, deValue, dbValue, dsValue);

    }
  return (
    
      <section className='card-form'>
        
                <h2>New Card</h2>
                <form action="#" method='GET' onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="">
                        First: Name
                        <input 
                            type="text" 
                            name="en" 
                            placeholder='first-name'
                            ref={enRef}
                        />
                        </label>
                    </div>
                    <div className="form-row">
                        <label htmlFor="">
                        Last: Name
                        <input 
                            type="text" 
                            name="de" 
                            placeholder='last-name'
                            ref={deRef}
                        />
                        </label>
                    </div>
                    <div className="form-row">
                        <label htmlFor="">
                        Email
                        <input 
                            type="text" 
                            name="db" 
                            placeholder='email'
                            ref={dbRef}
                        />
                        </label>
                    </div>
                    <div className="form-row">
                        <label htmlFor="">
                        Comment
                        <input 
                            type="text" 
                            name="ds" 
                            placeholder='comment'
                            ref={dsRef}
                        />
                        </label>
                    </div>
                    
                    <div className='form-row'>
                        <button type='submit'>Add word</button>
                    </div>
                </form>
            </section>
    
  )
}

export default WordForm
