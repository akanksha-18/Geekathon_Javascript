// const url =
//   "https://indeed12.p.rapidapi.com/jobs/search?query=manager&location=chicago&page_id=1&fromage=3&radius=50";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "c6b77b25a9msh4fe51e21727aad3p171430jsn50b8fc836df7",
//     "X-RapidAPI-Host": "indeed12.p.rapidapi.com",
//   },
// };

// async function getJobs() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

//  getJobs();

const url = 'https://indeed-jobs-api.p.rapidapi.com/indeed-us/?offset=0&keyword=python&location=california';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6bb602e04msh39079aa1d39fb2ep1b78d8jsn3459b4845927',
		'X-RapidAPI-Host': 'indeed-jobs-api.p.rapidapi.com'
	}
};
async function getjobs(){
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
getjobs();
// Fetch jobs data from the API
// async function getJobs() {
//   const url = "https://indeed12.p.rapidapi.com/jobs/search?query=manager&location=chicago&page_id=1&fromage=3&radius=50";
//   const options = {
//       method: "GET",
//       headers: {
//           "X-RapidAPI-Key": "c6b77b25a9msh4fe51e21727aad3p171430jsn50b8fc836df7",
//           "X-RapidAPI-Host": "indeed12.p.rapidapi.com",
//       },
//   };

//   try {
//       const response = await fetch(url, options);
//       const data = await response.json(); // Parse response as JSON
//       displayJobs(data.jobs); // Call function to display jobs
//   } catch (error) {
//       console.error(error);
//   }
// }

// // Display jobs on the webpage
// function displayJobs(jobs) {
//   const jobsContainer = document.getElementById("jobs-container");
//   jobsContainer.innerHTML = ""; // Clear previous content

//   jobs.forEach(job => {
//       const jobElement = document.createElement("div");
//       jobElement.classList.add("job");

//       const titleElement = document.createElement("h2");
//       titleElement.textContent = job.title;
//       jobElement.appendChild(titleElement);

//       const companyElement = document.createElement("p");
//       companyElement.textContent = "Company: " + job.company;
//       jobElement.appendChild(companyElement);

//       const locationElement = document.createElement("p");
//       locationElement.textContent = "Location: " + job.location;
//       jobElement.appendChild(locationElement);

//       // Add more job details if needed

//       jobsContainer.appendChild(jobElement);
//   });
// }

// // Call the function to fetch and display jobs when the page loads
// document.addEventListener("DOMContentLoaded", getJobs);

