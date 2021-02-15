import React, { useContext } from 'react'
import CardFeed from '../Components/CardFeed'
import '../App.css';
import Player from '../Components/Player';
import { Context } from '../store/appContext';

function Feed() {
    const {actions} = useContext(Context);

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-5 mt-5 mr-5">
                        <button className="btn btn-primary" onClick={actions.getUserTracks}>OBTENER PERFIL</button>
                        <Player />
                    </div>

                    <div className="col-md">
                        <div className="card-header rounded-pill ">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="fotoperfilfeed bg-success"></div>
                                </div>
                                <div className="col-md col-sm">
                                    <input className="text-white btn btn-rounded btn-lg btn-block bg-success rounded-pill" type="button" value="¿Que estas pensando?" data-toggle="modal" data-target="#exampleModal"></input>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2 mt-2">
                            <div className="col-md col-sm">
                                <CardFeed />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md col-sm">
                                <CardFeed />
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-success">
                            <h3 className="modal-title-center text-center text-white col-md-10 ml-4" id="exampleModalLabel">Crear publicación</h3>
                            <button type="button" className="close text-white col-md-2" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-3 col-sm">
                                    <div className="fotoperfilfeed bg-success rounded-circle" src="#"></div>
                                </div>
                                <div className="col-md-9 col-sm mt-2">
                                    <h5>Marisleidis Perdomo</h5>
                                </div>
                            </div>
                            <textarea className="w-100 border-0 mt-4" type="text" placeholder="¿Que estas pensando, Marisleidis?"></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Feed
