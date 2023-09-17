
import PropTypes from 'prop-types';
const Course = ({course,handleBtn}) => {
    const {name,img,instructor,duration,price,id}=course;
    return (
        <div className="border-4  border-emerald-400 border-double rounded-s-2xl   hover:bg-cyan-100  ">
          <img className="w-90 h-80" src={img} alt="" />
          <h5 className="text-cyan-500 text-left font-bold ">{name}</h5>
       
            <div className="m-2 text-left text-2xl font-semibold">
            <h2 className="text-emerald-600">Instructor : {instructor}</h2>
               <h2 className="text-emerald-700" >Duration : {duration} </h2>
               <br/>
               <hr/>
               <h2 className='text-emerald-700 text-center m-2'>{price}</h2>
            </div>
            <button onClick={()=>handleBtn(course,id)} className='bg-emerald-900 m-5 pl-10 pr-10 pt-2 pb-2 text-3xl border-1 rounded-xl hover:bg-emerald-500'>Admission</button>
         
        </div>
    );
};
Course.propTypes={
    course: PropTypes.object.isRequired,
    handleBtn: PropTypes.func
   
}
export default Course;