const quiz = [
    {
        id:1,
        question:"What is the form of government of the United States?",
        answers:[
            "republic",
            "constitution based federal republic",
            "representative democracy"
        ]
    },
    {
        id:2,
        question:"What is the supreme law of the land?",
        answers:[
            "Constitution"
        ]
    },
    {
        id:3,
        question:"Name one thing the U.S. Constitution does?",
        answers:[
            "Forms the government",
            "Defines powers of government",
            "Defines the parts of government",
            "Protects the rights of the people"
        ]
    },
    {
        id:4,
        question:"The U.S. Constitution starts with the words “We the People.” What does “We the People” mean?",
        answers:[
            "Self government",
            "Popular sovereignty",
            "Consent of the governed",
            "People should govern themselves",
            "(Example of) social contract"
        ]
    },
    {
        id:5,
        question:"How are changes made to the U.S. Constitution?",
        answers:[
            "Amendments",
            "The amendment process"
        ]
    },
    {
        id:6,
        question:"What does the Bill of Rights protect?",
        answers:[
            "The basic rights of Americans",
            "The basic rights of people living in the United States"
        ]
    },
    {
        id:7,
        question:"How many amendments does the U.S. Constitution have?",
        answers:["27"]
    },
    {
        id:8,
        question:"Why is the Declaration of Independence important?",
        answers:[
            "It says all people are created equal",
            "It says America is free from British control",
            "It identifies inherent rights",
            "It identifies individual freedoms"
        ]
    },
    {
        id:9,
        question:"What founding document said the American colonies were free from Britain?",
        answers:[
            "Declaration of Independence"
        ]
    },
    {
        id:10,
        question:"Name two important ideas from the Declaration of Independence and the U.S. Constitution",
        answers:[
            "Equality Liberty",
            "Liberty",
            "Social contract",
            "Natural rights",
            "Limited government",
            "Self government"
        ]
    },
    {
        id:11,
        question:"The words “Life, Liberty, and the pursuit of Happiness” are in what founding document?",
        answers:[
            "Declaration of Independence"
        ]
    },
    {
        id:12,
        question:"What is the economic system of the United States?",
        answers:[
            "Capitalism",
            "Free market economy"
        ]
    },
    {
        id:13,
        question:"What is the rule of law?",
        answers: [
            "Everyone must follow the law",
            "Leaders must obey the law",
            "Government must obey the law",
            "No one is above the law."
        ]
    },
    {
        id:14,
        question:"Many documents influenced the U.S. Constitution. Name one",
        answers:[
            "Declaration of Independence",
            "Articles of Confederation",
            "Federalist Papers",
            "Anti Federalist Papers",
            "Virginia Declaration of Rights",
            "Fundamental Orders of Connecticut",
            "Mayflower Compact",
            "Iroquois Great Law of Peace"
        ]
    },
    {
        id:15,
        question:"There are three branches of government. Why?",
        answers:[
            "So one part does not become too powerful",
            "Checks and balances",
            "Separation of powers"
        ]
    },
    {
        id:16,
        question:"Name the three branches of government.",
        answers:[
            "Legislative, executive, and judicial",
            "Congress president and the courts"
        ]
    },
    {
        id:17,
        question:"The President of the United States is in charge of which branch of government?",
        answers:[
            "Executive branch"]},
    {
        id:18,
        question:"What part of the federal government writes laws?",
        answers:[
            "U.S. Congress",
            "(U.S. or national) legislature",
            "Legislative branch"]},
    {
        id:19,
        question:"What are the two parts of the U.S. Congress?",
        answers:[
            "Senate and House of Representatives"
        ]
    },
    {
        id:20,
        question:"Name one power of the U.S. Congress.",
        answers:[
            "Writes laws",
            "Declares war",
            "Makes the federal budget"
        ]
    },
    {
        id:21,
        question:"How many U.S. senators are there?",
        answers:[
            "One hundred","100"
        ]
    },
    {
        id:22,
        question:"How long is a term for a U.S. senator?",
        answers:[
            "Six","6"
        ]
    },
    {
        id:23,
        question:"Who is one of your state’s U.S. senators now?",
        answers:[
            "Tammy Duckworth",
            "Richard Durbin"
        ]
    },
    {
        id:24,
        question:"How many voting members are in the House of Representatives?",
        answers:[
            "Four hundred thirty five","435"
        ]
    },
    {
        id:25,
        question:"How long is a term for a member of the House of Representatives?",
        answers:[
            "Two","2"
        ]
    },
    {
        id:26,
        question:"Why do U.S. representatives serve shorter terms than U.S. senators?",
        answers:[
            "To more closely follow public opinion"
        ]
    },
    {
        id:27,
        question:"How many senators does each state have?",
        answers:[
            "Two","2"
        ]
    },
    {
        id:28,
        question:"Why does each state have two senators?",
        answers:[
            "Equal representation",
            "The Great Compromise (Connecticut Compromise)"
        ]
    },
    {
        id:29,
        question:"Name your U.S. representative.",
        answers:[
            "Sean Casten"
        ]
    },
    {
        id: 30,
        question: "What is the name of the Speaker of the House of Representatives now?",
        answers: [
            "Mike Johnson"
        ]
    },
    {
        id: 31,
        question: "Who does a U.S. senator represent?",
        answers: [
            "Citizens of their state",
            "People of their state"
        ]
    },
    {
        id: 32,
        question: "Who elects U.S. senators?",
        answers: [
            "Citizens from their state",
        ]
    },
    {
        id: 33,
        question: "Who does a member of the House of Representatives represent?",
        answers: [
            "Citizens in their (congressional) district",
            "Citizens in their district",
            "People from their (congressional) district",
            "People in their district"
        ]
    },
    {
        id: 34,
        question: "Who elects members of the House of Representatives?",
        answers: [
            "Citizens from their district"
        ]
    },
    {
        id: 35,
        question: "Some states have more representatives than other states Why?",
        answers: [
            "Because of the state &apos;s population",
            "(Because) they have more people",
            "(Because) some states have more people"
        ]
    },

    {
        id: 36,
        question: "The President of the United States is elected for how many years? ",
        answers: [
            "Four","4"
        ]
    },
    {
        id: 37,
        question: "The President of the United States can serve only two terms. Why?",
        answers: [
            "Because of the 22nd Amendment",
            "To keep the president from becoming too powerful"
        ]
    },
    {
        id: 38,
        question: "What is the name of the President of the United States now?",
        answers: [
            "Donald J Trump"
        ]
    },
    {
        id:39,
        question:"What is the name of the Vice President of the United States now?",
        answers: [
            "JD Vance"
        ]
    },
    {
        id:40,
        question:"If the president can no longer serve, who becomes president?",
        answers: [
            "The Vice President"
        ]
    },
    {
        id:41,
        question:"Name one power of the president",
        answers: [
            "Signs bills into law",
            "Vetoes bills",
            "Enforces laws",
            "Commander in Chief (of the military)",
            "Chief diplomat",
            "Appoints federal judges",
        ]
    },
    {
        id:42,
        question:"Who is Commander in Chief of the U.S. military?",
        answers: [
            "The President"
        ]
    },
    {
        id:43,
        question:"Who signs bills to become laws?",
        answers: [
            "The President"
        ]
    },
    {
        id:44,
        question:"Who vetoes bills?",
        answers: [
            "The President"
        ]
    },
    {
        id:45,
        question:"Who appoints federal judges?",
        answers: [
            "The President"
        ]
    },
    {
        id:46,
        question:"The executive branch has many parts. Name one",
        answers: [
            "President of the United States",
            "Cabinet",
            "Federal departments and agencies",
        ]
    },
    {
        id:47,
        question:"What does the President’s Cabinet do?",
        answers: [
            "Advises the President"
        ]
    },{
        id:48,
        question:"What are two Cabinet level positions?",
        answers: [
            "Attorney General,Vice President",
            "Secretary of Agriculture",
            "Secretary of Commerce",
            "Secretary of Education",
            "Secretary of Energy",
            "Secretary of Health and Human Services",
            "Secretary of Homeland Security",
            "Secretary of Housing and Urban Development",
            "Secretary of the Interior",
            "Secretary of Labor",
            "Secretary of State",
            "Secretary of Transportation",
            "Secretary of the Treasury",
            "Secretary of Veterans Affairs",
        ]
    },
    {
        id:49,
        question:"Why is the Electoral College important?",
        answers: [
            "It decides who is elected president"
        ]
    },
    {
        id:50,
        question:"What is one part of the judicial branch?",
        answers: [
            "Supreme Court",
            "Federal Courts"
        ]
    }, {
        id:51,
        question:"What does the judicial branch do? ",
        answers: [
            "Reviews laws",
            "Explains laws",
            "Resolves disputes (disagreements) about the law",
            "Decides if a law goes against the (U.S.) Constitution",
        ]
    }, {
        id:52,
        question:"What is the highest court in the United States?",
        answers: [
            "Supreme Court"
        ]
    }
    , {
        id:53,
        question:"How many seats are on the Supreme Court?",
        answers: [
            "Nine", 9
        ]
    }
    , {
        id:54,
        question:"How many Supreme Court justices are usually needed to decide a case?",
        answers: [
            "five",5
        ]
    }
    , {
        id:55,
        question:"How long do Supreme Court justices serve?",
        answers: [
            "For life",
            "Lifetime appointment",
            "(Until) retirement",
        ]
    }, {
        id:56,
        question:"Supreme Court justices serve for life. Why?",
        answers: [
            "To be independent of politics",
            "To limit outside political influence"
        ]
    }, {
        id:57,
        question:"Who is the Chief Justice of the United States now?",
        answers: [
            "John Roberts"
        ]
    }, {
        id:58,
        question:"Name one power that is only for the federal government.",
        answers: [
            "Print paper money",
            "Mint coins",
            "Declare war",
            "Create an army",
            "Make treaties",
            "Set foreign policy",
        ]
    }, {
        id:59,
        question:"Name one power that is only for the states.",
        answers: [
            "Provide schooling and education",
            "Provide protection (police)",
            "Provide safety (fire departments)",
            "Give a driver’s license",
            "Approve zoning and land use",
        ]
    }, {
        id:60,
        question:"What is the purpose of the 10th Amendment?",
        answers: [
            "It states that the powers not given to the federal government belong to the states or to the people"
        ]
    }, {
        id:61,
        question:"Who is the governor of your state now?",
        answers: [
            "JB Pritzker"
        ]
    }, {
        id:62,
        question:"What is the capital of your state?",
        answers: [
            "Springfield"
        ]
    },
    // {
    //     id:50,
    //     question:"",
    //     answers: [
    //     ]
    // }
];
