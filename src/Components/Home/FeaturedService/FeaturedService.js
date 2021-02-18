import React from 'react';
import featured from "../../../images/featured.png"

const FeaturedService = () => {
    return (
        <section className="features pb-0 pb-md-5 my-5">
            <div className="container  mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h2>Exceptional Dental Care, On your terms</h2>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque veritatis blanditiis provident dolorum quasi voluptate, rem ab quisquam illo voluptas, unde sit magni voluptatum consectetur in aliquid. Fugiat, sunt laboriosam? Expedita sunt, totam ex rerum ullam dolorum nulla assumenda, a fugiat nam et quisquam deleniti at ad sapiente nostrum maiores!
                        </p>
                        <button className="btn btnPrimary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;