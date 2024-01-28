const accordionData = [
    {
        question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
        firstAsnwer: "კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:",
        answerUl: {
            answer1:
                "<b>I ეტაპი</b> - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.",
            answer2:
                "<b>II ეტაპი</b> - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.",
            answer3:
                "<b>III ეტაპი</b> - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.",
            answer4:
                "<b>IV ეტაპი</b> - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.",
        },
        answer2:
            "* სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა. ",
    },
    {
        question: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
        firstAsnwer:
            "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.",
        answerUl: {
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
        },
        answer2: "",
    },
    {
        question: "რა ღირს სწავლა პროგრამის ფარგლებში?",
        firstAsnwer:
            "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.",
        answerUl: {
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
        },
        answer2: "",
    },
];

function createAccordion() {
    const accordionParent = document.querySelector(".accordion-parent");

    accordionData.forEach((data) => {
        const accordion = document.createElement("article");
        accordion.classList.add("tbc-accordion");

        accordion.innerHTML = `
            <div class="title">
                <span id="question">${data.question}</span>
                <figure>
                    <img
                    id="accordion-image"
                    src="./assets/images/svg files/arrow-accordion.svg"
                    alt="accordion-arrow"
                    />
                </figure>
            </div>
            <div class="accordion-content">
                <span id="answer">${data.firstAsnwer}</span>
                <ul>
                    <li>
                        ${data.answerUl.answer1}
                    </li>
                    <li>
                        ${data.answerUl.answer2}
                    </li>
                    <li>
                        ${data.answerUl.answer3}
                    </li>
                    <li>
                        ${data.answerUl.answer4}
                    </li>
                </ul>
                <span id="answer">${data.answer2}</span>
            </div>
        `;
        accordion.addEventListener("click", () => {
            accordion.classList.toggle("active");
        });

        accordionParent.appendChild(accordion);
    });
}

createAccordion();