import react, { useState, useEffect } from "react"
import { ResponsiveEmbed } from "react-bootstrap"
import axios from 'axios'
import { getList } from './getList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

function Maincontent({
    data,
    ...props

}) {

    const [filterData, setFilterData] = useState(data)
    const [searchTerm, setSearchTerm] = useState("");
    const [filtered, setFiltered] = useState('')

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    function showA() {
        setfiltered(A)
    }

    function showB() {
        setfiltered(B)
    }







    return (
        <div className="bg-light container-fluid " style={{ paddingLeft: "10%", paddingRight: "10%", backgroundColor: 'white', paddingTop: "15px", paddingBottom: "15px" }}>
            <div className=" container-fluid" style={{ paddingTop: "30px", paddingBottom: "15px", paddingLeft: "10%", paddingRight: "10%" }}>
                <h2 style={{ fontWeight: "bold" }}>9IJAKIDS GAME LIST</h2>
                <div className="d-flex mb-3 sticky-top rounded shadow-sm " style={{ justifyContent: "space-between", backgroundColor: "white", padding: "12px", alignItems: "center" }}>
                    <div className="form-inline d-flex" style={{ alignSelf: "center", }}>
                        <input className="form-control mr-sm-2" type="search" onChange={handleChange} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>

                    </div>
                    <div> <span><FontAwesomeIcon icon={faFilter} style={{ width: 20, height: 20, color: "green" }} /> Sort   </span>
                        <button>A</button>
                        <button>B</button></div>
                </div>



                <div className="row">
                    <div className="col-lg-3">
                        <div className="card rounded shadow-sm border-0">
                            <div className="card-body p-4">
                                <img src="/nike.png" alt="" className="img-fluid d-block mx-auto mb-3" />
                                <h5> <a href="#" className="text-dark">Awesome product</a></h5>
                                <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <ul class="list-inline small">
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                    <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                    {data.filter(item => item.Topic.toLowerCase().includes(searchTerm)).map(item =>
                        <div className="col-lg-3 mb-3">
                            <div className="card rounded shadow-sm border-0">
                                <div className="card-body p-4">
                                    <img src={item.GameImage} alt="" className="img-fluid d-block mx-auto mb-3" />
                                    <h5> <a href="#" className="text-dark">{item.GameTitle}</a></h5>
                                    <p class="small text-muted font-italic">{item.GameDescription}</p>
                                    <ul class="list-inline small">
                                        <li class="list-item "><span style={{ fontWeight: "bold" }}>Topic</span> : {item.Topic}</li>
                                        <li class="list-item"><span style={{ fontWeight: "bold" }}>Group</span> : {item.Group}</li>
                                        <li class="list-item"><span style={{ fontWeight: "bold" }}>Level</span> : {item.Level}</li>
                                        <li class="list-item"><span style={{ fontWeight: "bold" }}>Subject</span> : {item.Subject}</li>

                                    </ul>
                                </div>
                            </div>


                        </div>)}

                </div>
            </div>

        </div>
    )
}

export default Maincontent
