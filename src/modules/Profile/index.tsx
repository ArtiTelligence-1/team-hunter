import React, { useEffect, useState } from 'react';
import { Modal, Upload, DatePicker, UploadFile, Col, InputNumber, Row, Slider, Input } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import { PlusOutlined } from '@ant-design/icons';
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

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const Profile = () => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };

  const [value, setValue] = useState<string>('');

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([

  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = (file: UploadFile) => {
    const fileUpload = file;
    if (!fileUpload.url && !fileUpload.preview) {
      getBase64(fileUpload.originFileObj as RcFile).then((e) => {
        fileUpload.preview = e;
        setPreviewImage(fileUpload.url ?? fileUpload.preview);
        setPreviewOpen(true);
        setPreviewTitle(fileUpload.name || fileUpload.url!.substring(fileUpload.url!.lastIndexOf('/') + 1));
      }).catch(() => {});
    }
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const profileFields = [
    {
      label: 'Name',
      child: <input id="name" className="form-control" type="text" placeholder="Name" />,
    },
    {
      label: 'Surname',
      child: <input id="surname" className="form-control" type="text" placeholder="Surname" />,
    },
    {
      label: 'Sex',
      child: (
        <select id="sex" className="selectdiv">
          <option selected> Choose.. </option>
          <option>Male</option>
          <option>Female</option>
        </select>
      ),
    },
    {
      label: 'Date of Birth',
      child: (
        <div>
          <DatePicker className="datePickerStyle" renderExtraFooter={() => 'extra footer'} format="DD-MM-YYYY" />
        </div>
      ),
    },
    {
      label: 'Bio',
      child: <TextArea id="about" className="profile_textarea_prop" maxLength={70} showCount onChange={onChange}>Some text about you...</TextArea>,
      // (<><Input type='text' placeholder='Title'/>
      // <SomeFunc />
      // <Soasdjfo/></>),
    },
  ];

  return (
    <>
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Profile</h4>
                <div className="breadcrumb__links">
                  <a href="./index.html">Home</a>
                  <span>Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal
                  open={previewOpen}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
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
                  {profileFields.map((profile) => (
                    <label key={profile.label} htmlFor="name" className="row">
                      <div className="col-md-6">
                        {profile.label}
                      </div>
                      <div className="col-md-6">
                        {profile.child}
                      </div>
                    </label>
                  ))}
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
};

export default Profile;
