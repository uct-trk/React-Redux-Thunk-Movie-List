
import React, {Component} from 'react'
import { Button } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <footer className="footer py-4">
                <div className="container d-flex space-between-center">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-lg-left">
                            NO Copyright &copy; Ugurcan TURK 2021
                    </div>
                        <div className="col-lg-4 my-3 my-lg-0">
                            <Button className="btn btn-dark btn-social mx-2"><i className="fab fa-twitter"></i></Button>
                            <Button className="btn btn-dark btn-social mx-2"><i className="fab fa-facebook-f"></i></Button>
                            <Button className="btn btn-dark btn-social mx-2"><i className="fab fa-linkedin-in"></i></Button>
                        </div>
                        <div className="col-lg-4 text-lg-right">
                            <span className="mr-3">Privacy Policy</span>
                            <span>Terms of Use</span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
