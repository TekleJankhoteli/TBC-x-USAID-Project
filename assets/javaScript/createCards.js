const coursesData = [
    {
        name: "iOS Development",
        status: "რეგისტრაცია დასრულებულია",
        image: "/assets/images/courses/iOS.jpg",
    },
    {
        name: "React",
        status: "რეგისტრაცია დასრულებულია",
        image: "/assets/images/courses/React.jpg",
    },
    {
        name: "Intro to Python",
        status: "რეგისტრაცია დასრულებულია",
        image: "/assets/images/courses/IntroToPython.jpg",
    },
    {
        name: "Advanced Python",
        status: "რეგისტრაცია დასრულებულია",
        image: "/assets/images/courses/AdvancedPython.jpg",
    },
    {
        name: "Advanced Cybersecurity ",
        status: "რეგისტრაცია დასრულებულია",
        image: "/assets/images/courses/Cybersecurity.jpg",
    },
    {
        name: "Tot - Training of Trainers",
        status: "რეგისტრაცია დასრულებულია",
        image:"/assets/images/courses/ToT.jpg",
    },
    {
        name: "Blockchain",
        status: "რეგისტრაცია დასრულებულია",
        image: "/assets/images/courses/Blockchain.jpg",
    },
    {
        name: "DevOps",
        status: "რეგისტრაცია დასრულებულია",
        image: "/assets/images/courses/DevOps.jpg",
    },
    {
        name: "Information Security",
        status: "რეგისტრაცია დასრულებულია",
        image: "/assets/images/courses/InformationSecurity.jpg",
    }, 
];



function createCards() {
    const coursesContainer = document.getElementById("coursesContainer");

    coursesData.forEach((data) => {
        const card = document.createElement("article");
        card.classList.add("coursesCards");

        const image = document.createElement("img");
        image.src = data.image;

        card.innerHTML += ` 
        <section>
        <img
            src="${data.image}"
            alt="${data.name}"
        />
        </section>
        <div class="card-det">
            <span class="card-description"
                >${data.name}</span>
            <span class="card-status"
                >${data.status}
                </span>
        </div>
        <div class="card-btn-parent">
            <section>
                <img
                    src="/assets/images/svg files/arrow-blue.svg",
                   
                />
            </section>
        <a id="card-btn-txt" href="#">კურსის დეტალები</a>
        </div>
        `;

        coursesContainer.appendChild(card);
    });
}

createCards();