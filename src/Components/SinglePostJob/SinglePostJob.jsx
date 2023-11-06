import axios from 'axios'
import Swal from 'sweetalert2';

const SinglePostJob = ({ job,allData,setData }) => {
  const handleDelete = (id) => {
    
    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
  
  if (result.isConfirmed) {
    axios.delete(`http://localhost:5000/jobs/${id}`)
    .then(function (response) {
    console.log(response.data);
    if (response.data.deletedCount > 0) {
       Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
      )
      
      const remaining = allData.filter(item => item._id !== id)
      setData(remaining);
      
      }

                        
      


  })
  .catch(function (error) {
    console.log(error);
  });

  
  }
})
  }
  return (
    <div>
      <div className="card card-compact h-[500px]  bg-base-100 shadow-xl">
  <img src={job.img} className='h-[200px]' alt="" />
  <div className="card-body">
          <h2 className="card-title">{job.jobTitle }</h2>
          <p><span className='font-bold'>Category : </span>{ job.category}</p>
          <p><span className='font-bold'>Deadline : </span>{ job.deadline}</p>
          <p><span className='font-bold'>Description : </span>{ job.shortDescription}</p>
          <p><span className='font-bold'>priceRange : </span>{ job.priceRange}</p>
          
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-blue-900">Update</button>
      <button onClick={()=>handleDelete(job._id)} className="btn btn-warning">Delete</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default SinglePostJob;