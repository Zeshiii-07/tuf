'use client';
import Head from "next/head";
import React from "react";

export default function Home() {
  const [test, setTest] = React.useState()
  React.useEffect(()=>{})
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>TUF LMS - Grade Book</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link href="/jquery-jvectormap-2.0.2.css" rel="stylesheet" />
        <link href="/simplebar.css" rel="stylesheet" />
        <link href="/bootstrap.min.css" rel="stylesheet" />
        <link href="/animate.css" rel="stylesheet" type="text/css" />
        <link href="/icons.css" rel="stylesheet" type="text/css" />
        <link href="/sidebar-menu.css" rel="stylesheet" />
        <link href="/app-style.css" rel="stylesheet" />
        <link href="/kinship.css" rel="stylesheet" />
        <link href="/skins.css" rel="stylesheet" />
        <link href="/vertical-style.css" rel="stylesheet" />
        <link href="/horizontal-menu.css" rel="stylesheet" />
        <link
          href="/dataTables.bootstrap4.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="/lobibox.min.css" />
      </Head>

      <body>
        <div
          id="pageloader-overlay"
          className="visible incoming"
          style={{ display: "none" }}
        >
          <div className="loader-wrapper-outer">
            <div className="loader-wrapper-inner">
              <div className="loader"></div>
            </div>
          </div>
        </div>

        <div id="wrapper">
          <div
            id="sidebar-wrapper"
            data-simplebar=""
            data-simplebar-auto-hide="true"
            className="active"
          >
            <div className="brand-logo">
              <a href="#">
                <img
                  src="/Logo-black.png"
                  className="logo-icon w-75"
                  alt="logo icon"
                />
              </a>
            </div>

            <ul className="sidebar-menu in">
              <li className="sidebar-header">ACADEMICS</li>

              <li>
                <a href="#" className="waves-effect">
                  <span>Dashboard</span>
                </a>
              </li>

              <li>
                <a href="#" className="waves-effect">
                  <span>Courses</span>
                </a>
              </li>
              <li>
                <a href="#" className="waves-effect">
                  <span>Lecture Schedule</span>
                </a>
              </li>
              <li className="active">
                <a href="#" className="waves-effect active">
                  <span>GradeBook</span>
                </a>
              </li>
              <li className="sidebar-header">FINANCIALS</li>
              <li>
                <a href="#" className="waves-effect">
                  <span>Account Book</span>
                </a>
              </li>

              <li className="sidebar-header">ONLINE CLASSROOM</li>
              <li>
                <a href="#" className="waves-effect">
                  <span>Google Classroom</span>
                </a>
              </li>
              <li className="sidebar-header">Covid</li>
              <li>
                <a href="#" className="waves-effect">
                  <span>Vaccination Certificate</span>
                </a>
              </li>
              <li className="sidebar-header">PERSONAL</li>

              <li>
                <a href="#" className="waves-effect">
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a href="#" className="waves-effect">
                  <span>Diary</span>
                </a>
              </li>
              <li className="sidebar-header">GENERAL</li>
              <li style={{ marginBottom: "100px" }}>
                <a href="#" className="waves-effect">
                  <span>Notice Board</span>
                </a>
              </li>
            </ul>
          </div>

          <header className="topbar-nav">
            <nav id="header-setting" className="navbar navbar-expand fixed-top">
              <ul className="navbar-nav mr-auto align-items-center">
                <li className="nav-item">
                  <a className="nav-link toggle-menu" href="javascript:void();">
                    <i className="icon-menu menu-icon"></i>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav align-items-center right-nav-link">
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-toggle="dropdown"
                    href="#"
                  >
                    <span className="user-profile">
                      <img
                        src="/219722.jpg"
                        className="img-circle"
                        alt="user avatar"
                      />
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li className="dropdown-item user-details">
                      <a href="javaScript:void();">
                        <div className="media">
                          <div className="avatar">
                            <img
                              className="align-self-start mr-3"
                              src="/219722.jpg"
                              alt="user avatar"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mt-2 user-title">
                              AHMAR IMRAN
                            </h6>
                            <p className="user-subtitle">
                              2021-bs-se-081@tuf.edu.pk
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li className="dropdown-item">
                      <a href="#">
                        <i className="fa fa-window-restore"></i> Reset Password
                      </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li className="dropdown-item">
                      <a href="#">
                        <i className="icon-power mr-2"></i> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </header>

          <div className="clearfix"></div>

          <div className="content-wrapper content-breadcrumb">
            <div className="container-fluid">
              <div className="row pt-5">
                <div className="col-sm-9">
                  <h4 className="page-title">Grade Book</h4>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="dashboard">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item">Grade Book</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>


          <div className="content-wrapper content-teachermenu">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Result Per Semester
                        <small style={{ fontSize: '13px' }}
                        >(Error and omission are accepted)</small
                        >
                      </h5>
                      <h5 className="card-title float-left">CGPA : 3.25</h5>
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Semester Name</th>
                              <th scope="col">GPA</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>BSSE-FALL-21</td>
                              <td>3.275</td>
                            </tr>
                            <tr>
                              <td>BSSE-SPRING-22</td>
                              <td>3.350</td>
                            </tr>
                            <tr>
                              <td>
                                BSSE-FALL-22
                              </td>
                              <td>3.375</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Grading Scheme</h5>
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Grade</th>
                              <th scope="col">Grade Points</th>
                              <th scope="col">Equivalent percentage</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>A</td>
                              <td>4-4</td>
                              <td>85-100</td>
                            </tr>
                            <tr>
                              <td>A-</td>
                              <td>3.7-3.7</td>
                              <td>80-84</td>
                            </tr>
                            <tr>
                              <td>B</td>
                              <td>3-3</td>
                              <td>70-74</td>
                            </tr>
                            <tr>
                              <td>B+</td>
                              <td>3.3-3.3</td>
                              <td>75-79</td>
                            </tr>
                            <tr>
                              <td>B-</td>
                              <td>2.7-2.7</td>
                              <td>65-69</td>
                            </tr>
                            <tr>
                              <td>C</td>
                              <td>2-2</td>
                              <td>58-59</td>
                            </tr>
                            <tr>
                              <td>C+</td>
                              <td>2.3-2.3</td>
                              <td>60-64</td>
                            </tr>
                            <tr>
                              <td>C-</td>
                              <td>1.7-1.7</td>
                              <td>55-57</td>
                            </tr>
                            <tr>
                              <td>D</td>
                              <td>1-1</td>
                              <td>50-54</td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>0-0</td>
                              <td>0-49</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h3>
                    Result per Subject
                    <small style={{ fontSize: '13px' }}
                    >(Error and omission are accepted)</small
                    >
                  </h3>
                  <div id="accordion1">
                    <div className="card mb-2">
                      <div className="card-header">
                        <div className="card-header">
                          <button
                            className="btn btn-link shadow-none"
                            data-toggle="collapse"
                            data-target="#collapse-2"
                            aria-expanded="true"
                            aria-controls="collapse-1"
                          >
                            SEMESTER 2
                          </button>
                        </div>

                        <div
                          id="collapse-2"
                          className="collapse show"
                          data-parent="#accordion1"
                        >
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th rowspan="3">Semester</th>
                                    <th rowspan="3">Course Code</th>
                                    <th rowspan="3">Course Title</th>
                                    <th colspan="6" className="text-center">
                                      Obtained Marks
                                    </th>
                                    <th rowspan="3" className="text-center">
                                      Total <br />(100)
                                    </th>
                                    <th rowspan="3" className="text-center">
                                      Practical <br />(50)
                                    </th>
                                    <th rowspan="3">
                                      Marks <br />
                                      Percentage
                                    </th>
                                    <th rowspan="3">Credit Hours</th>
                                    <th rowspan="3">Grade Point</th>
                                    <th rowspan="3">Grade</th>
                                  </tr>
                                  <tr>
                                    <th>Mid <br />(25)</th>
                                    <th>Quiz <br />(10)</th>
                                    <th>Sessional <br />(10)</th>
                                    <th>Assignment <br />(15)</th>
                                    <th>Total <br />(60)</th>
                                    <th>Final <br />(40)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>BSSE-SPRING-22</td>
                                    <td>PHY-102</td>
                                    <td>APPLIED PHYSICS</td>

                                    <td>20</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>44</td>
                                    <td>21</td>
                                    <td>65</td>
                                    <td></td>
                                    <td>65</td>
                                    <td>3(3-0)</td>
                                    <td>2.7</td>
                                    <td>B-</td>
                                  </tr>
                                  <tr>
                                    <td>BSSE-SPRING-22</td>
                                    <td>ENG-102</td>
                                    <td>ENGLISH-II (COMMUNICATION SKILLS)</td>

                                    <td>16</td>
                                    <td>9</td>
                                    <td>9</td>
                                    <td>14</td>
                                    <td>53</td>
                                    <td>34</td>
                                    <td>82</td>
                                    <td></td>
                                    <td>82</td>
                                    <td>3(3-0)</td>
                                    <td>3.7</td>
                                    <td>A-</td>
                                  </tr>
                                  <tr>
                                    <td>BSSE-SPRING-22</td>
                                    <td>CS-113</td>
                                    <td>SOFTWARE ENGINEERING</td>

                                    <td>20</td>
                                    <td>8</td>
                                    <td>8</td>
                                    <td>14</td>
                                    <td>50</td>
                                    <td>32</td>
                                    <td>82</td>
                                    <td></td>
                                    <td>82</td>
                                    <td>3(3-0)</td>
                                    <td>3.7</td>
                                    <td>A-</td>
                                  </tr>
                                  <tr>
                                    <td>BSSE-SPRING-22</td>
                                    <td>ISL-104</td>
                                    <td>TEACHING OF HOLY QURAN WITH TRANSLATION- II</td>

                                    <td>20</td>
                                    <td>8</td>
                                    <td>8</td>
                                    <td>13</td>
                                    <td>49</td>
                                    <td>35</td>
                                    <td>84</td>
                                    <td></td>
                                    <td>84</td>
                                    <td>1(1-0)</td>
                                    <td>3.7</td>
                                    <td>A-</td>
                                  </tr>
                                  <tr>
                                    <td>BSSE-SPRING-22</td>
                                    <td>CS-112</td>
                                    <td>OBJECT ORIENTED PROGRAMMING</td>

                                    <td>22</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>13</td>
                                    <td>50</td>
                                    <td>25</td>
                                    <td>75</td>
                                    <td>37</td>
                                    <td>74</td>
                                    <td>4(3-1)</td>
                                    <td>3</td>
                                    <td>B</td>
                                  </tr>
                                  <tr>
                                    <td>BSSE-SPRING-22</td>
                                    <td>PS-101</td>
                                    <td>PAKISTAN STUDIES</td>

                                    <td>19</td>
                                    <td>9</td>
                                    <td>7</td>
                                    <td>13</td>
                                    <td>48</td>
                                    <td>38</td>
                                    <td>86</td>
                                    <td></td>
                                    <td>86</td>
                                    <td>2(2-0)</td>
                                    <td>4</td>
                                    <td>A</td>
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
              </div>
            </div>
            <div id="accordion1">
              <div className="card mb-2">
                <div className="card-header">
                  <div className="card-header">
                    <button
                      className="btn btn-link shadow-none"
                      data-toggle="collapse"
                      data-target="#collapse-2"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      SEMESTER 3
                    </button>
                  </div>

                  <div
                    id="collapse-2"
                    className="collapse show"
                    data-parent="#accordion1"
                  >
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th rowspan="3">Semester</th>
                              <th rowspan="3">Course Code</th>
                              <th rowspan="3">Course Title</th>
                              <th colspan="6" className="text-center">
                                Obtained Marks
                              </th>
                              <th rowspan="3" className="text-center">
                                Total <br />(100)
                              </th>
                              <th rowspan="3" className="text-center">
                                Practical <br />(50)
                              </th>
                              <th rowspan="3">
                                Marks <br />
                                Percentage
                              </th>
                              <th rowspan="3">Credit Hours</th>
                              <th rowspan="3">Grade Point</th>
                              <th rowspan="3">Grade</th>
                            </tr>
                            <tr>
                              <th>Mid <br />(25)</th>
                              <th>Quiz <br />(10)</th>
                              <th>Sessional <br />(10)</th>
                              <th>Assignment <br />(15)</th>
                              <th>Total <br />(60)</th>
                              <th>Final <br />(40)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>BSSE-FALL-22</td>
                              <td>CS-211</td>
                              <td>DISCRETE STRUCTURE</td>

                              <td>20</td>
                              <td>7</td>
                              <td>8</td>
                              <td>9</td>
                              <td>44</td>
                              <td>21</td>
                              <td>65</td>
                              <td></td>
                              <td>65</td>
                              <td>3(3-0)</td>
                              <td>2.7</td>
                              <td>B-</td>
                            </tr>
                            <tr>
                              <td>BSSE-FALL-22</td>
                              <td>ENG-201</td>
                              <td>ENGLISH-III (TECHNICAL WRITING AND PRESENTATION SKILLS)</td>

                              <td>16</td>
                              <td>9</td>
                              <td>9</td>
                              <td>14</td>
                              <td>53</td>
                              <td>34</td>
                              <td>82</td>
                              <td></td>
                              <td>87</td>
                              <td>3(3-0)</td>
                              <td>4</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>BSSE-FALL-22</td>
                              <td>MGT-305</td>
                              <td>FINANCIAL ACCOUNTING</td>

                              <td>20</td>
                              <td>8</td>
                              <td>8</td>
                              <td>14</td>
                              <td>50</td>
                              <td>32</td>
                              <td>82</td>
                              <td></td>
                              <td>82</td>
                              <td>3(3-0)</td>
                              <td>3.7</td>
                              <td>A-</td>
                            </tr>
                            <tr>
                              <td>BSSE-FALL-22</td>
                              <td>ISL-201</td>
                              <td>TEACHING OF HOLY QURAN WITH TRANSLATION- III</td>

                              <td>20</td>
                              <td>8</td>
                              <td>8</td>
                              <td>13</td>
                              <td>49</td>
                              <td>35</td>
                              <td>84</td>
                              <td></td>
                              <td>84</td>
                              <td>1(1-0)</td>
                              <td>3.7</td>
                              <td>A-</td>
                            </tr>
                            <tr>
                              <td>BSSE-FALL-22</td>
                              <td>CS-212</td>
                              <td>DATA STRUCTURE AND ALGORITHMS</td>

                              <td>22</td>
                              <td>7</td>
                              <td>8</td>
                              <td>13</td>
                              <td>50</td>
                              <td>25</td>
                              <td>75</td>
                              <td>37</td>
                              <td>74</td>
                              <td>4(3-1)</td>
                              <td>3</td>
                              <td>B</td>
                            </tr>
                            <tr>
                              <td>BSSE-FALL-22</td>
                              <td>PSY-201</td>
                              <td>PSYCHOLOGY</td>

                              <td>19</td>
                              <td>9</td>
                              <td>7</td>
                              <td>13</td>
                              <td>48</td>
                              <td>38</td>
                              <td>86</td>
                              <td></td>
                              <td>86</td>
                              <td>3(3-0)</td>
                              <td>4</td>
                              <td>A</td>
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
        </div>
        <a href="javaScript:void();" className="back-to-top" style={{ display: 'none' }}
        ><i className="fa fa-angle-double-up"></i>
        </a>
        <footer className="footer">
          <div className="container">
            <div className="text-center">Copyright TUF LMS © 2020</div>
          </div>
        </footer>
        <div className="right-sidebar">
          <div className="switcher-icon">
            <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
          </div>
          <div className="right-sidebar-content">
            <p className="mb-0">Header Colors</p>
            <hr />

            <div className="mb-3">
              <button
                type="button"
                id="default-header"
                className="btn btn-outline-primary"
              >
                Default Header
              </button>
            </div>

            <ul className="switcher">
              <li id="header1"></li>
              <li id="header2"></li>
              <li id="header3"></li>
              <li id="header4"></li>
              <li id="header5"></li>
              <li id="header6"></li>
            </ul>

            <p className="mb-0">Sidebar Colors</p>
            <hr />

            <div className="mb-3">
              <button
                type="button"
                id="default-sidebar"
                className="btn btn-outline-primary"
              >
                Default Header
              </button>
            </div>

            <ul className="switcher">
              <li id="theme1"></li>
              <li id="theme2"></li>
              <li id="theme3"></li>
              <li id="theme4"></li>
              <li id="theme5"></li>
              <li id="theme6"></li>
            </ul>
          </div>
        </div>
      </body>
    </>
  );
}
