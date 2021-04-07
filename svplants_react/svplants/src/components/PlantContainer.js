import React from 'react'
import Plant from './Plant'
class PlantContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        plantCount: 5
      };
    }
  
    render() {
        return (
            <div className='plant-container'>
                {[...Array(this.state.plantCount)].map((x, i) =>
                    <Plant key={i} />
                )}
            </div>

        );
    }
}

export default PlantContainer;
