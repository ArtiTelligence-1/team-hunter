import React, { useEffect, useState } from 'react'
import {  } from '../../components/ImgLoader';
import 'antd/dist/antd.css';
import { Select, Col, InputNumber, Row, Slider } from 'antd';

const { Option } = Select;
const onChange = (value: any) => {
  console.log(`selected ${value}`);
};


const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue: any) => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={100}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          style={{
            margin: '0 16px',
            
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
const Profile = () => {


    
  return (
    <>

    <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        Kshiti Ghelani
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <input className='form-control' type='text' placeholder='Name'/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Surname</label>
                                    </div>
                                    <div className="col-md-6">
                                        <input className='form-control' type='text' placeholder='Surname' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Sex</label>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="selectlabel">
                                            <select className="selectdiv">
                                                <option selected> Choose.. </option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Age</label>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <IntegerStep />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone Number</label>
                                    </div>
                                    <div className="col-md-6">
                                        <input className='form-control' type='text' placeholder='Search' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Tags</label>
                                    </div>
                                    <div className="col-md-6">
                                        <input className='form-control' type='text' placeholder='Search' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>About me</label>
                                    </div>
                                    <div className="col-md-6">
                                        <textarea className="textarea_prop">Some text about you...</textarea>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button type="submit" className="profile-edit-btn">Edit Profile</button>
                    </div>
                </div>
            </form>           
        </div>
    </>
  );
}

export default Profile;
