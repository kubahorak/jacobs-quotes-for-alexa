/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en-GB': {
        translation: {
            FACTS: [
                "The loneliest people are the kindest. The saddest people smile the brightest. All because they do not wish to see anyone else suffer the way they do. -Unknown",
                "The most painful thing is losing yourself in the process of loving someone too much, and forgetting that you are special too. - Ernest Hemingway",
                "No one is saying that youve broken any laws, Mr. President... Were just saying its a little weird that you didnt have to. - John Oliver on PRISM",
                "My ex-girlfriend had a really weird fetish, where she used to dress up like herself and act like a fucking bitch all the time. - Bo Burnham",
                "If you run into an asshole in the morning, you ran into an asshole. If you run into assholes all day, youre the asshole. -Raylan Givens, Justified",
                "A society grows great when old men plant trees whose shade they know they shall never sit in. - Greek proverb",
                "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone elses highlight reel. -Steve Furtick.",
                "Im bored is a useless thing to say. I mean, you live in a great, big, vast world that youve seen none percent of. Even the inside of your own mind is endless; it goes on forever, inwardly, do you understand? The fact that youre alive is amazing, so you dont get to sayIm bored. Louis C.K.",
                "My friend: Jurassic Park will forever be my favorite movie because it illustrates perfectly how, when you try to control everything, you will get eaten by a fucking dinosaur.",
                "Youll be fine. Youre 25. Feeling unsure and lost is part of your path. Dont avoid it. See what those feelings are showing you and use it. Take a breath. Youll be okay. Even if you dont feel okay all the time. - Louie CK",
                "If you dont value your life start smoking, youll die ten years early. Or, start drinking to excess every day, youll die fifteen years early. Or you could love someone who doesnt love you back, youll die every day. - Anonymous",
                "Its not until youre an adult you appreciate how awesome a dog is. Your dreams start dying, somebody cheats on ya, bankers fuck up your 401k, ya know? Then you come home and that dogs looking at you and hes like, Dude, youre awesome! Its like, No dude, YOU are fucking awesome! - Bill Burr",
                "Being called a traitor by Dick Cheney is the highest honor you can give an American - Edward Snowden",
                "How lucky am I to have something that makes saying goodbye hard Winnie the Pooh",
                "Many people die at twenty five and aren't buried until they are seventy five. - Benjamin Franklin.",
                "I like pot, I enjoy pot, I like to smoke it. But, the one thing I dont like about pot is the subculture its spawned. I think its embarrassing and really juvenile and uncreative - David Cross",
                "When youre 20 you care what everyone thinks, when youre 40 you stop caring what everyone thinks, when youre 60 you realize no one was ever thinking about you in the first place -Unknown",
                "If Tetris has taught me anything its that errors pile up and accomplishments disappear. - Unknown",
                "Sometime, when you least expect it, youll realize that someone loved you. And that means that someone can love you again! And thatll make you smile. - Homer Simpson",
                "Im not upset that you lied to me, Im upset that from now on I cant believe you - Friedrich Nietzsche",
                "I am, somehow, less interested in the weight and convolutions of Einstein's brain than in the near certainty that people of equal talent have lived and died in cotton fields and sweatshops. - Stephen Jay Gould",
                "Normal is getting dressed in clothes that you buy for work and driving through traffic in a car that you are still paying for - in order to get to the job you need to pay for the clothes and the car, and the house you leave vacant all day so you can afford to live in it. - Ellen Goodman",
                "Don't mistake my kindness for weakness. I am kind to everyone, but when someone is unkind to me, weak is not what you are going to remember about me. - Al Capone",
                "That moment when you finish a book, look around, and realize that everyone is just carrying on with their lives as though you didn't just experience emotional trauma at the hands of a paperback. - Unknown",
                "You can tell how smart people are by what they laugh at. - Tina Fey",
                "The biggest coward is a man who awakens a woman's love with no intention of loving her. -Bob Marley",
                "One day, you're 17 and you're planning for someday. And then quietly, without you ever really noticing, someday is today. And then someday is yesterday. And this is your life. John Green",
                "Sometimes you will never know the value of a moment until it becomes a memory - Dr. Seuss",
                "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it. - Bill Gates",
                "On particularly rough days when Im sure I cant possibly endure, I like to remind myself that my track record for getting through bad days so far, is 100% and thats pretty good. - Unkown",
                "Everyone you will ever meet knows something you dont. - Bill Nye",
                "Always do sober what you said youd do drunk. That will teach you to keep your mouth shut. - Ernest Hemingway",
                "If you want more ice cream, use a smaller spoon. - My Grandma",
                "Its so hard to forget pain, but its even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace. -Chuck Palahniuk",
                "Happiness in intelligent people is the rarest thing I know. -Ernest Hemingway",
                "My absolute favorite piece of information is the fact that young sloths are so inept that they frequently grab their own arms and legs instead of tree limbs, and fall out of trees. - Douglas Adams",
                "It is easier to build strong children than to repair broken men. - Frederick Douglass",
                "the two hardest things to say in life are hello for the first time and goodbye for the last -Moira Rogers",
                "You will not be punished for your anger, you will be punished by your anger. - Buddha",
                "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth. - Fyodor Dostoevsky",
                "When youre the guy that people turn to when shit goes down...thats when youre a man - johnnytightlips2",
                "Only put off until tomorrow what you are willing to die having left undone. Pablo Picasso",
                "sometimes people forget that money is a tool not a goal - My Mom",
                "Why spend a dollar on a bookmark? ... Why not use the dollar as a bookmark? -Steven Spielberg",
                "I dont drink these days. I am allergic to alcohol and narcotics. I break out in handcuffs ~Robert Downey Jr.",
                "The best minds of my generation are thinking about how to make people click ads. That sucks. - Jeff Hammerbacher",
                "If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present. -Lao Tzu",
                "Sometimes Me Think, What is Friend? and then me say, Friend is someone to share the last cookie with. -Cookie Monster",
                "I just think its good to be confident. If Im not on my team why should anybody else be? - Robert Downey Jr.",
                "When the axe came into the woods, many of the trees said, At least the handle is one of us.  - Proverb",
                "You should sit in meditation for 20 minutes a day, unless youre too busy, then you should sit for an hour. -Zen adage",
                "Bill Cosby on African Americans.",
                "Ive been killing characters my entire career, maybe Im just a bloody minded bastard, I dont know, [but] when my characters are in danger, I want you to be afraid to turn the page (and to do that) you need to show right from the beginning that youre playing for keeps. - George R.R. Martin",
                "We met for a reason, either youre a blessing or a lesson. Frank Ocean",
                "It is the mark of an educated mind to be able to entertain a thought without accepting it. - Aristotle",
                "The human brain starts working the moment you are born and never stops until you stand up to speak in public.",
                "Dont let school interfere with your education -Mark Twain",
                "God created war so that Americans would learn geography. - Mark Twain",
                "I was about half in love with her by the time we sat down. Thats the thing about girls. Every time they do something pretty... you fall half in love with them, and then you never know where the hell you are. - J.D. Salinger",
                "Humility is not thinking less of yourself, its thinking of yourself less - CS Lewis",
                "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light. -Plato",
                "I wish there was a way to know youre in the good old days before youve actually left them Andy from The Office",
                "Anyway, no drug, not even alcohol, causes the fundamental ills of society. If were looking for the source of our troubles, we shouldnt test people for drugs, we should test them for stupidity, ignorance, greed and love of power. ~P.J. ORourke",
                "How lucky I am to have something that makes saying goodbye hard. Winnie the Pooh",
                "In our lives, on average, we will be asleep for a total of 8,477 days. If were lucky, some of that time will be sleeping next to someone we love. -Zefrank.",
                "Far too many people are looking for the right person, instead of trying to be the right person. -Gloria Steinem",
                "You can always tell who went to catholic school, because theyre atheists. - Mike Birbiglia",
                "If there is a God, He will have to beg my forgiveness. - A phrase that was carved on the walls of a concentration camp cell during WWII by a Jewish prisoner.",
                "Never forget that everything Hitler did in Germany was legal - Martin Luther King, Jr.",
                "Having children makes you no more a parent than having a piano makes you a pianist. - Michael Levine",
                "Those who do not move, do not notice their chains. - Rosa Luxemburg",
                "When young men seek to be like you, when lazy men resent you, when powerful men look over their shoulder at you, when cowardly men plot behind your back, when corrupt men wish you were gone and evil men want you dead, Only then will you have done your share. -Phil Messina",
                "Everyone thinks of changing the world but no one thinks of changing himself. - Leo Tolstoy",
                "The worst invention in all of human history has been the invention of the clock. I would explain why this is true... but were out of time. - My 7th Grade History Teacher",
                "Religion. Its given people hope in a world torn apart by religion. -John Stewart",
                "Thats the best revenge of all: happiness, Nothing drives people crazier than seeing someone have a good fucking life. -Chuck Palahniuk",
                "I used to think the worst thing in life was to end up all alone. It's not. The worst thing in life is to end up with people who make you feel all alone. - Robin Williams",
                "Books are no more threatened by Kindle than stairs by elevators. - Stephen Fry",
                "Why do you weep? Did you think I was immortal? - Louis XIV (last words)",
                "Beginning today, treat everyone you meet as if he/she were going to be dead by midnight. Extend to them all of the care, kindness and understanding you can muster. And do so with no thought of any reward. Your life will never be the same again.",
                "If the girl had been worth having she'd have waited for you? No, sir, the girl really worth having won't wait for anybody. - F. Scott Fitzgerald, This Side of Paradise",
                "31 chilling quotes",
                "Those who are heartless once cared too much. - Unknown",
                "If I am, death is not. If death is, I am not. Why fear that which cannot exist when I do? ~Epicurus",
                "Do not complain about growing old. It is a privilege denied to many. - Mark Twain -",
                "Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ~ Maya Angelou",
                "I never considered a difference of opinion in politics, in religion, in philosophy as cause for withdrawing from a friend. ~ Thomas Jefferson",
                "ive always resented the fact that when a cop drives by i feel paranoid instead of protected. - buddy wakefield",
                "If you are lonely when youre alone, you are in bad company - Jean-Paul Sartre",
                "Chop your own wood, and it will warm you twice. - Henry Ford",
                "Inside every cynical person, there is a disappointed idealist, -George Carlin",
                "Those who are heartless once cared too much - unknown",
                "Life asked Death: Why do people love me but hate you? Death responded:",
                "If youre the most intelligent person in the room . . . youre in the wrong room. - James D Watson.",
                "We judge ourselves by our intentions and others by their behavior. - Stephen M.R. Covey",
                "No, you can't deny women their basic rights and pretend it's about your 'religious freedom.' If you don't like birth control, don't use it. Religious freedom doesnt mean you can force others to live by your own beliefs. -A powerful quote by Barack Obama",
                "What an astonishing thing a book is. One glance at it and youre inside the mind of another person, maybe somebody dead for thousands of years. Proof that humans are capable of working magic. - Carl Sagan",
                "The saddest thing about betrayal is that it never comes from your enemies",
                "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. - Michael Jordan",
                "When I give food to the poor, they call me a saint. When I ask why they are poor, they call me a communist. - Arch Bishop Helder Camara",
            ],
            SKILL_NAME: 'Funny Quotes',
            GET_FACT_MESSAGE: "Here's your quote: ",
            HELP_MESSAGE: 'You can say tell me a funy quote, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                "The loneliest people are the kindest. The saddest people smile the brightest. All because they do not wish to see anyone else suffer the way they do. -Unknown",
                "The most painful thing is losing yourself in the process of loving someone too much, and forgetting that you are special too. - Ernest Hemingway",
                "No one is saying that youve broken any laws, Mr. President... Were just saying its a little weird that you didnt have to. - John Oliver on PRISM",
                "My ex-girlfriend had a really weird fetish, where she used to dress up like herself and act like a fucking bitch all the time. - Bo Burnham",
                "If you run into an asshole in the morning, you ran into an asshole. If you run into assholes all day, youre the asshole. -Raylan Givens, Justified",
                "A society grows great when old men plant trees whose shade they know they shall never sit in. - Greek proverb",
                "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone elses highlight reel. -Steve Furtick.",
                "Im bored is a useless thing to say. I mean, you live in a great, big, vast world that youve seen none percent of. Even the inside of your own mind is endless; it goes on forever, inwardly, do you understand? The fact that youre alive is amazing, so you dont get to sayIm bored. Louis C.K.",
                "My friend: Jurassic Park will forever be my favorite movie because it illustrates perfectly how, when you try to control everything, you will get eaten by a fucking dinosaur.",
                "Youll be fine. Youre 25. Feeling unsure and lost is part of your path. Dont avoid it. See what those feelings are showing you and use it. Take a breath. Youll be okay. Even if you dont feel okay all the time. - Louie CK",
                "If you dont value your life start smoking, youll die ten years early. Or, start drinking to excess every day, youll die fifteen years early. Or you could love someone who doesnt love you back, youll die every day. - Anonymous",
                "Its not until youre an adult you appreciate how awesome a dog is. Your dreams start dying, somebody cheats on ya, bankers fuck up your 401k, ya know? Then you come home and that dogs looking at you and hes like, Dude, youre awesome! Its like, No dude, YOU are fucking awesome! - Bill Burr",
                "Being called a traitor by Dick Cheney is the highest honor you can give an American - Edward Snowden",
                "How lucky am I to have something that makes saying goodbye hard Winnie the Pooh",
                "Many people die at twenty five and aren't buried until they are seventy five. - Benjamin Franklin.",
                "I like pot, I enjoy pot, I like to smoke it. But, the one thing I dont like about pot is the subculture its spawned. I think its embarrassing and really juvenile and uncreative - David Cross",
                "When youre 20 you care what everyone thinks, when youre 40 you stop caring what everyone thinks, when youre 60 you realize no one was ever thinking about you in the first place -Unknown",
                "If Tetris has taught me anything its that errors pile up and accomplishments disappear. - Unknown",
                "Sometime, when you least expect it, youll realize that someone loved you. And that means that someone can love you again! And thatll make you smile. - Homer Simpson",
                "Im not upset that you lied to me, Im upset that from now on I cant believe you - Friedrich Nietzsche",
                "I am, somehow, less interested in the weight and convolutions of Einstein's brain than in the near certainty that people of equal talent have lived and died in cotton fields and sweatshops. - Stephen Jay Gould",
                "Normal is getting dressed in clothes that you buy for work and driving through traffic in a car that you are still paying for - in order to get to the job you need to pay for the clothes and the car, and the house you leave vacant all day so you can afford to live in it. - Ellen Goodman",
                "Don't mistake my kindness for weakness. I am kind to everyone, but when someone is unkind to me, weak is not what you are going to remember about me. - Al Capone",
                "That moment when you finish a book, look around, and realize that everyone is just carrying on with their lives as though you didn't just experience emotional trauma at the hands of a paperback. - Unknown",
                "You can tell how smart people are by what they laugh at. - Tina Fey",
                "The biggest coward is a man who awakens a woman's love with no intention of loving her. -Bob Marley",
                "One day, you're 17 and you're planning for someday. And then quietly, without you ever really noticing, someday is today. And then someday is yesterday. And this is your life. John Green",
                "Sometimes you will never know the value of a moment until it becomes a memory - Dr. Seuss",
                "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it. - Bill Gates",
                "On particularly rough days when Im sure I cant possibly endure, I like to remind myself that my track record for getting through bad days so far, is 100% and thats pretty good. - Unkown",
                "Everyone you will ever meet knows something you dont. - Bill Nye",
                "Always do sober what you said youd do drunk. That will teach you to keep your mouth shut. - Ernest Hemingway",
                "If you want more ice cream, use a smaller spoon. - My Grandma",
                "Its so hard to forget pain, but its even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace. -Chuck Palahniuk",
                "Happiness in intelligent people is the rarest thing I know. -Ernest Hemingway",
                "My absolute favorite piece of information is the fact that young sloths are so inept that they frequently grab their own arms and legs instead of tree limbs, and fall out of trees. - Douglas Adams",
                "It is easier to build strong children than to repair broken men. - Frederick Douglass",
                "the two hardest things to say in life are hello for the first time and goodbye for the last -Moira Rogers",
                "You will not be punished for your anger, you will be punished by your anger. - Buddha",
                "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth. - Fyodor Dostoevsky",
                "When youre the guy that people turn to when shit goes down...thats when youre a man - johnnytightlips2",
                "Only put off until tomorrow what you are willing to die having left undone. Pablo Picasso",
                "sometimes people forget that money is a tool not a goal - My Mom",
                "Why spend a dollar on a bookmark? ... Why not use the dollar as a bookmark? -Steven Spielberg",
                "I dont drink these days. I am allergic to alcohol and narcotics. I break out in handcuffs ~Robert Downey Jr.",
                "The best minds of my generation are thinking about how to make people click ads. That sucks. - Jeff Hammerbacher",
                "If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present. -Lao Tzu",
                "Sometimes Me Think, What is Friend? and then me say, Friend is someone to share the last cookie with. -Cookie Monster",
                "I just think its good to be confident. If Im not on my team why should anybody else be? - Robert Downey Jr.",
                "When the axe came into the woods, many of the trees said, At least the handle is one of us.  - Proverb",
                "You should sit in meditation for 20 minutes a day, unless youre too busy, then you should sit for an hour. -Zen adage",
                "Bill Cosby on African Americans.",
                "Ive been killing characters my entire career, maybe Im just a bloody minded bastard, I dont know, [but] when my characters are in danger, I want you to be afraid to turn the page (and to do that) you need to show right from the beginning that youre playing for keeps. - George R.R. Martin",
                "We met for a reason, either youre a blessing or a lesson. Frank Ocean",
                "It is the mark of an educated mind to be able to entertain a thought without accepting it. - Aristotle",
                "The human brain starts working the moment you are born and never stops until you stand up to speak in public.",
                "Dont let school interfere with your education -Mark Twain",
                "God created war so that Americans would learn geography. - Mark Twain",
                "I was about half in love with her by the time we sat down. Thats the thing about girls. Every time they do something pretty... you fall half in love with them, and then you never know where the hell you are. - J.D. Salinger",
                "Humility is not thinking less of yourself, its thinking of yourself less - CS Lewis",
                "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light. -Plato",
                "I wish there was a way to know youre in the good old days before youve actually left them Andy from The Office",
                "Anyway, no drug, not even alcohol, causes the fundamental ills of society. If were looking for the source of our troubles, we shouldnt test people for drugs, we should test them for stupidity, ignorance, greed and love of power. ~P.J. ORourke",
                "How lucky I am to have something that makes saying goodbye hard. Winnie the Pooh",
                "In our lives, on average, we will be asleep for a total of 8,477 days. If were lucky, some of that time will be sleeping next to someone we love. -Zefrank.",
                "Far too many people are looking for the right person, instead of trying to be the right person. -Gloria Steinem",
                "You can always tell who went to catholic school, because theyre atheists. - Mike Birbiglia",
                "If there is a God, He will have to beg my forgiveness. - A phrase that was carved on the walls of a concentration camp cell during WWII by a Jewish prisoner.",
                "Never forget that everything Hitler did in Germany was legal - Martin Luther King, Jr.",
                "Having children makes you no more a parent than having a piano makes you a pianist. - Michael Levine",
                "Those who do not move, do not notice their chains. - Rosa Luxemburg",
                "When young men seek to be like you, when lazy men resent you, when powerful men look over their shoulder at you, when cowardly men plot behind your back, when corrupt men wish you were gone and evil men want you dead, Only then will you have done your share. -Phil Messina",
                "Everyone thinks of changing the world but no one thinks of changing himself. - Leo Tolstoy",
                "The worst invention in all of human history has been the invention of the clock. I would explain why this is true... but were out of time. - My 7th Grade History Teacher",
                "Religion. Its given people hope in a world torn apart by religion. -John Stewart",
                "Thats the best revenge of all: happiness, Nothing drives people crazier than seeing someone have a good fucking life. -Chuck Palahniuk",
                "I used to think the worst thing in life was to end up all alone. It's not. The worst thing in life is to end up with people who make you feel all alone. - Robin Williams",
                "Books are no more threatened by Kindle than stairs by elevators. - Stephen Fry",
                "Why do you weep? Did you think I was immortal? - Louis XIV (last words)",
                "Beginning today, treat everyone you meet as if he/she were going to be dead by midnight. Extend to them all of the care, kindness and understanding you can muster. And do so with no thought of any reward. Your life will never be the same again.",
                "If the girl had been worth having she'd have waited for you? No, sir, the girl really worth having won't wait for anybody. - F. Scott Fitzgerald, This Side of Paradise",
                "31 chilling quotes",
                "Those who are heartless once cared too much. - Unknown",
                "If I am, death is not. If death is, I am not. Why fear that which cannot exist when I do? ~Epicurus",
                "Do not complain about growing old. It is a privilege denied to many. - Mark Twain -",
                "Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ~ Maya Angelou",
                "I never considered a difference of opinion in politics, in religion, in philosophy as cause for withdrawing from a friend. ~ Thomas Jefferson",
                "ive always resented the fact that when a cop drives by i feel paranoid instead of protected. - buddy wakefield",
                "If you are lonely when youre alone, you are in bad company - Jean-Paul Sartre",
                "Chop your own wood, and it will warm you twice. - Henry Ford",
                "Inside every cynical person, there is a disappointed idealist, -George Carlin",
                "Those who are heartless once cared too much - unknown",
                "Life asked Death: Why do people love me but hate you? Death responded:",
                "If youre the most intelligent person in the room . . . youre in the wrong room. - James D Watson.",
                "We judge ourselves by our intentions and others by their behavior. - Stephen M.R. Covey",
                "No, you can't deny women their basic rights and pretend it's about your 'religious freedom.' If you don't like birth control, don't use it. Religious freedom doesnt mean you can force others to live by your own beliefs. -A powerful quote by Barack Obama",
                "What an astonishing thing a book is. One glance at it and youre inside the mind of another person, maybe somebody dead for thousands of years. Proof that humans are capable of working magic. - Carl Sagan",
                "The saddest thing about betrayal is that it never comes from your enemies",
                "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. - Michael Jordan",
                "When I give food to the poor, they call me a saint. When I ask why they are poor, they call me a communist. - Arch Bishop Helder Camara",
            ],
            SKILL_NAME: 'Funny Quotes',
            GET_FACT_MESSAGE: "Here's your quote: ",
            HELP_MESSAGE: 'You can say tell me a funy quote, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
