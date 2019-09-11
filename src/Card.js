import React from "react"

export default class Card extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            images: props.images,
        };
    }

    render(){
        const { images } = this.state

        
        return (
            <div>
                {
                    images.map(image => (
                        <div class="card-wrapper flip-right">
                            <div class="card">
                                <div class="front">
                                    <img src={image.url} class="cardImage"/>
                                    <div class="imageName">
                                        <h2 >{image.name}</h2>
                                    </div>
                                </div>
                                <div class="back">{image.description}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}