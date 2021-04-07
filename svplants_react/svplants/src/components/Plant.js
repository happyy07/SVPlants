import React from 'react'
import { v4 as uuidv4 } from 'uuid';
class Plant extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          uuid:uuidv4(),
        canWater: true,
        lastWateredAt:'',
        isBeingWatered:false,

        rewateringInterval:30,
        rewateringDuration:10,

        timeElapsed:40,

        reminderTIme:21600

      };
    }
  
    render() {
        return (
            <div className='plant'>
                <button>
                    <img src="plant.jpg" alt="my image"  className='plant-image' onClick={this.canWaterPlant}/>
                   
                </button>
                <p>plant #{this.state.uuid}</p>
                {
                    this.state.isBeingWatered
                    ?
                    <p>Please Wait Plant is being Watered</p>
                    :
                    <></>             
                 }
                {
                   (new Date()-this.state.lastWateredAt)/1000<this.state.rewateringInterval
                    ?
                    <p>Please wait {this.state.timeElapsed}s before watering again</p>
                    :
                    <></>             
                 }
                <p>Last Watered at : {this.state.lastWateredAt.toString()}</p>
            </div>
        );
    }
    waterPlant=()=>{
        this.setState({
            lastWateredAt:new Date()
        })
        this.setState({
            timeElapsed:this.state.rewateringInterval
        })
        this.setState({isBeingWatered:true})
        this.state.isBeingWatered=true
        setTimeout(()=>{
            this.setState({isBeingWatered:false})
            this.startReminder()
        },this.state.rewateringDuration*1000)
        setInterval(() => {
            if(this.state.canWater){
                this.setState({
                    timeElapsed:this.state.timeElapsed-1
                })
            }
        }, 1000);
    }
    canWaterPlant=()=>{
        if((new Date()-this.state.lastWateredAt)/1000>=this.state.rewateringInterval && !this.state.isBeingWatered){
            this.waterPlant()
        }else{
            return false
        }
    }

    componentDidMount(){
        setTimeout(() => {
            alert('hello plant '+this.state.uuid+' here please water me')
        }, this.state.reminderTIme*1000);
    }
    startReminder=()=>{
        setTimeout(() => {
           alert('hello plant '+this.state.uuid+' here please water me')
        }, this.state.reminderTIme*1000);
    }
}

export default Plant;
