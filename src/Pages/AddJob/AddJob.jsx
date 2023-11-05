import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddJob = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const category = form.category.value;
    const email = form.email.value;
    const priceRange = form.minPrice.value;
    const maxPrice = form.maxPrice.value;
    const deadline = form.deadLine.value;
    const img = form.photo.value;
    const shortDescription = form.shortDescription.value;
  const items = {jobTitle, category, email,  maxPrice, deadline,img,priceRange}
    
    axios.post('http://localhost:5000/addJobs', {
      jobTitle,img,priceRange, category, email, maxPrice, deadline,shortDescription
    }
  )
  .then(function (response) {
    console.log(response.data);
    if (response.data.acknowledged) {
      Swal.fire({
  icon: 'success',
  title: 'Congratulation',
  text: 'You add successfully!',
  
})
    }
 navigate('/myJobs')

  })
  .catch(function (error) {
    console.log(error);
  });

  }
  return (
    <div>
      <section className="p-6 dark:bg-gray-200 dark:text-gray-50">
        
	<form onSubmit={handleSubmit}  className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-blue-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">ADD JOB</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Job Title</label>
					<input id="firstName" name="jobTitle" type="text" placeholder="Job title" className="w-full rounded-md p-3 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Category</label>
					<select name='category' className="select select-bordered w-full max-w-xs text-black">
  <option disabled selected>Who shot first?</option>
  <option>Graphic Design</option>
  <option>Digital Marketing</option>
  <option>Web Development</option>
</select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Email</label>
					<input id="email" name="email" type="email" placeholder="Email" className="w-full rounded-md p-3 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Photo</label>
					<input id="photo" name="photo" type="text" placeholder="photo" className="w-full rounded-md p-3 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">short Description</label>
					<input id="shortDescription" name="shortDescription" type="text" placeholder="shortDescription" className="w-full rounded-md p-3 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Minimam Price</label>
					<input id="minPrice" name="minPrice" type="text" placeholder="Minimam Price" className="w-full p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Maximam Price</label>
					<input id="maxPrice" name="maxPrice" type="text" placeholder="Maximam Price" className="w-full p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Dead / Line</label>
					<input id="deadLine" name="deadLine" type="date" placeholder="" className="w-full p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				
            </div>
            
		</fieldset>
         
            <div className=' flex justify-center'><button className="btn btn-wide bg-blue-900 text-white">Add job</button></div>
          
	</form>
</section>
    </div>
  );
};

export default AddJob;