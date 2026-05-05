import React from "react";

const Card = ({ title, text, image }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100 text-center">
                <img
                    src={image}
                    className="card-img-top"
                    alt="card"
                />

                <div className="card-body">
                    <h4 className="card-title fw-bold">{title}</h4>
                    <p className="card-text">{text}</p>
                </div>

                <div className="card-footer">
                    <a href="#" className="btn btn-primary">
                        Find Out More!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;