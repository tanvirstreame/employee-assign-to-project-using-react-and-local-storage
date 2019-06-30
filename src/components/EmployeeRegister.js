import React, { Component,Fragment } from 'react';


const HeaderStyle = {
    fontSize:'45px',
    textDecoration: 'underline'
  };

export default class EmployeeRegister extends Component {
    render() {
        return (
            <Fragment>
                <h1 class="text-center font-weight-bold" style={HeaderStyle}> Employee Register Form</h1>
                    <div class="container"> <br/>
                        <div class="col-lg-6 m-auto d-block">
                
                            <form action="#" onsubmit="return validation()" class="bg-light">
                
                                <div class="form-group">
                                    <label for="user" class="font-weight-bold"> Full Name: </label>
                                    <input type="text" name="user" class="form-control" id="user" autocomplete="off" />
                                    <span id="username" class="text-danger font-weight-bold"> </span>
                                </div>
                
                                <div class="form-group">
                                    <label class="font-weight-bold"> Password: </label>
                                    <input type="password" name="pass" class="form-control" id="pass" autocomplete="off" />
                                    <span id="passwords" class="text-danger font-weight-bold"> </span>
                                </div>
                
                                <div class="form-group">
                                    <label class="font-weight-bold"> Designation: </label>
                                    <input type="text" name="conpass" class="form-control" id="conpass" autocomplete="off" />
                                    <span id="confrmpass" class="text-danger font-weight-bold"> </span>
                                </div>
                
                                <div class="form-group">
                                    <label class="font-weight-bold"> Mobile Number: </label>
                                    <input type="text" name="mobile" class="form-control" id="mobileNumber" autocomplete="off" />
                                    <span id="mobileno" class="text-danger font-weight-bold"> </span>
                                </div>
                
                                <div class="form-group">
                                    <label class="font-weight-bold"> Email: </label>
                                    <input type="text" name="email" class="form-control" id="emails" autocomplete="off" />
                                    <span id="emailids" class="text-danger font-weight-bold"> </span>
                                </div>

                                <input type="submit" name="submit" value="submit" class="btn btn-success" autocomplete="off" />
                            </form><br/><br/>
                        </div>
                    </div>      
                    
            </Fragment> 
)
    }
}
