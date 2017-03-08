'use strict';

module.exports = function () {
    var motivationMessages = ["Great job!", 
                                "You rock!", 
                                "Too good to be true...", 
                                "Neo is it you?!", 
                                "Bravo!", 
                                "You must have been practising!",
                                "You are doing that much better today!",
                                "Your hard work is so appriciated! ",
                                "Couldn't have done it better myself...",
                                "Stop for a moment, I want to remember this piece of code perfection...",
                                "I knew you could do it!",
                                "Hip hip hoorey!",
                                "Keep working you're getting better!",
                                "Lovely jubbly!",
                                "Nothing can stop you now!",
                                "Nicely done!",
                                "Sensational!",
                                "Looks perfect...",
                                "That's better than ever!",
                                "That's the right way to do it!",
                                "You've just about mastered that!",
                                "Please don't stop your coding!",
                                "Never seen anything close to this beauty...",
                                "You're code ninja!",
                                "You're so god at coding!",
                                "You outdid yourself!",
                                "Superb!",
                                "Flawless code!",
                                "That's so clever!",
                                "Love it!",
                                "Well done!",
                                "Nice going!",
                                "Simply awesome!",
                                "Exceptional work!",
                                "That's so significant!",
                                "Thank you for your coding, it inspires me...",
                                "Love the way you code...",
                                "You'll become a code legend!",
                                "Wow!",
                                "Very professional!",
                                "How did you get so good?",
                                "Just what was wanted",
                                "I'm glad your work on this project!",
                                "Professional as usual.",
                                "The code of champions.",
                                "World class.",
                                "Now you're coding!",
                                "Unreal!",
                                "Code magic!",
                                "Another miracle!",
                                "You're one of a kind",
                                "You're on the right track now!",
                                "Happy to see you coding like that!",
                                "Keep it up!",
                                "Good thinking!",
                                "I've never seen anyone do it better.",
                                "You remembered.",
                                "Well, look at you go!",
                                "Right on!",
                                "You're a great coder!",
                                "Your code is like the most delicious food!",
                                "You code as breathe!",
                                "Outstanding work!",
                                "This is truly above and beyond.",
                                "This is superb! I had no idea a piece of code could look this good.",
                                "You set a high bar with this one.",
                                "Respect.",
                                "Well played!",
                                "I'm speechless...",
                                "Nice catch!",
                                "Testers pray to test the functionality you developed.",
                                "You should ask for a 20% pay rise!",
                                "Dude, you're alright."
                                ];
    var message = motivationMessages[Math.floor(Math.random() * motivationMessages.length)];
    return message;
}