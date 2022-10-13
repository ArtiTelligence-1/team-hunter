import React, { useEffect, useState } from 'react'
import {  } from '../../components/ImgLoader';

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
                                        <label>User Id</label>
                                    </div>
                                    <div className="col-md-6">
                                        <input className='form-control' type='text' value='123456' disabled />
                                    </div>
                                </div>
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
                                        <input className='form-control' type='text' placeholder='Search' />
                                        
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Age</label>
                                    </div>
                                    <div className="col-md-6">
                                        <input className='form-control' type='text' placeholder='Search' />
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
                                        <input className='form-control' type='text' placeholder='Search' />
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
