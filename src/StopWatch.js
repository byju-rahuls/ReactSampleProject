import React from "react";
import './style.css'
import ResetButton from './ResetButton'
class StopWatch extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            second:0,
            minute:0,
            hour:0,
            day:0
        }
        this.curentTime=this.curentTime.bind(this);
        this.resetState1=this.resetState1.bind(this);
    }
    componentDidMount()
    {
        this.stopWatchID=setInterval(()=>{
            
                let second=this.state.second,minute=this.state.minute,hour=this.state.hour,day=this.state.day;
                 
                if(second>=59)
                {
                     second=0;
                    minute++;
                }
                else
                 second++;
                if(minute>59)
                {
                    second=0;
                     minute=0;
                     hour++;
                }
                if( hour>59)
                {
                    second=0;
                    minute=0;
                    hour=0;
                     day++;
                }
                  this.setState( {
                     second:second,
                    minute:minute,
                     hour:hour,
                     day:day
                    // console.log(state.second, state.minute, state.hour)
                  })
            }
            
        
        ,1000);
    }
    componentWillUnmount()
    {
        clearInterval(this.stopWatchID);
    }
    curentTime()
    {
        let second=this.state.second.toString();
        let minute=this.state.minute.toString();
        let hour=this.state.hour.toString();
        let day=this.state.day.toString();
        let t="";
         
        t=((day.length<2)?('0'+day):day)+' : ';
         
        t+=((hour.length<2)?('0'+hour):hour)+' : ';

        t+=((minute.length<2)?('0'+minute):minute)+' : ';

        t+=((second.length<2)?('0'+second):second);
         
       
        return t;
         
    }
    resetState1()
    {
        this.setState({
            second:0,
            minute:0,
            hour:0,
            day:0
        })
    }
    render()
    {
        return (
            <div className="boundary"> 
            <div className="bc">
                <a href="https://www.timeanddate.com/stopwatch/" style={{textDecoration: "lightblue"}}>
                    <div id="stopWatch">{this.curentTime()}</div>
                </a> 
                <div style={{margin:"40px"}}>
                <ResetButton onClick={this.resetState1}/>
                </div>
            </div>
            </div>
        )
    }
}
export default StopWatch;