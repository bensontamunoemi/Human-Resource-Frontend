import React,{Component} from 'react';
import {useDropzone} from 'react-dropzone';
import Menu from '../menus';
import '../assets/css/dropify.css';


class Department extends Component {


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
                            <li className="breadcrumb-item active">Department</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="row clearfix">

                <div className="col-lg-12 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Departments </h2>
                            <ul class="header-dropdown">
                                <li><a href="javascript:void(0);" class="btn btn-info" data-toggle="modal" data-target="#addDepartments">Add New</a></li>
                            </ul>
                        </div>
                        <div className="body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover js-basic-example dataTable table-custom">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Department Name</th>
                                        <th>Department Head</th>
                                        <th>Total Employee</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td><h6 class="mb-0">Web Development</h6></td>
                                        <td>John Smith</td>
                                        <td>305</td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                            <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td><h6 class="mb-0">Marketing</h6></td>
                                        <td>Maryam Amiri</td>
                                        <td>26</td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                            <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td><h6 class="mb-0">App Development</h6></td>
                                        <td>Frank Camly</td>
                                        <td>38</td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                            <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>04</td>
                                        <td><h6 class="mb-0">Support</h6></td>
                                        <td>Gary Camara</td>
                                        <td>45</td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                            <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>05</td>
                                        <td><h6 class="mb-0">Accounts</h6></td>
                                        <td>Fidel Tonn</td>
                                        <td>8</td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                            <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

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

export default Department;
