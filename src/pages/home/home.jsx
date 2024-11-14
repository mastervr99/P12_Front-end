
import './home.scss';
import Modal from '../../components/modal/modal';
import CreateEmployeeForm from '../../layout/create_employee_form/create_employee_form';
import React, { useState } from 'react';

function Home() {
    const [isModalVisible, setModalVisible] = useState(false); 
    const handleSave = () => { setModalVisible(true); };

    return <div className='home'>
               <main className=''>
                <div className='title'> 
                    <h1>HRnet</h1>
                </div>
                <div className="container"> 
                    <a href="/employee-list">View Current Employees</a>
                    <h2>Create Employee</h2> 
                    <CreateEmployeeForm onSave={handleSave} />
                </div>
                {isModalVisible && <Modal />}               
                </main>
           </div>
}

export default Home