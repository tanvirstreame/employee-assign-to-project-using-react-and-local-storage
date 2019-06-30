import React, { Component,Fragment } from 'react';


const HeaderStyle = {
    fontSize:'45px',
    textDecoration: 'underline'
  };

export default class EmployeeRegister extends Component {
    constructor(props){
        super(props);
        this.state={
            formValue : {
                fullName : "" ,
                password : "" ,
                designation : "" ,
                mobileNo : "" ,
                email : "" ,
            }
        }
        this.saveData = this.saveData.bind(this);
    }


    saveData=(e)=>{
        e.preventDefault();
        const {fullName , password ,designation , mobileNo ,email} = this.state;
        const data = {
            fullName ,
            password ,
            designation ,
            mobileNo ,
            email ,
        }
        localStorage.setItem('data', JSON.stringify(data));
    }
    
    render() {
        const {fullName , password ,designation , mobileNo ,email} = this.state;
        return (
            <Fragment>
                <h1 className="text-center font-weight-bold" style={HeaderStyle}> Employee Register Form</h1>
                    <div className="container"> <br/>
                        <div className="col-lg-6 m-auto d-block">
                
                            <form  onSubmit={this.saveData.bind(this)} className="bg-light">
                
                                <div className="form-group">
                                    <label htmlFor="user" className="font-weight-bold"> Full Name: </label>
                                    <input type="text" name="fullName" className="form-control" id="user" value={fullName} autoComplete="off"  onChange={(e)=>{this.setState({fullName:e.target.value})}} />
                                    <span id="username" className="text-danger font-weight-bold"> </span>
                                </div>
                
                                <div className="form-group">
                                    <label className="font-weight-bold"> Password: </label>
                                    <input type="password" name="pass" className="form-control" id="pass" value={password} autoComplete="off"  onChange={(e)=>{this.setState({password:e.target.value})}}/>
                                    <span id="passwords" className="text-danger font-weight-bold"> </span>
                                </div>
                
                                <div className="form-group">
                                    <label className="font-weight-bold"> Designation: </label>
                                    <input type="text" name="conpass" className="form-control" id="conpass" value={designation} autoComplete="off"  onChange={(e)=>{this.setState({designation:e.target.value})}}/>
                                    <span id="confrmpass" className="text-danger font-weight-bold"> </span>
                                </div>
                
                                <div className="form-group">
                                    <label className="font-weight-bold"> Mobile Number: </label>
                                    <input type="text" name="mobile" className="form-control" id="mobileNumber" value={mobileNo} autoComplete="off"  onChange={(e)=>{this.setState({mobileNo:e.target.value})}}/>
                                    <span id="mobileno" className="text-danger font-weight-bold"> </span>
                                </div>
                
                                <div className="form-group">
                                    <label className="font-weight-bold"> Email: </label>
                                    <input type="text" name="email" className="form-control" id="emails" value={email} autoComplete="off"  onChange={(e)=>{this.setState({email:e.target.value})}}/>
                                    <span id="emailids" className="text-danger font-weight-bold"> </span>
                                </div>

                                <input type="submit" name="submit" value="submit" className="btn btn-success" />
                            </form><br/><br/>
                        </div>
                    </div>      
                    
            </Fragment> 
)
    }
}
