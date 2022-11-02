import React, { useEffect, useState } from 'react'
import {  } from '../../components/ImgLoader';
import type { UploadProps } from 'antd';
import { Select, Col, InputNumber, Row, Slider, Input, Button, Upload, DatePicker, TimePicker  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'react-phone-number-input/style.css'

const { Option } = Select;
const { TextArea } = Input;
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
      <Col span={17}>
        <Slider
          min={1}
          max={30}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={7}>
        <InputNumber
          min={1}
          max={30}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

const props: UploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    beforeUpload(file) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = document.createElement('img');
          img.src = reader.result as string;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d')!;
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = 'red';
            ctx.textBaseline = 'middle';
            ctx.font = '33px Arial';
            ctx.fillText('Ant Design', 20, 20);
            canvas.toBlob(result => resolve(result as any));
          };
        };
      });
    },
  };

const Profile = () => {
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
      };
    
    const [value, setValue] = useState<string>("")
    
  return (
    <>

    <section className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__text">
                        <h4>Add Event</h4>
                        <div className="breadcrumb__links">
                            <a href="./index.html">Home</a>
                            <span>Add Event</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}
    <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-2"> </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Title</label>
                                </div>
                                <div className="col-md-6">
                                    <input className='form-control' type='text' placeholder='Title'/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>King of Sport</label>
                                </div>
                                <div className="col-md-6">
                                        <select className="selectdiv">
                                            <option selected> Choose.. </option>
                                            <option>Football</option>
                                            <option>Basketball</option>
                                        </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Num of People</label>
                                </div>
                                <div className="col-md-6">
                                    <div className="sliderdiv">
                                        <IntegerStep />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Age Interval</label>
                                </div>
                                <div className="col-md-6">
                                    <div className="sliderdiv">
                                        <Slider range defaultValue={[20, 50]}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Time</label>
                                </div>
                                <div className="col-md-6">
                                    <div className="timeDiv">
                                        <DatePicker renderExtraFooter={() => 'extra footer'} />
                                        <TimePicker renderExtraFooter={() => 'extra footer'} style={{marginLeft: "15px"}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Location</label>
                                </div>
                                <div className="col-md-6">
                                    <input className='form-control' type='text' placeholder='Title'/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Description</label>
                                </div>
                                <div className="col-md-6" >
                                    <TextArea className="textarea_prop" maxLength={300} showCount onChange={onChange}>Some text about event...</TextArea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Upload Image</label>
                                </div>
                                <div className="col-md-6">
                                    <div className="imageLoader">
                                        <Upload {...props}>
                                            <Button icon={<UploadOutlined />}>Upload</Button>
                                        </Upload>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="profile-edit-btn">Add Event</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    </>
  );
}

export default Profile;
