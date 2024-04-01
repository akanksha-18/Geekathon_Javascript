import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyC1oRcJ7eAQaAO4kBqTJMt2w-ekoOCfj-I"; // Replace with your actual API key
            const genAI = new GoogleGenerativeAI(API_KEY);
            document.getElementById("jobRecommendationBtn").addEventListener("click", getJobRecommendations);

        
            async function getJobRecommendations() {
                clearJobRecommendations();
                const skills = getSkills();
                const jobRecommendations = await generateJobRecommendations(skills);
                displayJobRecommendations(jobRecommendations);
            }
            function clearJobRecommendations() {
                const recommendationsContainer = document.querySelector(".job-recommendations");
                recommendationsContainer.innerHTML = ""; // Clear job recommendations
            }
            async function generateJobRecommendations(skills) {
                showSpinner();
                const model = genAI.getGenerativeModel({ model: "gemini-pro" });
                const results = await Promise.all(skills.map(skill => model.generateContent(skill + " jobs and companies")));
                const jobRecommendations = results.flatMap(result => {
                    const response = result.response;
                    return response.text().split("\n\n");
                });
                hideSpinner();
                return jobRecommendations;
               
            }
            function convertMarkdownToHtml(markdownText) {
    const md = window.markdownit();
    return md.render(markdownText);
}
        
            function displayJobRecommendations(jobRecommendations) {
                const recommendationsContainer = document.querySelector(".job-recommendations");
                // recommendationsContainer.innerHTML = jobRecommendations.join("<br>");
                recommendationsContainer.innerHTML = convertMarkdownToHtml(jobRecommendations.join("\n\n"));
            }
        
            function getSkills() {
                const skillsInputs = document.querySelectorAll(".skill");
                const skills = [];
                skillsInputs.forEach(input => {
                    const skill = input.value.trim();
                    if (skill) {
                        skills.push(skill);
                    }
                });
                return skills;
            }

            const spinnerContainer = document.querySelector('.spinner-container');

    // async function getJobRecommendations() {
    //     showSpinner();
    //     const skills = getSkills();
    //     const jobRecommendations = await generateJobRecommendations(skills);
    //     displayJobRecommendations(jobRecommendations);
    //     hideSpinner();
    // }

    function showSpinner() {
        spinnerContainer.style.display = 'block';
    }

    function hideSpinner() {
        spinnerContainer.style.display = 'none';
    }