import React, { Component } from 'react';

export default class ReferenceCard extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <div className="owl-item text-center" style={{width: '799px', paddingLeft: '20px', paddingRight: '20px', textAlign: 'center'}}>
                <div className="item text-center">
                    <div className="reference-img text-center">
                        <img className="" src="data:image/jpeg;base64,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" alt="" style={{width: '60px'}}/>
                    </div>
                    <div className="reference-author" style={{color: this.props.colorSelected}}>
                        John Doe
                    </div>
                    <div className="reference-company">
                        Envato
                    </div>
                    <div className="reference-content">
                        <p>
                            Lorem ipsum dolor sit amet, ne usu eius animal, nam accusata
                            conceptam ea.
                            Qui ut prima aliquip reprehendunt, eos ex nibh libris
                            delectus, an has liber
                            melius constituto. Epicuri mediocrem vis ex. Cu nec choro
                            molestiae quaerendum,
                            ei natum lorem dissentias sed, ne his explicari sadipscing.
                        </p>
                    </div>
                </div>
            </div>
    );
    }
    }