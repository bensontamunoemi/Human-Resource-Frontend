import React,{Component} from 'react';
import {useDropzone} from 'react-dropzone';
import Menu from '../menus';
import '../assets/css/dropify.css';


class AddLogo extends Component {


  render(){
    return(
      <>
      <Menu/>
    <div id="main-content">
        <div className="container-fluid">
            <div className="block-header">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <h2><a href="javascript:void(0);" className="btn btn-xs btn-link btn-toggle-fullwidth"><i className="fa fa-arrow-left"></i></a> Dashboard</h2>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html"><i className="icon-home"></i></a></li>
                            <li className="breadcrumb-item active">Add Logo</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="row clearfix">

                <div className="col-lg-12 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Upload your company logo </h2>
                        </div>
                        <div className="body">
                          <div className="dropify-wrapper">
                            <div className="dropify-message">
                              <span className="file-icon"></span>
                              <p>Click to upload file</p>
                              <input className="" style={{display: 'block'}} type="file" name="" value="" />
                            </div>
                          </div>
                          <hr/>
                          <button className="btn btn-success"><i className="fa fa-file"></i> Save</button>
                            <button className="btn btn-primary pull-right"> Skip</button>
                        </div>

                    </div>

                </div>

                </div>

            </div>
            </div>
            </>
    )
  }
}

export default AddLogo;
