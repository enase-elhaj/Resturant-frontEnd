import './homepage2.css';

export default function Booking(){
    return(
    <div>

     <div className="first-b">

     <div className="second-b">
        <div className="title-b">
          <div className="book-atable">
          Book A Table
          </div>
          <span className="we-consider-all-the-drivers-of-change-gives-you-the-components-you-need-to-change-to-create-atruly-happens-b">
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
          </span>
        </div>


        <form className="form" method='POST' action="{{ route('booking.store') }}" enctype=''>

         @csrf
          <div className="bg-1">
          </div>
          <div className="row">
            <div className="container-b">
              <div className="title-1b">
               <label className="date">Date</label>
               <input name='date' className="button-base-b container-1b" type='date'/>
              </div>
            </div>

            <div className="container-2b">
              <div className="title-2b">
               <label className="time">Time</label>
               <input name='time' className="button-base-b pm" type="time" />
              </div>
            </div>
            
          </div>
          <div className="row">
            <div className="container-1b">
              <div className="title-1b">
                <label className="name">Name</label>
                <input name='nameb' value="Enter your name" type="text" className="button-base-b container-1b "/>
             </div>
            </div>

            <div className="container-b">
              <div className="title-1b">
               <label className="phone">Phone</label>
               <input name='phone' className="button-base-b" value="xxxx-xxx-xxxx" type="text" />
              </div>
            </div>
          </div>
          <div className="row-bb">
            <div className="title-1b">
             <label className="total-person">Total Person</label>
             <input name="persons" type="number" min="1" className="button-base-4b person"/>
            </div>
            <button className="button-b get-started-now-b">Book A Table</button>
            
          </div>

        </form>

        </div>
     </div>
    </div>
    )
}