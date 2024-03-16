import React, { Component } from 'react';
import "../style/style.css";

import Img1 from '../pic/abuot.jpg';

class about extends Component {
constructor(){
    super()
   this.state={
    flag:false,
   
   }
}; 
changeflage=()=>{
 this.setState({
    flag:!this.state.flag
 })
}

    render() {
        
        return (
            <div className='flexbox'>
                <div className='box1'>
                    {
                        this.state.flag? (<div>
                        <img src={Img1} alt="Img1" />
                        </div>):(<h2></h2>)
                    }

                  
                </div>
                <div className='comp1'>
                    <h2 className='abuot'>درباره سایت ما:</h2>

                    <button onClick={this.changeflage}>کلیک کنید</button>
                    <div>
                        {this.state.flag? <p>این سایت از سال 1399 در عرصه انتشار فیلم های روز دنیا فعالیت خود را اغاز کرده مجموعه ما همیشه کوشیده است در سریع ترین زمان ممکن فیلم های روز دنیا را با بهترین کیفیت وزیر نویس در اختیار شما عزیزان قرار دهد </p>:<p></p>}
                    </div>
               
                </div>

            </div>
        );
    }
}

export default about;