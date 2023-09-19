'use strict'

/////////////////
// DOM for app
/////////////////

const form=document.querySelector('.form'
)
const inputType=document.querySelector('.form__input')
const cadence=document.querySelector('.form__input--cadence')
const elevGain=document.querySelector('.form__input--elevation')
const inputDistance=document.querySelector('.form__input--distance')
const inputDuration=document.querySelector('.form__input--duration')
const workoutContainer=document.querySelector('.workouts')

// App variable initiation
let coords
let v_distance
let v_duration
let v_type
let workouts
let zoomLevel=13

/////////////////////////////////////////
// Class creation for running and cycling workouts
///////////////////////////////////////
///////////////////////////
// Parent class
///////////////////////////
class workout{
  id=(Date.now()+'').slice(5)
  
      constructor(distance,duration){
    this.coords=coords
    this.distance=distance
    this.duration=duration
    this._setDescription
    }
}

//////////////////////////////
// children classes
class running extends workout{
constructor(coords,v_type,distance,duration,cadence){

super(distance,duration,coords)
this.type=v_type
this.coords=coords
this.distance=distance
this.duration=duration

this.inputCadence
this.calcPace()
}
calcPace(){
 this.pace=this.duration/this.distance

 return this.pace
}
}

class cycling extends workout{
    constructor(coords,v_type,distance,duration,inputElevGain){
    super(distance,duration,coords)
  
    this.type=v_type
    this.coords=coords
    this.distance=distance
    this.duration=duration
    this.inputElevGain
    this.calcSpeed()
    }

    //////////////////////////////
    // calculate cycle speed
    /////////////////////////////
    calcSpeed(){
     this.speed=this.distance/(this.duration/60)
     return this.speed
}
}

////////////////////////////
// class creation for various variables for the form and map clicking
////////////////////////////
class parentApp{
  constructor()
  {
    this._setDescription()
  }
  _setDescription(){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    this._description=months[new Date().getMonth()]
    return (this._description)
  }
}
class app extends parentApp{

  #onClickCoords//mouse object which shows the coordinates inside
  #onClickCoordinates//the click used to  generate a position on the map
    #mapping
    sckCoords
    #allWorkouts=[]
  

    constructor(){
      super(parentApp._setDescription)
        this.findLocation()
        form.addEventListener('submit',this._genMarker.bind(this))
        inputType.addEventListener('change',this.menuToggle)
      
        document.querySelector('.sidebar').addEventListener('click',this.theClick.bind(this))
        this._setDescription()
        
    }

    findLocation(){
        navigator.geolocation.getCurrentPosition
        
        (this._findCurrPosition.bind(this),
        //////////////////////////////////////
        // Error in case of connection loss
        /////////////////////////////////////////
function(){
    console.log("Can't get position")
}
)}
//////////////////////////////
//  Functions start here////
/////////////////////////////
///////////////////////////
// Get current location//
///////////////////////////

_findCurrPosition(currPosition){
    const {latitude,longitude}=currPosition.coords
    
    let coords=[latitude,longitude]

    this.#mapping=L.map('map').setView(coords, zoomLevel)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(this.#mapping);

this.#mapping.on('click',this._genForm.bind(this))
}

/////////////////////////
// Generate marker and form completion
/////////////////////  

    _genMarker(e){
      
  const arr=(...inputs)=>inputs.every(inp=>inp>0)
    e.preventDefault() 
    
      if (!arr(+inputDistance.value,+inputDuration.value)){
 inputDistance.value='',inputDuration.value=''
  inputDistance.focus()
  return alert('Must be positive numbers') }
if(inputType.value==="running"){
      this.runningFunction()
    }else{
  this.cyclingFunction()
};

   L.marker(this.#onClickCoordinates).addTo(this.#mapping)
    .bindPopup(L.popup({
 autoClose:false,
closeOnClick:false,
closeButton:false,
className:`${v_type}-popup`
    }
)
    
    .setContent(`${inputType.value.slice(0,1).toUpperCase()}${inputType.value.slice(1)} on ${this._setDescription()} ${new Date().getDate()}`))
    
    .openPopup()
   
    form.classList.add('hidden')
    inputDistance.value= inputDuration.value=''
    
    }

////////////////////////////////
// Generate form
////////////////////////////

    _genForm(position){
       this.#onClickCoordinates=position.latlng
       
      form.classList.remove('hidden')
        inputDistance.focus()
        inputDistance.value=''
        document.querySelector('.form__input').value='running'
    }

    //////////////////////////
    // Toggle to change between running and cycling on the form
    ////////////////////////////////
    menuToggle(){

    cadence.closest('.form__row').classList.toggle('form__row--hidden')
    elevGain.closest('.form__row').classList.toggle('form__row--hidden')
    inputDistance.value='',inputDuration.value=''
    inputDistance.focus()
}
//////////////////////////////
// Public method
//////////////////////////parentApp.
// _setDescription(){
//   let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//   this._description=months[new Date().getMonth()]
//   return (this._description)
// }
//////////////////////////////////////
// function to fill in form for running excersize and generating as object
/////////////////////////////////////
runningFunction(){
  v_distance=+inputDistance.value
  v_duration=+inputDuration.value
  v_type=inputType.value
  
workouts=new running(this.#onClickCoordinates,v_type,v_distance,v_duration,this.id)
this.#allWorkouts.push(workouts)
this.excersizeList(workouts.calcPace())
console.log(this.#allWorkouts)
}

//////////////////////////////////////
// function to fill in form for cycling excersize and generating as object
/////////////////////////////////////

cyclingFunction(){
  v_distance=+inputDistance.value
  v_duration=+inputDuration.value
  v_type=inputType.value
workouts=new cycling(this.#onClickCoordinates,v_type,v_distance,v_duration,this.id)
this.#allWorkouts.push(workouts)
this.excersizeList(workouts.calcSpeed())

console.log(this.#allWorkouts)
}

////////////////////////////////////
// HTML code generated to insert excersize entry once position is clicked where excersize took place and form filled in
///////////////////////////////////
excersizeList(excersize){

   let Html=`<li class="workout workout--${v_type}" data-id=${workouts.id} >
   <h2 class="workout__title">${v_type.slice(0,1).toUpperCase(0,1)}${v_type.slice(1)} on ${this._setDescription()} the ${new Date().getDate()}</h2>
   <div class="workout__details">
     <span class="workout__icon">${v_type==="running"?'🏃‍♂️':'🚴‍♀️'}</span>
     <span class="workout__value">${v_distance}</span>
     <span class="workout__unit">km</span>
   </div>
   <div class="workout__details">
     <span class="workout__icon">⏱</span>
     <span class="workout__value">${v_duration}</span>
     <span class="workout__unit">min</span>
   </div>
   <div class="workout__details">
     <span class="workout__icon">⚡️</span>
     <span class="workout__value">${excersize}</span>
     <span class="workout__unit">${v_type==='running'?'mtr/min':'km/hr'}</span>
   </div>
   `

   Html+=`
   <div class="workout__details">
     <span class="workout__icon">${v_type==='running'?'🦶🏼':'⛰'}</span>
     <span class="workout__value">223</span>
     <span class="workout__unit">${v_type==='running'?'fps':'mtr'}</span>
   </div>
   </li>`
              
form.insertAdjacentHTML('afterend',Html);


    }
   
    ///////////////////////////////////////////////////
    // moving of map to where excersize took place
    ///////////////////////////////////////////////////
    theClick(e){
      const targetElement=e.target.closest('.workout')   
    
     let func= this.#allWorkouts.find(el=>el.id===targetElement.dataset.id)
       
         this.#mapping.setView(func.coords, zoomLevel,{
        animate:true,
        pan:{duration:1}})
      
    }
  }

  const App=new app()


