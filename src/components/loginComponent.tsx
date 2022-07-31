import React, {useRef, useState} from "react";
import "./loginComponent.css";

export function Login(){

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align=items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">

                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase"> Login </h2>
                                        <p className="text-white-50 mb-5">Please enter username and password!</p>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}