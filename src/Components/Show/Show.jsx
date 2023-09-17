import PropTypes from 'prop-types';

const Show = ({course2,index}) => {
    const {name,price}=course2
    return (
        <div className="text-white">
            <h2 className="text-3xl m-2 p-2">{index+1}. {name} </h2>
            <h2 className='bg-cyan-800 text-center font-bold  p-2 text-2xl'>Price: {price}</h2>
        </div>
    );
};
Show.propTypes={
    course2: PropTypes.object.isRequired

   
}
export default Show;