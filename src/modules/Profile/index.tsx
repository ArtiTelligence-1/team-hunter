import React, { useEffect, useState } from 'react';
import { Select, Col, InputNumber, Row, Slider, Input } from 'antd';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './index.less';

const { TextArea } = Input;

const IntegerStep = ({ ...props }) => {
  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue: any) => setInputValue(newValue);

  return (
    <Row>
      <Col span={17}>
        <Slider
          min={1}
          max={100}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={7}>
        <InputNumber
          id="age"
          min={1}
          max={100}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

const Profile = () => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };

  const [value, setValue] = useState<string>('');

  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="profile-head">
              <h5>
                Kshiti Ghelani
              </h5>
              <h6>
                Web Developer and Designer
              </h6>
              <p className="proile-rating">
                RANKINGS :
                <span>8/10</span>
              </p>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <label htmlFor="name" className="row">
                  <div className="col-md-6">
                    {/* <label htmlFor='name'>Name</label> */}
                    Name
                  </div>
                  <div className="col-md-6">
                    <input id="name" className="form-control" type="text" placeholder="Name" />
                  </div>
                </label>
                <label htmlFor="surname" className="row">
                  <div className="col-md-6">
                    {/* <label htmlFor="surname">Surname</label> */}
                    Surname
                  </div>
                  <div className="col-md-6">
                    <input id="surname" className="form-control" type="text" placeholder="Surname" />
                  </div>
                </label>
                <label htmlFor="sex" className="row">
                  <div className="col-md-6">
                    {/* <label htmlFor="sex">Sex</label> */}
                    Sex
                  </div>
                  <div className="col-md-6">
                    <select id="sex" className="selectdiv">
                      <option selected> Choose.. </option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </label>
                <label htmlFor="age" className="row">
                  <div className="col-md-6">
                    {/* <label>Age</label> */}
                    Age
                  </div>
                  <div className="col-md-6">
                    <div className="sliderdiv">
                      <IntegerStep />
                    </div>
                  </div>
                </label>
                <label htmlFor="phone" className="row">
                  <div className="col-md-6">
                    {/* <label htmlFor="phone">Phone Number</label> */}
                    Phone Number
                  </div>
                  <div className="col-md-6">
                    <div className="profile-phone-input-div">
                      <PhoneInput
                        className="phoneInput"
                        international
                        defaultCountry="UA"
                        limitMaxLength
                        value={value}
                        onChange={(string) => setValue}
                      />
                    </div>
                  </div>
                </label>
                {/* <div className=" row">
                    <div className="col-md-6">
                        <label>Tags</label>
                    </div>
                    <div className="col-md-6">
                        <input className='form-control' type='text' placeholder='Search' />
                    </div>
                </div> */}
                <label htmlFor="about" className="row">
                  <div className="col-md-6">
                    {/* <label htmlFor="about">About me</label> */}
                    About me
                  </div>
                  <div className="col-md-6">
                    <TextArea id="about" className="textarea_prop" maxLength={300} showCount onChange={onChange}>Some text about you...</TextArea>
                  </div>
                </label>

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
  );
};

export default Profile;
