import PropTypes from 'prop-types';
import Show from '../Show/Show';

const Admission = ({cart}) => {
    // const {name}=cart;
    return (
        <div className="md:w-1/3 text-white p-5">
            <h2 className="text-4xl text-cyan-400 font-bold mb-5">Courses Name</h2>
            <hr/>
{
cart.map((course2,index) => <Show index={index} key={course2.id} course2={course2} ></Show> )
}
        </div>
    );
};
Admission.propTypes={
    cart: PropTypes.object.isRequired

   
}
export default Admission;