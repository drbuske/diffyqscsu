var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "notes_section",
  "level": "1",
  "url": "notes_section.html",
  "type": "Section",
  "number": "0.1",
  "title": "About this book",
  "body": " About this book   This version of the book is for the Ordinary Differential Equations portion of Math 204 at the University of Victoria. This version is a fork of the original textbook adapted for Math 204. Trefor Bazett is the project lead, and the adaption has had contributions by Muhammad Awais and Afif Omar.    Math 204: Vector Calculus and Differential Equations  Math 204 at UVic consists of a Vector Calculus portion followed by Ordinary Differential Equations (ODEs). This book covers the ODE portion, while this separate Vector Calculus \"Book\" supports the Vector Calculus portion.    Original Textbook by Jiří Lebl  The original version of the textbook by Jiří Lebl comes in three forms:     The Web Version .     A PDF .     A printed paperback on Amazon .    Additionally, Jiří Lebl's website for the book contain's a lot of additional information including the source code.  Note that this forked version of the book for Math 204 at UVic is only available in web version. If you would prefer a .pdf or printed version, you can access the original .pdf or printed version with the above links. See the next section for differences between the versions.  If you are an instructor, please consult the original version of the text for more information and potential uses.    Differences between the versions  As of this writing, the original text by Jiří Lebl and the forked version by Trefor Bazett are very similar. The most substantial changes in the forked version are embedding of a video series by Trefor Bazett and an expansion of the exercises at the end of each section, with more questions, more answers, and some brief solutions. Additioally, there is a rearrangement of the content. For a more precise comparison, please consult the respective github pages for the original and forked version.  A few chapters in this book are not taught in Math 204, namely Systems, Non-Linear Systems, Eigenvalue Systems, and PDEs. These chapters remain for reference purposes in the forked version of the textbook entirely untouched by Trefor Bazett.    The video playlist  The full playlist of videos by Trefor Bazett can be found here , and consists of both Vector Calculus (embedded in the Vector Calculus \"Book\" ) and ODEs (embedded throughout this book).  The videos are intended to be complimentary to the textbook. You could learn the content just by reading the textbook, as in the original version by Lebl. The other direction is not true; the videos alone don't always cover all the content. Typically the videos use slightly different examples from the textbook so that you can get extra exposure by reading\/watching both. While there was an effort for the notation and scope of the videos to be similar to the textbook, ultimately the book is largely written by Lebl and the videos recorded by Bazett and there are stylistic differences and differences in emphasis between these two. Typically videos are placed immediately prior to the analogous text content covered in the video.  Note that the videos used in this text are one Trefor Bazett's UVic-specific channel @DrTreforUVic . Trefor Bazett also maintains a public YouTube channel which contain versions of the same videos. In general the videos embedded from the @DrTreforUVic channel are a cleaner learning experience as they are not monetized and contain no calls-to-action (eg: Like and Subscribe!).    Computer resources  The book's website https:\/\/www.jirka.org\/diffyqs\/ contains the following resources:    Interactive SAGE demos.    Online WeBWorK homeworks (using either your own WeBWorK installation or Edfinity) for most sections, customized for this book.    The PDFs of the figures used in this book.    Jiří Lebl taught the UIUC courses using IODE IODE software ( https:\/\/faculty.math.illinois.edu\/iode\/ ). IODE is a free software package that works with Matlab (proprietary) or Octave (free software). The graphs in the book were made with the Genius Genius software software (see https:\/\/www.jirka.org\/genius.html ).  The latex source is available on github for the original version by Lebl ( https:\/\/github.com\/jirilebl\/diffyqs ) as well as the forked version by Bazett ( https:\/\/github.com\/tbazett\/diffyqs ) for possible modification and customizations.    Acknowledgments  Acknowlegements by Trefor Bazett: Firstly, I want to thank the incredibly work of Jiří Lebl for creating and maintaining this excellent textbook, without which this project would have been beyond daunting to begin. I want to thank both Muhammad Awais and Afif Omar for their extensive work on revising the exercises, answers, and solutions. This project is supported by a grant through the LTSI at the University of Victoria to create Open Educational Resources.  Acknowledgements by Jiří Lebl: Firstly, I would like to acknowledge Rick Laugesen. I used his handwritten class notes the first time I taught Math 286. My organization of this book through chapter 5, and the choice of material covered, is heavily influenced by his notes. Many examples and computations are taken from his notes. I am also heavily indebted to Rick for all the advice he has given me, not just on teaching Math 286. For spotting errors and other suggestions, I would also like to acknowledge (in no particular order): John P. D'Angelo, Sean Raleigh, Jessica Robinson, Michael Angelini, Leonardo Gomes, Jeff Winegar, Ian Simon, Thomas Wicklund, Eliot Brenner, Sean Robinson, Jannett Susberry, Dana Al-Quadi, Cesar Alvarez, Cem Bagdatlioglu, Nathan Wong, Alison Shive, Shawn White, Wing Yip Ho, Joanne Shin, Gladys Cruz, Jonathan Gomez, Janelle Louie, Navid Froutan, Grace Victorine, Paul Pearson, Jared Teague, Ziad Adwan, Martin Weilandt, Sönmez Şahutoğlu, Pete Peterson, Thomas Gresham, Prentiss Hyde, Jai Welch, Simon Tse, Andrew Browning, James Choi, Dusty Grundmeier, John Marriott, Jim Kruidenier, Barry Conrad, Wesley Snider, Colton Koop, Sarah Morse, Erik Boczko, Asif Shakeel, Chris Peterson, Nicholas Hu, Paul Seeburger, Jonathan McCormick, David Leep, William Meisel, Shishir Agrawal, Tom Wan, Andres Valloud, and probably others I have forgotten. Finally, I would like to acknowledge NSF grants DMS-0900885 and DMS-1362337.   "
},
{
  "id": "introde_section",
  "level": "1",
  "url": "introde_section.html",
  "type": "Section",
  "number": "0.2",
  "title": "What are Differential Equations?",
  "body": " What are Differential Equations?     Differential equations   Intro to Differential Equations  In this video we will learn the big ideas of differential equations. We will specifically focus on two, the equation for exponential growth and for freefall of an object in gravity.    The laws of physics are generally written down as differential equations. Therefore, all of science and engineering use differential equations to some degree. Understanding differential equations is essential to understanding almost anything you will study in your science and engineering classes. You can think of mathematics as the language of science, and differential equations are one of the most important parts of this language as far as science and engineering are concerned. As an analogy, suppose all your classes from now on were given in Swahili. It would be important to first learn Swahili, or you would have a very tough time getting a good grade in your classes.  You saw many differential equations already without perhaps knowing about it. And you even solved simple differential equations when you took calculus. Let us see an example you may not have seen: Here is the dependent variable dependent variable and is the independent variable independent variable . Equation is a basic example of a differential equation differential equation . It is an example of a first order differential equation first order differential equation , since it involves only the first derivative of the dependent variable. This equation arises from Newton's law of cooling where the ambient temperature oscillates with time.    Solutions of differential equations   The Key Definitions of Differential Equations  Let's be a bit more careful with the definitions and ideas introduced in the first video. Along the way we will see a few different types of differential equations.    Solving the differential equation means finding in terms of . That is, we want to find a function of , which we call , such that when we plug , , and into , the equation holds; that is, the left hand side equals the right hand side. It is the same idea as it would be for a normal (algebraic) equation of just and . We claim that is a solution solution . How do we check? We simply plug into equation ! First we need to compute . We find that . Now let us compute the left-hand side of . Yay! We got precisely the right-hand side. But there is more! We claim is also a solution. Let us try, We plug into the left-hand side of  And it works yet again!  So there can be many different solutions. For this equation all solutions can be written in the form for some constant . Different constants will give different solutions, so there are really infinitely many possible solutions. See for the graph of a few of these solutions. We will see how we find these solutions a few lectures from now.   Few solutions of .    Solving differential equations can be quite hard. There is no general method that solves every differential equation. We will generally focus on how to get exact formulas for solutions of certain differential equations, but we will also spend a little bit of time on getting approximate solutions. And we will spend some time on understanding the equations without solving them.  Most of this book is dedicated to ordinary differential equations ordinary differential equation or ODEs ODE , that is, equations with only one independent variable, where derivatives are only with respect to this one variable. If there are several independent variables, we get partial differential equations partial differential equation or PDEs PDE .  Even for ODEs, which are very well understood, it is not a simple question of turning a crank to get answers. When you can find exact solutions, they are usually preferable to approximate solutions. It is important to understand how such solutions are found. Although in real applications you will leave much of the actual calculations to computers, you need to understand what they are doing. It is often necessary to simplify or transform your equations into something that a computer can understand and solve. You may even need to make certain assumptions and changes in your model to achieve this.  To be a successful engineer or scientist, you will be required to solve problems in your job that you never saw before. It is important to learn problem solving techniques, so that you may apply those techniques to new problems. A common mistake is to expect to learn some prescription for solving all the problems you will encounter in your later career. This course is no exception.    Differential equations in practice     So how do we use differential equations in science and engineering? First, we have some real-world problem real-world problem we wish to understand. We make some simplifying assumptions and create a mathematical model mathematical model . That is, we translate the real-world situation into a set of differential equations. Then we apply mathematics to get some sort of a mathematical solution mathematical solution . There is still something left to do. We have to interpret the results. We have to figure out what the mathematical solution says about the real-world problem we started with.  Learning how to formulate the mathematical model and how to interpret the results is what your physics and engineering classes do. In this course, we will focus mostly on the mathematical analysis. Sometimes we will work with simple real-world examples so that we have some intuition and motivation about what we are doing.  Let us look at an example of this process. One of the most basic differential equations is the standard exponential growth model exponential growth model . Let denote the population of some bacteria on a Petri dish. We assume that there is enough food and enough space. Then the rate of growth of bacteria is proportional to the population—a large population grows quicker. Let denote time (say in seconds) and the population. Our model is for some positive constant .    Suppose there are 100 bacteria at time 0 and 200 bacteria 10 seconds later. How many bacteria will there be 1 minute from time 0 (in 60 seconds)?  First we need to solve the equation. We claim that a solution is given by where is a constant. Let us try: And it really is a solution.  OK, now what? We do not know , and we do not know . But we know something. We know , and we know . Let us plug these conditions in and see what happens. Therefore, or . So At one minute, , the population is . See .   Bacteria growth in the first 60 seconds.    Let us talk about the interpretation of the results. Does our solution mean that there must be exactly 6400 bacteria on the plate at 60s? No! We made assumptions that might not be true exactly, just approximately. If our assumptions are reasonable, then there will be approximately 6400 bacteria. Also, in real life is a discrete quantity, not a real number. However, our model has no problem saying that for example at 61 seconds, .    Normally, the in is known, and we want to solve the equation for different initial conditions initial condition . What does that mean? Take for simplicity. Suppose we want to solve the equation subject to (the initial condition). Then the solution turns out to be (exercise)   We call  the general solution general solution , as every solution of the equation can be written in this form for some constant . We need an initial condition to find out what is, in order to find the particular solution particular solution we are looking for. Generally, when we say particular solution, we just mean some solution.    Four fundamental equations  A few equations appear often and it is useful to just memorize what their solutions are. Let us call them the four fundamental equations four fundamental equations . Their solutions are reasonably easy to guess by recalling properties of exponentials, sines, and cosines. They are also simple to check, which is something that you should always do. No need to wonder if you remembered the solution correctly.  First such equation is for some constant . Here is the dependent and the independent variable. The general solution for this equation is We saw above that this function is a solution, although we used different variable names.  Next, for some constant . The general solution for this equation is     Check that the given is really a solution to the equation.    Next, take the second order differential equation second order differential equation  for some constant . The general solution for this equation is Since the equation is a second order differential equation, we have two constants in our general solution.    Check that the given is really a solution to the equation.    Finally, consider the second order differential equation for some constant . The general solution for this equation is or   For those that do not know, and are defined by They are called the hyperbolic cosine hyperbolic cosine and hyperbolic sine hyperbolic sine . These functions are sometimes easier to work with than exponentials. They have some nice familiar properties such as , , and (no that is not a typo) and .    Check that both forms of the given are really solutions to the equation.      In equations of higher order, you get more constants you must solve for to get a particular solution. The equation has the general solution ; simply integrate twice and don't forget about the constant of integration. Consider the initial conditions and . We plug in our general solution and solve for the constants: In other words, is the particular solution we seek.    An interesting note about : The graph of is the exact shape of a hanging chain. This shape is called a catenary catenary . Contrary to popular belief this is not a parabola. If you invert the graph of , it is also the ideal arch for supporting its weight. For example, the gateway arch in Saint Louis is an inverted graph of —if it were just a parabola it might fall. The formula used in the design is inscribed inside the arch:     Exercises    Show that is a solution to .      Show that is not a solution to .      Is a solution to ? Justify.    Yes, since by a trig identity.      Let . Now try a solution of the form for some (unknown) constant . Is this a solution for some ? If so, find all such .    Plugging into the DE and simplifying This is a solution when or .      Verify that is a solution to . Find to solve for the initial condition .           Verify that is a solution to . Find and to solve for the initial conditions and .     ,       Find a solution to using your knowledge of derivatives of functions that you know from basic calculus.     or .      Solve:                          a) b)  c)  d) Here , so the general solution is Plugging in the initial conditions we find , therefore .      Is there a solution to , such that ?    Only the trivial solution .      The population of city X was 100 thousand 20 years ago, and the population of city X was 120 thousand 10 years ago. Assuming constant growth, you can use the exponential population model (like for the bacteria). What do you estimate the population is now?    Set the time 20 years ago as , 10 years ago as , and now as . Using , and and , then       Suppose that a football coach gets a salary of one million dollars now, and a raise of every year (so exponential model, like population of bacteria). Let be the salary in millions of dollars, and is time in years.    What is and .    Approximately how many years will it take for the salary to be 10 million.    Approximately how many years will it take for the salary to be 20 million.    Approximately how many years will it take for the salary to be 30 million.      a) ,  b) years c) years d) years      Show that is a solution to .    Compute and . Then .      Is a solution to ? Justify.    Yes.      Let . Try a solution of the form . Is this a solution for some ? If so, find all such .     is a solution for and .      Verify that is a solution to . Find and so that satisfies and .     ,       Solve and .           Solve:                          a)  b)  c)  d)      "
},
{
  "id": "introode",
  "level": "2",
  "url": "introde_section.html#introode",
  "type": "Video",
  "number": "0.2.1",
  "title": "Intro to Differential Equations.",
  "body": " Intro to Differential Equations  In this video we will learn the big ideas of differential equations. We will specifically focus on two, the equation for exponential growth and for freefall of an object in gravity.   "
},
{
  "id": "keydefs",
  "level": "2",
  "url": "introde_section.html#keydefs",
  "type": "Video",
  "number": "0.2.2",
  "title": "The Key Definitions of Differential Equations.",
  "body": " The Key Definitions of Differential Equations  Let's be a bit more careful with the definitions and ideas introduced in the first video. Along the way we will see a few different types of differential equations.   "
},
{
  "id": "intro_plotsfig",
  "level": "2",
  "url": "introde_section.html#intro_plotsfig",
  "type": "Figure",
  "number": "1",
  "title": "",
  "body": " Few solutions of .   "
},
{
  "id": "introde_section-5-6",
  "level": "2",
  "url": "introde_section.html#introde_section-5-6",
  "type": "Example",
  "number": "0.2.1",
  "title": "",
  "body": "  Suppose there are 100 bacteria at time 0 and 200 bacteria 10 seconds later. How many bacteria will there be 1 minute from time 0 (in 60 seconds)?  First we need to solve the equation. We claim that a solution is given by where is a constant. Let us try: And it really is a solution.  OK, now what? We do not know , and we do not know . But we know something. We know , and we know . Let us plug these conditions in and see what happens. Therefore, or . So At one minute, , the population is . See .   Bacteria growth in the first 60 seconds.    Let us talk about the interpretation of the results. Does our solution mean that there must be exactly 6400 bacteria on the plate at 60s? No! We made assumptions that might not be true exactly, just approximately. If our assumptions are reasonable, then there will be approximately 6400 bacteria. Also, in real life is a discrete quantity, not a real number. However, our model has no problem saying that for example at 61 seconds, .   "
},
{
  "id": "subsection_fourfundamental-5",
  "level": "2",
  "url": "introde_section.html#subsection_fourfundamental-5",
  "type": "Exercise",
  "number": "0.2.1",
  "title": "",
  "body": "  Check that the given is really a solution to the equation.   "
},
{
  "id": "subsection_fourfundamental-7",
  "level": "2",
  "url": "introde_section.html#subsection_fourfundamental-7",
  "type": "Exercise",
  "number": "0.2.2",
  "title": "",
  "body": "  Check that the given is really a solution to the equation.   "
},
{
  "id": "subsection_fourfundamental-10",
  "level": "2",
  "url": "introde_section.html#subsection_fourfundamental-10",
  "type": "Exercise",
  "number": "0.2.3",
  "title": "",
  "body": "  Check that both forms of the given are really solutions to the equation.   "
},
{
  "id": "subsection_fourfundamental-11",
  "level": "2",
  "url": "introde_section.html#subsection_fourfundamental-11",
  "type": "Example",
  "number": "0.2.2",
  "title": "",
  "body": "  In equations of higher order, you get more constants you must solve for to get a particular solution. The equation has the general solution ; simply integrate twice and don't forget about the constant of integration. Consider the initial conditions and . We plug in our general solution and solve for the constants: In other words, is the particular solution we seek.   "
},
{
  "id": "introde_section-7-2",
  "level": "2",
  "url": "introde_section.html#introde_section-7-2",
  "type": "Exercise",
  "number": "0.2.4",
  "title": "",
  "body": "  Show that is a solution to .   "
},
{
  "id": "introde_section-7-3",
  "level": "2",
  "url": "introde_section.html#introde_section-7-3",
  "type": "Exercise",
  "number": "0.2.5",
  "title": "",
  "body": "  Show that is not a solution to .   "
},
{
  "id": "introde_section-7-4",
  "level": "2",
  "url": "introde_section.html#introde_section-7-4",
  "type": "Exercise",
  "number": "0.2.6",
  "title": "",
  "body": "  Is a solution to ? Justify.    Yes, since by a trig identity.   "
},
{
  "id": "introde_section-7-5",
  "level": "2",
  "url": "introde_section.html#introde_section-7-5",
  "type": "Exercise",
  "number": "0.2.7",
  "title": "",
  "body": "  Let . Now try a solution of the form for some (unknown) constant . Is this a solution for some ? If so, find all such .    Plugging into the DE and simplifying This is a solution when or .   "
},
{
  "id": "introde_section-7-6",
  "level": "2",
  "url": "introde_section.html#introde_section-7-6",
  "type": "Exercise",
  "number": "0.2.8",
  "title": "",
  "body": "  Verify that is a solution to . Find to solve for the initial condition .        "
},
{
  "id": "introde_section-7-7",
  "level": "2",
  "url": "introde_section.html#introde_section-7-7",
  "type": "Exercise",
  "number": "0.2.9",
  "title": "",
  "body": "  Verify that is a solution to . Find and to solve for the initial conditions and .     ,    "
},
{
  "id": "introde_section-7-8",
  "level": "2",
  "url": "introde_section.html#introde_section-7-8",
  "type": "Exercise",
  "number": "0.2.10",
  "title": "",
  "body": "  Find a solution to using your knowledge of derivatives of functions that you know from basic calculus.     or .   "
},
{
  "id": "introde_section-7-9",
  "level": "2",
  "url": "introde_section.html#introde_section-7-9",
  "type": "Exercise",
  "number": "0.2.11",
  "title": "",
  "body": "  Solve:                          a) b)  c)  d) Here , so the general solution is Plugging in the initial conditions we find , therefore .   "
},
{
  "id": "introde_section-7-10",
  "level": "2",
  "url": "introde_section.html#introde_section-7-10",
  "type": "Exercise",
  "number": "0.2.12",
  "title": "",
  "body": "  Is there a solution to , such that ?    Only the trivial solution .   "
},
{
  "id": "introde_section-7-11",
  "level": "2",
  "url": "introde_section.html#introde_section-7-11",
  "type": "Exercise",
  "number": "0.2.13",
  "title": "",
  "body": "  The population of city X was 100 thousand 20 years ago, and the population of city X was 120 thousand 10 years ago. Assuming constant growth, you can use the exponential population model (like for the bacteria). What do you estimate the population is now?    Set the time 20 years ago as , 10 years ago as , and now as . Using , and and , then    "
},
{
  "id": "introde_section-7-12",
  "level": "2",
  "url": "introde_section.html#introde_section-7-12",
  "type": "Exercise",
  "number": "0.2.14",
  "title": "",
  "body": "  Suppose that a football coach gets a salary of one million dollars now, and a raise of every year (so exponential model, like population of bacteria). Let be the salary in millions of dollars, and is time in years.    What is and .    Approximately how many years will it take for the salary to be 10 million.    Approximately how many years will it take for the salary to be 20 million.    Approximately how many years will it take for the salary to be 30 million.      a) ,  b) years c) years d) years   "
},
{
  "id": "introde_section-7-13",
  "level": "2",
  "url": "introde_section.html#introde_section-7-13",
  "type": "Exercise",
  "number": "0.2.15",
  "title": "",
  "body": "  Show that is a solution to .    Compute and . Then .   "
},
{
  "id": "introde_section-7-14",
  "level": "2",
  "url": "introde_section.html#introde_section-7-14",
  "type": "Exercise",
  "number": "0.2.16",
  "title": "",
  "body": "  Is a solution to ? Justify.    Yes.   "
},
{
  "id": "introde_section-7-15",
  "level": "2",
  "url": "introde_section.html#introde_section-7-15",
  "type": "Exercise",
  "number": "0.2.17",
  "title": "",
  "body": "  Let . Try a solution of the form . Is this a solution for some ? If so, find all such .     is a solution for and .   "
},
{
  "id": "introde_section-7-16",
  "level": "2",
  "url": "introde_section.html#introde_section-7-16",
  "type": "Exercise",
  "number": "0.2.18",
  "title": "",
  "body": "  Verify that is a solution to . Find and so that satisfies and .     ,    "
},
{
  "id": "introde_section-7-17",
  "level": "2",
  "url": "introde_section.html#introde_section-7-17",
  "type": "Exercise",
  "number": "0.2.19",
  "title": "",
  "body": "  Solve and .        "
},
{
  "id": "introde_section-7-18",
  "level": "2",
  "url": "introde_section.html#introde_section-7-18",
  "type": "Exercise",
  "number": "0.2.20",
  "title": "",
  "body": "  Solve:                          a)  b)  c)  d)    "
},
{
  "id": "classification_section",
  "level": "1",
  "url": "classification_section.html",
  "type": "Section",
  "number": "0.3",
  "title": "Classification of differential equations",
  "body": " Classification of differential equations   There are many types of differential equations, and we classify them into different categories based on their properties. Let us quickly go over the most basic classification. We already saw the distinction between ordinary and partial differential equations:     Ordinary differential equations  Ordinary differential equations ODE or (ODE) are equations where the derivatives are taken with respect to only one variable. That is, there is only one independent variable.     Partial differential equations  Partial differential equations PDE or (PDE) are equations that depend on partial derivatives of several variables. That is, there are several independent variables.    Let us see some examples of ordinary differential equations: And of partial differential equations:   If there are several equations working together, we have a so-called system of differential equations system of differential equations . For example, is a simple system of ordinary differential equations. Maxwell's equations Maxwell's equations for electromagnetics, are a system of partial differential equations. The divergence operator and the curl operator can be written out in partial derivatives of the functions involved in the , , and variables.  The next bit of information is the order order of the equation (or system). The order is simply the order of the largest derivative that appears. If the highest derivative that appears is the first derivative, the equation is of first order. If the highest derivative that appears is the second derivative, then the equation is of second order. For example, Newton's law of cooling above is a first order equation, while the mechanical vibrations equation is a second order equation. The equation governing transversal vibrations in a beam, is a fourth order partial differential equation. It is fourth order as at least one derivative is the fourth derivative. It does not matter that the derivative in is only of second order.  In the first chapter, we will start attacking first order ordinary differential equations, that is, equations of the form . In general, lower order equations are easier to work with and have simpler behavior, which is why we start with them.  We also distinguish how the dependent variables appear in the equation (or system). In particular, we say an equation is linear linear equation if the dependent variable (or variables) and their derivatives appear linearly, that is only as first powers, they are not multiplied together, and no other functions of the dependent variables appear. In other words, the equation is a sum of terms, where each term is some function of the independent variables or some function of the independent variables multiplied by a dependent variable or its derivative. Otherwise, the equation is called nonlinear nonlinear equation . For example, an ordinary differential equation is linear if it can be put into the form The functions , , ..., are called the coefficients coefficients . The equation is allowed to depend arbitrarily on the independent variable. So is still a linear equation as and its derivatives only appear linearly.  All the equations and systems above as examples are linear. It may not be immediately obvious for Maxwell's equations unless you write out the divergence and curl in terms of partial derivatives. Let us see some nonlinear equations. For example Burger's equation Burger's equation , is a nonlinear second order partial differential equation. It is nonlinear because and are multiplied together. The equation is a nonlinear first order differential equation as there is a second power of the dependent variable .  A linear equation may further be called homogeneous homogeneous if all terms depend on the dependent variable. That is, if no term is a function of the independent variables alone. Otherwise, the equation is called nonhomogeneous nonhomogeneous or inhomogeneous inhomogeneous . For example, the exponential growth equation, the wave equation, or the transport equation above are homogeneous. The mechanical vibrations equation above is nonhomogeneous as long as is not the zero function. Similarly, if the ambient temperature is nonzero, Newton's law of cooling is nonhomogeneous. A homogeneous linear ODE can be put into the form Compare to and notice there is no function .  If the coefficients of a linear equation are actually constant functions, then the equation is said to have constant coefficients constant coefficient . The coefficients are the functions multiplying the dependent variable(s) or one of its derivatives, not the function standing alone. A constant coefficient nonhomogeneous ODE is an equation of the form where are all constants, but may depend on the independent variable . The mechanical vibrations equation above is a constant coefficient nonhomogeneous second order ODE. The same nomenclature applies to PDEs, so the transport equation, heat equation and wave equation are all examples of constant coefficient linear PDEs.  Finally, an equation (or system) is called autonomous autonomous if the equation does not depend on the independent variable. For autonomous ordinary differential equations, the independent variable is then thought of as time. Autonomous equation means an equation that does not change with time. For example, Newton's law of cooling is autonomous, so is equation . On the other hand, mechanical vibrations or are not autonomous.    Exercises    Classify the following equations. Are they ODE or PDE? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant coefficient? If it is an ODE, is it autonomous?                                    a) ODE, equation, second order, linear, non homogeneous, non constant coefficient, non autonomous. b) PDE, Equation, first order, linear, non homogeneous, constant coefficient. c) ODE, system, second order, linear, homogeneous, constant coefficient, autonomous. Note: independent variable is t here. d) PDE, equation, second order, non linear. e) ODE, equation, second order, non linear, non autonomous. f) ODE, equation, fourth order, linear, homogeneous, constant coefficient, autonomous.       If is a vector, we have the divergence and curl . Notice that curl of a vector is still a vector. Write out Maxwell's equations in terms of partial derivatives and classify the system.     PDE, system, first order, linear, nonhomogeneous, constant coefficient, autonomous.      Suppose is a linear function, that is, for constants and . What is the classification of equations of the form .    ODE, linear, homogeneous, constant coefficient, autonomous.      Write down an explicit example of a third order, linear, nonconstant coefficient, nonautonomous, nonhomogeneous system of two ODE such that every derivative that could appear, does appear.    An example would be .      Classify the following equations. Are they ODE or PDE? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant coefficient? If it is an ODE, is it autonomous?                                    a) PDE, equation, second order, linear, nonhomogeneous, constant coefficient. b) ODE, equation, first order, linear, nonhomogeneous, not constant coefficient, not autonomous. c) ODE, equation, seventh order, linear, homogeneous, constant coefficient, autonomous. d) ODE, equation, second order, linear, nonhomogeneous, constant coefficient, autonomous. e) ODE, system, second order, nonlinear. f) PDE, equation, second order, nonlinear.      Write down the general zero th order linear ordinary differential equation. Write down the general solution.    equation: , solution: .      For which is linear. Hint: there are two answers.     or      "
},
{
  "id": "classification_section-3-2",
  "level": "2",
  "url": "classification_section.html#classification_section-3-2",
  "type": "Exercise",
  "number": "0.3.1",
  "title": "",
  "body": "  Classify the following equations. Are they ODE or PDE? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant coefficient? If it is an ODE, is it autonomous?                                    a) ODE, equation, second order, linear, non homogeneous, non constant coefficient, non autonomous. b) PDE, Equation, first order, linear, non homogeneous, constant coefficient. c) ODE, system, second order, linear, homogeneous, constant coefficient, autonomous. Note: independent variable is t here. d) PDE, equation, second order, non linear. e) ODE, equation, second order, non linear, non autonomous. f) ODE, equation, fourth order, linear, homogeneous, constant coefficient, autonomous.    "
},
{
  "id": "classification_section-3-3",
  "level": "2",
  "url": "classification_section.html#classification_section-3-3",
  "type": "Exercise",
  "number": "0.3.2",
  "title": "",
  "body": "  If is a vector, we have the divergence and curl . Notice that curl of a vector is still a vector. Write out Maxwell's equations in terms of partial derivatives and classify the system.     PDE, system, first order, linear, nonhomogeneous, constant coefficient, autonomous.   "
},
{
  "id": "classification_section-3-4",
  "level": "2",
  "url": "classification_section.html#classification_section-3-4",
  "type": "Exercise",
  "number": "0.3.3",
  "title": "",
  "body": "  Suppose is a linear function, that is, for constants and . What is the classification of equations of the form .    ODE, linear, homogeneous, constant coefficient, autonomous.   "
},
{
  "id": "classification_section-3-5",
  "level": "2",
  "url": "classification_section.html#classification_section-3-5",
  "type": "Exercise",
  "number": "0.3.4",
  "title": "",
  "body": "  Write down an explicit example of a third order, linear, nonconstant coefficient, nonautonomous, nonhomogeneous system of two ODE such that every derivative that could appear, does appear.    An example would be .   "
},
{
  "id": "classification_section-3-6",
  "level": "2",
  "url": "classification_section.html#classification_section-3-6",
  "type": "Exercise",
  "number": "0.3.5",
  "title": "",
  "body": "  Classify the following equations. Are they ODE or PDE? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant coefficient? If it is an ODE, is it autonomous?                                    a) PDE, equation, second order, linear, nonhomogeneous, constant coefficient. b) ODE, equation, first order, linear, nonhomogeneous, not constant coefficient, not autonomous. c) ODE, equation, seventh order, linear, homogeneous, constant coefficient, autonomous. d) ODE, equation, second order, linear, nonhomogeneous, constant coefficient, autonomous. e) ODE, system, second order, nonlinear. f) PDE, equation, second order, nonlinear.   "
},
{
  "id": "classification_section-3-7",
  "level": "2",
  "url": "classification_section.html#classification_section-3-7",
  "type": "Exercise",
  "number": "0.3.6",
  "title": "",
  "body": "  Write down the general zero th order linear ordinary differential equation. Write down the general solution.    equation: , solution: .   "
},
{
  "id": "classification_section-3-8",
  "level": "2",
  "url": "classification_section.html#classification_section-3-8",
  "type": "Exercise",
  "number": "0.3.7",
  "title": "",
  "body": "  For which is linear. Hint: there are two answers.     or    "
},
{
  "id": "integralsols_section",
  "level": "1",
  "url": "integralsols_section.html",
  "type": "Section",
  "number": "1.1",
  "title": "Integrals as solutions",
  "body": " Integrals as solutions   A first order ODE is an equation of the form or just In general, there is no simple formula or procedure one can follow to find solutions. In the next few lectures we will look at special cases where solutions are not difficult to obtain. In this section, let us assume that is a function of alone, that is, the equation is We could just integrate (antidifferentiate) both sides with respect to . that is This is actually the general solution. So to solve , we find some antiderivative of and then we add an arbitrary constant to get the general solution.  Now is a good time to discuss a point about calculus notation and terminology. Calculus textbooks muddy the waters by talking about the integral as primarily the so-called indefinite integral. The indefinite integral indefinite integral is really the antiderivative antiderivative (in fact the whole one-parameter family of antiderivatives). There really exists only one integral and that is the definite integral. The only reason for the indefinite integral notation is that we can always write an antiderivative as a (definite) integral. That is, by the fundamental theorem of calculus we can always write as Hence the terminology to integrate integrate when we may really mean to antidifferentiate antidifferentiate . Integration is just one way to compute the antiderivative (and it is a way that always works, see the following examples). Integration is defined as the area under the graph, it only happens to also compute antiderivatives. For sake of consistency, we will keep using the indefinite integral notation when we want an antiderivative, and you should always think of the definite integral as a way to write it.    Find the general solution of .  Elementary calculus tells us that the general solution must be . Let us check by differentiating: . We got precisely our equation back.    Normally, we also have an initial condition such as for some two numbers and ( is usually 0, but not always). We can then write the solution as a definite integral in a nice way. Suppose our problem is , . Then the solution is Let us check! We compute , via the fundamental theorem of calculus, and by Jupiter, is a solution. Is it the one satisfying the initial condition? Well, . It is!  Do note that the definite integral and the indefinite integral (antidifferentiation) are completely different beasts. The definite integral always evaluates to a number. Therefore, is a formula we can plug into the calculator or a computer, and it will be happy to calculate specific values for us. We will easily be able to plot the solution and work with it just like with any other function. It is not so crucial to always find a closed form for the antiderivative.    Solve   By the preceding discussion, the solution must be Here is a good way to make fun of your friends taking second semester calculus. Tell them to find the closed form solution. Ha ha ha (bad math joke). It is not possible (in closed form). There is absolutely nothing wrong with writing the solution as a definite integral. This particular integral is in fact very important in statistics.    Using this method, we can also solve equations of the form Let us write the equation in Leibniz notation Leibniz notation . Now we use the inverse function theorem from calculus to switch the roles of and to obtain What we are doing seems like algebra with and . It is tempting to just do algebra with and as if they were numbers. And in this case it does work. Be careful, however, as this sort of hand-waving calculation can lead to trouble, especially when more than one independent variable is involved. At this point, we can simply integrate, Finally, we try to solve for .    Previously, we guessed (for some ) has the solution . We can now find the solution without guessing. First we note that is a solution. Henceforth, we assume . We write We integrate to obtain where is an arbitrary constant. Now we solve for (actually for ). If we replace with an arbitrary constant , we can get rid of the absolute value bars (which we can do as was arbitrary). In this way, we also incorporate the solution . We get the same general solution as we guessed before, .      Find the general solution of .  First we note that is a solution. We can now assume that . Write We integrate to get We solve for . So the general solution is Note the singularities of the solution. If for example , then the solution blows up as we approach . See . Generally, it is hard to tell from just looking at the equation itself how the solution is going to behave. The equation is very nice and defined everywhere, but the solution is only defined on some interval or . Usually when this happens we only consider one of these the solution. For example if we impose a condition , then the solution is , and we would consider this solution only for on the interval . In the figure, it is the left side of the graph.   Plot of .      Classical problems leading to differential equations solvable by integration are problems dealing with velocity velocity , acceleration acceleration and distance distance . You have surely seen these problems before in your calculus class.    Suppose a car drives at a speed meters per second, where is time in seconds. How far did the car get in 2 seconds (starting at )? How far in 10 seconds?  Let denote the distance the car traveled. The equation is We just integrate this equation to get that We still need to figure out . We know that when , then . That is, . So Thus and Now we just plug in to get where the car is at 2 and at 10 seconds. We obtain       Suppose that the car accelerates at a rate of . At time the car is at the 1 meter mark and is traveling at 10 . Where is the car at time ?  Well this is actually a second order problem. If is the distance traveled, then is the velocity, and is the acceleration. The equation with initial conditions is What if we say . Then we have the problem Once we solve for , we can integrate and find . Do this as an exercise.      Exercises    Solve for .    Integrating with respect to we get . . \\[ y=\\frac{x^3}{3}+\\frac{x^2}{2}+\\frac{13}{6} \\]      Solve for .           Solve for .           Solve for .    Writing as and integrating we get \\[ x+c=\\frac{y^{-2}}{-2 } \\] \\[ y=\\sqrt{\\frac{1}{-2x-c}}, y(0)=\\sqrt{\\frac{1}{-c}}=1\\rightarrow c=-1 \\] \\[ \\Rightarrow y=\\sqrt{\\frac{1}{1-2x}} \\]      Solve for .    \\[ \\int \\frac{1}{(y+1)(y-1)}dy=\\frac{1}{2}\\int \\frac{1}{y-1}-\\frac{1}{y+1}dy=\\frac{1}{2}\\ln\\left(\\frac{y-1}{y+1}\\right)=x+c \\] \\[ y(x)=\\frac{ce^{2x}+1}{1-ce^{2x}}, y(0)=\\frac{c+1}{1-c}=3\\rightarrow\\quad c=\\frac{1}{2} \\] \\[ \\Rightarrow y=\\frac{e^{2x}+2}{2-e^{2x}} \\]      Solve for .           Solve for , .           A spaceship is traveling at the speed  ( is time in seconds). It is pointing directly away from earth and at time it is 1000 kilometers from earth. How far from earth is it at one minute from time ?     km      Solve , . It is OK to leave your answer as a definite integral.           A dropped ball accelerates downwards at a constant rate meters per second squared. Set up the differential equation for the height above ground in meters. Then supposing meters, how long does it take for the ball to hit the ground.     the ball is ' dropped ', so . \\[ h=-\\frac{9.8}{2}t^2+h_0, h(0)=h_0=100 \\] \\[ h=-\\frac{9.8}{2}t^2+100\\rightarrow\\quad h(t_g)=0\\rightarrow\\quad t_g^2=\\frac{200}{9.8}\\rightarrow\\quad t_g=4.52 \\rm s \\]      Find the general solution of , and then .           Solve and .           Solve , .           Solve , .           Sid is in a car traveling at speed miles per hour away from Las Vegas, where is in hours. At , Sid is 10 miles away from Vegas. How far from Vegas is Sid 2 hours later?    170      Solve , , where is a positive integer. Hint: You have to consider different cases.    If , then . If , then .      The rate of change of the volume of a snowball that is melting is proportional to the surface area of the snowball. Suppose the snowball is perfectly spherical. The volume (in centimeters cubed) of a ball of radius centimeters is . The surface area is . Set up the differential equation for how the radius is changing. Then, suppose that at time minutes, the radius is 10 centimeters. After 5 minutes, the radius is 8 centimeters. At what time will the snowball be completely melted?    The equation is for some constant . The snowball will be completely melted in 25 minutes from time .      Find the general solution to . How many distinct constants do you need?     , so 4 constants.     "
},
{
  "id": "integralsols_section-2-3",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-2-3",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  Find the general solution of .  Elementary calculus tells us that the general solution must be . Let us check by differentiating: . We got precisely our equation back.   "
},
{
  "id": "integralsols_section-2-6",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-2-6",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  Solve   By the preceding discussion, the solution must be Here is a good way to make fun of your friends taking second semester calculus. Tell them to find the closed form solution. Ha ha ha (bad math joke). It is not possible (in closed form). There is absolutely nothing wrong with writing the solution as a definite integral. This particular integral is in fact very important in statistics.   "
},
{
  "id": "integralsols_section-2-8",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-2-8",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  Previously, we guessed (for some ) has the solution . We can now find the solution without guessing. First we note that is a solution. Henceforth, we assume . We write We integrate to obtain where is an arbitrary constant. Now we solve for (actually for ). If we replace with an arbitrary constant , we can get rid of the absolute value bars (which we can do as was arbitrary). In this way, we also incorporate the solution . We get the same general solution as we guessed before, .   "
},
{
  "id": "integralsols_section-2-9",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-2-9",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  Find the general solution of .  First we note that is a solution. We can now assume that . Write We integrate to get We solve for . So the general solution is Note the singularities of the solution. If for example , then the solution blows up as we approach . See . Generally, it is hard to tell from just looking at the equation itself how the solution is going to behave. The equation is very nice and defined everywhere, but the solution is only defined on some interval or . Usually when this happens we only consider one of these the solution. For example if we impose a condition , then the solution is , and we would consider this solution only for on the interval . In the figure, it is the left side of the graph.   Plot of .     "
},
{
  "id": "integralsols_section-2-11",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-2-11",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "  Suppose a car drives at a speed meters per second, where is time in seconds. How far did the car get in 2 seconds (starting at )? How far in 10 seconds?  Let denote the distance the car traveled. The equation is We just integrate this equation to get that We still need to figure out . We know that when , then . That is, . So Thus and Now we just plug in to get where the car is at 2 and at 10 seconds. We obtain    "
},
{
  "id": "integralsols_section-2-12",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-2-12",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  Suppose that the car accelerates at a rate of . At time the car is at the 1 meter mark and is traveling at 10 . Where is the car at time ?  Well this is actually a second order problem. If is the distance traveled, then is the velocity, and is the acceleration. The equation with initial conditions is What if we say . Then we have the problem Once we solve for , we can integrate and find . Do this as an exercise.   "
},
{
  "id": "integralsols_section-3-2",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-2",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  Solve for .    Integrating with respect to we get . . \\[ y=\\frac{x^3}{3}+\\frac{x^2}{2}+\\frac{13}{6} \\]   "
},
{
  "id": "integralsols_section-3-3",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-3",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  Solve for .        "
},
{
  "id": "integralsols_section-3-4",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-4",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": "  Solve for .        "
},
{
  "id": "integralsols_section-3-5",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-5",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": "  Solve for .    Writing as and integrating we get \\[ x+c=\\frac{y^{-2}}{-2 } \\] \\[ y=\\sqrt{\\frac{1}{-2x-c}}, y(0)=\\sqrt{\\frac{1}{-c}}=1\\rightarrow c=-1 \\] \\[ \\Rightarrow y=\\sqrt{\\frac{1}{1-2x}} \\]   "
},
{
  "id": "integralsols_section-3-6",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-6",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "",
  "body": "  Solve for .    \\[ \\int \\frac{1}{(y+1)(y-1)}dy=\\frac{1}{2}\\int \\frac{1}{y-1}-\\frac{1}{y+1}dy=\\frac{1}{2}\\ln\\left(\\frac{y-1}{y+1}\\right)=x+c \\] \\[ y(x)=\\frac{ce^{2x}+1}{1-ce^{2x}}, y(0)=\\frac{c+1}{1-c}=3\\rightarrow\\quad c=\\frac{1}{2} \\] \\[ \\Rightarrow y=\\frac{e^{2x}+2}{2-e^{2x}} \\]   "
},
{
  "id": "integralsols_section-3-7",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-7",
  "type": "Exercise",
  "number": "1.1.6",
  "title": "",
  "body": "  Solve for .        "
},
{
  "id": "integralsols_section-3-8",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-8",
  "type": "Exercise",
  "number": "1.1.7",
  "title": "",
  "body": "  Solve for , .        "
},
{
  "id": "integralsols_section-3-9",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-9",
  "type": "Exercise",
  "number": "1.1.8",
  "title": "",
  "body": "  A spaceship is traveling at the speed  ( is time in seconds). It is pointing directly away from earth and at time it is 1000 kilometers from earth. How far from earth is it at one minute from time ?     km   "
},
{
  "id": "integralsols_section-3-10",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-10",
  "type": "Exercise",
  "number": "1.1.9",
  "title": "",
  "body": "  Solve , . It is OK to leave your answer as a definite integral.        "
},
{
  "id": "integralsols_section-3-11",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-11",
  "type": "Exercise",
  "number": "1.1.10",
  "title": "",
  "body": "  A dropped ball accelerates downwards at a constant rate meters per second squared. Set up the differential equation for the height above ground in meters. Then supposing meters, how long does it take for the ball to hit the ground.     the ball is ' dropped ', so . \\[ h=-\\frac{9.8}{2}t^2+h_0, h(0)=h_0=100 \\] \\[ h=-\\frac{9.8}{2}t^2+100\\rightarrow\\quad h(t_g)=0\\rightarrow\\quad t_g^2=\\frac{200}{9.8}\\rightarrow\\quad t_g=4.52 \\rm s \\]   "
},
{
  "id": "integralsols_section-3-12",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-12",
  "type": "Exercise",
  "number": "1.1.11",
  "title": "",
  "body": "  Find the general solution of , and then .        "
},
{
  "id": "integralsols_section-3-13",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-13",
  "type": "Exercise",
  "number": "1.1.12",
  "title": "",
  "body": "  Solve and .        "
},
{
  "id": "integralsols_section-3-14",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-14",
  "type": "Exercise",
  "number": "1.1.13",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "integralsols_section-3-15",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-15",
  "type": "Exercise",
  "number": "1.1.14",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "integralsols_section-3-16",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-16",
  "type": "Exercise",
  "number": "1.1.15",
  "title": "",
  "body": "  Sid is in a car traveling at speed miles per hour away from Las Vegas, where is in hours. At , Sid is 10 miles away from Vegas. How far from Vegas is Sid 2 hours later?    170   "
},
{
  "id": "integralsols_section-3-17",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-17",
  "type": "Exercise",
  "number": "1.1.16",
  "title": "",
  "body": "  Solve , , where is a positive integer. Hint: You have to consider different cases.    If , then . If , then .   "
},
{
  "id": "integralsols_section-3-18",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-18",
  "type": "Exercise",
  "number": "1.1.17",
  "title": "",
  "body": "  The rate of change of the volume of a snowball that is melting is proportional to the surface area of the snowball. Suppose the snowball is perfectly spherical. The volume (in centimeters cubed) of a ball of radius centimeters is . The surface area is . Set up the differential equation for how the radius is changing. Then, suppose that at time minutes, the radius is 10 centimeters. After 5 minutes, the radius is 8 centimeters. At what time will the snowball be completely melted?    The equation is for some constant . The snowball will be completely melted in 25 minutes from time .   "
},
{
  "id": "integralsols_section-3-19",
  "level": "2",
  "url": "integralsols_section.html#integralsols_section-3-19",
  "type": "Exercise",
  "number": "1.1.18",
  "title": "",
  "body": "  Find the general solution to . How many distinct constants do you need?     , so 4 constants.   "
},
{
  "id": "slopefields_section",
  "level": "1",
  "url": "slopefields_section.html",
  "type": "Section",
  "number": "1.2",
  "title": "Slope fields",
  "body": " Slope fields   As we said, the general first order equation we are studying looks like A lot of the time, we cannot simply solve these kinds of equations explicitly. It would be nice if we could at least figure out the shape and behavior of the solutions, or find approximate solutions.    Slope fields   Slope Fields  We can visually describe 1st order ODEs using Slope Fields, which allows us to encode the slope at any point. We will see that the concepts of differential equations, solutions, an initial conditions that we have thus far described analytically - i.e. with equations - all have a geometric parallel.    The equation gives you a slope at each point in the -plane. And this is the slope a solution would have at if its value was . In other words, is the slope of a solution whose graph runs through the point . At a point , we plot a short line with the slope . For example, if , then at point we draw a short line of slope . So, if is a solution and , then the equation mandates that . See .   The slope at .    To get an idea of how solutions behave, we draw such lines at lots of points in the plane, not just the point . We would ideally want to see the slope at every point, but that is just not possible. Usually we pick a grid of points fine enough so that it shows the behavior, but not too fine so that we can still recognize the individual lines. We call this picture the slope field slope field of the equation. See for the slope field of the equation . Usually in practice, one does not do this by hand, but has a computer do the drawing.  Suppose we are given a specific initial condition . A solution, that is, the graph of the solution, would be a curve that follows the slopes we drew. For a few sample solutions, see . It is easy to roughly sketch (or at least imagine) possible solutions in the slope field, just from looking at the slope field itself. You simply sketch a line that roughly fits the little line segments and goes through your initial condition.   Slope field of .     Slope field of with a graph of solutions satisfying , , and .    By looking at the slope field we get a lot of information about the behavior of solutions without having to solve the equation. For example, in we see what the solutions do when the initial conditions are , and . A small change in the initial condition causes quite different behavior. We see this behavior just from the slope field and imagining what solutions ought to do.  We see a different behavior for the equation . The slope field and a few solutions is in see . If we think of moving from left to right (perhaps is time and time is usually increasing), then we see that no matter what is, all solutions tend to zero as tends to infinity. Again that behavior is clear from simply looking at the slope field itself.   Slope field of with a graph of a few solutions.       Geogebra Activity: Use this Geogebra slope field plotter to explore the slope fields of several first order differential equations and play around with the solutions starting at different initial conditions.      Existence and uniqueness   Existence and Uniqueness  The key theorems that makes differential equations work are called Existence and Uniqueness theorems. They tell you, depending on the type of ODE, when solutions exist, and when they are unique. This is pretty crucial, because otherwise we'd never know whether it was worth bothering to try to find a solution, or if we found one whether to keep looking. We will see many Existence and Uniqueness theorems, but for now we are focusing specifically on 1st order ODEs.    We wish to ask two fundamental questions about the problem     Does a solution exist ?    Is the solution unique (if it exists)?    What do you think is the answer? The answer seems to be yes to both does it not? Well, pretty much. But there are cases when the answer to either question can be no.  Since generally the equations we encounter in applications come from real life situations, it seems logical that a solution always exists. It also has to be unique if we believe our universe is deterministic. If the solution does not exist, or if it is not unique, we have probably not devised the correct model. Hence, it is good to know when things go wrong and why.    Attempt to solve:   Integrate to find the general solution . The solution does not exist at . See . The equation may have been written as the seemingly harmless .   Slope field of .     Slope field of with two solutions satisfying .        Solve:   See . Note that is a solution. But another solution is the function     It is hard to tell by staring at the slope field that the solution is not unique. Is there any hope? Of course there is. We have the following theorem, known as Picard's theorem Named after the French mathematician Charles Émile Picard (1856–1941) .   Picard's theorem on existence and uniqueness  existence and uniqueness  Picard's theorem   If is continuous (as a function of two variables) and exists and is continuous near some , then a solution to exists (at least for in some small interval) and is unique.    Note that the problems , and , do not satisfy the hypothesis of the theorem. Even if we can use the theorem, we ought to be careful about this existence business. It is quite possible that the solution only exists for a short while.    For some constant , solve: \\[ y' = y^2, y(0) = A . \\]  We know how to solve this equation. First assume that , so is not equal to zero at least for some near 0. So , so , so . If , then so If , then is a solution.  For example, when the solution blows up at . Hence, the solution does not exist for all even if the equation is nice everywhere. The equation certainly looks nice.    For most of this course we will be interested in equations where existence and uniqueness holds, and in fact holds globally unlike for the equation .    Exercises  For problems 1-5, try sketching by hand first, then you can use the Slope Field plotter to see the answer: https:\/\/www.geogebra.org\/m\/z9c3ndaf .    Sketch slope field for . How do the solutions behave as grows? Can you guess a particular solution by looking at the slope field?      Sketch slope field for .      Sketch slope field for .      Match equations , , to slope fields. Justify.                     a) , b) , c) .       Match equations , , to slope fields. Justify.                     a) , b) , c) . Justification left to reader.      Is it possible to solve the equation for ? Justify.     is continuous near and exists and is continuous near , therefore by Picard's theorem a unique solution exists.      Is it possible to solve the equation for ? Is the solution unique? Justify.     is continuous near and exists and is continuous near , therefore by Picard's theorem a unique solution exists.       (challenging) Take , , where for all and . If the solution exists for all , can you say what happens to as goes to positive infinity? Explain.    The slope field for this equation would have slopes of at least one everywhere as for all and , so with an initial condition a solution would pass through the origin and keep on increasing forever. Thus as , .       (challenging) Take , .    Find two distinct solutions.    Explain why this does not violate Picard's theorem.      a) b) The DE cannot be written in the form , so Picard's theorem does not apply.      Suppose . What will the slope field look like, explain and sketch an example, if you know the following about :     does not depend on .     does not depend on .     for any number .     and for all .        Find a solution to , . Does Picard's theorem apply?     is a solution. is continuous but does not exist near , so Picard's theorem does not apply.      Take an equation for some function . Can you solve the problem for the initial condition , and if so what is the solution?            (challenging) Suppose is such that for every , is continuous and exists and is continuous for every and .    Guess a solution given the initial condition .    Can graphs of two solutions of the equation for different initial conditions ever intersect?    Given , what can you say about the solution. In particular, can for any ? Can for any ? Why or why not?      a)  b) No. As this satisfies the conditions of Picard's Theorem everywhere, there must be a unique solution from any given points. Thus two different solutions at the same point is not possible as that point can be taken as the initial condition. c) Since is one solution for a different initial condition, by part (b), any other solution cannot intersect that. Given that the initial condition here is below the line, the solution can never intersect with 1, thus for all .      Sketch the slope field of . Can you visually find the solution that satisfies ?      is a solution such that .      Is it possible to solve for ? Is the solution unique?    Yes a solution exists. The equation is where . The function is continuous and , which is also continuous near . So a solution exists and is unique. (In fact, is the solution.)      Is it possible to solve for ?    No, the equation is not defined at .       (tricky) Suppose Does , have a continuously differentiable solution? Does Picard apply? Why, or why not?    Picard does not apply as is not continuous at . The equation does not have a continuously differentiable solution. Suppose it did. Notice that . By the first derivative test, for small positive . But then for those we would have , so clearly the derivative cannot be continuous.      Consider an equation of the form for some continuous function , and an initial condition . Does a solution exist for all ? Why or why not?    The solution is , and this does indeed exist for every .     "
},
{
  "id": "first-slope",
  "level": "2",
  "url": "slopefields_section.html#first-slope",
  "type": "Video",
  "number": "1.2.1",
  "title": "Slope Fields.",
  "body": " Slope Fields  We can visually describe 1st order ODEs using Slope Fields, which allows us to encode the slope at any point. We will see that the concepts of differential equations, solutions, an initial conditions that we have thus far described analytically - i.e. with equations - all have a geometric parallel.   "
},
{
  "id": "X1_3_fig0",
  "level": "2",
  "url": "slopefields_section.html#X1_3_fig0",
  "type": "Figure",
  "number": "1.2",
  "title": "",
  "body": " The slope at .   "
},
{
  "id": "X1_3_fig1",
  "level": "2",
  "url": "slopefields_section.html#X1_3_fig1",
  "type": "Figure",
  "number": "1.3",
  "title": "",
  "body": " Slope field of .   "
},
{
  "id": "X1_3_fig2",
  "level": "2",
  "url": "slopefields_section.html#X1_3_fig2",
  "type": "Figure",
  "number": "1.4",
  "title": "",
  "body": " Slope field of with a graph of solutions satisfying , , and .   "
},
{
  "id": "X1_3_fig3",
  "level": "2",
  "url": "slopefields_section.html#X1_3_fig3",
  "type": "Figure",
  "number": "1.5",
  "title": "",
  "body": " Slope field of with a graph of a few solutions.   "
},
{
  "id": "slopefields_section-3-12",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-3-12",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": "   Geogebra Activity: Use this Geogebra slope field plotter to explore the slope fields of several first order differential equations and play around with the solutions starting at different initial conditions.   "
},
{
  "id": "first-existence",
  "level": "2",
  "url": "slopefields_section.html#first-existence",
  "type": "Video",
  "number": "1.2.2",
  "title": "Existence and Uniqueness.",
  "body": " Existence and Uniqueness  The key theorems that makes differential equations work are called Existence and Uniqueness theorems. They tell you, depending on the type of ODE, when solutions exist, and when they are unique. This is pretty crucial, because otherwise we'd never know whether it was worth bothering to try to find a solution, or if we found one whether to keep looking. We will see many Existence and Uniqueness theorems, but for now we are focusing specifically on 1st order ODEs.   "
},
{
  "id": "slopefields_section-4-7",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-4-7",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  Attempt to solve:   Integrate to find the general solution . The solution does not exist at . See . The equation may have been written as the seemingly harmless .   Slope field of .     Slope field of with two solutions satisfying .     "
},
{
  "id": "slopefields_section-4-8",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-4-8",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Solve:   See . Note that is a solution. But another solution is the function    "
},
{
  "id": "slope_picardthm",
  "level": "2",
  "url": "slopefields_section.html#slope_picardthm",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "Picard’s theorem on existence and uniqueness.",
  "body": " Picard's theorem on existence and uniqueness  existence and uniqueness  Picard's theorem   If is continuous (as a function of two variables) and exists and is continuous near some , then a solution to exists (at least for in some small interval) and is unique.   "
},
{
  "id": "slopefields_section-4-12",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-4-12",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  For some constant , solve: \\[ y' = y^2, y(0) = A . \\]  We know how to solve this equation. First assume that , so is not equal to zero at least for some near 0. So , so , so . If , then so If , then is a solution.  For example, when the solution blows up at . Hence, the solution does not exist for all even if the equation is nice everywhere. The equation certainly looks nice.   "
},
{
  "id": "slopefields_section-5-3",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-3",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "  Sketch slope field for . How do the solutions behave as grows? Can you guess a particular solution by looking at the slope field?   "
},
{
  "id": "slopefields_section-5-4",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-4",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "  Sketch slope field for .   "
},
{
  "id": "slopefields_section-5-5",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-5",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": "  Sketch slope field for .   "
},
{
  "id": "slopefields_section-5-6",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-6",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": "  Match equations , , to slope fields. Justify.                     a) , b) , c) .    "
},
{
  "id": "slopefields_section-5-7",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-7",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": "  Match equations , , to slope fields. Justify.                     a) , b) , c) . Justification left to reader.   "
},
{
  "id": "slopefields_section-5-8",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-8",
  "type": "Exercise",
  "number": "1.2.6",
  "title": "",
  "body": "  Is it possible to solve the equation for ? Justify.     is continuous near and exists and is continuous near , therefore by Picard's theorem a unique solution exists.   "
},
{
  "id": "slopefields_section-5-9",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-9",
  "type": "Exercise",
  "number": "1.2.7",
  "title": "",
  "body": "  Is it possible to solve the equation for ? Is the solution unique? Justify.     is continuous near and exists and is continuous near , therefore by Picard's theorem a unique solution exists.   "
},
{
  "id": "slopefields_section-5-10",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-10",
  "type": "Exercise",
  "number": "1.2.8",
  "title": "",
  "body": "   (challenging) Take , , where for all and . If the solution exists for all , can you say what happens to as goes to positive infinity? Explain.    The slope field for this equation would have slopes of at least one everywhere as for all and , so with an initial condition a solution would pass through the origin and keep on increasing forever. Thus as , .   "
},
{
  "id": "slopefields_section-5-11",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-11",
  "type": "Exercise",
  "number": "1.2.9",
  "title": "",
  "body": "   (challenging) Take , .    Find two distinct solutions.    Explain why this does not violate Picard's theorem.      a) b) The DE cannot be written in the form , so Picard's theorem does not apply.   "
},
{
  "id": "slopefields_section-5-12",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-12",
  "type": "Exercise",
  "number": "1.2.10",
  "title": "",
  "body": "  Suppose . What will the slope field look like, explain and sketch an example, if you know the following about :     does not depend on .     does not depend on .     for any number .     and for all .     "
},
{
  "id": "slopefields_section-5-13",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-13",
  "type": "Exercise",
  "number": "1.2.11",
  "title": "",
  "body": "  Find a solution to , . Does Picard's theorem apply?     is a solution. is continuous but does not exist near , so Picard's theorem does not apply.   "
},
{
  "id": "slopefields_section-5-14",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-14",
  "type": "Exercise",
  "number": "1.2.12",
  "title": "",
  "body": "  Take an equation for some function . Can you solve the problem for the initial condition , and if so what is the solution?        "
},
{
  "id": "slopefields_section-5-15",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-15",
  "type": "Exercise",
  "number": "1.2.13",
  "title": "",
  "body": "   (challenging) Suppose is such that for every , is continuous and exists and is continuous for every and .    Guess a solution given the initial condition .    Can graphs of two solutions of the equation for different initial conditions ever intersect?    Given , what can you say about the solution. In particular, can for any ? Can for any ? Why or why not?      a)  b) No. As this satisfies the conditions of Picard's Theorem everywhere, there must be a unique solution from any given points. Thus two different solutions at the same point is not possible as that point can be taken as the initial condition. c) Since is one solution for a different initial condition, by part (b), any other solution cannot intersect that. Given that the initial condition here is below the line, the solution can never intersect with 1, thus for all .   "
},
{
  "id": "slopefields_section-5-16",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-16",
  "type": "Exercise",
  "number": "1.2.14",
  "title": "",
  "body": "  Sketch the slope field of . Can you visually find the solution that satisfies ?      is a solution such that .   "
},
{
  "id": "slopefields_section-5-17",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-17",
  "type": "Exercise",
  "number": "1.2.15",
  "title": "",
  "body": "  Is it possible to solve for ? Is the solution unique?    Yes a solution exists. The equation is where . The function is continuous and , which is also continuous near . So a solution exists and is unique. (In fact, is the solution.)   "
},
{
  "id": "slopefields_section-5-18",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-18",
  "type": "Exercise",
  "number": "1.2.16",
  "title": "",
  "body": "  Is it possible to solve for ?    No, the equation is not defined at .   "
},
{
  "id": "slopefields_section-5-19",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-19",
  "type": "Exercise",
  "number": "1.2.17",
  "title": "",
  "body": "   (tricky) Suppose Does , have a continuously differentiable solution? Does Picard apply? Why, or why not?    Picard does not apply as is not continuous at . The equation does not have a continuously differentiable solution. Suppose it did. Notice that . By the first derivative test, for small positive . But then for those we would have , so clearly the derivative cannot be continuous.   "
},
{
  "id": "slopefields_section-5-20",
  "level": "2",
  "url": "slopefields_section.html#slopefields_section-5-20",
  "type": "Exercise",
  "number": "1.2.18",
  "title": "",
  "body": "  Consider an equation of the form for some continuous function , and an initial condition . Does a solution exist for all ? Why or why not?    The solution is , and this does indeed exist for every .   "
},
{
  "id": "separable_section",
  "level": "1",
  "url": "separable_section.html",
  "type": "Section",
  "number": "1.3",
  "title": "Separable equations",
  "body": " Separable equations   When a differential equation is of the form , we can just integrate: . Unfortunately this method no longer works for the general form of the equation . Integrating both sides yields Notice the dependence on in the integral.    Separable equations   Separation of Variables  In this video we learn our first main of solving ODEs beyond just integrating, and it applies to so called separable ODEs.    We say a differential equation is separable separable if we can write it as for some functions and . Let us write the equation in the Leibniz notation Leibniz notation  Then we rewrite the equation as Both sides look like something we can integrate. We obtain If we can find closed form expressions for these two integrals, we can, perhaps, solve for .    Take the equation Note that is a solution. We will remember that fact and assume from now on, so that we can divide by . Write the equation as . Then We compute the antiderivatives to get or where is some constant. Because is also a solution and because of the absolute value we can write: for any number (including zero or negative).  We check: Yay!    We should be a little bit more careful with this method. You may be worried that we integrated in two different variables. We seemingly did a different operation to each side. Let us work through this method more rigorously. Take We rewrite the equation as follows. Note that is a function of and so is ! We integrate both sides with respect to : We use the change of variables formula (substitution) on the left hand side: And we are done.    Implicit solutions  We sometimes get stuck even if we can do the integration. Consider the separable equation We separate variables, We integrate to get or perhaps the easier looking expression (where ) It is not easy to find the solution explicitly as it is hard to solve for . We, therefore, leave the solution in this form and call it an implicit solution implicit solution . It is still easy to check that an implicit solution satisfies the differential equation. In this case, we differentiate with respect to , and remember that is a function of , to get Multiply both sides by and divide by and you will get exactly the differential equation. We leave this computation to the reader.  If you have an implicit solution, and you want to compute values for , you might have to be tricky. You might get multiple solutions for each , so you have to pick one. Sometimes you can graph as a function of , and then flip your paper. Sometimes you have to do more.  Computers are also good at some of these tricks. More advanced mathematical software usually has some way of plotting solutions to implicit equations. For example, for if you plot all the points that are solutions to , you find the two curves in . This is not quite a graph of a function. For each there are two choices of . To find a function you would have to pick one of these two curves. You pick the one that satisfies your initial condition if you have one. For example, the top curve satisfies the condition . So for each we really got two solutions. As you can see, computing values from an implicit solution can be somewhat tricky. But sometimes, an implicit solution is the best we can do.   The implicit solution to .    The equation above also has the solution . So the general solution is These outlying solutions such as are sometimes called singular solutions singular solution .    Examples of separable equations    Solve , .  Factor the right-hand side Separate variables, integrate, and solve for : Solve for the initial condition, to get (or , or , etc.). The particular solution we seek is, therefore,      Newton's Law of Cooling  In this example we investigate the modelling process to determine the temperature on a cooling object like a cup of tea. The ODE we come up with is separable, and so this gives us a nice second example. However, we have to collect a bit more data than just an initial condition because our model has some undetermined parameter in it.      Bob made a cup of coffee, and Bob likes to drink coffee only once reaches 60 degrees Celsius and will not burn him. Initially at time minutes, Bob measured the temperature and the coffee was 89 degrees Celsius. One minute later, Bob measured the coffee again and it had 85 degrees. The temperature of the room (the ambient temperature) is 22 degrees. When should Bob start drinking?  Let be the temperature of the coffee in degrees Celsius, and let be the ambient (room) temperature, also in degrees Celsius. Newton's law of cooling Newton's law of cooling states that the rate at which the temperature of the coffee is changing is proportional to the difference between the ambient temperature and the temperature of the coffee. That is, for some constant . For our setup , , . We separate variables and integrate (let and denote arbitrary constants): That is, . We plug in the first condition: , and hence . So . The second condition says . Solving for we get . Now we solve for the time that gives us a temperature of 60 degrees. Namely, we solve to get minutes. So Bob can begin to drink the coffee at just over 9 minutes from the time Bob made it. That is probably about the amount of time it took us to calculate how long it would take. See .   Graphs of the coffee temperature function . On the left, horizontal lines are drawn at temperatures 60, 85, and 89. Vertical lines are drawn at and . Notice that the temperature of the coffee hits 85 at , and 60 at . On the right, the graph is over a longer period of time, with a horizontal line at the ambient temperature 22.         Geogebra Activity: Use this Geogebra applet to explore Newton's Law of Cooling. Try a few different initial conditions and explore how they affect the cooling curve. You can use this application as a check when solving problems involving Newton cooling.      Find the general solution to (including singular solutions).  First note that is a solution (a singular solution). Now assume that . So the general solution is,       Exercises    Solve .    Rearranging we get \\[ \\int ydy=\\int xdx \\] \\[ \\frac{y^2}{2}=\\frac{x^2}{2}+c \\] Solving for \\[ y=\\sqrt{x^2+c} \\textrm{or} y=-\\sqrt{x^2+c} \\] The choice of sign would depend on initial conditions.      Solve .           Solve , for .           Solve , for .    Rearranging \\[ \\int \\frac{dx}{x}=\\int \\sin(t)dt\\rightarrow \\ln \\lvert x \\rvert =-\\cos t+c \\] Applying the initial condition we get . Therefore \\[ \\lvert x \\rvert =e^{1-\\cos(t)} \\rightarrow x=\\pm e^{1-\\cos(t)} \\] Checking the initial condition again so we choose the positive sign. Thus \\[ x=e^{1-\\cos(t)} \\]      Solve . Hint: Factor the right-hand side.           Solve , where .           Solve , for .           Find an implicit solution for , for .    Rearranging \\[ \\int y^2+1 dy=\\int x^2+1 dx\\rightarrow \\frac{y^3}{3}+y=\\frac{x^3}{3}+x+c \\] Applying the initial condition we get . Thus the implicit solution is \\[ \\frac{y^3}{3}+y=\\frac{x^3}{3}+x+\\frac{4}{3} \\]      Find an explicit solution for , .           Find an explicit solution for , for .           Find an explicit solution for , . It is alright to leave a definite integral in your answer.     . It is implied that the integral doesn't have an integration constant. A proper way to write this would be       Suppose a cup of coffee is at 100 degrees Celsius at time , it is at 70 degrees at minutes, and it is at 50 degrees at minutes. Compute the ambient temperature.    Applying the three conditions to the equation \\[ T=A+De^{-kT} \\] We get a system of three equations Solving this system we get C (and , ).      Solve .           Solve , .           Find an implicit solution for , .           Find an explicit solution to , .           Find an implicit solution to .           Take with the same numbers: 89 degrees at , 85 degrees at , and ambient temperature of 22 degrees. Suppose these temperatures were measured with precision of degrees. Given this imprecision, the time it takes the coffee to cool to (exactly) 60 degrees is also only known in a certain range. Find this range. Hint: Think about what kind of error makes the cooling time longer and what shorter.    The range is approximately 7.45 to 12.15 minutes.      A population of rabbits on an island is modeled by , where the independent variable is time in months. At time , there are 40 rabbits on the island.    Find the solution to the equation with the initial condition.    How many rabbits are on the island in 1 month, 5 months, 10 months, 15 months (round to the nearest integer).      a) . b) 102 rabbits after one month, 861 after 5 months, 999 after 10 months, 1000 after 15 months.     "
},
{
  "id": "first-separable",
  "level": "2",
  "url": "separable_section.html#first-separable",
  "type": "Video",
  "number": "1.3.1",
  "title": "Separation of Variables.",
  "body": " Separation of Variables  In this video we learn our first main of solving ODEs beyond just integrating, and it applies to so called separable ODEs.   "
},
{
  "id": "example_yprimeisxy",
  "level": "2",
  "url": "separable_section.html#example_yprimeisxy",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": "  Take the equation Note that is a solution. We will remember that fact and assume from now on, so that we can divide by . Write the equation as . Then We compute the antiderivatives to get or where is some constant. Because is also a solution and because of the absolute value we can write: for any number (including zero or negative).  We check: Yay!   "
},
{
  "id": "implicitsols_fig",
  "level": "2",
  "url": "separable_section.html#implicitsols_fig",
  "type": "Figure",
  "number": "1.8",
  "title": "",
  "body": " The implicit solution to .   "
},
{
  "id": "separable_section-5-2",
  "level": "2",
  "url": "separable_section.html#separable_section-5-2",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  Solve , .  Factor the right-hand side Separate variables, integrate, and solve for : Solve for the initial condition, to get (or , or , etc.). The particular solution we seek is, therefore,    "
},
{
  "id": "first-Newton",
  "level": "2",
  "url": "separable_section.html#first-Newton",
  "type": "Video",
  "number": "1.3.2",
  "title": "Newton’s Law of Cooling.",
  "body": " Newton's Law of Cooling  In this example we investigate the modelling process to determine the temperature on a cooling object like a cup of tea. The ODE we come up with is separable, and so this gives us a nice second example. However, we have to collect a bit more data than just an initial condition because our model has some undetermined parameter in it.   "
},
{
  "id": "sep_coffeeexample",
  "level": "2",
  "url": "separable_section.html#sep_coffeeexample",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  Bob made a cup of coffee, and Bob likes to drink coffee only once reaches 60 degrees Celsius and will not burn him. Initially at time minutes, Bob measured the temperature and the coffee was 89 degrees Celsius. One minute later, Bob measured the coffee again and it had 85 degrees. The temperature of the room (the ambient temperature) is 22 degrees. When should Bob start drinking?  Let be the temperature of the coffee in degrees Celsius, and let be the ambient (room) temperature, also in degrees Celsius. Newton's law of cooling Newton's law of cooling states that the rate at which the temperature of the coffee is changing is proportional to the difference between the ambient temperature and the temperature of the coffee. That is, for some constant . For our setup , , . We separate variables and integrate (let and denote arbitrary constants): That is, . We plug in the first condition: , and hence . So . The second condition says . Solving for we get . Now we solve for the time that gives us a temperature of 60 degrees. Namely, we solve to get minutes. So Bob can begin to drink the coffee at just over 9 minutes from the time Bob made it. That is probably about the amount of time it took us to calculate how long it would take. See .   Graphs of the coffee temperature function . On the left, horizontal lines are drawn at temperatures 60, 85, and 89. Vertical lines are drawn at and . Notice that the temperature of the coffee hits 85 at , and 60 at . On the right, the graph is over a longer period of time, with a horizontal line at the ambient temperature 22.     "
},
{
  "id": "separable_section-5-5",
  "level": "2",
  "url": "separable_section.html#separable_section-5-5",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "   Geogebra Activity: Use this Geogebra applet to explore Newton's Law of Cooling. Try a few different initial conditions and explore how they affect the cooling curve. You can use this application as a check when solving problems involving Newton cooling.   "
},
{
  "id": "separable_section-5-6",
  "level": "2",
  "url": "separable_section.html#separable_section-5-6",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  Find the general solution to (including singular solutions).  First note that is a solution (a singular solution). Now assume that . So the general solution is,    "
},
{
  "id": "separable_section-6-2",
  "level": "2",
  "url": "separable_section.html#separable_section-6-2",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  Solve .    Rearranging we get \\[ \\int ydy=\\int xdx \\] \\[ \\frac{y^2}{2}=\\frac{x^2}{2}+c \\] Solving for \\[ y=\\sqrt{x^2+c} \\textrm{or} y=-\\sqrt{x^2+c} \\] The choice of sign would depend on initial conditions.   "
},
{
  "id": "separable_section-6-3",
  "level": "2",
  "url": "separable_section.html#separable_section-6-3",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "separable_section-6-4",
  "level": "2",
  "url": "separable_section.html#separable_section-6-4",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": "  Solve , for .        "
},
{
  "id": "separable_section-6-5",
  "level": "2",
  "url": "separable_section.html#separable_section-6-5",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "  Solve , for .    Rearranging \\[ \\int \\frac{dx}{x}=\\int \\sin(t)dt\\rightarrow \\ln \\lvert x \\rvert =-\\cos t+c \\] Applying the initial condition we get . Therefore \\[ \\lvert x \\rvert =e^{1-\\cos(t)} \\rightarrow x=\\pm e^{1-\\cos(t)} \\] Checking the initial condition again so we choose the positive sign. Thus \\[ x=e^{1-\\cos(t)} \\]   "
},
{
  "id": "separable_section-6-6",
  "level": "2",
  "url": "separable_section.html#separable_section-6-6",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": "  Solve . Hint: Factor the right-hand side.        "
},
{
  "id": "separable_section-6-7",
  "level": "2",
  "url": "separable_section.html#separable_section-6-7",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": "  Solve , where .        "
},
{
  "id": "separable_section-6-8",
  "level": "2",
  "url": "separable_section.html#separable_section-6-8",
  "type": "Exercise",
  "number": "1.3.7",
  "title": "",
  "body": "  Solve , for .        "
},
{
  "id": "separable_section-6-9",
  "level": "2",
  "url": "separable_section.html#separable_section-6-9",
  "type": "Exercise",
  "number": "1.3.8",
  "title": "",
  "body": "  Find an implicit solution for , for .    Rearranging \\[ \\int y^2+1 dy=\\int x^2+1 dx\\rightarrow \\frac{y^3}{3}+y=\\frac{x^3}{3}+x+c \\] Applying the initial condition we get . Thus the implicit solution is \\[ \\frac{y^3}{3}+y=\\frac{x^3}{3}+x+\\frac{4}{3} \\]   "
},
{
  "id": "separable_section-6-10",
  "level": "2",
  "url": "separable_section.html#separable_section-6-10",
  "type": "Exercise",
  "number": "1.3.9",
  "title": "",
  "body": "  Find an explicit solution for , .        "
},
{
  "id": "separable_section-6-11",
  "level": "2",
  "url": "separable_section.html#separable_section-6-11",
  "type": "Exercise",
  "number": "1.3.10",
  "title": "",
  "body": "  Find an explicit solution for , for .        "
},
{
  "id": "separable_section-6-12",
  "level": "2",
  "url": "separable_section.html#separable_section-6-12",
  "type": "Exercise",
  "number": "1.3.11",
  "title": "",
  "body": "  Find an explicit solution for , . It is alright to leave a definite integral in your answer.     . It is implied that the integral doesn't have an integration constant. A proper way to write this would be    "
},
{
  "id": "separable_section-6-13",
  "level": "2",
  "url": "separable_section.html#separable_section-6-13",
  "type": "Exercise",
  "number": "1.3.12",
  "title": "",
  "body": "  Suppose a cup of coffee is at 100 degrees Celsius at time , it is at 70 degrees at minutes, and it is at 50 degrees at minutes. Compute the ambient temperature.    Applying the three conditions to the equation \\[ T=A+De^{-kT} \\] We get a system of three equations Solving this system we get C (and , ).   "
},
{
  "id": "separable_section-6-14",
  "level": "2",
  "url": "separable_section.html#separable_section-6-14",
  "type": "Exercise",
  "number": "1.3.13",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "separable_section-6-15",
  "level": "2",
  "url": "separable_section.html#separable_section-6-15",
  "type": "Exercise",
  "number": "1.3.14",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "separable_section-6-16",
  "level": "2",
  "url": "separable_section.html#separable_section-6-16",
  "type": "Exercise",
  "number": "1.3.15",
  "title": "",
  "body": "  Find an implicit solution for , .        "
},
{
  "id": "separable_section-6-17",
  "level": "2",
  "url": "separable_section.html#separable_section-6-17",
  "type": "Exercise",
  "number": "1.3.16",
  "title": "",
  "body": "  Find an explicit solution to , .        "
},
{
  "id": "separable_section-6-18",
  "level": "2",
  "url": "separable_section.html#separable_section-6-18",
  "type": "Exercise",
  "number": "1.3.17",
  "title": "",
  "body": "  Find an implicit solution to .        "
},
{
  "id": "separable_section-6-19",
  "level": "2",
  "url": "separable_section.html#separable_section-6-19",
  "type": "Exercise",
  "number": "1.3.18",
  "title": "",
  "body": "  Take with the same numbers: 89 degrees at , 85 degrees at , and ambient temperature of 22 degrees. Suppose these temperatures were measured with precision of degrees. Given this imprecision, the time it takes the coffee to cool to (exactly) 60 degrees is also only known in a certain range. Find this range. Hint: Think about what kind of error makes the cooling time longer and what shorter.    The range is approximately 7.45 to 12.15 minutes.   "
},
{
  "id": "separable_section-6-20",
  "level": "2",
  "url": "separable_section.html#separable_section-6-20",
  "type": "Exercise",
  "number": "1.3.19",
  "title": "",
  "body": "  A population of rabbits on an island is modeled by , where the independent variable is time in months. At time , there are 40 rabbits on the island.    Find the solution to the equation with the initial condition.    How many rabbits are on the island in 1 month, 5 months, 10 months, 15 months (round to the nearest integer).      a) . b) 102 rabbits after one month, 861 after 5 months, 999 after 10 months, 1000 after 15 months.   "
},
{
  "id": "intfactor_section",
  "level": "1",
  "url": "intfactor_section.html",
  "type": "Section",
  "number": "1.4",
  "title": "Linear equations and the integrating factor",
  "body": " Linear equations and the integrating factor    Linear Equations and Integrating Factors  In section we saw existence and uniqueness for a completely general first order ODE. In last class we saw separable differential equations which is a specific class of first order ODEs. Now in section 1.4 we are seeing a different class of ODEs called linear ODEs, and they are particularly nice because they come with a method that always works (provided you can evaluate the integrals) to solve the ODE. We will also see that this comes with a particularly nice Existence & Uniqueness theorem that is stronger than the one for generic ODEs.    One of the most important types of equations we will learn how to solve are the so-called linear equations linear equation . In fact, the majority of the course is about linear equations. In this section we focus on the first order linear equation first order linear equation . A first order equation is linear if we can put it into the form: The word linear means linear in and ; no higher powers nor functions of or appear. The dependence on can be more complicated.  Solutions of linear equations have nice properties. For example, the solution exists wherever and are defined, and has the same regularity (read: it is just as nice). But most importantly for us right now, there is a method for solving linear first order equations.  The trick is to rewrite the left-hand side of as a derivative of a product of with another function. To this end we find a function such that This is the left-hand side of multiplied by . So if we multiply by , we obtain Now we integrate both sides. The right-hand side does not depend on and the left-hand side is written as a derivative of a function. Afterwards, we solve for . The function is called the integrating factor integrating factor and the method is called the integrating factor method integrating factor method .  We are looking for a function , such that if we differentiate it, we get the same function back multiplied by . That seems like a job for the exponential function! Let We compute:   Of course, to get a closed form formula for , we need to be able to find a closed form formula for the integrals appearing above.    Solve   First note that and . The integrating factor is . We multiply both sides of the equation by to get We integrate Next, we solve for the initial condition , so . The solution is     Note that we do not care which antiderivative we take when computing . You can always add a constant of integration, but those constants will not matter in the end.  Exercise: Try it! Add a constant of integration to the integral in the integrating factor and show that the solution you get in the end is the same as what we got above.  Advice: Do not try to remember the formula itself, that is way too hard. It is easier to remember the process and repeat it.  Since we cannot always evaluate the integrals in closed form, it is useful to know how to write the solution in definite integral form. A definite integral is something that you can plug into a computer or a calculator. Suppose we are given Look at the solution and write the integrals as definite integrals. You should be careful to properly use dummy variables here. If you now plug such a formula into a computer or a calculator, it will be happy to give you numerical answers.   Integrating Factor Examples  Let's work through a full example.    Exercise: Check that in formula .  Exercise: Write the solution of the following problem as a definite integral, but try to simplify as far as you can. You will not be able to find the solution in closed form.     Before we move on, we should note some interesting properties of linear equations. First, for the linear initial value problem , , there is always an explicit formula for the solution. Second, it follows from the formula that if and are continuous on some interval , then the solution exists and is differentiable on . Compare with the simple nonlinear example we have seen previously, , and compare to .      Let us discuss a common simple application of linear equations. This type of problem is used often in real life. For example, linear equations are used in figuring out the concentration of chemicals in bodies of water (rivers and lakes).     A 100 liter tank contains 10 kilograms of salt dissolved in 60 liters of water. Solution of water and salt (brine) with concentration of 0.1 kilograms per liter is flowing in at the rate of 5 liters a minute. The solution in the tank is well stirred and flows out at a rate of 3 liters a minute. How much salt is in the tank when the tank is full?  Let us come up with the equation. Let denote the kilograms of salt in the tank, let denote the time in minutes. For a small change in time, the change in (denoted ) is approximately Dividing through by and taking the limit , we see that In our example, Our equation is, therefore, Or in the form    Let us solve. The integrating factor is We multiply both sides of the equation to get   We need to find . We know that at , . So or   We are interested in when the tank is full. The tank is full when , or when . So See for the graph of over .  The concentration when the tank is full is approximately 0.1186 , and we started with or 0.167 .   Graph of the solution kilograms of salt in the tank at time .        Exercises  In the exercises, feel free to leave answer as a definite integral if a closed form solution cannot be found. If you can find a closed form solution, you should give that.    Solve .     so we get Integrating       Solve .           Solve , with .     Multiplying by the integrating factor and integrating Applying the initial condition we get , therefore       Solve .           Solve , with .     Multiplying by the integrating factor and integrating This integral doesn't have a closed form, so it is left as a definite integral Applying the initial condition we get so finally       Suppose there are two lakes located on a stream. Clean water flows into the first lake, then the water from the first lake flows into the second lake, and then water from the second lake flows further downstream. The in and out flow from each lake is 500 liters per hour. The first lake contains 100 thousand liters of water and the second lake contains 200 thousand liters of water. A truck with 500 kg of toxic substance crashes into the first lake. Assume that the water is being continually mixed perfectly by the stream.    Find the mass of toxic substance as a function of time in both lakes.    When will the concentration in the first lake be below 0.001 kg per liter?    When will the concentration in the second lake be maximal?      (a) Lake 1:   Applying the initial condition the equation becomes \\[ x_1(t)=500e^{-t\/200} \\]  Lake 2: Where \\[ p(t)=\\frac{1}{400}, f(t)=\\frac{5e^{-t\/200}}{2}, r(t)=e^{t\/400} \\] Multiplying and integrating \\[ e^{t\/400}x_2=-1000e^{-t\/400}+C \\] Applying the initial condition we find so \\[ x_2=1000(e^{-t\/400}-e^{-t\/200}) \\] (b) At concentration kg. Plugging into the solution for the first lake \\[ 100=500e^{-t_f\/200}\\rightarrow t_f\\approx 321.89 \\rm hours \\] (c) The critical point can be obtained by setting the first derivative to zero \\[ \\frac{dx_2}{dt}=1000(-\\frac{1}{400}e^{-t\/400}+\\frac{1}{200}e^{-t\/200})=0 \\] Solving for we find hours.      Newton's law of cooling Newton's law of cooling states that where is the temperature, is time, is the ambient temperature, and is a constant. Suppose that for some constants and . That is, the ambient temperature oscillates (for example night and day temperatures).    Find the general solution.    In the long term, will the initial conditions make much of a difference? Why or why not?      (a) \\[ x'=-kx+kA_0\\cos(\\omega t) \\] \\[ p(t)=k, f(t)=kA_0\\cos(\\omega t), r(t)=e^{kt} \\] Multiplying and integrating  (b) In the long term, becomes large, so the term vanishes. The initial condition is So we can write the solution as Where the last term vanishes at large , and so the initial condition doesn't matter.      Initially 5 grams of salt are dissolved in 20 liters of water. Brine with concentration of salt 2 grams of salt per liter is added at a rate of 3 liters a minute. The tank is mixed well and is drained at 3 liters a minute. How long does the process have to continue until there are 20 grams of salt in the tank?    The solution is , plugging in the values given, we get minutes.      Initially a tank contains 10 liters of pure water. Brine of unknown (but constant) concentration of salt is flowing in at 1 liter per minute. The water is mixed well and drained at 1 liter per minute. In 20 minutes there are 15 grams of salt in the tank. What is the concentration of salt in the incoming brine?    The solution is , where is the concentration and is the integration constant. Plugging in the given values we find g\/L.      Solve .           Solve , .           Suppose a water tank is being pumped out at 3 . The water tank starts at 10 L of clean water. Water with toxic substance is flowing into the tank at 2 , with concentration  at time . When the tank is half empty, how many grams of toxic substance are in the tank (assuming perfect mixing)?     grams      Suppose we have bacteria on a plate and suppose that we are slowly adding a toxic substance such that the rate of growth is slowing down. That is, suppose that . If , find the population at .           A cylindrical water tank has water flowing in at cubic meters per second. Let be the area of the cross section of the tank in meters. Suppose water is flowing from the bottom of the tank at a rate proportional to the height of the water level. Set up the differential equation for , the height of the water, introducing and naming constants that you need. You should also give the units for your constants.     , where is a constant with units .     "
},
{
  "id": "first-linear",
  "level": "2",
  "url": "intfactor_section.html#first-linear",
  "type": "Video",
  "number": "1.4.1",
  "title": "Linear Equations and Integrating Factors.",
  "body": " Linear Equations and Integrating Factors  In section we saw existence and uniqueness for a completely general first order ODE. In last class we saw separable differential equations which is a specific class of first order ODEs. Now in section 1.4 we are seeing a different class of ODEs called linear ODEs, and they are particularly nice because they come with a method that always works (provided you can evaluate the integrals) to solve the ODE. We will also see that this comes with a particularly nice Existence & Uniqueness theorem that is stronger than the one for generic ODEs.   "
},
{
  "id": "intfactor_section-2-7",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-2-7",
  "type": "Example",
  "number": "1.4.1",
  "title": "",
  "body": "  Solve   First note that and . The integrating factor is . We multiply both sides of the equation by to get We integrate Next, we solve for the initial condition , so . The solution is    "
},
{
  "id": "first-linear2",
  "level": "2",
  "url": "intfactor_section.html#first-linear2",
  "type": "Video",
  "number": "1.4.2",
  "title": "Integrating Factor Examples.",
  "body": " Integrating Factor Examples  Let's work through a full example.   "
},
{
  "id": "intfactor_section-2-15",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-2-15",
  "type": "Remark",
  "number": "1.4.1",
  "title": "",
  "body": "  Before we move on, we should note some interesting properties of linear equations. First, for the linear initial value problem , , there is always an explicit formula for the solution. Second, it follows from the formula that if and are continuous on some interval , then the solution exists and is differentiable on . Compare with the simple nonlinear example we have seen previously, , and compare to .   "
},
{
  "id": "intfactor_section-2-16",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-2-16",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": "  Let us discuss a common simple application of linear equations. This type of problem is used often in real life. For example, linear equations are used in figuring out the concentration of chemicals in bodies of water (rivers and lakes).     A 100 liter tank contains 10 kilograms of salt dissolved in 60 liters of water. Solution of water and salt (brine) with concentration of 0.1 kilograms per liter is flowing in at the rate of 5 liters a minute. The solution in the tank is well stirred and flows out at a rate of 3 liters a minute. How much salt is in the tank when the tank is full?  Let us come up with the equation. Let denote the kilograms of salt in the tank, let denote the time in minutes. For a small change in time, the change in (denoted ) is approximately Dividing through by and taking the limit , we see that In our example, Our equation is, therefore, Or in the form    Let us solve. The integrating factor is We multiply both sides of the equation to get   We need to find . We know that at , . So or   We are interested in when the tank is full. The tank is full when , or when . So See for the graph of over .  The concentration when the tank is full is approximately 0.1186 , and we started with or 0.167 .   Graph of the solution kilograms of salt in the tank at time .     "
},
{
  "id": "intfactor_section-3-3",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-3",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "  Solve .     so we get Integrating    "
},
{
  "id": "intfactor_section-3-4",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-4",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "intfactor_section-3-5",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-5",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "  Solve , with .     Multiplying by the integrating factor and integrating Applying the initial condition we get , therefore    "
},
{
  "id": "intfactor_section-3-6",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-6",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "intfactor_section-3-7",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-7",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "  Solve , with .     Multiplying by the integrating factor and integrating This integral doesn't have a closed form, so it is left as a definite integral Applying the initial condition we get so finally    "
},
{
  "id": "intfactor_section-3-8",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-8",
  "type": "Exercise",
  "number": "1.4.6",
  "title": "",
  "body": "  Suppose there are two lakes located on a stream. Clean water flows into the first lake, then the water from the first lake flows into the second lake, and then water from the second lake flows further downstream. The in and out flow from each lake is 500 liters per hour. The first lake contains 100 thousand liters of water and the second lake contains 200 thousand liters of water. A truck with 500 kg of toxic substance crashes into the first lake. Assume that the water is being continually mixed perfectly by the stream.    Find the mass of toxic substance as a function of time in both lakes.    When will the concentration in the first lake be below 0.001 kg per liter?    When will the concentration in the second lake be maximal?      (a) Lake 1:   Applying the initial condition the equation becomes \\[ x_1(t)=500e^{-t\/200} \\]  Lake 2: Where \\[ p(t)=\\frac{1}{400}, f(t)=\\frac{5e^{-t\/200}}{2}, r(t)=e^{t\/400} \\] Multiplying and integrating \\[ e^{t\/400}x_2=-1000e^{-t\/400}+C \\] Applying the initial condition we find so \\[ x_2=1000(e^{-t\/400}-e^{-t\/200}) \\] (b) At concentration kg. Plugging into the solution for the first lake \\[ 100=500e^{-t_f\/200}\\rightarrow t_f\\approx 321.89 \\rm hours \\] (c) The critical point can be obtained by setting the first derivative to zero \\[ \\frac{dx_2}{dt}=1000(-\\frac{1}{400}e^{-t\/400}+\\frac{1}{200}e^{-t\/200})=0 \\] Solving for we find hours.   "
},
{
  "id": "intfactor_section-3-9",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-9",
  "type": "Exercise",
  "number": "1.4.7",
  "title": "",
  "body": "  Newton's law of cooling Newton's law of cooling states that where is the temperature, is time, is the ambient temperature, and is a constant. Suppose that for some constants and . That is, the ambient temperature oscillates (for example night and day temperatures).    Find the general solution.    In the long term, will the initial conditions make much of a difference? Why or why not?      (a) \\[ x'=-kx+kA_0\\cos(\\omega t) \\] \\[ p(t)=k, f(t)=kA_0\\cos(\\omega t), r(t)=e^{kt} \\] Multiplying and integrating  (b) In the long term, becomes large, so the term vanishes. The initial condition is So we can write the solution as Where the last term vanishes at large , and so the initial condition doesn't matter.   "
},
{
  "id": "intfactor_section-3-10",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-10",
  "type": "Exercise",
  "number": "1.4.8",
  "title": "",
  "body": "  Initially 5 grams of salt are dissolved in 20 liters of water. Brine with concentration of salt 2 grams of salt per liter is added at a rate of 3 liters a minute. The tank is mixed well and is drained at 3 liters a minute. How long does the process have to continue until there are 20 grams of salt in the tank?    The solution is , plugging in the values given, we get minutes.   "
},
{
  "id": "intfactor_section-3-11",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-11",
  "type": "Exercise",
  "number": "1.4.9",
  "title": "",
  "body": "  Initially a tank contains 10 liters of pure water. Brine of unknown (but constant) concentration of salt is flowing in at 1 liter per minute. The water is mixed well and drained at 1 liter per minute. In 20 minutes there are 15 grams of salt in the tank. What is the concentration of salt in the incoming brine?    The solution is , where is the concentration and is the integration constant. Plugging in the given values we find g\/L.   "
},
{
  "id": "intfactor_section-3-12",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-12",
  "type": "Exercise",
  "number": "1.4.10",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "intfactor_section-3-13",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-13",
  "type": "Exercise",
  "number": "1.4.11",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "intfactor_section-3-14",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-14",
  "type": "Exercise",
  "number": "1.4.12",
  "title": "",
  "body": "  Suppose a water tank is being pumped out at 3 . The water tank starts at 10 L of clean water. Water with toxic substance is flowing into the tank at 2 , with concentration  at time . When the tank is half empty, how many grams of toxic substance are in the tank (assuming perfect mixing)?     grams   "
},
{
  "id": "intfactor_section-3-15",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-15",
  "type": "Exercise",
  "number": "1.4.13",
  "title": "",
  "body": "  Suppose we have bacteria on a plate and suppose that we are slowly adding a toxic substance such that the rate of growth is slowing down. That is, suppose that . If , find the population at .        "
},
{
  "id": "intfactor_section-3-16",
  "level": "2",
  "url": "intfactor_section.html#intfactor_section-3-16",
  "type": "Exercise",
  "number": "1.4.14",
  "title": "",
  "body": "  A cylindrical water tank has water flowing in at cubic meters per second. Let be the area of the cross section of the tank in meters. Suppose water is flowing from the bottom of the tank at a rate proportional to the height of the water level. Set up the differential equation for , the height of the water, introducing and naming constants that you need. You should also give the units for your constants.     , where is a constant with units .   "
},
{
  "id": "substitution_section",
  "level": "1",
  "url": "substitution_section.html",
  "type": "Section",
  "number": "1.5",
  "title": "Substitution",
  "body": " Substitution   Just as when solving integrals, one method to try is to change variables to end up with a simpler equation to solve.    Substitution  The equation is neither separable nor linear. What can we do? How about trying to change variables, so that in the new variables the equation is simpler. We use another variable , which we treat as a function of . Let us try We need to figure out in terms of , and . We differentiate (in ) to obtain . So . We plug this into the equation to get In other words, . Such an equation we know how to solve by separating variables: So for some constant . Note that and are also solutions.  Now we need to unsubstitute to obtain and also the two solutions or , and or . We solve the first equation for . Note that gives , but no value of gives the solution .  Substitution in differential equations is applied in much the same way that it is applied in calculus. You guess. Several different substitutions might work. There are some general patterns to look for. We summarize a few of these in a table.    When you see Try substituting         Usually you try to substitute in the most complicated part of the equation with the hopes of simplifying it. The table above is just a rule of thumb. You might have to modify your guesses. If a substitution does not work (it does not make the equation any simpler), try a different one.    Bernoulli equations   Bernoulli equations  We have two major classes that we have procedures to solve - separable and linear ODEs. However, we can often use a substitution to convert a different type of ODE into one of these two types. In this video we use a substitution to solve a major class of ODEs called Bernoulli equations.  TYPO: At 5:25, an should be a .    There are some forms of equations where there is a general rule for substitution that always works. One such example is the so-called Bernoulli equation Bernoulli equation There are several things called Bernoulli equations, this is just one of them. The Bernoullis were a prominent Swiss family of mathematicians. These particular equations are named for Jacob Bernoulli (1654–1705). : This equation looks a lot like a linear equation except for the . If or , then the equation is linear and we can solve it. Otherwise, the substitution transforms the Bernoulli equation into a linear equation. Note that need not be an integer.    Solve First, the equation is Bernoulli ( and ). We substitute In other words, . So and finally The equation is now linear. We can use the integrating factor method. In particular, we use formula . Let us assume that so . This assumption is OK, as our initial condition is . Let us compute the integrating factor. Here from formula is . We now plug in to  The integral in this expression is not possible to find in closed form. As we said before, it is perfectly fine to have a definite integral in our solution. Now unsubstitute        Homogeneous equations  Another type of equations we can solve by substitution are the so-called homogeneous equations homogeneous equation . Suppose that we can write the differential equation as Here we try the substitutions We note that the equation is transformed into Hence an implicit solution is     Solve   We put the equation into the form . We substitute to get the separable equation which has a solution We unsubstitute We want , so Thus and the solution we are looking for is       Exercises  Hint: Answers need not always be in closed form.    Solve , with .    This is a Bernoulli equation with . So we substitute , and get \\[ v'-5v(x^2-1)=5x \\] A linear ODE with \\[ p(x)=-5(x^2-1), f(x)=5x, r(x)=e^{-\\frac{5x^3}{3}+5x} \\] Multiplying and integrating \\[ e^{-\\frac{5x^3}{3}+5x}v=\\int 5xe^{-\\frac{5x^3}{3}+5x} dx \\] This integral doesn't have a closed form. Applying the initial condition \\[ v=e^{\\frac{5x^3}{3}-5x}\\left(\\int_1^x 5te^{-\\frac{5t^3}{3}+5t}dt +1\\right) \\]       Solve , with .    Try giving . Substituting \\[ v'+1=v+x \\rightarrow v'-v=x-1 \\] A linear ODE with \\[ p(x)=-1, f(x)=x-1, r(x)=e^{-x} \\] Multiplying and integrating \\[ e^{-x}v=-xe^{-x}+c \\] Applying the initial condition , giving . Thus we write \\[ v=-x+e^x \\] \\[ y=\\sqrt{e^x-x} \\]      Solve , with .           Solve .    This can be rewritten as \\[ y'=\\sqrt{\\left(\\frac{x}{y}\\right)^2+1}-\\frac{x}{y} \\] \\[ y=\\sqrt{\\left( \\frac{1}{y\/x}\\right)^2+1}-\\frac{1}{y\/x}=F(y\/x) \\] This is a homogeneous equation, so we substitute . Following through with the substitution \\[ \\int \\frac{1}{F(v)-v}dv=ln\\lvert x\\rvert +c \\] \\[ \\int \\frac{1}{\\sqrt{\\frac{1}{v^2}+1}-\\frac{1}{v}-v}dv=ln\\lvert x\\rvert +x \\] Integrating \\[ \\lvert 1-\\sqrt{v^2+1}\\rvert = c\\lvert \\frac{1}{x}\\rvert \\] \\[ v=\\sqrt{(1-c\\lvert \\frac{1}{x}\\rvert)^2-1}=\\sqrt{\\frac{c^2}{x^2}-2c\\lvert \\frac{1}{x}\\rvert} \\] \\[ y=\\sqrt{c^2-2c\\lvert x \\rvert} \\]      Solve .           Solve , with .           Solve , .           Solve , .           Solve , .           Solve .          "
},
{
  "id": "first-bernoulli",
  "level": "2",
  "url": "substitution_section.html#first-bernoulli",
  "type": "Video",
  "number": "1.5.1",
  "title": "Bernoulli equations.",
  "body": " Bernoulli equations  We have two major classes that we have procedures to solve - separable and linear ODEs. However, we can often use a substitution to convert a different type of ODE into one of these two types. In this video we use a substitution to solve a major class of ODEs called Bernoulli equations.  TYPO: At 5:25, an should be a .   "
},
{
  "id": "substitution_section-4-4",
  "level": "2",
  "url": "substitution_section.html#substitution_section-4-4",
  "type": "Example",
  "number": "1.5.1",
  "title": "",
  "body": "  Solve First, the equation is Bernoulli ( and ). We substitute In other words, . So and finally The equation is now linear. We can use the integrating factor method. In particular, we use formula . Let us assume that so . This assumption is OK, as our initial condition is . Let us compute the integrating factor. Here from formula is . We now plug in to  The integral in this expression is not possible to find in closed form. As we said before, it is perfectly fine to have a definite integral in our solution. Now unsubstitute     "
},
{
  "id": "substitution_section-5-3",
  "level": "2",
  "url": "substitution_section.html#substitution_section-5-3",
  "type": "Example",
  "number": "1.5.2",
  "title": "",
  "body": "  Solve   We put the equation into the form . We substitute to get the separable equation which has a solution We unsubstitute We want , so Thus and the solution we are looking for is    "
},
{
  "id": "substitution_section-6-3",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-3",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "  Solve , with .    This is a Bernoulli equation with . So we substitute , and get \\[ v'-5v(x^2-1)=5x \\] A linear ODE with \\[ p(x)=-5(x^2-1), f(x)=5x, r(x)=e^{-\\frac{5x^3}{3}+5x} \\] Multiplying and integrating \\[ e^{-\\frac{5x^3}{3}+5x}v=\\int 5xe^{-\\frac{5x^3}{3}+5x} dx \\] This integral doesn't have a closed form. Applying the initial condition \\[ v=e^{\\frac{5x^3}{3}-5x}\\left(\\int_1^x 5te^{-\\frac{5t^3}{3}+5t}dt +1\\right) \\]    "
},
{
  "id": "substitution_section-6-4",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-4",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "  Solve , with .    Try giving . Substituting \\[ v'+1=v+x \\rightarrow v'-v=x-1 \\] A linear ODE with \\[ p(x)=-1, f(x)=x-1, r(x)=e^{-x} \\] Multiplying and integrating \\[ e^{-x}v=-xe^{-x}+c \\] Applying the initial condition , giving . Thus we write \\[ v=-x+e^x \\] \\[ y=\\sqrt{e^x-x} \\]   "
},
{
  "id": "substitution_section-6-5",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-5",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "  Solve , with .        "
},
{
  "id": "substitution_section-6-6",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-6",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "  Solve .    This can be rewritten as \\[ y'=\\sqrt{\\left(\\frac{x}{y}\\right)^2+1}-\\frac{x}{y} \\] \\[ y=\\sqrt{\\left( \\frac{1}{y\/x}\\right)^2+1}-\\frac{1}{y\/x}=F(y\/x) \\] This is a homogeneous equation, so we substitute . Following through with the substitution \\[ \\int \\frac{1}{F(v)-v}dv=ln\\lvert x\\rvert +c \\] \\[ \\int \\frac{1}{\\sqrt{\\frac{1}{v^2}+1}-\\frac{1}{v}-v}dv=ln\\lvert x\\rvert +x \\] Integrating \\[ \\lvert 1-\\sqrt{v^2+1}\\rvert = c\\lvert \\frac{1}{x}\\rvert \\] \\[ v=\\sqrt{(1-c\\lvert \\frac{1}{x}\\rvert)^2-1}=\\sqrt{\\frac{c^2}{x^2}-2c\\lvert \\frac{1}{x}\\rvert} \\] \\[ y=\\sqrt{c^2-2c\\lvert x \\rvert} \\]   "
},
{
  "id": "substitution_section-6-7",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-7",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "substitution_section-6-8",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-8",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "",
  "body": "  Solve , with .        "
},
{
  "id": "substitution_section-6-9",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-9",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "substitution_section-6-10",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-10",
  "type": "Exercise",
  "number": "1.5.8",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "substitution_section-6-11",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-11",
  "type": "Exercise",
  "number": "1.5.9",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "substitution_section-6-12",
  "level": "2",
  "url": "substitution_section.html#substitution_section-6-12",
  "type": "Exercise",
  "number": "1.5.10",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "auteq_section",
  "level": "1",
  "url": "auteq_section.html",
  "type": "Section",
  "number": "1.6",
  "title": "Autonomous equations",
  "body": " Autonomous equations    Autonomous Equations  An Autonomous equation ONLY depends on the dependent variable. This simplification allows a lot of special types of analysis such as equilibrium values, stability, and what happens as t gets large.    Consider problems of the form where the derivative of solutions depends only on (the dependent variable). Such equations are called autonomous equations autonomous equation . If we think of as time, the naming comes from the fact that the equation is independent of time.  We return to the cooling coffee problem ( ). Newton's law of cooling Newton's law of cooling says where is the temperature, is time, is some positive constant, and is the ambient temperature. See for an example with and .  Note the solution (in the figure ). We call these constant solutions the equilibrium solutions equilibrium solution . The points on the -axis where are called critical points critical point . The point is a critical point. In fact, each critical point corresponds to an equilibrium solution. Note also, by looking at the graph, that the solution is stable in that small perturbations in do not lead to substantially different solutions as grows. If we change the initial condition a little bit, then as we get . We call such a critical point stable stable critical point . In this simple example it turns out that all solutions in fact go to as . If a critical point is not stable, we say it is unstable unstable critical point .   The slope field and some solutions of .     The slope field and some solutions of .     Logistic Equation  Exponential growth is great and all, but is it realistic that biological systems grow unbounded forever? In this video we will explore modelling with Logistic Growth to account for this difficulty.    Consider now the logistic equation logistic equation  for some positive and . This equation is commonly used to model population if we know the limiting population , that is the maximum sustainable population. The logistic equation leads to less catastrophic predictions on world population than . In the real world there is no such thing as negative population, but we will still consider negative for the purposes of the math.  See for an example, . There are two critical points, and . The critical point at is stable, while the critical point at is unstable.  It is not necessary to find the exact solutions to talk about the long term behavior of the solutions. From the slope field above of , we see that Here DNE means does not exist. From just looking at the slope field we cannot quite decide what happens if . It could be that the solution does not exist for all the way to . Think of the equation ; we have seen that solutions only exist for some finite period of time. Same can happen here. In our example equation above it turns out that the solution does not exist for all time, but to see that we would have to solve the equation. In any case, the solution does go to , but it may get there rather quickly.  If we are interested only in the long term behavior of the solution, we would be doing unnecessary work if we solved the equation exactly. We could draw the slope field, but it is easier to just look at the phase diagram phase diagram or phase portrait phase portrait , which is a simple way to visualize the behavior of autonomous equations. In this case there is one dependent variable . We draw the -axis, we mark all the critical points, and then we draw arrows in between. Since is the dependent variable we draw the axis vertically, as it appears in the slope field diagrams above. If , we draw an up arrow. If , we draw a down arrow. To figure this out, we could just plug in some between the critical points, will have the same sign at all between two critical points as long is continuous. For example, , so for , and the arrow above is a down arrow. Next, , so whenever , and the arrow points up. Finally, so when , and the arrow points down.     Armed with the phase diagram, it is easy to sketch the solutions approximately: As time moves from left to right, the graph of a solution goes up if the arrow is up, and it goes down if the arrow is down.  Exercise: Try sketching a few solutions simply from looking at the phase diagram. Check with the preceding graphs if you are getting the type of curves.  Once we draw the phase diagram, we classify critical points as stable or unstable Unstable points with one of the arrows pointing towards the critical point are sometimes called semistable semistable critical point . .     Since any mathematical model we cook up will only be an approximation to the real world, unstable points are generally bad news.  Let us think about the logistic equation with harvesting logistic equation with harvesting harvesting . Suppose an alien race really likes to eat humans. They keep a planet with humans on it and harvest the humans at a rate of million humans per year. Suppose is the number of humans in millions on the planet and is time in years. Let be the limiting population when no harvesting is done. The number is a constant depending on how fast humans multiply. Our equation becomes We expand the right-hand side and set it to zero. Solving for the critical points, let us call them and , we get   Exercise: Sketch a phase diagram for different possibilities. Note that these possibilities are , or , or and both complex (i.e. no real solutions). Hint: Fix some simple and and then vary .  For example, let and . When , then and are distinct and positive. The slope field we get is in . As long as the population starts above , which is approximately 1.55 million, then the population will not die out. It will in fact tend towards million. If ever some catastrophe happens and the population drops below , humans will die out, and the fast food restaurant serving them will go out of business.   The slope field and some solutions of .     The slope field and some solutions of .    When , then . There is only one critical point and it is unstable. When the population starts above 4 million it will tend towards 4 million. If it ever drops below 4 million, humans will die out on the planet. This scenario is not one that we (as the human fast food proprietor) want to be in. A small perturbation of the equilibrium state and we are out of business. There is no room for error. See .  Finally if we are harvesting at 2 million humans per year, there are no critical points. The population will always plummet towards zero, no matter how well stocked the planet starts. See .   The slope field and some solutions of .       Geogebra Activity: Try to sketch by hand the phase diagram for each of the following equations, then use this Geogebra phase diagram plotter to verify your answers.          Exercises    Consider .    Draw the phase diagram, find the critical points, and mark them stable or unstable.    Sketch typical solutions of the equation.    Find for the solution with the initial condition .        Consider .    Draw the phase diagram for . On this interval mark the critical points stable or unstable.    Sketch typical solutions of the equation.    Find for the solution with the initial condition .        Suppose is positive for , it is zero when and , and it is negative for all other .    Draw the phase diagram for , find the critical points, and mark them stable or unstable.    Sketch typical solutions of the equation.    Find for the solution with the initial condition .        Start with the logistic equation . Suppose we modify our harvesting. That is we will only harvest an amount proportional to current population. In other words, we harvest per unit of time for some (similar to earlier example with replaced with ).    Construct the differential equation.    Show that if , then the equation is still logistic.    What happens when ?      (a)  (b) Rearranging \\[ \\frac{dx}{dt}=kx\\left(\\frac{kM-h}{k}-x\\right) \\] The term in this case, and we cane rename it to making the equation \\[ \\frac{dx}{dt}=kx(N-x) \\] With and positive, making this the logistic equation again. (c) If then , so the critical points are at and . The latter point can be ignored since the population can only be positive. Substituting positive x values in gives negative values, hence , i.e. the population collapses.      A disease is spreading through the country. Let be the number of people infected. Let the constant be the number of people susceptible to infection. The infection rate is proportional to the product of already infected people, , and the number of susceptible but uninfected people, .    Write down the differential equation.    Supposing , that is, some people are infected at time , what is .    Does the solution to part b) agree with your intuition? Why or why not?      (a)  (b)  (c) It does, since the solution in part (b) says that if initially some population is infected, this will lead to the number of infected people ( ) to become equal to the whole susceptible population ( ) after a long time. This is a reasonable expectation.      Let .    Sketch the phase diagram and find critical points.    Classify the critical points.    If , then find .      a) 0, 1, 2 are critical points. b) is unstable (semistable), is stable, and is unstable. c) 1      Let .    Find and classify all critical points.    Find given any initial condition.      a) There are no critical points. b)       Assume that a population of fish in a lake satisfies . Now suppose that fish are continually added at fish per unit of time.    Find the differential equation for .    What is the new limiting population?      a)  b)       Suppose for two numbers .    Find the critical points, and classify them.    For b), c), d), find based on the phase diagram.     ,     ,     .      a) is a stable critical point, is an unstable one. b) , c) , d) or DNE.     "
},
{
  "id": "first-autonomous",
  "level": "2",
  "url": "auteq_section.html#first-autonomous",
  "type": "Video",
  "number": "1.6.1",
  "title": "Autonomous Equations.",
  "body": " Autonomous Equations  An Autonomous equation ONLY depends on the dependent variable. This simplification allows a lot of special types of analysis such as equilibrium values, stability, and what happens as t gets large.   "
},
{
  "id": "X2_2_coffeefig",
  "level": "2",
  "url": "auteq_section.html#X2_2_coffeefig",
  "type": "Figure",
  "number": "1.11",
  "title": "",
  "body": " The slope field and some solutions of .   "
},
{
  "id": "X2_2_logisticfig",
  "level": "2",
  "url": "auteq_section.html#X2_2_logisticfig",
  "type": "Figure",
  "number": "1.12",
  "title": "",
  "body": " The slope field and some solutions of .   "
},
{
  "id": "first-logistic",
  "level": "2",
  "url": "auteq_section.html#first-logistic",
  "type": "Video",
  "number": "1.6.2",
  "title": "Logistic Equation.",
  "body": " Logistic Equation  Exponential growth is great and all, but is it realistic that biological systems grow unbounded forever? In this video we will explore modelling with Logistic Growth to account for this difficulty.   "
},
{
  "id": "X2_2_harv1",
  "level": "2",
  "url": "auteq_section.html#X2_2_harv1",
  "type": "Figure",
  "number": "1.13",
  "title": "",
  "body": " The slope field and some solutions of .   "
},
{
  "id": "X2_2_harvc",
  "level": "2",
  "url": "auteq_section.html#X2_2_harvc",
  "type": "Figure",
  "number": "1.14",
  "title": "",
  "body": " The slope field and some solutions of .   "
},
{
  "id": "X2_2_harv2",
  "level": "2",
  "url": "auteq_section.html#X2_2_harv2",
  "type": "Figure",
  "number": "1.15",
  "title": "",
  "body": " The slope field and some solutions of .   "
},
{
  "id": "auteq_section-2-26",
  "level": "2",
  "url": "auteq_section.html#auteq_section-2-26",
  "type": "Example",
  "number": "1.6.1",
  "title": "",
  "body": "   Geogebra Activity: Try to sketch by hand the phase diagram for each of the following equations, then use this Geogebra phase diagram plotter to verify your answers.       "
},
{
  "id": "auteq_section-3-2",
  "level": "2",
  "url": "auteq_section.html#auteq_section-3-2",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": "  Consider .    Draw the phase diagram, find the critical points, and mark them stable or unstable.    Sketch typical solutions of the equation.    Find for the solution with the initial condition .     "
},
{
  "id": "auteq_section-3-3",
  "level": "2",
  "url": "auteq_section.html#auteq_section-3-3",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "",
  "body": "  Consider .    Draw the phase diagram for . On this interval mark the critical points stable or unstable.    Sketch typical solutions of the equation.    Find for the solution with the initial condition .     "
},
{
  "id": "auteq_section-3-4",
  "level": "2",
  "url": "auteq_section.html#auteq_section-3-4",
  "type": "Exercise",
  "number": "1.6.3",
  "title": "",
  "body": "  Suppose is positive for , it is zero when and , and it is negative for all other .    Draw the phase diagram for , find the critical points, and mark them stable or unstable.    Sketch typical solutions of the equation.    Find for the solution with the initial condition .     "
},
{
  "id": "auteq_section-3-5",
  "level": "2",
  "url": "auteq_section.html#auteq_section-3-5",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "",
  "body": "  Start with the logistic equation . Suppose we modify our harvesting. That is we will only harvest an amount proportional to current population. In other words, we harvest per unit of time for some (similar to earlier example with replaced with ).    Construct the differential equation.    Show that if , then the equation is still logistic.    What happens when ?      (a)  (b) Rearranging \\[ \\frac{dx}{dt}=kx\\left(\\frac{kM-h}{k}-x\\right) \\] The term in this case, and we cane rename it to making the equation \\[ \\frac{dx}{dt}=kx(N-x) \\] With and positive, making this the logistic equation again. (c) If then , so the critical points are at and . The latter point can be ignored since the population can only be positive. Substituting positive x values in gives negative values, hence , i.e. the population collapses.   "
},
{
  "id": "auteq_section-3-6",
  "level": "2",
  "url": "auteq_section.html#auteq_section-3-6",
  "type": "Exercise",
  "number": "1.6.5",
  "title": "",
  "body": "  A disease is spreading through the country. Let be the number of people infected. Let the constant be the number of people susceptible to infection. The infection rate is proportional to the product of already infected people, , and the number of susceptible but uninfected people, .    Write down the differential equation.    Supposing , that is, some people are infected at time , what is .    Does the solution to part b) agree with your intuition? Why or why not?      (a)  (b)  (c) It does, since the solution in part (b) says that if initially some population is infected, this will lead to the number of infected people ( ) to become equal to the whole susceptible population ( ) after a long time. This is a reasonable expectation.   "
},
{
  "id": "auteq_section-3-7",
  "level": "2",
  "url": "auteq_section.html#auteq_section-3-7",
  "type": "Exercise",
  "number": "1.6.6",
  "title": "",
  "body": "  Let .    Sketch the phase diagram and find critical points.    Classify the critical points.    If , then find .      a) 0, 1, 2 are critical points. b) is unstable (semistable), is stable, and is unstable. c) 1   "
},
{
  "id": "auteq_section-3-8",
  "level": "2",
  "url": "auteq_section.html#auteq_section-3-8",
  "type": "Exercise",
  "number": "1.6.7",
  "title": "",
  "body": "  Let .    Find and classify all critical points.    Find given any initial condition.      a) There are no critical points. b)    "
},
{
  "id": "auteq_section-3-9",
  "level": "2",
  "url": "auteq_section.html#auteq_section-3-9",
  "type": "Exercise",
  "number": "1.6.8",
  "title": "",
  "body": "  Assume that a population of fish in a lake satisfies . Now suppose that fish are continually added at fish per unit of time.    Find the differential equation for .    What is the new limiting population?      a)  b)    "
},
{
  "id": "auteq_section-3-10",
  "level": "2",
  "url": "auteq_section.html#auteq_section-3-10",
  "type": "Exercise",
  "number": "1.6.9",
  "title": "",
  "body": "  Suppose for two numbers .    Find the critical points, and classify them.    For b), c), d), find based on the phase diagram.     ,     ,     .      a) is a stable critical point, is an unstable one. b) , c) , d) or DNE.   "
},
{
  "id": "numer_section",
  "level": "1",
  "url": "numer_section.html",
  "type": "Section",
  "number": "1.7",
  "title": "Numerical methods: Euler’s method",
  "body": " Numerical methods: Euler's method   Note: 1 lecture, can safely be skipped, §2.4 in , §8.1 in  Unless is of a special form, it is generally very hard if not impossible to get a nice formula for the solution of the problem   If the equation can be solved in closed form, we should do that. But what if we have an equation that cannot be solved in closed form? What if we want to find the value of the solution at some particular ? Or perhaps we want to produce a graph of the solution to inspect the behavior. In this section we will learn about the basics of numerical approximation of solutions.  The simplest method for approximating a solution is Euler's method Euler's method Named after the Swiss mathematician Leonhard Paul Euler (1707–1783). The correct pronunciation of the name sounds more like oiler. . It works as follows: Take and compute the slope . The slope is the change in per unit change in . Follow the line for an interval of length on the -axis. Hence if at , then we say that (the approximate value of at ) is . Rinse, repeat! Let , and then compute , and . Now compute and using and , etc. Consider the equation , , and . Then and . We compute We then draw an approximate graph of the solution by connecting the points , , ,.... For the first two steps of the method see .   First two steps of Euler's method with for the equation with initial conditions .    More abstractly, for any , we compute The line segments we get are an approximate graph of the solution. Generally it is not exactly the solution. See for the plot of the real solution and the approximation.   Two steps of Euler's method (step size 1) and the exact solution for the equation with initial conditions .    We continue with the equation , . Let us try to approximate using Euler's method. In Figures and we have graphically approximated with step size 1. With step size 1, we have . The real answer is 3. We are approximately 1.074 off. Let us halve the step size. Computing with , we find that , so an error of about 0.791. gives the values computed for various parameters.    Solve this equation exactly and show that .    The difference between the actual solution and the approximate solution is called the error. We usually talk about just the size of the error and we do not care much about its sign. The point is, we usually do not know the real solution, so we only have a vague understanding of the error. If we knew the error exactly ... what is the point of doing the approximation?   Euler's method approximation of where of , .   Approximate Error  1 1.92593 1.07407  0.5 2.20861 0.79139 0.73681  0.25 2.47250 0.52751 0.66656  0.125 2.68034 0.31966 0.60599  0.0625 2.82040 0.17960 0.56184  0.03125 2.90412 0.09588 0.53385  0.015625 2.95035 0.04965 0.51779  0.0078125 2.97472 0.02528 0.50913    Notice that except for the first few times, every time we halved the interval the error approximately halved. This halving of the error is a general feature of Euler's method as it is a first order method first order method . There exists an improved Euler method, see the exercises, which is a second order method second order method . A second order method reduces the error to approximately one quarter every time we halve the interval. The meaning of second order is the squaring in .  To get the error to be within 0.1 of the answer we had to already do 64 steps. To get it to within 0.01 we would have to halve another three or four times, meaning doing 512 to 1024 steps. That is quite a bit to do by hand. The improved Euler method from the exercises should quarter the error every time we halve the interval, so we would have to approximately do half as many halvings to get the same error. This reduction can be a big deal. With 10 halvings (starting at ) we have 1024 steps, whereas with 5 halvings we only have to do 32 steps, assuming that the error was comparable to start with. A computer may not care about this difference for a problem this simple, but suppose each step would take a second to compute (the function may be substantially more difficult to compute than ). Then the difference is 32 seconds versus about 17 minutes. We are not being altogether fair, a second order method would probably double the time to do each step. Even so, it is 1 minute versus 17 minutes. Next, suppose that we have to repeat such a calculation for different parameters a thousand times. You get the idea.  Note that in practice we do not know how large the error is! How do we know what is the right step size? Well, essentially we keep halving the interval, and if we are lucky, we can estimate the error from a few of these calculations and the assumption that the error goes down by a factor of one half each time (if we are using standard Euler).  Exericse: In the table above, suppose you do not know the error. Take the approximate values of the function in the last two lines, assume that the error goes down by a factor of 2. Can you estimate the error in the last time from this? Does it (approximately) agree with the table? Now do it for the first two rows. Does this agree with the table?  Let us talk a little bit more about the example , . Suppose that instead of the value we wish to find . The results of this effort are listed in for successive halvings of . What is going on here? Well, you should solve the equation exactly and you will notice that the solution does not exist at . In fact, the solution goes to infinity when you approach .   Attempts to use Euler's to approximate where of , .   Approximate  1 3.16232  0.5 4.54329  0.25 6.86079  0.125 10.80321  0.0625 17.59893  0.03125 29.46004  0.015625 50.40121  0.0078125 87.75769    Another case where things go bad is if the solution oscillates wildly near some point. The solution may exist at all points, but even a much better numerical method than Euler would need an insanely small step size to approximate the solution with reasonable precision. And computers might not be able to easily handle such a small step size.  In real applications we would not use a simple method such as Euler's. The simplest method that would probably be used in a real application is the standard Runge–Kutta method (see exercises). That is a fourth order method fourth order method , meaning that if we halve the interval, the error generally goes down by a factor of 16 (it is fourth order as ).  Choosing the right method to use and the right step size can be very tricky. There are several competing factors to consider.    Computational time: Each step takes computer time. Even if the function is simple to compute, we do it many times over. Large step size means faster computation, but perhaps not the right precision.    Roundoff errors: Computers only compute with a certain number of significant digits. Errors introduced by rounding numbers off during our computations become noticeable when the step size becomes too small relative to the quantities we are working with. So reducing step size may in fact make errors worse. There is a certain optimum step size such that the precision increases as we approach it, but then starts getting worse as we make our step size smaller still. Trouble is: this optimum may be hard to find.    Stability: Certain equations may be numerically unstable. What may happen is that the numbers never seem to stabilize no matter how many times we halve the interval. We may need a ridiculously small interval size, which may not be practical due to roundoff errors or computational time considerations. Such problems are sometimes called stiff stiff problem . In the worst case, the numerical computations might be giving us bogus numbers that look like a correct answer. Just because the numbers seem to have stabilized after successive halving, does not mean that we must have the right answer.    We have seen just the beginnings of the challenges that appear in real applications. Numerical approximation of solutions to differential equations is an active research area for engineers and mathematicians. For example, the general purpose method used for the ODE solver in Matlab and Octave (as of this writing) is a method that appeared in the literature only in the 1980s.    Exercises    Consider , . Use Euler's method with step size to approximate .      Consider , .    Use Euler's method with step sizes to approximate .    Solve the equation exactly.    Describe what happens to the errors for each you used. That is, find the factor by which the error changed each time you halved the interval.        Approximate the value of by looking at the initial value problem with and approximating using Euler's method with a step size of .      Example of numerical instability: Take , . We know that the solution should decay to zero as grows. Using Euler's method, start with and compute to try to approximate . What happened? Now halve the interval. Keep halving the interval and approximating until the numbers you are getting start to stabilize (that is, until they start going towards zero). Note: You might want to use a calculator.    The simplest method used in practice is the Runge–Kutta method Runge–Kutta method . Consider , , and a step size . Everything is the same as in Euler's method, except the computation of and .     Consider , .    Use Runge–Kutta (see above) with step sizes and to approximate .    Use Euler's method with and .    Solve exactly, find the exact value of , and compare.        Let , and . Approximate using Euler's method with step sizes 1, 0.5, 0.25. Use a calculator and compute up to 4 decimal digits.    Approximately: 1.0000, 1.2397, 1.3829      Let , and .    Approximate using Euler's method with step sizes 4, 2, and 1.    Solve exactly, and compute the errors.    Compute the factor by which the errors changed.      a) 0, 8, 12 b) , so errors are: 16, 8, 4. c) Factors are 0.5, 0.5, 0.5.      Let , and .    Approximate using Euler's method with step sizes 4, 2, and 1.    Guess an exact solution based on part a) and compute the errors.      a) 0, 0, 0 b) is a solution so errors are: 0, 0, 0.    There is a simple way to improve Euler's method to make it a second order method by doing just one extra step. Improved Euler's method Consider , , and a step size . What we do is to pretend we compute the next step as in Euler, that is, we start with , we compute a slope , and then look at the point . Instead of letting our new point be , we compute the slope at that point, call it , and then take the average of and , hoping that the average is going to be closer to the actual slope on the interval from to . And we are correct, if we halve the step, the error should go down by a factor of . To summarize, the setup is the same as for regular Euler, except the computation of and .     Consider , .    Use the improved Euler's method (see above) with step sizes and to approximate .    Use Euler's method with and .    Solve exactly, find the exact value of .    Compute the errors, and the factors by which the errors changed.      a) Improved Euler: for , for , b) Standard Euler: for , for , c) , so is approximately . d) Approximate errors for improved Euler: for , and for . For standard Euler: for , and for . Factor is approximately for improved Euler, and for standard Euler.     "
},
{
  "id": "euler-step12_fig",
  "level": "2",
  "url": "numer_section.html#euler-step12_fig",
  "type": "Figure",
  "number": "1.16",
  "title": "",
  "body": " First two steps of Euler's method with for the equation with initial conditions .   "
},
{
  "id": "euler-step12-sol_fig",
  "level": "2",
  "url": "numer_section.html#euler-step12-sol_fig",
  "type": "Figure",
  "number": "1.17",
  "title": "",
  "body": " Two steps of Euler's method (step size 1) and the exact solution for the equation with initial conditions .   "
},
{
  "id": "numer_section-2-9",
  "level": "2",
  "url": "numer_section.html#numer_section-2-9",
  "type": "Exercise",
  "number": "1.7.1",
  "title": "",
  "body": "  Solve this equation exactly and show that .   "
},
{
  "id": "euler-table_table",
  "level": "2",
  "url": "numer_section.html#euler-table_table",
  "type": "Table",
  "number": "1.7.1",
  "title": "Euler’s method approximation of <span class=\"process-math\">\\(y(2)\\)<\/span> where of <span class=\"process-math\">\\(y'=\\nicefrac{y^2}{3}\\text{,}\\)<\/span> <span class=\"process-math\">\\(y(0)=1\\text{.}\\)<\/span>",
  "body": " Euler's method approximation of where of , .   Approximate Error  1 1.92593 1.07407  0.5 2.20861 0.79139 0.73681  0.25 2.47250 0.52751 0.66656  0.125 2.68034 0.31966 0.60599  0.0625 2.82040 0.17960 0.56184  0.03125 2.90412 0.09588 0.53385  0.015625 2.95035 0.04965 0.51779  0.0078125 2.97472 0.02528 0.50913   "
},
{
  "id": "euler-table2_table",
  "level": "2",
  "url": "numer_section.html#euler-table2_table",
  "type": "Table",
  "number": "1.7.2",
  "title": "Attempts to use Euler’s to approximate <span class=\"process-math\">\\(y(3)\\)<\/span> where of <span class=\"process-math\">\\(y'=\\nicefrac{y^2}{3}\\text{,}\\)<\/span> <span class=\"process-math\">\\(y(0)=1\\text{.}\\)<\/span>",
  "body": " Attempts to use Euler's to approximate where of , .   Approximate  1 3.16232  0.5 4.54329  0.25 6.86079  0.125 10.80321  0.0625 17.59893  0.03125 29.46004  0.015625 50.40121  0.0078125 87.75769   "
},
{
  "id": "numer_section-3-2",
  "level": "2",
  "url": "numer_section.html#numer_section-3-2",
  "type": "Exercise",
  "number": "1.7.2",
  "title": "",
  "body": "  Consider , . Use Euler's method with step size to approximate .   "
},
{
  "id": "numer_section-3-3",
  "level": "2",
  "url": "numer_section.html#numer_section-3-3",
  "type": "Exercise",
  "number": "1.7.3",
  "title": "",
  "body": "  Consider , .    Use Euler's method with step sizes to approximate .    Solve the equation exactly.    Describe what happens to the errors for each you used. That is, find the factor by which the error changed each time you halved the interval.     "
},
{
  "id": "numer_section-3-4",
  "level": "2",
  "url": "numer_section.html#numer_section-3-4",
  "type": "Exercise",
  "number": "1.7.4",
  "title": "",
  "body": "  Approximate the value of by looking at the initial value problem with and approximating using Euler's method with a step size of .   "
},
{
  "id": "numer_section-3-5",
  "level": "2",
  "url": "numer_section.html#numer_section-3-5",
  "type": "Exercise",
  "number": "1.7.5",
  "title": "",
  "body": "  Example of numerical instability: Take , . We know that the solution should decay to zero as grows. Using Euler's method, start with and compute to try to approximate . What happened? Now halve the interval. Keep halving the interval and approximating until the numbers you are getting start to stabilize (that is, until they start going towards zero). Note: You might want to use a calculator.   "
},
{
  "id": "numer_section-3-7",
  "level": "2",
  "url": "numer_section.html#numer_section-3-7",
  "type": "Exercise",
  "number": "1.7.6",
  "title": "",
  "body": "  Consider , .    Use Runge–Kutta (see above) with step sizes and to approximate .    Use Euler's method with and .    Solve exactly, find the exact value of , and compare.     "
},
{
  "id": "numer_section-3-8",
  "level": "2",
  "url": "numer_section.html#numer_section-3-8",
  "type": "Exercise",
  "number": "1.7.7",
  "title": "",
  "body": "  Let , and . Approximate using Euler's method with step sizes 1, 0.5, 0.25. Use a calculator and compute up to 4 decimal digits.    Approximately: 1.0000, 1.2397, 1.3829   "
},
{
  "id": "numer_section-3-9",
  "level": "2",
  "url": "numer_section.html#numer_section-3-9",
  "type": "Exercise",
  "number": "1.7.8",
  "title": "",
  "body": "  Let , and .    Approximate using Euler's method with step sizes 4, 2, and 1.    Solve exactly, and compute the errors.    Compute the factor by which the errors changed.      a) 0, 8, 12 b) , so errors are: 16, 8, 4. c) Factors are 0.5, 0.5, 0.5.   "
},
{
  "id": "numer_section-3-10",
  "level": "2",
  "url": "numer_section.html#numer_section-3-10",
  "type": "Exercise",
  "number": "1.7.9",
  "title": "",
  "body": "  Let , and .    Approximate using Euler's method with step sizes 4, 2, and 1.    Guess an exact solution based on part a) and compute the errors.      a) 0, 0, 0 b) is a solution so errors are: 0, 0, 0.   "
},
{
  "id": "numer_section-3-12",
  "level": "2",
  "url": "numer_section.html#numer_section-3-12",
  "type": "Exercise",
  "number": "1.7.10",
  "title": "",
  "body": "  Consider , .    Use the improved Euler's method (see above) with step sizes and to approximate .    Use Euler's method with and .    Solve exactly, find the exact value of .    Compute the errors, and the factors by which the errors changed.      a) Improved Euler: for , for , b) Standard Euler: for , for , c) , so is approximately . d) Approximate errors for improved Euler: for , and for . For standard Euler: for , and for . Factor is approximately for improved Euler, and for standard Euler.   "
},
{
  "id": "exact_section",
  "level": "1",
  "url": "exact_section.html",
  "type": "Section",
  "number": "1.8",
  "title": "Exact equations",
  "body": " Exact equations   Note: 1–2 lectures, can safely be skipped, §1.6 in , §2.6 in  Another type of equation that comes up quite often in physics and engineering is an exact equation exact equation . Suppose is a function of two variables, which we call the potential function potential function . The naming should suggest potential energy, or electric potential. Exact equations and potential functions appear when there is a conservation law at play, such as conservation of energy. Let us make up a simple example. Let    Solutions to for various .    We are interested in the lines of constant energy, that is lines where the energy is conserved; we want curves where , for some constant . In our example, the curves are circles. See .  We take the total derivative total derivative of : For convenience, we will make use of the notation of and . In our example, We apply the total derivative to , to find the differential equation . The differential equation we obtain in such a way has the form An equation of this form is called exact if it was obtained as for some potential function . In our simple example, we obtain the equation Since we obtained this equation by differentiating , the equation is exact. We often wish to solve for in terms of . In our example,   An interpretation of the setup is that at each point is a vector in the plane, that is, a direction and a magnitude. As and are functions of , we have a vector field vector field . The particular vector field that comes from an exact equation is a so-called conservative vector field conservative vector field , that is, a vector field that comes with a potential function , such that Let be a path in the plane starting at and ending at . If we think of as force, then the work required to move along is That is, the work done only depends on endpoints, that is where we start and where we end. For example, suppose is gravitational potential. The derivative of given by is the gravitational force. What we are saying is that the work required to move a heavy box from the ground floor to the roof, only depends on the change in potential energy. That is, the work done is the same no matter what path we took; if we took the stairs or the elevator. Although if we took the elevator, the elevator is doing the work for us. The curves are those where no work need be done, such as the heavy box sliding along without accelerating or breaking on a perfectly flat roof, on a cart with incredibly well oiled wheels.  An exact equation is a conservative vector field, and the implicit solution of this equation is the potential function.    Solving exact equations  Now you, the reader, should ask: Where did we solve a differential equation? Well, in applications we generally know and , but we do not know . That is, we may have just started with , or perhaps even It is up to us to find some potential that works. Many different will work; adding a constant to does not change the equation. Once we have a potential function , the equation gives an implicit solution of the ODE.    Let us find the general solution to . Forget we knew what was.  If we know that this is an exact equation, we start looking for a potential function . We have and . If exists, it must be such that . Integrate in the variable to find for some function . The function is the constant of integration , though it is only constant as far as is concerned, and may still depend on . Now differentiate in and set it equal to , which is what is supposed to be: Integrating, we find . We could add a constant of integration if we wanted to, but there is no need. We found . Next for a constant , we solve for in terms of . In this case, we obtain as we did before.    Exercise: Why did we not need to add a constant of integration when integrating ? Add a constant of integration, say , and see what you get. What is the difference from what we got above, and why does it not matter?  The procedure, once we know that the equation is exact, is:    Integrate in resulting in .    Differentiate this in , and set that equal to , so that we may find by integration.    The procedure can also be done by first integrating in and then differentiating in . Pretty easy huh? Let's try this again.    Consider now .  OK, so and . We try to proceed as before. Suppose exists. Then . We integrate: for some function . Differentiate in and set equal to : But there is no way to satisfy this requirement! The function cannot be written as plus a function of . The equation is not exact; no potential function exists.    Is there an easier way to check for the existence of , other than failing in trying to find it? Turns out there is. Suppose and . Then as long as the second derivatives are continuous, Let us state it as a theorem. Usually this is called the Poincaré Lemma Named for the French polymath Jules Henri Poincaré (1854–1912). .   Poincaré   If and are continuously differentiable functions of , and , then near any point there is a function such that and .    The theorem doesn't give us a global defined everywhere. In general, we can only find the potential locally, near some initial point. By this time, we have come to expect this from differential equations.  Let us return to where and . Notice and , which are clearly not equal. The equation is not exact.    Solve We write the equation as so and . Then The equation is exact. Integrating in , we find Differentiating in and setting to , we find So , and will work. Take . We wish to solve . First let us find . As then . Therefore , so . Now we solve for to get       Solve We leave to the reader to check that .  This vector field is not conservative if considered as a vector field of the entire plane minus the origin. The problem is that if the curve is a circle around the origin, say starting at and ending at going counterclockwise, then if existed we would expect That is nonsense! We leave the computation of the path integral to the interested reader, or you can consult your multivariable calculus textbook. So there is no potential function defined everywhere outside the origin .  If we think back to the theorem, it does not guarantee such a function anyway. It only guarantees a potential function locally, that is only in some region near the initial point. As we start at the point . Considering and integrating in or in , we find The implicit solution is . Solving, . That is, the solution is a straight line. Solving gives us that , and so is the desired solution. See , and note that the solution only exists for .   Solution to , , with initial point marked.        Solve   The reader should check that this equation is exact. Let and . We follow the procedure for exact equations and Therefore or and . We try to solve . We easily solve for and then just take the square root: When , the term in front of vanishes. You can also see that our solution is not valid in that case. However, one could in that case try to solve for in terms of starting from the implicit solution . The solution is somewhat messy and we leave it as implicit.      Integrating factors  Sometimes an equation is not exact, but it can be made exact by multiplying with a function . That is, perhaps for some nonzero function , is exact. Any solution to this new equation is also a solution to .  In fact, a linear equation is always such an equation. Let be the integrating factor for a linear equation. Multiply the equation by and write it in the form of . Then , so , while , so . In other words, we have an exact equation. Integrating factors for linear functions are just a special case of integrating factors for exact equations.  But how do we find the integrating factor ? Well, given an equation  should be a function such that Therefore, At first it may seem we replaced one differential equation by another. True, but all hope is not lost.  A strategy that often works is to look for a that is a function of alone, or a function of alone. If is a function of alone, that is , then we write instead of , and is just zero. Then In particular, ought to be a function of alone (not depend on ). If so, then we have a linear equation Letting , we solve using the standard integrating factor method, to find . The constant in the solution is not relevant, we need any nonzero solution, so we take . Then is the integrating factor.  Similarly we could try a function of the form . Then In particular, ought to be a function of alone. If so, then we have a linear equation Letting , we find . We take . So is the integrating factor.    Solve   Let and . Compute As this is not zero, the equation is not exact. We notice is a function of alone. We compute the integrating factor We multiply our given equation by to obtain which is an exact equation that we solved in . The solution was       Solve   First compute As this is not zero, the equation is not exact. We observe is a function of alone. We compute the integrating factor Therefore we look at the exact equation The reader should double check that this equation is exact. We follow the procedure for exact equations and Consequently or . Thus . It is not possible to solve for in terms of elementary functions, so let us be content with the implicit solution: We are looking for the general solution and we divided by above. We should check what happens when , as the equation itself makes perfect sense in that case. We plug in to find the equation is satisfied. So is also a solution.      Exercises    Solve the following exact equations, implicit general solutions will suffice:                            Find the integrating factor for the following equations making them into exact equations:                            Suppose you have an equation of the form: .    Show it is exact.    Find the form of the potential function in terms of and .        Suppose that we have the equation .    Is this equation exact?    Find the general solution using a definite integral.        Find the potential function of the exact equation in two different ways.    Integrate in terms of and then differentiate in and set to .    Integrate in terms of and then differentiate in and set to .        A function is said to be a harmonic function harmonic function if .    Show if is harmonic, is an exact equation. So there exists (at least locally) the so-called harmonic conjugate harmonic conjugate function such that and .    Verify that the following are harmonic and find the corresponding harmonic conjugates :                       Solve the following exact equations, implicit general solutions will suffice:                          a)  b)  c)  d)       Find the integrating factor for the following equations making them into exact equations:                          a) Integrating factor is , equation becomes . b) Integrating factor is , equation becomes . c) Integrating factor is , equation becomes . d) Integrating factor is , equation becomes .          Show that every separable equation can be written as an exact equation, and verify that it is indeed exact.    Using this rewrite as an exact equation, solve it and verify that the solution is the same as it was in .      a) The equation is , and this is exact because , , so . b) , leads to potential function , solving leads to the same solution as the example.     "
},
{
  "id": "exact_circlesfig",
  "level": "2",
  "url": "exact_section.html#exact_circlesfig",
  "type": "Figure",
  "number": "1.18",
  "title": "",
  "body": " Solutions to for various .   "
},
{
  "id": "exact_section-3-3",
  "level": "2",
  "url": "exact_section.html#exact_section-3-3",
  "type": "Example",
  "number": "1.8.1",
  "title": "",
  "body": "  Let us find the general solution to . Forget we knew what was.  If we know that this is an exact equation, we start looking for a potential function . We have and . If exists, it must be such that . Integrate in the variable to find for some function . The function is the constant of integration , though it is only constant as far as is concerned, and may still depend on . Now differentiate in and set it equal to , which is what is supposed to be: Integrating, we find . We could add a constant of integration if we wanted to, but there is no need. We found . Next for a constant , we solve for in terms of . In this case, we obtain as we did before.   "
},
{
  "id": "exact_example_2xyandxy",
  "level": "2",
  "url": "exact_section.html#exact_example_2xyandxy",
  "type": "Example",
  "number": "1.8.2",
  "title": "",
  "body": "  Consider now .  OK, so and . We try to proceed as before. Suppose exists. Then . We integrate: for some function . Differentiate in and set equal to : But there is no way to satisfy this requirement! The function cannot be written as plus a function of . The equation is not exact; no potential function exists.   "
},
{
  "id": "exact_section-3-10",
  "level": "2",
  "url": "exact_section.html#exact_section-3-10",
  "type": "Theorem",
  "number": "1.8.1",
  "title": "Poincaré.",
  "body": " Poincaré   If and are continuously differentiable functions of , and , then near any point there is a function such that and .   "
},
{
  "id": "exact_section-3-13",
  "level": "2",
  "url": "exact_section.html#exact_section-3-13",
  "type": "Example",
  "number": "1.8.3",
  "title": "",
  "body": "  Solve We write the equation as so and . Then The equation is exact. Integrating in , we find Differentiating in and setting to , we find So , and will work. Take . We wish to solve . First let us find . As then . Therefore , so . Now we solve for to get    "
},
{
  "id": "exact_section-3-14",
  "level": "2",
  "url": "exact_section.html#exact_section-3-14",
  "type": "Example",
  "number": "1.8.4",
  "title": "",
  "body": "  Solve We leave to the reader to check that .  This vector field is not conservative if considered as a vector field of the entire plane minus the origin. The problem is that if the curve is a circle around the origin, say starting at and ending at going counterclockwise, then if existed we would expect That is nonsense! We leave the computation of the path integral to the interested reader, or you can consult your multivariable calculus textbook. So there is no potential function defined everywhere outside the origin .  If we think back to the theorem, it does not guarantee such a function anyway. It only guarantees a potential function locally, that is only in some region near the initial point. As we start at the point . Considering and integrating in or in , we find The implicit solution is . Solving, . That is, the solution is a straight line. Solving gives us that , and so is the desired solution. See , and note that the solution only exists for .   Solution to , , with initial point marked.     "
},
{
  "id": "exact_exampleabove",
  "level": "2",
  "url": "exact_section.html#exact_exampleabove",
  "type": "Example",
  "number": "1.8.5",
  "title": "",
  "body": "  Solve   The reader should check that this equation is exact. Let and . We follow the procedure for exact equations and Therefore or and . We try to solve . We easily solve for and then just take the square root: When , the term in front of vanishes. You can also see that our solution is not valid in that case. However, one could in that case try to solve for in terms of starting from the implicit solution . The solution is somewhat messy and we leave it as implicit.   "
},
{
  "id": "exact_section-4-7",
  "level": "2",
  "url": "exact_section.html#exact_section-4-7",
  "type": "Example",
  "number": "1.8.6",
  "title": "",
  "body": "  Solve   Let and . Compute As this is not zero, the equation is not exact. We notice is a function of alone. We compute the integrating factor We multiply our given equation by to obtain which is an exact equation that we solved in . The solution was    "
},
{
  "id": "exact_section-4-8",
  "level": "2",
  "url": "exact_section.html#exact_section-4-8",
  "type": "Example",
  "number": "1.8.7",
  "title": "",
  "body": "  Solve   First compute As this is not zero, the equation is not exact. We observe is a function of alone. We compute the integrating factor Therefore we look at the exact equation The reader should double check that this equation is exact. We follow the procedure for exact equations and Consequently or . Thus . It is not possible to solve for in terms of elementary functions, so let us be content with the implicit solution: We are looking for the general solution and we divided by above. We should check what happens when , as the equation itself makes perfect sense in that case. We plug in to find the equation is satisfied. So is also a solution.   "
},
{
  "id": "exact_section-5-2",
  "level": "2",
  "url": "exact_section.html#exact_section-5-2",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "",
  "body": "  Solve the following exact equations, implicit general solutions will suffice:                         "
},
{
  "id": "exact_section-5-3",
  "level": "2",
  "url": "exact_section.html#exact_section-5-3",
  "type": "Exercise",
  "number": "1.8.2",
  "title": "",
  "body": "  Find the integrating factor for the following equations making them into exact equations:                         "
},
{
  "id": "exact_section-5-4",
  "level": "2",
  "url": "exact_section.html#exact_section-5-4",
  "type": "Exercise",
  "number": "1.8.3",
  "title": "",
  "body": "  Suppose you have an equation of the form: .    Show it is exact.    Find the form of the potential function in terms of and .     "
},
{
  "id": "exact_section-5-5",
  "level": "2",
  "url": "exact_section.html#exact_section-5-5",
  "type": "Exercise",
  "number": "1.8.4",
  "title": "",
  "body": "  Suppose that we have the equation .    Is this equation exact?    Find the general solution using a definite integral.     "
},
{
  "id": "exact_section-5-6",
  "level": "2",
  "url": "exact_section.html#exact_section-5-6",
  "type": "Exercise",
  "number": "1.8.5",
  "title": "",
  "body": "  Find the potential function of the exact equation in two different ways.    Integrate in terms of and then differentiate in and set to .    Integrate in terms of and then differentiate in and set to .     "
},
{
  "id": "exact_section-5-7",
  "level": "2",
  "url": "exact_section.html#exact_section-5-7",
  "type": "Exercise",
  "number": "1.8.6",
  "title": "",
  "body": "  A function is said to be a harmonic function harmonic function if .    Show if is harmonic, is an exact equation. So there exists (at least locally) the so-called harmonic conjugate harmonic conjugate function such that and .    Verify that the following are harmonic and find the corresponding harmonic conjugates :                    "
},
{
  "id": "exact_section-5-8",
  "level": "2",
  "url": "exact_section.html#exact_section-5-8",
  "type": "Exercise",
  "number": "1.8.7",
  "title": "",
  "body": "  Solve the following exact equations, implicit general solutions will suffice:                          a)  b)  c)  d)    "
},
{
  "id": "exact_section-5-9",
  "level": "2",
  "url": "exact_section.html#exact_section-5-9",
  "type": "Exercise",
  "number": "1.8.8",
  "title": "",
  "body": "  Find the integrating factor for the following equations making them into exact equations:                          a) Integrating factor is , equation becomes . b) Integrating factor is , equation becomes . c) Integrating factor is , equation becomes . d) Integrating factor is , equation becomes .   "
},
{
  "id": "exact_section-5-10",
  "level": "2",
  "url": "exact_section.html#exact_section-5-10",
  "type": "Exercise",
  "number": "1.8.9",
  "title": "",
  "body": "      Show that every separable equation can be written as an exact equation, and verify that it is indeed exact.    Using this rewrite as an exact equation, solve it and verify that the solution is the same as it was in .      a) The equation is , and this is exact because , , so . b) , leads to potential function , solving leads to the same solution as the example.   "
},
{
  "id": "fopde_section",
  "level": "1",
  "url": "fopde_section.html",
  "type": "Section",
  "number": "1.9",
  "title": "First order linear PDE",
  "body": " First order linear PDE   We only considered ODE so far, so let us solve a linear first order PDE. Consider the equation where is a function of and . The initial condition initial condition for a PDE  is now a function of rather than just a number. In these problems, it is useful to think of as position and as time. The equation describes the evolution of a function of as time goes on. Below, the coefficients , , , and the function are mostly going to be constant or zero. The method we describe works with nonconstant coefficients, although the computations may get difficult quickly.  This method we use is the method of characteristics method of characteristics characteristics . The idea is that we find lines along which the equation is an ODE that we solve. We will see this technique again for second order PDE when we encounter the wave equation in .    Consider the equation This particular equation, , is called the transport equation transport equation .  The data will propagate along curves called characteristics. The idea is to change to the so-called characteristic coordinates characteristic coordinates . If we change to these coordinates, the equation simplifies. The change of variables for this equation is Let's see what the equation becomes. Remember the chain rule in several variables. The equation in the coordinates and becomes or in other words That is trivial to solve. Treating as simply a parameter, we have obtained the ODE .  The solution is a function that does not depend on (but it does depend on ). That is, there is some function such that The initial condition says that: so . In other words, Everything is simply moving right at speed as increases. The curve given by the equation is called the characteristic. See . In this case, the solution does not change along the characteristic.   Characteristic curves.    In the coordinates, the characteristic curves satisfy , and are in fact lines. The slope of characteristic lines is , and for each different we get a different characteristic line.  We see why is called the transport equation: everything travels at some constant speed. Sometimes this is called convection convection . An example application is material being moved by a river where the material does not diffuse and is simply carried along. In this setup, is the position along the river, is the time, and the concentration the material at position and time . See for an example.   Example of \\myquote{transport} in (that is, ) where the initial condition is a peak at the origin. On the left is a graph of the initial condition . On the right is a graph of the function , that is at time . Notice it is the same graph shifted one unit to the right.      We use similar idea in the more general case: We change coordinates to the characteristic coordinates. Let us call these coordinates . These are coordinates where becomes differentiation in the variable.  Along the characteristic curves (where is constant), we get a new ODE in the variable. In the transport equation, we got the simple . In general, we get the linear equation We think of everything as a function of and , although we are thinking of as a parameter rather than an independent variable. So the equation is an ODE. It is a linear ODE that we can solve using the integrating factor.  To find the characteristics, think of a curve given parametrically . We try to have the curve satisfy Why? Because when we think of and as functions of we find, using the chain rule, So we get the ODE , which then describes the value of the solution of the PDE along this characteristic curve. It is also convenient to make sure that corresponds to , that is . It will be convenient also for . See .   General characteristic curve.      Consider We find the characteristics, that is, the curves given by So for some and . At we want , and should be . So we let and :   The ODE is , and . So, the ODE to solve along the characteristic is The general solution of this equation, treating as a parameter, is , for some constant . At , our initial condition is that is , since at we have . Given this initial condition, we find . So, Substitute and to find in terms of and : See for a plot of as a function of two variables.   Plot of the solution to , .      When the coefficients are not constants, the characteristic curves are not going to be straight lines anymore.    Consider the following variable coefficient equation: We find the characteristics, that is, the curves given by So At , we wish to get the line , and should be . So   OK, the ODE we need to solve is This is for a fixed . At , we should get that is , so that is our initial condition. Consequently,     We make a few closing remarks. One thing to keep in mind is that we would get into trouble if the coefficient in front of , that is the , is ever zero. Let us consider a quick example of what can go wrong: This problem has no solution. If we had a solution, it would imply that , but . The problem is that the characteristic curve is now the line , and the solution is already provided on that line!  As long as is nonzero, it is convenient to ensure that is positive by multiplying by if necessary, so that positive means positive .  Another remark is that if or in the equation are variable, the computations can quickly get out of hand, as the expressions for the characteristic coordinates become messy and then solving the ODE becomes even messier. In the examples above, was always , meaning we got in the characteristic coordinates. If is not constant, your expression for will be more complicated.  Finding the characteristic coordinates is really a system of ODE in general if depends on or if depends on . In that case, we would need techniques of systems of ODE to solve, see or . In general, if and are not linear functions or constants, finding closed form expressions for the characteristic coordinates may be impossible.  Finally, the method of characteristics applies to nonlinear first order PDE as well. In the nonlinear case, the characteristics depend not only on the differential equation, but also on the initial data. This leads to not only more difficult computations, but also the formation of singularities where the solution breaks down at a certain point in time. An example application where first order nonlinear PDE come up is traffic flow theory, and you have probably experienced the formation of singularities: traffic jams. But we digress.    Exercises    Solve     ,  ,     ,  ,     ,  ,     ,  .        Solve , .      Solve , .      Solve , .          Find the characteristic coordinates for the following equations:  1) , , 2) , .    Solve the two equations using the coordinates.    Explain why you got the same solution, although the characteristic coordinates you found were different.        Solve , . Hint: Think a little out of the box.      Solve     , ,     , .      a)  b)       Solve , .           Solve , .          "
},
{
  "id": "fopde_section-2-3",
  "level": "2",
  "url": "fopde_section.html#fopde_section-2-3",
  "type": "Example",
  "number": "1.9.1",
  "title": "",
  "body": "  Consider the equation This particular equation, , is called the transport equation transport equation .  The data will propagate along curves called characteristics. The idea is to change to the so-called characteristic coordinates characteristic coordinates . If we change to these coordinates, the equation simplifies. The change of variables for this equation is Let's see what the equation becomes. Remember the chain rule in several variables. The equation in the coordinates and becomes or in other words That is trivial to solve. Treating as simply a parameter, we have obtained the ODE .  The solution is a function that does not depend on (but it does depend on ). That is, there is some function such that The initial condition says that: so . In other words, Everything is simply moving right at speed as increases. The curve given by the equation is called the characteristic. See . In this case, the solution does not change along the characteristic.   Characteristic curves.    In the coordinates, the characteristic curves satisfy , and are in fact lines. The slope of characteristic lines is , and for each different we get a different characteristic line.  We see why is called the transport equation: everything travels at some constant speed. Sometimes this is called convection convection . An example application is material being moved by a river where the material does not diffuse and is simply carried along. In this setup, is the position along the river, is the time, and the concentration the material at position and time . See for an example.   Example of \\myquote{transport} in (that is, ) where the initial condition is a peak at the origin. On the left is a graph of the initial condition . On the right is a graph of the function , that is at time . Notice it is the same graph shifted one unit to the right.     "
},
{
  "id": "fopde_charcurvecurvy",
  "level": "2",
  "url": "fopde_section.html#fopde_charcurvecurvy",
  "type": "Figure",
  "number": "1.22",
  "title": "",
  "body": " General characteristic curve.   "
},
{
  "id": "fopde_section-2-8",
  "level": "2",
  "url": "fopde_section.html#fopde_section-2-8",
  "type": "Example",
  "number": "1.9.2",
  "title": "",
  "body": "  Consider We find the characteristics, that is, the curves given by So for some and . At we want , and should be . So we let and :   The ODE is , and . So, the ODE to solve along the characteristic is The general solution of this equation, treating as a parameter, is , for some constant . At , our initial condition is that is , since at we have . Given this initial condition, we find . So, Substitute and to find in terms of and : See for a plot of as a function of two variables.   Plot of the solution to , .     "
},
{
  "id": "fopde_section-2-10",
  "level": "2",
  "url": "fopde_section.html#fopde_section-2-10",
  "type": "Example",
  "number": "1.9.3",
  "title": "",
  "body": "  Consider the following variable coefficient equation: We find the characteristics, that is, the curves given by So At , we wish to get the line , and should be . So   OK, the ODE we need to solve is This is for a fixed . At , we should get that is , so that is our initial condition. Consequently,    "
},
{
  "id": "fopde_section-3-2",
  "level": "2",
  "url": "fopde_section.html#fopde_section-3-2",
  "type": "Exercise",
  "number": "1.9.1",
  "title": "",
  "body": "  Solve     ,  ,     ,  ,     ,  ,     ,  .     "
},
{
  "id": "fopde_section-3-3",
  "level": "2",
  "url": "fopde_section.html#fopde_section-3-3",
  "type": "Exercise",
  "number": "1.9.2",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "fopde_section-3-4",
  "level": "2",
  "url": "fopde_section.html#fopde_section-3-4",
  "type": "Exercise",
  "number": "1.9.3",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "fopde_section-3-5",
  "level": "2",
  "url": "fopde_section.html#fopde_section-3-5",
  "type": "Exercise",
  "number": "1.9.4",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "fopde_section-3-6",
  "level": "2",
  "url": "fopde_section.html#fopde_section-3-6",
  "type": "Exercise",
  "number": "1.9.5",
  "title": "",
  "body": "      Find the characteristic coordinates for the following equations:  1) , , 2) , .    Solve the two equations using the coordinates.    Explain why you got the same solution, although the characteristic coordinates you found were different.     "
},
{
  "id": "fopde_section-3-7",
  "level": "2",
  "url": "fopde_section.html#fopde_section-3-7",
  "type": "Exercise",
  "number": "1.9.6",
  "title": "",
  "body": "  Solve , . Hint: Think a little out of the box.   "
},
{
  "id": "fopde_section-3-8",
  "level": "2",
  "url": "fopde_section.html#fopde_section-3-8",
  "type": "Exercise",
  "number": "1.9.7",
  "title": "",
  "body": "  Solve     , ,     , .      a)  b)    "
},
{
  "id": "fopde_section-3-9",
  "level": "2",
  "url": "fopde_section.html#fopde_section-3-9",
  "type": "Exercise",
  "number": "1.9.8",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "fopde_section-3-10",
  "level": "2",
  "url": "fopde_section.html#fopde_section-3-10",
  "type": "Exercise",
  "number": "1.9.9",
  "title": "",
  "body": "  Solve , .        "
},
{
  "id": "solinear_section",
  "level": "1",
  "url": "solinear_section.html",
  "type": "Section",
  "number": "2.1",
  "title": "Second order linear ODEs",
  "body": " Second order linear ODEs    2nd Order Linear Equations  We now move to 2nd order ODEs. We shall begin with 2nd order linear ODEs which are much easier to handle than nonlinear ODEs. Some of the theory, like Existence and Uniqueness parallel the 1st order case pretty well. However, we shall see that there are some new complications like Superposition to think about and we are going to have a lot of parallels to linear algebra here.    Let us consider the general second order linear differential equation second order linear differential equation  We usually divide through by to get where , , and . The word linear linear equation means that the equation contains no powers nor functions of , , and .  In the special case when , we have a so-called homogeneous homogeneous linear equation equation We have already seen some second order linear homogeneous equations.   If we know two solutions of a linear homogeneous equation, we know many more of them.   Superposition  superposition   Suppose and are two solutions of the homogeneous equation . Then also solves for arbitrary constants and .    That is, we can add solutions together and multiply them by constants to obtain new and different solutions. We call the expression a linear combination linear combination of and . Let us prove this theorem; the proof is very enlightening and illustrates how linear equations work.   Proof: Let . Then   The proof becomes even simpler to state if we use the operator notation. An operator operator is an object that eats functions and spits out functions (kind of like what a function is, but a function eats numbers and spits out numbers). Define the operator by The differential equation now becomes . The operator (and the equation) being linear linear operator means that . The proof above becomes   Two different solutions to the second equation are and . Let us remind ourselves of the definition, and . Therefore, these are solutions by superposition as they are linear combinations of the two exponential solutions.  The functions and are sometimes more convenient to use than the exponential. Let us review some of their properties:   Exercise: Derive these properties using the definitions of and in terms of exponentials.  Linear equations have nice and simple answers to the existence and uniqueness question.   Existence and uniqueness  existence and uniqueness   Suppose are continuous functions on some interval , is a number in , and are constants. The equation has exactly one solution defined on the same interval satisfying the initial conditions     For example, the equation with and has the solution   The equation with and has the solution Using and in this solution allows us to solve for the initial conditions in a cleaner way than if we have used the exponentials.  The initial conditions for a second order ODE consist of two equations. Common sense tells us that if we have two arbitrary constants and two equations, then we should be able to solve for the constants and find a solution to the differential equation satisfying the initial conditions.   Question: Suppose we find two different solutions and to the homogeneous equation . Can every solution be written (using superposition) in the form ?  Answer is affirmative! Provided that and are different enough in the following sense. We say and are linearly independent linearly independent if one is not a constant multiple of the other.    Let be continuous functions. Let and be two linearly independent solutions to the homogeneous equation . Then every other solution is of the form That is, is the general solution.    For example, we found the solutions and for the equation . It is not hard to see that sine and cosine are not constant multiples of each other. If for some constant , we let and this would imply . But then for all , which is preposterous. So and are linearly independent. Hence, is the general solution to .  For two functions, checking linear independence is rather simple. Let us see another example. Consider . Then and are solutions. To see that they are linearly indepedent, suppose one is a multple of the other: , we just have to find out that cannot be a constant. In this case we have , this most decidedly not a constant. So is the general solution.  If you have one solution to a second order linear homogeneous equation, then you can find another one. This is the reduction of order method reduction of order method . The idea is that if we somehow found as a solution of we try a second solution of the form . We just need to find . We plug into the equation: In other words, . Using we have the first order linear equation . After solving this equation for (integrating factor), we find by antidifferentiating . We then form by computing . For example, suppose we somehow know is a solution to . The equation for is then . We find a solution, , and we find an antiderivative . Hence . Any works and so makes . Thus, the general solution is .  Since we have a formula for the solution to the first order linear equation, we can write a formula for : However, it is much easier to remember that we just need to try and find as we did above. Also, the technique works for higher order equations too: you get to reduce the order for each solution you find. So it is better to remember how to do it rather than a specific formula.  We will study the solution of nonhomogeneous equations in . We will first focus on finding general solutions to homogeneous equations.    Exercises    Show that and are linearly independent.    Let and . If they're linearly independent then where cannot be a constant independent of . \\[ A=\\frac{y_2}{y_1}=e^x \\] clearly depends on so the two solutions are linearly independent .      Are and linearly independent? Justify.    Yes. To justify try to find a constant such that for all .      Are and linearly independent? Justify.    No. .      Take . Find (guess!) a solution.           Guess a solution to .           Write down an equation (guess) for which we have the solutions and . Hint: Try an equation of the form for constants and , plug in both and and solve for and .           Prove the superposition principle for nonhomogeneous equations. Suppose that is a solution to and is a solution to (same linear operator ). Show that solves .    From \\[ Ly_1+Ly_2=f(x)+g(x) \\]       For the equation , find two solutions, show that they are linearly independent and find the general solution. Hint: Try .    \\[ y=x^r, y'=rx^{r-1}, y''=r(r-1)x^{r-2} \\] Plugging into the ODE \\[ r(r-1)x^r-rx^r=0 \\rightarrow r^2-2r=0 \\] So or . The two solutions are and . Checking for linear dependence \\[ A=\\frac{y_2}{y_1}=x^2 \\neq \\textrm{const} \\] So the solutions are linearly independent. The general solution is \\[ y=c_1+c_2x^2 \\]      Find the general solution to . Hint: It is a first order ODE in .         Equations of the form are called Euler's equations Euler's equation or Cauchy–Euler equations Cauchy–Euler equation . They are solved by trying and solving for (assume that for simplicity).    Suppose that .    Find a formula for the general solution of . Hint: Try and find a formula for .    What happens when or ?      (a) where Where and are real and distinct, since under the square root. (b) If equal to 0, then . We would need to find another linearly independent solution since the two terms in the solution in part (a) become linearly dependent now. If then and become complex numbers (this case is dealt with in the following section).     We will revisit the case when later.    Same equation as in . Suppose . Find a formula for the general solution of . Hint: Try for the second solution.          reduction of order   Suppose is a solution to . By directly plugging into the equation, show that is also a solution.      Plugging into the ODE and simplifying  Therefore is also a solution.     Chebyshev's equation of order 1  Chebyshev's equation of order 1   Take .    Show that is a solution.    Use reduction of order to find a second linearly independent solution.    Write down the general solution.      (a) \\[ y=x, y'=1, y''=0 \\] Plugging into the ODE gives \\[ 0-x+x=0 \\] (b) The second solution can either be derived from and plugging into the ODE to find the solution for , or by applying the result of that directly using the reduction of order formula   (c) where the sign difference is absorbed in the constant.     Hermite's equation of order 2  Hermite's equation of order 2   Take .    Show that is a solution.    Use reduction of order to find a second linearly independent solution. (It's OK to leave a definite integral in the formula.)    Write down the general solution.      (b)  (c)      "
},
{
  "id": "secondorder",
  "level": "2",
  "url": "solinear_section.html#secondorder",
  "type": "Video",
  "number": "2.1.1",
  "title": "2nd Order Linear Equations.",
  "body": " 2nd Order Linear Equations  We now move to 2nd order ODEs. We shall begin with 2nd order linear ODEs which are much easier to handle than nonlinear ODEs. Some of the theory, like Existence and Uniqueness parallel the 1st order case pretty well. However, we shall see that there are some new complications like Superposition to think about and we are going to have a lot of parallels to linear algebra here.   "
},
{
  "id": "solinear_section-2-5",
  "level": "2",
  "url": "solinear_section.html#solinear_section-2-5",
  "type": "Theorem",
  "number": "2.1.1",
  "title": "Superposition.",
  "body": " Superposition  superposition   Suppose and are two solutions of the homogeneous equation . Then also solves for arbitrary constants and .   "
},
{
  "id": "solinear_section-2-13",
  "level": "2",
  "url": "solinear_section.html#solinear_section-2-13",
  "type": "Theorem",
  "number": "2.1.2",
  "title": "Existence and uniqueness.",
  "body": " Existence and uniqueness  existence and uniqueness   Suppose are continuous functions on some interval , is a number in , and are constants. The equation has exactly one solution defined on the same interval satisfying the initial conditions    "
},
{
  "id": "solinear_section-2-19",
  "level": "2",
  "url": "solinear_section.html#solinear_section-2-19",
  "type": "Theorem",
  "number": "2.1.3",
  "title": "",
  "body": "  Let be continuous functions. Let and be two linearly independent solutions to the homogeneous equation . Then every other solution is of the form That is, is the general solution.   "
},
{
  "id": "solinear_section-3-2",
  "level": "2",
  "url": "solinear_section.html#solinear_section-3-2",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "  Show that and are linearly independent.    Let and . If they're linearly independent then where cannot be a constant independent of . \\[ A=\\frac{y_2}{y_1}=e^x \\] clearly depends on so the two solutions are linearly independent .   "
},
{
  "id": "solinear_section-3-3",
  "level": "2",
  "url": "solinear_section.html#solinear_section-3-3",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": "  Are and linearly independent? Justify.    Yes. To justify try to find a constant such that for all .   "
},
{
  "id": "solinear_section-3-4",
  "level": "2",
  "url": "solinear_section.html#solinear_section-3-4",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": "  Are and linearly independent? Justify.    No. .   "
},
{
  "id": "solinear_section-3-5",
  "level": "2",
  "url": "solinear_section.html#solinear_section-3-5",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": "  Take . Find (guess!) a solution.        "
},
{
  "id": "solinear_section-3-6",
  "level": "2",
  "url": "solinear_section.html#solinear_section-3-6",
  "type": "Exercise",
  "number": "2.1.5",
  "title": "",
  "body": "  Guess a solution to .        "
},
{
  "id": "solinear_section-3-7",
  "level": "2",
  "url": "solinear_section.html#solinear_section-3-7",
  "type": "Exercise",
  "number": "2.1.6",
  "title": "",
  "body": "  Write down an equation (guess) for which we have the solutions and . Hint: Try an equation of the form for constants and , plug in both and and solve for and .        "
},
{
  "id": "solinear_section-3-8",
  "level": "2",
  "url": "solinear_section.html#solinear_section-3-8",
  "type": "Exercise",
  "number": "2.1.7",
  "title": "",
  "body": "  Prove the superposition principle for nonhomogeneous equations. Suppose that is a solution to and is a solution to (same linear operator ). Show that solves .    From \\[ Ly_1+Ly_2=f(x)+g(x) \\]    "
},
{
  "id": "solinear_section-3-9",
  "level": "2",
  "url": "solinear_section.html#solinear_section-3-9",
  "type": "Exercise",
  "number": "2.1.8",
  "title": "",
  "body": "  For the equation , find two solutions, show that they are linearly independent and find the general solution. Hint: Try .    \\[ y=x^r, y'=rx^{r-1}, y''=r(r-1)x^{r-2} \\] Plugging into the ODE \\[ r(r-1)x^r-rx^r=0 \\rightarrow r^2-2r=0 \\] So or . The two solutions are and . Checking for linear dependence \\[ A=\\frac{y_2}{y_1}=x^2 \\neq \\textrm{const} \\] So the solutions are linearly independent. The general solution is \\[ y=c_1+c_2x^2 \\]   "
},
{
  "id": "solinear_section-3-10",
  "level": "2",
  "url": "solinear_section.html#solinear_section-3-10",
  "type": "Exercise",
  "number": "2.1.9",
  "title": "",
  "body": "  Find the general solution to . Hint: It is a first order ODE in .        "
},
{
  "id": "sol_eulerex",
  "level": "2",
  "url": "solinear_section.html#sol_eulerex",
  "type": "Exercise",
  "number": "2.1.10",
  "title": "",
  "body": "  Suppose that .    Find a formula for the general solution of . Hint: Try and find a formula for .    What happens when or ?      (a) where Where and are real and distinct, since under the square root. (b) If equal to 0, then . We would need to find another linearly independent solution since the two terms in the solution in part (a) become linearly dependent now. If then and become complex numbers (this case is dealt with in the following section).    "
},
{
  "id": "sol_eulerexln",
  "level": "2",
  "url": "solinear_section.html#sol_eulerexln",
  "type": "Exercise",
  "number": "2.1.11",
  "title": "",
  "body": "  Same equation as in . Suppose . Find a formula for the general solution of . Hint: Try for the second solution.        "
},
{
  "id": "exercise_reductionoforder",
  "level": "2",
  "url": "solinear_section.html#exercise_reductionoforder",
  "type": "Exercise",
  "number": "2.1.12",
  "title": "reduction of order.",
  "body": " reduction of order   Suppose is a solution to . By directly plugging into the equation, show that is also a solution.      Plugging into the ODE and simplifying  Therefore is also a solution.   "
},
{
  "id": "solinear_section-3-16",
  "level": "2",
  "url": "solinear_section.html#solinear_section-3-16",
  "type": "Exercise",
  "number": "2.1.13",
  "title": "Chebyshev’s equation of order 1.",
  "body": " Chebyshev's equation of order 1  Chebyshev's equation of order 1   Take .    Show that is a solution.    Use reduction of order to find a second linearly independent solution.    Write down the general solution.      (a) \\[ y=x, y'=1, y''=0 \\] Plugging into the ODE gives \\[ 0-x+x=0 \\] (b) The second solution can either be derived from and plugging into the ODE to find the solution for , or by applying the result of that directly using the reduction of order formula   (c) where the sign difference is absorbed in the constant.   "
},
{
  "id": "solinear_section-3-17",
  "level": "2",
  "url": "solinear_section.html#solinear_section-3-17",
  "type": "Exercise",
  "number": "2.1.14",
  "title": "Hermite’s equation of order 2.",
  "body": " Hermite's equation of order 2  Hermite's equation of order 2   Take .    Show that is a solution.    Use reduction of order to find a second linearly independent solution. (It's OK to leave a definite integral in the formula.)    Write down the general solution.      (b)  (c)    "
},
{
  "id": "sec_ccsol",
  "level": "1",
  "url": "sec_ccsol.html",
  "type": "Section",
  "number": "2.2",
  "title": "Constant coefficient second order linear ODEs",
  "body": " Constant coefficient second order linear ODEs     Solving constant coefficient equations   Constant Coefficients (Distinct Roots)  We now move to 2nd order ODEs. We shall begin with 2nd order linear ODEs which are much easier to handle than nonlinear ODEs. Some of the theory, like Existence and Uniqueness parallel the 1st order case pretty well. However, we shall see that there are some new complications like Superposition to think about and we are going to have a lot of parallels to linear algebra here.    Consider the problem This is a second order linear homogeneous equation with constant coefficients. Constant coefficients constant coefficient means that the functions in front of , , and are constants, they do not depend on .  To guess a solution, think of a function that stays essentially the same when we differentiate it, so that we can take the function and its derivatives, add some multiples of these together, and end up with zero. Yes, we are talking about the exponential.  Let us try Making an educated guess with some parameters to solve for is such a central technique in differential equations, that people sometimes use a fancy name for such a guess: ansatz ansatz , German for initial placement of a tool at a work piece. Yes, the Germans have a word for that. a solution of the form . Then and . Plug in to get Hence, if or , then is a solution. So let and .  Verify: Check that and are solutions.  The functions and are linearly independent. If they were not linearly independent, we could write for some constant , implying that for all , which is clearly not possible. Hence, we can write the general solution as We need to solve for and . To apply the initial conditions, we first find . We plug into and and solve. Either apply some matrix algebra, or just solve these by high school math. For example, divide the second equation by 2 to obtain , and subtract the two equations to get . Then as . Hence, the solution we are looking for is    The Constant Coefficient Method (all cases)  In this video we generalize ad categorize all the possibilities for a 2nd order homogeneous constant coefficient equation    Let us generalize this example into a method. Suppose that we have an equation where are constants. Try the solution to obtain Divide by to obtain the so-called characteristic equation characteristic equation of the ODE: Solve for the by using the quadratic formula quadratic formula . So and are solutions. There is still a difficulty if , but it is not hard to overcome.    Suppose that and are the roots of the characteristic equation.    If and are distinct and real (when ), then has the general solution     If (happens when ), then has the general solution         Solve The characteristic equation is or . Consequently, and are the two linearly independent solutions, and the general solution is Since and , we can also write the general solution as       Find the general solution of   The characteristic equation is . The equation has a double root . The general solution is, therefore,   Verify: Check that and are linearly independent.  That solves the equation is clear. If solves the equation, then we know we are done. Let us compute and . Plug in     In some sense, a doubled root rarely happens. If coefficients are picked randomly, a doubled root is unlikely. There are, however, some natural phenomena (such as resonance as we will see) where a doubled root does happen, so we cannot just dismiss this case.  Let us give a short argument for why the solution works when the root is doubled. This case is really a limiting case of when the two roots are distinct and very close. Note that is a solution when the roots are distinct. When we take the limit as goes to , we are really taking the derivative of using as the variable. Therefore, the limit is , and hence this is a solution in the doubled root case.    Complex numbers and Euler's formula  A polynomial may have complex roots. The equation has no real roots, but it does have two complex roots. Here we review some properties of complex numbers complex number .  Complex numbers may seem a strange concept, especially because of the terminology. There is nothing imaginary or really complicated about complex numbers. A complex number is simply a pair of real numbers, . Think of a complex number as a point in the plane. We add complex numbers in the straightforward way: . We define multiplication multiplication of complex numbers by It turns out that with this multiplication rule, all the standard properties of arithmetic hold. Further, and most importantly .  Generally we write as , and we treat as if it were an unknown. When is zero, then is just the number . We do arithmetic with complex numbers just as we would with polynomials. The property we just mentioned becomes . So whenever we see , we replace it by . For example,   The numbers and are the two roots of . Engineers often use the letter instead of for the square root of . We use the mathematicians' convention and use .  Verify: make sure you understand (that you can justify) the following identities:     , , ,     ,     ,     ,     .    We also define the exponential of a complex number. We do this by writing down the Taylor series and plugging in the complex number. Because most properties of the exponential can be proved by looking at the Taylor series, these properties still hold for the complex exponential. For example the very important property: . This means that . Hence if we can compute , we can compute . For we use the so-called Euler's formula Euler's formula .   Euler's formula        In other words, .  Verify: using Euler's formula, check the identities:   Verify: Double angle identities: Start with . Use Euler on each side and deduce:   For a complex number we call the real part real part and the imaginary part imaginary part of the number. Often the following notation is used,     Complex roots  Suppose the equation has the characteristic equation that has complex roots complex roots . By the quadratic formula, the roots are . These roots are complex if . In this case the roots are As you can see, we always get a pair of roots of the form . In this case we can still write the solution as However, the exponential is now complex-valued. We need to allow and to be complex numbers to obtain a real-valued solution (which is what we are after). While there is nothing particularly wrong with this approach, it can make calculations harder and it is generally preferred to find two real-valued solutions.  Here we can use Euler's formula . Let Then   Linear combinations of solutions are also solutions. Hence, are also solutions. Furthermore, they are real-valued. It is not hard to see that they are linearly independent (not multiples of each other). Therefore, we have the following theorem.    Take the equation If the characteristic equation has the roots (when ), then the general solution is       Find the general solution of , for a constant .  The characteristic equation is . Therefore, the roots are , and by the theorem, we have the general solution       Find the solution of , , .  The characteristic equation is . By completing the square we get and hence the roots are . By the theorem we have the general solution To find the solution satisfying the initial conditions, we first plug in zero to get Hence, and . We differentiate, We again plug in the initial condition and obtain , or . The solution we are seeking is       Exercises    Find the general solution of .    Writing the characteristic equation \\[ 2r^2+2r-4=0 \\] Solving, we get , . The general solution is \\[ y=C_1e^x+C_2e^{-2x} \\]      Find the general solution of .           Find the general solution to .           Find the general solution to .           Solve for , .    The characteristic equation is \\[ r^2-8r+16=0 \\] Solving, we find . So the general solutions is \\[ y=C_1e^{4x}+C_2xe^{4x} \\] Applying the initial conditions \\[ y(0)=C_1=2 \\] \\[ y'(0)=8e^{4x}+4C_2xe^{4x}+C_2e^{4x} \\rightarrow y'(0)=8+C_2=0 \\rightarrow C_2=-8 \\] Therefore the solution is \\[ y=2e^{4x}-8xe^{4x} \\]      Solve for , .           Find the general solution of .    The characteristic equation is \\[ r^2+25=0 \\rightarrow r_1,r_2=\\pm i5 \\] Here and . Therefore the general solution is \\[ y=C_1\\cos (5x)+C_2\\sin(5x) \\]      Find the general solution of .    The characteristic equation is \\[ r^2+6r+13=0 \\] Using the quadratic formula Therefore the general solution is       Find the solution to , , .           Find the solution to , , .           Find the solution to , , .           Find the general solution of using the methods of this section.           The method of this section applies to equations of other orders than two. We will see higher orders later. Try to solve the first order equation using the methods of this section.           Let us revisit the Cauchy–Euler equations Cauchy–Euler equation of . Suppose now that . Find a formula for the general solution of . Hint: Note that .    As was done in \\[ y=x^r, y'=rx^{r-1}, y''=r(r-1)x^{r-2} \\] Plugging into the ODE and simplifying \\[ ar^2+(b-a)r+c=0 \\] Solving for \\[ r_1,r_2=\\frac{a-b}{2a}\\pm i \\frac{\\sqrt{4ac-(b-a)^2}}{2a} \\] Using Euler's formula        Find the solution to , , , where , , and are real numbers.           Find the solution to , , , where , , , and are real numbers, and .           Construct an equation such that is the general solution.    From the solution given , and giving \\[ r_1,r_2=-2\\pm i3 \\rightarrow (r+2-i3)(r+2+i3)=r^2+4r+13=0 \\] An ODE that has this characteristic equation is \\[ y''+4y'+13y=0 \\]      Construct an equation such that is the general solution.          "
},
{
  "id": "constantcoefficients",
  "level": "2",
  "url": "sec_ccsol.html#constantcoefficients",
  "type": "Video",
  "number": "2.2.1",
  "title": "Constant Coefficients (Distinct Roots).",
  "body": " Constant Coefficients (Distinct Roots)  We now move to 2nd order ODEs. We shall begin with 2nd order linear ODEs which are much easier to handle than nonlinear ODEs. Some of the theory, like Existence and Uniqueness parallel the 1st order case pretty well. However, we shall see that there are some new complications like Superposition to think about and we are going to have a lot of parallels to linear algebra here.   "
},
{
  "id": "constantcoefficients2",
  "level": "2",
  "url": "sec_ccsol.html#constantcoefficients2",
  "type": "Video",
  "number": "2.2.2",
  "title": "The Constant Coefficient Method (all cases).",
  "body": " The Constant Coefficient Method (all cases)  In this video we generalize ad categorize all the possibilities for a 2nd order homogeneous constant coefficient equation   "
},
{
  "id": "sec_ccsol-3-10",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-3-10",
  "type": "Theorem",
  "number": "2.2.1",
  "title": "",
  "body": "  Suppose that and are the roots of the characteristic equation.    If and are distinct and real (when ), then has the general solution     If (happens when ), then has the general solution      "
},
{
  "id": "example_expsecondorder",
  "level": "2",
  "url": "sec_ccsol.html#example_expsecondorder",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": "  Solve The characteristic equation is or . Consequently, and are the two linearly independent solutions, and the general solution is Since and , we can also write the general solution as    "
},
{
  "id": "sec_ccsol-3-12",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-3-12",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  Find the general solution of   The characteristic equation is . The equation has a double root . The general solution is, therefore,   Verify: Check that and are linearly independent.  That solves the equation is clear. If solves the equation, then we know we are done. Let us compute and . Plug in    "
},
{
  "id": "eulersformula",
  "level": "2",
  "url": "sec_ccsol.html#eulersformula",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "Euler’s formula.",
  "body": " Euler's formula       "
},
{
  "id": "sec_ccsol-5-5",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-5-5",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "",
  "body": "  Take the equation If the characteristic equation has the roots (when ), then the general solution is    "
},
{
  "id": "example_sincossecondorder",
  "level": "2",
  "url": "sec_ccsol.html#example_sincossecondorder",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Find the general solution of , for a constant .  The characteristic equation is . Therefore, the roots are , and by the theorem, we have the general solution    "
},
{
  "id": "sec_ccsol-5-7",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-5-7",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  Find the solution of , , .  The characteristic equation is . By completing the square we get and hence the roots are . By the theorem we have the general solution To find the solution satisfying the initial conditions, we first plug in zero to get Hence, and . We differentiate, We again plug in the initial condition and obtain , or . The solution we are seeking is    "
},
{
  "id": "sec_ccsol-6-2",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-2",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "  Find the general solution of .    Writing the characteristic equation \\[ 2r^2+2r-4=0 \\] Solving, we get , . The general solution is \\[ y=C_1e^x+C_2e^{-2x} \\]   "
},
{
  "id": "sec_ccsol-6-3",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-3",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": "  Find the general solution of .        "
},
{
  "id": "sec_ccsol-6-4",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-4",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": "  Find the general solution to .        "
},
{
  "id": "sec_ccsol-6-5",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-5",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": "  Find the general solution to .        "
},
{
  "id": "sec_ccsol-6-6",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-6",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": "  Solve for , .    The characteristic equation is \\[ r^2-8r+16=0 \\] Solving, we find . So the general solutions is \\[ y=C_1e^{4x}+C_2xe^{4x} \\] Applying the initial conditions \\[ y(0)=C_1=2 \\] \\[ y'(0)=8e^{4x}+4C_2xe^{4x}+C_2e^{4x} \\rightarrow y'(0)=8+C_2=0 \\rightarrow C_2=-8 \\] Therefore the solution is \\[ y=2e^{4x}-8xe^{4x} \\]   "
},
{
  "id": "sec_ccsol-6-7",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-7",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": "  Solve for , .        "
},
{
  "id": "sec_ccsol-6-8",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-8",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "",
  "body": "  Find the general solution of .    The characteristic equation is \\[ r^2+25=0 \\rightarrow r_1,r_2=\\pm i5 \\] Here and . Therefore the general solution is \\[ y=C_1\\cos (5x)+C_2\\sin(5x) \\]   "
},
{
  "id": "sec_ccsol-6-9",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-9",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": "  Find the general solution of .    The characteristic equation is \\[ r^2+6r+13=0 \\] Using the quadratic formula Therefore the general solution is    "
},
{
  "id": "sec_ccsol-6-10",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-10",
  "type": "Exercise",
  "number": "2.2.9",
  "title": "",
  "body": "  Find the solution to , , .        "
},
{
  "id": "sec_ccsol-6-11",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-11",
  "type": "Exercise",
  "number": "2.2.10",
  "title": "",
  "body": "  Find the solution to , , .        "
},
{
  "id": "sec_ccsol-6-12",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-12",
  "type": "Exercise",
  "number": "2.2.11",
  "title": "",
  "body": "  Find the solution to , , .        "
},
{
  "id": "sec_ccsol-6-13",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-13",
  "type": "Exercise",
  "number": "2.2.12",
  "title": "",
  "body": "  Find the general solution of using the methods of this section.        "
},
{
  "id": "sec_ccsol-6-14",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-14",
  "type": "Exercise",
  "number": "2.2.13",
  "title": "",
  "body": "  The method of this section applies to equations of other orders than two. We will see higher orders later. Try to solve the first order equation using the methods of this section.        "
},
{
  "id": "sec_ccsol-6-15",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-15",
  "type": "Exercise",
  "number": "2.2.14",
  "title": "",
  "body": "  Let us revisit the Cauchy–Euler equations Cauchy–Euler equation of . Suppose now that . Find a formula for the general solution of . Hint: Note that .    As was done in \\[ y=x^r, y'=rx^{r-1}, y''=r(r-1)x^{r-2} \\] Plugging into the ODE and simplifying \\[ ar^2+(b-a)r+c=0 \\] Solving for \\[ r_1,r_2=\\frac{a-b}{2a}\\pm i \\frac{\\sqrt{4ac-(b-a)^2}}{2a} \\] Using Euler's formula     "
},
{
  "id": "sec_ccsol-6-16",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-16",
  "type": "Exercise",
  "number": "2.2.15",
  "title": "",
  "body": "  Find the solution to , , , where , , and are real numbers.        "
},
{
  "id": "sec_ccsol-6-17",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-17",
  "type": "Exercise",
  "number": "2.2.16",
  "title": "",
  "body": "  Find the solution to , , , where , , , and are real numbers, and .        "
},
{
  "id": "sec_ccsol-6-18",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-18",
  "type": "Exercise",
  "number": "2.2.17",
  "title": "",
  "body": "  Construct an equation such that is the general solution.    From the solution given , and giving \\[ r_1,r_2=-2\\pm i3 \\rightarrow (r+2-i3)(r+2+i3)=r^2+4r+13=0 \\] An ODE that has this characteristic equation is \\[ y''+4y'+13y=0 \\]   "
},
{
  "id": "sec_ccsol-6-19",
  "level": "2",
  "url": "sec_ccsol.html#sec_ccsol-6-19",
  "type": "Exercise",
  "number": "2.2.18",
  "title": "",
  "body": "  Construct an equation such that is the general solution.        "
},
{
  "id": "sec_hol",
  "level": "1",
  "url": "sec_hol.html",
  "type": "Section",
  "number": "2.3",
  "title": "Higher order linear ODEs",
  "body": " Higher order linear ODEs   We briefly study higher order equations. Equations appearing in applications tend to be second order. Higher order equations do appear from time to time, but generally the world around us is second order.   The basic results about linear ODEs of higher order are essentially the same as for second order equations, with 2 replaced by . The important concept of linear independence is somewhat more complicated when more than two functions are involved. For higher order constant coefficient ODEs, the methods developed are also somewhat harder to apply, but we will not dwell on these complications. It is also possible to use the methods for systems of linear equations from to solve higher order constant coefficient equations.  Let us start with a general homogeneous linear equation     Linear independence   Linear Independence  We briefly saw the idea of two functions being linearly independent when talking about the theory of 2nd order ODEs in . Now that we are talking about nth order, we need to figure out how to show that n functions are linearly independent. As you can imagine there are strong parallels to linear algebra, but we also get something unique to ODEs called the Wronskian which will be a test for linear independence. Note: While the Wronskian was covered by Bazett in the videos of this section, the text of this section beyond a brief mention largely avoids this topic.     When we had two functions and we said they were linearly independent if one was not the multiple of the other. Same idea holds for functions. In this case it is easier to state as follows. The functions , , ..., are linearly independent linearly independent if the equation has only the trivial solution , where the equation must hold for all . If we can solve equation with some constants where for example , then we can solve for as a linear combination of the others. If the functions are not linearly independent, they are linearly dependent linearly dependent .  There are several ways to show that a set of functions are linearly independent. The first method we'll present uses a tool called the Wronskian, which is rather unintuitive but computationally simple.   If the functions where linearly dependent (and times differentiable), then the columns of the matrix in the Wronskian will be as well and thus the Wronskian is zero. Thus to show a set of functions is linearly independent on an interval it suffices to find a single point in where the Wronskian is non-zero. Note the converse is not true, does not imply linear dependence.     and are linearly independent as As for any , these two functions are linearly independent everywhere.      Show that are linearly independent.  Let us write down We use rules of exponentials and write . Hence and . Then we have The left-hand side is a third degree polynomial in . It is either identically zero, or it has at most 3 zeros. Therefore, it is identically zero, , and the functions are linearly independent.  Let us try another way. As before we write This equation has to hold for all . We divide through by to get As the equation is true for all , let . After taking the limit we see that . Hence our equation becomes Rinse, repeat!  How about yet another way. We again write We can evaluate the equation and its derivatives at different values of to obtain equations for , , and . Let us first divide by for simplicity. We set to get the equation . Now differentiate both sides We set to get . We divide by again and differentiate to get . It is clear that is zero. Then must be zero as , and must be zero because .  There is no one best way to do it. All of these methods are perfectly valid. The important thing is to understand why the functions are linearly independent.      On the other hand, the functions , , and are linearly dependent. Simply apply definition of the hyperbolic cosine:       Theory of Higher Order ODEs   Theory of Higher Order ODEs  In this video we put on a firmer ground the theory of higher order ODEs. This both is what really makes the method of constant coefficients work for higher order cases, but these theorems also apply to more general linear ODEs.     Superposition  superposition   Suppose , , ..., are solutions of the homogeneous equation . Then also solves for arbitrary constants .    In other words, a linear combination linear combination of solutions to is also a solution to . We also have the existence and uniqueness theorem for nonhomogeneous linear equations.   Existence and uniqueness  existence and uniqueness   Suppose through , and are continuous functions on some interval , is a number in , and are constants. The equation has exactly one solution defined on the same interval satisfying the initial conditions       Constant coefficient higher order ODEs   Higher Order Constant Coefficient ODEs  Let's consider the generalization of the constant coefficient method to higher order. A few things change. Our characteristic equation is now an nth order polynomial, which we can still factor, although this can be harder than just using the quadratic formula, and we get a range of options analogous to the 2D case.    When we have a higher order constant coefficient homogeneous linear equation, the song and dance is exactly the same as it was for second order. We just need to find more solutions. If the equation is order, we need to find linearly independent solutions. It is best seen by example.    Find the general solution to   Try: . We plug in and get We divide through by . Then The trick now is to find the roots. There is a formula for the roots of degree 3 and 4 polynomials but it is very complicated. There is no formula for higher degree polynomials. That does not mean that the roots do not exist. There are always roots for an degree polynomial. They may be repeated repeated roots and they may be complex. Computers are pretty good at finding roots approximately for reasonable size polynomials.  A good place to start is to plot the polynomial and check where it is zero. We can also simply try plugging in. We just start plugging in numbers and see if we get a hit (we can also try complex numbers). Even if we do not get a hit, we may get an indication of where the root is. For example, we plug into our polynomial and get ; we plug in and get 3. That means there is a root between and , because the sign changed. If we find one root, say , then we know is a factor of our polynomial. Polynomial long division can then be used.  A good strategy is to begin with , , or . These are easy to compute. Our polynomial has two such roots, and . There should be 3 roots and the last root is reasonably easy to find. The constant term in a monic The word monic means that the coefficient of the top degree , in our case , is 1. polynomial such as this is the multiple of the negations of all the roots because . So You should check that really is a root. Hence , and are solutions to . They are linearly independent as can easily be checked, and there are 3 of them, which happens to be exactly the number we need. So the general solution is   Suppose we were given some initial conditions , , and . Then It is possible to find the solution by high school algebra, but it would be a pain. The sensible way to solve a system of equations such as this is to use matrix algebra, see or . For now we note that the solution is , , and . The specific solution to the ODE is     Next, suppose that we have real roots, but they are repeated. Let us say we have a root repeated times. In the spirit of the second order solution, and for the same reasons, we have the solutions We take a linear combination of these solutions to find the general solution.    Solve   We note that the characteristic equation is By inspection we note that . Hence the roots given with multiplicity multiplicity are . Thus the general solution is     The case of complex roots is similar to second order equations. Complex roots always come in pairs . Suppose we have two such complex roots, each repeated times. The corresponding solution is where , ..., , , ..., are arbitrary constants.    Solve   The characteristic equation is Hence the roots are , both with multiplicity 2. Hence the general solution to the ODE is The way we solved the characteristic equation above is really by guessing or by inspection. It is not so easy in general. We could also have asked a computer or an advanced calculator for the roots.      Exercises    Find the general solution for .    The characteristic equation is Therefore the general solution is       Find the general solution for .           Find the general solution for .           Find the general solution of .           Solve , , , .           Suppose the characteristic equation for an ODE is .    Find such a differential equation.    Find its general solution.      a) Expanding the characteristic equation Therefore an ODE with such a characteristic equation is  b) Since and the general solution is       Suppose that the characteristic equation of a third order differential equation has roots and 3.    What is the characteristic equation?    Find the corresponding differential equation.    Find the general solution.      a)  b)  c)       Suppose that a fourth order equation has a solution .    Find such an equation.    Find the general solution to the above equation.    Find the initial conditions that the given solution satisfies at . Note: You might like to use a computer algebra system like Wolframalpha to take the derivatives.      a) The appearance of means there are two complex roots with . Furthermore, the appearance of means that these roots are repeated, so The resulting characteristic equation after expanding is Giving an ODE  b) c) Try , so the first initial condition is . Differentiating Differentiating again Differentiating yet again So the initial conditions are .      Find an equation such that , , are solutions.           Find an equation such that is a solution.           Let , , and . Are , , and linearly independent? If so, show it, if not, find a linear combination that works.    We want to write And find whether this is satisfied for any combination of coefficients (linearly dependent), or if is the only solution (linear independent). This equation should be satisfied for any choice of so first we set  This equation should again be satisfied for any , we choose  So is a free parameter, therefore and are linearly dependent. Choosing we get the combination       Let , , and . Are , , and linearly independent? If so, show it, if not, find a linear combination that works.    No, choosing we get .      Are , , and linearly independent? If so, show it, if not, find a linear combination that works.    We write We differentiate a few times Plugging back in and repeating the process, we find that . So the functions are linearly independent.      Are , , and linearly independent? If so, show it, if not, find a linear combination that works.    Yes. Divide the equation by , then differentiate twice to find and consequently .      Are , , , linearly independent? If so, show it, if not find a linear combination that works.    No. .      Are , , linearly independent? If so, show it, if not find a linear combination that works.    Yes. (Hint: First note that is bounded. Then note that and cannot be multiples of each other.)     "
},
{
  "id": "higherlinear",
  "level": "2",
  "url": "sec_hol.html#higherlinear",
  "type": "Video",
  "number": "2.3.1",
  "title": "Linear Independence.",
  "body": " Linear Independence  We briefly saw the idea of two functions being linearly independent when talking about the theory of 2nd order ODEs in . Now that we are talking about nth order, we need to figure out how to show that n functions are linearly independent. As you can imagine there are strong parallels to linear algebra, but we also get something unique to ODEs called the Wronskian which will be a test for linear independence. Note: While the Wronskian was covered by Bazett in the videos of this section, the text of this section beyond a brief mention largely avoids this topic.    "
},
{
  "id": "sec_hol-3-7",
  "level": "2",
  "url": "sec_hol.html#sec_hol-3-7",
  "type": "Example",
  "number": "2.3.1",
  "title": "",
  "body": "   and are linearly independent as As for any , these two functions are linearly independent everywhere.   "
},
{
  "id": "sec_hol-3-8",
  "level": "2",
  "url": "sec_hol.html#sec_hol-3-8",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  Show that are linearly independent.  Let us write down We use rules of exponentials and write . Hence and . Then we have The left-hand side is a third degree polynomial in . It is either identically zero, or it has at most 3 zeros. Therefore, it is identically zero, , and the functions are linearly independent.  Let us try another way. As before we write This equation has to hold for all . We divide through by to get As the equation is true for all , let . After taking the limit we see that . Hence our equation becomes Rinse, repeat!  How about yet another way. We again write We can evaluate the equation and its derivatives at different values of to obtain equations for , , and . Let us first divide by for simplicity. We set to get the equation . Now differentiate both sides We set to get . We divide by again and differentiate to get . It is clear that is zero. Then must be zero as , and must be zero because .  There is no one best way to do it. All of these methods are perfectly valid. The important thing is to understand why the functions are linearly independent.   "
},
{
  "id": "sec_hol-3-9",
  "level": "2",
  "url": "sec_hol.html#sec_hol-3-9",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": "  On the other hand, the functions , , and are linearly dependent. Simply apply definition of the hyperbolic cosine:    "
},
{
  "id": "highertheory",
  "level": "2",
  "url": "sec_hol.html#highertheory",
  "type": "Video",
  "number": "2.3.2",
  "title": "Theory of Higher Order ODEs.",
  "body": " Theory of Higher Order ODEs  In this video we put on a firmer ground the theory of higher order ODEs. This both is what really makes the method of constant coefficients work for higher order cases, but these theorems also apply to more general linear ODEs.   "
},
{
  "id": "sec_hol-4-3",
  "level": "2",
  "url": "sec_hol.html#sec_hol-4-3",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "Superposition.",
  "body": " Superposition  superposition   Suppose , , ..., are solutions of the homogeneous equation . Then also solves for arbitrary constants .   "
},
{
  "id": "sec_hol-4-5",
  "level": "2",
  "url": "sec_hol.html#sec_hol-4-5",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "Existence and uniqueness.",
  "body": " Existence and uniqueness  existence and uniqueness   Suppose through , and are continuous functions on some interval , is a number in , and are constants. The equation has exactly one solution defined on the same interval satisfying the initial conditions    "
},
{
  "id": "higherorderconstant",
  "level": "2",
  "url": "sec_hol.html#higherorderconstant",
  "type": "Video",
  "number": "2.3.3",
  "title": "Higher Order Constant Coefficient ODEs.",
  "body": " Higher Order Constant Coefficient ODEs  Let's consider the generalization of the constant coefficient method to higher order. A few things change. Our characteristic equation is now an nth order polynomial, which we can still factor, although this can be harder than just using the quadratic formula, and we get a range of options analogous to the 2D case.   "
},
{
  "id": "sec_hol-5-4",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-4",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": "  Find the general solution to   Try: . We plug in and get We divide through by . Then The trick now is to find the roots. There is a formula for the roots of degree 3 and 4 polynomials but it is very complicated. There is no formula for higher degree polynomials. That does not mean that the roots do not exist. There are always roots for an degree polynomial. They may be repeated repeated roots and they may be complex. Computers are pretty good at finding roots approximately for reasonable size polynomials.  A good place to start is to plot the polynomial and check where it is zero. We can also simply try plugging in. We just start plugging in numbers and see if we get a hit (we can also try complex numbers). Even if we do not get a hit, we may get an indication of where the root is. For example, we plug into our polynomial and get ; we plug in and get 3. That means there is a root between and , because the sign changed. If we find one root, say , then we know is a factor of our polynomial. Polynomial long division can then be used.  A good strategy is to begin with , , or . These are easy to compute. Our polynomial has two such roots, and . There should be 3 roots and the last root is reasonably easy to find. The constant term in a monic The word monic means that the coefficient of the top degree , in our case , is 1. polynomial such as this is the multiple of the negations of all the roots because . So You should check that really is a root. Hence , and are solutions to . They are linearly independent as can easily be checked, and there are 3 of them, which happens to be exactly the number we need. So the general solution is   Suppose we were given some initial conditions , , and . Then It is possible to find the solution by high school algebra, but it would be a pain. The sensible way to solve a system of equations such as this is to use matrix algebra, see or . For now we note that the solution is , , and . The specific solution to the ODE is    "
},
{
  "id": "sec_hol-5-6",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-6",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": "  Solve   We note that the characteristic equation is By inspection we note that . Hence the roots given with multiplicity multiplicity are . Thus the general solution is    "
},
{
  "id": "sec_hol-5-8",
  "level": "2",
  "url": "sec_hol.html#sec_hol-5-8",
  "type": "Example",
  "number": "2.3.6",
  "title": "",
  "body": "  Solve   The characteristic equation is Hence the roots are , both with multiplicity 2. Hence the general solution to the ODE is The way we solved the characteristic equation above is really by guessing or by inspection. It is not so easy in general. We could also have asked a computer or an advanced calculator for the roots.   "
},
{
  "id": "sec_hol-6-2",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-2",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "  Find the general solution for .    The characteristic equation is Therefore the general solution is    "
},
{
  "id": "sec_hol-6-3",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-3",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": "  Find the general solution for .        "
},
{
  "id": "sec_hol-6-4",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-4",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "  Find the general solution for .        "
},
{
  "id": "sec_hol-6-5",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-5",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": "  Find the general solution of .        "
},
{
  "id": "sec_hol-6-6",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-6",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": "  Solve , , , .        "
},
{
  "id": "sec_hol-6-7",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-7",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": "  Suppose the characteristic equation for an ODE is .    Find such a differential equation.    Find its general solution.      a) Expanding the characteristic equation Therefore an ODE with such a characteristic equation is  b) Since and the general solution is    "
},
{
  "id": "sec_hol-6-8",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-8",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "",
  "body": "  Suppose that the characteristic equation of a third order differential equation has roots and 3.    What is the characteristic equation?    Find the corresponding differential equation.    Find the general solution.      a)  b)  c)    "
},
{
  "id": "hol_eqfromsolex",
  "level": "2",
  "url": "sec_hol.html#hol_eqfromsolex",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "",
  "body": "  Suppose that a fourth order equation has a solution .    Find such an equation.    Find the general solution to the above equation.    Find the initial conditions that the given solution satisfies at . Note: You might like to use a computer algebra system like Wolframalpha to take the derivatives.      a) The appearance of means there are two complex roots with . Furthermore, the appearance of means that these roots are repeated, so The resulting characteristic equation after expanding is Giving an ODE  b) c) Try , so the first initial condition is . Differentiating Differentiating again Differentiating yet again So the initial conditions are .   "
},
{
  "id": "sec_hol-6-10",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-10",
  "type": "Exercise",
  "number": "2.3.9",
  "title": "",
  "body": "  Find an equation such that , , are solutions.        "
},
{
  "id": "sec_hol-6-11",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-11",
  "type": "Exercise",
  "number": "2.3.10",
  "title": "",
  "body": "  Find an equation such that is a solution.        "
},
{
  "id": "sec_hol-6-12",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-12",
  "type": "Exercise",
  "number": "2.3.11",
  "title": "",
  "body": "  Let , , and . Are , , and linearly independent? If so, show it, if not, find a linear combination that works.    We want to write And find whether this is satisfied for any combination of coefficients (linearly dependent), or if is the only solution (linear independent). This equation should be satisfied for any choice of so first we set  This equation should again be satisfied for any , we choose  So is a free parameter, therefore and are linearly dependent. Choosing we get the combination    "
},
{
  "id": "sec_hol-6-13",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-13",
  "type": "Exercise",
  "number": "2.3.12",
  "title": "",
  "body": "  Let , , and . Are , , and linearly independent? If so, show it, if not, find a linear combination that works.    No, choosing we get .   "
},
{
  "id": "sec_hol-6-14",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-14",
  "type": "Exercise",
  "number": "2.3.13",
  "title": "",
  "body": "  Are , , and linearly independent? If so, show it, if not, find a linear combination that works.    We write We differentiate a few times Plugging back in and repeating the process, we find that . So the functions are linearly independent.   "
},
{
  "id": "sec_hol-6-15",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-15",
  "type": "Exercise",
  "number": "2.3.14",
  "title": "",
  "body": "  Are , , and linearly independent? If so, show it, if not, find a linear combination that works.    Yes. Divide the equation by , then differentiate twice to find and consequently .   "
},
{
  "id": "sec_hol-6-16",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-16",
  "type": "Exercise",
  "number": "2.3.15",
  "title": "",
  "body": "  Are , , , linearly independent? If so, show it, if not find a linear combination that works.    No. .   "
},
{
  "id": "sec_hol-6-17",
  "level": "2",
  "url": "sec_hol.html#sec_hol-6-17",
  "type": "Exercise",
  "number": "2.3.16",
  "title": "",
  "body": "  Are , , linearly independent? If so, show it, if not find a linear combination that works.    Yes. (Hint: First note that is bounded. Then note that and cannot be multiples of each other.)   "
},
{
  "id": "sec_mv",
  "level": "1",
  "url": "sec_mv.html",
  "type": "Section",
  "number": "2.4",
  "title": "Mechanical vibrations",
  "body": " Mechanical vibrations   Let us look at some applications of linear second order constant coefficient equations.    Some examples     Our first example is a mass on a spring. Suppose we have a mass (in kilograms) connected by a spring with spring constant (in newtons per meter) to a fixed wall. There may be some external force (in newtons) acting on the mass. Finally, there is some friction measured by (in newton-seconds per meter) as the mass slides along the floor (or perhaps a damper is connected).  Let be the displacement of the mass ( is the rest position), with growing to the right (away from the wall). The force exerted by the spring is proportional to the compression of the spring by Hooke's law Hooke's law . Therefore, it is in the negative direction. Similarly the amount of force exerted by friction is proportional to the velocity of the mass. By Newton's second law Newton's second law we know that force equals mass times acceleration and hence or This is a linear second order constant coefficient ODE. We say the motion is     forced forced motion , if (if is not identically zero),     unforced unforced motion or free free motion , if (if is identically zero),     damped damped motion , if , and     undamped undamped motion , if .    This system appears in lots of applications even if it does not at first seem like it. Many real-world scenarios can be simplified to a mass on a spring. For example, a bungee jump setup is essentially a mass and spring system (you are the mass). It would be good if someone did the math before you jump off the bridge, right? Let us give two other examples.     Here is an example for electrical engineers. Consider the pictured RLC circuit RLC circuit . There is a resistor with a resistance of ohms, an inductor with an inductance of henries, and a capacitor with a capacitance of farads. There is also an electric source (such as a battery) giving a voltage of volts at time (measured in seconds). Let be the charge in coulombs on the capacitor and be the current in the circuit. The relation between the two is . By elementary principles we find . We differentiate to get This is a nonhomogeneous second order constant coefficient linear equation. As , and are all positive, this system behaves just like the mass and spring system. Position of the mass is replaced by current. Mass is replaced by inductance, damping is replaced by resistance, and the spring constant is replaced by one over the capacitance. The change in voltage becomes the forcing function—for constant voltage this is an unforced motion.     Our next example behaves like a mass and spring system only approximately. Suppose a mass hangs on a pendulum of length . We seek an equation for the angle (in radians). Let be the force of gravity. Elementary physics mandates that the equation is   Let us derive this equation using Newton's second law Newton's second law : force equals mass times acceleration. The acceleration is and mass is . So has to be equal to the tangential component of the force given by the gravity, which is in the opposite direction. So . The curiously cancels from the equation.  Now we make our approximation. For small we have that approximately . This can be seen by looking at the graph. In we can see that for approximately (in radians) the graphs of and are almost the same.   The graphs of and (in radians).    Therefore, when the swings are small, is small and we can model the behavior by the simpler linear equation The errors from this approximation build up. So after a long time, the state of the real-world system might be substantially different from our solution. Also we will see that in a mass-spring system, the amplitude is independent of the period. This is not true for a pendulum. Nevertheless, for reasonably short periods of time and small swings (that is, only small angles ), the approximation is reasonably good.  In real-world problems it is often necessary to make these types of simplifications. We must understand both the mathematics and the physics of the situation to see if the simplification is valid in the context of the questions we are trying to answer.    Free undamped motion   Frictionless Mechanical Vibrations  In this video we imagine a mass moving due to the force of a spring in a frictionless environment, what is often called a harmonic oscillator. From the perspective of ODEs, this is just a 2nd order constant coefficient homogeneous ODE. However we also need to physically interpret the results that we get. TYPO: My characteristic equation at 3:06 should be +k not -k. I did the subsequent finding the roots correctly, the minus sign error was just in the characteristic equation.     In this section we only consider free or unforced motion, as we do not know yet how to solve nonhomogeneous equations. Let us start with undamped undamped motion where . The equation is We divide by and let to rewrite the equation as The general solution to this equation is By a trigonometric identity for two different constants and . It is not hard to compute that and . Therefore, we let and be our arbitrary constants and write .  Verify: Justify the identity and verify the equations for and . Hint: Start with and multiply by . Then what should and be?  While it is generally easier to use the first form with and to solve for the initial conditions, the second form is much more natural. The constants and have nice physical interpretation. Write the solution as This is a pure-frequency oscillation (a sine wave). The amplitude amplitude is , is the (angular) frequency frequency angular frequency , and is the so-called phase shift phase shift . The phase shift just shifts the graph left or right. We call the natural (angular) frequency natural (angular) frequency . This entire setup is called simple harmonic motion simple harmonic motion .  Let us pause to explain the word angular before the word frequency . The units of are radians per unit time, not cycles per unit time as is the usual measure of frequency. Because one cycle is radians, the usual frequency is given by . It is simply a matter of where we put the constant , and that is a matter of taste.  The period period of the motion is one over the frequency (in cycles per unit time) and hence . That is the amount of time it takes to complete one full cycle.    Suppose that and . The whole mass and spring setup is sitting on a truck that was traveling at 1 . The truck crashes and hence stops. The mass was held in place 0.5 meters forward from the rest position. During the crash the mass gets loose. That is, the mass is now moving forward at 1 , while the other end of the spring is held in place. The mass therefore starts oscillating. What is the frequency of the resulting oscillation? What is the amplitude? The units are the mks units mks units (meters-kilograms-seconds).  The setup means that the mass was at half a meter in the positive direction during the crash and relative to the wall the spring is mounted to, the mass was moving forward (in the positive direction) at 1 . This gives us the initial conditions.  So the equation with initial conditions is We directly compute . Hence the angular frequency is 2. The usual frequency in Hertz (cycles per second) is .  The general solution is Letting means . Then . Letting we get . Therefore, the amplitude is . The solution is A plot of is shown in .     Simple undamped oscillation.    In general, for free undamped motion, a solution of the form corresponds to the initial conditions and . Therefore, it is easy to figure out and from the initial conditions. The amplitude and the phase shift can then be computed from and . In the example, we have already found the amplitude . Let us compute the phase shift. We know that . We take the arctangent of 1 and get or approximately 0.785. We still need to check if this is in the correct quadrant (and add to if it is not). Since both and are positive, then should be in the first quadrant, radians is in the first quadrant, so .  Note: Many calculators and computer software have not only the atan atan function for arctangent, but also what is sometimes called atan2 atan2 . This function takes two arguments, and , and returns a in the correct quadrant for you.     Geogebra Activity: Use this Geogebra applet to to explore the effects of the mass , spring constant , and the initial conditions , on the solution of the free undamped equation .      Free damped motion   Damped Mechanical Vibrations  We can also study a mass-spring system that has a damping or friction force proportional to velocity. Again it is a constant coefficient 2nd order ODE, but now we get quite a bit more complexity in the possible solutions depending on the values of coefficients.     Let us now focus on damped damped motion. Let us rewrite the equation as where The characteristic equation is Using the quadratic formula we get that the roots are The form of the solution depends on whether we get complex or real roots. We get real roots if and only if the following number is nonnegative: The sign of is the same as the sign of . Thus we get real roots if and only if is nonnegative, or in other words if .    Overdamping  When , the system is overdamped overdamped . In this case, there are two distinct real roots and . Both roots are negative: As is always less than , then is negative in either case.  The solution is Since are negative, as . Thus the mass will tend towards the rest position as time goes to infinity. For a few sample plots for different initial conditions, see .   Overdamped motion for several different initial conditions.    No oscillation happens. In fact, the graph crosses the -axis at most once. To see why, we try to solve . Therefore, and using laws of exponents we obtain This equation has at most one solution . For some initial conditions the graph never crosses the -axis, as is evident from the sample graphs.    Suppose the mass is released from rest. That is and . Then It is not hard to see that this satisfies the initial conditions.      Critical damping  When , the system is critically damped critically damped . In this case, there is one root of multiplicity 2 and this root is . Our solution is The behavior of a critically damped system is very similar to an overdamped system. After all a critically damped system is in some sense a limit of overdamped systems. Since these equations are really only an approximation to the real world, in reality we are never critically damped, it is a place we can only reach in theory. We are always a little bit underdamped or a little bit overdamped. It is better not to dwell on critical damping.    Underdamping  When , the system is underdamped underdamped . In this case, the roots are complex. where . Our solution is or An example plot is given in . Note that we still have that as .   Underdamped motion with the envelope curves shown.    The figure also shows the envelope curves envelope curves  and . The solution is the oscillating line between the two envelope curves. The envelope curves give the maximum amplitude of the oscillation at any given point in time. For example, if you are bungee jumping, you are really interested in computing the envelope curve as not to hit the concrete with your head.  The phase shift shifts the oscillation left or right, but within the envelope curves (the envelope curves do not change if changes).  Notice that the angular pseudo-frequency pseudo-frequency We do not call a frequency since the solution is not really a periodic function. becomes smaller when the damping (and hence ) becomes larger. This makes sense. When we change the damping just a little bit, we do not expect the behavior of the solution to change dramatically. If we keep making larger, then at some point the solution should start looking like the solution for critical damping or overdamping, where no oscillation happens. So if approaches , we want to approach 0.  On the other hand, when gets smaller, approaches ( is always smaller than ), and the solution looks more and more like the steady periodic motion of the undamped case. The envelope curves become flatter and flatter as (and hence ) goes to 0.     Geogebra Activity: Use this Geogebra applet to explore the behaviour of a free damped system as you change the parameters and .       Exercises    A mass of kilograms is on a spring with spring constant newtons per meter with no damping. Suppose the system is at rest and at time the mass is kicked and starts traveling at 2 meters per second. How large does have to be to so that the mass does not go further than 3 meters from the rest position?     (and larger)      A 5000 kg railcar hits a bumper (a spring) at 1 , and the spring compresses by 0.1 m. Assume no damping.    Find .    How far does the spring compress when a 10000 kg railcar hits the spring at the same speed?    If the spring would break if it compresses further than 0.3 m, what is the maximum mass of a railcar that can hit it at 1 ?    What is the maximum mass of a railcar that can hit the spring without breaking at 2 ?      a)  b)  c) 45000 kg d) 11250 kg      Consider a mass and spring system with a mass , spring constant , and damping constant .    Set up and find the general solution of the system.    Is the system underdamped, overdamped or critically damped?    If the system is not critically damped, find a that makes the system critically damped.      a) The general equation is The characteristic equation is So the general solution is  b) From the general solution (complex roots), the system is underdamped. c) For critical damping, we want Note that we choose the positive sign as .      Do for , , and .    a) . b) Critically damped since we have two repeated roots. c) The system is critically damped.      A mass of kg is on a spring with and . Find the mass for which there is critical damping. If , does the system oscillate or not, that is, is it underdamped or overdamped?     . If , then the system is overdamped and will not oscillate.      Suppose we have an RLC circuit with a resistor of 100 milliohms (0.1 ohms), inductor of inductance of 50 millihenries (0.05 henries), and a capacitor of 5 farads, with constant voltage.    Set up the ODE equation for the current .    Find the general solution.    Solve for and .      a)  b)  c)       Using the mks units (meters-kilograms-seconds) mks units , suppose you have a spring with spring constant 4 . You want to use it to weigh items. Assume no friction. You place the mass on the spring and put it in motion.    You count and find that the frequency is 0.8 Hz (cycles per second). What is the mass?    Find a formula for the mass given the frequency in Hz.      a) kg. b) .      Suppose we add possible friction to . Further, suppose you do not know the spring constant, but you have two reference weights 1 kg and 2 kg to calibrate your setup. You put each in motion on your spring and measure the frequency. For the 1 kg weight you measured 1.1 Hz, for the 2 kg weight you measured 0.8 Hz.    Find (spring constant) and (damping constant).    Find a formula for the mass in terms of the frequency in Hz. Note that there may be more than one possible mass for a given frequency.     For an unknown object you measured 0.2 Hz, what is the mass of the object? Suppose that you know that the mass of the unknown object is more than a kilogram.      a) The angular frequency is . For a damped oscillating system Similarly Subtracting equation (2) from (1) we get Solving for  Plugging into (1)  b) Solving for  Writing  Note that , so these are two possible masses for each given frequency. c) For , plugging into the equation above we get kg, or kg. We know the mass is greater than 1 kg so we choose the latter answer.      Suppose you wish to measure the friction a mass of 0.1 kg experiences as it slides along a floor (you wish to find ). You have a spring with spring constant . You take the spring, you attach it to the mass and fix it to a wall. Then you pull on the spring and let the mass go. You find that the mass oscillates with frequency 1 Hz. What is the friction?     N.s\/m.     "
},
{
  "id": "mv_sinthetafig",
  "level": "2",
  "url": "sec_mv.html#mv_sinthetafig",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " The graphs of and (in radians).   "
},
{
  "id": "undampedmechanical",
  "level": "2",
  "url": "sec_mv.html#undampedmechanical",
  "type": "Video",
  "number": "2.4.1",
  "title": "Frictionless Mechanical Vibrations.",
  "body": " Frictionless Mechanical Vibrations  In this video we imagine a mass moving due to the force of a spring in a frictionless environment, what is often called a harmonic oscillator. From the perspective of ODEs, this is just a 2nd order constant coefficient homogeneous ODE. However we also need to physically interpret the results that we get. TYPO: My characteristic equation at 3:06 should be +k not -k. I did the subsequent finding the roots correctly, the minus sign error was just in the characteristic equation.    "
},
{
  "id": "sec_mv-4-8",
  "level": "2",
  "url": "sec_mv.html#sec_mv-4-8",
  "type": "Example",
  "number": "2.4.1",
  "title": "",
  "body": "  Suppose that and . The whole mass and spring setup is sitting on a truck that was traveling at 1 . The truck crashes and hence stops. The mass was held in place 0.5 meters forward from the rest position. During the crash the mass gets loose. That is, the mass is now moving forward at 1 , while the other end of the spring is held in place. The mass therefore starts oscillating. What is the frequency of the resulting oscillation? What is the amplitude? The units are the mks units mks units (meters-kilograms-seconds).  The setup means that the mass was at half a meter in the positive direction during the crash and relative to the wall the spring is mounted to, the mass was moving forward (in the positive direction) at 1 . This gives us the initial conditions.  So the equation with initial conditions is We directly compute . Hence the angular frequency is 2. The usual frequency in Hertz (cycles per second) is .  The general solution is Letting means . Then . Letting we get . Therefore, the amplitude is . The solution is A plot of is shown in .   "
},
{
  "id": "mv_undampedfig",
  "level": "2",
  "url": "sec_mv.html#mv_undampedfig",
  "type": "Figure",
  "number": "2.2",
  "title": "",
  "body": " Simple undamped oscillation.   "
},
{
  "id": "sec_mv-4-12",
  "level": "2",
  "url": "sec_mv.html#sec_mv-4-12",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "   Geogebra Activity: Use this Geogebra applet to to explore the effects of the mass , spring constant , and the initial conditions , on the solution of the free undamped equation .   "
},
{
  "id": "dampedmechanical",
  "level": "2",
  "url": "sec_mv.html#dampedmechanical",
  "type": "Video",
  "number": "2.4.2",
  "title": "Damped Mechanical Vibrations.",
  "body": " Damped Mechanical Vibrations  We can also study a mass-spring system that has a damping or friction force proportional to velocity. Again it is a constant coefficient 2nd order ODE, but now we get quite a bit more complexity in the possible solutions depending on the values of coefficients.   "
},
{
  "id": "mv_overdampedfig",
  "level": "2",
  "url": "sec_mv.html#mv_overdampedfig",
  "type": "Figure",
  "number": "2.3",
  "title": "",
  "body": " Overdamped motion for several different initial conditions.   "
},
{
  "id": "sec_mv-5-4-6",
  "level": "2",
  "url": "sec_mv.html#sec_mv-5-4-6",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": "  Suppose the mass is released from rest. That is and . Then It is not hard to see that this satisfies the initial conditions.   "
},
{
  "id": "mv_underdampedfig",
  "level": "2",
  "url": "sec_mv.html#mv_underdampedfig",
  "type": "Figure",
  "number": "2.4",
  "title": "",
  "body": " Underdamped motion with the envelope curves shown.   "
},
{
  "id": "sec_mv-5-6-8",
  "level": "2",
  "url": "sec_mv.html#sec_mv-5-6-8",
  "type": "Example",
  "number": "2.4.4",
  "title": "",
  "body": "   Geogebra Activity: Use this Geogebra applet to explore the behaviour of a free damped system as you change the parameters and .   "
},
{
  "id": "sec_mv-6-2",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-2",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": "  A mass of kilograms is on a spring with spring constant newtons per meter with no damping. Suppose the system is at rest and at time the mass is kicked and starts traveling at 2 meters per second. How large does have to be to so that the mass does not go further than 3 meters from the rest position?     (and larger)   "
},
{
  "id": "sec_mv-6-3",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-3",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": "  A 5000 kg railcar hits a bumper (a spring) at 1 , and the spring compresses by 0.1 m. Assume no damping.    Find .    How far does the spring compress when a 10000 kg railcar hits the spring at the same speed?    If the spring would break if it compresses further than 0.3 m, what is the maximum mass of a railcar that can hit it at 1 ?    What is the maximum mass of a railcar that can hit the spring without breaking at 2 ?      a)  b)  c) 45000 kg d) 11250 kg   "
},
{
  "id": "mv_ex1",
  "level": "2",
  "url": "sec_mv.html#mv_ex1",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": "  Consider a mass and spring system with a mass , spring constant , and damping constant .    Set up and find the general solution of the system.    Is the system underdamped, overdamped or critically damped?    If the system is not critically damped, find a that makes the system critically damped.      a) The general equation is The characteristic equation is So the general solution is  b) From the general solution (complex roots), the system is underdamped. c) For critical damping, we want Note that we choose the positive sign as .   "
},
{
  "id": "sec_mv-6-5",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-5",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "",
  "body": "  Do for , , and .    a) . b) Critically damped since we have two repeated roots. c) The system is critically damped.   "
},
{
  "id": "sec_mv-6-6",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-6",
  "type": "Exercise",
  "number": "2.4.5",
  "title": "",
  "body": "  A mass of kg is on a spring with and . Find the mass for which there is critical damping. If , does the system oscillate or not, that is, is it underdamped or overdamped?     . If , then the system is overdamped and will not oscillate.   "
},
{
  "id": "sec_mv-6-7",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-7",
  "type": "Exercise",
  "number": "2.4.6",
  "title": "",
  "body": "  Suppose we have an RLC circuit with a resistor of 100 milliohms (0.1 ohms), inductor of inductance of 50 millihenries (0.05 henries), and a capacitor of 5 farads, with constant voltage.    Set up the ODE equation for the current .    Find the general solution.    Solve for and .      a)  b)  c)    "
},
{
  "id": "mv_exwt1",
  "level": "2",
  "url": "sec_mv.html#mv_exwt1",
  "type": "Exercise",
  "number": "2.4.7",
  "title": "",
  "body": "  Using the mks units (meters-kilograms-seconds) mks units , suppose you have a spring with spring constant 4 . You want to use it to weigh items. Assume no friction. You place the mass on the spring and put it in motion.    You count and find that the frequency is 0.8 Hz (cycles per second). What is the mass?    Find a formula for the mass given the frequency in Hz.      a) kg. b) .   "
},
{
  "id": "sec_mv-6-9",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-9",
  "type": "Exercise",
  "number": "2.4.8",
  "title": "",
  "body": "  Suppose we add possible friction to . Further, suppose you do not know the spring constant, but you have two reference weights 1 kg and 2 kg to calibrate your setup. You put each in motion on your spring and measure the frequency. For the 1 kg weight you measured 1.1 Hz, for the 2 kg weight you measured 0.8 Hz.    Find (spring constant) and (damping constant).    Find a formula for the mass in terms of the frequency in Hz. Note that there may be more than one possible mass for a given frequency.     For an unknown object you measured 0.2 Hz, what is the mass of the object? Suppose that you know that the mass of the unknown object is more than a kilogram.      a) The angular frequency is . For a damped oscillating system Similarly Subtracting equation (2) from (1) we get Solving for  Plugging into (1)  b) Solving for  Writing  Note that , so these are two possible masses for each given frequency. c) For , plugging into the equation above we get kg, or kg. We know the mass is greater than 1 kg so we choose the latter answer.   "
},
{
  "id": "sec_mv-6-10",
  "level": "2",
  "url": "sec_mv.html#sec_mv-6-10",
  "type": "Exercise",
  "number": "2.4.9",
  "title": "",
  "body": "  Suppose you wish to measure the friction a mass of 0.1 kg experiences as it slides along a floor (you wish to find ). You have a spring with spring constant . You take the spring, you attach it to the mass and fix it to a wall. Then you pull on the spring and let the mass go. You find that the mass oscillates with frequency 1 Hz. What is the friction?     N.s\/m.   "
},
{
  "id": "sec_nonhom",
  "level": "1",
  "url": "sec_nonhom.html",
  "type": "Section",
  "number": "2.5",
  "title": "Nonhomogeneous equations",
  "body": " Nonhomogeneous equations     Solving nonhomogeneous equations   Solving Nonhomogeneous Equatios using Undetermined Coefficients  Our study of constant coefficient ODEs thus far has always had them be homogeneous, that is no terms only in the independent variable. How can we deal with a non-homogeneity? In this video we learn the Method of Undetermined Coefficients. We first learn a bit of theory that lets us relate solutions to the non-homogeneous equation to solutions of the corresponding homogeneous equation, and then the methodology is basically a bit of intelligent guessing to find a solution that works.    We have solved linear constant coefficient homogeneous equations. What about nonhomogeneous linear ODEs? For example, the equations for forced mechanical vibrations. That is, suppose we have an equation such as   We will write when the exact form of the operator is not important. We solve in the following manner. First, we find the general solution to the associated homogeneous equation associated homogeneous equation  We call the complementary solution complementary solution . Next, we find a single particular solution particular solution  to in some way. Then is the general solution to . We have and . As is a linear operator linear operator we verify that is a solution, . Let us see why we obtain the general solution.  Let and be two different particular solutions to . Write the difference as . Then plug into the left-hand side of the equation to get Using the operator notation the calculation becomes simpler. As is a linear operator we write So is a solution to , that is . Any two solutions of differ by a solution to the homogeneous equation . The solution includes all solutions to , since is the general solution to the associated homogeneous equation.    Let be a linear ODE (not necessarily constant coefficient). Let be the complementary solution (the general solution to the associated homogeneous equation ) and let be any particular solution to . Then the general solution to is     The moral of the story is that we can find the particular solution in any old way. If we find a different particular solution (by a different method, or simply by guessing), then we still get the same general solution. The formula may look different, and the constants we have to choose to satisfy the initial conditions may be different, but it is the same solution.    Undetermined coefficients  undetermined coefficients  The trick is to somehow, in a smart way, guess one particular solution to . Note that is a polynomial, and the left-hand side of the equation will be a polynomial if we let be a polynomial of the same degree. Let us try We plug into the left hand side to obtain So . Therefore, and . That means . Solving the complementary problem (verify!) we get Hence the general solution to is Now suppose we are further given some initial conditions. For example, and . First find . Then We solve to get and . The particular solution we want is   Verify: check that really solves the equation and the given initial conditions.  Note: A common mistake is to solve for constants using the initial conditions with and only add the particular solution after that. That will not work. You need to first compute and only then solve for the constants using the initial conditions.  A right-hand side consisting of exponentials, sines, and cosines can be handled similarly. For example, Let us find some . We start by guessing the solution includes some multiple of . We may have to also add a multiple of to our guess since derivatives of cosine are sines. We try We plug into the equation and we get or The left-hand side must equal to right-hand side. Namely, and . So and and hence and . So   Similarly, if the right-hand side contains exponentials we try exponentials. If we try as our guess and try to solve for .  When the right-hand side is a multiple of sines, cosines, exponentials, and polynomials, we can use the product rule for differentiation to come up with a guess. We need to guess a form for such that is of the same form, and has all the terms needed to for the right-hand side. For example, For this equation, we guess We plug in and then hopefully get equations that we can solve for , , , , , and . As you can see this can make for a very long and tedious tedious calculation very quickly. C'est la vie la vie !  There is one hiccup in all this. It could be that our guess actually solves the associated homogeneous equation. That is, suppose we have We would love to guess , but if we plug this into the left-hand side of the equation we get There is no way we can choose to make the left-hand side be . The trick in this case is to multiply our guess by to get rid of duplication with the complementary solution. That is first we compute (solution to ) and we note that the term is a duplicate with our desired guess. We modify our guess to so that there is no duplication anymore. Let us try: and , so Thus is supposed to equal . Hence, and so . We can now write the general solution as   It is possible that multiplying by does not get rid of all duplication. For example, The complementary solution is . Guessing would not get us anywhere. In this case we want to guess . Basically, we want to multiply our guess by until all duplication is gone. But no more! Multiplying too many times will not work.  Finally, what if the right-hand side has several terms, such as In this case we find that solves and that solves (that is, do each term separately). Then note that if , then . This is because is linear; we have .    Variation of parameters  The method of undetermined coefficients works for many basic problems that crop up. But it does not work all the time. It only works when the right-hand side of the equation has finitely many linearly independent derivatives, so that we can write a guess that consists of them all. Some equations are a bit tougher. Consider Each new derivative of looks completely different and cannot be written as a linear combination of the previous derivatives. If we start differentiating , we get:   This equation calls for a different method. We present the method of variation of parameters variation of parameters , which handles any equation of the form , provided we can solve certain integrals. For simplicity, we restrict ourselves to second order constant coefficient equations, but the method works for higher order equations just as well (the computations become more tedious tedious ). The method also works for equations with nonconstant coefficients, provided we can solve the associated homogeneous equation.  Perhaps it is best to explain this method by example. Let us try to solve the equation First we find the complementary solution (solution to ). We get , where and . To find a particular solution to the nonhomogeneous equation we try where and are functions and not constants. We are trying to satisfy . That gives us one condition on the functions and . Compute (note the product rule!) We can still impose one more condition at our discretion to simplify computations (we have two unknown functions, so we should be allowed two conditions). We require that . This makes computing the second derivative easier. Since and are solutions to , we find and . (If the equation was a more general , we would have .) So We have and so and hence For to satisfy we must have .  What we need to solve are the two equations (conditions) we imposed on and : We always get these formulas for any , where . Now we solve for and in terms of , and giving    where is the Wronskian of and at a point . This gives us the general formula   We could just plug into this general formula, but memorizing this complicated formula is tedious and not instructive so and instead one can ignore the above formula and just go through the process to derive the formula in each specific case. Let's do that now for our example with .  In our case the two equations are Hence And thus We integrate and to get and . So our particular solution is The general solution to is, therefore,     Exercises    Find a particular solution of .    Finding the complementary solution  The right hand side of the ODE is an exponential, so the particular solution should look like . Differentiating Plugging into the ODE, we find . Therefore, the particular solution is .      Find a particular solution of .           Find a particular solution to .           Solve the initial value problem for , .    The complementary solution is . Given the right hand side of the ODE, we expect the particular solution to be of the form . This however is a duplicate of , so we multiply by , giving Plugging into the ODE and cancelling terms, we end up with So the general solution is Applying the initial conditions (to the full general solution including the particular solution), we find that and , so the solution to the initial value problem is           Find a particular solution to .    Find the general solution.      a)  b)       Solve , , .           Set up the form of the particular solution but do not solve for the coefficients for .    Finding the complementary solution Given the right hand side of the ODE, we guess a particualr solution of the form , but this is a duplicate of a term in so we multiply by giving       Set up the form of the particular solution but do not solve for the coefficients for .               Using variation of parameters find a particular solution of .    Find a particular solution using undetermined coefficients.    Are the two solutions you found the same? See also .      a) The complementary solution is . Using And using The particular solution is  b) We guess the particular solution has the form , which is duplicated in , so we multiply by giving Plugging into the ODE we find that , so As found in (a). c) Yes, the answers match!      Use variation of parameters to find a particular solution of .           Find a particular solution of . It is OK to leave the answer as a definite integral.           For an arbitrary constant find a particular solution to . Hint: Make sure to handle every possible real .    The complementary solution is . So we guess a particular solution of the form . We look at the case where (case 1). Here we have Plugging into the ODE Since this simplifies to In the case where (case 2), no modification is needed for our guess. Repeating the same process as above we find that So finally the particular solution is       For an arbitrary constant find the general solution to .               Using variation of parameters find a particular solution of .    Find a particular solution using undetermined coefficients.    Are the two solutions you found the same? What is going on?      a) Using variation of parameters, we find and giving . b) Using undetermined coefficients we guess where , giving . c) It is acceptable to get different with different methods. What needs to remain the same is the general solution (or the solution to the initial value problem). Looking at the general solution from (b) And the general solution from (a) So the general solution is the same in both cases, as it should be.      Find a polynomial , so that solves .    Finding and  We plug this into the ODE, giving       Undetermined coefficients can sometimes be used to guess a particular solution to other equations than constant coefficients. Find a polynomial that solves .  Note: Not every right hand side will allow a polynomial solution, for example, does not, but a technique based on undetermined coefficients does work, see .          "
},
{
  "id": "undeterminedcoefficients",
  "level": "2",
  "url": "sec_nonhom.html#undeterminedcoefficients",
  "type": "Video",
  "number": "2.5.1",
  "title": "Solving Nonhomogeneous Equatios using Undetermined Coefficients.",
  "body": " Solving Nonhomogeneous Equatios using Undetermined Coefficients  Our study of constant coefficient ODEs thus far has always had them be homogeneous, that is no terms only in the independent variable. How can we deal with a non-homogeneity? In this video we learn the Method of Undetermined Coefficients. We first learn a bit of theory that lets us relate solutions to the non-homogeneous equation to solutions of the corresponding homogeneous equation, and then the methodology is basically a bit of intelligent guessing to find a solution that works.   "
},
{
  "id": "sec_nonhom-3-6",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-3-6",
  "type": "Theorem",
  "number": "2.5.1",
  "title": "",
  "body": "  Let be a linear ODE (not necessarily constant coefficient). Let be the complementary solution (the general solution to the associated homogeneous equation ) and let be any particular solution to . Then the general solution to is    "
},
{
  "id": "sec_nonhom-6-2",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-2",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": "  Find a particular solution of .    Finding the complementary solution  The right hand side of the ODE is an exponential, so the particular solution should look like . Differentiating Plugging into the ODE, we find . Therefore, the particular solution is .   "
},
{
  "id": "sec_nonhom-6-3",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-3",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": "  Find a particular solution of .        "
},
{
  "id": "sec_nonhom-6-4",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-4",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": "  Find a particular solution to .        "
},
{
  "id": "sec_nonhom-6-5",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-5",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "",
  "body": "  Solve the initial value problem for , .    The complementary solution is . Given the right hand side of the ODE, we expect the particular solution to be of the form . This however is a duplicate of , so we multiply by , giving Plugging into the ODE and cancelling terms, we end up with So the general solution is Applying the initial conditions (to the full general solution including the particular solution), we find that and , so the solution to the initial value problem is    "
},
{
  "id": "sec_nonhom-6-6",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-6",
  "type": "Exercise",
  "number": "2.5.5",
  "title": "",
  "body": "      Find a particular solution to .    Find the general solution.      a)  b)    "
},
{
  "id": "sec_nonhom-6-7",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-7",
  "type": "Exercise",
  "number": "2.5.6",
  "title": "",
  "body": "  Solve , , .        "
},
{
  "id": "sec_nonhom-6-8",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-8",
  "type": "Exercise",
  "number": "2.5.7",
  "title": "",
  "body": "  Set up the form of the particular solution but do not solve for the coefficients for .    Finding the complementary solution Given the right hand side of the ODE, we guess a particualr solution of the form , but this is a duplicate of a term in so we multiply by giving    "
},
{
  "id": "sec_nonhom-6-9",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-9",
  "type": "Exercise",
  "number": "2.5.8",
  "title": "",
  "body": "  Set up the form of the particular solution but do not solve for the coefficients for .        "
},
{
  "id": "sec_nonhom-6-10",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-10",
  "type": "Exercise",
  "number": "2.5.9",
  "title": "",
  "body": "      Using variation of parameters find a particular solution of .    Find a particular solution using undetermined coefficients.    Are the two solutions you found the same? See also .      a) The complementary solution is . Using And using The particular solution is  b) We guess the particular solution has the form , which is duplicated in , so we multiply by giving Plugging into the ODE we find that , so As found in (a). c) Yes, the answers match!   "
},
{
  "id": "sec_nonhom-6-11",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-11",
  "type": "Exercise",
  "number": "2.5.10",
  "title": "",
  "body": "  Use variation of parameters to find a particular solution of .        "
},
{
  "id": "sec_nonhom-6-12",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-12",
  "type": "Exercise",
  "number": "2.5.11",
  "title": "",
  "body": "  Find a particular solution of . It is OK to leave the answer as a definite integral.        "
},
{
  "id": "sec_nonhom-6-13",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-13",
  "type": "Exercise",
  "number": "2.5.12",
  "title": "",
  "body": "  For an arbitrary constant find a particular solution to . Hint: Make sure to handle every possible real .    The complementary solution is . So we guess a particular solution of the form . We look at the case where (case 1). Here we have Plugging into the ODE Since this simplifies to In the case where (case 2), no modification is needed for our guess. Repeating the same process as above we find that So finally the particular solution is    "
},
{
  "id": "sec_nonhom-6-14",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-14",
  "type": "Exercise",
  "number": "2.5.13",
  "title": "",
  "body": "  For an arbitrary constant find the general solution to .        "
},
{
  "id": "exercise_diffvarparunder",
  "level": "2",
  "url": "sec_nonhom.html#exercise_diffvarparunder",
  "type": "Exercise",
  "number": "2.5.14",
  "title": "",
  "body": "      Using variation of parameters find a particular solution of .    Find a particular solution using undetermined coefficients.    Are the two solutions you found the same? What is going on?      a) Using variation of parameters, we find and giving . b) Using undetermined coefficients we guess where , giving . c) It is acceptable to get different with different methods. What needs to remain the same is the general solution (or the solution to the initial value problem). Looking at the general solution from (b) And the general solution from (a) So the general solution is the same in both cases, as it should be.   "
},
{
  "id": "sec_nonhom-6-16",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-16",
  "type": "Exercise",
  "number": "2.5.15",
  "title": "",
  "body": "  Find a polynomial , so that solves .    Finding and  We plug this into the ODE, giving    "
},
{
  "id": "sec_nonhom-6-17",
  "level": "2",
  "url": "sec_nonhom.html#sec_nonhom-6-17",
  "type": "Exercise",
  "number": "2.5.16",
  "title": "",
  "body": "  Undetermined coefficients can sometimes be used to guess a particular solution to other equations than constant coefficients. Find a polynomial that solves .  Note: Not every right hand side will allow a polynomial solution, for example, does not, but a technique based on undetermined coefficients does work, see .        "
},
{
  "id": "forcedo_section",
  "level": "1",
  "url": "forcedo_section.html",
  "type": "Section",
  "number": "2.6",
  "title": "Forced oscillations and resonance",
  "body": " Forced oscillations and resonance   Note: 2 lectures, §3.6 in , §3.8 in     Let us return back to the example of a mass on a spring. We examine the case of forced oscillations, which we did not yet handle. That is, we consider the equation for some nonzero . The setup is again: is mass, is friction, is the spring constant, and is an external force acting on the mass.  We are interested in periodic forcing, such as noncentered rotating parts, or perhaps loud sounds, or other sources of periodic force. Once we learn about Fourier series in , we will see that we cover all periodic functions by simply considering (or sine instead of cosine, the calculations are essentially the same).    Undamped forced motion and resonance  First let us consider undamped ( ) motion. We have the equation This equation has the complementary solution (solution to the associated homogeneous equation) where is the natural frequency natural frequency (angular). It is the frequency at which the system wants to oscillate without external interference.  Suppose that . We try the solution and solve for . We do not need a sine in our trial solution as after plugging in we only have cosines. If you include a sine, it is fine; you will find that its coefficient is zero (I could not find a second rhyme).  We solve using the method of undetermined coefficients. We find that We leave it as an exercise to do the algebra required.  The general solution is Written another way The solution is a superposition of two cosine waves at different frequencies.    Take   Let us compute. First we read off the parameters: , , , . The general solution is   Solve for and using the initial conditions: and . Hence    Graph of .    Do notice the beating behavior beating in . To see it, use the trigonometric identity to get The function is a high frequency wave modulated by a low frequency wave.    Now suppose . Obviously, we cannot try the solution and then use the method of undetermined coefficients. We notice that solves the associated homogeneous equation. Therefore, we try . This time we need the sine term, since the second derivative of contains sines. We write the equation Plugging into the left-hand side we get Hence and . Our particular solution is and our general solution is   The important term is the last one (the particular solution we found). This term grows without bound as . In fact it oscillates between and . The first two terms only oscillate between , which becomes smaller and smaller in proportion to the oscillations of the last term as gets larger. In we see the graph with , , , .   Graph of .    By forcing the system in just the right frequency we produce very wild oscillations. This kind of behavior is called resonance resonance or perhaps pure resonance pure resonance . Sometimes resonance is desired. For example, remember when as a kid you could start swinging by just moving back and forth on the swing seat in the correct frequency ? You were trying to achieve resonance. The force of each one of your moves was small, but after a while it produced large swings.  On the other hand resonance can be destructive. In an earthquake some buildings collapse while others may be relatively undamaged. This is due to different buildings having different resonance frequencies. So figuring out the resonance frequency can be very important.  A common (but wrong) example of destructive force of resonance is the Tacoma Narrows bridge failure. It turns out there was a different phenomenon at play K. Billah and R. Scanlan, Resonance, Tacoma Narrows Bridge Failure, and Undergraduate Physics Textbooks , American Journal of Physics, 59(2), 1991, 118–124, http:\/\/www.ketchum.org\/billah\/Billah-Scanlan.pdf .    Damped forced motion and practical resonance  In real life things are not as simple as they were above. There is, of course, some damping. Our equation becomes for some . We solved the homogeneous problem before. We let We replace equation with The roots of the characteristic equation of the associated homogeneous problem are . The form of the general solution of the associated homogeneous equation depends on the sign of , or equivalently on the sign of , as before: where . In any case, we see that as .  Let us find a particular solution. There can be no conflicts when trying to solve for the undetermined coefficients by trying . Let us plug in and solve for and . We get (the tedious tedious details are left to reader)   We solve for and : We also compute to be Thus our particular solution is Or in the alternative notation we have amplitude and phase shift where (if ) Hence, If , then , , and .  For reasons we will explain in a moment, we call the transient solution transient solution and denote it by . We call the from above the steady periodic solution steady periodic solution and denote it by . The general solution is   The transient solution goes to zero as , as all the terms involve an exponential with a negative exponent. So for large , the effect of is negligible and we see essentially only . Hence the name transient . Notice that involves no arbitrary constants, and the initial conditions only affect . Thus, the effect of the initial conditions is negligible after some period of time. We might as well focus on the steady periodic solution and ignore the transient solution. See for a graph given several different initial conditions.   Solutions with different initial conditions for parameters , , , , and .    The speed at which goes to zero depends on (and hence ). The bigger is (the bigger is), the faster  becomes negligible. So the smaller the damping, the longer the transient region. This is consistent with the observation that when , the initial conditions affect the behavior for all time (i.e. an infinite transient region ).  Let us describe what we mean by resonance when damping is present. Since there were no conflicts when solving with undetermined coefficient, there is no term that goes to infinity. We look instead at the maximum value of the amplitude of the steady periodic solution. Let be the amplitude of . If we plot as a function of (with all other parameters fixed), we can find its maximum. We call the that achieves this maximum the practical resonance frequency practical resonance frequency . We call the maximal amplitude the practical resonance amplitude practical resonance amplitude . Thus when damping is present we talk of practical resonance practical resonance rather than pure resonance. A sample plot for three different values of is given in . As you can see the practical resonance amplitude grows as damping gets smaller, and practical resonance can disappear altogether when damping is large.   Graph of showing practical resonance with parameters , , . The top line is with , the middle line with , and the bottom line with .    To find the maximum we need to find the derivative . Computation shows This is zero either when or when . In other words, when If is positive, then is the practical resonance frequency (that is the point where is maximal). This follows by the first derivative test for example as then for small in this case. If on the other hand is not positive, then achieves its maximum at , and there is no practical resonance since we assume in our system. In this case the amplitude gets larger as the forcing frequency gets smaller.  If practical resonance occurs, the frequency is smaller than . As the damping (and hence ) becomes smaller, the practical resonance frequency goes to . So when damping is very small, is a good estimate of the practical resonance frequency. This behavior agrees with the observation that when , then is the resonance frequency.  Another interesting observation to make is that when , then . This means that if the forcing frequency gets too high it does not manage to get the mass moving in the mass-spring system. This is quite reasonable intuitively. If we wiggle back and forth really fast while sitting on a swing, we will not get it moving at all, no matter how forceful. Fast vibrations just cancel each other out before the mass has any chance of responding by moving one way or the other.  The behavior is more complicated if the forcing function is not an exact cosine wave, but for example a square wave square wave . A general periodic function will be the sum (superposition) of many cosine waves of different frequencies. The reader is encouraged to come back to this section once we have learned about the Fourier series.     Geogebra Activity: Use this Geogebra applet to explore the behaviour of a forced damped harmonic oscillator. Try to find the practical resonance for some choice of parameters.      Exercises    Derive a formula for if the equation is . Assume .    We know that in such a case, the particular solution should look like . So differentiating this and plugging it into the ODE we get Where and are defined as before. Solving for and we get Therefore Note that only the phase shift changes (which makes sense given that the force also only changed by a phase shift).      Derive a formula for if the equation is . Assume .    We find for each term on the right hand side. And So finally .      Derive a formula for for , where is some constant. Assume .     , where and .      Take . Fix , , and . Consider the function . For what values of (solve in terms of , , and ) will there be no practical resonance (that is, for what values of is there no maximum of for )?    There is no practical resonance if so       Take . Fix , , and . Consider the function . For what values of (solve in terms of , , and ) will there be no practical resonance (that is, for what values of is there no maximum of for )?    As was done in the previous exercise, we find .      A mass of 4 kg on a spring with and a damping constant . Suppose that . Using forcing function , find the that causes practical resonance and find the amplitude.             A water tower in an earthquake acts as a mass-spring system. Assume that the container on top is full and the water does not move around. The container then acts as the mass and the support acts as the spring, where the induced vibrations are horizontal. The container with water has a mass of . It takes a force of 1000 newtons to displace the container 1 meter. For simplicity assume no friction. When the earthquake hits the water tower is at rest (it is not moving). The earthquake induces an external force .    What is the natural frequency of the water tower?    If is not the natural frequency, find a formula for the maximal amplitude of the resulting oscillations of the water container (the maximal deviation from the rest position). The motion will be a high frequency wave modulated by a low frequency wave, so simply find the constant in front of the sines.    Suppose and an earthquake with frequency 0.5 cycles per second comes. What is the amplitude of the oscillations? Suppose that if the water tower moves more than 1.5 meter from the rest position, the tower collapses. Will the tower collapse?      No friction means that , and the differential equation is The initial conditions are , and the applied force is . a) . b) For undamped, forced motion with we know that Applying the initial conditions, we find that Giving  c) Plugging the given values into the answer from (b), we find So the tower collapses.      Suppose there is no damping in a mass and spring system with , , and . Suppose is chosen to be precisely the resonance frequency.    Find .    Find the amplitude of the oscillations at time , given the system is at rest at .      a)  b)      "
},
{
  "id": "forcedo_section-3-6",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-3-6",
  "type": "Example",
  "number": "2.6.1",
  "title": "",
  "body": "  Take   Let us compute. First we read off the parameters: , , , . The general solution is   Solve for and using the initial conditions: and . Hence    Graph of .    Do notice the beating behavior beating in . To see it, use the trigonometric identity to get The function is a high frequency wave modulated by a low frequency wave.   "
},
{
  "id": "X3_6_resonancefig",
  "level": "2",
  "url": "forcedo_section.html#X3_6_resonancefig",
  "type": "Figure",
  "number": "2.6",
  "title": "",
  "body": " Graph of .   "
},
{
  "id": "X3_6_transbehfig",
  "level": "2",
  "url": "forcedo_section.html#X3_6_transbehfig",
  "type": "Figure",
  "number": "2.7",
  "title": "",
  "body": " Solutions with different initial conditions for parameters , , , , and .   "
},
{
  "id": "X3_6_pracresfig",
  "level": "2",
  "url": "forcedo_section.html#X3_6_pracresfig",
  "type": "Figure",
  "number": "2.8",
  "title": "",
  "body": " Graph of showing practical resonance with parameters , , . The top line is with , the middle line with , and the bottom line with .   "
},
{
  "id": "forcedo_section-4-15",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-4-15",
  "type": "Example",
  "number": "2.6.2",
  "title": "",
  "body": "   Geogebra Activity: Use this Geogebra applet to explore the behaviour of a forced damped harmonic oscillator. Try to find the practical resonance for some choice of parameters.   "
},
{
  "id": "forcedo_section-5-2",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-2",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": "  Derive a formula for if the equation is . Assume .    We know that in such a case, the particular solution should look like . So differentiating this and plugging it into the ODE we get Where and are defined as before. Solving for and we get Therefore Note that only the phase shift changes (which makes sense given that the force also only changed by a phase shift).   "
},
{
  "id": "forcedo_section-5-3",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-3",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "",
  "body": "  Derive a formula for if the equation is . Assume .    We find for each term on the right hand side. And So finally .   "
},
{
  "id": "forcedo_section-5-4",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-4",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "",
  "body": "  Derive a formula for for , where is some constant. Assume .     , where and .   "
},
{
  "id": "forcedo_section-5-5",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-5",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "",
  "body": "  Take . Fix , , and . Consider the function . For what values of (solve in terms of , , and ) will there be no practical resonance (that is, for what values of is there no maximum of for )?    There is no practical resonance if so    "
},
{
  "id": "forcedo_section-5-6",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-6",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "",
  "body": "  Take . Fix , , and . Consider the function . For what values of (solve in terms of , , and ) will there be no practical resonance (that is, for what values of is there no maximum of for )?    As was done in the previous exercise, we find .   "
},
{
  "id": "forcedo_section-5-7",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-7",
  "type": "Exercise",
  "number": "2.6.6",
  "title": "",
  "body": "  A mass of 4 kg on a spring with and a damping constant . Suppose that . Using forcing function , find the that causes practical resonance and find the amplitude.          "
},
{
  "id": "forcedo_section-5-8",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-8",
  "type": "Exercise",
  "number": "2.6.7",
  "title": "",
  "body": "  A water tower in an earthquake acts as a mass-spring system. Assume that the container on top is full and the water does not move around. The container then acts as the mass and the support acts as the spring, where the induced vibrations are horizontal. The container with water has a mass of . It takes a force of 1000 newtons to displace the container 1 meter. For simplicity assume no friction. When the earthquake hits the water tower is at rest (it is not moving). The earthquake induces an external force .    What is the natural frequency of the water tower?    If is not the natural frequency, find a formula for the maximal amplitude of the resulting oscillations of the water container (the maximal deviation from the rest position). The motion will be a high frequency wave modulated by a low frequency wave, so simply find the constant in front of the sines.    Suppose and an earthquake with frequency 0.5 cycles per second comes. What is the amplitude of the oscillations? Suppose that if the water tower moves more than 1.5 meter from the rest position, the tower collapses. Will the tower collapse?      No friction means that , and the differential equation is The initial conditions are , and the applied force is . a) . b) For undamped, forced motion with we know that Applying the initial conditions, we find that Giving  c) Plugging the given values into the answer from (b), we find So the tower collapses.   "
},
{
  "id": "forcedo_section-5-9",
  "level": "2",
  "url": "forcedo_section.html#forcedo_section-5-9",
  "type": "Exercise",
  "number": "2.6.8",
  "title": "",
  "body": "  Suppose there is no damping in a mass and spring system with , , and . Suppose is chosen to be precisely the resonance frequency.    Find .    Find the amplitude of the oscillations at time , given the system is at rest at .      a)  b)    "
},
{
  "id": "laplace_section",
  "level": "1",
  "url": "laplace_section.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Laplace transform",
  "body": " The Laplace transform     The transform   Intro to Laplace Transform  In this video we introduce the Laplace Transform which takes in functions and outputs a different type of a function. This is going to seem rather strange and unmotivated a bit, because the proof is really in the pudding here that Laplace Transforms are useful for us in how powerful they are to solve differential equations. One benefit is going to happen right away: we will see how to transform very discontinuous things like step functions and the gamma function into more reasonable objects.    In this chapter we will discuss the Laplace transform Just like the Laplace equation and the Laplacian, the Laplace transform is also named after Pierre-Simon, marquis de Laplace (1749–1827). . The Laplace transform is a very efficient method to solve certain ODE or PDE problems. The transform takes a differential equation and turns it into an algebraic equation. If the algebraic equation can be solved, applying the inverse transform gives us our desired solution. The Laplace transform also has applications in the analysis of electrical circuits, NMR spectroscopy, signal processing, and elsewhere. Finally, understanding the Laplace transform will also help with understanding the related Fourier transform, which, however, requires more understanding of complex numbers. We will not cover the Fourier transform.  The Laplace transform also gives a lot of insight into the nature of the equations we are dealing with. It can be seen as converting between the time and the frequency domain. For example, take the standard equation We can think of as time and as incoming signal. The Laplace transform will convert the equation from a differential equation in time to an algebraic (no derivatives) equation, where the new independent variable is the frequency.  We can think of the Laplace transform Laplace transform as a black box. It eats functions and spits out functions in a new variable. We write for the Laplace transform of . It is common to write lower case letters for functions in the time domain and upper case letters for functions in the frequency domain. We use the same letter to denote that one function is the Laplace transform of the other. For example is the Laplace transform of . Let us define the transform. We note that we are only considering in the transform. Of course, if we think of as time there is no problem, we are generally interested in finding out what will happen in the future (Laplace transform is one place where it is safe to ignore the past). Let us compute some simple transforms.    Suppose , then The limit (the improper integral) only exists if . So is only defined for .      Suppose , then The limit only exists if . So is only defined for .      Suppose , then using integration by parts Again, the limit only exists if .      A common function is the unit step function unit step function , which is sometimes called the Heaviside function Heaviside function The function is named after the English mathematician, engineer, and physicist Oliver Heaviside (1850–1925). Only by coincidence is the function heavy on one side. . This function is generally given as Let us find the Laplace transform of , where is some constant. That is, the function that is 0 for and 1 for . where of course (and as we said before).    By applying similar procedures we can compute the transforms of many elementary functions. Many basic transforms are listed in .   Some Laplace transforms ( , , and are constants).              Verify .     Linearity, Existence, and Inverses of the Laplace Transform  The Laplace Transform has a lot properties that mean it behaves nicely. In this video we'll explore three crucial ones: linearity, existence, and inverses.    Since the transform is defined by an integral, we can use the linearity properties of the integral. For example, suppose is a constant, then So we can pull out a constant out of the transform. Similarly we have linearity. Since linearity is very important we state it as a theorem.   Linearity of the Laplace transform  linearity of the Laplace transform   Suppose that , , and are constants, then and in particular       Verify the theorem. That is, show that .    These rules together with make it easy to find the Laplace transform of a whole lot of functions already. But be careful. It is a common mistake to think that the Laplace transform of a product is the product of the transforms. In general   It must also be noted that not all functions have a Laplace transform. For example, the function does not have a Laplace transform as the integral diverges for all . Similarly, or do not have Laplace transforms.    Existence and uniqueness  When does the Laplace transform exist? A function is of exponential order exponential order as goes to infinity if for some constants and , for sufficiently large (say for all for some ). The simplest way to check this condition is to try and compute If the limit exists and is finite (usually zero), then is of exponential order.    Use L'Hopital's rule from calculus to show that a polynomial is of exponential order. Hint: Note that a sum of two exponential order functions is also of exponential order. Then show that is of exponential order for any .    For an exponential order function we have existence and uniqueness of the Laplace transform.   Existence   Let be continuous and of exponential order for a certain constant . Then is defined for all .    The existence is not difficult to see. Let be of exponential order, that is for all (for simplicity ). Let , or in other words . By the comparison theorem from calculus, the improper integral defining exists if the following integral exists   The transform also exists for some other functions that are not of exponential order, but that will not be relevant to us. Before dealing with uniqueness, let us note that for exponential order functions we obtain that their Laplace transform decays at infinity:    Uniqueness   Let and be continuous and of exponential order. Suppose that there exists a constant , such that for all . Then for all .    Both theorems hold for piecewise continuous functions as well. Recall that piecewise continuous means that the function is continuous except perhaps at a discrete set of points, where it has jump discontinuities like the Heaviside function. Uniqueness, however, does not see values at the discontinuities. So we can only conclude that outside of discontinuities. For example, the unit step function is sometimes defined using . This new step function, however, has the exact same Laplace transform as the one we defined earlier where .    The inverse transform  As we said, the Laplace transform will allow us to convert a differential equation into an algebraic equation. Once we solve the algebraic equation in the frequency domain we will want to get back to the time domain, as that is what we are interested in. Given a function , we wish to find a function such that . says that the solution is unique. So we can without fear make the following definition.  Suppose for some function . Define the inverse Laplace transform inverse Laplace transform as There is an integral formula for the inverse, but it is not as simple as the transform itself—it requires complex numbers and path integrals. For us it will suffice to compute the inverse using .    Take . Find the inverse Laplace transform.  We look at the table to find     As the Laplace transform is linear, the inverse Laplace transform is also linear. That is, Of course, we also have . Let us demonstrate how linearity can be used.    Take . Find the inverse Laplace transform.  First we use the method of partial fractions method of partial fractions to write in a form where we can use . We factor the denominator as and write Putting the right-hand side over a common denominator and equating the numerators we get . Expanding and equating coefficients we obtain , , , and thus . In other words, By linearity of the inverse Laplace transform we get     Another useful property is the so-called shifting property shifting property or the first shifting property first shifting property  where is the Laplace transform of .    Derive the first shifting property from the definition of the Laplace transform.    The shifting property can be used, for example, when the denominator is a more complicated quadratic that may come up in the method of partial fractions. We complete the square and write such quadratics as and then use the shifting property.   Translation & Inverse Laplace Transforms of Irreducible Factors  We want to widely expand the set of functions we can take the inverse Laplace transform of. We will learn about a very convenient property called Translation aka Shifting, and see specifically what to do with irreducible factors.   TYPO: In the final example the term should also have an exponential out front and be for the same reasons       Find .  First we complete the square to make the denominator . Next we find Putting it all together with the shifting property, we find      Inverse Laplace Transform with Repeated Factors   showed us how to take an irreducible quadratic factor and use completing the square to write it in a fashion amendable for taking inverse Laplace transforms. In this video we show how to deal with repeated factors.    In general, we want to be able to apply the Laplace transform to rational functions, that is functions of the form where and are polynomials. Since normally, for the functions that we are considering, the Laplace transform goes to zero as , it is not hard to see that the degree of must be smaller than that of . Such rational functions are called proper rational functions proper rational function and we can always apply the method of partial fractions. Of course this means we need to be able to factor the denominator into linear and quadratic terms, which involves finding the roots of the denominator.    Exercises    Find the Laplace transform of .    Using linearity of the Laplace Transform, we write        Find the Laplace transform of for some constants , , and .           Find the Laplace transform of .           Find the Laplace transform of .           Find the Laplace transform of .           Find the Laplace transform of . Hint: Laplace by definition, then Integrate by parts.           Find the Laplace transform of . Hint: Laplace by definition, then Integrate by parts.           Find the inverse Laplace transform of .    Using Partial fractions, we write  Now taking the inverse Laplace transform, we get        Find the inverse Laplace transform of .           Find the Laplace transform of     Using the definition of the laplace tranform (and the fact that is non-zero only between 0 and 1):        Find the inverse Laplace transform of .     Hint: Use Partial fractions and then take the inverse Laplace. For one of the terms, you will need the property . Inverse Laplace will be given by:        Find the inverse Laplace transform of .    Using partial fractions, we write        Find the inverse Laplace transform of .           Find the inverse Laplace transform of .           Find the Laplace transform of .    First expand using trig. identity and then apply the Laplace transform. This gives the transform:        Find the Laplace transform of . Hint: Several integrations by parts.          "
},
{
  "id": "la-intro",
  "level": "2",
  "url": "laplace_section.html#la-intro",
  "type": "Video",
  "number": "3.1.1",
  "title": "Intro to Laplace Transform.",
  "body": " Intro to Laplace Transform  In this video we introduce the Laplace Transform which takes in functions and outputs a different type of a function. This is going to seem rather strange and unmotivated a bit, because the proof is really in the pudding here that Laplace Transforms are useful for us in how powerful they are to solve differential equations. One benefit is going to happen right away: we will see how to transform very discontinuous things like step functions and the gamma function into more reasonable objects.   "
},
{
  "id": "laplace_section-3-6",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-6",
  "type": "Example",
  "number": "3.1.1",
  "title": "",
  "body": "  Suppose , then The limit (the improper integral) only exists if . So is only defined for .   "
},
{
  "id": "laplace_section-3-7",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-7",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": "  Suppose , then The limit only exists if . So is only defined for .   "
},
{
  "id": "laplace_section-3-8",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-8",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Suppose , then using integration by parts Again, the limit only exists if .   "
},
{
  "id": "laplace_section-3-9",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-9",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "  A common function is the unit step function unit step function , which is sometimes called the Heaviside function Heaviside function The function is named after the English mathematician, engineer, and physicist Oliver Heaviside (1850–1925). Only by coincidence is the function heavy on one side. . This function is generally given as Let us find the Laplace transform of , where is some constant. That is, the function that is 0 for and 1 for . where of course (and as we said before).   "
},
{
  "id": "lt_table",
  "level": "2",
  "url": "laplace_section.html#lt_table",
  "type": "Table",
  "number": "3.1.5",
  "title": "Some Laplace transforms (<span class=\"process-math\">\\(C\\text{,}\\)<\/span> <span class=\"process-math\">\\(\\omega\\text{,}\\)<\/span> and <span class=\"process-math\">\\(a\\)<\/span> are constants).",
  "body": " Some Laplace transforms ( , , and are constants).           "
},
{
  "id": "laplace_section-3-12",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-12",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": "  Verify .   "
},
{
  "id": "la-linear",
  "level": "2",
  "url": "laplace_section.html#la-linear",
  "type": "Video",
  "number": "3.1.2",
  "title": "Linearity, Existence, and Inverses of the Laplace Transform.",
  "body": " Linearity, Existence, and Inverses of the Laplace Transform  The Laplace Transform has a lot properties that mean it behaves nicely. In this video we'll explore three crucial ones: linearity, existence, and inverses.   "
},
{
  "id": "laplace_section-3-15",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-15",
  "type": "Theorem",
  "number": "3.1.1",
  "title": "Linearity of the Laplace transform.",
  "body": " Linearity of the Laplace transform  linearity of the Laplace transform   Suppose that , , and are constants, then and in particular    "
},
{
  "id": "laplace_section-3-16",
  "level": "2",
  "url": "laplace_section.html#laplace_section-3-16",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "",
  "body": "  Verify the theorem. That is, show that .   "
},
{
  "id": "laplace_section-4-3",
  "level": "2",
  "url": "laplace_section.html#laplace_section-4-3",
  "type": "Exercise",
  "number": "3.1.3",
  "title": "",
  "body": "  Use L'Hopital's rule from calculus to show that a polynomial is of exponential order. Hint: Note that a sum of two exponential order functions is also of exponential order. Then show that is of exponential order for any .   "
},
{
  "id": "laplace_section-4-5",
  "level": "2",
  "url": "laplace_section.html#laplace_section-4-5",
  "type": "Theorem",
  "number": "3.1.2",
  "title": "Existence.",
  "body": " Existence   Let be continuous and of exponential order for a certain constant . Then is defined for all .   "
},
{
  "id": "lt_uniqthm",
  "level": "2",
  "url": "laplace_section.html#lt_uniqthm",
  "type": "Theorem",
  "number": "3.1.3",
  "title": "Uniqueness.",
  "body": " Uniqueness   Let and be continuous and of exponential order. Suppose that there exists a constant , such that for all . Then for all .   "
},
{
  "id": "laplace_section-5-4",
  "level": "2",
  "url": "laplace_section.html#laplace_section-5-4",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": "  Take . Find the inverse Laplace transform.  We look at the table to find    "
},
{
  "id": "laplace_section-5-6",
  "level": "2",
  "url": "laplace_section.html#laplace_section-5-6",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": "  Take . Find the inverse Laplace transform.  First we use the method of partial fractions method of partial fractions to write in a form where we can use . We factor the denominator as and write Putting the right-hand side over a common denominator and equating the numerators we get . Expanding and equating coefficients we obtain , , , and thus . In other words, By linearity of the inverse Laplace transform we get    "
},
{
  "id": "laplace_section-5-8",
  "level": "2",
  "url": "laplace_section.html#laplace_section-5-8",
  "type": "Exercise",
  "number": "3.1.4",
  "title": "",
  "body": "  Derive the first shifting property from the definition of the Laplace transform.   "
},
{
  "id": "la-inverse",
  "level": "2",
  "url": "laplace_section.html#la-inverse",
  "type": "Video",
  "number": "3.1.3",
  "title": "Translation  &amp; Inverse Laplace Transforms of Irreducible Factors.",
  "body": " Translation & Inverse Laplace Transforms of Irreducible Factors  We want to widely expand the set of functions we can take the inverse Laplace transform of. We will learn about a very convenient property called Translation aka Shifting, and see specifically what to do with irreducible factors.   TYPO: In the final example the term should also have an exponential out front and be for the same reasons    "
},
{
  "id": "laplace_section-5-11",
  "level": "2",
  "url": "laplace_section.html#laplace_section-5-11",
  "type": "Example",
  "number": "3.1.8",
  "title": "",
  "body": "  Find .  First we complete the square to make the denominator . Next we find Putting it all together with the shifting property, we find    "
},
{
  "id": "la-repeated",
  "level": "2",
  "url": "laplace_section.html#la-repeated",
  "type": "Video",
  "number": "3.1.4",
  "title": "Inverse Laplace Transform with Repeated Factors.",
  "body": " Inverse Laplace Transform with Repeated Factors   showed us how to take an irreducible quadratic factor and use completing the square to write it in a fashion amendable for taking inverse Laplace transforms. In this video we show how to deal with repeated factors.   "
},
{
  "id": "laplace_section-6-2",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-2",
  "type": "Exercise",
  "number": "3.1.5",
  "title": "",
  "body": "  Find the Laplace transform of .    Using linearity of the Laplace Transform, we write     "
},
{
  "id": "laplace_section-6-3",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-3",
  "type": "Exercise",
  "number": "3.1.6",
  "title": "",
  "body": "  Find the Laplace transform of for some constants , , and .        "
},
{
  "id": "laplace_section-6-4",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-4",
  "type": "Exercise",
  "number": "3.1.7",
  "title": "",
  "body": "  Find the Laplace transform of .        "
},
{
  "id": "laplace_section-6-5",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-5",
  "type": "Exercise",
  "number": "3.1.8",
  "title": "",
  "body": "  Find the Laplace transform of .        "
},
{
  "id": "laplace_section-6-6",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-6",
  "type": "Exercise",
  "number": "3.1.9",
  "title": "",
  "body": "  Find the Laplace transform of .        "
},
{
  "id": "laplace_section-6-7",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-7",
  "type": "Exercise",
  "number": "3.1.10",
  "title": "",
  "body": "  Find the Laplace transform of . Hint: Laplace by definition, then Integrate by parts.        "
},
{
  "id": "laplace_section-6-8",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-8",
  "type": "Exercise",
  "number": "3.1.11",
  "title": "",
  "body": "  Find the Laplace transform of . Hint: Laplace by definition, then Integrate by parts.        "
},
{
  "id": "laplace_section-6-9",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-9",
  "type": "Exercise",
  "number": "3.1.12",
  "title": "",
  "body": "  Find the inverse Laplace transform of .    Using Partial fractions, we write  Now taking the inverse Laplace transform, we get     "
},
{
  "id": "laplace_section-6-10",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-10",
  "type": "Exercise",
  "number": "3.1.13",
  "title": "",
  "body": "  Find the inverse Laplace transform of .        "
},
{
  "id": "laplace_section-6-11",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-11",
  "type": "Exercise",
  "number": "3.1.14",
  "title": "",
  "body": "  Find the Laplace transform of     Using the definition of the laplace tranform (and the fact that is non-zero only between 0 and 1):     "
},
{
  "id": "laplace_section-6-12",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-12",
  "type": "Exercise",
  "number": "3.1.15",
  "title": "",
  "body": "  Find the inverse Laplace transform of .     Hint: Use Partial fractions and then take the inverse Laplace. For one of the terms, you will need the property . Inverse Laplace will be given by:     "
},
{
  "id": "laplace_section-6-13",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-13",
  "type": "Exercise",
  "number": "3.1.16",
  "title": "",
  "body": "  Find the inverse Laplace transform of .    Using partial fractions, we write     "
},
{
  "id": "laplace_section-6-14",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-14",
  "type": "Exercise",
  "number": "3.1.17",
  "title": "",
  "body": "  Find the inverse Laplace transform of .        "
},
{
  "id": "laplace_section-6-15",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-15",
  "type": "Exercise",
  "number": "3.1.18",
  "title": "",
  "body": "  Find the inverse Laplace transform of .        "
},
{
  "id": "laplace_section-6-16",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-16",
  "type": "Exercise",
  "number": "3.1.19",
  "title": "",
  "body": "  Find the Laplace transform of .    First expand using trig. identity and then apply the Laplace transform. This gives the transform:     "
},
{
  "id": "laplace_section-6-17",
  "level": "2",
  "url": "laplace_section.html#laplace_section-6-17",
  "type": "Exercise",
  "number": "3.1.20",
  "title": "",
  "body": "  Find the Laplace transform of . Hint: Several integrations by parts.        "
},
{
  "id": "transformsofders_section",
  "level": "1",
  "url": "transformsofders_section.html",
  "type": "Section",
  "number": "3.2",
  "title": "Transforms of derivatives and ODEs",
  "body": " Transforms of derivatives and ODEs     Transforms of derivatives   Transforms of Derivatives and integrals  The Laplace Transform has a lot properties that mean it behaves nicely. In this video we'll explore three crucial ones: linearity, existence, and inverses.   Correction: The Laplace transform of derivatives is missing some negative signs. Correct expressions for the Laplace of the first, second and third derivatives, respectively are: \\[L[f'(t)]=sF(s)−f(0)\\] \\[L[f''(t)]=s2F(s)−sf(0)−f'′(0),\\] \\[L[f'''(t)]=s3F(s)−s2f(0)−sf'(0)−f''(0)\\]    Let us see how the Laplace transform is used for differential equations. First let us try to find the Laplace transform of a function that is a derivative. Suppose is a differentiable function of exponential order, that is, for some and . So exists, and what is more, when . Then We repeat this procedure for higher derivatives. The results are listed in . The procedure also works for piecewise smooth functions, that is functions that are piecewise continuous with a piecewise continuous derivative.   Laplace transforms of derivatives ( as usual).           Verify .      Solving ODEs with the Laplace transform  Notice that the Laplace transform turns differentiation into multiplication by . Let us see how to apply this fact to differential equations.   How to solve ODEs with the Laplace Transform  We finally know enough to go from start to finish. That is, we begin with an ODE. We transform it via the Laplace Transform. We manipulate it over in the world of Laplace Transforms. Then we translate it back to get a solution. Cool!      Take the equation We will take the Laplace transform of both sides. By we will, as usual, denote the Laplace transform of . We plug in the initial conditions now—this makes the computations more streamlined—to obtain We solve for , We use partial fractions (exercise) to write Now take the inverse Laplace transform to obtain     The procedure for linear constant coefficient equations is as follows. We take an ordinary differential equation in the time variable . We apply the Laplace transform to transform the equation into an algebraic (non differential) equation in the frequency domain. All the , , , and so on, will be converted to , , , and so on. We solve the equation for . Then taking the inverse transform, if possible, we find .  It should be noted that since not every function has a Laplace transform, not every equation can be solved in this manner. Also if the equation is not a linear constant coefficient ODE, then by applying the Laplace transform we may not obtain an algebraic equation.   Solving an ODE using Laplace Transforms Example  In this video we put everything together. We start with an IVP we take the Laplace transform of. The solution to the algebraic equation has a partial fraction decomposition with multiple types of factors and we finally take the inverse Laplace Transform to get a solution to the original IVP.      Using the Heaviside function   The Laplace Transform of Piecewise Functions  A major strength of Laplace Transforms is in how it deals with discontinuities whether piecewise defined functions but even more so periodic functions that repeat the same discontinuous pattern over and over. The Laplace Transform converts these into continuous functions that can often be easier to work with    Before we move on to more general equations than those we could solve before, we want to consider the Heaviside function. See for the graph.    Plot of the Heaviside (unit step) function .    This function is useful for putting together functions, or cutting functions off. Most commonly it is used as for some constant . This just shifts the graph to the right by . That is, it is a function that is 0 when and 1 when . Suppose for example that is a signal and you started receiving the signal at time . The function should then be defined as Using the Heaviside function, can be written as Similarly the step function that is 1 on the interval and zero everywhere else can be written as The Heaviside function is useful to define functions defined piecewise. If you want to define such that when is in , when is in , and otherwise, then you can use the expression   Hence it is useful to know how the Heaviside function interacts with the Laplace transform. We have already seen that This can be generalized into a shifting property shifting property or second shifting property second shifting property .     The forcing function in our setup need not be periodic. Consider the mass-spring system where if and zero otherwise. Imagine a rocket attached to the mass is fired for 4 seconds starting at . Or perhaps imagine an RLC circuit, where the voltage is raised at a constant rate for 4 seconds starting at , and then held steady again starting at .  We can write . We transform the equation and we plug in the initial conditions as before to obtain We solve for to obtain We leave it as an exercise to the reader to show that In other words . So using we find Similarly Hence, the solution is The plot of this solution is given in .   Plot of .       Solving an IVP with a piecewise nonhomogeneity  This video is a start to finish walkthrough of the process of going from an IVP, converting via Laplace, dealing with the piecewise part, and then converting back to a solution to the original IVP. This video thus includes many pieces we've been developing so is probably your best check for comprehension yet. Feel free to try and work it out on your own first and skip to the end to check the solution.   TYPO: At about 4:00, in the red, . I wrote the exponential with a t not an s. This typo persists in a few places in the video       Transfer functions  The Laplace transform leads to the following useful concept for studying the steady state behavior of a linear system. Consider an equation of the form where is a linear constant coefficient differential operator. Then is usually thought of as input of the system and is thought of as the output of the system. For example, for a mass-spring system the input is the forcing function and the output is the behavior of the mass. We would like to have a convenient way to study the behavior of the system for different inputs.  Let us suppose that all the initial conditions are zero and take the Laplace transform of the equation, we obtain the equation Solving for the ratio we obtain the so-called transfer function transfer function  , that is, In other words, . We obtain an algebraic dependence of the output of the system based on the input. We can now easily study the steady state behavior of the system given different inputs by simply multiplying by the transfer function.    Given , let us find the transfer function (assuming the initial conditions are zero).  First, we take the Laplace transform of the equation. Now we solve for the transfer function .   Let us see how to use the transfer function. Suppose we have the constant input . Hence , and Taking the inverse Laplace transform of we obtain       Transforms of integrals  A feature of Laplace transforms is that it is also able to easily deal with integral equations. That is, equations in which integrals rather than derivatives of functions appear. The basic property, which can be proved by applying the definition and doing integration by parts, is It is sometimes useful (e.g. for computing the inverse transform) to write this as     To compute we could proceed by applying this integration rule.       An equation containing an integral of the unknown function is called an integral equation integral equation . Consider where we wish to solve for . We apply the Laplace transform and the shifting property to get where . Thus We use the shifting property again       Exercises    Compute the inverse Laplace transform of the function     First we write and figure out the inverse Laplace transform of . Using the property for Laplace transform of integrals, we write: Now we write       Compute the inverse Laplace transform of the function     Using the example from section above, we know that . Using this and the property for Laplace transform of integrals, we write:       Using the Laplace transform solve where , , , and (system is overdamped).    Taking the Laplace transform Solving for  Completing the square and noting that  Noting the shift , we rewrite Now taking the inverse Laplace transform we get       Using the Laplace transform solve where , , , and (system is underdamped).           Using the Laplace transform solve where , , , and (system is critically damped).           Using the Heaviside function write down the piecewise function that is 0 for , for in and for .           Solve for initial conditions and .    Taking the Laplace transform Taking the inverse Laplace transform       Solve for initial conditions and , .           Solve for initial conditions , using the Laplace transform.           Show the second shifting property: .    Using the definition Defining we get Therefore       Let us think of the mass-spring system with a rocket from . We noticed that the solution kept oscillating after the rocket stopped running. The amplitude of the oscillation depends on the time that the rocket was fired (for 4 seconds in the example).    Find a formula for the amplitude of the resulting oscillation in terms of the amount of time the rocket is fired.    Is there a nonzero time (if so what is it?) for which the rocket fires and the resulting oscillation has amplitude 0 (the mass is not moving)?      a) From the example At  Where is the amplitude. Defining as the time the rocket stops firing, and as the duration the rocket fires, we can generalize this result So the amplitude is given by  b) From this is zero when for a positive integer.      Define     Sketch the graph of .    Write down using the Heaviside function.    Solve , , using Laplace transform.      b)  c)       Using the Heaviside function , write down the function            Find the transfer function for (assuming the initial conditions are zero).           Find the transfer function for (assuming the initial conditions are zero).    Taking the Laplace transform The transfer function is       Show the differentiation of the transform property. Suppose , then show Hint: Differentiate under the integral sign.         Find the Laplace transform of (assuming the initial conditions are zero).         Find the Laplace transform of (assuming the initial conditions are zero).         Solve the following initial value problem: with .    Taking the Laplace transform of the given differential equation, we get This becomes . Solving this, we get . Taking the inverse Laplace of this we get .     "
},
{
  "id": "la-der",
  "level": "2",
  "url": "transformsofders_section.html#la-der",
  "type": "Video",
  "number": "3.2.1",
  "title": "Transforms of Derivatives and integrals.",
  "body": " Transforms of Derivatives and integrals  The Laplace Transform has a lot properties that mean it behaves nicely. In this video we'll explore three crucial ones: linearity, existence, and inverses.   Correction: The Laplace transform of derivatives is missing some negative signs. Correct expressions for the Laplace of the first, second and third derivatives, respectively are: \\[L[f'(t)]=sF(s)−f(0)\\] \\[L[f''(t)]=s2F(s)−sf(0)−f'′(0),\\] \\[L[f'''(t)]=s3F(s)−s2f(0)−sf'(0)−f''(0)\\]   "
},
{
  "id": "ltd_table",
  "level": "2",
  "url": "transformsofders_section.html#ltd_table",
  "type": "Table",
  "number": "3.2.1",
  "title": "Laplace transforms of derivatives (<span class=\"process-math\">\\(G(s) = \\mathcal{L} \\bigl\\{ g(t) \\bigr\\}\\)<\/span> as usual).",
  "body": " Laplace transforms of derivatives ( as usual).        "
},
{
  "id": "transformsofders_section-3-5",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-3-5",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "  Verify .   "
},
{
  "id": "la-solve",
  "level": "2",
  "url": "transformsofders_section.html#la-solve",
  "type": "Video",
  "number": "3.2.2",
  "title": "How to solve ODEs with the Laplace Transform.",
  "body": " How to solve ODEs with the Laplace Transform  We finally know enough to go from start to finish. That is, we begin with an ODE. We transform it via the Laplace Transform. We manipulate it over in the world of Laplace Transforms. Then we translate it back to get a solution. Cool!   "
},
{
  "id": "transformsofders_section-4-4",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-4-4",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  Take the equation We will take the Laplace transform of both sides. By we will, as usual, denote the Laplace transform of . We plug in the initial conditions now—this makes the computations more streamlined—to obtain We solve for , We use partial fractions (exercise) to write Now take the inverse Laplace transform to obtain    "
},
{
  "id": "la-odeexample",
  "level": "2",
  "url": "transformsofders_section.html#la-odeexample",
  "type": "Video",
  "number": "3.2.3",
  "title": "Solving an ODE using Laplace Transforms Example.",
  "body": " Solving an ODE using Laplace Transforms Example  In this video we put everything together. We start with an IVP we take the Laplace transform of. The solution to the algebraic equation has a partial fraction decomposition with multiple types of factors and we finally take the inverse Laplace Transform to get a solution to the original IVP.   "
},
{
  "id": "la-piecewise",
  "level": "2",
  "url": "transformsofders_section.html#la-piecewise",
  "type": "Video",
  "number": "3.2.4",
  "title": "The Laplace Transform of Piecewise Functions.",
  "body": " The Laplace Transform of Piecewise Functions  A major strength of Laplace Transforms is in how it deals with discontinuities whether piecewise defined functions but even more so periodic functions that repeat the same discontinuous pattern over and over. The Laplace Transform converts these into continuous functions that can often be easier to work with   "
},
{
  "id": "lt_heavisidefig",
  "level": "2",
  "url": "transformsofders_section.html#lt_heavisidefig",
  "type": "Figure",
  "number": "3.1",
  "title": "",
  "body": " Plot of the Heaviside (unit step) function .   "
},
{
  "id": "lt_rocketex",
  "level": "2",
  "url": "transformsofders_section.html#lt_rocketex",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  The forcing function in our setup need not be periodic. Consider the mass-spring system where if and zero otherwise. Imagine a rocket attached to the mass is fired for 4 seconds starting at . Or perhaps imagine an RLC circuit, where the voltage is raised at a constant rate for 4 seconds starting at , and then held steady again starting at .  We can write . We transform the equation and we plug in the initial conditions as before to obtain We solve for to obtain We leave it as an exercise to the reader to show that In other words . So using we find Similarly Hence, the solution is The plot of this solution is given in .   Plot of .     "
},
{
  "id": "la-piecewise2",
  "level": "2",
  "url": "transformsofders_section.html#la-piecewise2",
  "type": "Video",
  "number": "3.2.5",
  "title": "Solving an IVP with a piecewise nonhomogeneity.",
  "body": " Solving an IVP with a piecewise nonhomogeneity  This video is a start to finish walkthrough of the process of going from an IVP, converting via Laplace, dealing with the piecewise part, and then converting back to a solution to the original IVP. This video thus includes many pieces we've been developing so is probably your best check for comprehension yet. Feel free to try and work it out on your own first and skip to the end to check the solution.   TYPO: At about 4:00, in the red, . I wrote the exponential with a t not an s. This typo persists in a few places in the video    "
},
{
  "id": "transformsofders_section-6-4",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-6-4",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": "  Given , let us find the transfer function (assuming the initial conditions are zero).  First, we take the Laplace transform of the equation. Now we solve for the transfer function .   Let us see how to use the transfer function. Suppose we have the constant input . Hence , and Taking the inverse Laplace transform of we obtain    "
},
{
  "id": "transformsofders_section-7-3",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-7-3",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": "  To compute we could proceed by applying this integration rule.    "
},
{
  "id": "transformsofders_section-7-4",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-7-4",
  "type": "Example",
  "number": "3.2.6",
  "title": "",
  "body": "  An equation containing an integral of the unknown function is called an integral equation integral equation . Consider where we wish to solve for . We apply the Laplace transform and the shifting property to get where . Thus We use the shifting property again    "
},
{
  "id": "transformsofders_section-8-2",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-2",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": "  Compute the inverse Laplace transform of the function     First we write and figure out the inverse Laplace transform of . Using the property for Laplace transform of integrals, we write: Now we write    "
},
{
  "id": "transformsofders_section-8-3",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-3",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": "  Compute the inverse Laplace transform of the function     Using the example from section above, we know that . Using this and the property for Laplace transform of integrals, we write:    "
},
{
  "id": "transformsofders_section-8-4",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-4",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": "  Using the Laplace transform solve where , , , and (system is overdamped).    Taking the Laplace transform Solving for  Completing the square and noting that  Noting the shift , we rewrite Now taking the inverse Laplace transform we get    "
},
{
  "id": "transformsofders_section-8-5",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-5",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": "  Using the Laplace transform solve where , , , and (system is underdamped).        "
},
{
  "id": "transformsofders_section-8-6",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-6",
  "type": "Exercise",
  "number": "3.2.6",
  "title": "",
  "body": "  Using the Laplace transform solve where , , , and (system is critically damped).        "
},
{
  "id": "transformsofders_section-8-7",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-7",
  "type": "Exercise",
  "number": "3.2.7",
  "title": "",
  "body": "  Using the Heaviside function write down the piecewise function that is 0 for , for in and for .        "
},
{
  "id": "transformsofders_section-8-8",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-8",
  "type": "Exercise",
  "number": "3.2.8",
  "title": "",
  "body": "  Solve for initial conditions and .    Taking the Laplace transform Taking the inverse Laplace transform    "
},
{
  "id": "transformsofders_section-8-9",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-9",
  "type": "Exercise",
  "number": "3.2.9",
  "title": "",
  "body": "  Solve for initial conditions and , .        "
},
{
  "id": "transformsofders_section-8-10",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-10",
  "type": "Exercise",
  "number": "3.2.10",
  "title": "",
  "body": "  Solve for initial conditions , using the Laplace transform.        "
},
{
  "id": "transformsofders_section-8-11",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-11",
  "type": "Exercise",
  "number": "3.2.11",
  "title": "",
  "body": "  Show the second shifting property: .    Using the definition Defining we get Therefore    "
},
{
  "id": "transformsofders_section-8-12",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-12",
  "type": "Exercise",
  "number": "3.2.12",
  "title": "",
  "body": "  Let us think of the mass-spring system with a rocket from . We noticed that the solution kept oscillating after the rocket stopped running. The amplitude of the oscillation depends on the time that the rocket was fired (for 4 seconds in the example).    Find a formula for the amplitude of the resulting oscillation in terms of the amount of time the rocket is fired.    Is there a nonzero time (if so what is it?) for which the rocket fires and the resulting oscillation has amplitude 0 (the mass is not moving)?      a) From the example At  Where is the amplitude. Defining as the time the rocket stops firing, and as the duration the rocket fires, we can generalize this result So the amplitude is given by  b) From this is zero when for a positive integer.   "
},
{
  "id": "transformsofders_section-8-13",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-13",
  "type": "Exercise",
  "number": "3.2.13",
  "title": "",
  "body": "  Define     Sketch the graph of .    Write down using the Heaviside function.    Solve , , using Laplace transform.      b)  c)    "
},
{
  "id": "transformsofders_section-8-14",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-14",
  "type": "Exercise",
  "number": "3.2.14",
  "title": "",
  "body": "  Using the Heaviside function , write down the function         "
},
{
  "id": "transformsofders_section-8-15",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-15",
  "type": "Exercise",
  "number": "3.2.15",
  "title": "",
  "body": "  Find the transfer function for (assuming the initial conditions are zero).        "
},
{
  "id": "transformsofders_section-8-16",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-16",
  "type": "Exercise",
  "number": "3.2.16",
  "title": "",
  "body": "  Find the transfer function for (assuming the initial conditions are zero).    Taking the Laplace transform The transfer function is    "
},
{
  "id": "transformsofders_section-8-17",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-17",
  "type": "Exercise",
  "number": "3.2.17",
  "title": "",
  "body": "  Show the differentiation of the transform property. Suppose , then show Hint: Differentiate under the integral sign.      "
},
{
  "id": "transformsofders_section-8-18",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-18",
  "type": "Exercise",
  "number": "3.2.18",
  "title": "",
  "body": "  Find the Laplace transform of (assuming the initial conditions are zero).      "
},
{
  "id": "transformsofders_section-8-19",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-19",
  "type": "Exercise",
  "number": "3.2.19",
  "title": "",
  "body": "  Find the Laplace transform of (assuming the initial conditions are zero).      "
},
{
  "id": "transformsofders_section-8-20",
  "level": "2",
  "url": "transformsofders_section.html#transformsofders_section-8-20",
  "type": "Exercise",
  "number": "3.2.20",
  "title": "",
  "body": "  Solve the following initial value problem: with .    Taking the Laplace transform of the given differential equation, we get This becomes . Solving this, we get . Taking the inverse Laplace of this we get .   "
},
{
  "id": "convolution_section",
  "level": "1",
  "url": "convolution_section.html",
  "type": "Section",
  "number": "3.3",
  "title": "Convolution",
  "body": " Convolution     The convolution   Convolutions  We know two binary operations on functions - pointwise addition and multiplication - that takes two functions and give a third. The convolution f(t)*g(t) is a new operation, and one that is going to play particularly nicely with the Laplace Transform and be particularly nice for computing inverse Laplace transforms of products.    The Laplace transformation of a product is not the product of the transforms. All hope is not lost however. We simply have to use a different type of a product. Take two functions and defined for , and define the convolution convolution For those that have seen convolution before, you may have seen it defined as . This definition agrees with if you define and to be zero for . When discussing the Laplace transform the definition we gave is sufficient. Convolution does occur in many other applications, however, where you may have to use the more general definition with infinities. of and as As you can see, the convolution of two functions of is another function of .    Take and for . Then To solve the integral we did one integration by parts.      Take and for . Then Apply the identity to get The formula holds only for . The functions , , and are undefined for .    Convolution has many properties that make it behave like a product. Let be a constant and , , and be functions. Then The most interesting property for us is the following theorem.    Let and be of exponential order, then     In other words, the Laplace transform of a convolution is the product of the Laplace transforms. The simplest way to use this result is in reverse.    Suppose we have the function of defined by We recognize the two entries of . That is, Therefore, The calculation of the integral involved an integration by parts.      Solving ODEs  The next example demonstrates the full power of the convolution and the Laplace transform. We can give the solution to the forced oscillation problem for any forcing function as a definite integral.    Find the solution to for an arbitrary function .  We first apply the Laplace transform to the equation. Denote the transform of by and the transform of by as usual. We get or in other words We know Therefore, or if we reverse the order     Notice one more feature of this example. We can now see how Laplace transform handles resonance resonance . Suppose that . Then We have computed the convolution of sine and cosine in . Hence Note the in front of the sine. The solution, therefore, grows without bound as gets large, meaning we get resonance.  Similarly, we can solve any constant coefficient equation with an arbitrary forcing function as a definite integral using convolution. A definite integral, rather than a closed form solution, is usually enough for most practical purposes. It is not hard to numerically evaluate a definite integral.    Volterra integral equation  A common integral equation integral equation is the Volterra integral equation Volterra integral equation Named for the Italian mathematician Vito Volterra (1860–1940).  where and are known functions and is an unknown we wish to solve for. To find , we apply the Laplace transform to the equation to obtain where , , and are the Laplace transforms of , , and respectively. We find To find we now need to find the inverse Laplace transform of .    Solve   We apply Laplace transform to obtain or It is not hard to apply to find       Exercises    Let for , and . Compute .         Let for , and for . Compute .           Let for , and . Compute .           Find the solution to for an arbitrary function , where , , , and (the system is overdamped). Write the solution as a definite integral.    Taking the Laplace transform Where we defined . We can now find using the shifting property And finally using convolution       Find the solution to for an arbitrary function , where , , , and (the system is underdamped). Write the solution as a definite integral.           Find the solution to for an arbitrary function , where , , , and (the system is critically damped). Write the solution as a definite integral.           Solve , , using convolution.           Solve , , , using convolution. Write the result as a definite integral.           Find the Laplace transform of:     Using the property of derivatives of the transform and the Convolution property, we write \\[\\mathcal{L}\\left[t\\int_0^t \\cos(t-\\tau) sin(\\tau) d\\tau\\right]=-\\frac{d}{ds}\\mathcal{L}\\left[\\int_0^t \\cos(t-\\tau) sin(\\tau) d\\tau\\right]=-\\frac{d}{ds}\\left[\\mathcal{L}(\\cos t)\\cdot\\mathcal{L}(\\sin t)\\right]\\] \\[=-\\frac{d}{ds}\\left[\\frac{s}{(s^{2}+1)}\\right]=\\frac{3 s^2-1}{\\left(s^2+1\\right)^3}\\]      Find the Laplace transform of:            Write down the solution to , , as a definite integral. Hint: Do not try to compute the Laplace transform of .    Taking the Laplace transform of the equation So using the convolution property       Solve     Taking the Laplace transform of the equation and solving for  Splitting the fraction and completing the square, this gives       Solve            Compute using convolution.    First we re-write: \\[\\mathcal{L}^{-1}\\left[\\frac{s}{(s^{2}+4)^{2}}\\right]=\\frac{1}{2}\\mathcal{L}^{-1}\\left[\\frac{2}{(s^{2}+4)}\\cdot\\frac{s}{(s^{2}+4)}\\right]\\] Now using the Convolution property of the Laplace tranform, we write: \\[\\mathcal{L}^{-1}\\left[\\frac{s}{(s^{2}+4)^{2}}\\right]=\\frac{1}{2}\\sin(2t)\\star\\cos(2t)=\\frac{1}{2}t\\sin t\\cos t\\]      Compute using convolution.           Compute using convolution.          "
},
{
  "id": "la-convolutions",
  "level": "2",
  "url": "convolution_section.html#la-convolutions",
  "type": "Video",
  "number": "3.3.1",
  "title": "Convolutions.",
  "body": " Convolutions  We know two binary operations on functions - pointwise addition and multiplication - that takes two functions and give a third. The convolution f(t)*g(t) is a new operation, and one that is going to play particularly nicely with the Laplace Transform and be particularly nice for computing inverse Laplace transforms of products.   "
},
{
  "id": "convolution_section-3-4",
  "level": "2",
  "url": "convolution_section.html#convolution_section-3-4",
  "type": "Example",
  "number": "3.3.1",
  "title": "",
  "body": "  Take and for . Then To solve the integral we did one integration by parts.   "
},
{
  "id": "ltc_convsincosex",
  "level": "2",
  "url": "convolution_section.html#ltc_convsincosex",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Take and for . Then Apply the identity to get The formula holds only for . The functions , , and are undefined for .   "
},
{
  "id": "convolution_section-3-7",
  "level": "2",
  "url": "convolution_section.html#convolution_section-3-7",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "",
  "body": "  Let and be of exponential order, then    "
},
{
  "id": "convolution_section-3-9",
  "level": "2",
  "url": "convolution_section.html#convolution_section-3-9",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  Suppose we have the function of defined by We recognize the two entries of . That is, Therefore, The calculation of the integral involved an integration by parts.   "
},
{
  "id": "example_undampedforcedbylaplacearbitrhs",
  "level": "2",
  "url": "convolution_section.html#example_undampedforcedbylaplacearbitrhs",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Find the solution to for an arbitrary function .  We first apply the Laplace transform to the equation. Denote the transform of by and the transform of by as usual. We get or in other words We know Therefore, or if we reverse the order    "
},
{
  "id": "convolution_section-5-3",
  "level": "2",
  "url": "convolution_section.html#convolution_section-5-3",
  "type": "Example",
  "number": "3.3.5",
  "title": "",
  "body": "  Solve   We apply Laplace transform to obtain or It is not hard to apply to find    "
},
{
  "id": "convolution_section-6-2",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-2",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": "  Let for , and . Compute .      "
},
{
  "id": "convolution_section-6-3",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-3",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": "  Let for , and for . Compute .        "
},
{
  "id": "convolution_section-6-4",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-4",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": "  Let for , and . Compute .        "
},
{
  "id": "convolution_section-6-5",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-5",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": "  Find the solution to for an arbitrary function , where , , , and (the system is overdamped). Write the solution as a definite integral.    Taking the Laplace transform Where we defined . We can now find using the shifting property And finally using convolution    "
},
{
  "id": "convolution_section-6-6",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-6",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "",
  "body": "  Find the solution to for an arbitrary function , where , , , and (the system is underdamped). Write the solution as a definite integral.        "
},
{
  "id": "convolution_section-6-7",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-7",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": "  Find the solution to for an arbitrary function , where , , , and (the system is critically damped). Write the solution as a definite integral.        "
},
{
  "id": "convolution_section-6-8",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-8",
  "type": "Exercise",
  "number": "3.3.7",
  "title": "",
  "body": "  Solve , , using convolution.        "
},
{
  "id": "convolution_section-6-9",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-9",
  "type": "Exercise",
  "number": "3.3.8",
  "title": "",
  "body": "  Solve , , , using convolution. Write the result as a definite integral.        "
},
{
  "id": "convolution_section-6-10",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-10",
  "type": "Exercise",
  "number": "3.3.9",
  "title": "",
  "body": "  Find the Laplace transform of:     Using the property of derivatives of the transform and the Convolution property, we write \\[\\mathcal{L}\\left[t\\int_0^t \\cos(t-\\tau) sin(\\tau) d\\tau\\right]=-\\frac{d}{ds}\\mathcal{L}\\left[\\int_0^t \\cos(t-\\tau) sin(\\tau) d\\tau\\right]=-\\frac{d}{ds}\\left[\\mathcal{L}(\\cos t)\\cdot\\mathcal{L}(\\sin t)\\right]\\] \\[=-\\frac{d}{ds}\\left[\\frac{s}{(s^{2}+1)}\\right]=\\frac{3 s^2-1}{\\left(s^2+1\\right)^3}\\]   "
},
{
  "id": "convolution_section-6-11",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-11",
  "type": "Exercise",
  "number": "3.3.10",
  "title": "",
  "body": "  Find the Laplace transform of:         "
},
{
  "id": "convolution_section-6-12",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-12",
  "type": "Exercise",
  "number": "3.3.11",
  "title": "",
  "body": "  Write down the solution to , , as a definite integral. Hint: Do not try to compute the Laplace transform of .    Taking the Laplace transform of the equation So using the convolution property    "
},
{
  "id": "convolution_section-6-13",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-13",
  "type": "Exercise",
  "number": "3.3.12",
  "title": "",
  "body": "  Solve     Taking the Laplace transform of the equation and solving for  Splitting the fraction and completing the square, this gives    "
},
{
  "id": "convolution_section-6-14",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-14",
  "type": "Exercise",
  "number": "3.3.13",
  "title": "",
  "body": "  Solve         "
},
{
  "id": "convolution_section-6-15",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-15",
  "type": "Exercise",
  "number": "3.3.14",
  "title": "",
  "body": "  Compute using convolution.    First we re-write: \\[\\mathcal{L}^{-1}\\left[\\frac{s}{(s^{2}+4)^{2}}\\right]=\\frac{1}{2}\\mathcal{L}^{-1}\\left[\\frac{2}{(s^{2}+4)}\\cdot\\frac{s}{(s^{2}+4)}\\right]\\] Now using the Convolution property of the Laplace tranform, we write: \\[\\mathcal{L}^{-1}\\left[\\frac{s}{(s^{2}+4)^{2}}\\right]=\\frac{1}{2}\\sin(2t)\\star\\cos(2t)=\\frac{1}{2}t\\sin t\\cos t\\]   "
},
{
  "id": "convolution_section-6-16",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-16",
  "type": "Exercise",
  "number": "3.3.15",
  "title": "",
  "body": "  Compute using convolution.        "
},
{
  "id": "convolution_section-6-17",
  "level": "2",
  "url": "convolution_section.html#convolution_section-6-17",
  "type": "Exercise",
  "number": "3.3.16",
  "title": "",
  "body": "  Compute using convolution.        "
},
{
  "id": "diracdelta_section",
  "level": "1",
  "url": "diracdelta_section.html",
  "type": "Section",
  "number": "3.4",
  "title": "Dirac delta and impulse response",
  "body": " Dirac delta and impulse response     Rectangular pulse   The Delta Function  This video covers the delta function, which is a sort of infinite spike at one point. It's a bit like hitting a system with a hammer, an impulse at an effectively instantaneous moment of time. We'll study this strange object, in particular computing its Laplace Transform, and thus can now solve systems like a mass on a spring that is hit by a hammer pulse.    Often we study a physical system by putting in a short pulse and then seeing what the system does. The resulting behavior is often called impulse response impulse response , and understanding it tells us how the system responds to any input. Let us see what we mean by a pulse. The simplest kind of a pulse is a simple rectangular pulse defined by See for a graph.   Sample square pulse with , , and .    Notice that where is the unit step function.  Let us take the Laplace transform of a square pulse,   For simplicity, let . It is also convenient to set so that That is, to have the pulse have unit mass. For such a pulse, We want to be very small; we wish to have the pulse be very short and very tall. By letting go to zero we arrive at the concept of the Dirac delta function.    The delta function  The Dirac delta function Dirac delta function delta function Named after the English physicist and mathematician Paul Adrien Maurice Dirac (1902–1984). is not exactly a function; it is sometimes called a generalized function generalized function . We avoid unnecessary details and simply say that it is an object that does not really make sense unless we integrate it. The motivation is that we would like a function  such that for any continuous function we have The formula should hold if we integrate over any interval that contains 0, not just . So is a function with all its mass at the single point . In other words, for any interval  Unfortunately there is no such function in the classical sense. You could informally think that is zero for and somehow infinite at .  A good way to think about is as a limit of short pulses whose integral is . For example, suppose that we have a square pulse as above with , , that is . Compute If is continuous at , then for very small , the function is approximately equal to on the interval . We approximate the integral Hence,   Let us therefore accept as an object that is possible to integrate. We often want to shift to another point, for example . In that case, Note that is the same object as . In other words, the convolution of with is again ,   As we can integrate , we compute its Laplace transform: In particular,     The Laplace transform of would be the Laplace transform of the derivative of the Heaviside function , if the Heaviside function had a derivative. First, To obtain what the Laplace transform of the derivative would be we multiply by , to obtain , which is the Laplace transform of . We see the same thing using integration, So in a certain sense This line of reasoning allows us to talk about derivatives of functions with jump discontinuities. We can think of the derivative of the Heaviside function as being somehow infinite at , which is precisely our intuitive understanding of the delta function.      Let us compute . So far we only computed the inverse transform of proper rational functions in the variable. That is, the numerator was of lower degree than the denominator. Not so with . We can use the delta function to compute, The resulting object is a generalized function and only makes sense when put underneath an integral.      Impulse response  As we said before, in the differential equation , we think of as input, and as the output. We think of the delta function as an impulse, and so to find the response to an impulse, we use the delta function in place of . The solution to is called the impulse response impulse response .    Solve (find the impulse response)   We first apply the Laplace transform to the equation. Denote the transform of by . The inverse Laplace transform produces     Let us notice something about the example above. In , we found that when the input is , the solution to is given by That is, the solution for an arbitrary input is given as convolution with the impulse response . Let us see why. The key is to notice that for functions and , We simply differentiate twice under the integral You should really think of the integral going over rather than over and simply assume that and are continuous and zero for negative . , the details are left as an exercise. If we convolve the entire equation , the left-hand side becomes The right-hand side becomes Therefore is the solution to This procedure works in general for other linear equations . If you determine the impulse response, you also know how to obtain the output for any input by simply convolving the impulse response and the input .    Periodic functions   This section currently is only available in video format    Laplace Transform of Periodic Functions  Periodic Functions are a much broader category than just sin t and cos t, because we can use any function defined on an interval to construct a periodic function on the real line. Thankfully, Laplace Transform is quite effective at dealing with periodic functions.     The Laplace Transform of IVPs with Periodic Delta Functions  Now we turn to solving IVPs that have either a single delta function or periodic delta functions in their forcing terms.   TYPO: The formula is . In several places in the video I drop the negative sign.        Geogebra Activity: Use this Geogebra applet to explore the behaviour of a damped oscillator with a periodic impulse input . Explore how different the behaviour becomes under certain periods or amplitudes. A few examples of interesting behaviours:    Reproduce the response shown in Video 3.4.3.    With some minor modifications, this ODE could describe a pendulum with friction, e.g. a swing. How often do you need to apply a push (the impulse) to maximize the amplitude?    Notice what happens when you set to be very small. What is behaviour similar to?        Three-point beam bending  three-point beam bending  Let us give another quite different example where the delta function turns up: Representing point loads on a steel beam. Consider a beam of length , resting on two simple supports at the ends. Let denote the position on the beam, and let denote the deflection of the beam in the vertical direction. The deflection satisfies the Euler–Bernoulli equation Euler–Bernoulli equation Named for the Swiss mathematicians Jacob Bernoulli (1654–1705), Daniel Bernoulli (1700–1782), the nephew of Jacob, and Leonhard Paul Euler (1707–1783). , where and are constants is the elastic modulus and is the second moment of area. Let us not worry about the details and simply think of these as some given constants. and is the force applied per unit length at position . The situation we are interested in is when the force is applied at a single point as in .   Three-point bending.    In this case the equation becomes where is the point where the mass is applied. The constant is the force applied and the minus sign indicates that the force is downward, that is, in the negative direction. The end points of the beam satisfy the conditions, See for further information about endpoint conditions applied to beams.    Suppose that length of the beam is 2, and for simplicity. Further suppose that the force is applied at . That is, we have the equation and the endpoint conditions are   We could integrate, but using the Laplace transform is even easier. We apply the transform in the variable rather than the variable. Let us again denote the transform of as . We notice that and . Let us call and . We solve for , We take the inverse Laplace transform utilizing the second shifting property to take the inverse of the first term. We still need to apply two of the endpoint conditions. As the conditions are at we can simply replace when taking the derivatives. Therefore, and Hence and solving for using the first equation we obtain . Our solution for the beam deflection is       Exercises    Compute .    Re-writing the given expression as: Applying the inverse transform, we can get       Compute .           Compute .           Solve (find the impulse response) , .    Taking Laplace transform of the given differential equation and using the initial values, we get Applying the inverse Laplace transform, we get       Solve (find the impulse response) , , .           Solve (find the impulse response) , , .           A pulse can come later and can be bigger. Solve , , .    Taking the Laplace transform       Solve (find the impulse response) , , .            (challenging) Solve via integrating 4 times in the variable.    Integrating twice Applying initial conditions we find that and . Integrating twice again Applying the other initial conditions we find that and . Solving for        Suppose that , , , has the solution for . Find (in closed form) the solution to , , for .    Taking the Laplace transform of , we can write that or . We are given that when we take the inverse Laplace, we get implying that . Now, taking the Laplace transform of . This results in . Using the inverse Laplace, we get       Suppose that , , , has the solution for . Find the solution to , , for .           Suppose that and are differentiable functions and suppose that for all . Show that     Consider Where . Taking the Laplace transform Now consider And finally By the uniqueness of the Laplace transform then       Suppose we have a beam of length simply supported at the ends and suppose that force is applied at in the downward direction. Suppose that for simplicity. Find the beam deflection .    The deflection equation is With the boundary conditions and . Taking the Laplace transform and solving for  Where the boundary conditions and were applied, and we defined and Applying the other boundary conditions we find that and . Therefore      "
},
{
  "id": "la-delta",
  "level": "2",
  "url": "diracdelta_section.html#la-delta",
  "type": "Video",
  "number": "3.4.1",
  "title": "The Delta Function.",
  "body": " The Delta Function  This video covers the delta function, which is a sort of infinite spike at one point. It's a bit like hitting a system with a hammer, an impulse at an effectively instantaneous moment of time. We'll study this strange object, in particular computing its Laplace Transform, and thus can now solve systems like a mass on a spring that is hit by a hammer pulse.   "
},
{
  "id": "lt_sqpulse",
  "level": "2",
  "url": "diracdelta_section.html#lt_sqpulse",
  "type": "Figure",
  "number": "3.3",
  "title": "",
  "body": " Sample square pulse with , , and .   "
},
{
  "id": "diracdelta_section-4-6",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-4-6",
  "type": "Remark",
  "number": "3.4.1",
  "title": "",
  "body": "  The Laplace transform of would be the Laplace transform of the derivative of the Heaviside function , if the Heaviside function had a derivative. First, To obtain what the Laplace transform of the derivative would be we multiply by , to obtain , which is the Laplace transform of . We see the same thing using integration, So in a certain sense This line of reasoning allows us to talk about derivatives of functions with jump discontinuities. We can think of the derivative of the Heaviside function as being somehow infinite at , which is precisely our intuitive understanding of the delta function.   "
},
{
  "id": "diracdelta_section-4-7",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-4-7",
  "type": "Example",
  "number": "3.4.1",
  "title": "",
  "body": "  Let us compute . So far we only computed the inverse transform of proper rational functions in the variable. That is, the numerator was of lower degree than the denominator. Not so with . We can use the delta function to compute, The resulting object is a generalized function and only makes sense when put underneath an integral.   "
},
{
  "id": "diracdelta_section-5-3",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-5-3",
  "type": "Example",
  "number": "3.4.2",
  "title": "",
  "body": "  Solve (find the impulse response)   We first apply the Laplace transform to the equation. Denote the transform of by . The inverse Laplace transform produces    "
},
{
  "id": "la-periodic",
  "level": "2",
  "url": "diracdelta_section.html#la-periodic",
  "type": "Video",
  "number": "3.4.2",
  "title": "Laplace Transform of Periodic Functions.",
  "body": " Laplace Transform of Periodic Functions  Periodic Functions are a much broader category than just sin t and cos t, because we can use any function defined on an interval to construct a periodic function on the real line. Thankfully, Laplace Transform is quite effective at dealing with periodic functions.   "
},
{
  "id": "la-periodic2",
  "level": "2",
  "url": "diracdelta_section.html#la-periodic2",
  "type": "Video",
  "number": "3.4.3",
  "title": "The Laplace Transform of IVPs with Periodic Delta Functions.",
  "body": " The Laplace Transform of IVPs with Periodic Delta Functions  Now we turn to solving IVPs that have either a single delta function or periodic delta functions in their forcing terms.   TYPO: The formula is . In several places in the video I drop the negative sign.    "
},
{
  "id": "diracdelta_section-6-5",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-6-5",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": "   Geogebra Activity: Use this Geogebra applet to explore the behaviour of a damped oscillator with a periodic impulse input . Explore how different the behaviour becomes under certain periods or amplitudes. A few examples of interesting behaviours:    Reproduce the response shown in Video 3.4.3.    With some minor modifications, this ODE could describe a pendulum with friction, e.g. a swing. How often do you need to apply a push (the impulse) to maximize the amplitude?    Notice what happens when you set to be very small. What is behaviour similar to?     "
},
{
  "id": "lt_beambendingfig",
  "level": "2",
  "url": "diracdelta_section.html#lt_beambendingfig",
  "type": "Figure",
  "number": "3.4",
  "title": "",
  "body": " Three-point bending.   "
},
{
  "id": "lt_examplebeam",
  "level": "2",
  "url": "diracdelta_section.html#lt_examplebeam",
  "type": "Example",
  "number": "3.4.4",
  "title": "",
  "body": "  Suppose that length of the beam is 2, and for simplicity. Further suppose that the force is applied at . That is, we have the equation and the endpoint conditions are   We could integrate, but using the Laplace transform is even easier. We apply the transform in the variable rather than the variable. Let us again denote the transform of as . We notice that and . Let us call and . We solve for , We take the inverse Laplace transform utilizing the second shifting property to take the inverse of the first term. We still need to apply two of the endpoint conditions. As the conditions are at we can simply replace when taking the derivatives. Therefore, and Hence and solving for using the first equation we obtain . Our solution for the beam deflection is    "
},
{
  "id": "diracdelta_section-8-2",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-2",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": "  Compute .    Re-writing the given expression as: Applying the inverse transform, we can get    "
},
{
  "id": "diracdelta_section-8-3",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-3",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": "  Compute .        "
},
{
  "id": "diracdelta_section-8-4",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-4",
  "type": "Exercise",
  "number": "3.4.3",
  "title": "",
  "body": "  Compute .        "
},
{
  "id": "diracdelta_section-8-5",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-5",
  "type": "Exercise",
  "number": "3.4.4",
  "title": "",
  "body": "  Solve (find the impulse response) , .    Taking Laplace transform of the given differential equation and using the initial values, we get Applying the inverse Laplace transform, we get    "
},
{
  "id": "diracdelta_section-8-6",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-6",
  "type": "Exercise",
  "number": "3.4.5",
  "title": "",
  "body": "  Solve (find the impulse response) , , .        "
},
{
  "id": "diracdelta_section-8-7",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-7",
  "type": "Exercise",
  "number": "3.4.6",
  "title": "",
  "body": "  Solve (find the impulse response) , , .        "
},
{
  "id": "diracdelta_section-8-8",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-8",
  "type": "Exercise",
  "number": "3.4.7",
  "title": "",
  "body": "  A pulse can come later and can be bigger. Solve , , .    Taking the Laplace transform    "
},
{
  "id": "diracdelta_section-8-9",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-9",
  "type": "Exercise",
  "number": "3.4.8",
  "title": "",
  "body": "  Solve (find the impulse response) , , .        "
},
{
  "id": "diracdelta_section-8-10",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-10",
  "type": "Exercise",
  "number": "3.4.9",
  "title": "",
  "body": "   (challenging) Solve via integrating 4 times in the variable.    Integrating twice Applying initial conditions we find that and . Integrating twice again Applying the other initial conditions we find that and . Solving for     "
},
{
  "id": "diracdelta_section-8-11",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-11",
  "type": "Exercise",
  "number": "3.4.10",
  "title": "",
  "body": "  Suppose that , , , has the solution for . Find (in closed form) the solution to , , for .    Taking the Laplace transform of , we can write that or . We are given that when we take the inverse Laplace, we get implying that . Now, taking the Laplace transform of . This results in . Using the inverse Laplace, we get    "
},
{
  "id": "diracdelta_section-8-12",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-12",
  "type": "Exercise",
  "number": "3.4.11",
  "title": "",
  "body": "  Suppose that , , , has the solution for . Find the solution to , , for .        "
},
{
  "id": "diracdelta_section-8-13",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-13",
  "type": "Exercise",
  "number": "3.4.12",
  "title": "",
  "body": "  Suppose that and are differentiable functions and suppose that for all . Show that     Consider Where . Taking the Laplace transform Now consider And finally By the uniqueness of the Laplace transform then    "
},
{
  "id": "diracdelta_section-8-14",
  "level": "2",
  "url": "diracdelta_section.html#diracdelta_section-8-14",
  "type": "Exercise",
  "number": "3.4.13",
  "title": "",
  "body": "  Suppose we have a beam of length simply supported at the ends and suppose that force is applied at in the downward direction. Suppose that for simplicity. Find the beam deflection .    The deflection equation is With the boundary conditions and . Taking the Laplace transform and solving for  Where the boundary conditions and were applied, and we defined and Applying the other boundary conditions we find that and . Therefore    "
},
{
  "id": "laplacepde_section",
  "level": "1",
  "url": "laplacepde_section.html",
  "type": "Section",
  "number": "3.5",
  "title": "Solving PDEs with the Laplace transform",
  "body": " Solving PDEs with the Laplace transform   The Laplace transform comes from the same family of transforms as does the Fourier series There is a corresponding Fourier transform on the real line as well that looks sort of like the Laplace transform. , which we used in to solve partial differential equations (PDEs). It is therefore not surprising that we can also solve PDEs with the Laplace transform.  Given a PDE in two independent variables and , we use the Laplace transform on one of the variables (taking the transform of everything in sight), and derivatives in that variable become multiplications by the transformed variable . The PDE becomes an ODE, which we solve. Afterwards we invert the transform to find a solution to the original problem. It is best to see the procedure on an example.    Consider the first order PDE with side conditions This equation is called the convection equation convection equation or sometimes the transport equation transport equation , and it already made an appearance in , with different conditions. See for a diagram of the setup.   Transport equation on a half line.    A physical setup of this equation is a river of solid goo, as we do not want anything to diffuse. The function is the concentration of some toxic substance It's a river of goo already, we're not hurting the environment much more. . The variable denotes position where is the location of a factory spewing the toxic substance into the river. The toxic substance flows into the river so that at the concentration is always . We wish to see what happens past the factory, that is at . Let be the time, and assume the factory started operations at , so that at the river is just pure goo.  Consider a function of two variables . Let us fix and transform the variable. For convenience, we treat the transformed variable as a parameter, since there are no derivatives in . That is, we write for the transformed function, and treat it as a function of , leaving as a parameter. The transform of a derivative with respect to is just differentiating the transformed function: To transform the derivative in (the variable being transformed), we use the rules from :   In our specific case, , and so . We transform the equation to find This ODE needs an initial condition. The initial condition is the other side condition of the PDE, the one that depends on . Everything is transformed, so we must also transform this condition   We solve the ODE problem , , to find We are not done, we have , but we really want . We transform the variable back to . Let be the Heaviside function. As then In other words, See for a diagram of this solution. The line of slope indicates the wavefront of the toxic substance in the picture as it is leaving the factory. What the equation does is simply move the initial condition to the right at speed .   Wavefront of toxic substance is a line of slope .    Shhh... is not differentiable, it is not even continuous (nobody ever seems to notice). How could we plug something that's not differentiable into the equation? Well, just think of a differentiable function very very close to . Or, if you recognize the derivative of the Heaviside function as the delta function, then all is well too: and So .    Laplace equation is very good with constant coefficient equations. One advantage of Laplace is that it easily handles nonhomogeneous side conditions. Let us try a more complicated example.    Consider   Again, we transform , and we write for the transformed function. As , we find The solution of the transformed equation is Using the second shifting property and linearity of the transform, we obtain the solution     We can also detect when the problem is ill-posed ill-posed in the sense that it has no solution. Let us change the equation to Then the problem has no solution. First, let us see this in the language of . The characteristic curves are . If is the the characteristic coordinate, then we find the equation along the curve, meaning a solution is constant along characteristic curves. But these curves intersect both the -axis and the -axis. For example, the curve intersects at and . The solution is constant along the curve so should equal . But and . See .   Ill-posed problem.    Now consider the transform. The transformed problem is and the solution ought to be Importantly, this Laplace transform does not decay to zero at infinity! That is, since in the region of interest, then It almost looks as if we could use the shifting property, but notice that the shift is in the wrong direction.  Of course, we need not restrict ourselves to first order equations, although the computations become more involved for higher order equations.    Let us use Laplace for the following problem: Really we also impose other conditions on the solution so that for example the Laplace transform exists. For example, we might impose that is bounded for each fixed time .  Transform the equation in the variable to find The general solution to this ODE is First , since otherwise does not decay to zero as .  Now consider the boundary condition. Transform and so . In other words,   If we look up the inverse transform in a table such as the one in (or we spend the afternoon doing calculus), we find or So     Laplace can solve problems where separation of variables fails. Laplace does not mind nonhomogeneity, but it is essentially only useful for constant coefficient equations.    Exercises    Solve       Solve       Solve       For an , solve       Find the corresponding ODE problem for , after transforming the variable Do not solve the problem.      Write down a solution to as an definite integral (convolution).      Use the Laplace transform in to solve Hint: Note that does not go to zero as for positive , and does not go to zero as for negative .      Solve            For a , solve            Find the corresponding ODE problem for , after transforming the variable Do not solve the problem.     .      Use the Laplace transform in to solve Hint: Note that does not go to zero as for positive , and does not go to zero as for negative .          "
},
{
  "id": "laplacepde_section-2-3",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-2-3",
  "type": "Example",
  "number": "3.5.1",
  "title": "",
  "body": "  Consider the first order PDE with side conditions This equation is called the convection equation convection equation or sometimes the transport equation transport equation , and it already made an appearance in , with different conditions. See for a diagram of the setup.   Transport equation on a half line.    A physical setup of this equation is a river of solid goo, as we do not want anything to diffuse. The function is the concentration of some toxic substance It's a river of goo already, we're not hurting the environment much more. . The variable denotes position where is the location of a factory spewing the toxic substance into the river. The toxic substance flows into the river so that at the concentration is always . We wish to see what happens past the factory, that is at . Let be the time, and assume the factory started operations at , so that at the river is just pure goo.  Consider a function of two variables . Let us fix and transform the variable. For convenience, we treat the transformed variable as a parameter, since there are no derivatives in . That is, we write for the transformed function, and treat it as a function of , leaving as a parameter. The transform of a derivative with respect to is just differentiating the transformed function: To transform the derivative in (the variable being transformed), we use the rules from :   In our specific case, , and so . We transform the equation to find This ODE needs an initial condition. The initial condition is the other side condition of the PDE, the one that depends on . Everything is transformed, so we must also transform this condition   We solve the ODE problem , , to find We are not done, we have , but we really want . We transform the variable back to . Let be the Heaviside function. As then In other words, See for a diagram of this solution. The line of slope indicates the wavefront of the toxic substance in the picture as it is leaving the factory. What the equation does is simply move the initial condition to the right at speed .   Wavefront of toxic substance is a line of slope .    Shhh... is not differentiable, it is not even continuous (nobody ever seems to notice). How could we plug something that's not differentiable into the equation? Well, just think of a differentiable function very very close to . Or, if you recognize the derivative of the Heaviside function as the delta function, then all is well too: and So .   "
},
{
  "id": "laplacepde_section-2-5",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-2-5",
  "type": "Example",
  "number": "3.5.2",
  "title": "",
  "body": "  Consider   Again, we transform , and we write for the transformed function. As , we find The solution of the transformed equation is Using the second shifting property and linearity of the transform, we obtain the solution    "
},
{
  "id": "lt_half-infinite-ill-posed",
  "level": "2",
  "url": "laplacepde_section.html#lt_half-infinite-ill-posed",
  "type": "Figure",
  "number": "3.7",
  "title": "",
  "body": " Ill-posed problem.   "
},
{
  "id": "laplacepde_section-2-10",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-2-10",
  "type": "Example",
  "number": "3.5.3",
  "title": "",
  "body": "  Let us use Laplace for the following problem: Really we also impose other conditions on the solution so that for example the Laplace transform exists. For example, we might impose that is bounded for each fixed time .  Transform the equation in the variable to find The general solution to this ODE is First , since otherwise does not decay to zero as .  Now consider the boundary condition. Transform and so . In other words,   If we look up the inverse transform in a table such as the one in (or we spend the afternoon doing calculus), we find or So    "
},
{
  "id": "laplacepde_section-3-2",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-3-2",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": "  Solve    "
},
{
  "id": "laplacepde_section-3-3",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-3-3",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": "  Solve    "
},
{
  "id": "laplacepde_section-3-4",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-3-4",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "",
  "body": "  Solve    "
},
{
  "id": "laplacepde_section-3-5",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-3-5",
  "type": "Exercise",
  "number": "3.5.4",
  "title": "",
  "body": "  For an , solve    "
},
{
  "id": "laplacepde_section-3-6",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-3-6",
  "type": "Exercise",
  "number": "3.5.5",
  "title": "",
  "body": "  Find the corresponding ODE problem for , after transforming the variable Do not solve the problem.   "
},
{
  "id": "laplacepde_section-3-7",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-3-7",
  "type": "Exercise",
  "number": "3.5.6",
  "title": "",
  "body": "  Write down a solution to as an definite integral (convolution).   "
},
{
  "id": "laplacepde_section-3-8",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-3-8",
  "type": "Exercise",
  "number": "3.5.7",
  "title": "",
  "body": "  Use the Laplace transform in to solve Hint: Note that does not go to zero as for positive , and does not go to zero as for negative .   "
},
{
  "id": "laplacepde_section-3-9",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-3-9",
  "type": "Exercise",
  "number": "3.5.101",
  "title": "",
  "body": "  Solve         "
},
{
  "id": "laplacepde_section-3-10",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-3-10",
  "type": "Exercise",
  "number": "3.5.102",
  "title": "",
  "body": "  For a , solve         "
},
{
  "id": "laplacepde_section-3-11",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-3-11",
  "type": "Exercise",
  "number": "3.5.103",
  "title": "",
  "body": "  Find the corresponding ODE problem for , after transforming the variable Do not solve the problem.     .   "
},
{
  "id": "laplacepde_section-3-12",
  "level": "2",
  "url": "laplacepde_section.html#laplacepde_section-3-12",
  "type": "Exercise",
  "number": "3.5.104",
  "title": "",
  "body": "  Use the Laplace transform in to solve Hint: Note that does not go to zero as for positive , and does not go to zero as for negative .        "
},
{
  "id": "powerseries_section",
  "level": "1",
  "url": "powerseries_section.html",
  "type": "Section",
  "number": "4.1",
  "title": "Power series",
  "body": " Power series   Many functions can be written in terms of a power series If we assume that a solution of a differential equation is written as a power series, then perhaps we can use a method reminiscent of undetermined coefficients. That is, we will try to solve for the numbers . Before we can carry out this process, let us review some results and concepts about power series.    Definition  As we said, a power series power series is an expression such as where and are constants. Let denote the so-called partial sum partial sum . If for some , the limit exists, then we say that the series  converges convergence of a power series at . At , the series always converges to . When converges at any other point , we say that is a convergent power series convergent power series , and we write If the series does not converge for any point , we say that the series is divergent divergent power series .    The series is convergent for any . Recall that is the factorial. By convention we define . You may recall that this series converges to .    We say that  converges absolutely converges absolutely absolute convergence at whenever the limit exists. That is, the series is convergent. If converges absolutely at , then it converges at . However, the opposite implication is not true.    The series converges absolutely for all in the interval . It converges at , as converges (conditionally) by the alternating series test. The power series does not converge absolutely at , because does not converge. The series diverges at .      Radius of convergence  If a power series converges absolutely at some , then for all such that (that is, is closer than to ) we have for all . As the numbers sum to some finite limit, summing smaller positive numbers must also have a finite limit. Hence, the series must converge absolutely at .    For a power series , there exists a number (we allow ) called the radius of convergence radius of convergence such that the series converges absolutely on the interval and diverges for and . We write if the series converges for all .     Convergence of a power series.    See . In the radius of convergence is as the series converges everywhere. In the radius of convergence is . We note that is another way of saying that the series is divergent.  A useful test for convergence of a series is the ratio test ratio test for series . Suppose that is a series and the limit exists. Then the series converges absolutely if and diverges if .  We apply this test to the series . Let in the test. Compute Define by Then if the series converges absolutely. If , then the series always converges. If , then the series converges absolutely if , and diverges if . That is, the radius of convergence is .  A similar test is the root test root test for series . Suppose exists. Then converges absolutely if and diverges if . We can use the same calculation as above to find . Let us summarize.   Ratio and root tests for power series   Consider a power series such that exists. If , then the radius of convergence of the series is . Otherwise, the radius of convergence is .      Suppose we have the series First we compute the limit in the ratio test, Therefore the radius of convergence is , and the series converges absolutely on the interval . And we could just as well have used the root test:       Consider Compute the limit for the root test, So the radius of convergence is : the series converges everywhere. The ratio test would also work here.    The root or the ratio test does not always apply. That is the limit of or might not exist. There exist more sophisticated ways of finding the radius of convergence, but those would be beyond the scope of this chapter. The two methods above cover many of the series that arise in practice. Often if the root test applies, so does the ratio test, and vice versa, though the limit might be easier to compute in one way than the other.     Geogebra Activity: Explore Radius of Convergence with this Geogebra applet . Write down a few different series and see if you can deduce the radius of convergence by observing for what range of values is the sum converging towards a single value (the red dots).      Analytic functions  Functions represented by power series are called analytic functions analytic functions . Not every function is analytic, although the majority of the functions you have seen in calculus are.  An analytic function is equal to its Taylor series Taylor series Named after the English mathematician Sir Brook Taylor (1685–1731). near a point . That is, for near we have where denotes the derivative of at the point .  For example, sine is an analytic function and its Taylor series around is given by In we plot and the truncations of the series up to degree 5 and 9. You can see that the approximation is very good for near 0, but gets worse for further away from 0. This is what happens in general. To get a good approximation far away from you need to take more and more terms of the Taylor series.   The sine function and its Taylor approximations around of and degree.      Manipulating power series  One of the main properties of power series that we will use is that we can differentiate them term by term. That is, suppose that is a convergent power series. Then for in the radius of convergence we have Notice that the term corresponding to disappeared as it was constant. The radius of convergence of the differentiated series is the same as that of the original.    Let us show that the exponential solves . First write Now differentiate We reindex reindexing the series the series by simply replacing with . The series does not change, what changes is simply how we write it. After reindexing the series starts at again. That was precisely the power series for that we started with, so we showed that .    Convergent power series can be added and multiplied together, and multiplied by constants using the following rules. First, we can add series by adding term by term, We can multiply by constants, We can also multiply series together, where . The radius of convergence of the sum or the product is at least the minimum of the radii of convergence of the two series involved.    Power series for rational functions  Polynomials are simply finite power series. That is, a polynomial is a power series where the are zero for all large enough. We can always expand a polynomial as a power series about any point by writing the polynomial as a polynomial in . For example, let us write as a power series around : In other words , , , and all other . To do this, we know that for all as the polynomial is of degree 2. We write , we expand, and we solve for , , and . We could have also differentiated at and used the Taylor series formula .  Let us look at rational functions, that is, ratios of polynomials. An important fact is that a series for a function only defines the function on an interval even if the function is defined elsewhere. For example, for we have This series is called the geometric series geometric series . The ratio test tells us that the radius of convergence is . The series diverges for and , even though is defined for all .  We can use the geometric series together with rules for addition and multiplication of power series to expand rational functions around a point, as long as the denominator is not zero at . Note that as for polynomials, we could equivalently use the Taylor series expansion .    Expand as a power series around the origin ( ) and find the radius of convergence.  First, write . Compute where to get , we use the formula for the product of series. We obtain, , , , etc. Therefore The radius of convergence is at least 1. We use the ratio test So the radius of convergence is actually equal to 1.    When the rational function is more complicated, it is also possible to use method of partial fractions. For example, to find the Taylor series for , we write      Geogebra Activity: Use this Geogebra applet to explore how the truncated Taylor series approximates different functions. Note how the approximations improves as you increase , and how the region of best approximation changes as you change . Try some rational functions and see how the series approximation is only valid for a certain range of no matter how large gets.      Analytic functions    Exercises    Is the power series convergent? If so, what is the radius of convergence?    By the ratio test So the series is convergent with a radius of convergence .      Is the power series convergent? If so, what is the radius of convergence?    Yes. Radius of convergence is 1.      Is the power series convergent? If so, what is the radius of convergence?    Yes. Radius of convergence is 0 (only converges if ).      Is the power series convergent? If so, what is the radius of convergence?    Yes. Radius of convergence is .      Is the power series convergent? If so, what is the radius of convergence?    Yes. Radius of convergence is .       (challenging) Is the power series convergent? If so, what is the radius of convergence?    Yes. Radius of convergence is .      Determine the Taylor series for around the point .    The Taylor series at is give by       Determine the Taylor series for around the point , and find the radius of convergence.     . The radius of convergence is 1 (series also converges if x=2).      Determine the Taylor series and its radius of convergence of around .     . The radius of convergence is 1.      Determine the Taylor series and its radius of convergence of around . Hint: You will not be able to use the ratio test.    We can rewrite the expression as To find the radius of convergence So the radius of convergence is 4.      Expand as a power series around .     (note that this gives back the original polynomial).       (challenging) Find the Taylor series for around .           Using the geometric series, expand around . For what does the series converge?     so , which converges for .      Suppose that the ratio test applies to a series . Show, using the ratio test, that the radius of convergence of the differentiated series is the same as that of the original series.    Applying the ratio test to the series Taking the derivative of the series we get Applying the ratio test So the radius of convergence is the same.      Suppose that is an analytic function such that . Find .    Since it's an analytic function, near  At         (challenging) Imagine and are analytic functions such that for all large enough . What can you say about ?     is a polynomial. Hint: Use Taylor series.     "
},
{
  "id": "ps_expex",
  "level": "2",
  "url": "powerseries_section.html#ps_expex",
  "type": "Example",
  "number": "4.1.1",
  "title": "",
  "body": "  The series is convergent for any . Recall that is the factorial. By convention we define . You may recall that this series converges to .   "
},
{
  "id": "ps_1kex",
  "level": "2",
  "url": "powerseries_section.html#ps_1kex",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  The series converges absolutely for all in the interval . It converges at , as converges (conditionally) by the alternating series test. The power series does not converge absolutely at , because does not converge. The series diverges at .   "
},
{
  "id": "powerseries_section-4-3",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-4-3",
  "type": "Theorem",
  "number": "4.1.1",
  "title": "",
  "body": "  For a power series , there exists a number (we allow ) called the radius of convergence radius of convergence such that the series converges absolutely on the interval and diverges for and . We write if the series converges for all .   "
},
{
  "id": "ps_convfig",
  "level": "2",
  "url": "powerseries_section.html#ps_convfig",
  "type": "Figure",
  "number": "4.1",
  "title": "",
  "body": " Convergence of a power series.   "
},
{
  "id": "powerseries_section-4-9",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-4-9",
  "type": "Theorem",
  "number": "4.1.2",
  "title": "Ratio and root tests for power series.",
  "body": " Ratio and root tests for power series   Consider a power series such that exists. If , then the radius of convergence of the series is . Otherwise, the radius of convergence is .   "
},
{
  "id": "powerseries_section-4-10",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-4-10",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  Suppose we have the series First we compute the limit in the ratio test, Therefore the radius of convergence is , and the series converges absolutely on the interval . And we could just as well have used the root test:    "
},
{
  "id": "powerseries_section-4-11",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-4-11",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": "  Consider Compute the limit for the root test, So the radius of convergence is : the series converges everywhere. The ratio test would also work here.   "
},
{
  "id": "powerseries_section-4-13",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-4-13",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": "   Geogebra Activity: Explore Radius of Convergence with this Geogebra applet . Write down a few different series and see if you can deduce the radius of convergence by observing for what range of values is the sum converging towards a single value (the red dots).   "
},
{
  "id": "ps_sin",
  "level": "2",
  "url": "powerseries_section.html#ps_sin",
  "type": "Figure",
  "number": "4.2",
  "title": "",
  "body": " The sine function and its Taylor approximations around of and degree.   "
},
{
  "id": "powerseries_section-6-3",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-6-3",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": "  Let us show that the exponential solves . First write Now differentiate We reindex reindexing the series the series by simply replacing with . The series does not change, what changes is simply how we write it. After reindexing the series starts at again. That was precisely the power series for that we started with, so we showed that .   "
},
{
  "id": "powerseries_section-7-5",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-7-5",
  "type": "Example",
  "number": "4.1.7",
  "title": "",
  "body": "  Expand as a power series around the origin ( ) and find the radius of convergence.  First, write . Compute where to get , we use the formula for the product of series. We obtain, , , , etc. Therefore The radius of convergence is at least 1. We use the ratio test So the radius of convergence is actually equal to 1.   "
},
{
  "id": "powerseries_section-7-7",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-7-7",
  "type": "Example",
  "number": "4.1.8",
  "title": "",
  "body": "   Geogebra Activity: Use this Geogebra applet to explore how the truncated Taylor series approximates different functions. Note how the approximations improves as you increase , and how the region of best approximation changes as you change . Try some rational functions and see how the series approximation is only valid for a certain range of no matter how large gets.   "
},
{
  "id": "powerseries_section-9-2",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-2",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "  Is the power series convergent? If so, what is the radius of convergence?    By the ratio test So the series is convergent with a radius of convergence .   "
},
{
  "id": "powerseries_section-9-3",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-3",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": "  Is the power series convergent? If so, what is the radius of convergence?    Yes. Radius of convergence is 1.   "
},
{
  "id": "powerseries_section-9-4",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-4",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "",
  "body": "  Is the power series convergent? If so, what is the radius of convergence?    Yes. Radius of convergence is 0 (only converges if ).   "
},
{
  "id": "powerseries_section-9-5",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-5",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "",
  "body": "  Is the power series convergent? If so, what is the radius of convergence?    Yes. Radius of convergence is .   "
},
{
  "id": "powerseries_section-9-6",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-6",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "",
  "body": "  Is the power series convergent? If so, what is the radius of convergence?    Yes. Radius of convergence is .   "
},
{
  "id": "powerseries_section-9-7",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-7",
  "type": "Exercise",
  "number": "4.1.6",
  "title": "",
  "body": "   (challenging) Is the power series convergent? If so, what is the radius of convergence?    Yes. Radius of convergence is .   "
},
{
  "id": "powerseries_section-9-8",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-8",
  "type": "Exercise",
  "number": "4.1.7",
  "title": "",
  "body": "  Determine the Taylor series for around the point .    The Taylor series at is give by    "
},
{
  "id": "powerseries_section-9-9",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-9",
  "type": "Exercise",
  "number": "4.1.8",
  "title": "",
  "body": "  Determine the Taylor series for around the point , and find the radius of convergence.     . The radius of convergence is 1 (series also converges if x=2).   "
},
{
  "id": "powerseries_section-9-10",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-10",
  "type": "Exercise",
  "number": "4.1.9",
  "title": "",
  "body": "  Determine the Taylor series and its radius of convergence of around .     . The radius of convergence is 1.   "
},
{
  "id": "powerseries_section-9-11",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-11",
  "type": "Exercise",
  "number": "4.1.10",
  "title": "",
  "body": "  Determine the Taylor series and its radius of convergence of around . Hint: You will not be able to use the ratio test.    We can rewrite the expression as To find the radius of convergence So the radius of convergence is 4.   "
},
{
  "id": "powerseries_section-9-12",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-12",
  "type": "Exercise",
  "number": "4.1.11",
  "title": "",
  "body": "  Expand as a power series around .     (note that this gives back the original polynomial).   "
},
{
  "id": "powerseries_section-9-13",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-13",
  "type": "Exercise",
  "number": "4.1.12",
  "title": "",
  "body": "   (challenging) Find the Taylor series for around .        "
},
{
  "id": "powerseries_section-9-14",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-14",
  "type": "Exercise",
  "number": "4.1.13",
  "title": "",
  "body": "  Using the geometric series, expand around . For what does the series converge?     so , which converges for .   "
},
{
  "id": "powerseries_section-9-15",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-15",
  "type": "Exercise",
  "number": "4.1.14",
  "title": "",
  "body": "  Suppose that the ratio test applies to a series . Show, using the ratio test, that the radius of convergence of the differentiated series is the same as that of the original series.    Applying the ratio test to the series Taking the derivative of the series we get Applying the ratio test So the radius of convergence is the same.   "
},
{
  "id": "powerseries_section-9-16",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-16",
  "type": "Exercise",
  "number": "4.1.15",
  "title": "",
  "body": "  Suppose that is an analytic function such that . Find .    Since it's an analytic function, near  At     "
},
{
  "id": "powerseries_section-9-17",
  "level": "2",
  "url": "powerseries_section.html#powerseries_section-9-17",
  "type": "Exercise",
  "number": "4.1.16",
  "title": "",
  "body": "   (challenging) Imagine and are analytic functions such that for all large enough . What can you say about ?     is a polynomial. Hint: Use Taylor series.   "
},
{
  "id": "seriessols_section",
  "level": "1",
  "url": "seriessols_section.html",
  "type": "Section",
  "number": "4.2",
  "title": "Series solutions of linear second order ODEs",
  "body": " Series solutions of linear second order ODEs    Intro to Series Solutions  In this video we introduce the idea of solving an ODE using a series solution. We will see how to form and solve a recurrence relation and then test for convergence of the resulting series.    Suppose we have a linear second order homogeneous ODE of the form Suppose that , , and are polynomials. We will try a solution of the form and solve for the to try to obtain a solution defined in some interval around .  The point is called an ordinary point ordinary point if . That is, the functions are defined for near . If , then we say is a singular point singular point . Handling singular points is harder than ordinary points and so we now focus only on ordinary points.    Let us start with a very simple example Let us try a power series solution near , which is an ordinary point. Every point is an ordinary point in fact, as the equation is constant coefficient. We already know we should obtain exponentials or the hyperbolic sine and cosine, but let us pretend we do not know this.  We try If we differentiate, the term is a constant and hence disappears. We therefore get We differentiate yet again to obtain (now the term disappears) We reindex the series (replace with ) to obtain Now we plug and into the differential equation As is supposed to be equal to 0, we know that the coefficients of the resulting series must be equal to 0. Therefore, The equation above is called a recurrence relation recurrence relation for the coefficients of the power series. It did not matter what or was. They can be arbitrary. But once we pick and , then all other coefficients are determined by the recurrence relation.  Let us see what the coefficients must be. First, and are arbitrary. Then, So for even , that is , we have and for odd , that is , we have Let us write down the series We recognize the two series as the hyperbolic sine and cosine. Therefore,     Of course, in general we will not be able to recognize the series that appears, since usually there will not be any elementary function that matches it. In that case we will be content with the series.   Example: Airy's Equation  We do a full example of a slightly more complicated example: Airy's Equation      Let us do a more complex example. Consider Airy's equation Airy's equation Named after the English mathematician Sir George Biddell Airy (1801–1892). : near the point . Note that is an ordinary point.  We try We differentiate twice (as above) to obtain We plug into the equation We reindex to make things easier to sum Again is supposed to be 0, so , and We jump in steps of three. First, since we must have , , , , etc. In general, .  The constants and are arbitrary and we obtain For where is a multiple of , that is we notice that For where , we notice In other words, if we write down the series for , it has two parts We define and write the general solution to the equation as . If we plug in into the power series for and , we find and . Similarly, and . Therefore is a solution that satisfies the initial conditions and .   The two solutions and to Airy's equation.      The functions and cannot be written in terms of the elementary functions that you know. See for the plot of the solutions and . These functions have many interesting properties. For example, they are oscillatory for negative (like solutions to ) and for positive they grow without bound (like solutions to ).  Sometimes a solution may turn out to be a polynomial.    Let us find a solution to the so-called Hermite's equation of order Hermite's equation of order Named after the French mathematician Charles Hermite (1822–1901). :   Let us find a solution around the point . We try We differentiate (as above) to obtain   Now we plug into the equation As we have This recurrence relation actually includes (which comes about from ). Again and are arbitrary. Let us separate the even and odd coefficients. We find that   Let us write down the two series, one with the even powers and one with the odd. We then write   We remark that if is a positive even integer, then is a polynomial as all the coefficients in the series beyond a certain degree are zero. If is a positive odd integer, then is a polynomial. For example, if , then      Theory of Series solutions  When do series solutions exist? In this video we develop a bit of the theory. This will be extended quite a bit if you take Math 342 in the future where we will talk about how to deal with singular points. For now, we'll focus on ordinary points.      Exercises  In the following exercises, when asked to solve an equation using power series methods, you should find the first few terms of the series, and if possible find a general formula for the coefficient.    Use power series methods to solve at the point .     Plugging into the ODE We can note that for even : And for odd : So the solution can be written as       Use power series methods to solve at the point .    The solution can be written as , where       Use power series methods to solve at the point . You may compute only terms up to 4th order.    Note: In contrast to Example 4.2.2, we need to expand in powers of .  The solution can be written as , where       Use power series methods to solve at the point .    The solution can be written as , where       Use power series methods to solve at the point .     , , , recurrence relation (for ): , so:        The methods work for other orders than second order. Try the methods of this section to solve the first order system at the point .    Letting , differentiating (and re-indexing) and plugging into the ODE we get This gives and Giving So the solution is      Chebyshev's equation of order  Chebyshev's equation of order       Solve using power series methods at .    For what is there a polynomial solution?      (a) Setting and plugging into the ODE This gives , and the relation Giving So for even  And for odd  So the solution can be written as , where  (b) If is an even integer, the series for terminates, whereas if is an odd integer the series for terminates. Both cases giving a polynomial solution.      Find a polynomial solution to using power series methods.               Use power series methods to solve at the point .    Use the solution to part a) to find a solution for around the point .      (a) Plugging the series solution into the ODE This gives and the relation Giving The solution is then  (b) Let , then the equation becomes At , so we're solving this equation near which is the same as part (a), therefore the solution is        (challenging) Power series methods also work for nonhomogeneous equations.    Use power series methods to solve at the point . Hint: Recall the geometric series.    Now solve for the initial condition , .      a) , and for we have , so   b)       Attempt to solve at using the power series method of this section ( is a singular point). Can you find at least one solution? Can you find more than one solution?    Applying the method of this section directly we obtain for all and so is the only solution we find.     "
},
{
  "id": "seriesintro",
  "level": "2",
  "url": "seriessols_section.html#seriesintro",
  "type": "Video",
  "number": "4.2.1",
  "title": "Intro to Series Solutions.",
  "body": " Intro to Series Solutions  In this video we introduce the idea of solving an ODE using a series solution. We will see how to form and solve a recurrence relation and then test for convergence of the resulting series.   "
},
{
  "id": "seriessols_section-2-4",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-2-4",
  "type": "Example",
  "number": "4.2.1",
  "title": "",
  "body": "  Let us start with a very simple example Let us try a power series solution near , which is an ordinary point. Every point is an ordinary point in fact, as the equation is constant coefficient. We already know we should obtain exponentials or the hyperbolic sine and cosine, but let us pretend we do not know this.  We try If we differentiate, the term is a constant and hence disappears. We therefore get We differentiate yet again to obtain (now the term disappears) We reindex the series (replace with ) to obtain Now we plug and into the differential equation As is supposed to be equal to 0, we know that the coefficients of the resulting series must be equal to 0. Therefore, The equation above is called a recurrence relation recurrence relation for the coefficients of the power series. It did not matter what or was. They can be arbitrary. But once we pick and , then all other coefficients are determined by the recurrence relation.  Let us see what the coefficients must be. First, and are arbitrary. Then, So for even , that is , we have and for odd , that is , we have Let us write down the series We recognize the two series as the hyperbolic sine and cosine. Therefore,    "
},
{
  "id": "seriesAiry",
  "level": "2",
  "url": "seriessols_section.html#seriesAiry",
  "type": "Video",
  "number": "4.2.2",
  "title": "Example: Airy’s Equation.",
  "body": " Example: Airy's Equation  We do a full example of a slightly more complicated example: Airy's Equation   "
},
{
  "id": "seriessols_section-2-7",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-2-7",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Let us do a more complex example. Consider Airy's equation Airy's equation Named after the English mathematician Sir George Biddell Airy (1801–1892). : near the point . Note that is an ordinary point.  We try We differentiate twice (as above) to obtain We plug into the equation We reindex to make things easier to sum Again is supposed to be 0, so , and We jump in steps of three. First, since we must have , , , , etc. In general, .  The constants and are arbitrary and we obtain For where is a multiple of , that is we notice that For where , we notice In other words, if we write down the series for , it has two parts We define and write the general solution to the equation as . If we plug in into the power series for and , we find and . Similarly, and . Therefore is a solution that satisfies the initial conditions and .   The two solutions and to Airy's equation.     "
},
{
  "id": "seriessols_section-2-10",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-2-10",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  Let us find a solution to the so-called Hermite's equation of order Hermite's equation of order Named after the French mathematician Charles Hermite (1822–1901). :   Let us find a solution around the point . We try We differentiate (as above) to obtain   Now we plug into the equation As we have This recurrence relation actually includes (which comes about from ). Again and are arbitrary. Let us separate the even and odd coefficients. We find that   Let us write down the two series, one with the even powers and one with the odd. We then write   We remark that if is a positive even integer, then is a polynomial as all the coefficients in the series beyond a certain degree are zero. If is a positive odd integer, then is a polynomial. For example, if , then    "
},
{
  "id": "seriestheory",
  "level": "2",
  "url": "seriessols_section.html#seriestheory",
  "type": "Video",
  "number": "4.2.3",
  "title": "Theory of Series solutions.",
  "body": " Theory of Series solutions  When do series solutions exist? In this video we develop a bit of the theory. This will be extended quite a bit if you take Math 342 in the future where we will talk about how to deal with singular points. For now, we'll focus on ordinary points.   "
},
{
  "id": "seriessols_section-3-3",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-3-3",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "",
  "body": "  Use power series methods to solve at the point .     Plugging into the ODE We can note that for even : And for odd : So the solution can be written as    "
},
{
  "id": "seriessols_section-3-4",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-3-4",
  "type": "Exercise",
  "number": "4.2.2",
  "title": "",
  "body": "  Use power series methods to solve at the point .    The solution can be written as , where    "
},
{
  "id": "seriessols_section-3-5",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-3-5",
  "type": "Exercise",
  "number": "4.2.3",
  "title": "",
  "body": "  Use power series methods to solve at the point . You may compute only terms up to 4th order.    Note: In contrast to Example 4.2.2, we need to expand in powers of .  The solution can be written as , where    "
},
{
  "id": "seriessols_section-3-6",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-3-6",
  "type": "Exercise",
  "number": "4.2.4",
  "title": "",
  "body": "  Use power series methods to solve at the point .    The solution can be written as , where    "
},
{
  "id": "seriessols_section-3-7",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-3-7",
  "type": "Exercise",
  "number": "4.2.5",
  "title": "",
  "body": "  Use power series methods to solve at the point .     , , , recurrence relation (for ): , so:     "
},
{
  "id": "seriessols_section-3-8",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-3-8",
  "type": "Exercise",
  "number": "4.2.6",
  "title": "",
  "body": "  The methods work for other orders than second order. Try the methods of this section to solve the first order system at the point .    Letting , differentiating (and re-indexing) and plugging into the ODE we get This gives and Giving So the solution is    "
},
{
  "id": "seriessols_section-3-9",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-3-9",
  "type": "Exercise",
  "number": "4.2.7",
  "title": "Chebyshev’s equation of order <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": " Chebyshev's equation of order  Chebyshev's equation of order       Solve using power series methods at .    For what is there a polynomial solution?      (a) Setting and plugging into the ODE This gives , and the relation Giving So for even  And for odd  So the solution can be written as , where  (b) If is an even integer, the series for terminates, whereas if is an odd integer the series for terminates. Both cases giving a polynomial solution.   "
},
{
  "id": "seriessols_section-3-10",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-3-10",
  "type": "Exercise",
  "number": "4.2.8",
  "title": "",
  "body": "  Find a polynomial solution to using power series methods.        "
},
{
  "id": "seriessols_section-3-11",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-3-11",
  "type": "Exercise",
  "number": "4.2.9",
  "title": "",
  "body": "      Use power series methods to solve at the point .    Use the solution to part a) to find a solution for around the point .      (a) Plugging the series solution into the ODE This gives and the relation Giving The solution is then  (b) Let , then the equation becomes At , so we're solving this equation near which is the same as part (a), therefore the solution is    "
},
{
  "id": "seriessols_section-3-12",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-3-12",
  "type": "Exercise",
  "number": "4.2.10",
  "title": "",
  "body": "   (challenging) Power series methods also work for nonhomogeneous equations.    Use power series methods to solve at the point . Hint: Recall the geometric series.    Now solve for the initial condition , .      a) , and for we have , so   b)    "
},
{
  "id": "seriessols_section-3-13",
  "level": "2",
  "url": "seriessols_section.html#seriessols_section-3-13",
  "type": "Exercise",
  "number": "4.2.11",
  "title": "",
  "body": "  Attempt to solve at using the power series method of this section ( is a singular point). Can you find at least one solution? Can you find more than one solution?    Applying the method of this section directly we obtain for all and so is the only solution we find.   "
},
{
  "id": "frobenius_section",
  "level": "1",
  "url": "frobenius_section.html",
  "type": "Section",
  "number": "4.3",
  "title": "Singular points and the method of Frobenius",
  "body": " Singular points and the method of Frobenius   Note: 1 or 1.5 lectures, §8.4 and §8.5 in , §5.4–§5.7 in  While behavior of ODEs at singular points is more complicated, certain singular points are not especially difficult to solve. Let us look at some examples before giving a general method. We may be lucky and obtain a power series solution using the method of the previous section, but in general we may have to try other things.    Examples    Let us first look at a simple first order equation Note that is a singular point. If we try to plug in we obtain First, . Next, the only way to solve for is for for all . Therefore, in this manner we only get the trivial solution . We need a nonzero solution to get the general solution to the equation.  Let us try for some real number . Consequently our solution—if we can find one—may only make sense for positive . Then . So Therefore , or in other words . Multiplying by a constant, the general solution for positive is If , then the derivative of the solution blows up at (the singular point). There is only one solution that is differentiable at and that's the trivial solution .    Not every problem with a singular point has a solution of the form , of course. But perhaps we can combine the methods. What we will do is to try a solution of the form where is an analytic function.    Consider the equation and again note that is a singular point.  Let us try where is a real number, not necessarily an integer. Again if such a solution exists, it may only exist for positive . First let us find the derivatives Plugging into our equation we obtain To have a solution we must first have . Supposing that we obtain This equation is called the indicial equation indicial equation . This particular indicial equation has a double root at .  OK, so we know what has to be. That knowledge we obtained simply by looking at the coefficient of . All other coefficients of also have to be zero so If we plug in and solve for , we get Let us set . Then Extrapolating, we notice that In other words, That was lucky! In general, we will not be able to write the series in terms of elementary functions.  We have one solution, let us call it . But what about a second solution? If we want a general solution, we need two linearly independent solutions. Picking to be a different constant only gets us a constant multiple of , and we do not have any other to try; we only have one solution to the indicial equation. Well, there are powers of floating around and we are taking derivatives, perhaps the logarithm (the antiderivative of ) is around as well. It turns out we want to try for another solution of the form which in our case is We now differentiate this equation, substitute into the differential equation and solve for . A long computation ensues and we obtain some recursion relation for . The reader can (and should) try this to obtain for example the first three terms We then fix and obtain a solution . Then we write the general solution as .      The method of Frobenius  Before giving the general method, let us clarify when the method applies. Let be an ODE. As before, if , then is a singular point. If, furthermore, the limits both exist and are finite, then we say that is a regular singular point regular singular point .    Often, and for the rest of this section, . Consider Write So is a regular singular point.  On the other hand if we make the slight change then Here DNE stands for does not exist . The point is a singular point, but not a regular singular point.    Let us now discuss the general Method of Frobenius Method of Frobenius Frobenius method Named after the German mathematician Ferdinand Georg Frobenius (1849–1917). . We only consider the method at the point for simplicity. The main idea is the following theorem.   Method of Frobenius   Suppose that has a regular singular point at , then there exists at least one solution of the form A solution of this form is called a Frobenius-type solution Frobenius-type solution .    The method usually breaks down like this:    We seek a Frobenius-type solution of the form We plug this into equation . We collect terms and write everything as a single series.    The obtained series must be zero. Setting the first coefficient (usually the coefficient of ) in the series to zero we obtain the indicial equation , which is a quadratic polynomial in .    If the indicial equation has two real roots and such that is not an integer, then we have two linearly independent Frobenius-type solutions. Using the first root, we plug in and we solve for all to obtain the first solution. Then using the second root, we plug in and solve for all to obtain the second solution.    If the indicial equation has a doubled root , then there we find one solution and then we obtain a new solution by plugging into equation and solving for the constants .    If the indicial equation has two real roots such that is an integer, then one solution is and the second linearly independent solution is of the form where we plug into and solve for the constants and .    Finally, if the indicial equation has complex roots, then solving for in the solution results in a complex-valued function—all the are complex numbers. We obtain our two linearly independent solutions See Joseph L. Neuringera, The Frobenius method for complex roots of the indicial equation , International Journal of Mathematical Education in Science and Technology, Volume 9, Issue 1, 1978, 71–77. by taking the real and imaginary parts of .    The main idea is to find at least one Frobenius-type solution. If we are lucky and find two, we are done. If we only get one, we either use the ideas above or even a different method such as reduction of order (see ) to obtain a second solution.    Bessel functions  An important class of functions that arises commonly in physics are the Bessel functions Named after the German astronomer and mathematician Friedrich Wilhelm Bessel (1784–1846). . For example, these functions appear when solving the wave equation in two and three dimensions. First consider Bessel's equation Bessel's equation of order : We allow to be any number, not just an integer, although integers and multiples of are most important in applications.  When we plug into Bessel's equation of order , we obtain the indicial equation Therefore we obtain two roots and . If is not an integer, then following the method of Frobenius and setting , we obtain linearly independent solutions of the form         Verify that the indicial equation of Bessel's equation of order is .    Suppose is not an integer. Carry out the computation to obtain the solutions and above.      Bessel functions are convenient constant multiples of and . First we must define the gamma function  Notice that . The gamma function also has a wonderful property From this property, it follows that when is an integer. So the gamma function is a continuous version of the factorial. We compute:     Verify the identities above using .    We define the Bessel functions of the first kind Bessel function of the first kind of order and as As these are constant multiples of the solutions we found above, these are both solutions to Bessel's equation of order . The constants are picked for convenience.  When is not an integer, and are linearly independent. When is an integer we obtain In this case and so is not a second linearly independent solution. The other solution is the so-called Bessel function of second kind Bessel function of second kind . These make sense only for integer orders and are defined as limits of linear combinations of and , as approaches in the following way: Each linear combination of and is a solution to Bessel's equation of order . Then as we take the limit as goes to , we see that is a solution to Bessel's equation of order . It also turns out that and are linearly independent. Therefore when is an integer, we have the general solution to Bessel's equation of order : for arbitrary constants and . Note that goes to negative infinity at . Many mathematical software packages have these functions and defined, so they can be used just like say and . In fact, Bessel functions have some similar properties. For example, is a derivative of , and in general the derivative of can be written as a linear combination of and . Furthermore, these functions oscillate, although they are not periodic. See for graphs of Bessel functions.   Plot of the and in the first graph and and in the second graph.      Other equations can sometimes be solved in terms of the Bessel functions. For example, given a positive constant , can be changed to . Then changing variables , we obtain via chain rule the equation in and : which we recognize as Bessel's equation of order 0. Therefore the general solution is , or in terms of : This equation comes up, for example, when finding the fundamental modes of vibration of a circular drum, but we digress.      Exercises    Find a particular (Frobenius-type) solution of .      Find a particular (Frobenius-type) solution of .      Find a particular (Frobenius-type) solution of .      Find the general solution of .      Find the general solution of .      In the following equations classify the point as ordinary , regular singular , or singular but not regular singular .                                 In the following equations classify the point as ordinary , regular singular , or singular but not regular singular .                               a) ordinary, b) singular but not regular singular, c) regular singular, d) regular singular, e) ordinary.      Find the general solution of .           Find a particular solution of .     (Note that for convenience we did not pick .)       (tricky) Find the general solution of .          "
},
{
  "id": "frobenius_section-3-2",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-3-2",
  "type": "Example",
  "number": "4.3.1",
  "title": "",
  "body": "  Let us first look at a simple first order equation Note that is a singular point. If we try to plug in we obtain First, . Next, the only way to solve for is for for all . Therefore, in this manner we only get the trivial solution . We need a nonzero solution to get the general solution to the equation.  Let us try for some real number . Consequently our solution—if we can find one—may only make sense for positive . Then . So Therefore , or in other words . Multiplying by a constant, the general solution for positive is If , then the derivative of the solution blows up at (the singular point). There is only one solution that is differentiable at and that's the trivial solution .   "
},
{
  "id": "frobenius_section-3-4",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-3-4",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "  Consider the equation and again note that is a singular point.  Let us try where is a real number, not necessarily an integer. Again if such a solution exists, it may only exist for positive . First let us find the derivatives Plugging into our equation we obtain To have a solution we must first have . Supposing that we obtain This equation is called the indicial equation indicial equation . This particular indicial equation has a double root at .  OK, so we know what has to be. That knowledge we obtained simply by looking at the coefficient of . All other coefficients of also have to be zero so If we plug in and solve for , we get Let us set . Then Extrapolating, we notice that In other words, That was lucky! In general, we will not be able to write the series in terms of elementary functions.  We have one solution, let us call it . But what about a second solution? If we want a general solution, we need two linearly independent solutions. Picking to be a different constant only gets us a constant multiple of , and we do not have any other to try; we only have one solution to the indicial equation. Well, there are powers of floating around and we are taking derivatives, perhaps the logarithm (the antiderivative of ) is around as well. It turns out we want to try for another solution of the form which in our case is We now differentiate this equation, substitute into the differential equation and solve for . A long computation ensues and we obtain some recursion relation for . The reader can (and should) try this to obtain for example the first three terms We then fix and obtain a solution . Then we write the general solution as .   "
},
{
  "id": "frobenius_section-4-3",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-4-3",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": "  Often, and for the rest of this section, . Consider Write So is a regular singular point.  On the other hand if we make the slight change then Here DNE stands for does not exist . The point is a singular point, but not a regular singular point.   "
},
{
  "id": "frobenius_section-4-5",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-4-5",
  "type": "Theorem",
  "number": "4.3.1",
  "title": "Method of Frobenius.",
  "body": " Method of Frobenius   Suppose that has a regular singular point at , then there exists at least one solution of the form A solution of this form is called a Frobenius-type solution Frobenius-type solution .   "
},
{
  "id": "bessel_subsection-4",
  "level": "2",
  "url": "frobenius_section.html#bessel_subsection-4",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "",
  "body": "      Verify that the indicial equation of Bessel's equation of order is .    Suppose is not an integer. Carry out the computation to obtain the solutions and above.     "
},
{
  "id": "bessel_subsection-6",
  "level": "2",
  "url": "frobenius_section.html#bessel_subsection-6",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": "  Verify the identities above using .   "
},
{
  "id": "bessel_graphsfig",
  "level": "2",
  "url": "frobenius_section.html#bessel_graphsfig",
  "type": "Figure",
  "number": "4.4",
  "title": "",
  "body": " Plot of the and in the first graph and and in the second graph.   "
},
{
  "id": "bessel_subsection-10",
  "level": "2",
  "url": "frobenius_section.html#bessel_subsection-10",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Other equations can sometimes be solved in terms of the Bessel functions. For example, given a positive constant , can be changed to . Then changing variables , we obtain via chain rule the equation in and : which we recognize as Bessel's equation of order 0. Therefore the general solution is , or in terms of : This equation comes up, for example, when finding the fundamental modes of vibration of a circular drum, but we digress.   "
},
{
  "id": "frobenius_section-6-2",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-2",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "",
  "body": "  Find a particular (Frobenius-type) solution of .   "
},
{
  "id": "frobenius_section-6-3",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-3",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "",
  "body": "  Find a particular (Frobenius-type) solution of .   "
},
{
  "id": "frobenius_section-6-4",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-4",
  "type": "Exercise",
  "number": "4.3.5",
  "title": "",
  "body": "  Find a particular (Frobenius-type) solution of .   "
},
{
  "id": "frobenius_section-6-5",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-5",
  "type": "Exercise",
  "number": "4.3.6",
  "title": "",
  "body": "  Find the general solution of .   "
},
{
  "id": "frobenius_section-6-6",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-6",
  "type": "Exercise",
  "number": "4.3.7",
  "title": "",
  "body": "  Find the general solution of .   "
},
{
  "id": "frobenius_section-6-7",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-7",
  "type": "Exercise",
  "number": "4.3.8",
  "title": "",
  "body": "  In the following equations classify the point as ordinary , regular singular , or singular but not regular singular .                              "
},
{
  "id": "frobenius_section-6-8",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-8",
  "type": "Exercise",
  "number": "4.3.101",
  "title": "",
  "body": "  In the following equations classify the point as ordinary , regular singular , or singular but not regular singular .                               a) ordinary, b) singular but not regular singular, c) regular singular, d) regular singular, e) ordinary.   "
},
{
  "id": "frobenius_section-6-9",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-9",
  "type": "Exercise",
  "number": "4.3.102",
  "title": "",
  "body": "  Find the general solution of .        "
},
{
  "id": "frobenius_section-6-10",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-10",
  "type": "Exercise",
  "number": "4.3.103",
  "title": "",
  "body": "  Find a particular solution of .     (Note that for convenience we did not pick .)   "
},
{
  "id": "frobenius_section-6-11",
  "level": "2",
  "url": "frobenius_section.html#frobenius_section-6-11",
  "type": "Exercise",
  "number": "4.3.104",
  "title": "",
  "body": "   (tricky) Find the general solution of .        "
},
{
  "id": "bvp_section",
  "level": "1",
  "url": "bvp_section.html",
  "type": "Section",
  "number": "5.1",
  "title": "Boundary value problems",
  "body": " Boundary value problems     Boundary value problems  Before we tackle the Fourier series, we study the so-called boundary value problems boundary value problem (or endpoint problems endpoint problem ). Consider for some constant , where is defined for in the interval . Previously we specified the value of the solution and its derivative at a single point. Now we specify the value of the solution at two different points. As is a solution, existence of solutions is not a problem. Uniqueness of solutions is another issue. The general solution to has two arbitrary constants See or and . . It is, therefore, natural (but wrong) to believe that requiring two conditions guarantees a unique solution.    Take , , . That is, Then is another solution (besides ) satisfying both boundary conditions. There are more. Write down the general solution of the differential equation, which is . The condition forces . Letting does not give us any more information as already satisfies both boundary conditions. Hence, there are infinitely many solutions of the form , where is an arbitrary constant.      On the other hand, consider . That is, Then the general solution is . Letting still forces . We apply the second condition to find . As we obtain . Therefore is the unique solution to this problem.    What is going on? We will be interested in finding which constants allow a nonzero solution, and we will be interested in finding those solutions. This problem is an analogue of finding eigenvalues and eigenvectors of matrices.    Eigenvalue problems  For basic Fourier series theory we will need the following three eigenvalue problems. We will consider more general equations and boundary conditions, but we will postpone this until .  and A number is called an eigenvalue eigenvalue of a boundary value problem of (resp. or ) if and only if there exists a nonzero (not identically zero) solution to (resp. or ) given that specific . A nonzero solution is called a corresponding eigenfunction eigenfunction corresponding eigenfunction .  Note the similarity to eigenvalues and eigenvectors of matrices. The similarity is not just coincidental. If we think of the equations as differential operators, then we are doing the same exact thing. Think of a function as a vector with infinitely many components (one for each ). Let be the linear operator. Then the eigenvalue\/eigenfunction pair should be and nonzero such that . In other words, we are looking for nonzero functions satisfying certain endpoint conditions that solve . A lot of the formalism from linear algebra still applies here, though we will not pursue this line of reasoning too far.    Let us find the eigenvalues and eigenfunctions of   We have to handle the cases , , separately. First suppose that . Then the general solution to is The condition implies immediately . Next If is zero, then is not a nonzero solution. So to get a nonzero solution we must have that . Hence, must be an integer multiple of . In other words, for a positive integer . Hence the positive eigenvalues are for all integers . Corresponding eigenfunctions can be taken as . Just like for eigenvectors, constant multiples of an eigenfunction are also eigenfunctions, so we only need to pick one.  Now suppose that . In this case the equation is , and its general solution is . The condition implies that , and implies that . This means that is not an eigenvalue.  Finally, suppose that . In this case we have the general solution Recall that and . As an exercise try the computation with the general solution written as (for different and of course).  Letting implies that (recall and ). So our solution must be and satisfy . This is only possible if is zero. Why? Because is only zero when . You should plot sinh to see this fact. We can also see this from the definition of sinh. We get . Hence , which implies and that is only true if . So there are no negative eigenvalues.  In summary, the eigenvalues and corresponding eigenfunctions are       Let us compute the eigenvalues and eigenfunctions of   Again we have to handle the cases , , separately. First suppose that . The general solution to is . So The condition implies immediately . Next Again cannot be zero if is to be an eigenvalue, and is only zero if for a positive integer . Hence the positive eigenvalues are again for all integers . And the corresponding eigenfunctions can be taken as .  Now suppose that . In this case the equation is and the general solution is so . The condition implies that . The condition also implies . Hence could be anything (let us take it to be 1). So is an eigenvalue and is a corresponding eigenfunction.  Finally, let . In this case the general solution is and We have already seen (with roles of and switched) that for this expression to be zero at and , we must have . Hence there are no negative eigenvalues.  In summary, the eigenvalues and corresponding eigenfunctions are and there is another eigenvalue     The following problem is the one that leads to the general Fourier series.    Let us compute the eigenvalues and eigenfunctions of We have not specified the values or the derivatives at the endpoints, but rather that they are the same at the beginning and at the end of the interval.  Let us skip . The computations are the same as before, and again we find that there are no negative eigenvalues.  For , the general solution is . The condition implies that ( implies ). The second condition says nothing about and hence is an eigenvalue with a corresponding eigenfunction .  For we get that . Now We remember that and . Therefore, Hence either or . Similarly (exercise) if we differentiate and plug in the second condition we find that or . Therefore, unless we want and to both be zero (which we do not) we must have . Hence, is an integer and the eigenvalues are yet again for an integer . In this case, however, is an eigenfunction for any and any . So we have two linearly independent eigenfunctions and . Remember that for a matrix we can also have two eigenvectors corresponding to a single eigenvalue if the eigenvalue is repeated.  In summary, the eigenvalues and corresponding eigenfunctions are       Orthogonality of eigenfunctions  Something that will be very useful in the next section is the orthogonality orthogonality property of the eigenfunctions. This is an analogue of the following fact about eigenvectors of a matrix. A matrix is called symmetric symmetric matrix if (it is equal to its transpose). Eigenvectors for two distinct eigenvalues of a symmetric matrix are orthogonal. The differential operators we are dealing with act much like a symmetric matrix. We, therefore, get the following theorem.    Suppose that and are two eigenfunctions of the problem , or for two different eigenvalues and . Then they are orthogonal orthogonal functions in the sense that     The terminology comes from the fact that the integral is a type of inner product. We will expand on this in the next section. The theorem has a very short, elegant, and illuminating proof so let us give it here. First, we have the following two equations. Multiply the first by and the second by and subtract to get Now integrate both sides of the equation: The last equality holds because of the boundary conditions. For example, if we consider we have and so is zero at both and . As , the theorem follows.  Verify: finish the proof of the theorem (check the last equality in the proof) for the cases and .  The function is an eigenfunction for the problem , , . Hence for positive integers and we have the integrals Similarly, And finally we also get  and     Fredholm alternative  We now touch on a very useful theorem in the theory of differential equations. The theorem holds in a more general setting than we are going to state it, but for our purposes the following statement is sufficient. We will give a slightly more general version in .   Fredholm alternative  Fredholm alternative simple case    Named after the Swedish mathematician Erik Ivar Fredholm (1866–1927). Exactly one of the following statements holds. Either has a nonzero solution, or has a unique solution for every function continuous on .    The theorem is also true for the other types of boundary conditions we considered. The theorem means that if is not an eigenvalue, the nonhomogeneous equation has a unique solution for every right-hand side. On the other hand if is an eigenvalue, then need not have a solution for every , and furthermore, even if it happens to have a solution, the solution is not unique.  We also want to reinforce the idea here that linear differential operators have much in common with matrices. So it is no surprise that there is a finite-dimensional version of Fredholm alternative for matrices as well. Let be an matrix. The Fredholm alternative then states that either has a nontrivial solution, or has a unique solution for every .  A lot of intuition from linear algebra can be applied to linear differential operators, but one must be careful of course. For example, one difference we have already seen is that in general a differential operator will have infinitely many eigenvalues, while a matrix has only finitely many.    Application  Let us consider a physical application of an endpoint problem. Suppose we have a tightly stretched quickly spinning elastic string or rope of uniform linear density , for example in . Let us put this problem into the -plane and both and are in meters. The -axis represents the position on the string. The string rotates at angular velocity , in . Imagine that the whole -plane rotates at angular velocity . This way, the string stays in this -plane and measures its deflection from the equilibrium position, , on the -axis. Hence the graph of gives the shape of the string. We consider an ideal string with no volume, just a mathematical curve. We suppose the tension on the string is a constant in Newtons. Assuming that the deflection is small, we can use Newton's second law (let us skip the derivation) to get the equation To check the units notice that the units of are , as the derivative is in terms of .  Let be the length of the string (in meters) and the string is fixed at the beginning and end points. Hence, and . See .   Whirling string.    We rewrite the equation as . The setup is similar to , except for the interval length being instead of . We are looking for eigenvalues of where . As before there are no nonpositive eigenvalues. With , the general solution to the equation is . The condition implies that as before. The condition implies that and hence for some integer , so   What does this say about the shape of the string? It says that for all parameters , , not satisfying the equation above, the string is in the equilibrium position, . When , then the string will pop out some distance . We cannot compute with the information we have.  Let us assume that and are fixed and we are changing . For most values of the string is in the equilibrium state. When the angular velocity hits a value , then the string pops out and has the shape of a sin wave crossing the -axis times between the end points. For example, at , the string does not cross the -axis and the shape looks like in . On the other hand, when the string crosses the -axis 2 times, see . When changes again, the string returns to the equilibrium position. The higher the angular velocity, the more times it crosses the -axis when it is popped out.   Whirling string at the third eigenvalue ( ).    For another example, if you have a spinning jump rope (then as it is completely popped out ) and you pull on the ends to increase the tension, then the velocity also increases for the rope to stay popped out .    Exercises    Suppose and , . Find all for which there is more than one solution. Also find the corresponding solutions (only for the eigenvalues).    Solving , the general solution will depend on whether , , or . Considering the case , we get two complex roots to the auxiliary equation and hence the general solution will be . Applying the given boundary conditions, we get for    (for any ). Also, is the only case for which we get more than one solution.      Suppose and , . Find all the solution(s) if any exist.           Consider and , . Why does it not have any eigenvalues? Why does any first order equation with two endpoint conditions such as above have no eigenvalues?    General solution is . Since then , and so . Therefore, the solution is always identically zero. One condition is always enough to guarantee a unique solution for a first order equation.      Solve the second order eigenvalue problem and , .         The following exercises won't be covered in Math 204.    Compute all eigenvalues and eigenfunctions of (assume ).      Compute all eigenvalues and eigenfunctions of (assume ).      Compute all eigenvalues and eigenfunctions of (assume ).      Compute all eigenvalues and eigenfunctions of (assume ).      We skipped the case of for the boundary value problem . Finish the calculation and show that there are no negative eigenvalues.      Consider a spinning string of length 2 and linear density 0.1 and tension 3. Find smallest angular velocity when the string pops out.           Suppose and , . Find all the solution(s) if any exist.           Consider and , . Why does it not have any eigenvalues? Why does any first order equation with two endpoint conditions such as above have no eigenvalues?    General solution is . Since then , and so . Therefore, the solution is always identically zero. One condition is always enough to guarantee a unique solution for a first order equation.       (challenging) Suppose and , , . Suppose that . Find an equation that all such eigenvalues must satisfy. Hint: Note that is a root of .          "
},
{
  "id": "bvp_section-3-3",
  "level": "2",
  "url": "bvp_section.html#bvp_section-3-3",
  "type": "Example",
  "number": "5.1.1",
  "title": "",
  "body": "  Take , , . That is, Then is another solution (besides ) satisfying both boundary conditions. There are more. Write down the general solution of the differential equation, which is . The condition forces . Letting does not give us any more information as already satisfies both boundary conditions. Hence, there are infinitely many solutions of the form , where is an arbitrary constant.   "
},
{
  "id": "bvp_section-3-4",
  "level": "2",
  "url": "bvp_section.html#bvp_section-3-4",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "  On the other hand, consider . That is, Then the general solution is . Letting still forces . We apply the second condition to find . As we obtain . Therefore is the unique solution to this problem.   "
},
{
  "id": "bvp_eig1ex",
  "level": "2",
  "url": "bvp_section.html#bvp_eig1ex",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "  Let us find the eigenvalues and eigenfunctions of   We have to handle the cases , , separately. First suppose that . Then the general solution to is The condition implies immediately . Next If is zero, then is not a nonzero solution. So to get a nonzero solution we must have that . Hence, must be an integer multiple of . In other words, for a positive integer . Hence the positive eigenvalues are for all integers . Corresponding eigenfunctions can be taken as . Just like for eigenvectors, constant multiples of an eigenfunction are also eigenfunctions, so we only need to pick one.  Now suppose that . In this case the equation is , and its general solution is . The condition implies that , and implies that . This means that is not an eigenvalue.  Finally, suppose that . In this case we have the general solution Recall that and . As an exercise try the computation with the general solution written as (for different and of course).  Letting implies that (recall and ). So our solution must be and satisfy . This is only possible if is zero. Why? Because is only zero when . You should plot sinh to see this fact. We can also see this from the definition of sinh. We get . Hence , which implies and that is only true if . So there are no negative eigenvalues.  In summary, the eigenvalues and corresponding eigenfunctions are    "
},
{
  "id": "bvp_section-4-5",
  "level": "2",
  "url": "bvp_section.html#bvp_section-4-5",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": "  Let us compute the eigenvalues and eigenfunctions of   Again we have to handle the cases , , separately. First suppose that . The general solution to is . So The condition implies immediately . Next Again cannot be zero if is to be an eigenvalue, and is only zero if for a positive integer . Hence the positive eigenvalues are again for all integers . And the corresponding eigenfunctions can be taken as .  Now suppose that . In this case the equation is and the general solution is so . The condition implies that . The condition also implies . Hence could be anything (let us take it to be 1). So is an eigenvalue and is a corresponding eigenfunction.  Finally, let . In this case the general solution is and We have already seen (with roles of and switched) that for this expression to be zero at and , we must have . Hence there are no negative eigenvalues.  In summary, the eigenvalues and corresponding eigenfunctions are and there is another eigenvalue    "
},
{
  "id": "bvp-periodic_example",
  "level": "2",
  "url": "bvp_section.html#bvp-periodic_example",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": "  Let us compute the eigenvalues and eigenfunctions of We have not specified the values or the derivatives at the endpoints, but rather that they are the same at the beginning and at the end of the interval.  Let us skip . The computations are the same as before, and again we find that there are no negative eigenvalues.  For , the general solution is . The condition implies that ( implies ). The second condition says nothing about and hence is an eigenvalue with a corresponding eigenfunction .  For we get that . Now We remember that and . Therefore, Hence either or . Similarly (exercise) if we differentiate and plug in the second condition we find that or . Therefore, unless we want and to both be zero (which we do not) we must have . Hence, is an integer and the eigenvalues are yet again for an integer . In this case, however, is an eigenfunction for any and any . So we have two linearly independent eigenfunctions and . Remember that for a matrix we can also have two eigenvectors corresponding to a single eigenvalue if the eigenvalue is repeated.  In summary, the eigenvalues and corresponding eigenfunctions are    "
},
{
  "id": "bvp_orthogonaleigen",
  "level": "2",
  "url": "bvp_section.html#bvp_orthogonaleigen",
  "type": "Theorem",
  "number": "5.1.1",
  "title": "",
  "body": "  Suppose that and are two eigenfunctions of the problem , or for two different eigenvalues and . Then they are orthogonal orthogonal functions in the sense that    "
},
{
  "id": "thm_fredholmsimple",
  "level": "2",
  "url": "bvp_section.html#thm_fredholmsimple",
  "type": "Theorem",
  "number": "5.1.2",
  "title": "Fredholm alternative.",
  "body": " Fredholm alternative  Fredholm alternative simple case    Named after the Swedish mathematician Erik Ivar Fredholm (1866–1927). Exactly one of the following statements holds. Either has a nonzero solution, or has a unique solution for every function continuous on .   "
},
{
  "id": "bvp_whirstringfig",
  "level": "2",
  "url": "bvp_section.html#bvp_whirstringfig",
  "type": "Figure",
  "number": "5.1",
  "title": "",
  "body": " Whirling string.   "
},
{
  "id": "bvp_whirstring2fig",
  "level": "2",
  "url": "bvp_section.html#bvp_whirstring2fig",
  "type": "Figure",
  "number": "5.2",
  "title": "",
  "body": " Whirling string at the third eigenvalue ( ).   "
},
{
  "id": "bvp_section-8-2",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-2",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": "  Suppose and , . Find all for which there is more than one solution. Also find the corresponding solutions (only for the eigenvalues).    Solving , the general solution will depend on whether , , or . Considering the case , we get two complex roots to the auxiliary equation and hence the general solution will be . Applying the given boundary conditions, we get for    (for any ). Also, is the only case for which we get more than one solution.   "
},
{
  "id": "bvp_section-8-3",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-3",
  "type": "Exercise",
  "number": "5.1.2",
  "title": "",
  "body": "  Suppose and , . Find all the solution(s) if any exist.        "
},
{
  "id": "bvp_section-8-4",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-4",
  "type": "Exercise",
  "number": "5.1.3",
  "title": "",
  "body": "  Consider and , . Why does it not have any eigenvalues? Why does any first order equation with two endpoint conditions such as above have no eigenvalues?    General solution is . Since then , and so . Therefore, the solution is always identically zero. One condition is always enough to guarantee a unique solution for a first order equation.   "
},
{
  "id": "bvp_section-8-5",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-5",
  "type": "Exercise",
  "number": "5.1.4",
  "title": "",
  "body": "  Solve the second order eigenvalue problem and , .        "
},
{
  "id": "bvp_section-8-7",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-7",
  "type": "Exercise",
  "number": "5.1.5",
  "title": "",
  "body": "  Compute all eigenvalues and eigenfunctions of (assume ).   "
},
{
  "id": "bvp_section-8-8",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-8",
  "type": "Exercise",
  "number": "5.1.6",
  "title": "",
  "body": "  Compute all eigenvalues and eigenfunctions of (assume ).   "
},
{
  "id": "bvp_section-8-9",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-9",
  "type": "Exercise",
  "number": "5.1.7",
  "title": "",
  "body": "  Compute all eigenvalues and eigenfunctions of (assume ).   "
},
{
  "id": "bvp_section-8-10",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-10",
  "type": "Exercise",
  "number": "5.1.8",
  "title": "",
  "body": "  Compute all eigenvalues and eigenfunctions of (assume ).   "
},
{
  "id": "bvp_section-8-11",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-11",
  "type": "Exercise",
  "number": "5.1.9",
  "title": "",
  "body": "  We skipped the case of for the boundary value problem . Finish the calculation and show that there are no negative eigenvalues.   "
},
{
  "id": "bvp_section-8-12",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-12",
  "type": "Exercise",
  "number": "5.1.10",
  "title": "",
  "body": "  Consider a spinning string of length 2 and linear density 0.1 and tension 3. Find smallest angular velocity when the string pops out.        "
},
{
  "id": "bvp_section-8-13",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-13",
  "type": "Exercise",
  "number": "5.1.11",
  "title": "",
  "body": "  Suppose and , . Find all the solution(s) if any exist.        "
},
{
  "id": "bvp_section-8-14",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-14",
  "type": "Exercise",
  "number": "5.1.12",
  "title": "",
  "body": "  Consider and , . Why does it not have any eigenvalues? Why does any first order equation with two endpoint conditions such as above have no eigenvalues?    General solution is . Since then , and so . Therefore, the solution is always identically zero. One condition is always enough to guarantee a unique solution for a first order equation.   "
},
{
  "id": "bvp_section-8-15",
  "level": "2",
  "url": "bvp_section.html#bvp_section-8-15",
  "type": "Exercise",
  "number": "5.1.13",
  "title": "",
  "body": "   (challenging) Suppose and , , . Suppose that . Find an equation that all such eigenvalues must satisfy. Hint: Note that is a root of .        "
},
{
  "id": "ts_section",
  "level": "1",
  "url": "ts_section.html",
  "type": "Section",
  "number": "5.2",
  "title": "The trigonometric series",
  "body": " The trigonometric series    Intro to Fourier Series  In this video we learn how to approximate periodic functions with Fourier Series; that is, a sum of sin and cos terms of different frequencies.      Periodic functions and motivation  As motivation for studying Fourier series, suppose we have the problem for some periodic function . We already solved One way to solve is to decompose as a sum of cosines (and sines) and then solve many problems of the form . We then use the principle of superposition, to sum up all the solutions we got to get a solution to .  Before we proceed, let us talk a little bit more in detail about periodic functions. A function is said to be periodic periodic with period if for all . For brevity we say is -periodic. Note that a -periodic function is also -periodic, -periodic and so on. For example, and are -periodic. So are and for all integers . The constant functions are an extreme example. They are periodic for any period (exercise).  Normally we start with a function defined on some interval , and we want to extend periodically extend periodically periodic extension to make it a -periodic function. We do this extension by defining a new function such that for in , . For in , we define , for in , , and so on. To make that work we needed . We could have also started with defined only on the half-open interval and then define .    Define on . Now extend periodically to a 2-periodic function. See .   Periodic extension of the function .      You should be careful to distinguish between and its extension. A common mistake is to assume that a formula for holds for its extension. It can be confusing when the formula for is periodic, but with perhaps a different period.  Exercise: Define on . Take the -periodic extension and sketch its graph. How does it compare to the graph of ?    The trigonometric series   Finding the Coefficients & Fourier Convergence Theorem  While in the previous video we had a Fourier Series, we didn't see how to find the coefficients and . So our first task is to figure out how to find those. Secondly, we want to answer the question of when a Fourier Series actually converges.     The Linear Algebra Perspective  If you've taken Linear Algebra, then describing Fourier Series with Linear Algebra terminology and concepts will be very useful at crystalizing all the concepts, but perhaps more importantly it illustrates one of the most important themes in mathematic: how disparate fields can be deeply connected. And if you haven't taken linear algebra, then this is a nice little introduction to some of the ideas of that field.    Our goal is to decompose a function in terms of eigenfunctions of a certain eigenvalue problem. The eigenvalue problem we use for the Fourier series is We computed that eigenfunctions are 1, , . That is, we want to find a representation of a -periodic function as This series is called the Fourier series Fourier series Named after the French mathematician Jean Baptiste Joseph Fourier (1768–1830). or the trigonometric series trigonometric series for . We write the coefficient of the eigenfunction 1 as for convenience. We could also think of , so that we only need to look at and .  As for matrices we want to find a projection projection of onto the subspaces given by the eigenfunctions. So we want to define an inner product of functions inner product of functions . For example, to find we want to compute . We define the inner product as With this definition of the inner product, we saw in the previous section that the eigenfunctions (including the constant eigenfunction), and are orthogonal orthogonal functions in the sense that For we have by elementary calculus. For the constant we get The coefficients are given by Compare these expressions with the finite-dimensional example. For we get a similar formula   Let us check the formulas using the orthogonality properties. Suppose for a moment that Then for we have And hence .  Exercise: Carry out the calculation for and .    Take the function for in . Extend periodically and write it as a Fourier series. This function is called the sawtooth sawtooth .   The graph of the sawtooth function.    The plot of the extended periodic function is given in . Let us compute the coefficients. We start with , We will often use the result from calculus that says that the integral of an odd function over a symmetric interval is zero. Recall that an odd function odd function is a function such that . For example the functions , , or (importantly for us) are all odd functions. Thus Let us move to . Another useful fact from calculus is that the integral of an even function over a symmetric interval is twice the integral of the same function over half the interval. Recall an even function even function is a function such that . For example is even. We have used the fact that The series, therefore, is   Let us write out the first 3 harmonics of the series for . The plot of these first three terms of the series, along with a plot of the first 20 terms is given in .   First 3 (left graph) and 20 (right graph) harmonics of the sawtooth function.        Take the function Extend periodically and write it as a Fourier series. This function or its variants appear often in applications and the function is called the square wave square wave .   The graph of the square wave function.    The plot of the extended periodic function is given in . Now we compute the coefficients. We start with  Next, And finally, The Fourier series is   Let us write out the first 3 harmonics of the series for : The plot of these first three and also of the first 20 terms of the series is given in .   First 3 (left graph) and 20 (right graph) harmonics of the square wave function.      We have so far skirted the issue of convergence. For example, if is the square wave function, the equation is only an equality for such where is continuous. We do not get an equality for and all the other discontinuities of . It is not hard to see that when is an integer multiple of (which gives all the discontinuities), then We redefine on as and extend periodically. The series equals this new extended everywhere, including the discontinuities. We will generally not worry about changing the function values at several (finitely many) points.  We will say more about convergence in the next section. Let us, however, briefly mention an effect of the discontinuity. Zoom in near the discontinuity in the square wave. Further, plot the first 100 harmonics, see . While the series is a very good approximation away from the discontinuities, the error (the overshoot) near the discontinuity at does not seem to be getting any smaller as we take more and more harmonics. This behavior is known as the Gibbs phenomenon Gibbs phenomenon . The region where the error is large does get smaller, however, the more terms in the series we take.   Gibbs phenomenon in action.    We can think of a periodic function as a signal being a superposition of many signals of pure frequency. For example, we could think of the square wave as a tone of certain base frequency. This base frequency is called the fundamental frequency fundamental frequency . The square wave will be a superposition of many different pure tones of frequencies that are multiples of the fundamental frequency. In music, the higher frequencies are called the overtones overtones . All the frequencies that appear are called the spectrum spectrum of the signal. On the other hand a simple sine wave is only the pure tone (no overtones). The simplest way to make sound using a computer is the square wave, and the sound is very different from a pure tone. If you ever played video games from the 1980s or so, then you heard what square waves sound like.    Exercises    Suppose is defined on as . Extend periodically and compute the Fourier series.    The graph of the periodically extended is shown in figure. We then calcualte the Fourier coefficients and see that Calculating for , we find that . Therefore, the Fourier series for the given is .   Periodic Extension of on        Suppose is defined on as . Extend periodically and compute the Fourier series.        Periodic Extension of on        Suppose is defined on as . Extend periodically and compute the Fourier series.        Periodic Extension of on        Suppose is defined on as . Extend periodically and compute the Fourier series of .        Periodic Extension of on        Suppose is defined on as . Extend periodically and compute the Fourier series of .        Periodic Extension of on        Suppose is defined on as . Extend periodically and compute the Fourier series.        Periodic Extension of on        Suppose is defined on as . Extend periodically and compute the Fourier series of .        Periodic Extension of on        Suppose is defined on as . Extend periodically and compute the Fourier series of .        Periodic Extension of on        Suppose is defined on as . Extend periodically and compute the Fourier series of .        Periodic Extension of on        Suppose is defined on as Extend periodically and compute the Fourier series of .        Periodic Extension of on      There is another form of the Fourier series using complex exponentials for instead of and for positive . This form may be easier to work with sometimes. It is certainly more compact to write, and there is only one formula for the coefficients. On the downside, the coefficients are complex numbers.    Let Use Euler's formula to show that there exist complex numbers such that Note that the sum now ranges over all the integers including negative ones. Do not worry about convergence in this calculation. Hint: It may be better to start from the complex exponential form and write the series as      "
},
{
  "id": "fourierintro",
  "level": "2",
  "url": "ts_section.html#fourierintro",
  "type": "Video",
  "number": "5.2.1",
  "title": "Intro to Fourier Series.",
  "body": " Intro to Fourier Series  In this video we learn how to approximate periodic functions with Fourier Series; that is, a sum of sin and cos terms of different frequencies.   "
},
{
  "id": "ts_section-3-5",
  "level": "2",
  "url": "ts_section.html#ts_section-3-5",
  "type": "Example",
  "number": "5.2.1",
  "title": "",
  "body": "  Define on . Now extend periodically to a 2-periodic function. See .   Periodic extension of the function .     "
},
{
  "id": "fouriercoefficients",
  "level": "2",
  "url": "ts_section.html#fouriercoefficients",
  "type": "Video",
  "number": "5.2.2",
  "title": "Finding the Coefficients &amp; Fourier Convergence Theorem.",
  "body": " Finding the Coefficients & Fourier Convergence Theorem  While in the previous video we had a Fourier Series, we didn't see how to find the coefficients and . So our first task is to figure out how to find those. Secondly, we want to answer the question of when a Fourier Series actually converges.   "
},
{
  "id": "fourierlinear",
  "level": "2",
  "url": "ts_section.html#fourierlinear",
  "type": "Video",
  "number": "5.2.3",
  "title": "The Linear Algebra Perspective.",
  "body": " The Linear Algebra Perspective  If you've taken Linear Algebra, then describing Fourier Series with Linear Algebra terminology and concepts will be very useful at crystalizing all the concepts, but perhaps more importantly it illustrates one of the most important themes in mathematic: how disparate fields can be deeply connected. And if you haven't taken linear algebra, then this is a nice little introduction to some of the ideas of that field.   "
},
{
  "id": "ts_section-4-8",
  "level": "2",
  "url": "ts_section.html#ts_section-4-8",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  Take the function for in . Extend periodically and write it as a Fourier series. This function is called the sawtooth sawtooth .   The graph of the sawtooth function.    The plot of the extended periodic function is given in . Let us compute the coefficients. We start with , We will often use the result from calculus that says that the integral of an odd function over a symmetric interval is zero. Recall that an odd function odd function is a function such that . For example the functions , , or (importantly for us) are all odd functions. Thus Let us move to . Another useful fact from calculus is that the integral of an even function over a symmetric interval is twice the integral of the same function over half the interval. Recall an even function even function is a function such that . For example is even. We have used the fact that The series, therefore, is   Let us write out the first 3 harmonics of the series for . The plot of these first three terms of the series, along with a plot of the first 20 terms is given in .   First 3 (left graph) and 20 (right graph) harmonics of the sawtooth function.     "
},
{
  "id": "ts_section-4-9",
  "level": "2",
  "url": "ts_section.html#ts_section-4-9",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  Take the function Extend periodically and write it as a Fourier series. This function or its variants appear often in applications and the function is called the square wave square wave .   The graph of the square wave function.    The plot of the extended periodic function is given in . Now we compute the coefficients. We start with  Next, And finally, The Fourier series is   Let us write out the first 3 harmonics of the series for : The plot of these first three and also of the first 20 terms of the series is given in .   First 3 (left graph) and 20 (right graph) harmonics of the square wave function.     "
},
{
  "id": "ts_squarewavegibbsfig",
  "level": "2",
  "url": "ts_section.html#ts_squarewavegibbsfig",
  "type": "Figure",
  "number": "5.8",
  "title": "",
  "body": " Gibbs phenomenon in action.   "
},
{
  "id": "ts_section-5-2",
  "level": "2",
  "url": "ts_section.html#ts_section-5-2",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series.    The graph of the periodically extended is shown in figure. We then calcualte the Fourier coefficients and see that Calculating for , we find that . Therefore, the Fourier series for the given is .   Periodic Extension of on     "
},
{
  "id": "ts_section-5-3",
  "level": "2",
  "url": "ts_section.html#ts_section-5-3",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series.        Periodic Extension of on     "
},
{
  "id": "ts_section-5-4",
  "level": "2",
  "url": "ts_section.html#ts_section-5-4",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series.        Periodic Extension of on     "
},
{
  "id": "ts_section-5-5",
  "level": "2",
  "url": "ts_section.html#ts_section-5-5",
  "type": "Exercise",
  "number": "5.2.4",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series of .        Periodic Extension of on     "
},
{
  "id": "ts_section-5-6",
  "level": "2",
  "url": "ts_section.html#ts_section-5-6",
  "type": "Exercise",
  "number": "5.2.5",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series of .        Periodic Extension of on     "
},
{
  "id": "ts_section-5-7",
  "level": "2",
  "url": "ts_section.html#ts_section-5-7",
  "type": "Exercise",
  "number": "5.2.6",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series.        Periodic Extension of on     "
},
{
  "id": "ts_section-5-8",
  "level": "2",
  "url": "ts_section.html#ts_section-5-8",
  "type": "Exercise",
  "number": "5.2.7",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series of .        Periodic Extension of on     "
},
{
  "id": "ts_section-5-9",
  "level": "2",
  "url": "ts_section.html#ts_section-5-9",
  "type": "Exercise",
  "number": "5.2.8",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series of .        Periodic Extension of on     "
},
{
  "id": "ts_section-5-10",
  "level": "2",
  "url": "ts_section.html#ts_section-5-10",
  "type": "Exercise",
  "number": "5.2.9",
  "title": "",
  "body": "  Suppose is defined on as . Extend periodically and compute the Fourier series of .        Periodic Extension of on     "
},
{
  "id": "ts_section-5-11",
  "level": "2",
  "url": "ts_section.html#ts_section-5-11",
  "type": "Exercise",
  "number": "5.2.10",
  "title": "",
  "body": "  Suppose is defined on as Extend periodically and compute the Fourier series of .        Periodic Extension of on     "
},
{
  "id": "ts_section-5-13",
  "level": "2",
  "url": "ts_section.html#ts_section-5-13",
  "type": "Exercise",
  "number": "5.2.11",
  "title": "",
  "body": "  Let Use Euler's formula to show that there exist complex numbers such that Note that the sum now ranges over all the integers including negative ones. Do not worry about convergence in this calculation. Hint: It may be better to start from the complex exponential form and write the series as    "
},
{
  "id": "moreonfourier_section",
  "level": "1",
  "url": "moreonfourier_section.html",
  "type": "Section",
  "number": "5.3",
  "title": "More on the Fourier series",
  "body": " More on the Fourier series     -periodic functions  We have computed the Fourier series for a -periodic function, but what about functions of different periods. Well, fear not, the computation is a simple case of change of variables. We just rescale the independent axis. Suppose we have a -periodic function . Then is called the half period half period . Let . Then the function is -periodic. We must also rescale all our sines and cosines. In the series we use as the variable. That is, we want to write If we change variables to , we see that We compute and as before. After we write down the integrals, we change variables from back to , noting also that .   The two most common half periods that show up in examples are and 1 because of the simplicity of the formulas. We should stress that we have done no new mathematics, we have only changed variables. If you understand the Fourier series for -periodic functions, you understand it for -periodic functions. You can think of it as just using different units for time. All that we are doing is moving some constants around, but all the mathematics is the same.    Let extended periodically. The plot of the periodic extension is given in . Compute the Fourier series of .   Periodic extension of the function .    We want to write . For we note that is even and hence Next we find : You should be able to find this integral by thinking about the integral as the area under the graph without doing any computation at all. Finally we can find . Here, we notice that is odd and, therefore, Hence, the series is   Let us explicitly write down the first few terms of the series up to the harmonic. The plot of these few terms and also a plot up to the harmonic is given in . You should notice how close the graph is to the real function. You should also notice that there is no Gibbs phenomenon present as there are no discontinuities.   Fourier series of up to the harmonic (left graph) and up to the harmonic (right graph).         Geogebra Activity: Use this Geogebra applet to explore how the periodic extension looks like for different functions and intervals.  Note: You can define to be piecewise within the interval by writing If(x>a,g(x),h(x)) in the input box, which in the usual notation corresponds to       Convergence   Note: Convergence was covered previously in the video series in   We will need the one sided limits of functions. We will use the following notation If you are unfamiliar with this notation, means we are taking a limit of as approaches from below (i.e. ) and means we are taking a limit of as approaches from above (i.e. ). For example, for the square wave function we have and .  Let be a function defined on an interval . Suppose that we find finitely many points , , , ..., in the interval, such that is continuous on the intervals , , ..., . Also suppose that all the one sided limits exist, that is, all of , , , , , ..., exist and are finite. Then we say is piecewise continuous piecewise continuous .  If moreover, is differentiable at all but finitely many points, and is piecewise continuous, then is said to be piecewise smooth piecewise smooth .    The square wave function is piecewise smooth on or any other interval. In such a case we simply say that the function is piecewise smooth.      The function is piecewise smooth.      The function is not piecewise smooth on (or any other interval containing zero). In fact, it is not even piecewise continuous.      The function is not piecewise smooth on (or any other interval containing zero). is continuous, but the derivative of is unbounded near zero and hence not piecewise continuous.    Piecewise smooth functions have an easy answer on the convergence of the Fourier series.    Suppose is a -periodic piecewise smooth function. Let be the Fourier series for . Then the series converges for all . If is continuous at , then Otherwise,     If we happen to have that at all the discontinuities, the Fourier series converges to everywhere. We can always just redefine by changing the value at each discontinuity appropriately. Then we can write an equals sign between and the series without any worry. We mentioned this fact briefly at the end last section.  The theorem does not say how fast the series converges. Think back to the discussion of the Gibbs phenomenon in the last section. The closer you get to the discontinuity, the more terms you need to take to get an accurate approximation to the function.    Differentiation and integration of Fourier series  Not only does Fourier series converge nicely, but it is easy to differentiate and integrate the series. We can do this just by differentiating or integrating term by term.    Suppose is a piecewise smooth continuous function and the derivative is piecewise smooth. Then the derivative can be obtained by differentiating term by term,     It is important that the function is continuous. It can have corners, but no jumps. Otherwise, the differentiated series will fail to converge. For an exercise, take the series obtained for the square wave and try to differentiate the series. Similarly, we can also integrate a Fourier series.    Suppose is a piecewise smooth function. Then the antiderivative is obtained by antidifferentiating term by term and so where and is an arbitrary constant.    Note that the series for is no longer a Fourier series as it contains the term. The antiderivative of a periodic function need no longer be periodic and so we should not expect a Fourier series.    Rates of convergence and smoothness  Let us do an example of a periodic function with one derivative everywhere.    Take the function and extend to a 2-periodic function. The plot is given in .   Smooth 2-periodic function.    This function has one derivative everywhere, but it does not have a second derivative whenever is an integer.  Exercise: Compute and .  Let us compute the Fourier series coefficients. The actual computation involves several integration by parts and is left to student. That is, the series is   This series converges very fast. If you plot up to the third harmonic, that is the function it is almost indistinguishable from the plot of in . In fact, the coefficient is already just 0.0096 (approximately). The reason for this behavior is the term in the denominator. The coefficients in this case go to zero as fast as goes to zero.    For functions constructed piecewise from polynomials as above, it is generally true that if you have one derivative, the Fourier coefficients will go to zero approximately like . If you have only a continuous function, then the Fourier coefficients will go to zero as . If you have discontinuities, then the Fourier coefficients will go to zero approximately as . For more general functions the story is somewhat more complicated but the same idea holds, the more derivatives you have, the faster the coefficients go to zero. Similar reasoning works in reverse. If the coefficients go to zero like , you always obtain a continuous function. If they go to zero like , you obtain an everywhere differentiable function.  To justify this behavior, take for example the function defined by the Fourier series When we differentiate term by term we notice Therefore, the coefficients now go down like , which means that we have a continuous function. The derivative of is defined at most points, but there are points where is not differentiable. It has corners, but no jumps. If we differentiate again (where we can), we find that the function , now fails to be continuous (has jumps) This function is similar to the sawtooth. If we tried to differentiate the series again, we would obtain which does not converge!     Geogebra Activity: Use this Geogebra applet to plot the series for and the obtained series for its derivatives to see the behaviour described above. Explore this behaviour with your own series and see how fast they (and their derivatives) converge.      Exercises    Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      Using the general Fourier coefficients for a periodic function, we can find: a)  b)    Periodic Extension of on        Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b)    Periodic Extension of on        Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b) Expand the above series for to .   Periodic Extension of on        Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b) Expand the above series for to .   Periodic Extension of on        Let extended periodically (period is 20).    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b) Expand the above series for to .   Periodic Extension of on        Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b) Expand the above series for to .   Periodic Extension of on        Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.    What does the series converge to at .      a)  b)  c)    Periodic Extension of on        Let extended periodically. Suppose is the function given by the Fourier series of . Without computing the Fourier series evaluate                                    a) , b) , c) , d) , e) , f)       Let extended periodically.    Compute the Fourier series for .    Plug in to find a series representation for .    Using the first 4 terms of the result from part b) approximate .      a)  b) is continuous at so the Fourier series converges to . Obtain (for even , we get zero) . c) Using the first 4 terms get (quite a bad approximation, you would have to take about 50 terms to start to get to within of ).   Periodic Extension of on        Let extended periodically.    Compute the Fourier series for .    By plugging in , evaluate .    Now evaluate .      a)  b) is continuous at so the Fourier series converges to . Obtain . This gives  c) Using , we obtain . This gives    Periodic Extension of on        Let extended periodically. Suppose is the function given by the Fourier series of . Without computing the Fourier series evaluate                                    a) , b) , c) , d) , e) , f)    Periodic Extension of on        Let Compute .    Using term-by-term differentiation, we get       Let     Find the antiderivative.    Is the antiderivative periodic?      a)  b) no      Let . Is continuous and differentiable everywhere? Find the derivative (if it exists everywhere) or justify why is not differentiable everywhere.      Let . Is differentiable everywhere? Find the derivative (if it exists everywhere) or justify why is not differentiable everywhere.     "
},
{
  "id": "moreonfourier_section-3-4",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-3-4",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": "  Let extended periodically. The plot of the periodic extension is given in . Compute the Fourier series of .   Periodic extension of the function .    We want to write . For we note that is even and hence Next we find : You should be able to find this integral by thinking about the integral as the area under the graph without doing any computation at all. Finally we can find . Here, we notice that is odd and, therefore, Hence, the series is   Let us explicitly write down the first few terms of the series up to the harmonic. The plot of these few terms and also a plot up to the harmonic is given in . You should notice how close the graph is to the real function. You should also notice that there is no Gibbs phenomenon present as there are no discontinuities.   Fourier series of up to the harmonic (left graph) and up to the harmonic (right graph).     "
},
{
  "id": "moreonfourier_section-3-5",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-3-5",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": "   Geogebra Activity: Use this Geogebra applet to explore how the periodic extension looks like for different functions and intervals.  Note: You can define to be piecewise within the interval by writing If(x>a,g(x),h(x)) in the input box, which in the usual notation corresponds to    "
},
{
  "id": "moreonfourier_section-4-6",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-4-6",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "  The square wave function is piecewise smooth on or any other interval. In such a case we simply say that the function is piecewise smooth.   "
},
{
  "id": "moreonfourier_section-4-7",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-4-7",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": "  The function is piecewise smooth.   "
},
{
  "id": "moreonfourier_section-4-8",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-4-8",
  "type": "Example",
  "number": "5.3.5",
  "title": "",
  "body": "  The function is not piecewise smooth on (or any other interval containing zero). In fact, it is not even piecewise continuous.   "
},
{
  "id": "moreonfourier_section-4-9",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-4-9",
  "type": "Example",
  "number": "5.3.6",
  "title": "",
  "body": "  The function is not piecewise smooth on (or any other interval containing zero). is continuous, but the derivative of is unbounded near zero and hence not piecewise continuous.   "
},
{
  "id": "moreonfourier_section-4-11",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-4-11",
  "type": "Theorem",
  "number": "5.3.1",
  "title": "",
  "body": "  Suppose is a -periodic piecewise smooth function. Let be the Fourier series for . Then the series converges for all . If is continuous at , then Otherwise,    "
},
{
  "id": "moreonfourier_section-5-3",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-5-3",
  "type": "Theorem",
  "number": "5.3.2",
  "title": "",
  "body": "  Suppose is a piecewise smooth continuous function and the derivative is piecewise smooth. Then the derivative can be obtained by differentiating term by term,    "
},
{
  "id": "moreonfourier_section-5-5",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-5-5",
  "type": "Theorem",
  "number": "5.3.3",
  "title": "",
  "body": "  Suppose is a piecewise smooth function. Then the antiderivative is obtained by antidifferentiating term by term and so where and is an arbitrary constant.   "
},
{
  "id": "moreonfourier_section-6-3",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-6-3",
  "type": "Example",
  "number": "5.3.7",
  "title": "",
  "body": "  Take the function and extend to a 2-periodic function. The plot is given in .   Smooth 2-periodic function.    This function has one derivative everywhere, but it does not have a second derivative whenever is an integer.  Exercise: Compute and .  Let us compute the Fourier series coefficients. The actual computation involves several integration by parts and is left to student. That is, the series is   This series converges very fast. If you plot up to the third harmonic, that is the function it is almost indistinguishable from the plot of in . In fact, the coefficient is already just 0.0096 (approximately). The reason for this behavior is the term in the denominator. The coefficients in this case go to zero as fast as goes to zero.   "
},
{
  "id": "moreonfourier_section-6-6",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-6-6",
  "type": "Example",
  "number": "5.3.8",
  "title": "",
  "body": "   Geogebra Activity: Use this Geogebra applet to plot the series for and the obtained series for its derivatives to see the behaviour described above. Explore this behaviour with your own series and see how fast they (and their derivatives) converge.   "
},
{
  "id": "moreonfourier_section-7-2",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-2",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      Using the general Fourier coefficients for a periodic function, we can find: a)  b)    Periodic Extension of on     "
},
{
  "id": "moreonfourier_section-7-3",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-3",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b)    Periodic Extension of on     "
},
{
  "id": "moreonfourier_section-7-4",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-4",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b) Expand the above series for to .   Periodic Extension of on     "
},
{
  "id": "moreonfourier_section-7-5",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-5",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b) Expand the above series for to .   Periodic Extension of on     "
},
{
  "id": "moreonfourier_section-7-6",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-6",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "",
  "body": "  Let extended periodically (period is 20).    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b) Expand the above series for to .   Periodic Extension of on     "
},
{
  "id": "moreonfourier_section-7-7",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-7",
  "type": "Exercise",
  "number": "5.3.6",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.      a)  b) Expand the above series for to .   Periodic Extension of on     "
},
{
  "id": "moreonfourier_section-7-8",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-8",
  "type": "Exercise",
  "number": "5.3.7",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Write out the series explicitly up to the harmonic.    What does the series converge to at .      a)  b)  c)    Periodic Extension of on     "
},
{
  "id": "moreonfourier_section-7-9",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-9",
  "type": "Exercise",
  "number": "5.3.8",
  "title": "",
  "body": "  Let extended periodically. Suppose is the function given by the Fourier series of . Without computing the Fourier series evaluate                                    a) , b) , c) , d) , e) , f)    "
},
{
  "id": "moreonfourier_section-7-10",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-10",
  "type": "Exercise",
  "number": "5.3.9",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    Plug in to find a series representation for .    Using the first 4 terms of the result from part b) approximate .      a)  b) is continuous at so the Fourier series converges to . Obtain (for even , we get zero) . c) Using the first 4 terms get (quite a bad approximation, you would have to take about 50 terms to start to get to within of ).   Periodic Extension of on     "
},
{
  "id": "moreonfourier_section-7-11",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-11",
  "type": "Exercise",
  "number": "5.3.10",
  "title": "",
  "body": "  Let extended periodically.    Compute the Fourier series for .    By plugging in , evaluate .    Now evaluate .      a)  b) is continuous at so the Fourier series converges to . Obtain . This gives  c) Using , we obtain . This gives    Periodic Extension of on     "
},
{
  "id": "moreonfourier_section-7-12",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-12",
  "type": "Exercise",
  "number": "5.3.11",
  "title": "",
  "body": "  Let extended periodically. Suppose is the function given by the Fourier series of . Without computing the Fourier series evaluate                                    a) , b) , c) , d) , e) , f)    Periodic Extension of on     "
},
{
  "id": "moreonfourier_section-7-13",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-13",
  "type": "Exercise",
  "number": "5.3.12",
  "title": "",
  "body": "  Let Compute .    Using term-by-term differentiation, we get    "
},
{
  "id": "moreonfourier_section-7-14",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-14",
  "type": "Exercise",
  "number": "5.3.13",
  "title": "",
  "body": "  Let     Find the antiderivative.    Is the antiderivative periodic?      a)  b) no   "
},
{
  "id": "moreonfourier_section-7-15",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-15",
  "type": "Exercise",
  "number": "5.3.14",
  "title": "",
  "body": "  Let . Is continuous and differentiable everywhere? Find the derivative (if it exists everywhere) or justify why is not differentiable everywhere.   "
},
{
  "id": "moreonfourier_section-7-16",
  "level": "2",
  "url": "moreonfourier_section.html#moreonfourier_section-7-16",
  "type": "Exercise",
  "number": "5.3.15",
  "title": "",
  "body": "  Let . Is differentiable everywhere? Find the derivative (if it exists everywhere) or justify why is not differentiable everywhere.   "
},
{
  "id": "sec_scs",
  "level": "1",
  "url": "sec_scs.html",
  "type": "Section",
  "number": "5.4",
  "title": "Sine and cosine series",
  "body": " Sine and cosine series     Odd and even periodic functions   Fourier Series Example for an odd function  We do one more example of computing the Fourier Series. This time we make use of a couple nice integration tricks involving whether sin and cos are even functions (which means ) or odd functions (which means ).    You may have noticed by now that an odd function has no cosine terms in the Fourier series and an even function has no sine terms in the Fourier series. This observation is not a coincidence. Let us look at even and odd periodic function in more detail.  Recall that a function is odd odd function if . A function is even even function if . For example, is even and is odd. Similarly the function is even if is even and odd when is odd.    Take two functions and and define their product .    Suppose both and are odd. Is odd or even?    Suppose one is even and one is odd. Is odd or even?    Suppose both are even. Is odd or even?    You can check your answers graphically using this Geogebra applet . Even functions are symmetric about the y-axis, while odd functions are flip over both the y-axis and the x-axis.    If and are both odd, then is odd. Similarly for even functions. On the other hand, if is odd and even, then we cannot say anything about the sum . In fact, the Fourier series of any function is a sum of an odd (the sine terms) and an even (the cosine terms) function.  In this section we consider odd and even periodic functions. We have previously defined the -periodic extension of a function defined on the interval . Sometimes we are only interested in the function on the range and it would be convenient to have an odd (resp. even) function. If the function is odd (resp. even), all the cosine (resp. sine) terms disappear. What we will do is take the odd (resp. even) extension of the function to and then extend periodically to a -periodic function.  Take a function defined on . On define the functions Extend and to be -periodic. Then is called the odd periodic extension odd periodic extension of , and is called the even periodic extension even periodic extension of . For the odd extension we generally assume that .  Verify: Check that is odd and is even. For , assume .    Take the function defined on . shows the plots of the odd and even periodic extensions of .   Odd and even 2-periodic extension of , .        Sine and cosine series  Let be an odd -periodic function. We write the Fourier series for . First, we compute the coefficients (including ) and get That is, there are no cosine terms in the Fourier series of an odd function. The integral is zero because is an odd function (product of an odd and an even function is odd) and the integral of an odd function over a symmetric interval is always zero. The integral of an even function over a symmetric interval is twice the integral of the function over the interval . The function is the product of two odd functions and hence is even. We now write the Fourier series of as   Similarly, if is an even -periodic function. For the same exact reasons as above, we find that and The formula still works for , in which case it becomes The Fourier series is then   An interesting consequence is that the coefficients of the Fourier series of an odd (or even) function can be computed by just integrating over the half interval . Therefore, we can compute the Fourier series of the odd (or even) extension of a function by computing certain integrals over the interval where the original function is defined.    Let be a piecewise smooth function defined on . Then the odd periodic extension of has the Fourier series where The even periodic extension of has the Fourier series where     We call the series the sine series sine series of and we call the series the cosine series cosine series of . We often do not actually care what happens outside of . In this case, we pick whichever series fits our problem better.  It is not necessary to start with the full Fourier series to obtain the sine and cosine series. The sine series is really the eigenfunction expansion of using eigenfunctions of the eigenvalue problem , , . The cosine series is the eigenfunction expansion of using eigenfunctions of the eigenvalue problem , , . We could have, therefore, gotten the same formulas by defining the inner product and following the procedure of . This point of view is useful, as we commonly use a specific series that arose because our underlying question led to a certain eigenvalue problem. If the eigenvalue problem is not one of the three we covered so far, you can still do an eigenfunction expansion, generalizing the results of this chapter. We will deal with such a generalization in .    Find the Fourier series of the even periodic extension of the function for .  We want to write where and Note that we have detected the continuity of the extension since the coefficients decay as . That is, the even periodic extension of has no jump discontinuities. It does have corners, since the derivative, which is an odd function and a sine series, has jumps; it has a Fourier series whose coefficients decay only as .  Explicitly, the first few terms of the series are     Exercise:    Compute the derivative of the even periodic extension of above and verify it has jump discontinuities. Use the actual definition of , not its cosine series!    Why is it that the derivative of the even periodic extension of is the odd periodic extension of ?      Application  Fourier series ties in to the boundary value problems we studied earlier. Let us see this connection in an application.  Consider the boundary value problem for , for the Dirichlet boundary conditions Dirichlet boundary conditions  , . The Fredholm alternative ( ) says that as long as is not an eigenvalue of the underlying homogeneous problem, there exists a unique solution. Eigenfunctions of this eigenvalue problem are the functions . Therefore, to find the solution, we first find the Fourier sine series for . We write also as a sine series, but with unknown coefficients. We substitute the series for into the equation and solve for the unknown coefficients. If we have the Neumann boundary conditions Neumann boundary conditions  , , we do the same procedure using the cosine series.  Let us see how this method works on examples.    Take the boundary value problem for , where on , and satisfying the Dirichlet boundary conditions , . We write as a sine series Compute We write as We plug in to obtain Therefore, or That is not zero for any , and that we can solve for , is precisely because is not an eigenvalue of the problem. We have thus obtained a Fourier series for the solution See for a graph of the solution. Notice that because the eigenfunctions satisfy the boundary conditions, and is written in terms of the boundary conditions, then satisfies the boundary conditions.   Plot of the solution of , , .        Similarly we handle the Neumann conditions. Take the boundary value problem for , where again on , but now satisfying the Neumann boundary conditions , . We write as a cosine series where and We write as a cosine series We plug in to obtain Therefore, , for even ( ) and for odd we have or The Fourier series for the solution is       Exercises    Let on .    Find the Fourier series of the even periodic extension.    Find the Fourier series of the odd periodic extension.      a)  b)       Let on .    Find the Fourier series of the even periodic extension.    Find the Fourier series of the odd periodic extension.      a)  b)       Take defined on .    Sketch the plot of the even periodic extension of .    Sketch the plot of the odd periodic extension of .      a)   Even Periodic Extension of on    b)   Odd Periodic Extension of on        Take defined on .    Sketch the plot of the even periodic extension of .    Sketch the plot of the odd periodic extension of .      a)   Even Periodic Extension of on    b)   Odd Periodic Extension of on        Find the Fourier series of both the odd and even periodic extension of the function for . Can you tell which extension is continuous from the Fourier series coefficients?    a) b)       Find the Fourier series of both the odd and even periodic extension of the function for .    a) b)       Find the Fourier series of the even periodic extension of the function for .    a) b)       Let . Solve for the Dirichlet conditions and .    Since our function is expanded as a Sine series, we choose [satisfies the given boundary conditions as well]. Using this in the given differential equation, we can find the expression for for all . This leaves us with the final solution        (challenging) Let . Solve for the Dirichlet conditions and . Hint: Note that satisfies the given Dirichlet conditions.           Consider where on .    Solve for the Dirichlet conditions .    Solve for the Neumann conditions .      First we use even and odd extensions of the given function to write the Cosine and Sine series, respectively. The Cosine series is given by and the Sine series is given by . a) Taking . Using it in the given differential equation, we can find to then show that b) is the required solution.      Consider for on .    Solve for the Dirichlet conditions .    Solve for the Neumann conditions .      a) b)       Consider where . Write the solution as a Fourier series, where the coefficients are given in terms of .           Let for . Let be the odd periodic extension. Compute , , , , , , . Note: Do not compute using the sine series.      Let be defined on . Now take the average of the two extensions .    What is if (Justify!)    What is if (Justify!)      a)  b)      "
},
{
  "id": "fouriersodd",
  "level": "2",
  "url": "sec_scs.html#fouriersodd",
  "type": "Video",
  "number": "5.4.1",
  "title": "Fourier Series Example for an odd function.",
  "body": " Fourier Series Example for an odd function  We do one more example of computing the Fourier Series. This time we make use of a couple nice integration tricks involving whether sin and cos are even functions (which means ) or odd functions (which means ).   "
},
{
  "id": "sec_scs-3-5",
  "level": "2",
  "url": "sec_scs.html#sec_scs-3-5",
  "type": "Example",
  "number": "5.4.1",
  "title": "",
  "body": "  Take two functions and and define their product .    Suppose both and are odd. Is odd or even?    Suppose one is even and one is odd. Is odd or even?    Suppose both are even. Is odd or even?    You can check your answers graphically using this Geogebra applet . Even functions are symmetric about the y-axis, while odd functions are flip over both the y-axis and the x-axis.   "
},
{
  "id": "sec_scs-3-10",
  "level": "2",
  "url": "sec_scs.html#sec_scs-3-10",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": "  Take the function defined on . shows the plots of the odd and even periodic extensions of .   Odd and even 2-periodic extension of , .     "
},
{
  "id": "sec_scs-4-5",
  "level": "2",
  "url": "sec_scs.html#sec_scs-4-5",
  "type": "Theorem",
  "number": "5.4.1",
  "title": "",
  "body": "  Let be a piecewise smooth function defined on . Then the odd periodic extension of has the Fourier series where The even periodic extension of has the Fourier series where    "
},
{
  "id": "sec_scs-4-8",
  "level": "2",
  "url": "sec_scs.html#sec_scs-4-8",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": "  Find the Fourier series of the even periodic extension of the function for .  We want to write where and Note that we have detected the continuity of the extension since the coefficients decay as . That is, the even periodic extension of has no jump discontinuities. It does have corners, since the derivative, which is an odd function and a sine series, has jumps; it has a Fourier series whose coefficients decay only as .  Explicitly, the first few terms of the series are    "
},
{
  "id": "sec_scs-5-5",
  "level": "2",
  "url": "sec_scs.html#sec_scs-5-5",
  "type": "Example",
  "number": "5.4.4",
  "title": "",
  "body": "  Take the boundary value problem for , where on , and satisfying the Dirichlet boundary conditions , . We write as a sine series Compute We write as We plug in to obtain Therefore, or That is not zero for any , and that we can solve for , is precisely because is not an eigenvalue of the problem. We have thus obtained a Fourier series for the solution See for a graph of the solution. Notice that because the eigenfunctions satisfy the boundary conditions, and is written in terms of the boundary conditions, then satisfies the boundary conditions.   Plot of the solution of , , .     "
},
{
  "id": "sec_scs-5-6",
  "level": "2",
  "url": "sec_scs.html#sec_scs-5-6",
  "type": "Example",
  "number": "5.4.5",
  "title": "",
  "body": "  Similarly we handle the Neumann conditions. Take the boundary value problem for , where again on , but now satisfying the Neumann boundary conditions , . We write as a cosine series where and We write as a cosine series We plug in to obtain Therefore, , for even ( ) and for odd we have or The Fourier series for the solution is    "
},
{
  "id": "sec_scs-6-2",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-2",
  "type": "Exercise",
  "number": "5.4.1",
  "title": "",
  "body": "  Let on .    Find the Fourier series of the even periodic extension.    Find the Fourier series of the odd periodic extension.      a)  b)    "
},
{
  "id": "sec_scs-6-3",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-3",
  "type": "Exercise",
  "number": "5.4.2",
  "title": "",
  "body": "  Let on .    Find the Fourier series of the even periodic extension.    Find the Fourier series of the odd periodic extension.      a)  b)    "
},
{
  "id": "sec_scs-6-4",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-4",
  "type": "Exercise",
  "number": "5.4.3",
  "title": "",
  "body": "  Take defined on .    Sketch the plot of the even periodic extension of .    Sketch the plot of the odd periodic extension of .      a)   Even Periodic Extension of on    b)   Odd Periodic Extension of on     "
},
{
  "id": "sec_scs-6-5",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-5",
  "type": "Exercise",
  "number": "5.4.4",
  "title": "",
  "body": "  Take defined on .    Sketch the plot of the even periodic extension of .    Sketch the plot of the odd periodic extension of .      a)   Even Periodic Extension of on    b)   Odd Periodic Extension of on     "
},
{
  "id": "sec_scs-6-6",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-6",
  "type": "Exercise",
  "number": "5.4.5",
  "title": "",
  "body": "  Find the Fourier series of both the odd and even periodic extension of the function for . Can you tell which extension is continuous from the Fourier series coefficients?    a) b)    "
},
{
  "id": "sec_scs-6-7",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-7",
  "type": "Exercise",
  "number": "5.4.6",
  "title": "",
  "body": "  Find the Fourier series of both the odd and even periodic extension of the function for .    a) b)    "
},
{
  "id": "sec_scs-6-8",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-8",
  "type": "Exercise",
  "number": "5.4.7",
  "title": "",
  "body": "  Find the Fourier series of the even periodic extension of the function for .    a) b)    "
},
{
  "id": "sec_scs-6-9",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-9",
  "type": "Exercise",
  "number": "5.4.8",
  "title": "",
  "body": "  Let . Solve for the Dirichlet conditions and .    Since our function is expanded as a Sine series, we choose [satisfies the given boundary conditions as well]. Using this in the given differential equation, we can find the expression for for all . This leaves us with the final solution    "
},
{
  "id": "sec_scs-6-10",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-10",
  "type": "Exercise",
  "number": "5.4.9",
  "title": "",
  "body": "   (challenging) Let . Solve for the Dirichlet conditions and . Hint: Note that satisfies the given Dirichlet conditions.        "
},
{
  "id": "sec_scs-6-11",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-11",
  "type": "Exercise",
  "number": "5.4.10",
  "title": "",
  "body": "  Consider where on .    Solve for the Dirichlet conditions .    Solve for the Neumann conditions .      First we use even and odd extensions of the given function to write the Cosine and Sine series, respectively. The Cosine series is given by and the Sine series is given by . a) Taking . Using it in the given differential equation, we can find to then show that b) is the required solution.   "
},
{
  "id": "sec_scs-6-12",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-12",
  "type": "Exercise",
  "number": "5.4.11",
  "title": "",
  "body": "  Consider for on .    Solve for the Dirichlet conditions .    Solve for the Neumann conditions .      a) b)    "
},
{
  "id": "sec_scs-6-13",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-13",
  "type": "Exercise",
  "number": "5.4.12",
  "title": "",
  "body": "  Consider where . Write the solution as a Fourier series, where the coefficients are given in terms of .        "
},
{
  "id": "sec_scs-6-14",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-14",
  "type": "Exercise",
  "number": "5.4.13",
  "title": "",
  "body": "  Let for . Let be the odd periodic extension. Compute , , , , , , . Note: Do not compute using the sine series.   "
},
{
  "id": "sec_scs-6-15",
  "level": "2",
  "url": "sec_scs.html#sec_scs-6-15",
  "type": "Exercise",
  "number": "5.4.14",
  "title": "",
  "body": "  Let be defined on . Now take the average of the two extensions .    What is if (Justify!)    What is if (Justify!)      a)  b)    "
},
{
  "id": "appoffourier_section",
  "level": "1",
  "url": "appoffourier_section.html",
  "type": "Section",
  "number": "5.5",
  "title": "Applications of Fourier series",
  "body": " Applications of Fourier series     Periodically forced oscillation     Let us return to the forced oscillations. Consider a mass-spring system as before, where we have a mass on a spring with spring constant , with damping , and a force applied to the mass. Suppose the forcing function is -periodic for some . We saw this problem in with . The equation that governs this particular setup is   The general solution of consists of the complementary solution , which solves the associated homogeneous equation , and a particular solution of we call . For , the complementary solution will decay as time goes by. Therefore, we are mostly interested in a particular solution that does not decay and is periodic with the same period as . We call this particular solution the steady periodic solution steady periodic solution and we write it as as before. What is new in this section is that we consider an arbitrary forcing function instead of a simple cosine.  For simplicity, suppose . The problem with is very similar. The equation has the general solution where . Any solution to is of the form . The steady periodic solution has the same period as .  In the spirit of the last section and the idea of undetermined coefficients we first write Then we write a proposed steady periodic solution as where and are unknowns. We plug into the differential equation and solve for and in terms of and . This process is perhaps best understood by example.    Suppose that , and . The units are again the mks units mks units (meters-kilograms-seconds). There is a jetpack strapped to the mass, which fires with a force of 1 newton for 1 second and then is off for 1 second, and so on. We want to find the steady periodic solution.  The equation is, therefore, where is the step function extended periodically. We write We compute So   We want to try Once we plug into the differential equation , it is clear that for as there are no corresponding terms in the series for . Similarly for even. Hence we try We plug into the differential equation and obtain So , for even , and for odd we get   The steady periodic solution has the Fourier series We know this is the steady periodic solution as it contains no terms of the complementary solution and it is periodic with the same period as itself. See for the plot of this solution.   Plot of the steady periodic solution .        Resonance  Just as when the forcing function was a simple cosine, we may encounter resonance. Assume and let us discuss only pure resonance. Let be -periodic and consider When we expand and find that some of its terms coincide with the complementary solution to , we cannot use those terms in the guess. Just like before, they disappear when we plug them into the left-hand side and we get a contradictory equation (such as ). That is, suppose where for some positive integer . We have to modify our guess and try In other words, we multiply the offending term by . From then on, we proceed as before.  Of course, the solution is not a Fourier series (it is not even periodic) since it contains these terms multiplied by . Further, the terms eventually dominate and lead to wild oscillations. As before, this behavior is called pure resonance pure resonance or just resonance resonance .  Note that there now may be infinitely many resonance frequencies to hit. That is, as we change the frequency of (we change ), different terms from the Fourier series of may interfere with the complementary solution and cause resonance. However, we should note that since everything is an approximation and in particular is never actually zero but something very close to zero, only the first few resonance frequencies matter in real life.    We want to solve the equation where extended periodically. We note that     Compute the Fourier series of to verify the equation above.    As , the solution to is for some particular solution .  If we just try an given as a Fourier series with as usual, the complementary equation, , eats our harmonic. That is, the term with is already in in our complementary solution. Therefore, we pull that term out and multiply it by . We also add a cosine term to get everything right. That is, we try Let us compute the second derivative. We now plug into the left-hand side of the differential equation. We simplify, This series has to equal to the series for . We equate the coefficients and solve for and .   That is,     When , you do not have to worry about pure resonance. That is, there are never any conflicts and you do not need to multiply any terms by . There is a corresponding concept of practical resonance practical resonance and it is very similar to the ideas we already explored in . Basically what happens in practical resonance is that one of the coefficients in the series for can get very big. Let us not go into details here.    Exercises    Let . Find the steady periodic solution to . Express your solution as a Fourier series.      Let . Find the steady periodic solution to . Express your solution as a Fourier series.      Let . Find the steady periodic solution to . Express your solution as a Fourier series.      Let for and extended periodically. Find the steady periodic solution to . Express your solution as a series.      Let for and extended periodically. Find the steady periodic solution to . Express your solution as a series.      Let . Find the steady periodic solution to . Express your solution as a Fourier series.           Let . Find the steady periodic solution to . Express your solution as a Fourier series.           Let for extended periodically. Find the steady periodic solution to . Express your solution as a series.           Let for extended periodically. Find the steady periodic solution to . Express your solution as a series.          "
},
{
  "id": "afs_steadyex",
  "level": "2",
  "url": "appoffourier_section.html#afs_steadyex",
  "type": "Example",
  "number": "5.5.1",
  "title": "",
  "body": "  Suppose that , and . The units are again the mks units mks units (meters-kilograms-seconds). There is a jetpack strapped to the mass, which fires with a force of 1 newton for 1 second and then is off for 1 second, and so on. We want to find the steady periodic solution.  The equation is, therefore, where is the step function extended periodically. We write We compute So   We want to try Once we plug into the differential equation , it is clear that for as there are no corresponding terms in the series for . Similarly for even. Hence we try We plug into the differential equation and obtain So , for even , and for odd we get   The steady periodic solution has the Fourier series We know this is the steady periodic solution as it contains no terms of the complementary solution and it is periodic with the same period as itself. See for the plot of this solution.   Plot of the steady periodic solution .     "
},
{
  "id": "appoffourier_section-4-5",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-4-5",
  "type": "Example",
  "number": "5.5.2",
  "title": "",
  "body": "  We want to solve the equation where extended periodically. We note that     Compute the Fourier series of to verify the equation above.    As , the solution to is for some particular solution .  If we just try an given as a Fourier series with as usual, the complementary equation, , eats our harmonic. That is, the term with is already in in our complementary solution. Therefore, we pull that term out and multiply it by . We also add a cosine term to get everything right. That is, we try Let us compute the second derivative. We now plug into the left-hand side of the differential equation. We simplify, This series has to equal to the series for . We equate the coefficients and solve for and .   That is,    "
},
{
  "id": "appoffourier_section-5-2",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-2",
  "type": "Exercise",
  "number": "5.5.2",
  "title": "",
  "body": "  Let . Find the steady periodic solution to . Express your solution as a Fourier series.   "
},
{
  "id": "appoffourier_section-5-3",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-3",
  "type": "Exercise",
  "number": "5.5.3",
  "title": "",
  "body": "  Let . Find the steady periodic solution to . Express your solution as a Fourier series.   "
},
{
  "id": "appoffourier_section-5-4",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-4",
  "type": "Exercise",
  "number": "5.5.4",
  "title": "",
  "body": "  Let . Find the steady periodic solution to . Express your solution as a Fourier series.   "
},
{
  "id": "appoffourier_section-5-5",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-5",
  "type": "Exercise",
  "number": "5.5.5",
  "title": "",
  "body": "  Let for and extended periodically. Find the steady periodic solution to . Express your solution as a series.   "
},
{
  "id": "appoffourier_section-5-6",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-6",
  "type": "Exercise",
  "number": "5.5.6",
  "title": "",
  "body": "  Let for and extended periodically. Find the steady periodic solution to . Express your solution as a series.   "
},
{
  "id": "appoffourier_section-5-7",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-7",
  "type": "Exercise",
  "number": "5.5.7",
  "title": "",
  "body": "  Let . Find the steady periodic solution to . Express your solution as a Fourier series.        "
},
{
  "id": "appoffourier_section-5-8",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-8",
  "type": "Exercise",
  "number": "5.5.8",
  "title": "",
  "body": "  Let . Find the steady periodic solution to . Express your solution as a Fourier series.        "
},
{
  "id": "appoffourier_section-5-9",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-9",
  "type": "Exercise",
  "number": "5.5.9",
  "title": "",
  "body": "  Let for extended periodically. Find the steady periodic solution to . Express your solution as a series.        "
},
{
  "id": "appoffourier_section-5-10",
  "level": "2",
  "url": "appoffourier_section.html#appoffourier_section-5-10",
  "type": "Exercise",
  "number": "5.5.10",
  "title": "",
  "body": "  Let for extended periodically. Find the steady periodic solution to . Express your solution as a series.        "
},
{
  "id": "heateq_section",
  "level": "1",
  "url": "heateq_section.html",
  "type": "Section",
  "number": "5.6",
  "title": "PDEs, separation of variables, and the heat equation",
  "body": " PDEs, separation of variables, and the heat equation   Let us recall that a partial differential equation partial differential equation or PDE PDE is an equation containing the partial derivatives with respect to several independent variables. Solving PDEs will be our main application of Fourier series.  A PDE is said to be linear linear PDE if the dependent variable and its derivatives appear at most to the first power and in no functions. We will only talk about linear PDEs. Together with a PDE, we usually specify some boundary conditions boundary conditions for a PDE , where the value of the solution or its derivatives is given along the boundary of a region, and\/or some initial conditions initial conditions for a PDE where the value of the solution or its derivatives is given for some initial time. Sometimes such conditions are mixed together and we will refer to them simply as side conditions side conditions for a PDE .  We will study three specific partial differential equations, each one representing a general class of equations. First, we will study the heat equation heat equation , which is an example of a parabolic PDE parabolic PDE . Next, we will study the wave equation wave equation , which is an example of a hyperbolic PDE hyperbolic PDE . Finally, we will study the Laplace equation Laplace equation , which is an example of an elliptic PDE elliptic PDE . Each of our examples will illustrate behavior that is typical for the whole class.    Heat on an insulated wire  Let us start with the heat equation. Consider a wire (or a thin metal rod) of length that is insulated except at the endpoints. Let denote the position along the wire and let denote time. See .   Insulated wire.    Let denote the temperature at point at time . The equation governing this setup is the so-called one-dimensional heat equation one-dimensional heat equation heat equation : where is a constant (the thermal conductivity thermal conductivity of the material). That is, the change in heat at a specific point is proportional to the second derivative of the heat along the wire. This makes sense; if at a fixed the graph of the heat distribution has a maximum (the graph is concave down), then heat flows away from the maximum. And vice versa.  We generally use a more convenient notation for partial derivatives. We write instead of , and we write instead of . With this notation the heat equation becomes   For the heat equation, we must also have some boundary conditions. We assume that the ends of the wire are either exposed and touching some body of constant heat, or the ends are insulated. If the ends of the wire are kept at temperature 0, then the conditions are If, on the other hand, the ends are also insulated, the conditions are Let us see why that is so. If is positive at some point , then at a particular time, is smaller to the left of , and higher to the right of . Heat is flowing from high heat to low heat, that is to the left. On the other hand if is negative then heat is again flowing from high heat to low heat, that is to the right. So when is zero, that is a point through which heat is not flowing. In other words, means no heat is flowing in or out of the wire at the point .  We have two conditions along the -axis as there are two derivatives in the direction. These side conditions are said to be homogeneous homogeneous side conditions (i.e., or a derivative of is set to zero).  We also need an initial condition—the temperature distribution at time . That is, for some known function . This initial condition is not a homogeneous side condition.    Separation of variables  The heat equation is linear as and its derivatives do not appear to any powers or in any functions. Thus the principle of superposition superposition still applies for the heat equation (without side conditions): If and are solutions and , are constants, then is also a solution.    Verify the principle of superposition for the heat equation.    Superposition preserves some of the side conditions. In particular, if and are solutions that satisfy and , and , are constants, then is still a solution that satisfies and . Similarly for the side conditions and . In general, superposition preserves all homogeneous side conditions.  The method of separation of variables separation of variables is to try to find solutions that are products of functions of one variable. For the heat equation, we try to find solutions of the form That the desired solution we are looking for is of this form is too much to hope for. What is perfectly reasonable to ask, however, is to find enough building-block solutions of the form using this procedure so that the desired solution to the PDE is somehow constructed from these building blocks by the use of superposition.  Let us try to solve the heat equation We guess . We will try to make this guess satisfy the differential equation, , and the homogeneous side conditions, and . Then, as superposition preserves the differential equation and the homogeneous side conditions, we will try to build up a solution from these building blocks to solve the nonhomogeneous initial condition .  First we plug into the heat equation to obtain We rewrite as This equation must hold for all and all . But the left-hand side does not depend on and the right-hand side does not depend on . Hence, each side must be a constant. Let us call this constant (the minus sign is for convenience later). We obtain the two equations In other words, The boundary condition implies . We are looking for a nontrivial solution and so we can assume that is not identically zero. Hence . Similarly, implies . We are looking for nontrivial solutions of the eigenvalue problem , , . We have previously found that the only eigenvalues are , for integers , where eigenfunctions are . Hence, let us pick the solutions The corresponding must satisfy the equation This is one of our fundamental equations , and the solution is just an exponential: It will be useful to note that . Our building-block solutions are   We note that . Let us write as the sine series That is, we find the Fourier series of the odd periodic extension of . We used the sine series as it corresponds to the eigenvalue problem for above. Finally, we use superposition to write the solution as   Why does this solution work? First note that it is a solution to the heat equation by superposition. It satisfies and , because or makes all the sines vanish. Finally, plugging in , we notice that and so     Consider an insulated wire of length 1 whose ends are embedded in ice (temperature 0). Let and let the initial heat distribution be . See . Suppose we want to find the temperature function . Let us also suppose we want to find when (at what ) does the maximum temperature in the wire drop to one half of the initial maximum of 12.5.   Initial distribution of temperature in the wire.    We are solving the following PDE problem: We write for as a sine series. That is, where   The solution , plotted in for , is given by the series:    Plot of the temperature of the wire at position at time .    Finally, let us answer the question about the maximum temperature. It is relatively easy to see that the maximum temperature at any fixed time is always at , in the middle of the wire. The plot of confirms this intuition. If we plug in , we get For and higher (remember is only odd), the terms of the series are insignificant compared to the first term. The first term in the series is already a very good approximation of the function. Hence The approximation gets better and better as gets larger as the other terms decay much faster. Let us plot the function , the temperature at the midpoint of the wire at time , in . The figure also plots the approximation by the first term.   Temperature at the midpoint of the wire (the bottom curve), and the approximation of this temperature by using only the first term in the series (top curve).    After or so it would be hard to tell the difference between the first term of the series for and the real solution . This behavior is a general feature of solving the heat equation. If you are interested in behavior for large enough , only the first one or two terms may be necessary.  Let us get back to the question of when is the maximum temperature one half of the initial maximum temperature. That is, when is the temperature at the midpoint . We notice on the graph that if we use the approximation by the first term we will be close enough. We solve That is, So the maximum temperature drops to half at about .    We mention an interesting behavior of the solution to the heat equation. The heat equation smoothes out the function as grows. For a fixed , the solution is a Fourier series with coefficients . If , then these coefficients go to zero faster than any for any power . In other words, the Fourier series has infinitely many derivatives everywhere. Thus even if the function has jumps and corners, then for a fixed , the solution as a function of is as smooth as we want it to be.    When the initial condition is already a sine series, then there is no need to compute anything, you just need to plug in. Consider The solution is then       Insulated ends  Now suppose the ends of the wire are insulated. In this case, we are solving the equation Yet again we try a solution of the form . By the same procedure as before we plug into the heat equation and arrive at the following two equations At this point the story changes slightly. The boundary condition implies . Hence . Similarly, implies . We are looking for nontrivial solutions of the eigenvalue problem , , . We have previously found that the only eigenvalues are , for integers , where eigenfunctions are (we include the constant eigenfunction). Hence, let us pick solutions The corresponding must satisfy the equation For , as before, For , we have and hence . Our building-block solutions are and   We note that . Let us write using the cosine series That is, we find the Fourier series of the even periodic extension of .  We use superposition to write the solution as     Let us try the same equation as before, but for insulated ends. We are solving the following PDE problem   For this problem, we must find the cosine series of . For we have The calculation is left to the reader. Hence, the solution to the PDE problem, plotted in , is given by the series    Plot of the temperature of the insulated wire at position at time .    Note in the graph that as time goes on, the temperature evens out across the wire. Eventually, all the terms except the constant die out, and you will be left with a uniform temperature of along the entire length of the wire.    Let us expand on the last point. The constant term in the series is In other words, is the average value of , that is, the average of the initial temperature. As the wire is insulated everywhere, no heat can get out, no heat can get in. So the temperature tries to distribute evenly over time, and the average temperature must always be the same, in particular it is always . As time goes to infinity, the temperature goes to the constant everywhere.    Exercises    Consider a wire of length 2, with and an initial temperature distribution . Both ends are embedded in ice (temperature 0). Find the solution as a series.      Find a series solution of       Find a series solution of       Find a series solution of       Find a series solution of Hint: Use the fact that is a solution satisfying , , . Then use superposition.      Find the steady state temperature steady state temperature solution as a function of alone, by letting in the solution from exercises and . Verify that it satisfies the equation .      Use separation variables to find a nontrivial solution to , where and . Hint: Try .       (challenging) Suppose that one end of the wire is insulated (say at ) and the other end is kept at zero temperature. That is, find a series solution of Express any coefficients in the series by integrals of .       (challenging) Suppose that the wire is circular and insulated, so there are no ends. You can think of this as simply connecting the two ends and making sure the solution matches up at the ends. That is, find a series solution of Express any coefficients in the series by integrals of .      Consider a wire insulated on both ends, , , and .    Find the solution . Hint: a trig identity.    Find the average temperature.    Initially the temperature variation is 1 (maximum minus the minimum). Find the time when the variation is .        Find a series solution of            Find a series solution of            Use separation of variables to find a nontrivial solution to .     for some       Use separation of variables to find a nontrivial solution to . Hint: Try .           Suppose that the temperature on the wire is fixed at at the ends, , , and .    What is the temperature at at any time.    What is the maximum and the minimum temperature on the wire at .    At what time is the maximum temperature on the wire exactly one half of the initial maximum at .      a) , b) minimum , maximum , c) .     "
},
{
  "id": "heat_wirefig",
  "level": "2",
  "url": "heateq_section.html#heat_wirefig",
  "type": "Figure",
  "number": "5.39",
  "title": "",
  "body": " Insulated wire.   "
},
{
  "id": "heateq_section-4-3",
  "level": "2",
  "url": "heateq_section.html#heateq_section-4-3",
  "type": "Exercise",
  "number": "5.6.1",
  "title": "",
  "body": "  Verify the principle of superposition for the heat equation.   "
},
{
  "id": "heateq_section-4-10",
  "level": "2",
  "url": "heateq_section.html#heateq_section-4-10",
  "type": "Example",
  "number": "5.6.1",
  "title": "",
  "body": "  Consider an insulated wire of length 1 whose ends are embedded in ice (temperature 0). Let and let the initial heat distribution be . See . Suppose we want to find the temperature function . Let us also suppose we want to find when (at what ) does the maximum temperature in the wire drop to one half of the initial maximum of 12.5.   Initial distribution of temperature in the wire.    We are solving the following PDE problem: We write for as a sine series. That is, where   The solution , plotted in for , is given by the series:    Plot of the temperature of the wire at position at time .    Finally, let us answer the question about the maximum temperature. It is relatively easy to see that the maximum temperature at any fixed time is always at , in the middle of the wire. The plot of confirms this intuition. If we plug in , we get For and higher (remember is only odd), the terms of the series are insignificant compared to the first term. The first term in the series is already a very good approximation of the function. Hence The approximation gets better and better as gets larger as the other terms decay much faster. Let us plot the function , the temperature at the midpoint of the wire at time , in . The figure also plots the approximation by the first term.   Temperature at the midpoint of the wire (the bottom curve), and the approximation of this temperature by using only the first term in the series (top curve).    After or so it would be hard to tell the difference between the first term of the series for and the real solution . This behavior is a general feature of solving the heat equation. If you are interested in behavior for large enough , only the first one or two terms may be necessary.  Let us get back to the question of when is the maximum temperature one half of the initial maximum temperature. That is, when is the temperature at the midpoint . We notice on the graph that if we use the approximation by the first term we will be close enough. We solve That is, So the maximum temperature drops to half at about .   "
},
{
  "id": "heateq_section-4-12",
  "level": "2",
  "url": "heateq_section.html#heateq_section-4-12",
  "type": "Example",
  "number": "5.6.2",
  "title": "",
  "body": "  When the initial condition is already a sine series, then there is no need to compute anything, you just need to plug in. Consider The solution is then    "
},
{
  "id": "heateq_section-5-5",
  "level": "2",
  "url": "heateq_section.html#heateq_section-5-5",
  "type": "Example",
  "number": "5.6.3",
  "title": "",
  "body": "  Let us try the same equation as before, but for insulated ends. We are solving the following PDE problem   For this problem, we must find the cosine series of . For we have The calculation is left to the reader. Hence, the solution to the PDE problem, plotted in , is given by the series    Plot of the temperature of the insulated wire at position at time .    Note in the graph that as time goes on, the temperature evens out across the wire. Eventually, all the terms except the constant die out, and you will be left with a uniform temperature of along the entire length of the wire.   "
},
{
  "id": "heateq_section-6-2",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-2",
  "type": "Exercise",
  "number": "5.6.2",
  "title": "",
  "body": "  Consider a wire of length 2, with and an initial temperature distribution . Both ends are embedded in ice (temperature 0). Find the solution as a series.   "
},
{
  "id": "heateq_section-6-3",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-3",
  "type": "Exercise",
  "number": "5.6.3",
  "title": "",
  "body": "  Find a series solution of    "
},
{
  "id": "heateq_section-6-4",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-4",
  "type": "Exercise",
  "number": "5.6.4",
  "title": "",
  "body": "  Find a series solution of    "
},
{
  "id": "heat_cosexr",
  "level": "2",
  "url": "heateq_section.html#heat_cosexr",
  "type": "Exercise",
  "number": "5.6.5",
  "title": "",
  "body": "  Find a series solution of    "
},
{
  "id": "heat_oneto100exr",
  "level": "2",
  "url": "heateq_section.html#heat_oneto100exr",
  "type": "Exercise",
  "number": "5.6.6",
  "title": "",
  "body": "  Find a series solution of Hint: Use the fact that is a solution satisfying , , . Then use superposition.   "
},
{
  "id": "heateq_section-6-7",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-7",
  "type": "Exercise",
  "number": "5.6.7",
  "title": "",
  "body": "  Find the steady state temperature steady state temperature solution as a function of alone, by letting in the solution from exercises and . Verify that it satisfies the equation .   "
},
{
  "id": "heateq_section-6-8",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-8",
  "type": "Exercise",
  "number": "5.6.8",
  "title": "",
  "body": "  Use separation variables to find a nontrivial solution to , where and . Hint: Try .   "
},
{
  "id": "heateq_section-6-9",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-9",
  "type": "Exercise",
  "number": "5.6.9",
  "title": "",
  "body": "   (challenging) Suppose that one end of the wire is insulated (say at ) and the other end is kept at zero temperature. That is, find a series solution of Express any coefficients in the series by integrals of .   "
},
{
  "id": "heateq_section-6-10",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-10",
  "type": "Exercise",
  "number": "5.6.10",
  "title": "",
  "body": "   (challenging) Suppose that the wire is circular and insulated, so there are no ends. You can think of this as simply connecting the two ends and making sure the solution matches up at the ends. That is, find a series solution of Express any coefficients in the series by integrals of .   "
},
{
  "id": "heateq_section-6-11",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-11",
  "type": "Exercise",
  "number": "5.6.11",
  "title": "",
  "body": "  Consider a wire insulated on both ends, , , and .    Find the solution . Hint: a trig identity.    Find the average temperature.    Initially the temperature variation is 1 (maximum minus the minimum). Find the time when the variation is .     "
},
{
  "id": "heateq_section-6-12",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-12",
  "type": "Exercise",
  "number": "5.6.101",
  "title": "",
  "body": "  Find a series solution of         "
},
{
  "id": "heateq_section-6-13",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-13",
  "type": "Exercise",
  "number": "5.6.102",
  "title": "",
  "body": "  Find a series solution of         "
},
{
  "id": "heateq_section-6-14",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-14",
  "type": "Exercise",
  "number": "5.6.103",
  "title": "",
  "body": "  Use separation of variables to find a nontrivial solution to .     for some    "
},
{
  "id": "heateq_section-6-15",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-15",
  "type": "Exercise",
  "number": "5.6.104",
  "title": "",
  "body": "  Use separation of variables to find a nontrivial solution to . Hint: Try .        "
},
{
  "id": "heateq_section-6-16",
  "level": "2",
  "url": "heateq_section.html#heateq_section-6-16",
  "type": "Exercise",
  "number": "5.6.105",
  "title": "",
  "body": "  Suppose that the temperature on the wire is fixed at at the ends, , , and .    What is the temperature at at any time.    What is the maximum and the minimum temperature on the wire at .    At what time is the maximum temperature on the wire exactly one half of the initial maximum at .      a) , b) minimum , maximum , c) .   "
},
{
  "id": "we_section",
  "level": "1",
  "url": "we_section.html",
  "type": "Section",
  "number": "5.7",
  "title": "One-dimensional wave equation",
  "body": " One-dimensional wave equation   Imagine we have a tensioned guitar string of length . Let us only consider vibrations in one direction. Let denote the position along the string, let denote time, and let denote the displacement of the string from the rest position. See .   Vibrating string of length , is position, is displacement.    The equation that governs this setup is the so-called one-dimensional wave equation one-dimensional wave equation wave equation : for some constant . The intuition is similar to the heat equation, replacing velocity with acceleration: the acceleration at a specific point is proportional to the second derivative of the shape of the string. In other words when the string is concave down then is negative and the string wants to accelerate downwards, so should be negative. And vice versa. The wave equation is an example of a hyperbolic PDE.  Assume that the ends of the string are fixed in place as on the guitar: Note that we have two conditions along the -axis as there are two derivatives in the direction.  There are also two derivatives along the direction and hence we need two further conditions here. We need to know the initial position and the initial velocity of the string. That is, for some known functions and , we impose   The equation is linear, so superposition works just as it did for the heat equation. And again we will use separation of variables to find enough building-block solutions to get the overall solution. There is one change however. It will be easier to solve two separate problems and add their solutions.  The two problems we will solve are and   The principle of superposition implies that solves the wave equation and furthermore and . Hence, is a solution to   The reason for all this complexity is that superposition only works for homogeneous conditions such as , , or . Therefore, we can use separation of variables to find many building-block solutions solving all the homogeneous conditions. We can then use them to construct a solution satisfying the remaining nonhomogeneous condition.  Let us start with . We try a solution of the form again. We plug into the wave equation to obtain Rewriting we get Again, left-hand side depends only on and the right-hand side depends only on . So both sides equal a constant, which we denote by : We solve to get two ordinary differential equations The conditions implies and implies that . Therefore, the only nontrivial solutions for the first equation are when and they are The general solution for for this particular is We also have the condition that or . This implies that , which in turn forces . It is convenient to pick (you will see why in a moment) and hence Our building-block solutions are We differentiate in : Hence, We expand in terms of these sines as Using superposition we write the solution to as a series     Check that and .    We solve similarly. We again try . The procedure works exactly the same at first. We obtain and the conditions , . So again and This time the condition on is . Thus we get that and we take Our building-block solution is As , we expand in terms of these sines as And we write down the solution to as a series     Fill in the details in the derivation of the solution of . Check that the solution satisfies all the side conditions.    Putting these two solutions together, let us state the result as a theorem.    Take the equation where Then the solution can be written as a sum of the solutions of and :       Consider a string of length 2 plucked in the middle, it has an initial shape given in . That is,    Initial shape of a plucked string from \\exampleref{example:pluckedstring}.    Let the string start at rest ( ), and let for simplicity. In other words, we wish to solve the problem:   We leave it to the reader to compute the sine series of . The series will be Note that is the sequence for . Therefore, The solution is given by   See for a plot for . Notice that unlike the heat equation, the solution does not become smoother, the sharp edges remain. We will see the reason for this behavior in the next section where we derive the solution to the wave equation in a different way.   Shape of the plucked string for .    Make sure you understand what the plot, such as the one in the figure, is telling you. For each fixed , you can think of the function as just a function of . This function gives you the shape of the string at time . See for plots of at as a function of at several different values of . On this plot you can see the sharp edges remaining much better.   Plucked string for , , , and .       One thing to take away from all this is how a guitar sounds. Notice that the (angular) frequencies that come up in the solution are . That is, there is a certain base fundamental frequency fundamental frequency  , and then we also get all the multiples of this frequency, which in music are called the overtones overtones . Which overtones appear and with what amplitude is what musicians call the timbre timbre of the note. Mathematicians usually call this the spectrum spectrum . Because all the frequencies are multiples of one frequency (the fundamental) we get a nice pleasing sound.  The fundamental frequency increases as we decrease length . That is, if we place a finger on the fingerboard and then pluck a string we get a higher note. The constant is given by where is tension and is the linear density of the string. Tightening the string (turning the tuning peg on a guitar) increases and hence produces a higher fundamental frequency (a higher note). On the other hand using a heavier string reduces and produces a lower fundamental frequency (a lower note). A bass guitar has longer thicker strings, while a ukulele has short strings made of lighter material.  Something rather interesting is the almost symmetry between space and time. In its simplest form we see this symmetry in the solutions Except for the , time and space are just the same.  In general, the solution for a fixed is a Fourier series in , for a fixed it is a Fourier series in , and the coefficients are related. If the shape or the initial velocity have lots of corners, then the sound wave will have lots of corners. That is because the Fourier coefficients of the initial shape decay to zero (as ) at the same rate as the Fourier coefficients of the wave in time (for some fixed ). So if you use a sharp object to pick the string, you get a sharper sound with lots of high frequency components, while if you use your thumb, you get a softer sound without so many high overtones. Similarly if you pluck close to the bridge, you are getting a pluck that looks more like the sawtooth, and you get an even sharper sound.  In fact, if you look at the formula for the solution, you see that for any fixed we get an almost arbitrary Fourier series in , everything except the constant term. You can essentially obtain any sound you want by plucking the string in just the right way. Of course we are considering an ideal string of no stiffness and no air resistance. Those variables clearly impact the sound as well.    Exercises    Solve       Solve       Derive the solution for a general plucked string of length and any constant (in the equation ), where we raise the string some distance at the midpoint and let go.      Imagine that a stringed musical instrument falls on the floor. Suppose that the length of the string is 1 and . When the musical instrument hits the ground the string was in rest position and hence . However, the string was moving at some velocity at impact ( ), say . Find the solution for the shape of the string at time .       (challenging) Suppose that you have a vibrating string and that there is air resistance proportional to the velocity. That is, you have Suppose that . Derive a series solution to the problem. Any coefficients in the series should be expressed as integrals of .      Suppose you touch the guitar string exactly in the middle to ensure another condition for all time. Which multiples of the fundamental frequency show up in the solution?      Solve            Solve            Solve            Let's see what happens when . Find a solution to , , , .          "
},
{
  "id": "we_vibstrfig",
  "level": "2",
  "url": "we_section.html#we_vibstrfig",
  "type": "Figure",
  "number": "5.44",
  "title": "",
  "body": " Vibrating string of length , is position, is displacement.   "
},
{
  "id": "we_section-2-11",
  "level": "2",
  "url": "we_section.html#we_section-2-11",
  "type": "Exercise",
  "number": "5.7.1",
  "title": "",
  "body": "  Check that and .   "
},
{
  "id": "we_section-2-13",
  "level": "2",
  "url": "we_section.html#we_section-2-13",
  "type": "Exercise",
  "number": "5.7.2",
  "title": "",
  "body": "  Fill in the details in the derivation of the solution of . Check that the solution satisfies all the side conditions.   "
},
{
  "id": "we_section-2-15",
  "level": "2",
  "url": "we_section.html#we_section-2-15",
  "type": "Theorem",
  "number": "5.7.1",
  "title": "",
  "body": "  Take the equation where Then the solution can be written as a sum of the solutions of and :    "
},
{
  "id": "example_pluckedstring",
  "level": "2",
  "url": "we_section.html#example_pluckedstring",
  "type": "Example",
  "number": "5.7.1",
  "title": "",
  "body": "  Consider a string of length 2 plucked in the middle, it has an initial shape given in . That is,    Initial shape of a plucked string from \\exampleref{example:pluckedstring}.    Let the string start at rest ( ), and let for simplicity. In other words, we wish to solve the problem:   We leave it to the reader to compute the sine series of . The series will be Note that is the sequence for . Therefore, The solution is given by   See for a plot for . Notice that unlike the heat equation, the solution does not become smoother, the sharp edges remain. We will see the reason for this behavior in the next section where we derive the solution to the wave equation in a different way.   Shape of the plucked string for .    Make sure you understand what the plot, such as the one in the figure, is telling you. For each fixed , you can think of the function as just a function of . This function gives you the shape of the string at time . See for plots of at as a function of at several different values of . On this plot you can see the sharp edges remaining much better.   Plucked string for , , , and .      "
},
{
  "id": "we_section-3-2",
  "level": "2",
  "url": "we_section.html#we_section-3-2",
  "type": "Exercise",
  "number": "5.7.3",
  "title": "",
  "body": "  Solve    "
},
{
  "id": "we_section-3-3",
  "level": "2",
  "url": "we_section.html#we_section-3-3",
  "type": "Exercise",
  "number": "5.7.4",
  "title": "",
  "body": "  Solve    "
},
{
  "id": "we_section-3-4",
  "level": "2",
  "url": "we_section.html#we_section-3-4",
  "type": "Exercise",
  "number": "5.7.5",
  "title": "",
  "body": "  Derive the solution for a general plucked string of length and any constant (in the equation ), where we raise the string some distance at the midpoint and let go.   "
},
{
  "id": "we_section-3-5",
  "level": "2",
  "url": "we_section.html#we_section-3-5",
  "type": "Exercise",
  "number": "5.7.6",
  "title": "",
  "body": "  Imagine that a stringed musical instrument falls on the floor. Suppose that the length of the string is 1 and . When the musical instrument hits the ground the string was in rest position and hence . However, the string was moving at some velocity at impact ( ), say . Find the solution for the shape of the string at time .   "
},
{
  "id": "we_section-3-6",
  "level": "2",
  "url": "we_section.html#we_section-3-6",
  "type": "Exercise",
  "number": "5.7.7",
  "title": "",
  "body": "   (challenging) Suppose that you have a vibrating string and that there is air resistance proportional to the velocity. That is, you have Suppose that . Derive a series solution to the problem. Any coefficients in the series should be expressed as integrals of .   "
},
{
  "id": "we_section-3-7",
  "level": "2",
  "url": "we_section.html#we_section-3-7",
  "type": "Exercise",
  "number": "5.7.8",
  "title": "",
  "body": "  Suppose you touch the guitar string exactly in the middle to ensure another condition for all time. Which multiples of the fundamental frequency show up in the solution?   "
},
{
  "id": "we_section-3-8",
  "level": "2",
  "url": "we_section.html#we_section-3-8",
  "type": "Exercise",
  "number": "5.7.101",
  "title": "",
  "body": "  Solve         "
},
{
  "id": "we_section-3-9",
  "level": "2",
  "url": "we_section.html#we_section-3-9",
  "type": "Exercise",
  "number": "5.7.102",
  "title": "",
  "body": "  Solve         "
},
{
  "id": "we_section-3-10",
  "level": "2",
  "url": "we_section.html#we_section-3-10",
  "type": "Exercise",
  "number": "5.7.103",
  "title": "",
  "body": "  Solve         "
},
{
  "id": "we_section-3-11",
  "level": "2",
  "url": "we_section.html#we_section-3-11",
  "type": "Exercise",
  "number": "5.7.104",
  "title": "",
  "body": "  Let's see what happens when . Find a solution to , , , .        "
},
{
  "id": "dalemb_section",
  "level": "1",
  "url": "dalemb_section.html",
  "type": "Section",
  "number": "5.8",
  "title": "D’Alembert solution of the wave equation",
  "body": " D'Alembert solution of the wave equation   We have solved the wave equation by using Fourier series. But it is often more convenient to use the so-called d'Alembert solution to the wave equation d'Alembert solution to the wave equation Named after the French mathematician Jean le Rond d'Alembert (1717–1783). . While this solution can be derived using Fourier series as well, it is really an awkward use of those concepts. It is easier and more instructive to derive this solution by making a correct change of variables to get an equation that can be solved by simple integration.  Suppose we wish to solve the wave equation wave equation  subject to the side conditions     Change of variables  We will transform the equation into a simpler form where it can be solved by simple integration. We change variables to , . The chain rule says: We compute In the computations above, we used the fact from calculus that . We plug what we got into the wave equation, Therefore, the wave equation transforms into . It is easy to find the general solution to this equation by integrating twice. Keeping constant, we integrate with respect to first There is nothing special about , you can integrate with first, if you wish. and notice that the constant of integration depends on ; for each we might get a different constant of integration. We get . Next, we integrate with respect to and notice that the constant of integration depends on . Thus, . The solution must, therefore, be of the following form for some functions and : The solution is a superposition of two functions (waves) traveling at speed in opposite directions. The coordinates and are called the characteristic coordinates characteristic coordinates , and a similar technique can be applied to more complicated hyperbolic PDE. And in fact, in it is used to solve first order linear PDE. Basically, to solve the wave equation (or more general hyperbolic equations) we find certain characteristic curves along which the equation is really just an ODE, or a pair of ODEs. In this case these are the curves where and are constant.    D'Alembert's formula  We know what any solution must look like, but we need to solve for the given side conditions. We will just give the formula and see that it works. First let denote the odd periodic extension of , and let denote the odd periodic extension of . Define We claim this and give the solution. Explicitly, the solution is or in other words:   Let us check that the d'Alembert formula really works. So far so good. Assume for simplicity is differentiable. And we use the first form of as it is easier to differentiate. By the fundamental theorem of calculus we have So Yay! We're smoking now. OK, now the boundary conditions. Note that and are odd. So Now is odd and -periodic, so Next, is odd and -periodic, so we change variables . We then notice that , so is odd as a function of : Hence And voilà, it works.    D'Alembert says that the solution is a superposition of two functions (waves) moving in the opposite direction at speed  . To get an idea of how it works, let us work out an example. Consider the simpler setup Here is an impulse of height 1 centered at : The graph of this impulse is the top left plot in .  Let be the odd periodic extension of . Then says that the solution is It is not hard to compute specific values of . For example, to compute we notice and . Now and . Hence . As you can see the d'Alembert solution is much easier to actually compute and to plot than the Fourier series solution. See for plots of the solution for several different .   Plot of the d'Alembert solution for , , , and .         Another way to solve for the side conditions  It is perhaps easier and more useful to memorize the procedure rather than the formula itself. The important thing to remember is that a solution to the wave equation is a superposition of two waves traveling in opposite directions. That is, If you think about it, the exact formulas for and are not hard to guess once you realize what kind of side conditions is supposed to satisfy. Let us find the formula again, but slightly differently. Best approach is to do it in stages. When (and hence ) the solution is On the other hand, when (and hence ), we let The solution in this case is By superposition we get a solution for the general side conditions (when neither nor are identically zero). Do note the minus sign before the , and the in the second denominator.    Check that the new formula satisfies the side conditions .     Warning: Make sure you use the odd periodic extensions and , when you have formulas for and . The thing is, those formulas in general hold only for , and are not usually equal to and for other .    Some remarks  Let us remark that the formula is the reason why the solution of the wave equation doesn't get nicer as time goes on, that is, why in the examples where the initial conditions had corners, the solution also has corners at every time .  The corners bring us to another interesting remark. Nobody ever notices at first that our example solutions are not even differentiable (they have corners): In above, the solution is not differentiable whenever or for example. Really to be able to compute or , you need not one, but two derivatives. Fear not, we could think of a shape that is very nearly but does have two derivatives by rounding the corners a little bit, and then the solution would be very nearly and nobody would notice the switch.  One final remark is what the d'Alembert solution tells us about what part of the initial conditions influence the solution at a certain point. We can figure this out by traveling backwards along the characteristics. Let us suppose that the string is very long (perhaps infinite) for simplicity. Since the solution at time is we notice that we have only used the initial conditions in the interval . These two endpoints are called the wavefronts wavefronts , as that is where the wave front is given an initial ( ) disturbance at . So if , an observer sitting at at time has only seen the initial conditions for in the range and is blissfully unaware of anything else. This is why for example we do not know that a supernova has occurred in the universe until we see its light, millions of years from the time when it did in fact happen.    Exercises    Using the d'Alembert solution solve , , , , , and . Hint: Note that is the odd periodic extension of and .      Using the d'Alembert solution solve , , , , , and .      Take , , , , , and .    Solve using the d'Alembert formula. Hint: You can use the sine series for .    Find the solution as a function of for a fixed , , and . Do not use the sine series here.        Derive the d'Alembert solution for , , , , , and , using the Fourier series solution of the wave equation, by applying an appropriate trigonometric identity. Hint: Do it first for a single term of the Fourier series solution, in particular do it when is .      The d'Alembert solution still works if there are no boundary conditions and the initial condition is defined on the whole real line. Suppose that (for all on the real line and ), , and , where Solve using the d'Alembert solution. That is, write down a piecewise definition for the solution. Then sketch the solution for , , , and .      Using the d'Alembert solution solve , , , , , and .           Take , , , , , and . Using the d'Alembert solution find the solution at     ,     ,     .    You may have to split your answer up by cases.    a)  b)  c)       Take , , , , , and . Suppose that , , , . Using the d'Alembert solution find     ,     ,     .      a)  b)  c)      "
},
{
  "id": "dalemb_implusexample",
  "level": "2",
  "url": "dalemb_section.html#dalemb_implusexample",
  "type": "Example",
  "number": "5.8.1",
  "title": "",
  "body": "  D'Alembert says that the solution is a superposition of two functions (waves) moving in the opposite direction at speed  . To get an idea of how it works, let us work out an example. Consider the simpler setup Here is an impulse of height 1 centered at : The graph of this impulse is the top left plot in .  Let be the odd periodic extension of . Then says that the solution is It is not hard to compute specific values of . For example, to compute we notice and . Now and . Hence . As you can see the d'Alembert solution is much easier to actually compute and to plot than the Fourier series solution. See for plots of the solution for several different .   Plot of the d'Alembert solution for , , , and .      "
},
{
  "id": "dalemb_section-5-3",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-5-3",
  "type": "Exercise",
  "number": "5.8.1",
  "title": "",
  "body": "  Check that the new formula satisfies the side conditions .   "
},
{
  "id": "dalemb_section-7-2",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-2",
  "type": "Exercise",
  "number": "5.8.2",
  "title": "",
  "body": "  Using the d'Alembert solution solve , , , , , and . Hint: Note that is the odd periodic extension of and .   "
},
{
  "id": "dalemb_section-7-3",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-3",
  "type": "Exercise",
  "number": "5.8.3",
  "title": "",
  "body": "  Using the d'Alembert solution solve , , , , , and .   "
},
{
  "id": "dalemb_section-7-4",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-4",
  "type": "Exercise",
  "number": "5.8.4",
  "title": "",
  "body": "  Take , , , , , and .    Solve using the d'Alembert formula. Hint: You can use the sine series for .    Find the solution as a function of for a fixed , , and . Do not use the sine series here.     "
},
{
  "id": "dalemb_section-7-5",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-5",
  "type": "Exercise",
  "number": "5.8.5",
  "title": "",
  "body": "  Derive the d'Alembert solution for , , , , , and , using the Fourier series solution of the wave equation, by applying an appropriate trigonometric identity. Hint: Do it first for a single term of the Fourier series solution, in particular do it when is .   "
},
{
  "id": "dalemb_section-7-6",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-6",
  "type": "Exercise",
  "number": "5.8.6",
  "title": "",
  "body": "  The d'Alembert solution still works if there are no boundary conditions and the initial condition is defined on the whole real line. Suppose that (for all on the real line and ), , and , where Solve using the d'Alembert solution. That is, write down a piecewise definition for the solution. Then sketch the solution for , , , and .   "
},
{
  "id": "dalemb_section-7-7",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-7",
  "type": "Exercise",
  "number": "5.8.101",
  "title": "",
  "body": "  Using the d'Alembert solution solve , , , , , and .        "
},
{
  "id": "dalemb_section-7-8",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-8",
  "type": "Exercise",
  "number": "5.8.102",
  "title": "",
  "body": "  Take , , , , , and . Using the d'Alembert solution find the solution at     ,     ,     .    You may have to split your answer up by cases.    a)  b)  c)    "
},
{
  "id": "dalemb_section-7-9",
  "level": "2",
  "url": "dalemb_section.html#dalemb_section-7-9",
  "type": "Exercise",
  "number": "5.8.103",
  "title": "",
  "body": "  Take , , , , , and . Suppose that , , , . Using the d'Alembert solution find     ,     ,     .      a)  b)  c)    "
},
{
  "id": "dirich_section",
  "level": "1",
  "url": "dirich_section.html",
  "type": "Section",
  "number": "5.9",
  "title": "Steady state temperature and the Laplacian",
  "body": " Steady state temperature and the Laplacian   Consider an insulated wire, a plate, or a 3-dimensional object. We apply certain fixed temperatures on the ends of the wire, the edges of the plate, or on all sides of the 3-dimensional object. We wish to find out what is the steady state temperature steady state temperature distribution. That is, we wish to know what will be the temperature after long enough period of time.  We are really looking for a solution to the heat equation that is not dependent on time. Let us first solve the problem in one space variable. We are looking for a function that satisfies but such that for all and . Hence, we are looking for a function of alone that satisfies . It is easy to solve this equation by integration and we see that for some constants and .  Consider an insulated wire where we apply constant temperature at one end (say where ) and on the other end (at where is the length of the wire). Our steady state solution is This solution agrees with our common sense intuition with how the heat should be distributed in the wire. So in one dimension, the steady state solutions are basically just straight lines.  Things are more complicated in two or more space dimensions. Let us restrict to two space dimensions for simplicity. The heat equation in two space variables is or more commonly written as or . Here the and symbols mean . We will use from now on. The reason for using such a notation is that you can define to be the right thing for any number of space dimensions and then the heat equation is always . The operator is called the Laplacian Laplacian .  OK, now that we have notation out of the way, let us see what does an equation for the steady state solution look like. We are looking for a solution to that does not depend on , or in other words . Hence we are looking for a function such that This equation is called the Laplace equation Laplace equation Named after the French mathematician Pierre-Simon, marquis de Laplace (1749–1827). , and is an example of an elliptic equation. Solutions to the Laplace equation are called harmonic functions harmonic function and have many nice properties and applications far beyond the steady state heat problem.  Harmonic functions in two variables are no longer just linear (plane graphs). For example, you can check that the functions and are harmonic. However, note that if is positive, is concave up in the direction, then must be negative and must be concave down in the direction. A harmonic function can never have any hilltop or valley on the graph. This observation is consistent with our intuitive idea of steady state heat distribution; the hottest or coldest spot will not be inside.  Commonly the Laplace equation is part of a so-called Dirichlet problem Dirichlet problem Named after the German mathematician Johann Peter Gustav Lejeune Dirichlet (1805–1859). . That is, we have a region in the -plane and we specify certain values along the boundaries of the region. We then try to find a solution to the Laplace equation defined on this region such that agrees with the values we specified on the boundary.  In this section we consider a rectangular region. For simplicity we specify boundary values to be zero at 3 of the four edges and only specify an arbitrary function at one edge. As we still have the principle of superposition, we can use this simpler solution to derive the general solution for arbitrary boundary values by solving 4 different problems, one for each edge, and adding those solutions together. This setup is left as an exercise.  We wish to solve the following problem. Let and be the height and width of our rectangle, with one corner at the origin and lying in the first quadrant.      The method we apply is separation of variables. Again, we will come up with enough building-block solutions satisfying all the homogeneous boundary conditions (all conditions except ). We notice that superposition still works for the equation and all the homogeneous conditions. Therefore, we can use the Fourier series for to solve the problem as before.  We try . We plug into the equation to get We put the s on one side and the s on the other to get The left-hand side only depends on and the right-hand side only depends on . Therefore, there is some constant such that . And we get two equations Furthermore, the homogeneous boundary conditions imply that and . Taking the equation for we have already seen that we have a nontrivial solution if and only if and the solution is a multiple of For these given , the general solution for (one for each ) is We only have one condition on and hence we can pick one of or to be something convenient. It will be useful to have , so we let . Setting and solving for we get that After we plug the and we into and simplify by using the identity , we find We define . And note that satisfies – .  Observe that Suppose Then we get a solution of – of the following form. As satisfies – and any linear combination (finite or infinite) of also satisfies – , then satisfies – . By plugging in , we see satisfies as well.    Take and let . Let us compute the sine series for the function (same as the series for the square wave). For , we have Therefore the solution , see , to the corresponding Dirichlet problem is given as    Steady state temperature of a square plate, three sides held at zero and one side held at .      This scenario corresponds to the steady state temperature on a square plate of width with 3 sides held at 0 degrees and one side held at degrees. If we have arbitrary initial data on all sides, then we solve four problems, each using one piece of nonhomogeneous data. Then we use the principle of superposition to add up all four solutions to have a solution to the original problem.  A different way to visualize solutions of the Laplace equation is to take a wire and bend it so that it corresponds to the graph of the temperature above the boundary of your region. Cut a rubber sheet in the shape of your region—a square in our case—and stretch it fixing the edges of the sheet to the wire. The rubber sheet is a good approximation of the graph of the solution to the Laplace equation with the given boundary data.    Exercises    Let be the region described by and . Solve the problem       Let be the region described by and . Solve the problem       Let be the region described by and . Solve the problem for some constant . Hint: Guess, then check your intuition.      Let be the region described by and . Solve Hint: Try a solution of the form (different separation of variables).      Use the solution of to solve Hint: Use superposition.      Let be the region described by and . Solve the problem The solution should be in series form using the Fourier series coefficients of .      Let be the region described by and . Solve the problem The solution should be in series form using the Fourier series coefficients of .      Let be the region described by and . Solve the problem The solution should be in series form using the Fourier series coefficients of .      Let be the region described by and . Solve the problem Hint: Use superposition.      Let be the region described by and . Solve the problem Hint: Use superposition.       (challenging) Using only your intuition find , for the problem , where for , and for . Explain.      Let be the region described by and . Solve the problem            Let be the region described by and . Solve the problem           "
},
{
  "id": "dirich_section-2-15",
  "level": "2",
  "url": "dirich_section.html#dirich_section-2-15",
  "type": "Example",
  "number": "5.9.1",
  "title": "",
  "body": "  Take and let . Let us compute the sine series for the function (same as the series for the square wave). For , we have Therefore the solution , see , to the corresponding Dirichlet problem is given as    Steady state temperature of a square plate, three sides held at zero and one side held at .     "
},
{
  "id": "dirich_section-3-2",
  "level": "2",
  "url": "dirich_section.html#dirich_section-3-2",
  "type": "Exercise",
  "number": "5.9.1",
  "title": "",
  "body": "  Let be the region described by and . Solve the problem    "
},
{
  "id": "dirich_section-3-3",
  "level": "2",
  "url": "dirich_section.html#dirich_section-3-3",
  "type": "Exercise",
  "number": "5.9.2",
  "title": "",
  "body": "  Let be the region described by and . Solve the problem    "
},
{
  "id": "dirich_section-3-4",
  "level": "2",
  "url": "dirich_section.html#dirich_section-3-4",
  "type": "Exercise",
  "number": "5.9.3",
  "title": "",
  "body": "  Let be the region described by and . Solve the problem for some constant . Hint: Guess, then check your intuition.   "
},
{
  "id": "dirich_diffsepexr",
  "level": "2",
  "url": "dirich_section.html#dirich_diffsepexr",
  "type": "Exercise",
  "number": "5.9.4",
  "title": "",
  "body": "  Let be the region described by and . Solve Hint: Try a solution of the form (different separation of variables).   "
},
{
  "id": "dirich_section-3-6",
  "level": "2",
  "url": "dirich_section.html#dirich_section-3-6",
  "type": "Exercise",
  "number": "5.9.5",
  "title": "",
  "body": "  Use the solution of to solve Hint: Use superposition.   "
},
{
  "id": "dirich_section-3-7",
  "level": "2",
  "url": "dirich_section.html#dirich_section-3-7",
  "type": "Exercise",
  "number": "5.9.6",
  "title": "",
  "body": "  Let be the region described by and . Solve the problem The solution should be in series form using the Fourier series coefficients of .   "
},
{
  "id": "dirich_section-3-8",
  "level": "2",
  "url": "dirich_section.html#dirich_section-3-8",
  "type": "Exercise",
  "number": "5.9.7",
  "title": "",
  "body": "  Let be the region described by and . Solve the problem The solution should be in series form using the Fourier series coefficients of .   "
},
{
  "id": "dirich_section-3-9",
  "level": "2",
  "url": "dirich_section.html#dirich_section-3-9",
  "type": "Exercise",
  "number": "5.9.8",
  "title": "",
  "body": "  Let be the region described by and . Solve the problem The solution should be in series form using the Fourier series coefficients of .   "
},
{
  "id": "dirich_section-3-10",
  "level": "2",
  "url": "dirich_section.html#dirich_section-3-10",
  "type": "Exercise",
  "number": "5.9.9",
  "title": "",
  "body": "  Let be the region described by and . Solve the problem Hint: Use superposition.   "
},
{
  "id": "dirich_section-3-11",
  "level": "2",
  "url": "dirich_section.html#dirich_section-3-11",
  "type": "Exercise",
  "number": "5.9.10",
  "title": "",
  "body": "  Let be the region described by and . Solve the problem Hint: Use superposition.   "
},
{
  "id": "dirich_section-3-12",
  "level": "2",
  "url": "dirich_section.html#dirich_section-3-12",
  "type": "Exercise",
  "number": "5.9.11",
  "title": "",
  "body": "   (challenging) Using only your intuition find , for the problem , where for , and for . Explain.   "
},
{
  "id": "dirich_section-3-13",
  "level": "2",
  "url": "dirich_section.html#dirich_section-3-13",
  "type": "Exercise",
  "number": "5.9.101",
  "title": "",
  "body": "  Let be the region described by and . Solve the problem         "
},
{
  "id": "dirich_section-3-14",
  "level": "2",
  "url": "dirich_section.html#dirich_section-3-14",
  "type": "Exercise",
  "number": "5.9.102",
  "title": "",
  "body": "  Let be the region described by and . Solve the problem         "
},
{
  "id": "dirichdisc_section",
  "level": "1",
  "url": "dirichdisc_section.html",
  "type": "Section",
  "number": "5.10",
  "title": "Dirichlet problem in the circle and the Poisson kernel",
  "body": " Dirichlet problem in the circle and the Poisson kernel     Laplace in polar coordinates  A more natural setting for the Laplace equation is a circle rather than a rectangle. On the other hand, what makes the problem somewhat more difficult is that we need polar coordinates.     Recall that the polar coordinates for the -plane are : where and . So the point is distance from the origin at an angle from the positive -axis.  Now that we know our coordinates, let us give the problem we wish to solve. We have a circular region of radius 1, and we are interested in the Dirichlet problem for the Laplace equation for this region. Let denote the temperature at the point in polar coordinates.     We have the problem:   The first issue we face is that we do not know the Laplacian in polar coordinates. Normally we would find and in terms of the derivatives in and . We would need to solve for and in terms of and . In this case it is more convenient to work in reverse. We compute derivatives in and in terms of derivatives in and and then we solve. The computations are easier this way. First Next by chain rule we obtain Similarly for the derivative. Note that we have to use the product rule for the second derivative. Let us now try to solve for . We start with to get rid of those pesky . If we add and use the fact that , we get We're not quite there yet, but all we are lacking is . Adding it we obtain the Laplacian in polar coordinates Laplacian in polar coordinates :   Notice that the Laplacian in polar coordinates no longer has constant coefficients.    Series solution  Let us separate variables as usual. That is let us try . Then Let us put on one side and on the other and conclude that both sides must be constant. We get two equations: Let us first focus on . We know that ought to be -periodic in , that is, . Therefore, the solution to must be -periodic. We have seen such a problem in . We conclude that for a nonnegative integer . The equation becomes . When the equation is just , so we have the general solution . As is periodic, . For convenience we write this solution as for some constant . For positive , the solution to is for some constants and .  Next, we consider the equation for , This equation appeared in exercises before—we solved it in and . The idea is to try a solution and if that does not give us two solutions, also try a solution of the form . Let us name the solution for . When we obtain and if , we get The function must be finite at the origin, that is, when . So in both cases. Set in both cases as well; the constants in will pick up the slack so nothing is lost. Let Hence our building block solutions are Putting everything together our solution is:   We look at the boundary condition in , Therefore, to solve we expand , which is a -periodic function, as a Fourier series, and then multiply the term by . To find the and the we compute     Suppose we wish to solve   The solution is   See the plot in . The thing to notice in this example is that the effect of a high frequency is mostly felt at the boundary. In the middle of the disc, the solution is very close to zero. That is because is rather small when is close to 0.   The solution of the Dirichlet problem in the disc with as boundary data.        Let us solve a more difficult problem. Consider a long rod with circular cross section of radius 1. Suppose we wish to solve the steady state heat problem in the rod. If the rod is long enough, we simply need to solve the Laplace equation in two dimensions. Let us put the center of the rod at the origin and we have exactly the region we are currently studying—a circle of radius 1. For the boundary conditions, suppose in Cartesian coordinates and , the temperature on the boundary is 0 when , and it is when .  Let us set the problem up. As , then on the circle of radius 1, that is, where , we have . So   We must now compute the Fourier series for the boundary condition. By now the reader has plentiful experience in computing Fourier series and so we simply state that     Compute the series for and verify that it really is what we have just claimed. Hint: Be careful, make sure not to divide by zero.    We now simply write the solution (see ) by multiplying by in the right places.    The solution of the Dirichlet problem with boundary data 0 for and for .        Poisson kernel  There is another way to solve the Dirichlet problem with the help of an integral kernel. That is, we will find a function called the Poisson kernel Poisson kernel Named for the French mathematician Siméon Denis Poisson (1781–1840). such that While the integral will generally not be solvable analytically, it can be evaluated numerically. In fact, unless the boundary data is given as a Fourier series already, it may be much easier to numerically evaluate this formula as there is only one integral to evaluate.  The formula also has theoretical applications. For instance, as will have infinitely many derivatives, then via differentiating under the integral we find that the solution has infinitely many derivatives, at least when inside the circle, . By having infinitely many derivatives, what you should think of is that has no corners and all of its partial derivatives of all orders exist and also have no corners.   We will compute the formula for from the series solution, and this idea can be applied anytime you have a convenient series solution where the coefficients are obtained via integration. Hence you can apply this reasoning to obtain such integral kernels for other equations, such as the heat equation. The computation is long and tedious tedious , but not overly difficult. Since the ideas are often applied in similar contexts, it is good to understand how this computation works.  What we do is start with the series solution and replace the coefficients with the integrals that compute them. Then we try to write everything as a single integral. We must use a different dummy variable for the integration and hence we use instead of . OK, so we have what we wanted, the expression in the parentheses is the Poisson kernel, . However, we can do a lot better. It is still given as a series, and we would really like to have a nice simple expression for it. We must work a little harder. The trick is to rewrite everything in terms of complex exponentials. Let us work just on the kernel. In the expression above, we recognize the geometric series geometric series . Recall from calculus that if is a complex number where , then Note that starts at and that is why we have the in the numerator. It is the standard geometric series multiplied by . We can use , as lo and behold . Let us continue with the computation. That's a formula we can live with. The solution to the Dirichlet problem using the Poisson kernel is Sometimes the formula for the Poisson kernel is given together with the constant , in which case we should of course not leave it in front of the integral. Also, often the limits of the integral are given as 0 to ; everything inside is -periodic in , so this does not change the integral.     Let us not leave the Poisson kernel without explaining its geometric meaning. Let be the distance from to . You may recall from calculus that this distance in polar coordinates is given precisely by the square root of . That is, the Poisson kernel is really the formula   One final note we make about the formula is that it is really a weighted average of the boundary values. First let us look at what happens at the origin, that is when . So is precisely the average value of and therefore the average value of on the boundary. This is a general feature of harmonic functions, the value at some point is equal to the average of the values on a circle centered at .  What the formula says is that the value of the solution at any point in the circle is a weighted average of the boundary data . The kernel is bigger when is closer to . Therefore when computing we give more weight to the values when is closer to and less weight to the values when far from .    Exercises    Using series solve , , for .      Using series solve , for the following data. Hint: trig identities.                            Using the Poisson kernel, give the solution to , where is zero for outside the interval and is 1 for on the interval .          Draw a graph for the Poisson kernel as a function of when and .    Describe what happens to the graph when you make bigger (as it approaches 1).    Knowing that the solution is the weighted average of with Poisson kernel as the weight, explain what your answer to part b) means.        Let be the function on the boundary. Use the series solution to find a solution to the Dirichlet problem , . Now convert the solution to Cartesian coordinates and . Is this solution surprising? Hint: use your trig identities.      Carry out the computation we needed in the separation of variables and solve , for .       (challenging) Derive the series solution to the Dirichlet problem if the region is a circle of radius rather than 1. That is, solve , .       (challenging)     Find the solution for , . Write the answer in Cartesian coordinates.    Now solve , . Write the solution in Cartesian coordinates.    Suppose you have a polynomial , solve , (that is, write down the formula for the answer). Write the answer in Cartesian coordinates.    Notice the answer is again a polynomial in and . See also .      Using series solve , .           Using the series solution find the solution to , . Express the solution in Cartesian coordinates (that is, using and ).               Try and guess a solution to , . Hint: try a solution that only depends on . Also first, don't worry about the boundary condition.    Now solve , using superposition.      a) b)        (challenging) Derive the Poisson kernel solution if the region is a circle of radius rather than 1. That is, solve , .          "
},
{
  "id": "dirichdisc_section-4-5",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-4-5",
  "type": "Example",
  "number": "5.10.1",
  "title": "",
  "body": "  Suppose we wish to solve   The solution is   See the plot in . The thing to notice in this example is that the effect of a high frequency is mostly felt at the boundary. In the middle of the disc, the solution is very close to zero. That is because is rather small when is close to 0.   The solution of the Dirichlet problem in the disc with as boundary data.     "
},
{
  "id": "dirichdisc_section-4-6",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-4-6",
  "type": "Example",
  "number": "5.10.2",
  "title": "",
  "body": "  Let us solve a more difficult problem. Consider a long rod with circular cross section of radius 1. Suppose we wish to solve the steady state heat problem in the rod. If the rod is long enough, we simply need to solve the Laplace equation in two dimensions. Let us put the center of the rod at the origin and we have exactly the region we are currently studying—a circle of radius 1. For the boundary conditions, suppose in Cartesian coordinates and , the temperature on the boundary is 0 when , and it is when .  Let us set the problem up. As , then on the circle of radius 1, that is, where , we have . So   We must now compute the Fourier series for the boundary condition. By now the reader has plentiful experience in computing Fourier series and so we simply state that     Compute the series for and verify that it really is what we have just claimed. Hint: Be careful, make sure not to divide by zero.    We now simply write the solution (see ) by multiplying by in the right places.    The solution of the Dirichlet problem with boundary data 0 for and for .     "
},
{
  "id": "dirichdisc_section-6-2",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-2",
  "type": "Exercise",
  "number": "5.10.2",
  "title": "",
  "body": "  Using series solve , , for .   "
},
{
  "id": "dirichdisc_section-6-3",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-3",
  "type": "Exercise",
  "number": "5.10.3",
  "title": "",
  "body": "  Using series solve , for the following data. Hint: trig identities.                         "
},
{
  "id": "dirichdisc_section-6-4",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-4",
  "type": "Exercise",
  "number": "5.10.4",
  "title": "",
  "body": "  Using the Poisson kernel, give the solution to , where is zero for outside the interval and is 1 for on the interval .   "
},
{
  "id": "dirichdisc_section-6-5",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-5",
  "type": "Exercise",
  "number": "5.10.5",
  "title": "",
  "body": "      Draw a graph for the Poisson kernel as a function of when and .    Describe what happens to the graph when you make bigger (as it approaches 1).    Knowing that the solution is the weighted average of with Poisson kernel as the weight, explain what your answer to part b) means.     "
},
{
  "id": "exercise_dirichproblemxy",
  "level": "2",
  "url": "dirichdisc_section.html#exercise_dirichproblemxy",
  "type": "Exercise",
  "number": "5.10.6",
  "title": "",
  "body": "  Let be the function on the boundary. Use the series solution to find a solution to the Dirichlet problem , . Now convert the solution to Cartesian coordinates and . Is this solution surprising? Hint: use your trig identities.   "
},
{
  "id": "dirichdisc_section-6-7",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-7",
  "type": "Exercise",
  "number": "5.10.7",
  "title": "",
  "body": "  Carry out the computation we needed in the separation of variables and solve , for .   "
},
{
  "id": "dirichdisc_section-6-8",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-8",
  "type": "Exercise",
  "number": "5.10.8",
  "title": "",
  "body": "   (challenging) Derive the series solution to the Dirichlet problem if the region is a circle of radius rather than 1. That is, solve , .   "
},
{
  "id": "dirichdisc_section-6-9",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-9",
  "type": "Exercise",
  "number": "5.10.9",
  "title": "",
  "body": "   (challenging)     Find the solution for , . Write the answer in Cartesian coordinates.    Now solve , . Write the solution in Cartesian coordinates.    Suppose you have a polynomial , solve , (that is, write down the formula for the answer). Write the answer in Cartesian coordinates.    Notice the answer is again a polynomial in and . See also .   "
},
{
  "id": "dirichdisc_section-6-10",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-10",
  "type": "Exercise",
  "number": "5.10.101",
  "title": "",
  "body": "  Using series solve , .        "
},
{
  "id": "dirichdisc_section-6-11",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-11",
  "type": "Exercise",
  "number": "5.10.102",
  "title": "",
  "body": "  Using the series solution find the solution to , . Express the solution in Cartesian coordinates (that is, using and ).        "
},
{
  "id": "dirichdisc_section-6-12",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-12",
  "type": "Exercise",
  "number": "5.10.103",
  "title": "",
  "body": "      Try and guess a solution to , . Hint: try a solution that only depends on . Also first, don't worry about the boundary condition.    Now solve , using superposition.      a) b)    "
},
{
  "id": "dirichdisc_section-6-13",
  "level": "2",
  "url": "dirichdisc_section.html#dirichdisc_section-6-13",
  "type": "Exercise",
  "number": "5.10.104",
  "title": "",
  "body": "   (challenging) Derive the Poisson kernel solution if the region is a circle of radius rather than 1. That is, solve , .        "
},
{
  "id": "slproblems_section",
  "level": "1",
  "url": "slproblems_section.html",
  "type": "Section",
  "number": "6.1",
  "title": "Sturm–Liouville problems",
  "body": " Sturm–Liouville problems   Note: 2 lectures, §10.1 in , §11.2 in    Boundary value problems  In we encountered several different eigenvalue problems such as: with different boundary conditions Dirichlet boundary conditions Neumann boundary conditions Mixed boundary conditions  For example, these boundary problems came up in the study of the heat equation when we were trying to solve the equation by the method of separation of variables in . Dirichlet conditions correspond to applying a zero temperature at the ends, Neumann means insulating the ends, etc. Other types of endpoint conditions also arise naturally, such as the Robin boundary conditions Robin boundary conditions  for some constant . These conditions come up when the ends are immersed in some medium.  In the separation of variables computation we encountered an eigenvalue problem and found the eigenfunctions . We then found the eigenfunction decomposition eigenfunction decomposition of the initial temperature , Once we had this decomposition and found suitable such that and such that were solutions to the heat equation, we wrote the solution to the original problem, including the initial condition, as   To study more general problems with this method, we must study more general eigenvalue problems. First, we study second order linear equations of the form Essentially any second order linear equation of the form can be written as after multiplying by a proper factor.    [Bessel] Put the following equation into the form : Multiply both sides by to obtain The Bessel equation turns up for example in the solution of the two-dimensional wave equation. If you want to see how one solves the equation, you can look at .    The so-called Sturm–Liouville problem Sturm–Liouville problem Named after the French mathematicians Jacques Charles François Sturm (1803–1855) and Joseph Liouville (1809–1882). is to seek nontrivial solutions to In particular, we seek s that allow for nontrivial solutions. The s that admit nontrivial solutions are called the eigenvalues eigenvalue and the corresponding nontrivial solutions are called eigenfunctions eigenfunction . The constants and should not be both zero, same for and .    Suppose , , and are continuous on and suppose and for all in . Then the Sturm–Liouville problem has an increasing sequence of eigenvalues such that and such that to each there is (up to a constant multiple) a single eigenfunction .  Moreover, if and , then for all .    Problems satisfying the hypothesis of the theorem (including the Moreover ) are called regular Sturm–Liouville problems regular Sturm–Liouville problem Sturm–Liouville problem regular , and we will only consider such problems here. That is, a regular problem is one where , , and are continuous, , , , and , where neither and are both zero, nor and are both zero. Note: Be careful about the signs. Also be careful about the inequalities for and , they must be strict for all in the interval , including the endpoints!  When zero is an eigenvalue, we usually start labeling the eigenvalues at 0 rather than at 1 for convenience. That is we label the eigenvalues .    The problem , , , and is a regular Sturm–Liouville problem: , , , and we have and . We also have , , , . The eigenvalues are and eigenfunctions are . All eigenvalues are nonnegative as predicted by the theorem.      Find eigenvalues and eigenfunctions for Identify the . Can you use the theorem above to make the search for eigenvalues easier? Hint: Consider the condition .      Find eigenvalues and eigenfunctions of the problem   These equations give a regular Sturm–Liouville problem.    Identify in the example above.    By , . So the general solution (without boundary conditions) is   Let us see if is an eigenvalue: We must satisfy and , hence (as ). Therefore, 0 is not an eigenvalue (no nonzero solution, so no eigenfunction).  Now let us try . We plug in the boundary conditions: If , then and vice versa, hence both are nonzero. So , and . As we get or   We use a computer to find . There are tables available, though using a computer or a graphing calculator is far more convenient nowadays. Easiest method is to plot the functions and and see for which they intersect. There is an infinite number of intersections. Denote the first intersection by , the second intersection by , etc. For example, when , we get , , .... That is , , .... A plot for is given in . The appropriate eigenfunction (let for convenience, then ) is When we get (approximately)    Plot of and .        Orthogonality  We have seen the notion of orthogonality before. For example, we have shown that are orthogonal for distinct on . For general Sturm–Liouville problems we need a more general setup. Let be a weight function weight function (any function, though generally we assume it is positive) on . Two functions , are said to be orthogonal orthogonal with respect to a weight with respect to the weight function when In this setting, we define the inner product inner product of functions as and then say and are orthogonal whenever . The results and concepts are again analogous to finite-dimensional linear algebra.  The idea of the given inner product is that those where is greater have more weight. Nontrivial (nonconstant) arise naturally, for example from a change of variables. Hence, you could think of a change of variables such that .  Eigenfunctions of a regular Sturm–Liouville problem satisfy an orthogonality property, just like the eigenfunctions in . Its proof is very similar to the analogous .    Suppose we have a regular Sturm–Liouville problem Let and be two distinct eigenfunctions for two distinct eigenvalues and . Then that is, and are orthogonal with respect to the weight function .      Fredholm alternative  The Fredholm alternative theorem we talked about before ( ) holds for all regular Sturm–Liouville problems. We state it here for completeness.   Fredholm alternative  Fredholm alternative Sturm--Liouville problems   Suppose that we have a regular Sturm–Liouville problem. Then either has a nonzero solution ( is an eigenvalue), or has a unique solution for any continuous on .    This theorem is used in much the same way as we did before in . It is used when solving more general nonhomogeneous boundary value problems. The theorem does not help us solve the problem, but it tells us when a unique solution exists, so that we know when to spend time looking for it. To solve the problem we decompose and in terms of eigenfunctions of the homogeneous problem, and then solve for the coefficients of the series for .    Eigenfunction series  What we want to do with the eigenfunctions once we have them is to compute the eigenfunction decomposition eigenfunction decomposition of an arbitrary function . That is, we wish to write where are eigenfunctions. We wish to find out if we can represent any function in this way, and if so, we wish to calculate (and of course we would want to know if the sum converges). OK, so imagine we could write as . We will assume convergence and the ability to integrate the series term by term. Because of orthogonality we have Hence,   Note that are known up to a constant multiple, so we could have picked a scalar multiple of an eigenfunction such that (if we had an arbitrary eigenfunction , divide it by ). When we have the simpler form . The following theorem holds more generally, but the statement given is enough for our purposes.    Suppose is a piecewise smooth continuous function on . If are eigenfunctions of a regular Sturm–Liouville problem, one for each eigenvalue, then there exist real constants given by such that converges and holds for .      Consider The above is a regular Sturm–Liouville problem, and says that if is an eigenvalue then .  Suppose . The general solution is . We plug in the initial conditions to get , and . Hence is not an eigenvalue.  So let us consider , where the general solution is Plugging in the boundary conditions we get and . Since is zero, then cannot be zero. Hence . This means that is an odd integral multiple of , i.e. . Solving for we get We can take . Our eigenfunctions are A little bit of calculus shows   So any piecewise smooth function on can be written as where   Note that the series converges to an odd -periodic extension of . With the regular sine series we would expect a function with period .     (challenging) In the example above, the function is defined on , yet the series with respect to the eigenfunctions converges to an odd -periodic extension of . Find out how is the extension defined for .    Let us compute an example. Consider for . Some calculus later we find and so for in , This is different from the -periodic regular sine series which can be computed to be Both sums converge are equal to for , but the eigenfunctions involved come from different eigenvalue problems.      Exercises    Find eigenvalues and eigenfunctions of       Expand the function on using eigenfunctions of the system       Suppose that you had a Sturm–Liouville problem on the interval and came up with , where is some constant. Decompose , in terms of these eigenfunctions.      Find eigenvalues and eigenfunctions of This problem is not a Sturm–Liouville problem, but the idea is the same.       (more challenging) Find eigenvalues and eigenfunctions for Hint: First write the system as a constant coefficient system to find general solutions. Do note that guarantees .      Find eigenvalues and eigenfunctions of      , ,       Put the following problems into the standard form for Sturm–Liouville problems, that is, find , , , , , , and , and decide if the problems are regular or not.      for ,  ,  .      for ,  ,  . In an earlier version of this book, a typo rendered the equation as ending up with something harder than intended. Try this equation for a further challenge.       a) , , , , , , . The problem is not regular. b) , , , , , , . The problem is regular.     "
},
{
  "id": "slproblems_section-3-5",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-3-5",
  "type": "Example",
  "number": "6.1.1",
  "title": "",
  "body": "  [Bessel] Put the following equation into the form : Multiply both sides by to obtain The Bessel equation turns up for example in the solution of the two-dimensional wave equation. If you want to see how one solves the equation, you can look at .   "
},
{
  "id": "sl_slregthm",
  "level": "2",
  "url": "slproblems_section.html#sl_slregthm",
  "type": "Theorem",
  "number": "6.1.1",
  "title": "",
  "body": "  Suppose , , and are continuous on and suppose and for all in . Then the Sturm–Liouville problem has an increasing sequence of eigenvalues such that and such that to each there is (up to a constant multiple) a single eigenfunction .  Moreover, if and , then for all .   "
},
{
  "id": "slproblems_section-3-10",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-3-10",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": "  The problem , , , and is a regular Sturm–Liouville problem: , , , and we have and . We also have , , , . The eigenvalues are and eigenfunctions are . All eigenvalues are nonnegative as predicted by the theorem.   "
},
{
  "id": "slproblems_section-3-11",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-3-11",
  "type": "Exercise",
  "number": "6.1.1",
  "title": "",
  "body": "  Find eigenvalues and eigenfunctions for Identify the . Can you use the theorem above to make the search for eigenvalues easier? Hint: Consider the condition .   "
},
{
  "id": "slproblems_section-3-12",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-3-12",
  "type": "Example",
  "number": "6.1.3",
  "title": "",
  "body": "  Find eigenvalues and eigenfunctions of the problem   These equations give a regular Sturm–Liouville problem.    Identify in the example above.    By , . So the general solution (without boundary conditions) is   Let us see if is an eigenvalue: We must satisfy and , hence (as ). Therefore, 0 is not an eigenvalue (no nonzero solution, so no eigenfunction).  Now let us try . We plug in the boundary conditions: If , then and vice versa, hence both are nonzero. So , and . As we get or   We use a computer to find . There are tables available, though using a computer or a graphing calculator is far more convenient nowadays. Easiest method is to plot the functions and and see for which they intersect. There is an infinite number of intersections. Denote the first intersection by , the second intersection by , etc. For example, when , we get , , .... That is , , .... A plot for is given in . The appropriate eigenfunction (let for convenience, then ) is When we get (approximately)    Plot of and .     "
},
{
  "id": "slproblems_section-4-5",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-4-5",
  "type": "Theorem",
  "number": "6.1.2",
  "title": "",
  "body": "  Suppose we have a regular Sturm–Liouville problem Let and be two distinct eigenfunctions for two distinct eigenvalues and . Then that is, and are orthogonal with respect to the weight function .   "
},
{
  "id": "slproblems_section-5-3",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-5-3",
  "type": "Theorem",
  "number": "6.1.3",
  "title": "Fredholm alternative.",
  "body": " Fredholm alternative  Fredholm alternative Sturm--Liouville problems   Suppose that we have a regular Sturm–Liouville problem. Then either has a nonzero solution ( is an eigenvalue), or has a unique solution for any continuous on .   "
},
{
  "id": "slproblems_section-6-4",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-6-4",
  "type": "Theorem",
  "number": "6.1.4",
  "title": "",
  "body": "  Suppose is a piecewise smooth continuous function on . If are eigenfunctions of a regular Sturm–Liouville problem, one for each eigenvalue, then there exist real constants given by such that converges and holds for .   "
},
{
  "id": "slproblems_section-6-5",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-6-5",
  "type": "Example",
  "number": "6.1.4",
  "title": "",
  "body": "  Consider The above is a regular Sturm–Liouville problem, and says that if is an eigenvalue then .  Suppose . The general solution is . We plug in the initial conditions to get , and . Hence is not an eigenvalue.  So let us consider , where the general solution is Plugging in the boundary conditions we get and . Since is zero, then cannot be zero. Hence . This means that is an odd integral multiple of , i.e. . Solving for we get We can take . Our eigenfunctions are A little bit of calculus shows   So any piecewise smooth function on can be written as where   Note that the series converges to an odd -periodic extension of . With the regular sine series we would expect a function with period .     (challenging) In the example above, the function is defined on , yet the series with respect to the eigenfunctions converges to an odd -periodic extension of . Find out how is the extension defined for .    Let us compute an example. Consider for . Some calculus later we find and so for in , This is different from the -periodic regular sine series which can be computed to be Both sums converge are equal to for , but the eigenfunctions involved come from different eigenvalue problems.   "
},
{
  "id": "slproblems_section-7-2",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-2",
  "type": "Exercise",
  "number": "6.1.4",
  "title": "",
  "body": "  Find eigenvalues and eigenfunctions of    "
},
{
  "id": "slproblems_section-7-3",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-3",
  "type": "Exercise",
  "number": "6.1.5",
  "title": "",
  "body": "  Expand the function on using eigenfunctions of the system    "
},
{
  "id": "slproblems_section-7-4",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-4",
  "type": "Exercise",
  "number": "6.1.6",
  "title": "",
  "body": "  Suppose that you had a Sturm–Liouville problem on the interval and came up with , where is some constant. Decompose , in terms of these eigenfunctions.   "
},
{
  "id": "slproblems_section-7-5",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-5",
  "type": "Exercise",
  "number": "6.1.7",
  "title": "",
  "body": "  Find eigenvalues and eigenfunctions of This problem is not a Sturm–Liouville problem, but the idea is the same.   "
},
{
  "id": "slproblems_section-7-6",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-6",
  "type": "Exercise",
  "number": "6.1.8",
  "title": "",
  "body": "   (more challenging) Find eigenvalues and eigenfunctions for Hint: First write the system as a constant coefficient system to find general solutions. Do note that guarantees .   "
},
{
  "id": "slproblems_section-7-7",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-7",
  "type": "Exercise",
  "number": "6.1.101",
  "title": "",
  "body": "  Find eigenvalues and eigenfunctions of      , ,    "
},
{
  "id": "slproblems_section-7-8",
  "level": "2",
  "url": "slproblems_section.html#slproblems_section-7-8",
  "type": "Exercise",
  "number": "6.1.102",
  "title": "",
  "body": "  Put the following problems into the standard form for Sturm–Liouville problems, that is, find , , , , , , and , and decide if the problems are regular or not.      for ,  ,  .      for ,  ,  . In an earlier version of this book, a typo rendered the equation as ending up with something harder than intended. Try this equation for a further challenge.       a) , , , , , , . The problem is not regular. b) , , , , , , . The problem is regular.   "
},
{
  "id": "sec_appeig",
  "level": "1",
  "url": "sec_appeig.html",
  "type": "Section",
  "number": "6.2",
  "title": "Higher order eigenvalue problems",
  "body": " Higher order eigenvalue problems   Note: 1 lecture, §10.2 in , exercises in §11.2 in  The eigenfunction series can arise even from higher order equations. Consider an elastic beam (say made of steel). We will study the transversal vibrations of the beam. That is, suppose the beam lies along the -axis and let measure the displacement of the point on the beam at time . See .   Transversal vibrations of a beam.    The equation that governs this setup is for some constant , let us not worry about the physics If you are interested, , where is the elastic modulus, is the second moment of area of the cross section, and is linear density. .  Suppose the beam is of length 1 simply supported (hinged) at the ends. The beam is displaced by some function at time and then let go (initial velocity is 0). Then satisfies:   Again we try and plug in to get or The equations are The boundary conditions and imply The initial homogeneous condition implies As usual, we leave the nonhomogeneous for later.  Considering the equation for , that is, , and physical intuition leads us to the fact that if is an eigenvalue then : We expect vibration and not exponential growth nor decay in the direction (there is no friction in our model for instance). So there are no negative eigenvalues. Similarly is not an eigenvalue.    Justify just from the equation for and the boundary conditions.    Let , that is , to avoid writing the fourth root all the time. Notice . The general solution to is Now , . Solving, and . So Also , and . This means that and . If , then and so . Thus , otherwise is not an eigenvalue. Also, must be an integer multiple of . Hence and (as ). We can take . So the eigenvalues are and corresponding eigenfunctions are .  Now . The general solution is . But and hence . We take to make for convenience. So our solutions are .  The eigenfunctions are just the sines, so we decompose the function using the sine series. That is, we find numbers such that for , Then the solution to is The point is that is a solution that satisfies all the homogeneous conditions (all conditions except the initial position). And since , So solves .  The natural (angular) frequencies of the system are . These frequencies are all integer multiples of the fundamental frequency , so we get a nice musical note. The exact frequencies and their amplitude are what musicians call the timbre timbre of the note (outside of music it is called the spectrum).  The timbre of a beam is different than for a vibrating string where we get more of the lower frequencies since we get all integer multiples, . For a steel beam we get only the square multiples . That is why when you hit a steel beam you hear a very pure sound. The sound of a xylophone or vibraphone is, therefore, very different from a guitar or piano.    Consider . On (you know how to do this by now) Hence, the solution to with the given initial position is     There are other boundary conditions than just hinged ends. There are three basic possibilities: hinged, free, or fixed. Let us consider the end at . For the other end, it is the same idea. If the end is hinged hinged end of beam , then If the end is free free end of beam , that is, it is just floating in air, then And finally, if the end is clamped clamped end of beam or fixed fixed end of beam , for example it is welded to a wall, then     Exercises    Suppose you have a beam of length 5 with free ends. Let be the transverse deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial shape of the beam is the graph of , and the initial velocity is uniformly equal to 2 (same for each ) in the positive direction. Set up the equation together with the boundary and initial conditions. Just set up, do not solve.      Suppose you have a beam of length 5 with one end free and one end fixed (the fixed end is at ). Let be the longitudinal deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial displacement of the beam is , and the initial velocity is in the positive direction. Set up the equation together with the boundary and initial conditions. Just set up, do not solve.      Suppose the beam is units long, everything else kept the same as in . What is the equation and the series solution?      Suppose you have That is, you have also an initial velocity. Find a series solution. Hint: Use the same idea as we did for the wave equation.      Suppose you have a beam of length 1 with hinged ends. Let be the transverse deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial shape of the beam is the graph of , and the initial velocity is 0. Solve for .           Suppose you have a beam of length 10 with two fixed ends. Let be the transverse deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial shape of the beam is the graph of , and the initial velocity is uniformly equal to . Set up the equation together with the boundary and initial conditions. Just set up, do not solve.     ,  ,  ,  .     "
},
{
  "id": "appeig_transbeamfig",
  "level": "2",
  "url": "sec_appeig.html#appeig_transbeamfig",
  "type": "Figure",
  "number": "6.2",
  "title": "",
  "body": " Transversal vibrations of a beam.   "
},
{
  "id": "sec_appeig-2-8",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-2-8",
  "type": "Exercise",
  "number": "6.2.1",
  "title": "",
  "body": "  Justify just from the equation for and the boundary conditions.   "
},
{
  "id": "sec_appeig-2-14",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-2-14",
  "type": "Example",
  "number": "6.2.1",
  "title": "",
  "body": "  Consider . On (you know how to do this by now) Hence, the solution to with the given initial position is    "
},
{
  "id": "sec_appeig-3-2",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-3-2",
  "type": "Exercise",
  "number": "6.2.2",
  "title": "",
  "body": "  Suppose you have a beam of length 5 with free ends. Let be the transverse deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial shape of the beam is the graph of , and the initial velocity is uniformly equal to 2 (same for each ) in the positive direction. Set up the equation together with the boundary and initial conditions. Just set up, do not solve.   "
},
{
  "id": "sec_appeig-3-3",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-3-3",
  "type": "Exercise",
  "number": "6.2.3",
  "title": "",
  "body": "  Suppose you have a beam of length 5 with one end free and one end fixed (the fixed end is at ). Let be the longitudinal deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial displacement of the beam is , and the initial velocity is in the positive direction. Set up the equation together with the boundary and initial conditions. Just set up, do not solve.   "
},
{
  "id": "sec_appeig-3-4",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-3-4",
  "type": "Exercise",
  "number": "6.2.4",
  "title": "",
  "body": "  Suppose the beam is units long, everything else kept the same as in . What is the equation and the series solution?   "
},
{
  "id": "sec_appeig-3-5",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-3-5",
  "type": "Exercise",
  "number": "6.2.5",
  "title": "",
  "body": "  Suppose you have That is, you have also an initial velocity. Find a series solution. Hint: Use the same idea as we did for the wave equation.   "
},
{
  "id": "sec_appeig-3-6",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-3-6",
  "type": "Exercise",
  "number": "6.2.101",
  "title": "",
  "body": "  Suppose you have a beam of length 1 with hinged ends. Let be the transverse deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial shape of the beam is the graph of , and the initial velocity is 0. Solve for .        "
},
{
  "id": "sec_appeig-3-7",
  "level": "2",
  "url": "sec_appeig.html#sec_appeig-3-7",
  "type": "Exercise",
  "number": "6.2.102",
  "title": "",
  "body": "  Suppose you have a beam of length 10 with two fixed ends. Let be the transverse deviation of the beam at position on the beam ( ). You know that the constants are such that this satisfies the equation . Suppose you know that the initial shape of the beam is the graph of , and the initial velocity is uniformly equal to . Set up the equation together with the boundary and initial conditions. Just set up, do not solve.     ,  ,  ,  .   "
},
{
  "id": "sps_section",
  "level": "1",
  "url": "sps_section.html",
  "type": "Section",
  "number": "6.3",
  "title": "Steady periodic solutions",
  "body": " Steady periodic solutions   Note: 1–2 lectures, §10.3 in , not in    Forced vibrating string  Consider a guitar string of length . We studied this setup in . Let be the position on the string, the time, and the displacement of the string. See .   Vibrating string.    The problem is governed by the wave equation We found that the solution is of the form where and are determined by the initial conditions. The natural frequencies of the system are the (angular) frequencies for integers .  But these are free vibrations. What if there is an external force acting on the string. Let us assume say air vibrations (noise), for example from a second string. Or perhaps a jet engine. For simplicity, assume nice pure sound and assume the force is uniform at every position on the string. Let us say as force per unit mass. Then our wave equation becomes (remember force is mass times acceleration) with the same boundary conditions of course.  We want to find the solution here that satisfies the equation above and That is, the string is initially at rest. First we find a particular solution of that satisfies . We define the functions and as We then find solution of . If we add the two solutions, we find that solves with the initial conditions.    Check that solves and the side conditions .    So the big issue here is to find the particular solution . We look at the equation and we make an educated guess We plug in to get or after canceling the cosine. We know how to find a general solution to this equation (it is a nonhomogeneous constant coefficient equation). The general solution is The endpoint conditions imply . So or , and also Assuming that is not zero we can solve for to get Therefore, The particular solution we are looking for is     Check that works.    Now we get to the point that we skipped. Suppose . What this means is that is equal to one of the natural frequencies of the system, i.e. a multiple of . We notice that if is not equal to a multiple of the base frequency, but is very close, then the coefficient in seems to become very large. But let us not jump to conclusions just yet. When for even, then and hence we really get that . So resonance occurs only when both and . That is when for odd  .  We could again solve for the resonance solution if we wanted to, but it is, in the right sense, the limit of the solutions as gets close to a resonance frequency. In real life, pure resonance never occurs anyway.  The calculation above explains why a string begins to vibrate if the identical string is plucked close by. In the absence of friction this vibration would get louder and louder as time goes on. On the other hand, you are unlikely to get large vibration if the forcing frequency is not close to a resonance frequency even if you have a jet engine running close to the string. That is, the amplitude does not keep increasing unless you tune to just the right frequency.  Similar resonance phenomena occur when you break a wine glass using human voice (yes this is possible, but not easy Mythbusters , episode 31, Discovery Channel, originally aired may 18th 2005. ) if you happen to hit just the right frequency. Remember a glass has much purer sound, i.e. it is more like a vibraphone, so there are far fewer resonance frequencies to hit.  When the forcing function is more complicated, you decompose it in terms of the Fourier series and apply the result above. You may also need to solve the problem above if the forcing function is a sine rather than a cosine, but if you think about it, the solution is almost the same.    Let us do the computation for specific values. Suppose and and and . Then Write for simplicity.  Then plug in to get and after differentiating in we see that .  Hence to find we need to solve the problem The formula that we use to define is not odd, hence it is not a simple matter of plugging in the expression for to the d'Alembert formula directly! You must define to be the odd, 2-periodic extension of . Then our solution is   It is not hard to compute specific values for an odd periodic extension of a function and hence is a wonderful solution to the problem. For example, it is very easy to have a computer do it, unlike a series solution. A plot is given in .   Plot of .        Underground temperature oscillations  Let be the temperature at a certain location at depth underground at time . See .   Underground temperature.    The temperature satisfies the heat equation , where is the diffusivity of the soil. We know the temperature at the surface from weather records. Let us assume for simplicity that where is the yearly mean temperature, and is midsummer (you can put negative sign above to make it midwinter if you wish). gives the typical variation for the year. That is, the hottest temperature is and the coldest is . For simplicity, we assume that . The frequency is picked depending on the units of , such that when , then . For example if is in years, then .  It seems reasonable that the temperature at depth also oscillates with the same frequency. This, in fact, is the steady periodic solution, a solution independent of the initial conditions. So we are looking for a solution of the form for the problem   We employ the complex exponential here to make calculations simpler. Suppose we have a complex-valued function We look for an such that . To find an , whose real part satisfies , we look for an such that     Suppose satisfies . Use Euler's formula for the complex exponential to check that satisfies .    Substitute into . Hence, or where . Note that so you could simplify to . Hence the general solution is We assume that an that solves the problem must be bounded as since should be bounded (we are not worrying about the earth core!). If you use Euler's formula to expand the complex exponentials, note that the second term is unbounded (if ), while the first term is always bounded. Hence .    Use Euler's formula to show that is unbounded as , while is bounded as .    Furthermore, since . Thus . This means that We need to get the real part of , so we apply Euler's formula to get Then finally Yay!  Notice the phase is different at different depths. At depth the phase is delayed by . For example in cgs units (centimeters-grams-seconds) cgs units we have (typical value for soil), . Then if we compute where the phase shift we find the depth in centimeters where the seasons are reversed. That is, we get the depth at which summer is the coldest and winter is the warmest. We get approximately 700 centimeters, which is approximately 23 feet below ground.  Be careful not to jump to conclusions. The temperature swings decay rapidly as you dig deeper. The amplitude of the temperature swings is . This function decays very quickly as (the depth) grows. Let us again take typical parameters as above. We also assume that our surface temperature swing is Celsius, that is, . Then the maximum temperature variation at 700 centimeters is only Celsius.  You need not dig very deep to get an effective refrigerator, with nearly constant temperature. That is why wines are kept in a cellar; you need consistent temperature. The temperature differential could also be used for energy. A home could be heated or cooled by taking advantage of the fact above. Even without the earth core you could heat a home in the winter and cool it in the summer. The earth core makes the temperature higher the deeper you dig, although you need to dig somewhat deep to feel a difference. We did not take that into account above.    Exercises    Suppose that the forcing function for the vibrating string is . Derive the particular solution .      Take the forced vibrating string. Suppose that , . Suppose that the forcing function is the square wave that is 1 on the interval and on the interval . Find the particular solution. Hint: You may want to use result of .      The units are cgs (centimeters-grams-seconds) cgs units . For , , . Find the depth at which the temperature variation is half ( degrees) of what it is on the surface.      Derive the solution for underground temperature oscillation without assuming that .      Take the forced vibrating string. Suppose that , . Suppose that the forcing function is a sawtooth, that is on extended periodically. Find the particular solution.           The units are cgs (centimeters-grams-seconds) cgs units . For , , . Find the depth at which the summer is again the hottest point.    Approximately 1991 centimeters     "
},
{
  "id": "sps_vibstrfig",
  "level": "2",
  "url": "sps_section.html#sps_vibstrfig",
  "type": "Figure",
  "number": "6.3",
  "title": "",
  "body": " Vibrating string.   "
},
{
  "id": "sps_section-3-7",
  "level": "2",
  "url": "sps_section.html#sps_section-3-7",
  "type": "Exercise",
  "number": "6.3.1",
  "title": "",
  "body": "  Check that solves and the side conditions .   "
},
{
  "id": "sps_section-3-9",
  "level": "2",
  "url": "sps_section.html#sps_section-3-9",
  "type": "Exercise",
  "number": "6.3.2",
  "title": "",
  "body": "  Check that works.   "
},
{
  "id": "sps_section-3-15",
  "level": "2",
  "url": "sps_section.html#sps_section-3-15",
  "type": "Example",
  "number": "6.3.1",
  "title": "",
  "body": "  Let us do the computation for specific values. Suppose and and and . Then Write for simplicity.  Then plug in to get and after differentiating in we see that .  Hence to find we need to solve the problem The formula that we use to define is not odd, hence it is not a simple matter of plugging in the expression for to the d'Alembert formula directly! You must define to be the odd, 2-periodic extension of . Then our solution is   It is not hard to compute specific values for an odd periodic extension of a function and hence is a wonderful solution to the problem. For example, it is very easy to have a computer do it, unlike a series solution. A plot is given in .   Plot of .     "
},
{
  "id": "sps_groundtempfig",
  "level": "2",
  "url": "sps_section.html#sps_groundtempfig",
  "type": "Figure",
  "number": "6.5",
  "title": "",
  "body": " Underground temperature.   "
},
{
  "id": "sps_section-4-7",
  "level": "2",
  "url": "sps_section.html#sps_section-4-7",
  "type": "Exercise",
  "number": "6.3.3",
  "title": "",
  "body": "  Suppose satisfies . Use Euler's formula for the complex exponential to check that satisfies .   "
},
{
  "id": "sps_section-4-9",
  "level": "2",
  "url": "sps_section.html#sps_section-4-9",
  "type": "Exercise",
  "number": "6.3.4",
  "title": "",
  "body": "  Use Euler's formula to show that is unbounded as , while is bounded as .   "
},
{
  "id": "sps_sinforceexr",
  "level": "2",
  "url": "sps_section.html#sps_sinforceexr",
  "type": "Exercise",
  "number": "6.3.5",
  "title": "",
  "body": "  Suppose that the forcing function for the vibrating string is . Derive the particular solution .   "
},
{
  "id": "sps_section-5-3",
  "level": "2",
  "url": "sps_section.html#sps_section-5-3",
  "type": "Exercise",
  "number": "6.3.6",
  "title": "",
  "body": "  Take the forced vibrating string. Suppose that , . Suppose that the forcing function is the square wave that is 1 on the interval and on the interval . Find the particular solution. Hint: You may want to use result of .   "
},
{
  "id": "sps_section-5-4",
  "level": "2",
  "url": "sps_section.html#sps_section-5-4",
  "type": "Exercise",
  "number": "6.3.7",
  "title": "",
  "body": "  The units are cgs (centimeters-grams-seconds) cgs units . For , , . Find the depth at which the temperature variation is half ( degrees) of what it is on the surface.   "
},
{
  "id": "sps_section-5-5",
  "level": "2",
  "url": "sps_section.html#sps_section-5-5",
  "type": "Exercise",
  "number": "6.3.8",
  "title": "",
  "body": "  Derive the solution for underground temperature oscillation without assuming that .   "
},
{
  "id": "sps_section-5-6",
  "level": "2",
  "url": "sps_section.html#sps_section-5-6",
  "type": "Exercise",
  "number": "6.3.101",
  "title": "",
  "body": "  Take the forced vibrating string. Suppose that , . Suppose that the forcing function is a sawtooth, that is on extended periodically. Find the particular solution.        "
},
{
  "id": "sps_section-5-7",
  "level": "2",
  "url": "sps_section.html#sps_section-5-7",
  "type": "Exercise",
  "number": "6.3.102",
  "title": "",
  "body": "  The units are cgs (centimeters-grams-seconds) cgs units . For , , . Find the depth at which the summer is again the hottest point.    Approximately 1991 centimeters   "
},
{
  "id": "sec_introtosys",
  "level": "1",
  "url": "sec_introtosys.html",
  "type": "Section",
  "number": "7.1",
  "title": "Introduction to systems of ODEs",
  "body": " Introduction to systems of ODEs   Note: 1 to 1.5 lectures, §4.1 in , §7.1 in    Systems  Often we do not have just one dependent variable and one equation. And as we will see, we may end up with systems of several equations and several dependent variables even if we start with a single equation.  If we have several dependent variables, suppose , , ..., , then we can have a differential equation involving all of them and their derivatives with respect to one independent variable . For example, . Usually, when we have two dependent variables we have two equations such as for some functions and . We call the above a system of differential equations system of differential equations . More precisely, the above is a second order system second order system of ODEs as second order derivatives appear. The system is a first order system first order system , where are the dependent variables, and is the independent variable.  The terminology for systems is essentially the same as for single equations. For the system above, a solution solution to a system is a set of three functions , , , such that   We usually also have an initial condition initial condition for a system . Just like for single equations we specify , , and for some fixed . For example, , , . For some constants , , and . For the second order system we would also specify the first derivatives at a point. And if we find a solution with constants in it, where by solving for the constants we find a solution for any initial condition, we call this solution the general solution general solution to a system . Best to look at a simple example.    Sometimes a system is easy to solve by solving for one variable and then for the second variable. Take the first order system with , as the dependent variables and as the independent variable. And consider initial conditions , .  We note that is the general solution of the first equation. We then plug this into the second equation and get the equation , which is a linear first order equation that is easily solved for . By the method of integrating factor we get or . The general solution to the system is, therefore, We solve for and given the initial conditions. We substitute and find that and . Thus the solution is , and .    Generally, we will not be so lucky to be able to solve for each variable separately as in the example above, and we will have to solve for all variables at once. While we won't generally be able to solve for one variable and then the next, we will try to salvage as much as possible from this technique. It will turn out that in a certain sense we will still (try to) solve a bunch of single equations and put their solutions together. Let's not worry right now about how to solve systems yet.  We will mostly consider the linear systems linear systems . The example above is a so-called linear first order system linear first order system . It is linear as none of the dependent variables or their derivatives appear in nonlinear functions or with powers higher than one ( , , and , constants, and functions of can appear, but not or or ). Another, more complicated, example of a linear system is     Applications  Let us consider some simple applications of systems and how to set up the equations.    First, we consider salt and brine tanks, but this time water flows from one to the other and back. We again consider that the tanks are evenly mixed.   A closed system of two brine tanks.    Suppose we have two tanks, each containing volume liters of salt brine. The amount of salt in the first tank is grams, and the amount of salt in the second tank is grams. The liquid is perfectly mixed and flows at the rate liters per second out of each tank into the other. See .  The rate of change of , that is , is the rate of salt coming in minus the rate going out. The rate coming in is the density of the salt in tank 2, that is , times the rate . The rate coming out is the density of the salt in tank 1, that is , times the rate . In other words it is Similarly we find the rate , where the roles of and are reversed. All in all, the system of ODEs for this problem is In this system we cannot solve for or separately. We must solve for both and at once, which is intuitively clear since the amount of salt in one tank affects the amount in the other. We can't know before we know , and vice versa.  We don't yet know how to find all the solutions, but intuitively we can at least find some solutions. Suppose we know that initially the tanks have the same amount of salt. That is, we have an initial condition such as . Then clearly the amount of salt coming and out of each tank is the same, so the amounts are not changing. In other words, and (the constant functions) is a solution: , and , so the equations are satisfied.  Let us think about the setup a little bit more without solving it. Suppose the initial conditions are and , for two different constants and . Since no salt is coming in or out of this closed system, the total amount of salt is constant. That is, is constant, and so it equals . Intuitively if is bigger than , then more salt will flow out of tank one than into it. Eventually, after a long time we would then expect the amount of salt in each tank to equalize. In other words, the solutions of both and should tend towards . Once you know how to solve systems you will find out that this really is so.      Let us look at a second order example. We return to the mass and spring setup, but this time we consider two masses.     Consider one spring with constant and two masses and . Think of the masses as carts that ride along a straight track with no friction. Let be the displacement of the first cart and be the displacement of the second cart. That is, we put the two carts somewhere with no tension on the spring, and we mark the position of the first and second cart and call those the zero positions. Then measures how far the first cart is from its zero position, and measures how far the second cart is from its zero position. The force exerted by the spring on the first cart is , since is how far the string is stretched (or compressed) from the rest position. The force exerted on the second cart is the opposite, thus the same thing with a negative sign. Newton's second law Newton's second law states that force equals mass times acceleration. So the system of equations is   Again, we cannot solve for the or variable separately. That we must solve for both and at once is intuitively clear, since where the first cart goes depends on exactly where the second cart goes and vice versa.      Changing to first order  Before we talk about how to handle systems, let us note that in some sense we need only consider first order systems. Let us take an order differential equation We define new variables and write the system We solve this system for , , ..., . Once we have solved for the , we can discard through and let . This solves the original equation.    Take . Letting , , , we find the system:     A similar process can be followed for a system of higher order differential equations. For example, a system of differential equations in unknowns, all of order , can be transformed into a first order system of equations and unknowns.    Consider the system from the carts example, Let , , , . The second order system becomes the first order system       The idea works in reverse as well. Consider the system where the independent variable is . We wish to solve for the initial conditions , .  If we differentiate the second equation, we get . We know what is in terms of and , and we know that . So, We now have the equation . We know how to solve this equation and we find that . Once we have , we use the equation to get . We solve for the initial conditions and . Hence, and . So and . Our solution is       Plug in and check that this really is the solution.    It is useful to go back and forth between systems and higher order equations for other reasons. For example, software for solving ODE numerically (approximation) is generally for first order systems. To use it, you take whatever ODE you want to solve and convert it to a first order system. It is not very hard to adapt computer code for the Euler or Runge–Kutta method for first order equations to handle first order systems. We simply treat the dependent variable not as a number but as a vector. In many mathematical computer languages there is almost no distinction in syntax.    Autonomous systems and vector fields  A system where the equations do not depend on the independent variable is called an autonomous system autonomous system . For example the system , is autonomous as is the independent variable but does not appear in the equations.  For autonomous systems we can draw the so-called direction field direction field or vector field vector field , a plot similar to a slope field, but instead of giving a slope at each point, we give a direction (and a magnitude). The previous example, , , says that at the point the direction in which we should travel to satisfy the equations should be the direction of the vector with the speed equal to the magnitude of this vector. So we draw the vector at the point and we do this for many points on the -plane. For example, at the point we draw the vector , a vector pointing to the right and a little bit up, while at the point we draw the vector a vector that points straight up. When drawing the vectors, we will scale down their size to fit many of them on the same direction field. If we drew the arrows at the actual size, the diagram would be a jumbled mess once you would draw more than a couple of arrows. So we scale them all so that not even the longest one interferes with the others. We are mostly interested in their direction and relative size. See .  We can draw a path of the solution in the plane. Suppose the solution is given by , . We pick an interval of (say for our example) and plot all the points for in the selected range. The resulting picture is called the phase portrait phase portrait (or phase plane portrait phase plane portrait ). The particular curve obtained is called the trajectory trajectory or solution curve solution curve . See an example plot in . In the figure the solution starts at and travels along the vector field for a distance of 2 units of . We solved this system precisely, so we compute and to find and . This point corresponds to the top right end of the plotted solution curve in the figure.   The direction field for , .     The direction field for , with the trajectory of the solution starting at for .    Notice the similarity to the diagrams we drew for autonomous systems in one dimension. But note how much more complicated things become when we allow just one extra dimension.  We can draw phase portraits and trajectories in the -plane even if the system is not autonomous. In this case, however, we cannot draw the direction field, since the field changes as changes. For each we would get a different direction field.    Picard's theorem  Perhaps before going further, let us mention that Picard's theorem on existence and uniqueness still holds for systems of ODE. Let us restate this theorem in the setting of systems. A general first order system is of the form    Picard's theorem on existence and uniqueness for systems  existence and uniqueness for systems  Picard's theorem   If for every and every each is continuous and the derivative exists and is continuous near some , then a solution to subject to the initial condition , , ..., exists (at least for in some small interval) and is unique.    That is, a unique solution exists for any initial condition given that the system is reasonable ( and its partial derivatives in the variables are continuous). As for single equations we may not have a solution for all time , but at least for some short period of time.  As we can change any th order ODE into a first order system, then we notice that this theorem provides also the existence and uniqueness of solutions for higher order equations that we have until now not stated explicitly.    Exercises    Find the general solution of , .      Find the general solution of , .      Write as a first order system of ODEs.      Write , as a first order system of ODEs.      Suppose two masses on carts on frictionless surface are at displacements and as in . Suppose that a rocket applies force in the positive direction on cart . Set up the system of equations.      Suppose the tanks are as in , starting both at volume , but now the rate of flow from tank 1 to tank 2 is , and rate of flow from tank 2 to tank one is . Notice that the volumes are now not constant. Set up the system of equations.      Find the general solution to , , .     , ,       Solve , , , .     ,       Write as a first order system.     , ,       Write , as a first order system.     , , ,       Suppose two masses on carts on frictionless surface are at displacements and as in . Suppose initial displacement is , and initial velocity is for some number . Use your intuition to solve the system, explain your reasoning.     . Explanation of the intuition is left to reader.      Suppose the tanks are as in except that clean water flows in at the rate liters per second into tank 1, and brine flows out of tank 2 and into the sewer also at the rate of liters per second.    Draw the picture.    Set up the system of equations.    Intuitively, what happens as goes to infinity, explain.      a) Left to reader. b) , . c) As goes to infinity, both and go to zero, explanation is left to reader.     "
},
{
  "id": "sec_introtosys-3-6",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-3-6",
  "type": "Example",
  "number": "7.1.1",
  "title": "",
  "body": "  Sometimes a system is easy to solve by solving for one variable and then for the second variable. Take the first order system with , as the dependent variables and as the independent variable. And consider initial conditions , .  We note that is the general solution of the first equation. We then plug this into the second equation and get the equation , which is a linear first order equation that is easily solved for . By the method of integrating factor we get or . The general solution to the system is, therefore, We solve for and given the initial conditions. We substitute and find that and . Thus the solution is , and .   "
},
{
  "id": "sintro_closedbrine-example",
  "level": "2",
  "url": "sec_introtosys.html#sintro_closedbrine-example",
  "type": "Example",
  "number": "7.1.2",
  "title": "",
  "body": "  First, we consider salt and brine tanks, but this time water flows from one to the other and back. We again consider that the tanks are evenly mixed.   A closed system of two brine tanks.    Suppose we have two tanks, each containing volume liters of salt brine. The amount of salt in the first tank is grams, and the amount of salt in the second tank is grams. The liquid is perfectly mixed and flows at the rate liters per second out of each tank into the other. See .  The rate of change of , that is , is the rate of salt coming in minus the rate going out. The rate coming in is the density of the salt in tank 2, that is , times the rate . The rate coming out is the density of the salt in tank 1, that is , times the rate . In other words it is Similarly we find the rate , where the roles of and are reversed. All in all, the system of ODEs for this problem is In this system we cannot solve for or separately. We must solve for both and at once, which is intuitively clear since the amount of salt in one tank affects the amount in the other. We can't know before we know , and vice versa.  We don't yet know how to find all the solutions, but intuitively we can at least find some solutions. Suppose we know that initially the tanks have the same amount of salt. That is, we have an initial condition such as . Then clearly the amount of salt coming and out of each tank is the same, so the amounts are not changing. In other words, and (the constant functions) is a solution: , and , so the equations are satisfied.  Let us think about the setup a little bit more without solving it. Suppose the initial conditions are and , for two different constants and . Since no salt is coming in or out of this closed system, the total amount of salt is constant. That is, is constant, and so it equals . Intuitively if is bigger than , then more salt will flow out of tank one than into it. Eventually, after a long time we would then expect the amount of salt in each tank to equalize. In other words, the solutions of both and should tend towards . Once you know how to solve systems you will find out that this really is so.   "
},
{
  "id": "sintro_carts-example",
  "level": "2",
  "url": "sec_introtosys.html#sintro_carts-example",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "  Let us look at a second order example. We return to the mass and spring setup, but this time we consider two masses.     Consider one spring with constant and two masses and . Think of the masses as carts that ride along a straight track with no friction. Let be the displacement of the first cart and be the displacement of the second cart. That is, we put the two carts somewhere with no tension on the spring, and we mark the position of the first and second cart and call those the zero positions. Then measures how far the first cart is from its zero position, and measures how far the second cart is from its zero position. The force exerted by the spring on the first cart is , since is how far the string is stretched (or compressed) from the rest position. The force exerted on the second cart is the opposite, thus the same thing with a negative sign. Newton's second law Newton's second law states that force equals mass times acceleration. So the system of equations is   Again, we cannot solve for the or variable separately. That we must solve for both and at once is intuitively clear, since where the first cart goes depends on exactly where the second cart goes and vice versa.   "
},
{
  "id": "sec_introtosys-5-3",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-5-3",
  "type": "Example",
  "number": "7.1.4",
  "title": "",
  "body": "  Take . Letting , , , we find the system:    "
},
{
  "id": "sec_introtosys-5-5",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-5-5",
  "type": "Example",
  "number": "7.1.5",
  "title": "",
  "body": "  Consider the system from the carts example, Let , , , . The second order system becomes the first order system    "
},
{
  "id": "sec_introtosys-5-6",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-5-6",
  "type": "Example",
  "number": "7.1.6",
  "title": "",
  "body": "  The idea works in reverse as well. Consider the system where the independent variable is . We wish to solve for the initial conditions , .  If we differentiate the second equation, we get . We know what is in terms of and , and we know that . So, We now have the equation . We know how to solve this equation and we find that . Once we have , we use the equation to get . We solve for the initial conditions and . Hence, and . So and . Our solution is    "
},
{
  "id": "sec_introtosys-5-7",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-5-7",
  "type": "Exercise",
  "number": "7.1.1",
  "title": "",
  "body": "  Plug in and check that this really is the solution.   "
},
{
  "id": "sintro-vectorfield_fig",
  "level": "2",
  "url": "sec_introtosys.html#sintro-vectorfield_fig",
  "type": "Figure",
  "number": "7.2",
  "title": "",
  "body": " The direction field for , .   "
},
{
  "id": "sintro-vectorfield-sol_fig",
  "level": "2",
  "url": "sec_introtosys.html#sintro-vectorfield-sol_fig",
  "type": "Figure",
  "number": "7.3",
  "title": "",
  "body": " The direction field for , with the trajectory of the solution starting at for .   "
},
{
  "id": "sys_picardthm",
  "level": "2",
  "url": "sec_introtosys.html#sys_picardthm",
  "type": "Theorem",
  "number": "7.1.1",
  "title": "Picard’s theorem on existence and uniqueness for systems.",
  "body": " Picard's theorem on existence and uniqueness for systems  existence and uniqueness for systems  Picard's theorem   If for every and every each is continuous and the derivative exists and is continuous near some , then a solution to subject to the initial condition , , ..., exists (at least for in some small interval) and is unique.   "
},
{
  "id": "sec_introtosys-8-2",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-2",
  "type": "Exercise",
  "number": "7.1.2",
  "title": "",
  "body": "  Find the general solution of , .   "
},
{
  "id": "sec_introtosys-8-3",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-3",
  "type": "Exercise",
  "number": "7.1.3",
  "title": "",
  "body": "  Find the general solution of , .   "
},
{
  "id": "sec_introtosys-8-4",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-4",
  "type": "Exercise",
  "number": "7.1.4",
  "title": "",
  "body": "  Write as a first order system of ODEs.   "
},
{
  "id": "sec_introtosys-8-5",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-5",
  "type": "Exercise",
  "number": "7.1.5",
  "title": "",
  "body": "  Write , as a first order system of ODEs.   "
},
{
  "id": "sec_introtosys-8-6",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-6",
  "type": "Exercise",
  "number": "7.1.6",
  "title": "",
  "body": "  Suppose two masses on carts on frictionless surface are at displacements and as in . Suppose that a rocket applies force in the positive direction on cart . Set up the system of equations.   "
},
{
  "id": "sec_introtosys-8-7",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-7",
  "type": "Exercise",
  "number": "7.1.7",
  "title": "",
  "body": "  Suppose the tanks are as in , starting both at volume , but now the rate of flow from tank 1 to tank 2 is , and rate of flow from tank 2 to tank one is . Notice that the volumes are now not constant. Set up the system of equations.   "
},
{
  "id": "sec_introtosys-8-8",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-8",
  "type": "Exercise",
  "number": "7.1.101",
  "title": "",
  "body": "  Find the general solution to , , .     , ,    "
},
{
  "id": "sec_introtosys-8-9",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-9",
  "type": "Exercise",
  "number": "7.1.102",
  "title": "",
  "body": "  Solve , , , .     ,    "
},
{
  "id": "sec_introtosys-8-10",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-10",
  "type": "Exercise",
  "number": "7.1.103",
  "title": "",
  "body": "  Write as a first order system.     , ,    "
},
{
  "id": "sec_introtosys-8-11",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-11",
  "type": "Exercise",
  "number": "7.1.104",
  "title": "",
  "body": "  Write , as a first order system.     , , ,    "
},
{
  "id": "sec_introtosys-8-12",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-12",
  "type": "Exercise",
  "number": "7.1.105",
  "title": "",
  "body": "  Suppose two masses on carts on frictionless surface are at displacements and as in . Suppose initial displacement is , and initial velocity is for some number . Use your intuition to solve the system, explain your reasoning.     . Explanation of the intuition is left to reader.   "
},
{
  "id": "sec_introtosys-8-13",
  "level": "2",
  "url": "sec_introtosys.html#sec_introtosys-8-13",
  "type": "Exercise",
  "number": "7.1.106",
  "title": "",
  "body": "  Suppose the tanks are as in except that clean water flows in at the rate liters per second into tank 1, and brine flows out of tank 2 and into the sewer also at the rate of liters per second.    Draw the picture.    Set up the system of equations.    Intuitively, what happens as goes to infinity, explain.      a) Left to reader. b) , . c) As goes to infinity, both and go to zero, explanation is left to reader.   "
},
{
  "id": "sec_matrix",
  "level": "1",
  "url": "sec_matrix.html",
  "type": "Section",
  "number": "7.2",
  "title": "Matrices and linear systems",
  "body": " Matrices and linear systems   Note: 1.5 lectures, first part of §5.1 in , §7.2 and §7.3 in , see also \\appendixref{linalg:appendix}    Matrices and vectors  Before we start talking about linear systems of ODEs, we need to talk about matrices, so let us review these briefly. A matrix matrix is an array of numbers ( rows and columns). For example, we denote a matrix as follows The numbers are called elements element of a matrix or entries entry of a matrix .  By a vector vector we usually mean a column vector column vector , that is an matrix. If we mean a row vector row vector , we will explicitly say so (a row vector is a matrix). We usually denote matrices by upper case letters and vectors by lower case letters with an arrow such as or . By we mean the vector of all zeros.  We define some operations on matrices. We want matrices to really act like numbers, so our operations have to be compatible with this viewpoint.  First, we can multiply scalar multiplication a matrix by a scalar scalar (a number). We simply multiply each entry in the matrix by the scalar. For example, Matrix addition addition of matrices is also easy. We add matrices element by element. For example, If the sizes do not match, then addition is not defined.  If we denote by 0 the matrix with all zero entries, by , scalars, and by , , matrices, we have the following familiar rules:   Another useful operation for matrices is the so-called transpose transpose . This operation just swaps rows and columns of a matrix. The transpose of is denoted by . Example:     Matrix multiplication  Let us now define matrix multiplication. First we define the so-called dot product dot product (or inner product inner product ) of two vectors. Usually this will be a row vector multiplied with a column vector of the same size. For the dot product we multiply each pair of entries from the first and the second vector and we sum these products. The result is a single number. For example, Similarly for larger (or smaller) vectors.  Armed with the dot product we define the product of matrices product of matrices . First let us denote by the row of and by the column of . For an matrix and an matrix , we can define the product . We let be an matrix whose entry is the dot product Do note how the sizes match up: multiplied by is . Example:   For multiplication we want an analogue of a 1. This analogue is the so-called identity matrix identity matrix . The identity matrix is a square matrix with 1s on the diagonal and zeros everywhere else. It is usually denoted by . For each size we have a different identity matrix and so sometimes we may denote the size as a subscript. For example, the would be the identity matrix   We have the following rules for matrix multiplication. Suppose that , , are matrices of the correct sizes so that the following make sense. Let denote a scalar (number).   A few warnings are in order.     in general (it may be true by fluke sometimes). That is, matrices do not commute commute . For example, take and .     does not necessarily imply , even if is not 0.     does not necessarily mean that or . Try, for example, .    For the last two items to hold we would need to divide by a matrix. This is where the matrix inverse matrix inverse comes in. Suppose that and are matrices such that Then we call the inverse of and we denote by . If the inverse of exists, then we call  invertible invertible matrix . If is not invertible, we sometimes say is singular singular matrix .  If is invertible, then does imply that (in particular, the inverse of is unique). We just multiply both sides by (on the left) to get or or . It is also not hard to see that .    The determinant  For square matrices we define a useful quantity called the determinant determinant . We define the determinant of a matrix as the value of its only entry. For a matrix we define   Before trying to define the determinant for larger matrices, let us note the meaning of the determinant. Consider an matrix as a mapping of the -dimensional euclidean space to itself, where gets sent to . In particular, a matrix is a mapping of the plane to itself. The determinant of is the factor by which the area of objects changes. If we take the unit square (square of side 1) in the plane, then takes the square to a parallelogram of area . The sign of denotes changing of orientation (negative if the axes get flipped). For example, let Then . Let us see where the (unit) square with vertices , , , and gets sent. Clearly gets sent to . The image of the square is another square with vertices , , , and . The image square has a side of length and is therefore of area 2.  If you think back to high school geometry, you may have seen a formula for computing the area of a parallelogram parallelogram with vertices , , and . And it is precisely The vertical lines above mean absolute value. The matrix carries the unit square to the given parallelogram.  Let us look at the determinant for larger matrices. We define as the matrix with the row and the column deleted. To compute the determinant of a matrix, pick one row, say the row and compute: For the first row we get We alternately add and subtract the determinants of the submatrices multiplied by for a fixed and all . For a matrix, picking the first row, we get . For example,   The numbers are called cofactors cofactor of the matrix and this way of computing the determinant is called the cofactor expansion cofactor expansion . No matter which row you pick, you always get the same number. It is also possible to compute the determinant by expanding along columns (picking a column instead of a row above). It is true that .  A common notation for the determinant is a pair of vertical lines: I personally find this notation confusing as vertical lines usually mean a positive quantity, while determinants can be negative. Also think about how to write the absolute value of a determinant. I will not use this notation in this book.  Think of the determinants telling you the scaling of a mapping. If doubles the sizes of geometric objects and triples them, then (which applies to an object and then ) should make size go up by a factor of . This is true in general: This property is one of the most useful, and it is employed often to actually compute determinants. A particularly interesting consequence is to note what it means for existence of inverses. Take and to be inverses of each other, that is . Then Neither nor can be zero. Let us state this as a theorem as it will be very important in the context of this course.    An matrix is invertible if and only if .    In fact, says that . So we even know what the determinant of is before we know how to compute .  There is a simple formula for the inverse of a matrix Notice the determinant of the matrix in the denominator of the fraction. The formula only works if the determinant is nonzero, otherwise we are dividing by zero.    Solving linear systems  One application of matrices we will need is to solve systems of linear equations. This is best shown by example. Suppose that we have the following system of linear equations   Without changing the solution, we could swap equations in this system, we could multiply any of the equations by a nonzero number, and we could add a multiple of one equation to another equation. It turns out these operations always suffice to find a solution.  It is easier to write the system as a matrix equation. The system above can be written as To solve the system we put the coefficient matrix (the matrix on the left-hand side of the equation) together with the vector on the right and side and get the so-called augmented matrix augmented matrix    We apply the following three elementary operations.    Swap two rows.    Multiply a row by a nonzero number.    Add a multiple of one row to another row.    We keep doing these operations until we get into a state where it is easy to read off the answer, or until we get into a contradiction indicating no solution, for example if we come up with an equation such as .  Let us work through the example. First multiply the first row by to obtain Now subtract the first row from the second and third row. Multiply the last row by and the second row by . Swap rows 2 and 3. Subtract the last row from the first, then subtract the second row from the first. If we think about what equations this augmented matrix represents, we see that , , and . We try this solution in the original system and, voilà, it works!    Check that the solution above really solves the given equations.    We write this equation in matrix notation as where is the matrix and is the vector . The solution can also be computed via the inverse,   It is possible that the solution is not unique, or that no solution exists. It is easy to tell if a solution does not exist. If during the row reduction you come up with a row where all the entries except the last one are zero (the last entry in a row corresponds to the right-hand side of the equation), then the system is inconsistent inconsistent system and has no solution. For example, for a system of 3 equations and 3 unknowns, if you find a row such as in the augmented matrix, you know the system is inconsistent. That row corresponds to .  You generally try to use row operations until the following conditions are satisfied. The first (from the left) nonzero entry in each row is called the leading entry leading entry .    The leading entry in any row is strictly to the right of the leading entry of the row above.    Any zero rows are below all the nonzero rows.    All leading entries are 1.    All the entries above and below a leading entry are zero.    Such a matrix is said to be in reduced row echelon form reduced row echelon form . The variables corresponding to columns with no leading entries are said to be free variables free variable . Free variables mean that we can pick those variables to be anything we want and then solve for the rest of the unknowns.    The following augmented matrix is in reduced row echelon form. Suppose the variables are , , and . Then is the free variable, , and .  On the other hand if during the row reduction process you come up with the matrix there is no need to go further. The last row corresponds to the equation , which is preposterous. Hence, no solution exists.      Computing the inverse  If the matrix is square and there exists a unique solution to for any (there are no free variables), then is invertible. Multiplying both sides by , you can see that . So it is useful to compute the inverse if you want to solve the equation for many different right-hand sides .  We have a formula for the inverse, but it is also not hard to compute inverses of larger matrices. While we will not have too much occasion to compute inverses for larger matrices than by hand, let us touch on how to do it. Finding the inverse of is actually just solving a bunch of linear equations. If we can solve where is the vector with all zeros except a 1 at the position, then the inverse is the matrix with the columns for (exercise: why?). Therefore, to find the inverse we write a larger augmented matrix , where is the identity matrix. We then perform row reduction. The reduced row echelon form of will be of the form if and only if is invertible. We then just read off the inverse .    Exercises    Solve by using matrix inverse.      Compute determinant of .      Compute determinant of . Hint: Expand along the proper row or column to make the calculations simpler.      Compute inverse of .      For which is not invertible? Is there only one such ? Are there several? Infinitely many?      For which is not invertible? Find all such .      Solve .      Solve .      Solve .      Find 3 nonzero matrices , , and such that but .      Compute determinant of            Find such that is not invertible.           Solve .           Suppose are nonzero numbers. Let , .    Compute .    Compute .      a)  b)      "
},
{
  "id": "sec_matrix-5-9",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-5-9",
  "type": "Theorem",
  "number": "7.2.1",
  "title": "",
  "body": "  An matrix is invertible if and only if .   "
},
{
  "id": "sec_matrix-6-9",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-6-9",
  "type": "Exercise",
  "number": "7.2.1",
  "title": "",
  "body": "  Check that the solution above really solves the given equations.   "
},
{
  "id": "sec_matrix-6-15",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-6-15",
  "type": "Example",
  "number": "7.2.1",
  "title": "",
  "body": "  The following augmented matrix is in reduced row echelon form. Suppose the variables are , , and . Then is the free variable, , and .  On the other hand if during the row reduction process you come up with the matrix there is no need to go further. The last row corresponds to the equation , which is preposterous. Hence, no solution exists.   "
},
{
  "id": "sec_matrix-8-2",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-2",
  "type": "Exercise",
  "number": "7.2.2",
  "title": "",
  "body": "  Solve by using matrix inverse.   "
},
{
  "id": "sec_matrix-8-3",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-3",
  "type": "Exercise",
  "number": "7.2.3",
  "title": "",
  "body": "  Compute determinant of .   "
},
{
  "id": "sec_matrix-8-4",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-4",
  "type": "Exercise",
  "number": "7.2.4",
  "title": "",
  "body": "  Compute determinant of . Hint: Expand along the proper row or column to make the calculations simpler.   "
},
{
  "id": "sec_matrix-8-5",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-5",
  "type": "Exercise",
  "number": "7.2.5",
  "title": "",
  "body": "  Compute inverse of .   "
},
{
  "id": "sec_matrix-8-6",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-6",
  "type": "Exercise",
  "number": "7.2.6",
  "title": "",
  "body": "  For which is not invertible? Is there only one such ? Are there several? Infinitely many?   "
},
{
  "id": "sec_matrix-8-7",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-7",
  "type": "Exercise",
  "number": "7.2.7",
  "title": "",
  "body": "  For which is not invertible? Find all such .   "
},
{
  "id": "sec_matrix-8-8",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-8",
  "type": "Exercise",
  "number": "7.2.8",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "sec_matrix-8-9",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-9",
  "type": "Exercise",
  "number": "7.2.9",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "sec_matrix-8-10",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-10",
  "type": "Exercise",
  "number": "7.2.10",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "sec_matrix-8-11",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-11",
  "type": "Exercise",
  "number": "7.2.11",
  "title": "",
  "body": "  Find 3 nonzero matrices , , and such that but .   "
},
{
  "id": "sec_matrix-8-12",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-12",
  "type": "Exercise",
  "number": "7.2.101",
  "title": "",
  "body": "  Compute determinant of         "
},
{
  "id": "sec_matrix-8-13",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-13",
  "type": "Exercise",
  "number": "7.2.102",
  "title": "",
  "body": "  Find such that is not invertible.        "
},
{
  "id": "sec_matrix-8-14",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-14",
  "type": "Exercise",
  "number": "7.2.103",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "sec_matrix-8-15",
  "level": "2",
  "url": "sec_matrix.html#sec_matrix-8-15",
  "type": "Exercise",
  "number": "7.2.104",
  "title": "",
  "body": "  Suppose are nonzero numbers. Let , .    Compute .    Compute .      a)  b)    "
},
{
  "id": "linsystems_section",
  "level": "1",
  "url": "linsystems_section.html",
  "type": "Section",
  "number": "7.3",
  "title": "Linear systems of ODEs",
  "body": " Linear systems of ODEs   Note: less than 1 lecture, second part of §5.1 in , §7.4 in  First let us talk about matrix- or vector-valued functions. Such a function is just a matrix or vector whose entries depend on some variable. If is the independent variable, we write a vector-valued function vector-valued function  as Similarly a matrix-valued function matrix-valued function  is The derivative or is just the matrix-valued function whose entry is .  Rules of differentiation of matrix-valued functions are similar to rules for normal functions. Let and be matrix-valued functions. Let a scalar and let be a constant matrix. Then Note the order of the multiplication in the last two expressions.  A first order linear system of ODEs first order linear system of ODEs is a system that can be written as the vector equation where is a matrix-valued function, and and are vector-valued functions. We will often suppress the dependence on and only write . A solution of the system is a vector-valued function satisfying the vector equation.  For example, the equations can be written as   We will mostly concentrate on equations that are not just linear, but are in fact constant coefficient constant coefficient equations. That is, the matrix will be constant; it will not depend on .  When (the zero vector), then we say the system is homogeneous homogeneous system . For homogeneous linear systems we have the principle of superposition, just like for single homogeneous equations.   Superposition  superposition   Let be a linear homogeneous system of ODEs. Suppose that are solutions of the equation and are any constants, then is also a solution. Furthermore, if this is a system of equations ( is ), and are linearly independent, then every solution can be written as .    Linear independence for vector-valued functions is the same idea as for normal functions. The vector-valued functions are linearly independent linearly independent for vector-valued functions when has only the solution , where the equation must hold for all .     , , are linearly dependent because , and this holds for all . So , , and above will work.  On the other hand if we change the example just slightly , , , then the functions are linearly independent. First write and note that it has to hold for all . We get that In other words and . If we set , then the second equation becomes . But then the first equation becomes for all and so . Thus the second equation is just , which means . So is the only solution and , , and are linearly independent.    The linear combination could always be written as where is the matrix with columns , and is the column vector with entries . Assuming that are linearly independent, the matrix-valued function is called a fundamental matrix fundamental matrix , or a fundamental matrix solution fundamental matrix solution .  To solve nonhomogeneous first order linear systems, we use the same technique as we applied to solve single linear nonhomogeneous equations.    Let be a linear system of ODEs. Suppose is one particular solution. Then every solution can be written as where is a solution to the associated homogeneous equation associated homogeneous equation ( ).    The procedure for systems is the same as for single equations. We find a particular solution to the nonhomogeneous equation, then we find the general solution to the associated homogeneous equation, and finally we add the two together.  Alright, suppose you have found the general solution of . Next suppose you are given an initial condition of the form for some fixed and a constant vector . Let be a fundamental matrix solution of the associated homogeneous equation (i.e. columns of are solutions). The general solution can be written as We are seeking a vector such that In other words, we are solving for the nonhomogeneous system of linear equations     In we solved the system with initial conditions , . Let us consider this problem in the language of this section.  The system is homogeneous, so . We write the system and the initial conditions as   We found the general solution is and . Letting and , we obtain the solution . Letting and , we obtain . These two solutions are linearly independent, as can be seen by setting , and noting that the resulting constant vectors are linearly independent. In matrix notation, a fundamental matrix solution is, therefore,   To solve the initial value problem we solve for in the equation or in other words, A single elementary row operation shows . Our solution is This new solution agrees with our previous solution from .      Exercises    Write the system , in the form .          Verify that the system has the two solutions and .    Write down the general solution.    Write down the general solution in the form , (i.e. write down a formula for each element of the solution).        Verify that and are linearly independent. Hint: Just plug in .      Verify that and and are linearly independent. Hint: You must be a bit more tricky than in the previous exercise.      Verify that and are linearly independent.      Take the system , .    Write it in the form for matrices and .    Compute and use that to write the system in the form .        Are and linearly independent? Justify.    Yes.      Are , , and linearly independent? Justify.    No.       Write , in matrix notation.               Write , in matrix notation.    Solve and write the solution in matrix notation.      a)  b)      "
},
{
  "id": "linsystems_section-2-8",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-2-8",
  "type": "Theorem",
  "number": "7.3.1",
  "title": "Superposition.",
  "body": " Superposition  superposition   Let be a linear homogeneous system of ODEs. Suppose that are solutions of the equation and are any constants, then is also a solution. Furthermore, if this is a system of equations ( is ), and are linearly independent, then every solution can be written as .   "
},
{
  "id": "linsystems_section-2-10",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-2-10",
  "type": "Example",
  "number": "7.3.1",
  "title": "",
  "body": "   , , are linearly dependent because , and this holds for all . So , , and above will work.  On the other hand if we change the example just slightly , , , then the functions are linearly independent. First write and note that it has to hold for all . We get that In other words and . If we set , then the second equation becomes . But then the first equation becomes for all and so . Thus the second equation is just , which means . So is the only solution and , , and are linearly independent.   "
},
{
  "id": "linsystems_section-2-13",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-2-13",
  "type": "Theorem",
  "number": "7.3.2",
  "title": "",
  "body": "  Let be a linear system of ODEs. Suppose is one particular solution. Then every solution can be written as where is a solution to the associated homogeneous equation associated homogeneous equation ( ).   "
},
{
  "id": "linsystems_section-2-16",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-2-16",
  "type": "Example",
  "number": "7.3.2",
  "title": "",
  "body": "  In we solved the system with initial conditions , . Let us consider this problem in the language of this section.  The system is homogeneous, so . We write the system and the initial conditions as   We found the general solution is and . Letting and , we obtain the solution . Letting and , we obtain . These two solutions are linearly independent, as can be seen by setting , and noting that the resulting constant vectors are linearly independent. In matrix notation, a fundamental matrix solution is, therefore,   To solve the initial value problem we solve for in the equation or in other words, A single elementary row operation shows . Our solution is This new solution agrees with our previous solution from .   "
},
{
  "id": "linsystems_section-3-2",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-3-2",
  "type": "Exercise",
  "number": "7.3.1",
  "title": "",
  "body": "  Write the system , in the form .   "
},
{
  "id": "linsystems_section-3-3",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-3-3",
  "type": "Exercise",
  "number": "7.3.2",
  "title": "",
  "body": "      Verify that the system has the two solutions and .    Write down the general solution.    Write down the general solution in the form , (i.e. write down a formula for each element of the solution).     "
},
{
  "id": "linsystems_section-3-4",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-3-4",
  "type": "Exercise",
  "number": "7.3.3",
  "title": "",
  "body": "  Verify that and are linearly independent. Hint: Just plug in .   "
},
{
  "id": "linsystems_section-3-5",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-3-5",
  "type": "Exercise",
  "number": "7.3.4",
  "title": "",
  "body": "  Verify that and and are linearly independent. Hint: You must be a bit more tricky than in the previous exercise.   "
},
{
  "id": "linsystems_section-3-6",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-3-6",
  "type": "Exercise",
  "number": "7.3.5",
  "title": "",
  "body": "  Verify that and are linearly independent.   "
},
{
  "id": "linsystems_section-3-7",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-3-7",
  "type": "Exercise",
  "number": "7.3.6",
  "title": "",
  "body": "  Take the system , .    Write it in the form for matrices and .    Compute and use that to write the system in the form .     "
},
{
  "id": "linsystems_section-3-8",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-3-8",
  "type": "Exercise",
  "number": "7.3.101",
  "title": "",
  "body": "  Are and linearly independent? Justify.    Yes.   "
},
{
  "id": "linsystems_section-3-9",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-3-9",
  "type": "Exercise",
  "number": "7.3.102",
  "title": "",
  "body": "  Are , , and linearly independent? Justify.    No.    "
},
{
  "id": "linsystems_section-3-10",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-3-10",
  "type": "Exercise",
  "number": "7.3.103",
  "title": "",
  "body": "  Write , in matrix notation.        "
},
{
  "id": "linsystems_section-3-11",
  "level": "2",
  "url": "linsystems_section.html#linsystems_section-3-11",
  "type": "Exercise",
  "number": "7.3.104",
  "title": "",
  "body": "      Write , in matrix notation.    Solve and write the solution in matrix notation.      a)  b)    "
},
{
  "id": "eigenmethod_section",
  "level": "1",
  "url": "eigenmethod_section.html",
  "type": "Section",
  "number": "7.4",
  "title": "Eigenvalue method",
  "body": " Eigenvalue method   Note: 2 lectures, §5.2 in , part of §7.3, §7.5, and §7.6 in  In this section we will learn how to solve linear homogeneous constant coefficient systems of ODEs by the eigenvalue method. Suppose we have such a system where is a constant square matrix. We wish to adapt the method for the single constant coefficient equation by trying the function . However, is a vector. So we try , where is an arbitrary constant vector. We plug this into the equation to get We divide by and notice that we are looking for a scalar and a vector that satisfy the equation   To solve this equation we need a little bit more linear algebra, which we now review.    Eigenvalues and eigenvectors of a matrix  Let be a constant square matrix. Suppose there is a scalar and a nonzero vector such that We call an eigenvalue eigenvalue of and we call a corresponding eigenvector eigenvector .    The matrix has an eigenvalue with a corresponding eigenvector as     Let us see how to compute eigenvalues for any matrix. Rewrite the equation for an eigenvalue as This equation has a nonzero solution only if is not invertible. Were it invertible, we could write , which implies . Therefore, has the eigenvalue if and only if solves the equation   Consequently, we can find an eigenvalue of without finding a corresponding eigenvector at the same time. An eigenvector will have to be found later, once is known.    Find all eigenvalues of .  We write So the eigenvalues are , , and .    For an matrix, the polynomial we get by computing is of degree , and hence in general, we have eigenvalues. Some may be repeated, some may be complex.  To find an eigenvector corresponding to an eigenvalue , we write and solve for a nontrivial (nonzero) vector . If is an eigenvalue, there will be at least one free variable, and so for each distinct eigenvalue , we can always find an eigenvector.    Find an eigenvector of corresponding to the eigenvalue .  We write It is easy to solve this system of linear equations. We write down the augmented matrix and perform row operations (exercise: which ones?) until we get: The entries of have to satisfy the equations , , and is a free variable. We can pick to be arbitrary (but nonzero), let , and of course . For example, if we pick , then . Let us verify that really is an eigenvector corresponding to : Yay! It worked.       (easy) Are eigenvectors unique? Can you find a different eigenvector for in the example above? How are the two eigenvectors related?      When the matrix is you do not need to do row operations when computing an eigenvector, you can read it off from (if you have computed the eigenvalues correctly). Can you see why? Explain. Try it for the matrix .      The eigenvalue method with distinct real eigenvalues  OK. We have the system of equations We find the eigenvalues , , ..., of the matrix , and corresponding eigenvectors , , ..., . Now we notice that the functions , , ..., are solutions of the system of equations and hence is a solution.    Take . If is an constant matrix that has distinct real eigenvalues , , ..., , then there exist linearly independent corresponding eigenvectors , , ..., , and the general solution to can be written as     The corresponding fundamental matrix solution is That is, is the matrix whose column is .    Consider the system Find the general solution.  Earlier, we found the eigenvalues are . We found the eigenvector for the eigenvalue 3. Similarly we find the eigenvector for the eigenvalue 1, and for the eigenvalue 2 (exercise: check). Hence our general solution is In terms of a fundamental matrix solution,       Check that this really solves the system.    Note: If we write a single homogeneous linear constant coefficient order equation as a first order system (as we did in ), then the eigenvalue equation is essentially the same as the characteristic equation we got in and .    Complex eigenvalues  A matrix may very well have complex eigenvalues even if all the entries are real. Take, for example, Let us compute the eigenvalues of the matrix . Thus . Corresponding eigenvectors are also complex. Start with . The equations and are multiples of each other. So we only need to consider one of them. After picking , for example, we have an eigenvector . In similar fashion we find that is an eigenvector corresponding to the eigenvalue .  We could write the solution as We would then need to look for complex values and to solve any initial conditions. It is perhaps not completely clear that we get a real solution. After solving for and , we could use Euler's formula and do the whole song and dance we did before, but we will not. We will apply the formula in a smarter way first to find independent real solutions.  We claim that we did not have to look for a second eigenvector (nor for the second eigenvalue). All complex eigenvalues come in pairs (because the matrix is real).  First a small detour. The real part of a complex number can be computed as , where the bar above means . This operation is called the complex conjugate complex conjugate . If is a real number, then . Similarly we bar whole vectors or matrices by taking the complex conjugate of every entry. Suppose a matrix is real. Then , and so . Also the complex conjugate of 0 is still 0, therefore, In other words, if is an eigenvalue, then so is . And if is an eigenvector corresponding to the eigenvalue , then is an eigenvector corresponding to the eigenvalue .  Suppose is a complex eigenvalue of , and is a corresponding eigenvector. Then is a solution (complex-valued) of . Euler's formula shows that , and so is also a solution. As and are solutions, the function is also a solution. And is real-valued! Similarly as is the imaginary part, we find that is also a real-valued solution. It turns out that and are linearly independent. We will use Euler's formula to separate out the real and imaginary part.  Returning to our problem, Then are the two real-valued linearly independent solutions we seek.    Check that these really are solutions.    The general solution is This solution is real-valued for real and . At this point, we would solve for any initial conditions we may have to find and .  Let us summarize the discussion as a theorem.    Let be a real-valued constant matrix. If has a complex eigenvalue and a corresponding eigenvector , then also has a complex eigenvalue with a corresponding eigenvector . Furthermore, has two linearly independent real-valued solutions     For each pair of complex eigenvalues and , we get two real-valued linearly independent solutions. We then go on to the next eigenvalue, which is either a real eigenvalue or another complex eigenvalue pair. If we have distinct eigenvalues (real or complex), then we end up with linearly independent solutions. If we had only two equations ( ) as in the example above, then once we found two solutions we are finished, and our general solution is   We can now find a real-valued general solution to any homogeneous system where the matrix has distinct eigenvalues. When we have repeated eigenvalues, matters get a bit more complicated and we will look at that situation in .    Exercises     (easy) Let be a matrix with an eigenvalue of 3 and a corresponding eigenvector . Find .          Find the general solution of , using the eigenvalue method (first write the system in the form ).    Solve the system by solving each equation separately and verify you get the same general solution.        Find the general solution of , using the eigenvalue method.      Find the general solution of , using the eigenvalue method. Do not use complex exponentials in your solution.          Compute eigenvalues and eigenvectors of .    Find the general solution of .        Compute eigenvalues and eigenvectors of .      Let be numbers. Find the eigenvalues of .          Compute eigenvalues and eigenvectors of .    Solve the system .      a) Eigenvalues:  Eigenvectors: , ,  b)           Compute eigenvalues and eigenvectors of .    Solve the system .      a) Eigenvalues: , Eigenvectors: ,  b)       Solve , using the eigenvalue method.           Solve , using the eigenvalue method.          "
},
{
  "id": "eigenmethod_section-3-3",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-3-3",
  "type": "Example",
  "number": "7.4.1",
  "title": "",
  "body": "  The matrix has an eigenvalue with a corresponding eigenvector as    "
},
{
  "id": "eigenmethod_section-3-6",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-3-6",
  "type": "Example",
  "number": "7.4.2",
  "title": "",
  "body": "  Find all eigenvalues of .  We write So the eigenvalues are , , and .   "
},
{
  "id": "eigenmethod_section-3-9",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-3-9",
  "type": "Example",
  "number": "7.4.3",
  "title": "",
  "body": "  Find an eigenvector of corresponding to the eigenvalue .  We write It is easy to solve this system of linear equations. We write down the augmented matrix and perform row operations (exercise: which ones?) until we get: The entries of have to satisfy the equations , , and is a free variable. We can pick to be arbitrary (but nonzero), let , and of course . For example, if we pick , then . Let us verify that really is an eigenvector corresponding to : Yay! It worked.   "
},
{
  "id": "eigenmethod_section-3-10",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-3-10",
  "type": "Exercise",
  "number": "7.4.1",
  "title": "",
  "body": "   (easy) Are eigenvectors unique? Can you find a different eigenvector for in the example above? How are the two eigenvectors related?   "
},
{
  "id": "eigenmethod_section-3-11",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-3-11",
  "type": "Exercise",
  "number": "7.4.2",
  "title": "",
  "body": "  When the matrix is you do not need to do row operations when computing an eigenvector, you can read it off from (if you have computed the eigenvalues correctly). Can you see why? Explain. Try it for the matrix .   "
},
{
  "id": "eigenmethod_section-4-3",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-4-3",
  "type": "Theorem",
  "number": "7.4.1",
  "title": "",
  "body": "  Take . If is an constant matrix that has distinct real eigenvalues , , ..., , then there exist linearly independent corresponding eigenvectors , , ..., , and the general solution to can be written as    "
},
{
  "id": "eigenmethod_section-4-5",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-4-5",
  "type": "Example",
  "number": "7.4.4",
  "title": "",
  "body": "  Consider the system Find the general solution.  Earlier, we found the eigenvalues are . We found the eigenvector for the eigenvalue 3. Similarly we find the eigenvector for the eigenvalue 1, and for the eigenvalue 2 (exercise: check). Hence our general solution is In terms of a fundamental matrix solution,    "
},
{
  "id": "eigenmethod_section-4-6",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-4-6",
  "type": "Exercise",
  "number": "7.4.3",
  "title": "",
  "body": "  Check that this really solves the system.   "
},
{
  "id": "eigenmethod_section-5-8",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-5-8",
  "type": "Exercise",
  "number": "7.4.4",
  "title": "",
  "body": "  Check that these really are solutions.   "
},
{
  "id": "eigenmethod_section-5-11",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-5-11",
  "type": "Theorem",
  "number": "7.4.2",
  "title": "",
  "body": "  Let be a real-valued constant matrix. If has a complex eigenvalue and a corresponding eigenvector , then also has a complex eigenvalue with a corresponding eigenvector . Furthermore, has two linearly independent real-valued solutions    "
},
{
  "id": "eigenmethod_section-6-2",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-2",
  "type": "Exercise",
  "number": "7.4.5",
  "title": "",
  "body": "   (easy) Let be a matrix with an eigenvalue of 3 and a corresponding eigenvector . Find .   "
},
{
  "id": "eigenmethod_section-6-3",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-3",
  "type": "Exercise",
  "number": "7.4.6",
  "title": "",
  "body": "      Find the general solution of , using the eigenvalue method (first write the system in the form ).    Solve the system by solving each equation separately and verify you get the same general solution.     "
},
{
  "id": "eigenmethod_section-6-4",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-4",
  "type": "Exercise",
  "number": "7.4.7",
  "title": "",
  "body": "  Find the general solution of , using the eigenvalue method.   "
},
{
  "id": "eigenmethod_section-6-5",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-5",
  "type": "Exercise",
  "number": "7.4.8",
  "title": "",
  "body": "  Find the general solution of , using the eigenvalue method. Do not use complex exponentials in your solution.   "
},
{
  "id": "eigenmethod_section-6-6",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-6",
  "type": "Exercise",
  "number": "7.4.9",
  "title": "",
  "body": "      Compute eigenvalues and eigenvectors of .    Find the general solution of .     "
},
{
  "id": "eigenmethod_section-6-7",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-7",
  "type": "Exercise",
  "number": "7.4.10",
  "title": "",
  "body": "  Compute eigenvalues and eigenvectors of .   "
},
{
  "id": "eigenmethod_section-6-8",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-8",
  "type": "Exercise",
  "number": "7.4.11",
  "title": "",
  "body": "  Let be numbers. Find the eigenvalues of .   "
},
{
  "id": "eigenmethod_section-6-9",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-9",
  "type": "Exercise",
  "number": "7.4.101",
  "title": "",
  "body": "      Compute eigenvalues and eigenvectors of .    Solve the system .      a) Eigenvalues:  Eigenvectors: , ,  b)    "
},
{
  "id": "eigenmethod_section-6-10",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-10",
  "type": "Exercise",
  "number": "7.4.102",
  "title": "",
  "body": "      Compute eigenvalues and eigenvectors of .    Solve the system .      a) Eigenvalues: , Eigenvectors: ,  b)    "
},
{
  "id": "eigenmethod_section-6-11",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-11",
  "type": "Exercise",
  "number": "7.4.103",
  "title": "",
  "body": "  Solve , using the eigenvalue method.        "
},
{
  "id": "eigenmethod_section-6-12",
  "level": "2",
  "url": "eigenmethod_section.html#eigenmethod_section-6-12",
  "type": "Exercise",
  "number": "7.4.104",
  "title": "",
  "body": "  Solve , using the eigenvalue method.        "
},
{
  "id": "sec_twodimaut",
  "level": "1",
  "url": "sec_twodimaut.html",
  "type": "Section",
  "number": "7.5",
  "title": "Two-dimensional systems and their vector fields",
  "body": " Two-dimensional systems and their vector fields   Note: 1 lecture, part of §6.2 in , parts of §7.5 and §7.6 in  Let us take a moment to talk about constant coefficient linear homogeneous systems in the plane. Much intuition can be obtained by studying this simple case. Suppose we use coordinates for the plane as usual, and suppose is a matrix. Consider the system The system is autonomous (compare this section to ) and so we can draw a vector field (see the end of ). We will be able to visually tell what the vector field looks like and how the solutions behave, once we find the eigenvalues and eigenvectors of the matrix . For this section, we assume that has two eigenvalues and two corresponding eigenvectors.   Case 1. Suppose that the eigenvalues of are real and positive. We find two corresponding eigenvectors and plot them in the plane. For example, take the matrix . The eigenvalues are 1 and 2 and corresponding eigenvectors are and . See .   Eigenvectors of .    Suppose the point is on the line determined by an eigenvector for an eigenvalue . That is, for some scalar . Then The derivative is a multiple of and hence points along the line determined by . As , the derivative points in the direction of when is positive and in the opposite direction when is negative. Let us draw the lines determined by the eigenvectors, and let us draw arrows on the lines to indicate the directions. See .  We fill in the rest of the arrows for the vector field and we also draw a few solutions. See . The picture looks like a source with arrows coming out from the origin. Hence we call this type of picture a source source or sometimes an unstable node unstable node .   Eigenvectors of with directions.     Example source vector field with eigenvectors and solutions.     Case 2. Suppose both eigenvalues are negative. For example, take the negation of the matrix in case 1, . The eigenvalues are and and corresponding eigenvectors are the same, and . The calculation and the picture are almost the same. The only difference is that the eigenvalues are negative and hence all arrows are reversed. We get the picture in . We call this kind of picture a sink sink or a stable node stable node .   Example sink vector field with eigenvectors and solutions.     Example saddle vector field with eigenvectors and solutions.     Case 3. Suppose one eigenvalue is positive and one is negative. For example the matrix . The eigenvalues are 1 and and corresponding eigenvectors are and . We reverse the arrows on one line (corresponding to the negative eigenvalue) and we obtain the picture in . We call this picture a saddle point saddle point .  For the next three cases we will assume the eigenvalues are complex. In this case the eigenvectors are also complex and we cannot just plot them in the plane.   Case 4. Suppose the eigenvalues are purely imaginary. That is, suppose the eigenvalues are . For example, let . The eigenvalues turn out to be and eigenvectors are and . Consider the eigenvalue and its eigenvector . The real and imaginary parts of are We can take any linear combination of them to get other solutions, which one we take depends on the initial conditions. Now note that the real part is a parametric equation for an ellipse. Same with the imaginary part and in fact any linear combination of the two. This is what happens in general when the eigenvalues are purely imaginary. So when the eigenvalues are purely imaginary, we get ellipses ellipses (vector field) for the solutions. This type of picture is sometimes called a center center . See .   Example center vector field.     Example spiral source vector field.     Case 5. Now suppose the complex eigenvalues have a positive real part. That is, suppose the eigenvalues are for some . For example, let . The eigenvalues turn out to be and eigenvectors are and . We take and its eigenvector and find the real and imaginary parts of are Note the in front of the solutions. The solutions grow in magnitude while spinning around the origin. Hence we get a spiral source spiral source . See .   Case 6. Finally suppose the complex eigenvalues have a negative real part. That is, suppose the eigenvalues are for some . For example, let . The eigenvalues turn out to be and eigenvectors are and . We take and its eigenvector and find the real and imaginary parts of are Note the in front of the solutions. The solutions shrink in magnitude while spinning around the origin. Hence we get a spiral sink spiral sink . See .   Example spiral sink vector field.    We summarize the behavior of linear homogeneous two-dimensional systems given by a nonsingular matrix in . Systems where one of the eigenvalues is zero (the matrix is singular) come up in practice from time to time, see , and the pictures are somewhat different (simpler in a way). See the exercises.   Summary of behavior of linear homogeneous two-dimensional systems.   Eigenvalues Behavior  real and both positive source \/ unstable node  real and both negative sink \/ stable node  real and opposite signs saddle  purely imaginary center point \/ ellipses  complex with positive real part spiral source  complex with negative real part spiral sink      Exercises    Take the equation , with , , for the mass-spring system.    Convert this to a system of first order equations.    Classify for what do you get which behavior.    Can you explain from physical intuition why you do not get all the different kinds of behavior here?        What happens in the case when ? In this case the eigenvalue is repeated and there is only one independent eigenvector. What picture does this look like?      What happens in the case when ? Does this look like any of the pictures we have drawn?      Which behaviors are possible if is diagonal, that is ? You can assume that and are not zero.      Take the system from , , . As we said, one of the eigenvalues is zero. What is the other eigenvalue, how does the picture look like and what happens when goes to infinity.      Describe the behavior of the following systems without solving:     ,  .     ,  .     ,  .     ,  .     ,  .      a) Two eigenvalues: so the behavior is a saddle. b) Two eigenvalues: and , so the behavior is a source. c) Two eigenvalues: , so the behavior is a center (ellipses). d) Two eigenvalues: and , so the behavior is a sink. e) Two eigenvalues: and , so the behavior is a saddle.      Suppose that where is a 2 by 2 matrix with eigenvalues . Describe the behavior.    Spiral source.      Take . Draw the vector field and describe the behavior. Is it one of the behaviors that we have seen before?     The solution does not move anywhere if . When is positive, the solution moves (with constant speed) in the positive direction. When is negative, the solution moves (with constant speed) in the negative direction. It is not one of the behaviors we saw. Note that the matrix has a double eigenvalue 0 and the general solution is and , which agrees with the description above.     "
},
{
  "id": "pln_source-eigfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_source-eigfig",
  "type": "Figure",
  "number": "7.4",
  "title": "",
  "body": " Eigenvectors of .   "
},
{
  "id": "pln_source-eig-arrfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_source-eig-arrfig",
  "type": "Figure",
  "number": "7.5",
  "title": "",
  "body": " Eigenvectors of with directions.   "
},
{
  "id": "pln_source-fullfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_source-fullfig",
  "type": "Figure",
  "number": "7.6",
  "title": "",
  "body": " Example source vector field with eigenvectors and solutions.   "
},
{
  "id": "pln_sink-fullfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_sink-fullfig",
  "type": "Figure",
  "number": "7.7",
  "title": "",
  "body": " Example sink vector field with eigenvectors and solutions.   "
},
{
  "id": "pln_saddle-fullfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_saddle-fullfig",
  "type": "Figure",
  "number": "7.8",
  "title": "",
  "body": " Example saddle vector field with eigenvectors and solutions.   "
},
{
  "id": "pln_ellipsesfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_ellipsesfig",
  "type": "Figure",
  "number": "7.9",
  "title": "",
  "body": " Example center vector field.   "
},
{
  "id": "pln_spiral-sourcefig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_spiral-sourcefig",
  "type": "Figure",
  "number": "7.10",
  "title": "",
  "body": " Example spiral source vector field.   "
},
{
  "id": "pln_spiral-sinkfig",
  "level": "2",
  "url": "sec_twodimaut.html#pln_spiral-sinkfig",
  "type": "Figure",
  "number": "7.11",
  "title": "",
  "body": " Example spiral sink vector field.   "
},
{
  "id": "pln_behtab",
  "level": "2",
  "url": "sec_twodimaut.html#pln_behtab",
  "type": "Table",
  "number": "7.5.1",
  "title": "Summary of behavior of linear homogeneous two-dimensional systems.",
  "body": " Summary of behavior of linear homogeneous two-dimensional systems.   Eigenvalues Behavior  real and both positive source \/ unstable node  real and both negative sink \/ stable node  real and opposite signs saddle  purely imaginary center point \/ ellipses  complex with positive real part spiral source  complex with negative real part spiral sink   "
},
{
  "id": "sec_twodimaut-3-2",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-3-2",
  "type": "Exercise",
  "number": "7.5.1",
  "title": "",
  "body": "  Take the equation , with , , for the mass-spring system.    Convert this to a system of first order equations.    Classify for what do you get which behavior.    Can you explain from physical intuition why you do not get all the different kinds of behavior here?     "
},
{
  "id": "sec_twodimaut-3-3",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-3-3",
  "type": "Exercise",
  "number": "7.5.2",
  "title": "",
  "body": "  What happens in the case when ? In this case the eigenvalue is repeated and there is only one independent eigenvector. What picture does this look like?   "
},
{
  "id": "sec_twodimaut-3-4",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-3-4",
  "type": "Exercise",
  "number": "7.5.3",
  "title": "",
  "body": "  What happens in the case when ? Does this look like any of the pictures we have drawn?   "
},
{
  "id": "sec_twodimaut-3-5",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-3-5",
  "type": "Exercise",
  "number": "7.5.4",
  "title": "",
  "body": "  Which behaviors are possible if is diagonal, that is ? You can assume that and are not zero.   "
},
{
  "id": "sec_twodimaut-3-6",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-3-6",
  "type": "Exercise",
  "number": "7.5.5",
  "title": "",
  "body": "  Take the system from , , . As we said, one of the eigenvalues is zero. What is the other eigenvalue, how does the picture look like and what happens when goes to infinity.   "
},
{
  "id": "sec_twodimaut-3-7",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-3-7",
  "type": "Exercise",
  "number": "7.5.101",
  "title": "",
  "body": "  Describe the behavior of the following systems without solving:     ,  .     ,  .     ,  .     ,  .     ,  .      a) Two eigenvalues: so the behavior is a saddle. b) Two eigenvalues: and , so the behavior is a source. c) Two eigenvalues: , so the behavior is a center (ellipses). d) Two eigenvalues: and , so the behavior is a sink. e) Two eigenvalues: and , so the behavior is a saddle.   "
},
{
  "id": "sec_twodimaut-3-8",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-3-8",
  "type": "Exercise",
  "number": "7.5.102",
  "title": "",
  "body": "  Suppose that where is a 2 by 2 matrix with eigenvalues . Describe the behavior.    Spiral source.   "
},
{
  "id": "sec_twodimaut-3-9",
  "level": "2",
  "url": "sec_twodimaut.html#sec_twodimaut-3-9",
  "type": "Exercise",
  "number": "7.5.103",
  "title": "",
  "body": "  Take . Draw the vector field and describe the behavior. Is it one of the behaviors that we have seen before?     The solution does not move anywhere if . When is positive, the solution moves (with constant speed) in the positive direction. When is negative, the solution moves (with constant speed) in the negative direction. It is not one of the behaviors we saw. Note that the matrix has a double eigenvalue 0 and the general solution is and , which agrees with the description above.   "
},
{
  "id": "sol_section",
  "level": "1",
  "url": "sol_section.html",
  "type": "Section",
  "number": "7.6",
  "title": "Second order systems and applications",
  "body": " Second order systems and applications   Note: more than 2 lectures, §5.4 in , not in    Undamped mass-spring systems  While we did say that we will usually only look at first order systems, it is sometimes more convenient to study the system in the way it arises naturally. For example, suppose we have 3 masses connected by springs between two walls. We could pick any higher number, and the math would be essentially the same, but for simplicity we pick 3 right now. Let us also assume no friction, that is, the system is undamped undamped motion systems . The masses are , , and and the spring constants are , , , and . Let be the displacement from rest position of the first mass, and and the displacement of the second and third mass. We make, as usual, positive values go right (as grows, the first mass is moving right). See .   System of masses and springs.    This simple system turns up in unexpected places. For example, our world really consists of many small particles of matter interacting together. When we try the system above with many more masses, we obtain a good approximation to how an elastic material behaves. By somehow taking a limit of the number of masses going to infinity, we obtain the continuous one-dimensional wave equation (that we study in ). But we digress.  Let us set up the equations for the three mass system three mass system . By Hooke's law Hooke's law , the force acting on the mass equals the spring compression times the spring constant. By Newton's second law Newton's second law , force is mass times acceleration. So if we sum the forces acting on each mass, put the right sign in front of each term, depending on the direction in which it is acting, and set this equal to mass times the acceleration, we end up with the desired system of equations. We define the matrices We write the equation simply as At this point we could introduce 3 new variables and write out a system of 6 first order equations. We claim this simple setup is easier to handle as a second order system. We call the displacement vector displacement vector , the mass matrix mass matrix , and the stiffness matrix stiffness matrix .    Repeat this setup for 4 masses (find the matrices and ). Do it for 5 masses. Can you find a prescription to do it for masses?    As with a single equation we want to divide by . This means computing the inverse of . The masses are all nonzero and is a diagonal matrix diagonal matrix , so computing the inverse is easy: This fact follows readily by how we multiply diagonal matrices. As an exercise, you should verify that .  Let . We look at the system , or Many real world systems can be modeled by this equation. For simplicity, we will only talk about the given masses-and-springs problem. We try a solution of the form We compute that for this guess, . We plug our guess into the equation and get We divide by to arrive at . Hence if is an eigenvalue of and is a corresponding eigenvector, we have found a solution.  In our example, and in other common applications, has only real negative eigenvalues (and possibly a zero eigenvalue). So we study only this case. When an eigenvalue is negative, it means that is negative. Hence there is some real number such that . Then . The solution we guessed was By taking the real and imaginary parts (note that is real), we find that and are linearly independent solutions.  If an eigenvalue is zero, it turns out that both and are solutions, where is an eigenvector corresponding to the eigenvalue 0.    Show that if has a zero eigenvalue and is a corresponding eigenvector, then is a solution of for arbitrary constants and .      Let be a real matrix with distinct real negative (or zero) eigenvalues we denote by , and corresponding eigenvectors by , , ..., . If is invertible (that is, if ), then is the general solution of for some arbitrary constants and . If has a zero eigenvalue, that is , and all other eigenvalues are distinct and negative, then the general solution can be written as     We use this solution and the setup from the introduction of this section even when some of the masses and springs are missing. For example, when there are only 2 masses and only 2 springs, simply take only the equations for the two masses and set all the spring constants for the springs that are missing to zero.    Examples    Consider the setup in , with , , , and .   System of masses and springs.    The equations we write down are or   We find the eigenvalues of to be (exercise). We find corresponding eigenvectors to be and respectively (exercise).  We check the theorem and note that and . Hence the general solution is   The two terms in the solution represent the two so-called natural natural mode of oscillation or normal modes of oscillation normal mode of oscillation . And the two (angular) frequencies are the natural frequencies natural frequency . The first natural frequency is 1, and second natural frequency is 2. The two modes are plotted in .   The two modes of the mass-spring system. In the left plot the masses are moving in unison and in the right plot are masses moving in the opposite direction.    Let us write the solution as The first term, corresponds to the mode where the masses move synchronously in the same direction.  The second term, corresponds to the mode where the masses move synchronously but in opposite directions.  The general solution is a combination of the two modes. That is, the initial conditions determine the amplitude and phase shift of each mode. As an example, suppose we have initial conditions We use the constants to solve for initial conditions. First We solve (exercise) to find , . To find the and , we differentiate first: Now we solve: Again solve (exercise) to find , . So our solution is The graphs of the two displacements, and of the two carts is in .   Superposition of the two modes given the initial conditions.        We have two toy rail cars. Car 1 of mass 2 kg is traveling at 3 towards the second rail car of mass 1 kg. There is a bumper on the second rail car that engages at the moment the cars hit (it connects to two cars) and does not let go. The bumper acts like a spring of spring constant . The second car is 10 meters from a wall. See .   The crash of two rail cars.    We want to ask several questions. At what time after the cars link does impact with the wall happen? What is the speed of car 2 when it hits the wall?  OK, let us first set the system up. Let be the time when the two cars link up. Let be the displacement of the first car from the position at , and let be the displacement of the second car from its original location. Then the time when is exactly the time when impact with wall occurs. For this , is the speed at impact. This system acts just like the system of the previous example but without . Hence the equation is or   We compute the eigenvalues of . It is not hard to see that the eigenvalues are 0 and (exercise). Furthermore, eigenvectors are and respectively (exercise). Then , , and by the second part of the theorem the general solution is   We now apply the initial conditions. First the cars start at position 0 so and . The first car is traveling at 3 , so and the second car starts at rest, so . The first conditions says It is not hard to see that . We set and in and differentiate to get So Solving these two equations we find and . Hence the position of our cars is (until the impact with the wall) Note how the presence of the zero eigenvalue resulted in a term containing . This means that the cars will be traveling in the positive direction as time grows, which is what we expect.  What we are really interested in is the second expression, the one for . We have . See for the plot of versus time.  Just from the graph we can see that time of impact will be a little more than 5 seconds from time zero. For this we have to solve the equation . Using a computer (or even a graphing calculator) we find that seconds.   Position of the second car in time (ignoring the wall).    The speed of the second car is . At the time of impact (5.22 seconds from ) we get . The maximum speed is the maximum of , which is 4. We are traveling at almost the maximum speed when we hit the wall.  Suppose that Bob is a tiny person sitting on car 2. Bob has a Martini in his hand and would like not to spill it. Let us suppose Bob would not spill his Martini when the first car links up with car 2, but if car 2 hits the wall at any speed greater than zero, Bob will spill his drink. Suppose Bob can move car 2 a few meters towards or away from the wall (he cannot go all the way to the wall, nor can he get out of the way of the first car). Is there a safe distance for him to be at? A distance such that the impact with the wall is at zero speed?  The answer is yes. On , note the plateau between and . There is a point where the speed is zero. To find it we solve . This is when or in other words when and so on. We plug in the first value to obtain . So a safe distance is about 7 and a quarter meters from the wall.  Alternatively Bob could move away from the wall towards the incoming car 2, where another safe distance is and so on. We can use all the different such that . Of course is also a solution, corresponding to , but that means standing right at the wall.      Forced oscillations  Finally we move to forced oscillations forced motion systems . Suppose that now our system is That is, we are adding periodic forcing to the system in the direction of the vector .  As before, this system just requires us to find one particular solution , add it to the general solution of the associated homogeneous system , and we will have the general solution to . Let us suppose that is not one of the natural frequencies of , then we can guess where is an unknown constant vector. Note that we do not need to use sine since there are only second derivatives. We solve for to find . This is really just the method of undetermined coefficients undetermined coefficients for second order systems for systems. Let us differentiate twice to get Plug and into equation : We cancel out the cosine and rearrange the equation to obtain So Of course this is possible only if is invertible. That matrix is invertible if and only if is not an eigenvalue of . That is true if and only if is not a natural frequency of the system.  We simplified things a little bit. If we wish to have the forcing term to be in the units of force, say Newtons, then we must write If we then write things in terms of , we have where .    Let us take the example in with the same parameters as before: , , , and . Now suppose that there is a force acting on the second cart.  The equation is We solved the associated homogeneous equation before and found the complementary solution to be   The natural frequencies are 1 and 2. As 3 is not a natural frequency, we try . We invert : Hence,   Combining with the general solution of the associated homogeneous problem, we get that the general solution to is We then solve for the constants , , , and using any initial conditions we are given.    Note that given force , we write the equation as to get the units right. Then we write . The term in is in units of force per unit mass.  If is a natural frequency of the system, resonance resonance may occur, because we will have to try a particular solution of the form That is assuming that the eigenvalues of the coefficient matrix are distinct. Next, note that the amplitude of this solution grows without bound as grows.    Exercises    Find a particular solution to        (challenging) Let us take the example in with the same parameters as before: , , and , except for , which is unknown. Suppose that there is a force acting on the first mass. Find an such that there exists a particular solution where the first mass does not move.  Note: This idea is called dynamic damping dynamic damping . In practice there will be a small amount of damping and so any transient solution will disappear and after long enough time, the first mass will always come to a stop.      Let us take the , but that at time of impact, car 2 is moving to the left at the speed of 3 .    Find the behavior of the system after linkup.    Will the second car hit the wall, or will it be moving away from the wall as time goes on?    At what speed would the first car have to be traveling for the system to essentially stay in place after linkup?        Let us take the example in with parameters , . Does there exist a set of initial conditions for which the first cart moves but the second cart does not? If so, find those conditions. If not, argue why not.      Find the general solution to .             Suppose there are three carts of equal mass and connected by two springs of constant (and no connections to walls). Set up the system and find its general solution.     . Solution:       Suppose a cart of mass 2 kg is attached by a spring of constant to a cart of mass 3 kg, which is attached to the wall by a spring also of constant . Suppose that the initial position of the first cart is 1 meter in the positive direction from the rest position, and the second mass starts at the rest position. The masses are not moving and are let go. Find the position of the second mass as a function of time.          "
},
{
  "id": "sosa_threecartsfig",
  "level": "2",
  "url": "sol_section.html#sosa_threecartsfig",
  "type": "Figure",
  "number": "7.12",
  "title": "",
  "body": " System of masses and springs.   "
},
{
  "id": "sol_section-3-6",
  "level": "2",
  "url": "sol_section.html#sol_section-3-6",
  "type": "Exercise",
  "number": "7.6.1",
  "title": "",
  "body": "  Repeat this setup for 4 masses (find the matrices and ). Do it for 5 masses. Can you find a prescription to do it for masses?   "
},
{
  "id": "sol_section-3-11",
  "level": "2",
  "url": "sol_section.html#sol_section-3-11",
  "type": "Exercise",
  "number": "7.6.2",
  "title": "",
  "body": "  Show that if has a zero eigenvalue and is a corresponding eigenvector, then is a solution of for arbitrary constants and .   "
},
{
  "id": "sol_section-3-12",
  "level": "2",
  "url": "sol_section.html#sol_section-3-12",
  "type": "Theorem",
  "number": "7.6.1",
  "title": "",
  "body": "  Let be a real matrix with distinct real negative (or zero) eigenvalues we denote by , and corresponding eigenvectors by , , ..., . If is invertible (that is, if ), then is the general solution of for some arbitrary constants and . If has a zero eigenvalue, that is , and all other eigenvalues are distinct and negative, then the general solution can be written as    "
},
{
  "id": "sol_section-4-2",
  "level": "2",
  "url": "sol_section.html#sol_section-4-2",
  "type": "Example",
  "number": "7.6.1",
  "title": "",
  "body": "  Consider the setup in , with , , , and .   System of masses and springs.    The equations we write down are or   We find the eigenvalues of to be (exercise). We find corresponding eigenvectors to be and respectively (exercise).  We check the theorem and note that and . Hence the general solution is   The two terms in the solution represent the two so-called natural natural mode of oscillation or normal modes of oscillation normal mode of oscillation . And the two (angular) frequencies are the natural frequencies natural frequency . The first natural frequency is 1, and second natural frequency is 2. The two modes are plotted in .   The two modes of the mass-spring system. In the left plot the masses are moving in unison and in the right plot are masses moving in the opposite direction.    Let us write the solution as The first term, corresponds to the mode where the masses move synchronously in the same direction.  The second term, corresponds to the mode where the masses move synchronously but in opposite directions.  The general solution is a combination of the two modes. That is, the initial conditions determine the amplitude and phase shift of each mode. As an example, suppose we have initial conditions We use the constants to solve for initial conditions. First We solve (exercise) to find , . To find the and , we differentiate first: Now we solve: Again solve (exercise) to find , . So our solution is The graphs of the two displacements, and of the two carts is in .   Superposition of the two modes given the initial conditions.     "
},
{
  "id": "sosa_railcarexample",
  "level": "2",
  "url": "sol_section.html#sosa_railcarexample",
  "type": "Example",
  "number": "7.6.2",
  "title": "",
  "body": "  We have two toy rail cars. Car 1 of mass 2 kg is traveling at 3 towards the second rail car of mass 1 kg. There is a bumper on the second rail car that engages at the moment the cars hit (it connects to two cars) and does not let go. The bumper acts like a spring of spring constant . The second car is 10 meters from a wall. See .   The crash of two rail cars.    We want to ask several questions. At what time after the cars link does impact with the wall happen? What is the speed of car 2 when it hits the wall?  OK, let us first set the system up. Let be the time when the two cars link up. Let be the displacement of the first car from the position at , and let be the displacement of the second car from its original location. Then the time when is exactly the time when impact with wall occurs. For this , is the speed at impact. This system acts just like the system of the previous example but without . Hence the equation is or   We compute the eigenvalues of . It is not hard to see that the eigenvalues are 0 and (exercise). Furthermore, eigenvectors are and respectively (exercise). Then , , and by the second part of the theorem the general solution is   We now apply the initial conditions. First the cars start at position 0 so and . The first car is traveling at 3 , so and the second car starts at rest, so . The first conditions says It is not hard to see that . We set and in and differentiate to get So Solving these two equations we find and . Hence the position of our cars is (until the impact with the wall) Note how the presence of the zero eigenvalue resulted in a term containing . This means that the cars will be traveling in the positive direction as time grows, which is what we expect.  What we are really interested in is the second expression, the one for . We have . See for the plot of versus time.  Just from the graph we can see that time of impact will be a little more than 5 seconds from time zero. For this we have to solve the equation . Using a computer (or even a graphing calculator) we find that seconds.   Position of the second car in time (ignoring the wall).    The speed of the second car is . At the time of impact (5.22 seconds from ) we get . The maximum speed is the maximum of , which is 4. We are traveling at almost the maximum speed when we hit the wall.  Suppose that Bob is a tiny person sitting on car 2. Bob has a Martini in his hand and would like not to spill it. Let us suppose Bob would not spill his Martini when the first car links up with car 2, but if car 2 hits the wall at any speed greater than zero, Bob will spill his drink. Suppose Bob can move car 2 a few meters towards or away from the wall (he cannot go all the way to the wall, nor can he get out of the way of the first car). Is there a safe distance for him to be at? A distance such that the impact with the wall is at zero speed?  The answer is yes. On , note the plateau between and . There is a point where the speed is zero. To find it we solve . This is when or in other words when and so on. We plug in the first value to obtain . So a safe distance is about 7 and a quarter meters from the wall.  Alternatively Bob could move away from the wall towards the incoming car 2, where another safe distance is and so on. We can use all the different such that . Of course is also a solution, corresponding to , but that means standing right at the wall.   "
},
{
  "id": "sol_section-5-5",
  "level": "2",
  "url": "sol_section.html#sol_section-5-5",
  "type": "Example",
  "number": "7.6.3",
  "title": "",
  "body": "  Let us take the example in with the same parameters as before: , , , and . Now suppose that there is a force acting on the second cart.  The equation is We solved the associated homogeneous equation before and found the complementary solution to be   The natural frequencies are 1 and 2. As 3 is not a natural frequency, we try . We invert : Hence,   Combining with the general solution of the associated homogeneous problem, we get that the general solution to is We then solve for the constants , , , and using any initial conditions we are given.   "
},
{
  "id": "sol_section-6-2",
  "level": "2",
  "url": "sol_section.html#sol_section-6-2",
  "type": "Exercise",
  "number": "7.6.3",
  "title": "",
  "body": "  Find a particular solution to    "
},
{
  "id": "sol_section-6-3",
  "level": "2",
  "url": "sol_section.html#sol_section-6-3",
  "type": "Exercise",
  "number": "7.6.4",
  "title": "",
  "body": "   (challenging) Let us take the example in with the same parameters as before: , , and , except for , which is unknown. Suppose that there is a force acting on the first mass. Find an such that there exists a particular solution where the first mass does not move.  Note: This idea is called dynamic damping dynamic damping . In practice there will be a small amount of damping and so any transient solution will disappear and after long enough time, the first mass will always come to a stop.   "
},
{
  "id": "sol_section-6-4",
  "level": "2",
  "url": "sol_section.html#sol_section-6-4",
  "type": "Exercise",
  "number": "7.6.5",
  "title": "",
  "body": "  Let us take the , but that at time of impact, car 2 is moving to the left at the speed of 3 .    Find the behavior of the system after linkup.    Will the second car hit the wall, or will it be moving away from the wall as time goes on?    At what speed would the first car have to be traveling for the system to essentially stay in place after linkup?     "
},
{
  "id": "sol_section-6-5",
  "level": "2",
  "url": "sol_section.html#sol_section-6-5",
  "type": "Exercise",
  "number": "7.6.6",
  "title": "",
  "body": "  Let us take the example in with parameters , . Does there exist a set of initial conditions for which the first cart moves but the second cart does not? If so, find those conditions. If not, argue why not.   "
},
{
  "id": "sol_section-6-6",
  "level": "2",
  "url": "sol_section.html#sol_section-6-6",
  "type": "Exercise",
  "number": "7.6.101",
  "title": "",
  "body": "  Find the general solution to .          "
},
{
  "id": "sol_section-6-7",
  "level": "2",
  "url": "sol_section.html#sol_section-6-7",
  "type": "Exercise",
  "number": "7.6.102",
  "title": "",
  "body": "  Suppose there are three carts of equal mass and connected by two springs of constant (and no connections to walls). Set up the system and find its general solution.     . Solution:    "
},
{
  "id": "sol_section-6-8",
  "level": "2",
  "url": "sol_section.html#sol_section-6-8",
  "type": "Exercise",
  "number": "7.6.103",
  "title": "",
  "body": "  Suppose a cart of mass 2 kg is attached by a spring of constant to a cart of mass 3 kg, which is attached to the wall by a spring also of constant . Suppose that the initial position of the first cart is 1 meter in the positive direction from the rest position, and the second mass starts at the rest position. The masses are not moving and are let go. Find the position of the second mass as a function of time.        "
},
{
  "id": "sec_multeigen",
  "level": "1",
  "url": "sec_multeigen.html",
  "type": "Section",
  "number": "7.7",
  "title": "Multiple eigenvalues",
  "body": " Multiple eigenvalues   Note: 1 or 1.5 lectures, §5.5 in , §7.8 in  It may happen that a matrix has some repeated eigenvalues. That is, the characteristic equation may have repeated roots. This is actually unlikely to happen for a random matrix. If we take a small perturbation of (we change the entries of slightly), we get a matrix with distinct eigenvalues. As any system we want to solve in practice is an approximation to reality anyway, it is not absolutely indispensable to know how to solve these corner cases. On the other hand, these cases do come up in applications from time to time. Furthermore, if we have distinct but very close eigenvalues, the behavior is similar to that of repeated eigenvalues, and so understanding that case will give us insight into what is going on.    Geometric multiplicity  Take the diagonal matrix  has an eigenvalue 3 of multiplicity 2. We call the multiplicity of the eigenvalue multiplicity of an eigenvalue in the characteristic equation the algebraic multiplicity algebraic multiplicity . In this case, there also exist 2 linearly independent eigenvectors, and corresponding to the eigenvalue 3. This means that the so-called geometric multiplicity geometric multiplicity of this eigenvalue is also 2.  In all the theorems where we required a matrix to have distinct eigenvalues, we only really needed to have linearly independent eigenvectors. For example, has the general solution Let us restate the theorem about real eigenvalues. In the following theorem we will repeat eigenvalues according to (algebraic) multiplicity. So for the matrix above, we would say that it has eigenvalues 3 and 3.    Suppose the matrix has real eigenvalues (not necessarily distinct), , , ..., , and there are linearly independent corresponding eigenvectors , , ..., . Then the general solution to can be written as     The geometric multiplicity of an eigenvalue of algebraic multiplicity is equal to the number of corresponding linearly independent eigenvectors. The geometric multiplicity is always less than or equal to the algebraic multiplicity. The theorem handles the case when these two multiplicities are equal for all eigenvalues. If for an eigenvalue the geometric multiplicity is equal to the algebraic multiplicity, then we say the eigenvalue is complete complete eigenvalue .  In other words, the hypothesis of the theorem could be stated as saying that if all the eigenvalues of are complete, then there are linearly independent eigenvectors and thus we have the given general solution.  If the geometric multiplicity of an eigenvalue is 2 or greater, then the set of linearly independent eigenvectors is not unique up to multiples as it was before. For example, for the diagonal matrix we could also pick eigenvectors and , or in fact any pair of two linearly independent vectors. The number of linearly independent eigenvectors corresponding to is the number of free variables we obtain when solving . We pick specific values for those free variables to obtain eigenvectors. If you pick different values, you may get different eigenvectors.    Defective eigenvalues  If an matrix has less than linearly independent eigenvectors, it is said to be deficient deficient matrix . Then there is at least one eigenvalue with an algebraic multiplicity that is higher than its geometric multiplicity. We call this eigenvalue defective defective eigenvalue and the difference between the two multiplicities we call the defect defect .    The matrix has an eigenvalue 3 of algebraic multiplicity 2. Let us try to compute eigenvectors. We must have that . Hence any eigenvector is of the form . Any two such vectors are linearly dependent, and hence the geometric multiplicity of the eigenvalue is 1. Therefore, the defect is 1, and we can no longer apply the eigenvalue method directly to a system of ODEs with such a coefficient matrix.  Roughly, the key observation is that if is an eigenvalue of of algebraic multiplicity , then we can find certain linearly independent vectors solving for various powers . We will call these generalized eigenvectors generalized eigenvectors .  Let us continue with the example and the equation . We found an eigenvalue of (algebraic) multiplicity 2 and defect 1. We found one eigenvector . We have one solution We are now stuck, we get no other solutions from standard eigenvectors. But we need two linearly independent solutions to find the general solution of the equation.  Let us try (in the spirit of repeated roots of the characteristic equation for a single equation) another solution of the form We differentiate to get As we are assuming that is a solution, must equal . So let's compute : By looking at the coefficients of and we see and . This means that Therefore, is a solution if these two equations are satisfied. The second equation is satisfied if is an eigenvector, and we found the eigenvector above, so let . So, if we can find a that solves , then we are done. This is just a bunch of linear equations to solve and we are by now very good at that. Let us solve . Write By inspection we see that letting ( could be anything in fact) and does the job. Hence we can take . Our general solution to is Let us check that we really do have the solution. First . Good. Now . Good.    In the example, if we plug into we find Furthermore, if , then is an eigenvector, a multiple of . In this case is just the zero matrix (exercise). So any vector solves and we just need a such that . Then we could use for , and for .  Note that the system has a simpler solution since is a so-called upper triangular matrix upper triangular matrix , that is every entry below the diagonal is zero. In particular, the equation for does not depend on . Mind you, not every defective matrix is triangular.    Solve by first solving for and then for independently. Check that you got the same solution as we did above.    Let us describe the general algorithm. Suppose that is an eigenvalue of multiplicity 2, defect 1. First find an eigenvector of . That is, solves . Then, find a vector such that This gives us two linearly independent solutions     Consider the system Compute the eigenvalues, The eigenvalues are 1 and 2, where 2 has multiplicity 2. We leave it to the reader to find that is an eigenvector for the eigenvalue .  Let's focus on . We compute eigenvectors: The first equation says that , so the last equation is . Let be the free variable to find that . Perhaps let to find an eigenvector . Problem is that setting to anything else just gets multiples of this vector and so we have a defect of 1. Let be the eigenvector and let's look for a generalized eigenvector : or where we used , , as components of for simplicity. The first equation says so . The second equation says nothing. The last equation is , or , or . We let be the free variable and we choose . We find .  The general solution is therefore,     This machinery can also be generalized to higher multiplicities and higher defects. We will not go over this method in detail, but let us just sketch the ideas. Suppose that has an eigenvalue of multiplicity . We find vectors such that Such vectors are called generalized eigenvectors generalized eigenvectors (then is an eigenvector). For the eigenvector there is a chain of generalized eigenvectors through such that: Really once you find the such that but , you find the entire chain since you can compute the rest, , , etc. We form the linearly independent solutions Recall that is the factorial. If you have an eigenvalue of geometric multiplicity , you will have to find such chains (some of them might be short: just the single eigenvector equation). We go until we form linearly independent solutions where is the algebraic multiplicity. We don't quite know which specific eigenvectors go with which chain, so start by finding first for the longest possible chain and go from there.  For example, if is an eigenvalue of of algebraic multiplicity 3 and defect 2, then solve That is, find such that , but . Then you are done as and . The 3 linearly independent solutions are   If on the other hand has an eigenvalue of algebraic multiplicity 3 and defect 1, then solve Here and are actual honest eigenvectors, and is a generalized eigenvector. So there are two chains. To solve, first find a such that , but . Then is going to be an eigenvector. Then solve for an eigenvector that is linearly independent from . You get 3 linearly independent solutions     Exercises    Let . Find the general solution of .      Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .        Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of in two different ways and verify you get the same answer.        Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .        Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .        Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .        Suppose that is a matrix with a repeated eigenvalue . Suppose that there are two linearly independent eigenvectors. Show that .      Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .      a)  b) No defects. c)       Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .      a)  b) Eigenvalue 1 has a defect of 1 c)       Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .      a)  b) Eigenvalue 2 has a defect of 2 c)       Let , where , , and are unknowns. Suppose that is a doubled eigenvalue of defect 1, and suppose that is a corresponding eigenvector. Find and show that there is only one such matrix .          "
},
{
  "id": "sec_multeigen-3-4",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-3-4",
  "type": "Theorem",
  "number": "7.7.1",
  "title": "",
  "body": "  Suppose the matrix has real eigenvalues (not necessarily distinct), , , ..., , and there are linearly independent corresponding eigenvectors , , ..., . Then the general solution to can be written as    "
},
{
  "id": "sec_multeigen-4-3",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-4-3",
  "type": "Example",
  "number": "7.7.1",
  "title": "",
  "body": "  The matrix has an eigenvalue 3 of algebraic multiplicity 2. Let us try to compute eigenvectors. We must have that . Hence any eigenvector is of the form . Any two such vectors are linearly dependent, and hence the geometric multiplicity of the eigenvalue is 1. Therefore, the defect is 1, and we can no longer apply the eigenvalue method directly to a system of ODEs with such a coefficient matrix.  Roughly, the key observation is that if is an eigenvalue of of algebraic multiplicity , then we can find certain linearly independent vectors solving for various powers . We will call these generalized eigenvectors generalized eigenvectors .  Let us continue with the example and the equation . We found an eigenvalue of (algebraic) multiplicity 2 and defect 1. We found one eigenvector . We have one solution We are now stuck, we get no other solutions from standard eigenvectors. But we need two linearly independent solutions to find the general solution of the equation.  Let us try (in the spirit of repeated roots of the characteristic equation for a single equation) another solution of the form We differentiate to get As we are assuming that is a solution, must equal . So let's compute : By looking at the coefficients of and we see and . This means that Therefore, is a solution if these two equations are satisfied. The second equation is satisfied if is an eigenvector, and we found the eigenvector above, so let . So, if we can find a that solves , then we are done. This is just a bunch of linear equations to solve and we are by now very good at that. Let us solve . Write By inspection we see that letting ( could be anything in fact) and does the job. Hence we can take . Our general solution to is Let us check that we really do have the solution. First . Good. Now . Good.   "
},
{
  "id": "sec_multeigen-4-6",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-4-6",
  "type": "Exercise",
  "number": "7.7.1",
  "title": "",
  "body": "  Solve by first solving for and then for independently. Check that you got the same solution as we did above.   "
},
{
  "id": "sec_multeigen-4-8",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-4-8",
  "type": "Example",
  "number": "7.7.2",
  "title": "",
  "body": "  Consider the system Compute the eigenvalues, The eigenvalues are 1 and 2, where 2 has multiplicity 2. We leave it to the reader to find that is an eigenvector for the eigenvalue .  Let's focus on . We compute eigenvectors: The first equation says that , so the last equation is . Let be the free variable to find that . Perhaps let to find an eigenvector . Problem is that setting to anything else just gets multiples of this vector and so we have a defect of 1. Let be the eigenvector and let's look for a generalized eigenvector : or where we used , , as components of for simplicity. The first equation says so . The second equation says nothing. The last equation is , or , or . We let be the free variable and we choose . We find .  The general solution is therefore,    "
},
{
  "id": "sec_multeigen-5-2",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-2",
  "type": "Exercise",
  "number": "7.7.2",
  "title": "",
  "body": "  Let . Find the general solution of .   "
},
{
  "id": "sec_multeigen-5-3",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-3",
  "type": "Exercise",
  "number": "7.7.3",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .     "
},
{
  "id": "sec_multeigen-5-4",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-4",
  "type": "Exercise",
  "number": "7.7.4",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of in two different ways and verify you get the same answer.     "
},
{
  "id": "sec_multeigen-5-5",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-5",
  "type": "Exercise",
  "number": "7.7.5",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .     "
},
{
  "id": "sec_multeigen-5-6",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-6",
  "type": "Exercise",
  "number": "7.7.6",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .     "
},
{
  "id": "sec_multeigen-5-7",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-7",
  "type": "Exercise",
  "number": "7.7.7",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .     "
},
{
  "id": "sec_multeigen-5-8",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-8",
  "type": "Exercise",
  "number": "7.7.8",
  "title": "",
  "body": "  Suppose that is a matrix with a repeated eigenvalue . Suppose that there are two linearly independent eigenvectors. Show that .   "
},
{
  "id": "sec_multeigen-5-9",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-9",
  "type": "Exercise",
  "number": "7.7.101",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .      a)  b) No defects. c)    "
},
{
  "id": "sec_multeigen-5-10",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-10",
  "type": "Exercise",
  "number": "7.7.102",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .      a)  b) Eigenvalue 1 has a defect of 1 c)    "
},
{
  "id": "sec_multeigen-5-11",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-11",
  "type": "Exercise",
  "number": "7.7.103",
  "title": "",
  "body": "  Let .    What are the eigenvalues?    What is\/are the defect(s) of the eigenvalue(s)?    Find the general solution of .      a)  b) Eigenvalue 2 has a defect of 2 c)    "
},
{
  "id": "sec_multeigen-5-12",
  "level": "2",
  "url": "sec_multeigen.html#sec_multeigen-5-12",
  "type": "Exercise",
  "number": "7.7.104",
  "title": "",
  "body": "  Let , where , , and are unknowns. Suppose that is a doubled eigenvalue of defect 1, and suppose that is a corresponding eigenvector. Find and show that there is only one such matrix .        "
},
{
  "id": "sec_matexp",
  "level": "1",
  "url": "sec_matexp.html",
  "type": "Section",
  "number": "7.8",
  "title": "Matrix exponentials",
  "body": " Matrix exponentials   Note: 2 lectures, §5.6 in , §7.7 in    Definition  There is another way of finding a fundamental matrix solution of a system. Consider the constant coefficient equation If this would be just one equation (when is a number or a matrix), then the solution would be That doesn't make sense if is a larger matrix, but essentially the same computation that led to the above works for matrices when we define properly. First let us write down the Taylor series for for some number : Recall is the factorial, and . We differentiate this series term by term Maybe we can try the same trick with matrices. For an matrix we define the matrix exponential matrix exponential exponential of a matrix as Let us not worry about convergence. The series really does always converge. We usually write as by convention when is a matrix. With this small change and by the exact same calculation as above we have that Now and hence is an matrix. What we are looking for is a vector. In the case we would at this point multiply by an arbitrary constant to get the general solution. In the matrix case we multiply by a column vector .    Let be an matrix. Then the general solution to is where is an arbitrary constant vector. In fact, .    Let us check:   Hence is a fundamental matrix solution fundamental matrix solution of the homogeneous system. So if we can compute the matrix exponential, we have another method of solving constant coefficient homogeneous systems. It also makes it easy to solve for initial conditions. To solve , , we take the solution This equation follows because , so .  We mention a drawback of matrix exponentials. In general . The trouble is that matrices do not commute, that is, in general . If you try to prove using the Taylor series, you will see why the lack of commutativity becomes a problem. However, it is still true that if , that is, if and commute, then . We will find this fact useful. Let us restate this as a theorem to make a point.    If , then . Otherwise, in general.      Simple cases  In some instances it may work to just plug into the series definition. Suppose the matrix is diagonal diagonal matrix matrix exponential of . For example, . Then and So by this rationale   This makes exponentials of certain other matrices easy to compute. For example, the matrix can be written as where . Notice that . So for all . Therefore, . Suppose we actually want to compute . The matrices and commute (exercise: check this) and , since . We write We found a fundamental matrix solution for the system . Note that this matrix has a repeated eigenvalue with a defect; there is only one eigenvector for the eigenvalue 3. So we found a perhaps easier way to handle this case. In fact, if a matrix is and has an eigenvalue of multiplicity 2, then either , or where . This is a good exercise.    Suppose that is and is the only eigenvalue. Show that , and therefore that we can write , where (and possibly ). Hint: First write down what does it mean for the eigenvalue to be of multiplicity 2. You will get an equation for the entries. Now compute the square of .    Matrices such that for some are called nilpotent nilpotent . Computation of the matrix exponential for nilpotent matrices is easy by just writing down the first terms of the Taylor series.    General matrices  In general, the exponential is not as easy to compute as above. We usually cannot write a matrix as a sum of commuting matrices where the exponential is simple for each one. But fear not, it is still not too difficult provided we can find enough eigenvectors. First we need the following interesting result about matrix exponentials. For two square matrices and , with invertible, we have This can be seen by writing down the Taylor series. First And by the same reasoning . Now write the Taylor series for :   Given a square matrix , we can usually write , where is diagonal and invertible. This procedure is called diagonalization diagonalization . If we can do that, the computation of the exponential becomes easy as is just taking the exponential of the entries on the diagonal. Adding into the mix, we can then compute the exponential   To diagonalize we need linearly independent eigenvectors of . Otherwise, this method of computing the exponential does not work and we need to be trickier, but we will not get into such details. Let be the matrix with the eigenvectors as columns. Let , , ..., be the eigenvalues and let , , ..., be the eigenvectors, then . Make a diagonal matrix with the eigenvalues on the diagonal: We compute The columns of are linearly independent as these are linearly independent eigenvectors of . Hence is invertible. Since , we multiply on the right by and we get This means that . Multiplying the matrix by we obtain The formula , therefore, gives the formula for computing a fundamental matrix solution for the system , in the case where we have linearly independent eigenvectors.  This computation still works when the eigenvalues and eigenvectors are complex, though then you have to compute with complex numbers. It is clear from the definition that if is real, then is real. So you will only need complex numbers in the computation and not for the result. You may need to apply Euler's formula to simplify the result. If simplified properly, the final matrix will not have any complex numbers in it.    Compute a fundamental matrix solution using the matrix exponential for the system Then compute the particular solution for the initial conditions and .  Let be the coefficient matrix . We first compute (exercise) that the eigenvalues are 3 and and corresponding eigenvectors are and . Hence the diagonalization of is We write   The initial conditions are and . Hence, by the property that we find that the particular solution we are looking for is where is . Then the particular solution we are looking for is       Fundamental matrix solutions  We note that if you can compute a fundamental matrix solution in a different way, you can use this to find the matrix exponential . A fundamental matrix solution of a system of ODEs is not unique. The exponential is the fundamental matrix solution with the property that for we get the identity matrix. So we must find the right fundamental matrix solution. Let be any fundamental matrix solution to . Then we claim Clearly, if we plug into we get the identity. We can multiply a fundamental matrix solution on the right by any constant invertible matrix and we still get a fundamental matrix solution. All we are doing is changing what are the arbitrary constants in the general solution .    Approximations  If you think about it, the computation of any fundamental matrix solution using the eigenvalue method is just as difficult as the computation of . So perhaps we did not gain much by this new tool. However, the Taylor series expansion actually gives us a way to approximate solutions, which the eigenvalue method did not.  The simplest thing we can do is to just compute the series up to a certain number of terms. There are better ways to approximate the exponential C. Moler and C.F. Van Loan, Nineteen Dubious Ways to Compute the Exponential of a Matrix, Twenty-Five Years Later , SIAM Review 45 (1), 2003, 3–49 . In many cases, however, few terms of the Taylor series give a reasonable approximation for the exponential and may suffice for the application. For example, let us compute the first 4 terms of the series for the matrix . Just like the scalar version of the Taylor series approximation, the approximation will be better for small and worse for larger . For larger , we will generally have to compute more terms. Let us see how we stack up against the real solution with . The approximate solution is approximately (rounded to 8 decimal places) And plugging into the real solution (rounded to 8 decimal places) we get Not bad at all! Although if we take the same approximation for we get while the real value is (again rounded to 8 decimal places) So the approximation is not very good once we get up to . To get a good approximation at (say up to 2 decimal places) we would need to go up to the power (exercise).    Exercises    Using the matrix exponential, find a fundamental matrix solution for the system , .      Find for the matrix .      Find a fundamental matrix solution for the system , , . Then find the solution that satisfies .      Compute the matrix exponential for .       (challenging) Suppose . Show that under this assumption, .      Use to show that . In particular, is invertible even if is not.      Let be a matrix with eigenvalues , , and corresponding eigenvectors , .    Find matrix with these properties.    Find a fundamental matrix solution to .    Solve the system in with initial conditions .        Suppose that is an matrix with a repeated eigenvalue of multiplicity with linearly independent eigenvectors. Show that the matrix is diagonal, in fact, . Hint: Use diagonalization and the fact that the identity matrix commutes with every other matrix.      Let .    Find .    Solve , .        Let . Approximate by expanding the power series up to the third order.      For any positive integer , find a formula (or a recipe) for for the following matrices:                            Compute where .           Compute where .               Compute where .    Solve for .      a)  b)       Compute the first 3 terms (up to the second degree) of the Taylor expansion of where . Write it as a single matrix. Then use it to approximate .             For any positive integer , find a formula (or a recipe) for for the following matrices:                     a)  b)  c) if is even, and if is odd.     "
},
{
  "id": "sec_matexp-3-3",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-3-3",
  "type": "Theorem",
  "number": "7.8.1",
  "title": "",
  "body": "  Let be an matrix. Then the general solution to is where is an arbitrary constant vector. In fact, .   "
},
{
  "id": "sec_matexp-3-7",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-3-7",
  "type": "Theorem",
  "number": "7.8.2",
  "title": "",
  "body": "  If , then . Otherwise, in general.   "
},
{
  "id": "sec_matexp-4-4",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-4-4",
  "type": "Exercise",
  "number": "7.8.1",
  "title": "",
  "body": "  Suppose that is and is the only eigenvalue. Show that , and therefore that we can write , where (and possibly ). Hint: First write down what does it mean for the eigenvalue to be of multiplicity 2. You will get an equation for the entries. Now compute the square of .   "
},
{
  "id": "sec_matexp-5-6",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-5-6",
  "type": "Example",
  "number": "7.8.1",
  "title": "",
  "body": "  Compute a fundamental matrix solution using the matrix exponential for the system Then compute the particular solution for the initial conditions and .  Let be the coefficient matrix . We first compute (exercise) that the eigenvalues are 3 and and corresponding eigenvectors are and . Hence the diagonalization of is We write   The initial conditions are and . Hence, by the property that we find that the particular solution we are looking for is where is . Then the particular solution we are looking for is    "
},
{
  "id": "sec_matexp-8-2",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-2",
  "type": "Exercise",
  "number": "7.8.2",
  "title": "",
  "body": "  Using the matrix exponential, find a fundamental matrix solution for the system , .   "
},
{
  "id": "sec_matexp-8-3",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-3",
  "type": "Exercise",
  "number": "7.8.3",
  "title": "",
  "body": "  Find for the matrix .   "
},
{
  "id": "sec_matexp-8-4",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-4",
  "type": "Exercise",
  "number": "7.8.4",
  "title": "",
  "body": "  Find a fundamental matrix solution for the system , , . Then find the solution that satisfies .   "
},
{
  "id": "sec_matexp-8-5",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-5",
  "type": "Exercise",
  "number": "7.8.5",
  "title": "",
  "body": "  Compute the matrix exponential for .   "
},
{
  "id": "matexp_explawex",
  "level": "2",
  "url": "sec_matexp.html#matexp_explawex",
  "type": "Exercise",
  "number": "7.8.6",
  "title": "",
  "body": "   (challenging) Suppose . Show that under this assumption, .   "
},
{
  "id": "matexp_expinvex",
  "level": "2",
  "url": "sec_matexp.html#matexp_expinvex",
  "type": "Exercise",
  "number": "7.8.7",
  "title": "",
  "body": "  Use to show that . In particular, is invertible even if is not.   "
},
{
  "id": "sec_matexp-8-8",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-8",
  "type": "Exercise",
  "number": "7.8.8",
  "title": "",
  "body": "  Let be a matrix with eigenvalues , , and corresponding eigenvectors , .    Find matrix with these properties.    Find a fundamental matrix solution to .    Solve the system in with initial conditions .     "
},
{
  "id": "sec_matexp-8-9",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-9",
  "type": "Exercise",
  "number": "7.8.9",
  "title": "",
  "body": "  Suppose that is an matrix with a repeated eigenvalue of multiplicity with linearly independent eigenvectors. Show that the matrix is diagonal, in fact, . Hint: Use diagonalization and the fact that the identity matrix commutes with every other matrix.   "
},
{
  "id": "sec_matexp-8-10",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-10",
  "type": "Exercise",
  "number": "7.8.10",
  "title": "",
  "body": "  Let .    Find .    Solve , .     "
},
{
  "id": "sec_matexp-8-11",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-11",
  "type": "Exercise",
  "number": "7.8.11",
  "title": "",
  "body": "  Let . Approximate by expanding the power series up to the third order.   "
},
{
  "id": "sec_matexp-8-12",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-12",
  "type": "Exercise",
  "number": "7.8.12",
  "title": "",
  "body": "  For any positive integer , find a formula (or a recipe) for for the following matrices:                         "
},
{
  "id": "sec_matexp-8-13",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-13",
  "type": "Exercise",
  "number": "7.8.101",
  "title": "",
  "body": "  Compute where .        "
},
{
  "id": "sec_matexp-8-14",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-14",
  "type": "Exercise",
  "number": "7.8.102",
  "title": "",
  "body": "  Compute where .        "
},
{
  "id": "sec_matexp-8-15",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-15",
  "type": "Exercise",
  "number": "7.8.103",
  "title": "",
  "body": "      Compute where .    Solve for .      a)  b)    "
},
{
  "id": "sec_matexp-8-16",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-16",
  "type": "Exercise",
  "number": "7.8.104",
  "title": "",
  "body": "  Compute the first 3 terms (up to the second degree) of the Taylor expansion of where . Write it as a single matrix. Then use it to approximate .          "
},
{
  "id": "sec_matexp-8-17",
  "level": "2",
  "url": "sec_matexp.html#sec_matexp-8-17",
  "type": "Exercise",
  "number": "7.8.105",
  "title": "",
  "body": "  For any positive integer , find a formula (or a recipe) for for the following matrices:                     a)  b)  c) if is even, and if is odd.   "
},
{
  "id": "nonhomogsys_section",
  "level": "1",
  "url": "nonhomogsys_section.html",
  "type": "Section",
  "number": "7.9",
  "title": "Nonhomogeneous systems",
  "body": " Nonhomogeneous systems   Note: 3 lectures (may have to skip a little), somewhat different from §5.7 in , §7.9 in    First order constant coefficient   Integrating factor  Let us first focus on the nonhomogeneous first order equation where is a constant matrix. The first method we look at is the integrating factor method integrating factor method for systems . For simplicity we rewrite the equation as where . We multiply both sides of the equation by (being mindful that we are dealing with matrices that may not commute) to obtain We notice that . This fact follows by writing down the series definition of : So . The product rule says and so We can now integrate. That is, we integrate each component of the vector separately Recall from that . Therefore, we obtain   Perhaps it is better understood as a definite integral. In this case it will be easy to also solve for the initial conditions. Consider the equation with initial conditions The solution can then be written as Again, the integration means that each component of the vector is integrated separately. It is not hard to see that really does satisfy the initial condition .     Suppose that we have the system with initial conditions .  Let us write the system as The matrix has a doubled eigenvalue 2 with defect 1, and we leave it as an exercise to double check we computed correctly. Once we have , we find , simply by negating . Instead of computing the whole formula at once, let us do it in stages. First Then Phew!  Let us check that this really works. Similarly (exercise) . The initial conditions are also satisfied (exercise).    For systems, the integrating factor method only works if does not depend on , that is, is constant. The problem is that in general because matrix multiplication is not commutative.    Eigenvector decomposition  eigenvector decomposition  For the next method, note that eigenvectors of a matrix give the directions in which the matrix acts like a scalar. If we solve the system along these directions, the computations are simpler as we treat the matrix as a scalar. We then put those solutions together to get the general solution for the system.  Take the equation Assume has linearly independent eigenvectors . Write That is, we wish to write our solution as a linear combination of eigenvectors of . If we solve for the scalar functions through , we have our solution . Let us decompose in terms of the eigenvectors as well. We wish to write That is, we wish to find through that satisfy . Since all the eigenvectors are independent, the matrix is invertible. Write the equation as , where the components of are the functions through . Then . Hence it is always possible to find when there are linearly independent eigenvectors.  We plug into , and note that : If we identify the coefficients of the vectors through , we get the equations Each one of these equations is independent of the others. They are all linear first order equations and can easily be solved by the standard integrating factor method for single equations. That is, for the equation we write We use the integrating factor to find that We integrate and solve for to get If we are looking for just any particular solution, we can set to be zero. If we leave these constants in, we get the general solution. Write , and we are done.  As always, it is perhaps better to write these integrals as definite integrals. Suppose that we have an initial condition . Take to find , just like before. Then if we write we get the particular solution satisfying , because .  Let us remark that the technique we just outlined is the eigenvalue method applied to nonhomogeneous systems. If a system is homogeneous, that is, if , then the equations we get are , and so are the solutions and that's precisely what we got in .    Let . Solve where for .  The eigenvalues of are and 4 and corresponding eigenvectors are and respectively. This calculation is left as an exercise. We write down the matrix of the eigenvectors and compute its inverse (using the inverse formula for matrices)   We are looking for a solution of the form . We first need to write in terms of the eigenvectors. That is we wish to write . Thus So and .  We further need to write in terms of the eigenvectors. That is, we wish to write . Hence So and . We plug our into the equation and get We get the two equations We solve with integrating factor. Computation of the integral is left as an exercise to the student. You will need integration by parts.  is the constant of integration. As , then and hence . Similarly As we have and hence . The solution is That is, and .      Check that and solve the problem. Check both that they satisfy the differential equation and that they satisfy the initial conditions.      Undetermined coefficients  The method of undetermined coefficients undetermined coefficients for systems also works for systems. The only difference is that we use unknown vectors rather than just numbers. Same caveats apply to undetermined coefficients for systems as for single equations. This method does not always work. Furthermore, if the right-hand side is complicated, we have to solve for lots of variables. Each element of an unknown vector is an unknown number. In system of 3 equations with say say 4 unknown vectors (this would not be uncommon), we already have 12 unknown numbers to solve for. The method can turn into a lot of tedious tedious work if done by hand. As the method is essentially the same as for single equations, let us just do an example.    Let . Find a particular solution of where .  Note that we can solve this system in an easier way (can you see how?), but for the purposes of the example, let us use the eigenvalue method plus undetermined coefficients. The eigenvalues of are and 1 and corresponding eigenvectors are and respectively. Hence our complementary solution is for some arbitrary constants and .  We would want to guess a particular solution of However, something of the form appears in the complementary solution. Because we do not yet know if the vector is a multiple of , we do not know if a conflict arises. It is possible that there is no conflict, but to be safe we should also try . Here we find the crux of the difference between a single equation and systems. We try both terms and in the solution, not just the term . Therefore, we try Thus we have 8 unknowns. We write , , , and . We plug into the equation. First let us compute . Now must equal , which is We identify the coefficients of , , and any constant vectors in and in to find the equations: We could write the augmented matrix and start row reduction, but it is easier to just solve the equations in an ad hoc manner. Immediately we see that , , . Plugging these back in, we get that and . The remaining equations that tell us something are So and . Finally, can be arbitrary and still satisfy the equations. We are looking for just a single solution so presumably the simplest one is when . Therefore, That is, , . We would add this to the complementary solution to get the general solution of the problem. Notice that both and were really needed.      Check that and solve the problem. Try setting and check we get a solution as well. What is the difference between the two solutions we obtained (one with and one with )?    As you can see, other than the handling of conflicts, undetermined coefficients works exactly the same as it did for single equations. However, the computations can get out of hand pretty quickly for systems. The equation we considered was pretty simple.     First order variable coefficient   Variation of parameters  Just as for a single equation, there is the method of variation of parameters variation of parameters for systems . For constant coefficient systems, it is essentially the same thing as the integrating factor method we discussed earlier. However, this method works for any linear system, even if it is not constant coefficient, provided we somehow solve the associated homogeneous problem.  Suppose we have the equation Further, suppose we solved the associated homogeneous equation and found a fundamental matrix solution . The general solution to the associated homogeneous equation is for a constant vector . Just like for variation of parameters for single equation we try the solution to the nonhomogeneous equation of the form where is a vector-valued function instead of a constant. We substitute into to obtain But is a fundamental matrix solution to the homogeneous problem. So , and Hence . If we compute , then . We integrate to obtain and we have the particular solution . Let us write this as a formula   If is constant and , then . We get a solution , which is precisely what we got using the integrating factor method.    Find a particular solution to   Here is most definitely not constant. Perhaps by a lucky guess, we find that solves . Once we know the complementary solution we can easily find a solution to . First we find Next we know a particular solution to is Adding the complementary solution we find the general solution to :       Check that and really solve .    In the variation of parameters, just like in the integrating factor method we can obtain the general solution by adding in constants of integration. That is, we will add for a vector of arbitrary constants. But that is precisely the complementary solution.     Second order constant coefficients   Undetermined coefficients  We have already seen a simple example of the method of undetermined coefficients undetermined coefficients for second order systems for second order systems in . This method is essentially the same as undetermined coefficients for first order systems. There are some simplifications that we can make, as we did in . Let the equation be where is a constant matrix. If is of the form , then as two derivatives of cosine is again cosine we can try a solution of the form and we do not need to introduce sines.  If the is a sum of cosines, note that we still have the superposition principle. If , then we would try for the problem , and we would try for the problem . Then we sum the solutions.  However, if there is duplication with the complementary solution, or the equation is of the form , then we need to do the same thing as we do for first order systems.  You will never go wrong with putting in more terms than needed into your guess. You will find that the extra coefficients will turn out to be zero. But it is useful to save some time and effort.    Eigenvector decomposition  If we have the system we can do eigenvector decomposition eigenvector decomposition , just like for first order systems.  Let be the eigenvalues and be eigenvectors. Again form the matrix . Write Decompose in terms of the eigenvectors where, again, .  We plug in, and as before we obtain We identify the coefficients of the eigenvectors to get the equations Each one of these equations is independent of the others. We solve each equation using the methods of . We write , and we are done; we have a particular solution. We find the general solutions for through , and again is the general solution (and not just a particular solution).    Let us do the example from using this method. The equation is The eigenvalues are and , with eigenvectors and . Therefore and . Therefore, So after the whole song and dance of plugging in, the equations we get are For each equation we use the method of undetermined coefficients. We try for the first equation and for the second equation. We plug in to get We solve each of these equations separately. We get and . And hence and . So our particular solution is This solution matches what we got previously in .       Exercises    Find a particular solution to , ,    using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.        Find the general solution to , ,    using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.        Find the general solution to , ,    using eigenvector decomposition,    using undetermined coefficients.        Find the general solution to , ,    using eigenvector decomposition,    using undetermined coefficients.        Take the equation     Check that is the complementary solution.    Use variation of parameters to find a particular solution.        Find a particular solution to , ,    using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.      The general solution is (particular solutions should agree with one of these):  ,        Find a particular solution to , ,    using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.      The general solution is (particular solutions should agree with one of these):  ,        Solve , with initial conditions , , using eigenvector decomposition.           Solve , with initial conditions , , , , using eigenvector decomposition.            "
},
{
  "id": "nonhomogsys_section-3-2-4",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-3-2-4",
  "type": "Example",
  "number": "7.9.1",
  "title": "",
  "body": "  Suppose that we have the system with initial conditions .  Let us write the system as The matrix has a doubled eigenvalue 2 with defect 1, and we leave it as an exercise to double check we computed correctly. Once we have , we find , simply by negating . Instead of computing the whole formula at once, let us do it in stages. First Then Phew!  Let us check that this really works. Similarly (exercise) . The initial conditions are also satisfied (exercise).   "
},
{
  "id": "nonhomogsys_section-3-3-8",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-3-3-8",
  "type": "Example",
  "number": "7.9.2",
  "title": "",
  "body": "  Let . Solve where for .  The eigenvalues of are and 4 and corresponding eigenvectors are and respectively. This calculation is left as an exercise. We write down the matrix of the eigenvectors and compute its inverse (using the inverse formula for matrices)   We are looking for a solution of the form . We first need to write in terms of the eigenvectors. That is we wish to write . Thus So and .  We further need to write in terms of the eigenvectors. That is, we wish to write . Hence So and . We plug our into the equation and get We get the two equations We solve with integrating factor. Computation of the integral is left as an exercise to the student. You will need integration by parts.  is the constant of integration. As , then and hence . Similarly As we have and hence . The solution is That is, and .   "
},
{
  "id": "nonhomogsys_section-3-3-9",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-3-3-9",
  "type": "Exercise",
  "number": "7.9.1",
  "title": "",
  "body": "  Check that and solve the problem. Check both that they satisfy the differential equation and that they satisfy the initial conditions.   "
},
{
  "id": "nonhomogsys_section-3-4-3",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-3-4-3",
  "type": "Example",
  "number": "7.9.3",
  "title": "",
  "body": "  Let . Find a particular solution of where .  Note that we can solve this system in an easier way (can you see how?), but for the purposes of the example, let us use the eigenvalue method plus undetermined coefficients. The eigenvalues of are and 1 and corresponding eigenvectors are and respectively. Hence our complementary solution is for some arbitrary constants and .  We would want to guess a particular solution of However, something of the form appears in the complementary solution. Because we do not yet know if the vector is a multiple of , we do not know if a conflict arises. It is possible that there is no conflict, but to be safe we should also try . Here we find the crux of the difference between a single equation and systems. We try both terms and in the solution, not just the term . Therefore, we try Thus we have 8 unknowns. We write , , , and . We plug into the equation. First let us compute . Now must equal , which is We identify the coefficients of , , and any constant vectors in and in to find the equations: We could write the augmented matrix and start row reduction, but it is easier to just solve the equations in an ad hoc manner. Immediately we see that , , . Plugging these back in, we get that and . The remaining equations that tell us something are So and . Finally, can be arbitrary and still satisfy the equations. We are looking for just a single solution so presumably the simplest one is when . Therefore, That is, , . We would add this to the complementary solution to get the general solution of the problem. Notice that both and were really needed.   "
},
{
  "id": "nonhomogsys_section-3-4-4",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-3-4-4",
  "type": "Exercise",
  "number": "7.9.2",
  "title": "",
  "body": "  Check that and solve the problem. Try setting and check we get a solution as well. What is the difference between the two solutions we obtained (one with and one with )?   "
},
{
  "id": "nonhomogsys_section-4-2-5",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-4-2-5",
  "type": "Example",
  "number": "7.9.4",
  "title": "",
  "body": "  Find a particular solution to   Here is most definitely not constant. Perhaps by a lucky guess, we find that solves . Once we know the complementary solution we can easily find a solution to . First we find Next we know a particular solution to is Adding the complementary solution we find the general solution to :    "
},
{
  "id": "nonhomogsys_section-4-2-6",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-4-2-6",
  "type": "Exercise",
  "number": "7.9.3",
  "title": "",
  "body": "  Check that and really solve .   "
},
{
  "id": "nonhomogsys_section-5-3-5",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-5-3-5",
  "type": "Example",
  "number": "7.9.5",
  "title": "",
  "body": "  Let us do the example from using this method. The equation is The eigenvalues are and , with eigenvectors and . Therefore and . Therefore, So after the whole song and dance of plugging in, the equations we get are For each equation we use the method of undetermined coefficients. We try for the first equation and for the second equation. We plug in to get We solve each of these equations separately. We get and . And hence and . So our particular solution is This solution matches what we got previously in .   "
},
{
  "id": "nonhomogsys_section-6-2",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-2",
  "type": "Exercise",
  "number": "7.9.4",
  "title": "",
  "body": "  Find a particular solution to , ,    using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.     "
},
{
  "id": "nonhomogsys_section-6-3",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-3",
  "type": "Exercise",
  "number": "7.9.5",
  "title": "",
  "body": "  Find the general solution to , ,    using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.     "
},
{
  "id": "nonhomogsys_section-6-4",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-4",
  "type": "Exercise",
  "number": "7.9.6",
  "title": "",
  "body": "  Find the general solution to , ,    using eigenvector decomposition,    using undetermined coefficients.     "
},
{
  "id": "nonhomogsys_section-6-5",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-5",
  "type": "Exercise",
  "number": "7.9.7",
  "title": "",
  "body": "  Find the general solution to , ,    using eigenvector decomposition,    using undetermined coefficients.     "
},
{
  "id": "nonhomogsys_section-6-6",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-6",
  "type": "Exercise",
  "number": "7.9.8",
  "title": "",
  "body": "  Take the equation     Check that is the complementary solution.    Use variation of parameters to find a particular solution.     "
},
{
  "id": "nonhomogsys_section-6-7",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-7",
  "type": "Exercise",
  "number": "7.9.101",
  "title": "",
  "body": "  Find a particular solution to , ,    using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.      The general solution is (particular solutions should agree with one of these):  ,     "
},
{
  "id": "nonhomogsys_section-6-8",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-8",
  "type": "Exercise",
  "number": "7.9.102",
  "title": "",
  "body": "  Find a particular solution to , ,    using integrating factor method,    using eigenvector decomposition,    using undetermined coefficients.      The general solution is (particular solutions should agree with one of these):  ,     "
},
{
  "id": "nonhomogsys_section-6-9",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-9",
  "type": "Exercise",
  "number": "7.9.103",
  "title": "",
  "body": "  Solve , with initial conditions , , using eigenvector decomposition.        "
},
{
  "id": "nonhomogsys_section-6-10",
  "level": "2",
  "url": "nonhomogsys_section.html#nonhomogsys_section-6-10",
  "type": "Exercise",
  "number": "7.9.104",
  "title": "",
  "body": "  Solve , with initial conditions , , , , using eigenvector decomposition.          "
},
{
  "id": "vecsandmaps_section",
  "level": "1",
  "url": "vecsandmaps_section.html",
  "type": "Section",
  "number": "A.1",
  "title": "Vectors, mappings, and matrices",
  "body": " Vectors, mappings, and matrices   Note: 2 lectures  In real life, there is most often more than one variable. We wish to organize dealing with multiple variables in a consistent manner, and in particular organize dealing with linear equations and linear mappings, as those are both rather useful and rather easy to handle. Mathematicians joke that to an engineer every problem is linear, and everything is a matrix. And well, they (the engineers) are not wrong. Quite often, solving an engineering problem is figuring out the right finite-dimensional linear problem to solve, which is then solved with some matrix manipulation. Most importantly, linear problems are the ones that we know how to solve, and we have many tools to solve them. For engineers, mathematicians, physicists, and anybody else in a technical field, it is absolutely vital to learn linear algebra.  As motivation, suppose we wish to solve for and . That is, we desire numbers and such that the two equations are satisfied. Let us perhaps start by adding the equations together to find In other words, . Once we have that, we plug into the first equation to find , so . OK, that was easy. What is all this fuss about linear equations. Well, try doing this if you have 5000 unknowns One of the downsides of making everything look like a linear problem is that the number of variables tends to become huge. . Also, we may have such equations not just of numbers, but of functions and derivatives of functions in differential equations. Clearly we need a systematic way of doing things. A nice consequence of making things systematic and simpler to write down is that it becomes easier to have computers do the work for us. Computers are rather stupid, they do not think, but are very good at doing lots of repetitive tasks precisely, as long as we figure out a systematic way for them to perform the tasks.    Vectors and operations on vectors  Consider real numbers as an -tuple: The set of such -tuples is the so-called -dimensional space -dimensional space , often denoted by . Sometimes we call this the -dimensional euclidean space euclidean space Named after the ancient Greek mathematician Euclid of Alexandria (around 300 BC), possibly the most famous of mathematicians; even small towns often have Euclid Street or Euclid Avenue. . In two dimensions, is called the cartesian plane cartesian plane Named after the French mathematician René Descartes (1596–1650). It is cartesian as his name in Latin is Renatus Cartesius. . Each such -tuple represents a point in the -dimensional space. For example, the point in the plane is one unit to the right and two units up from the origin.  When we do algebra with these -tuples of numbers we call them vectors vector A common notation to distinguish vectors from points is to write for the point and for the vector. We write both as . . Mathematicians are keen on separating what is a vector and what is a point of the space or in the plane, and it turns out to be an important distinction, however, for the purposes of linear algebra we can think of everything being represented by a vector. A way to think of a vector, which is especially useful in calculus and differential equations, is an arrow. It is an object that has a direction direction and a magnitude . For instance, the vector is the arrow from the origin to the point in the plane. The magnitude is the length of the arrow. See . If we think of vectors as arrows, the arrow doesn't always have to start at the origin. If we do move it around, however, it should always keep the same direction and the same magnitude.   The vector drawn as an arrow from the origin to the point .    As vectors are arrows, when we want to give a name to a vector, we draw a little arrow above it: Another popular notation is , although we will use the little arrows. It may be easy to write a bold letter in a book, but it is not so easy to write it by hand on paper or on the board. Mathematicians often don't even write the arrows. A mathematician would write and just remember that is a vector and not a number. Just like you remember that Bob is your uncle, and you don't have to keep repeating Uncle Bob and you can just say Bob. In this book, however, we will call Bob Uncle Bob and write vectors with the little arrows.  The magnitude magnitude can be computed using the Pythagorean theorem. The vector drawn in the figure has magnitude . The magnitude is denoted by , and, in any number of dimensions, it can be computed in the same way:   For reasons that will become clear in the next section, we often write vectors as so-called column vectors column vector : Don't worry. It is just a different way of writing the same thing, and it will be useful later. For example, the vector can be written as   The fact that we write arrows above vectors allows us to write several vectors , , etc., without confusing these with the components of some other vector .  So where is the algebra from linear algebra ? Well, arrows can be added, subtracted, and multiplied by numbers. First we consider addition adding vectors . If we have two arrows, we simply move along one, and then along the other. See .   Adding the vectors , drawn dotted, and , drawn dashed. The result, , is drawn as a solid arrow.    It is rather easy to see what it does to the numbers that represent the vectors. Suppose we want to add to as in the figure. We travel along and then we travel along . What we did was travel one unit right, two units up, and then we travelled two units right, and three units down (the negative three). That means that we ended up at . And that's how addition always works:    Subtracting subtracting vectors is similar. What means visually is that we first travel along , and then we travel backwards along . See . It is like adding where is the arrow we obtain by erasing the arrow head from one side and drawing it on the other side, that is, we reverse the direction. In terms of the numbers, we simply go backwards both horizontally and vertically, so we negate both numbers. For instance, if is , then is .   Subtraction, the vector , drawn dotted, minus , drawn dashed. The result, , is drawn as a solid arrow.    Another intuitive thing to do to a vector is to scale scale a vector it. We represent this by multiplication of a number with a vector. Because of this, when we wish to distinguish between vectors and numbers, we call the numbers scalars scalar . For example, suppose we want to travel three times further. If the vector is , travelling 3 times further means going 3 units to the right and 6 units up, so we get the vector . We just multiply each number in the vector by 3. If is a number, then Scaling (by a positive number) multiplies the magnitude and leaves direction untouched. The magnitude of is . The magnitude of 3 times , that is, , is .  When the scalar is negative, then when we multiply a vector by it, the vector is not only scaled, but it also switches direction. Multiplying by means we should go 3 times further but in the opposite direction, so 3 units to the left and 6 units down, or in other words, . As we mentioned above, is a reverse of , and this is the same as .  In , you can see a couple of examples of what scaling a vector means visually.   A vector , the vector (same direction, double the magnitude), and the vector (opposite direction, 1.5 times the magnitude).    We put all of these operations together to work out more complicated expressions. Let us compute a small example:   As we said a vector is a direction and a magnitude. Magnitude is easy to represent, it is just a number. The direction direction is usually given by a vector with magnitude one. We call such a vector a unit vector unit vector . That is, is a unit vector when . For instance, the vectors , , and are all unit vectors.  To represent the direction of a vector , we need to find the unit vector in the same direction. To do so, we simply rescale by the reciprocal of the magnitude, that is , or more concisely .  As an example, the unit vector in the direction of is the vector     Linear mappings and matrices  A vector-valued function vector-valued function  is a rule that takes a vector and returns another vector . For example, could be a scaling that doubles the size of vectors: Applied to say we get If is a mapping that takes vectors in to (such as the above), we write The words function and mapping are used rather interchangeably, although more often than not, mapping is used when talking about a vector-valued function, and the word function is often used when the function is scalar-valued.  A beginning student of mathematics (and many a seasoned mathematician), that sees an expression such as yearns to write After all, who hasn't wanted to write or something like that at some point in their mathematical lives. Wouldn't life be simple if we could do that? Of course we can't always do that (for example, not with the square roots!) But there are many other functions where we can do exactly the above. Such functions are called linear .  A mapping is called linear linear mapping if for any vectors and , and also for any scalar . The we defined above that doubles the size of all vectors is linear. Let us check: and also   We also call a linear function a linear transformation transformation . If you want to be really fancy and impress your friends, you can call it a linear operator operator . When a mapping is linear we often do not write the parentheses. We write simply instead of . We do this because linearity means that the mapping behaves like multiplying by something. That something is a matrix.  A matrix matrix is an array of numbers ( rows and columns). A matrix is The numbers are called elements element of a matrix or entries entry of a matrix .  A column vector is simply an matrix. Similarly to a column vector there is also a row vector row vector , which is a matrix. If we have an matrix, then we say that it is a square matrix square matrix .  Now how does a matrix relate to a linear mapping? Well a matrix tells you where certain special vectors go. Let's give a name to those certain vectors. The standard basis vectors standard basis vectors of are In these vectors are You may recall from calculus of several variables that these are sometimes called , , .  The reason these are called a basis basis is that every other vector can be written as a linear combination linear combination of them. For example, in the vector can be written as   So how does a matrix represent a linear mapping? Well, the columns of the matrix are the vectors where as a linear mapping takes , , etc. For instance, consider As a linear mapping takes to and to . In other words,   More generally, if we have an matrix , that is, we have rows and columns, then the mapping takes to the column of . For example, represents a mapping from to that does   What about another vector , which isn't in the standard basis? Where does it go? We use linearity. First, we write the vector as a linear combination of the standard basis vectors: Then If we know where takes all the basis vectors, we know where it takes all vectors.  Suppose is the matrix from above, then   Every linear mapping from to can be represented by an matrix. You just figure out where it takes the standard basis vectors. Conversely, every matrix represents a linear mapping. Hence, we may think of matrices being linear mappings, and linear mappings being matrices.  Or can we? In this book we study mostly linear differential operators, and linear differential operators are linear mappings, although they are not acting on , but on an infinite-dimensional space of functions: For a function we get a function , and is linear in the sense that for any number (scalar) and all functions and .  So the answer is not really. But if we consider vectors in finite-dimensional spaces then yes, every linear mapping is a matrix. We have mentioned at the beginning of this section, that we can make everything a vector. That's not strictly true, but it is true approximately. Those infinite-dimensional spaces of functions can be approximated by a finite-dimensional space, and then linear operators are just matrices. So approximately, this is true. And as far as actual computations that we can do on a computer, we can work only with finitely many dimensions anyway. If you ask a computer or your calculator to plot a function, it samples the function at finitely many points and then connects the dots If you have ever used Matlab, you may have noticed that to plot a function, we take a vector of inputs, ask Matlab to compute the corresponding vector of values of the function, and then we ask it to plot the result. . It does not actually give you infinitely many values. The way that you have been using the computer or your calculator so far has already been a certain approximation of the space of functions by a finite-dimensional space.  To end the section, we notice how can be written more succintly. Suppose Then For example, That is, you take the entries in a row of the matrix, you multiply them by the entries in your vector, you add things up, and that's the corresponding entry in the resulting vector.    Exercises    On a piece of graph paper draw the vectors:                       On a piece of graph paper draw the vector starting at (based at) the given point:    based at     based at     based at         On a piece of graph paper draw the following operations. Draw and label the vectors involved in the operations as well as the result:                       Compute the magnitude of                       Compute                                      Find the unit vector in the direction of the given vector                       If and are added together, we find . What is ?      Write as a linear combination of the standard basis vectors , , and .      If the magnitude of is 4, what is the magnitude of                                      Suppose a linear mapping takes to and it takes to . Where does it take                       Suppose a linear mapping takes to , it takes to , and it takes to . Write down the matrix representing the mapping .      Suppose that a mapping takes to , to , and to . Explain why is not linear.       (challenging) Let represent the space of quadratic polynomials in : a point in represents the polynomial . Consider the derivative as a mapping of to , and note that is linear. Write down as a matrix.      Compute the magnitude of                     a)  b)  c)       Find the unit vector in the direction of the given vector                     a)   b)  c)       Compute                                    a)  b)  c)  d)  e)  f)       If the magnitude of is 5, what is the magnitude of                     a)  b)  c)       Suppose a linear mapping takes to and it takes to . Where does it take                     a)  b)  c)      "
},
{
  "id": "linalg-vecarrow_fig",
  "level": "2",
  "url": "vecsandmaps_section.html#linalg-vecarrow_fig",
  "type": "Figure",
  "number": "A.1",
  "title": "",
  "body": " The vector drawn as an arrow from the origin to the point .   "
},
{
  "id": "linalg-vecadd_fig",
  "level": "2",
  "url": "vecsandmaps_section.html#linalg-vecadd_fig",
  "type": "Figure",
  "number": "A.2",
  "title": "",
  "body": " Adding the vectors , drawn dotted, and , drawn dashed. The result, , is drawn as a solid arrow.   "
},
{
  "id": "linalg-vecsub_fig",
  "level": "2",
  "url": "vecsandmaps_section.html#linalg-vecsub_fig",
  "type": "Figure",
  "number": "A.3",
  "title": "",
  "body": " Subtraction, the vector , drawn dotted, minus , drawn dashed. The result, , is drawn as a solid arrow.   "
},
{
  "id": "linalg-vecscale_fig",
  "level": "2",
  "url": "vecsandmaps_section.html#linalg-vecscale_fig",
  "type": "Figure",
  "number": "A.4",
  "title": "",
  "body": " A vector , the vector (same direction, double the magnitude), and the vector (opposite direction, 1.5 times the magnitude).   "
},
{
  "id": "vecsandmaps_section-5-2",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-2",
  "type": "Exercise",
  "number": "A.1.1",
  "title": "",
  "body": "  On a piece of graph paper draw the vectors:                    "
},
{
  "id": "vecsandmaps_section-5-3",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-3",
  "type": "Exercise",
  "number": "A.1.2",
  "title": "",
  "body": "  On a piece of graph paper draw the vector starting at (based at) the given point:    based at     based at     based at      "
},
{
  "id": "vecsandmaps_section-5-4",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-4",
  "type": "Exercise",
  "number": "A.1.3",
  "title": "",
  "body": "  On a piece of graph paper draw the following operations. Draw and label the vectors involved in the operations as well as the result:                    "
},
{
  "id": "vecsandmaps_section-5-5",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-5",
  "type": "Exercise",
  "number": "A.1.4",
  "title": "",
  "body": "  Compute the magnitude of                    "
},
{
  "id": "vecsandmaps_section-5-6",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-6",
  "type": "Exercise",
  "number": "A.1.5",
  "title": "",
  "body": "  Compute                                   "
},
{
  "id": "vecsandmaps_section-5-7",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-7",
  "type": "Exercise",
  "number": "A.1.6",
  "title": "",
  "body": "  Find the unit vector in the direction of the given vector                    "
},
{
  "id": "vecsandmaps_section-5-8",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-8",
  "type": "Exercise",
  "number": "A.1.7",
  "title": "",
  "body": "  If and are added together, we find . What is ?   "
},
{
  "id": "vecsandmaps_section-5-9",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-9",
  "type": "Exercise",
  "number": "A.1.8",
  "title": "",
  "body": "  Write as a linear combination of the standard basis vectors , , and .   "
},
{
  "id": "vecsandmaps_section-5-10",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-10",
  "type": "Exercise",
  "number": "A.1.9",
  "title": "",
  "body": "  If the magnitude of is 4, what is the magnitude of                                   "
},
{
  "id": "vecsandmaps_section-5-11",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-11",
  "type": "Exercise",
  "number": "A.1.10",
  "title": "",
  "body": "  Suppose a linear mapping takes to and it takes to . Where does it take                    "
},
{
  "id": "vecsandmaps_section-5-12",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-12",
  "type": "Exercise",
  "number": "A.1.11",
  "title": "",
  "body": "  Suppose a linear mapping takes to , it takes to , and it takes to . Write down the matrix representing the mapping .   "
},
{
  "id": "vecsandmaps_section-5-13",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-13",
  "type": "Exercise",
  "number": "A.1.12",
  "title": "",
  "body": "  Suppose that a mapping takes to , to , and to . Explain why is not linear.   "
},
{
  "id": "vecsandmaps_section-5-14",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-14",
  "type": "Exercise",
  "number": "A.1.13",
  "title": "",
  "body": "   (challenging) Let represent the space of quadratic polynomials in : a point in represents the polynomial . Consider the derivative as a mapping of to , and note that is linear. Write down as a matrix.   "
},
{
  "id": "vecsandmaps_section-5-15",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-15",
  "type": "Exercise",
  "number": "A.1.101",
  "title": "",
  "body": "  Compute the magnitude of                     a)  b)  c)    "
},
{
  "id": "vecsandmaps_section-5-16",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-16",
  "type": "Exercise",
  "number": "A.1.102",
  "title": "",
  "body": "  Find the unit vector in the direction of the given vector                     a)   b)  c)    "
},
{
  "id": "vecsandmaps_section-5-17",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-17",
  "type": "Exercise",
  "number": "A.1.103",
  "title": "",
  "body": "  Compute                                    a)  b)  c)  d)  e)  f)    "
},
{
  "id": "vecsandmaps_section-5-18",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-18",
  "type": "Exercise",
  "number": "A.1.104",
  "title": "",
  "body": "  If the magnitude of is 5, what is the magnitude of                     a)  b)  c)    "
},
{
  "id": "vecsandmaps_section-5-19",
  "level": "2",
  "url": "vecsandmaps_section.html#vecsandmaps_section-5-19",
  "type": "Exercise",
  "number": "A.1.105",
  "title": "",
  "body": "  Suppose a linear mapping takes to and it takes to . Where does it take                     a)  b)  c)    "
},
{
  "id": "matalg_section",
  "level": "1",
  "url": "matalg_section.html",
  "type": "Section",
  "number": "A.2",
  "title": "Matrix algebra",
  "body": " Matrix algebra   Note: 2–3 lectures    One-by-one matrices  Let us motivate what we want to achieve with matrices. Real-valued linear mappings of the real line, linear functions that eat numbers and spit out numbers, are just multiplications by a number. Consider a mapping defined by multiplying by a number. Let's call this number . The mapping then takes to . We can add such mappings: If we have another mapping , then We get a new mapping that multiplies by, well, . If is a mapping that doubles its input, , and is a mapping that triples, , then is a mapping that multiplies by , .  Similarly we can compose such mappings, that is, we could apply one and then the other. We take , we run it through the first mapping to get times , then we run through the second mapping . In other words, We just multiply those two numbers. Using our doubling and tripling mappings, if we double and then triple, that is then we obtain . The composition is the mapping that multiplies by . For larger matrices, composition also ends up being a kind of multiplication.    Matrix addition and scalar multiplication  The mappings that multiply numbers by numbers are just matrices. The number above could be written as a matrix . Perhaps we would want to do to all matrices the same things that we did to those matrices at the start of this section above. First, let us add matrices. If we have a matrix and a matrix that are of the same size, say , then they are mappings from to . The mapping should also be a mapping from to , and it should do the following to vectors: It turns out you just add the matrices element-wise: If the entry of is , and the entry of is , then the entry of is . If then Let us illustrate on a more concrete example: Let's check that this does the right thing to a vector. Let's use some of the vector algebra that we already know, and regroup things: If we replaced the numbers by letters that would constitute a proof! You'll notice that we didn't really have to even compute what the result is to convince ourselves that the two expressions were equal.  If the sizes of the matrices do not match, then addition is not defined. If is and is , then we cannot add these matrices. We don't know what that could possibly mean.  It is also useful to have a matrix that when added to any other matrix does nothing. This is the zero matrix, the matrix of all zeros: We often denote the zero matrix by without specifying size. We would then just write , where we just assume that is the zero matrix of the same size as .  There are really two things we can multiply matrices by. We can multiply matrices by scalars or we can multiply by other matrices. Let us first consider multiplication by scalars. For a matrix and a scalar , we want to be the matrix that accomplishes That is just scaling the result by . If you think about it, scaling every term in by achieves just that: If For example,   Let us list some properties of matrix addition and scalar multiplication. Denote by the zero matrix, by , scalars, and by , , matrices. Then: These rules should look very familiar.    Matrix multiplication  As we mentioned above, composition of linear mappings is also a multiplication of matrices. Suppose is an matrix, that is, takes to , and is an matrix, that is, takes to . The composition should work as follows First, a vector in gets taken to the vector in . Then the mapping takes it to the vector in . In other words, the composition should be an matrix. In terms of sizes we should have Notice how the middle size must match.  OK, now we know what sizes of matrices we should be able to multiply, and what the product should be. Let us see how to actually compute matrix multiplication. We start with the so-called dot product dot product (or inner product inner product ) of two vectors. Usually this is a row vector multiplied with a column vector of the same size. Dot product multiplies each pair of entries from the first and the second vector and sums these products. The result is a single number. For example, And similarly for larger (or smaller) vectors. A dot product is really a product of two matrices: a matrix and an matrix resulting in a matrix, that is, a number.  Armed with the dot product we define the product of matrices product of matrices matrix product . We denote by the row of and by the column of . For an matrix and an matrix we can compute the product : The matrix is an matrix whose entry is the dot product For example, given a and a matrix we should end up with a matrix: or with some numbers:   A useful consequence of the definition is that the evaluation for a matrix and a (column) vector is also matrix multiplication. That is really why we think of vectors as column vectors, or matrices. For example, If you look at the last section, that is precisely the last example we gave.  You should stare at the computation of multiplication of matrices and the previous definition of as a mapping for a moment. What we are doing with matrix multiplication is applying the mapping to the columns of . This is usually written as follows. Suppose we write the matrix , where are the columns of . Then for an matrix , The columns of the matrix are the vectors . For example, in , the columns of are This is a very useful way to understand what matrix multiplication is. It should also make it easier to remember how to perform matrix multiplication.    Some rules of matrix algebra  For multiplication we want an analogue of a 1. That is, we desire a matrix that just leaves everything as it found it. This analogue is the so-called identity matrix identity matrix . The identity matrix is a square matrix with 1s on the main diagonal and zeros everywhere else. It is usually denoted by . For each size we have a different identity matrix and so sometimes we may denote the size as a subscript. For example, is the identity matrix Let us see how the matrix works on a smaller example, Multiplication by the identity from the left looks similar, and also does not touch anything.  We have the following rules for matrix multiplication. Suppose that , , are matrices of the correct sizes so that the following make sense. Let denote a scalar (number). Then     Let us demonstrate a couple of these rules. For example, the associative law: and Or how about multiplication by scalars:  and     A multiplication rule, one you have used since primary school on numbers, is quite conspicuously missing for matrices. That is, matrix multiplication is not commutative. Firstly, just because makes sense, it may be that is not even defined. For example, if is , and is , the we can multiply but not .  Even if and are both defined, does not mean that they are equal. For example, take and :     Inverse  A couple of other algebra rules you know for numbers do not quite work on matrices:     does not necessarily imply , even if is not 0.     does not necessarily mean that or .    For example:   To make these rules hold, we do not just need one of the matrices to not be zero, we would need to divide by a matrix. This is where the matrix inverse matrix inverse comes in. Suppose that and are matrices such that Then we call the inverse of and we denote by . Perhaps not surprisingly, , since if the inverse of is , then the inverse of is . If the inverse of exists, then we say is invertible invertible matrix . If is not invertible, we say is singular singular matrix .  If is a matrix, then is . That is where the notation comes from. The computation is not nearly as simple when is larger.  The proper formulation of the cancellation rule is:   If is invertible, then implies .   The computation is what you would do in regular algebra with numbers, but you have to be careful never to commute matrices: And similarly for cancellation on the right:   If is invertible, then implies .   The rule says, among other things, that the inverse of a matrix is unique if it exists: If , then is invertible and .  We will see later how to compute an inverse of a matrix in general. For now, let us note that there is a simple formula for the inverse of a matrix   For example: Let's try it: Just as we cannot divide by every number, not every matrix is invertible. In the case of matrices however we may have singular matrices that are not zero. For example, is a singular matrix. But didn't we just give a formula for an inverse? Let us try it: We get into a bit of trouble; we are trying to divide by zero.  So a matrix is invertible whenever and otherwise it is singular. The expression is called the determinant and we will look at it more carefully in a later section. There is a similar expression for a square matrix of any size.    Diagonal matrices  A simple (and surprisingly useful) type of a square matrix is a so-called diagonal matrix diagonal matrix . It is a matrix whose entries are all zero except those on the main diagonal from top left to bottom right. For example a diagonal matrix is of the form Such matrices have nice properties when we multiply by them. If we multiply them by a vector, they multiply the entry by . For example, Similarly, when they multiply another matrix from the left, they multiply the row by . For example, On the other hand, multiplying on the right, they multiply the columns: And it is really easy to multiply two diagonal matrices together—we multiply the entries:   For this last reason, they are easy to invert, you simply invert each diagonal element: Let us check an example It is no wonder that the way we solve many problems in linear algebra (and in differential equations) is to try to reduce the problem to the case of diagonal matrices.    Transpose  Vectors do not always have to be column vectors, that is just a convention. Swapping rows and columns is from time to time needed. The operation that swaps rows and columns is the so-called transpose transpose . The transpose of is denoted by . Example: Transpose takes an matrix to an matrix.  A key feature of the transpose is that if the product makes sense, then also makes sense, at least from the point of view of sizes. In fact, we get precisely the transpose of . That is: For example, It is left to the reader to verify that computing the matrix product on the left and then transposing is the same as computing the matrix product on the right.  If we have a column vector to which we apply a matrix and we transpose the result, then the row vector applies to from the left:   Another place where transpose is useful is when we wish to apply the dot product As a side note, mathematicians write and physicists write . Shhh... don't tell anyone, but the physicists are probably right on this. to two column vectors: That is the way that one often writes the dot product in software.  We say a matrix is symmetric symmetric matrix if . For example, is a symmetric matrix. Notice that a symmetric matrix is always square, that is, . Symmetric matrices have many nice properties Although so far we have not learned enough about matrices to really appreciate them. , and come up quite often in applications.    Exercises    Add the following matrices                  Compute                  Multiply the following matrices                            Compute the inverse of the given matrices                            Compute the inverse of the given matrices                       Add the following matrices                a)  b)       Compute                a)  b)       Multiply the following matrices                          a)  b)  c)  d)       Compute the inverse of the given matrices                          a)  b)  c)  d)       Compute the inverse of the given matrices                     a)  b)  c)      "
},
{
  "id": "matalg_section-6-4",
  "level": "2",
  "url": "matalg_section.html#matalg_section-6-4",
  "type": "Example",
  "number": "A.2.1",
  "title": "",
  "body": "  Let us demonstrate a couple of these rules. For example, the associative law: and Or how about multiplication by scalars:  and    "
},
{
  "id": "matalg_section-10-2",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-2",
  "type": "Exercise",
  "number": "A.2.1",
  "title": "",
  "body": "  Add the following matrices               "
},
{
  "id": "matalg_section-10-3",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-3",
  "type": "Exercise",
  "number": "A.2.2",
  "title": "",
  "body": "  Compute               "
},
{
  "id": "matalg_section-10-4",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-4",
  "type": "Exercise",
  "number": "A.2.3",
  "title": "",
  "body": "  Multiply the following matrices                         "
},
{
  "id": "matalg_section-10-5",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-5",
  "type": "Exercise",
  "number": "A.2.4",
  "title": "",
  "body": "  Compute the inverse of the given matrices                         "
},
{
  "id": "matalg_section-10-6",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-6",
  "type": "Exercise",
  "number": "A.2.5",
  "title": "",
  "body": "  Compute the inverse of the given matrices                    "
},
{
  "id": "matalg_section-10-7",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-7",
  "type": "Exercise",
  "number": "A.2.101",
  "title": "",
  "body": "  Add the following matrices                a)  b)    "
},
{
  "id": "matalg_section-10-8",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-8",
  "type": "Exercise",
  "number": "A.2.102",
  "title": "",
  "body": "  Compute                a)  b)    "
},
{
  "id": "matalg_section-10-9",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-9",
  "type": "Exercise",
  "number": "A.2.103",
  "title": "",
  "body": "  Multiply the following matrices                          a)  b)  c)  d)    "
},
{
  "id": "matalg_section-10-10",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-10",
  "type": "Exercise",
  "number": "A.2.104",
  "title": "",
  "body": "  Compute the inverse of the given matrices                          a)  b)  c)  d)    "
},
{
  "id": "matalg_section-10-11",
  "level": "2",
  "url": "matalg_section.html#matalg_section-10-11",
  "type": "Exercise",
  "number": "A.2.105",
  "title": "",
  "body": "  Compute the inverse of the given matrices                     a)  b)  c)    "
},
{
  "id": "elim_section",
  "level": "1",
  "url": "elim_section.html",
  "type": "Section",
  "number": "A.3",
  "title": "Elimination",
  "body": " Elimination   Note: 2–3 lectures    Linear systems of equations  One application of matrices is to solve systems of linear equations Although perhaps we have this backwards, quite often we solve a linear system of equations to find out something about matrices, rather than vice versa. . Consider the following system of linear equations   There is a systematic procedure called elimination elimination to solve such a system. In this procedure, we attempt to eliminate each variable from all but one equation. We want to end up with equations such as , where we can just read off the answer.  We write a system of linear equations as a matrix equation: The system is written as If we knew the inverse of , then we would be done; we would simply solve the equation: Well, but that is part of the problem, we do not know how to compute the inverse for matrices bigger than . We will see later that to compute the inverse we are really solving for several different . In other words, we will need to do elimination to find . In addition, we may wish to solve if is not invertible, or perhaps not even square.  Let us return to the equations themselves and see how we can manipulate them. There are a few operations we can perform on the equations that do not change the solution. First, perhaps an operation that may seem stupid, we can swap two equations in : Clearly these new equations have the same solutions . A second operation is that we can multiply an equation by a nonzero number. For example, we multiply the third equation in by 3: Finally, we can add a multiple of one equation to another equation. For instance, we add 3 times the third equation in to the second equation: The same should still be solutions to the new equations. These were just examples; we did not get any closer to the solution. We must to do these three operations in some more logical manner, but it turns out these three operations suffice to solve every linear equation.  The first thing is to write the equations in a more compact manner. Given we write down the so-called augmented matrix augmented matrix  where the vertical line is just a marker for us to know where the right-hand side of the equation starts. For the system the augmented matrix is The entire process of elimination, which we will describe, is often applied to any sort of matrix, not just an augmented matrix. Simply think of the matrix as the matrix     Row echelon form and elementary operations  We apply the three operations above to the matrix. We call these the elementary operations elementary operations or elementary row operations elementary row operations . Translating the operations to the matrix setting, the operations become:    Swap two rows.    Multiply a row by a nonzero number.    Add a multiple of one row to another row.    We run these operations until we get into a state where it is easy to read off the answer, or until we get into a contradiction indicating no solution.  More specifically, we run the operations until we obtain the so-called row echelon form row echelon form echelon form . Let us call the first (from the left) nonzero entry in each row the leading entry leading entry . A matrix is in row echelon form if the following conditions are satisfied:    The leading entry in any row is strictly to the right of the leading entry of the row above.    Any zero rows are below all the nonzero rows.    All leading entries are 1.    A matrix is in reduced row echelon form reduced row echelon form if furthermore the following condition is satisfied.    All the entries above a leading entry are zero.    Note that the definition applies to matrices of any size.    The following matrices are in row echelon form. The leading entries are marked: None of the matrices above are in reduced row echelon form. For example, in the first matrix none of the entries above the second and third leading entries are zero; they are 9, 3, and 5. The following matrices are in reduced row echelon form. The leading entries are marked:     The procedure we will describe to find a reduced row echelon form of a matrix is called Gauss–Jordan elimination Gauss–Jordan elimination . The first part of it, which obtains a row echelon form, is called Gaussian elimination Gaussian elimination or row reduction row reduction . For some problems, a row echelon form is sufficient, and it is a bit less work to only do this first part.  To attain the row echelon form we work systematically. We go column by column, starting at the first column. We find topmost entry in the first column that is not zero, and we call it the pivot pivot . If there is no nonzero entry we move to the next column. We swap rows to put the row with the pivot as the first row. We divide the first row by the pivot to make the pivot entry be a 1. Now look at all the rows below and subtract the correct multiple of the pivot row so that all the entries below the pivot become zero.  After this procedure we forget that we had a first row (it is now fixed), and we forget about the column with the pivot and all the preceding zero columns. Below the pivot row, all the entries in these columns are just zero. Then we focus on the smaller matrix and we repeat the steps above.  It is best shown by example, so let us go back to the example from the beginning of the section. We keep the vertical line in the matrix, even though the procedure works on any matrix, not just an augmented matrix. We start with the first column and we locate the pivot, in this case the first entry of the first column. We multiply the first row by . We subtract the first row from the second and third row (two elementary operations). We are done with the first column and the first row for now. We almost pretend the matrix doesn't have the first column and the first row. OK, look at the second column, and notice that now the pivot is in the third row. We swap rows. And we divide the pivot row by 3. We do not need to subtract anything as everything below the pivot is already zero. We move on, we again start ignoring the second row and second column and focus on We find the pivot, then divide that row by 2: The matrix is now in row echelon form.  The equation corresponding to the last row is . We know and we could substitute it into the first two equations to get equations for and . Then we could do the same thing with , until we solve for all 3 variables. This procedure is called backsubstitution backsubstitution and we can achieve it via elementary operations. We start from the lowest pivot (leading entry in the row echelon form) and subtract the right multiple from the row above to make all the entries above this pivot zero. Then we move to the next pivot and so on. After we are done, we will have a matrix in reduced row echelon form.  We continue our example. Subtract the last row from the first to get The entry above the pivot in the second row is already zero. So we move onto the next pivot, the one in the second row. We subtract this row from the top row to get The matrix is in reduced row echelon form.  If we now write down the equations for , we find In other words, we have solved the system.    Non-unique solutions and inconsistent systems  It is possible that the solution of a linear system of equations is not unique, or that no solution exists. Suppose for a moment that the row echelon form we found was Then we have an equation coming from the last row. That is impossible and the equations are what we call inconsistent inconsistent . There is no solution to .  On the other hand, if we find a row echelon form then there is no issue with finding solutions. In fact, we will find way too many. Let us continue with backsubstitution (subtracting 3 times the third row from the first) to find the reduced row echelon form and let's mark the pivots. The last row is all zeros; it just says and we ignore it. The two remaining equations are Let us solve for the variables that corresponded to the pivots, that is and as there was a pivot in the first column and in the third column: The variable can be anything you wish and we still get a solution. The is called a free variable free variable . There are infinitely many solutions, one for every choice of . If we pick , then , and give a solution. But we also get a solution by picking say , in which case and , or by picking in which case and .  The general idea is that if any row has all zeros in the columns corresponding to the variables, but a nonzero entry in the column corresponding to the right-hand side , then the system is inconsistent and has no solutions. In other words, the system is inconsistent if you find a pivot on the right side of the vertical line drawn in the augmented matrix. Otherwise, the system is consistent consistent , and at least one solution exists.  Suppose the system is consistent (at least one solution exists):    If every column corresponding to a variable has a pivot element, then the solution is unique.    If there are columns corresponding to variables with no pivot, then those are free variables that can be chosen arbitrarily, and there are infinitely many solutions.    When , we have a so-called homogeneous matrix equation homogeneous matrix equation  There is no need to write an augmented matrix in this case. As the elementary operations do not do anything to a zero column, it always stays a zero column. Moreover, always has at least one solution, namely . Such a system is always consistent. It may have other solutions: If you find any free variables, then you get infinitely many solutions.  The set of solutions of comes up quite often so people give it a name. It is called the nullspace nullspace or the kernel kernel of . One place where the kernel comes up is invertibility of a square matrix . If the kernel of contains a nonzero vector, then it contains infinitely many vectors (there was a free variable). But then it is impossible to invert , since infinitely many vectors go to , so there is no unique vector that takes to . So if the kernel is nontrivial, that is, if there are any nonzero vectors in the kernel, in other words, if there are any free variables, or in yet other words, if the row echelon form of has columns without pivots, then is not invertible. We will return to this idea later.    Linear independence and rank  If rows of a matrix correspond to equations, it may be good to find out how many equations we really need to find the same set of solutions. Similarly, if we find a number of solutions to a linear equation , we may ask if we found enough so that all other solutions can be formed out of the given set. The concept we want is that of linear independence. That same concept is useful for differential equations, for example in .  Given row or column vectors , a linear combination linear combination is an expression of the form where are all scalars. For example, is a linear combination of , , and .  We have seen linear combinations before. The expression is a linear combination of the columns of , while is a linear combination of the rows of .  The way linear combinations come up in our study of differential equations is similar to the following computation. Suppose that , , ..., are solutions to , , ..., . Then the linear combination is a solution to :   So if you have found enough solutions, you have them all. The question is, when did we find enough of them?  We say the vectors , , ..., are linearly independent linearly independent if the only solution to is . Otherwise, we say the vectors are linearly dependent linearly dependent .  For example, the vectors and are linearly independent. Let's try: So , and then it is clear that as well. In other words, the two vectors are linearly independent.  If a set of vectors is linearly dependent, that is, some of the s are nonzero, then we can solve for one vector in terms of the others. Suppose . Since , then For example, and so   You may have noticed that solving for those s is just solving linear equations, and so you may not be surprised that to check if a set of vectors is linearly independent we use row reduction.  Given a set of vectors, we may not be interested in just finding if they are linearly independent or not, we may be interested in finding a linearly independent subset. Or perhaps we may want to find some other vectors that give the same linear combinations and are linearly independent. The way to figure this out is to form a matrix out of our vectors. If we have row vectors we consider them as rows of a matrix. If we have column vectors we consider them columns of a matrix. The set of all linear combinations of a set of vectors is called their span span .   Given a matrix , the maximal number of linearly independent rows is called the rank rank of , and we write for the rank. For example, The second and third row are multiples of the first one. We cannot choose more than one row and still have a linearly independent set. But what is That seems to be a tougher question to answer. The first two rows are linearly independent (neither is a multiple of the other), so the rank is at least two. If we would set up the equations for the , , and , we would find a system with infinitely many solutions. One solution is So the set of all three rows is linearly dependent, the rank cannot be 3. Therefore the rank is 2.  But how can we do this in a more systematic way? We find the row echelon form! The elementary row operations do not change the set of linear combinations of the rows (that was one of the main reasons for defining them as they were). In other words, the span of the rows of the is the same as the span of the rows of the row echelon form of . In particular, the number of linearly independent rows is the same. And in the row echelon form, all nonzero rows are linearly independent. This is not hard to see. Consider the two nonzero rows in the example above. Suppose we tried to solve for the and in Since the first column of the row echelon matrix has zeros except in the first row means that . For the same reason, is zero. We only have two nonzero rows, and they are linearly independent, so the rank of the matrix is 2.  The span of the rows is called the row space row space . The row space of and the row echelon form of are the same. In the example,   Similarly to row space, the span of columns is called the column space column space .   So it may also be good to find the number of linearly independent columns of . One way to do that is to find the number of linearly independent rows of . It is a tremendously useful fact that the number of linearly independent columns is always the same as the number of linearly independent rows:         In particular, to find a set of linearly independent columns we need to look at where the pivots were. If you recall above, when solving the key was finding the pivots, any non-pivot columns corresponded to free variables. That means we can solve for the non-pivot columns in terms of the pivot columns. Let's see an example. First we reduce some random matrix: We find a pivot and reduce the rows below: We find the next pivot, make it one, and rinse and repeat: The final matrix is the row echelon form of the matrix. Consider the pivots that we marked. The pivot columns are the first and the third column. All other columns correspond to free variables when solving , so all other columns can be solved in terms of the first and the third column. In other words We could perhaps use another pair of columns to get the same span, but the first and the third are guaranteed to work because they are pivot columns.  The discussion above could be expanded into a proof of the theorem if we wanted. As each nonzero row in the row echelon form contains a pivot, then the rank is the number of pivots, which is the same as the maximal number of linearly independent columns.  The idea also works in reverse. Suppose we have a bunch of column vectors and we just need to find a linearly independent set. For example, suppose we started with the vectors These vectors are not linearly independent as we saw above. In particular, the span of and is the same as the span of all four of the vectors. So and can both be written as linear combinations of and . A common thing that comes up in practice is that one gets a set of vectors whose span is the set of solutions of some problem. But perhaps we get way too many vectors, we want to simplify. For example above, all vectors in the span of can be written for some numbers . But it is also true that every such vector can be written as for two numbers and . And one has to admit, that looks much simpler. Moreover, these numbers and are unique. More on that in the next section.  To find this linearly independent set we simply take our vectors and form the matrix , that is, the matrix We crank up the row-reduction machine, feed this matrix into it, find the pivot columns, and pick those. In this case, and .    Computing the inverse  If the matrix is square and there exists a unique solution to for any (there are no free variables), then is invertible. This is equivalent to the matrix being of rank .  In particular, if then . Now we just need to compute what is. We can surely do elimination every time we want to find , but that would be ridiculous. The mapping is linear and hence given by a matrix, and we have seen that to figure out the matrix we just need to find where takes the standard basis vectors , , ..., .  That is, to find the first column of , we solve , because then . To find the second column of , we solve . And so on. It is really just eliminations that we need to do. But it gets even easier. If you think about it, the elimination is the same for everything on the left side of the augmented matrix. Doing eliminations separately we would redo most of the computations. Best is to do all at once.  Therefore, to find the inverse of , we write an augmented matrix , where is the identity matrix, whose columns are precisely the standard basis vectors. We then perform row reduction until we arrive at the reduced row echelon form. If is invertible, then pivots can be found in every column of , and so the reduced row echelon form of looks like . We then just read off the inverse . If you do not find a pivot in every one of the first columns of the augmented matrix, then is not invertible.  This is best seen by example. Suppose we wish to invert the matrix We write the augmented matrix and we start reducing: So Not too terrible, no? Perhaps harder than inverting a matrix for which we had a simple formula, but not too bad. Really in practice this is done efficiently by a computer.    Exercises    Compute the reduced row echelon form for the following matrices:                                                Compute the inverse of the given matrices                       Solve (find all solutions), or show no solution exists                            By computing the inverse, solve the following systems for .                  Compute the rank of the given matrices                       For the matrices in , find a linearly independent set of row vectors that span the row space (they don't need to be rows of the matrix).      For the matrices in , find a linearly independent set of columns that span the column space. That is, find the pivot columns of the matrices.      Find a linearly independent subset of the following vectors that has the same span.       Compute the reduced row echelon form for the following matrices:                                              a)  b)  c)  d)  e)  f)  g)  h)       Compute the inverse of the given matrices                     a)  b)  c)       Solve (find all solutions), or show no solution exists                          a) ,  b) no solution c) , ,  d) is free, ,       By computing the inverse, solve the following systems for .                a)  b)       Compute the rank of the given matrices                     a) 3 b) 1 c) 2      For the matrices in , find a linearly independent set of row vectors that span the row space (they don't need to be rows of the matrix).    a) , ,  b)  c) ,       For the matrices in , find a linearly independent set of columns that span the column space. That is, find the pivot columns of the matrices.    a) , ,  b)  c) ,       Find a linearly independent subset of the following vectors that has the same span.           "
},
{
  "id": "elim_section-4-10",
  "level": "2",
  "url": "elim_section.html#elim_section-4-10",
  "type": "Example",
  "number": "A.3.1",
  "title": "",
  "body": "  The following matrices are in row echelon form. The leading entries are marked: None of the matrices above are in reduced row echelon form. For example, in the first matrix none of the entries above the second and third leading entries are zero; they are 9, 3, and 5. The following matrices are in reduced row echelon form. The leading entries are marked:    "
},
{
  "id": "elim_section-6-17",
  "level": "2",
  "url": "elim_section.html#elim_section-6-17",
  "type": "Theorem",
  "number": "A.3.1",
  "title": "",
  "body": "      "
},
{
  "id": "elim_section-8-2",
  "level": "2",
  "url": "elim_section.html#elim_section-8-2",
  "type": "Exercise",
  "number": "A.3.1",
  "title": "",
  "body": "  Compute the reduced row echelon form for the following matrices:                                             "
},
{
  "id": "elim_section-8-3",
  "level": "2",
  "url": "elim_section.html#elim_section-8-3",
  "type": "Exercise",
  "number": "A.3.2",
  "title": "",
  "body": "  Compute the inverse of the given matrices                    "
},
{
  "id": "elim_section-8-4",
  "level": "2",
  "url": "elim_section.html#elim_section-8-4",
  "type": "Exercise",
  "number": "A.3.3",
  "title": "",
  "body": "  Solve (find all solutions), or show no solution exists                         "
},
{
  "id": "elim_section-8-5",
  "level": "2",
  "url": "elim_section.html#elim_section-8-5",
  "type": "Exercise",
  "number": "A.3.4",
  "title": "",
  "body": "  By computing the inverse, solve the following systems for .               "
},
{
  "id": "exercise_rankmatrix",
  "level": "2",
  "url": "elim_section.html#exercise_rankmatrix",
  "type": "Exercise",
  "number": "A.3.5",
  "title": "",
  "body": "  Compute the rank of the given matrices                    "
},
{
  "id": "elim_section-8-7",
  "level": "2",
  "url": "elim_section.html#elim_section-8-7",
  "type": "Exercise",
  "number": "A.3.6",
  "title": "",
  "body": "  For the matrices in , find a linearly independent set of row vectors that span the row space (they don't need to be rows of the matrix).   "
},
{
  "id": "elim_section-8-8",
  "level": "2",
  "url": "elim_section.html#elim_section-8-8",
  "type": "Exercise",
  "number": "A.3.7",
  "title": "",
  "body": "  For the matrices in , find a linearly independent set of columns that span the column space. That is, find the pivot columns of the matrices.   "
},
{
  "id": "elim_section-8-9",
  "level": "2",
  "url": "elim_section.html#elim_section-8-9",
  "type": "Exercise",
  "number": "A.3.8",
  "title": "",
  "body": "  Find a linearly independent subset of the following vectors that has the same span.    "
},
{
  "id": "elim_section-8-10",
  "level": "2",
  "url": "elim_section.html#elim_section-8-10",
  "type": "Exercise",
  "number": "A.3.101",
  "title": "",
  "body": "  Compute the reduced row echelon form for the following matrices:                                              a)  b)  c)  d)  e)  f)  g)  h)    "
},
{
  "id": "elim_section-8-11",
  "level": "2",
  "url": "elim_section.html#elim_section-8-11",
  "type": "Exercise",
  "number": "A.3.102",
  "title": "",
  "body": "  Compute the inverse of the given matrices                     a)  b)  c)    "
},
{
  "id": "elim_section-8-12",
  "level": "2",
  "url": "elim_section.html#elim_section-8-12",
  "type": "Exercise",
  "number": "A.3.103",
  "title": "",
  "body": "  Solve (find all solutions), or show no solution exists                          a) ,  b) no solution c) , ,  d) is free, ,    "
},
{
  "id": "elim_section-8-13",
  "level": "2",
  "url": "elim_section.html#elim_section-8-13",
  "type": "Exercise",
  "number": "A.3.104",
  "title": "",
  "body": "  By computing the inverse, solve the following systems for .                a)  b)    "
},
{
  "id": "exercise_rankmatrixans",
  "level": "2",
  "url": "elim_section.html#exercise_rankmatrixans",
  "type": "Exercise",
  "number": "A.3.105",
  "title": "",
  "body": "  Compute the rank of the given matrices                     a) 3 b) 1 c) 2   "
},
{
  "id": "elim_section-8-15",
  "level": "2",
  "url": "elim_section.html#elim_section-8-15",
  "type": "Exercise",
  "number": "A.3.106",
  "title": "",
  "body": "  For the matrices in , find a linearly independent set of row vectors that span the row space (they don't need to be rows of the matrix).    a) , ,  b)  c) ,    "
},
{
  "id": "elim_section-8-16",
  "level": "2",
  "url": "elim_section.html#elim_section-8-16",
  "type": "Exercise",
  "number": "A.3.107",
  "title": "",
  "body": "  For the matrices in , find a linearly independent set of columns that span the column space. That is, find the pivot columns of the matrices.    a) , ,  b)  c) ,    "
},
{
  "id": "elim_section-8-17",
  "level": "2",
  "url": "elim_section.html#elim_section-8-17",
  "type": "Exercise",
  "number": "A.3.108",
  "title": "",
  "body": "  Find a linearly independent subset of the following vectors that has the same span.         "
},
{
  "id": "subspaces_section",
  "level": "1",
  "url": "subspaces_section.html",
  "type": "Section",
  "number": "A.4",
  "title": "Subspaces, dimension, and the kernel",
  "body": " Subspaces, dimension, and the kernel   Note: 1 lecture    Subspaces, basis, and dimension  We often find ourselves looking at the set of solutions of a linear equation for some matrix , that is, we are interested in the kernel of . The set of all such solutions has a nice structure: It looks and acts a lot like some euclidean space .  We say that a set of vectors in is a subspace subspace if whenever and are members of and is a scalar, then are also members of . That is, we can add and multiply by scalars and we still land in . So every linear combination of vectors of is still in . That is really what a subspace is. It is a subset where we can take linear combinations and still end up being in the subset. Consequently the span of a number of vectors is automatically a subspace.    If we let , then this is a subspace of . Adding any two vectors in gets a vector in , and so does multiplying by scalars.  The set , that is, the set of the zero vector by itself, is also a subspace of . There is only one vector in this subspace, so we only need to verify the definition for that one vector, and everything checks out: and .  The set of all the vectors of the form for any real number , such as , , or is a subspace of . Adding two such vectors, say again gets a vector of the same form, and so does multiplying by a scalar, say .    If is a subspace and we can find linearly independent vectors in  such that every other vector in is a linear combination of , then the set is called a basis basis of . In other words, is the span of . We say that has dimension , and we write     If is a subspace and is not the trivial subspace , then there exists a unique positive integer (the dimension) and a (not unique) basis , such that every in can be uniquely represented by for some scalars , , ..., .    Just as a vector in is represented by a -tuple of numbers, so is a vector in a -dimensional subspace of represented by a -tuple of numbers. At least once we have fixed a basis. A different basis would give a different -tuple of numbers for the same vector.  We should reiterate that while is unique (a subspace cannot have two different dimensions), the set of basis vectors is not at all unique. There are lots of different bases for any given subspace. Finding just the right basis for a subspace is a large part of what one does in linear algebra. In fact, that is what we spend a lot of time on in linear differential equations, although at first glance it may not seem like that is what we are doing.    The standard basis is a basis of , (hence the name). So as expected   On the other hand the subspace is of dimension .  The subspace from , that is, the set of vectors , is of dimension 1. One possible basis is simply , the single vector : every vector in can be represented by . Similarly another possible basis would be . Then the vector would be represented as .    Row and column spaces of a matrix are also examples of subspaces, as they are given as the span of vectors. We can use what we know about rank, row spaces, and column spaces from the previous section to find a basis.    In the last section, we considered the matrix Using row reduction to find the pivot columns, we found What we did was we found the basis of the column space. The basis has two elements, and so the column space of is two dimensional. Notice that the rank of is two.    We would have followed the same procedure if we wanted to find the basis of the subspace spanned by We would have simply formed the matrix with these vectors as columns and repeated the computation above. The subspace is then the column space of .    Consider the matrix Conveniently, the matrix is in reduced row echelon form. The matrix is of rank 3. The column space is the span of the pivot columns. It is the 3-dimensional space The row space is the 3-dimensional space As these vectors have 5 components, we think of the row space of as a subspace of .    The way the dimensions worked out in the examples is not an accident. Since the number of vectors that we needed to take was always the same as the number of pivots, and the number of pivots is the rank, we get the following result.   Rank   The dimension of the column space and the dimension of the row space of a matrix are both equal to the rank of .      Kernel  The set of solutions of a linear equation , the kernel of , is a subspace: If and are solutions, then So and are solutions. The dimension of the kernel is called the nullity nullity of the matrix.  The same sort of idea governs the solutions of linear differential equations. We try to describe the kernel of a linear differential operator, and as it is a subspace, we look for a basis of this kernel. Much of this book is dedicated to finding such bases.  The kernel of a matrix is the same as the kernel of its reduced row echelon form. For a matrix in reduced row echelon form, the kernel is rather easy to find. If a vector is applied to a matrix , then each entry in corresponds to a column of , the column that the entry multiplies. To find the kernel, pick a non-pivot column make a vector that has a in the entry corresponding to this non-pivot column and zeros at all the other entries corresponding to the other non-pivot columns. Then for all the entries corresponding to pivot columns make it precisely the value in the corresponding row of the non-pivot column to make the vector be a solution to . This procedure is best understood by example.    Consider This matrix is in reduced row echelon form, the pivots are marked. There are two non-pivot columns, so the kernel has dimension 2, that is, it is the span of 2 vectors. Let us find the first vector. We look at the first non-pivot column, the column, and we put a in the entry of our vector. We put a in the entry as the column is also a non-pivot column: Let us fill the rest. When this vector hits the first row, we get a and times whatever the first question mark is. So make the first question mark . For the second and third rows, it is sufficient to make it the question marks zero. We are really filling in the non-pivot column into the remaining entries. Let us check while marking which numbers went where: Yay! How about the second vector. We start with We set the first question mark to 3, the second to 4, and the third to 5. Let us check, marking things as previously, There are two non-pivot columns, so we only need two vectors. We have found the basis of the kernel. So,     What we did in finding a basis of the kernel is we expressed all solutions of as a linear combination of some given vectors.  The procedure to find the basis of the kernel of a matrix :    Find the reduced row echelon form of .    Write down the basis of the kernel as above, one vector for each non-pivot column.    The rank of a matrix is the dimension of the column space, and that is the span on the pivot columns, while the kernel is the span of vectors one for each non-pivot column. So the two numbers must add to the number of columns.   Rank–Nullity   If a matrix has columns, rank , and nullity (dimension of the kernel), then     The theorem is immensely useful in applications. It allows one to compute the rank if one knows the nullity and vice versa, without doing any extra work.  Let us consider an example application, a simple version of the so-called Fredholm alternative Fredholm alternative . A similar result is true for differential equations. Consider where is a square matrix. There are then two mutually exclusive possibilities:    A nonzero solution to exists.    The equation has a unique solution for every .    How does the Rank–Nullity theorem come into the picture? Well, if has a nonzero solution to , then the nullity is positive. But then the rank must be less than . It means that the column space of is of dimension less than , so it is a subspace that does not include everything in . So has to contain some vector not in the column space of . In fact, most vectors in are not in the column space of .    Exercises    For the following sets of vectors, find a basis for the subspace spanned by the vectors, and find the dimension of the subspace.                                      For the following matrices, find a basis for the kernel (nullspace).                            Suppose a matrix has rank 3. What is the nullity?      Suppose that is the set of all the vectors of whose third component is zero. Is a subspace? And if so, find a basis and the dimension.      Consider a square matrix , and suppose that is a nonzero vector such that . What does the Fredholm alternative say about invertibility of .      Consider If the nullity of this matrix is 2, fill in the question marks. Hint: What is the rank?      For the following sets of vectors, find a basis for the subspace spanned by the vectors, and find the dimension of the subspace.                                    a) dimension 2, b) dimension 2, c) dimension 3, d) dimension 2, e) dimension 1, f) dimension 2      For the following matrices, find a basis for the kernel (nullspace).                          a) ,  b)  c)  d) ,       Suppose the column space of a matrix of dimension 3. Find    Rank of .    Nullity of .    Dimension of the row space of .    Dimension of the nullspace of .    Size of the maximum subset of linearly independent rows of .      a) 3 b) 2 c) 3 d) 2 e) 3     "
},
{
  "id": "example_simplesubspaces",
  "level": "2",
  "url": "subspaces_section.html#example_simplesubspaces",
  "type": "Example",
  "number": "A.4.1",
  "title": "",
  "body": "  If we let , then this is a subspace of . Adding any two vectors in gets a vector in , and so does multiplying by scalars.  The set , that is, the set of the zero vector by itself, is also a subspace of . There is only one vector in this subspace, so we only need to verify the definition for that one vector, and everything checks out: and .  The set of all the vectors of the form for any real number , such as , , or is a subspace of . Adding two such vectors, say again gets a vector of the same form, and so does multiplying by a scalar, say .   "
},
{
  "id": "subspaces_section-3-6",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-3-6",
  "type": "Theorem",
  "number": "A.4.1",
  "title": "",
  "body": "  If is a subspace and is not the trivial subspace , then there exists a unique positive integer (the dimension) and a (not unique) basis , such that every in can be uniquely represented by for some scalars , , ..., .   "
},
{
  "id": "subspaces_section-3-9",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-3-9",
  "type": "Example",
  "number": "A.4.2",
  "title": "",
  "body": "  The standard basis is a basis of , (hence the name). So as expected   On the other hand the subspace is of dimension .  The subspace from , that is, the set of vectors , is of dimension 1. One possible basis is simply , the single vector : every vector in can be represented by . Similarly another possible basis would be . Then the vector would be represented as .   "
},
{
  "id": "subspaces_section-3-11",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-3-11",
  "type": "Example",
  "number": "A.4.3",
  "title": "",
  "body": "  In the last section, we considered the matrix Using row reduction to find the pivot columns, we found What we did was we found the basis of the column space. The basis has two elements, and so the column space of is two dimensional. Notice that the rank of is two.   "
},
{
  "id": "subspaces_section-3-13",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-3-13",
  "type": "Example",
  "number": "A.4.4",
  "title": "",
  "body": "  Consider the matrix Conveniently, the matrix is in reduced row echelon form. The matrix is of rank 3. The column space is the span of the pivot columns. It is the 3-dimensional space The row space is the 3-dimensional space As these vectors have 5 components, we think of the row space of as a subspace of .   "
},
{
  "id": "subspaces_section-3-15",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-3-15",
  "type": "Theorem",
  "number": "A.4.2",
  "title": "Rank.",
  "body": " Rank   The dimension of the column space and the dimension of the row space of a matrix are both equal to the rank of .   "
},
{
  "id": "subspaces_section-4-5",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-4-5",
  "type": "Example",
  "number": "A.4.5",
  "title": "",
  "body": "  Consider This matrix is in reduced row echelon form, the pivots are marked. There are two non-pivot columns, so the kernel has dimension 2, that is, it is the span of 2 vectors. Let us find the first vector. We look at the first non-pivot column, the column, and we put a in the entry of our vector. We put a in the entry as the column is also a non-pivot column: Let us fill the rest. When this vector hits the first row, we get a and times whatever the first question mark is. So make the first question mark . For the second and third rows, it is sufficient to make it the question marks zero. We are really filling in the non-pivot column into the remaining entries. Let us check while marking which numbers went where: Yay! How about the second vector. We start with We set the first question mark to 3, the second to 4, and the third to 5. Let us check, marking things as previously, There are two non-pivot columns, so we only need two vectors. We have found the basis of the kernel. So,    "
},
{
  "id": "subspaces_section-4-10",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-4-10",
  "type": "Theorem",
  "number": "A.4.3",
  "title": "Rank–Nullity.",
  "body": " Rank–Nullity   If a matrix has columns, rank , and nullity (dimension of the kernel), then    "
},
{
  "id": "subspaces_section-5-2",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-2",
  "type": "Exercise",
  "number": "A.4.1",
  "title": "",
  "body": "  For the following sets of vectors, find a basis for the subspace spanned by the vectors, and find the dimension of the subspace.                                   "
},
{
  "id": "subspaces_section-5-3",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-3",
  "type": "Exercise",
  "number": "A.4.2",
  "title": "",
  "body": "  For the following matrices, find a basis for the kernel (nullspace).                         "
},
{
  "id": "subspaces_section-5-4",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-4",
  "type": "Exercise",
  "number": "A.4.3",
  "title": "",
  "body": "  Suppose a matrix has rank 3. What is the nullity?   "
},
{
  "id": "subspaces_section-5-5",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-5",
  "type": "Exercise",
  "number": "A.4.4",
  "title": "",
  "body": "  Suppose that is the set of all the vectors of whose third component is zero. Is a subspace? And if so, find a basis and the dimension.   "
},
{
  "id": "subspaces_section-5-6",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-6",
  "type": "Exercise",
  "number": "A.4.5",
  "title": "",
  "body": "  Consider a square matrix , and suppose that is a nonzero vector such that . What does the Fredholm alternative say about invertibility of .   "
},
{
  "id": "subspaces_section-5-7",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-7",
  "type": "Exercise",
  "number": "A.4.6",
  "title": "",
  "body": "  Consider If the nullity of this matrix is 2, fill in the question marks. Hint: What is the rank?   "
},
{
  "id": "subspaces_section-5-8",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-8",
  "type": "Exercise",
  "number": "A.4.101",
  "title": "",
  "body": "  For the following sets of vectors, find a basis for the subspace spanned by the vectors, and find the dimension of the subspace.                                    a) dimension 2, b) dimension 2, c) dimension 3, d) dimension 2, e) dimension 1, f) dimension 2   "
},
{
  "id": "subspaces_section-5-9",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-9",
  "type": "Exercise",
  "number": "A.4.102",
  "title": "",
  "body": "  For the following matrices, find a basis for the kernel (nullspace).                          a) ,  b)  c)  d) ,    "
},
{
  "id": "subspaces_section-5-10",
  "level": "2",
  "url": "subspaces_section.html#subspaces_section-5-10",
  "type": "Exercise",
  "number": "A.4.103",
  "title": "",
  "body": "  Suppose the column space of a matrix of dimension 3. Find    Rank of .    Nullity of .    Dimension of the row space of .    Dimension of the nullspace of .    Size of the maximum subset of linearly independent rows of .      a) 3 b) 2 c) 3 d) 2 e) 3   "
},
{
  "id": "innerproduct_section",
  "level": "1",
  "url": "innerproduct_section.html",
  "type": "Section",
  "number": "A.5",
  "title": "Inner product and projections",
  "body": " Inner product and projections   Note: 1–2 lectures    Inner product and orthogonality  To do basic geometry, we need length, and we need angles. We have already seen the euclidean length, so let us figure out how to compute angles. Mostly, we are worried about the right angle When Euclid defined angles in his Elements , the only angle he ever really defined was the right angle. .  Given two (column) vectors in , we define the (standard) inner product inner product standard inner product as the dot product: Why do we seemingly give a new notation for the dot product? Because there are other possible inner products, which are not the dot product, although we will not worry about others here. An inner product can even be defined on spaces of functions as we do in : But we digress.  The inner product satisfies the following rules:     , and if and only if ,     ,     ,     and .    Anything that satisfies the properties above can be called an inner product, although in this section we are concerned with the standard inner product in .  The standard inner product gives the euclidean length: How does it give angles?  You may recall from multivariable calculus, that in two or three dimensions, the standard inner product (the dot product) gives you the angle between the vectors: That is, is the angle that and make when they are based at the same point.  In (any dimension), we are simply going to say that from the formula is what the angle is. This makes sense as any two vectors based at the origin lie in a 2-dimensional plane (subspace), and the formula works in 2 dimensions. In fact, one could even talk about angles between functions this way, and we do in , where we talk about orthogonal functions (functions at right angle to each other).  To compute the angle we compute Our angles are always in radians. We are computing the cosine of the angle, which is really the best we can do. Given two vectors at an angle , we can give the angle as , , etc., see . Fortunately, . If we solve for using the inverse cosine , we can just decree that .   Angle between vectors.      Let us compute the angle between the vectors and in the plane. Compute Therefore .    As we said, the most important angle is the right angle. A right angle is radians, and , so the formula is particularly easy in this case. We say vectors and are orthogonal orthogonal if they are at right angles, that is if The vectors and are orthogonal. So are and . However, and are not orthogonal as their inner product is and not 0.    Orthogonal projection  A typical application of linear algebra is to take a difficult problem, write everything in the right basis, and in this new basis the problem becomes simple. A particularly useful basis is an orthogonal basis, that is a basis where all the basis vectors are orthogonal. When we draw a coordinate system in two or three dimensions, we almost always draw our axes as orthogonal to each other.  Generalizing this concept to functions, it is particularly useful in to express a function using a particular orthogonal basis, the Fourier series.  To express one vector in terms of an orthogonal basis, we need to first project one vector onto another. Given a nonzero vector , we define the orthogonal projection orthogonal projection projection orthogonal of onto as For the geometric idea, see . That is, we find the shadow of on the line spanned by if the direction of the sun's rays were exactly perpendicular to the line. Another way of thinking about it is that the tip of the arrow of is the closest point on the line spanned by to the tip of the arrow of . In terms of euclidean distance, minimizes the distance among all vectors that are multiples of . Because of this, this projection comes up often in applied mathematics in all sorts of contexts we cannot solve a problem exactly: We can't always solve Find as a multiple of , but is the best solution.    Orthogonal projection.    The formula follows from basic trigonometry. The length of should be times the length of , that is . We take the unit vector in the direction of , that is, and we multiply it by the length of the projection. In other words,     Suppose we wish to project the vector onto the vector . Compute   Let us double check that the projection is orthogonal. That is ought to be orthogonal to , see the right angle in . That is, ought to be orthogonal to . We compute the inner product and we had better get zero:       Orthogonal basis  As we said, a basis is an orthogonal basis orthogonal basis if all vectors in the basis are orthogonal to each other, that is, if for all choices of and where (a nonzero vector cannot be orthogonal to itself). A basis is furthermore called an orthonormal basis orthonormal basis if all the vectors in a basis are also unit vectors, that is, if all the vectors have magnitude 1. For example, the standard basis is an orthonormal basis of : Any pair is orthogonal, and each vector is of unit magnitude.  The reason why we are interested in orthogonal (or orthonormal) bases is that they make it really simple to represent a vector (or a projection onto a subspace) in the basis. The simple formula for the orthogonal projection onto a vector gives us the coefficients. In , we use the same idea by finding the correct orthogonal basis for the set of solutions of a differential equation. We are then able to find any particular solution by simply applying the orthogonal projection formula, which is just a couple of a inner products.  Let us come back to linear algebra. Suppose that we have a subspace and an orthogonal basis . We wish to express in terms of the basis. If is not in the span of the basis (when it is not in the given subspace), then of course it is not possible, but the following formula gives us at least the orthogonal projection onto the subspace, or in other words, the best approximation in the subspace.  First suppose that is in the span. Then it is the sum of the orthogonal projections: In other words, if we want to write , then   Another way to derive this formula is to work in reverse. Suppose that . Take an inner product with , and use the properties of the inner product: As the basis is orthogonal, then whenever . That means that only one of the terms, the one, on the right hand side is nonzero and we get Solving for we find as before.    The vectors and form an orthogonal basis of . Suppose we wish to represent in terms of this basis, that is, we wish to find and such that We compute: So     If the basis is orthonormal rather than orthogonal, then all the denominators are one. It is easy to make a basis orthonormal—divide all the vectors by their size. If you want to decompose many vectors, it may be better to find an orthonormal basis. In the example above, the orthonormal basis we would thus create is Then the computation would have been   Maybe the example is not so awe inspiring, but given vectors in rather than , then surely one would much rather do 20 inner products (or 40 if we did not have an orthonormal basis) rather than solving a system of twenty equations in twenty unknowns using row reduction of a matrix.  As we said above, the formula still works even if is not in the subspace, although then it does not get us the vector but its projection. More concretely, suppose that is a subspace that is the span of and is any vector. Let be the vector in that is the closest to . Then   Of course, if is in , then , as the closest vector in to is itself. But true utility is obtained when is not in . In much of applied mathematics, we cannot find an exact solution to a problem, but we try to find the best solution out of a small subset (subspace). The partial sums of Fourier series from are one example. Another example is least square approximation to fit a curve to data. Yet another example is given by the most commonly used numerical methods to solve partial differential equations, the finite element methods.    The vectors and are orthogonal, and so they are an orthogonal basis of a subspace : Let us find the vector in that is closest to . That is, let us find .       The Gram–Schmidt process  Before leaving orthogonal bases, let us note a procedure for manufacturing them out of any old basis. It may not be difficult to come up with an orthogonal basis for a 2-dimensional subspace, but for a 20-dimensional subspace, it seems a daunting task. Fortunately, the orthogonal projection can be used to project away the bits of the vectors that are making them not orthogonal. It is called the Gram–Schmidt process Gram–Schmidt process .  We start with a basis of vectors . We construct an orthogonal basis as follows. What we do is at the step, we take and we subtract the projection of to the subspace spanned by .    Consider the vectors , and and call the span of the two vectors. Let us find an orthogonal basis of : So and span and are orthogonal. Let us check: .  Suppose we wish to find an orthonormal basis, not just an orthogonal one. Well, we simply make the vectors into unit vectors by dividing them by their magnitude. The two vectors making up the orthonormal basis of are:       Exercises    Find the that makes the following vectors orthogonal: , .      Find the angle between , .      Given that and compute                       Suppose . Find                       Consider the vectors , , .    Check that the vectors are linearly independent and so form a basis.    Check that the vectors are mutually orthogonal, and are therefore an orthogonal basis.    Represent as a linear combination of this basis.    Make the basis orthonormal.        Let be the subspace spanned by , . Find an orthogonal basis of by the Gram-Schmidt process.      Starting with , , , follow the Gram-Schmidt process to find an orthogonal basis of .      Find an orthogonal basis of such that is one of the vectors. Hint: First find two extra vectors to make a linearly independent set.      Using cosines and sines of , find a unit vector in that makes angle with . What is ?      Find the that makes the following vectors orthogonal: , .           Find the angle between , .           Given that and and and                     a) -15 b) -1 c) 28      Suppose . Find                     a)  b)  c)       The vectors , , form an orthogonal basis. Represent the following vectors in terms of this basis:                     a)  b)  c)       Let be the subspace spanned by , . Find an orthogonal basis of by the Gram-Schmidt process.     ,       Starting with , , , follow the Gram-Schmidt process to find an orthogonal basis of .     , ,      "
},
{
  "id": "vec-angle_fig",
  "level": "2",
  "url": "innerproduct_section.html#vec-angle_fig",
  "type": "Figure",
  "number": "A.5",
  "title": "",
  "body": " Angle between vectors.   "
},
{
  "id": "innerproduct_section-3-12",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-3-12",
  "type": "Example",
  "number": "A.5.1",
  "title": "",
  "body": "  Let us compute the angle between the vectors and in the plane. Compute Therefore .   "
},
{
  "id": "vec-orthoproj_fig",
  "level": "2",
  "url": "innerproduct_section.html#vec-orthoproj_fig",
  "type": "Figure",
  "number": "A.6",
  "title": "",
  "body": " Orthogonal projection.   "
},
{
  "id": "innerproduct_section-4-7",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-4-7",
  "type": "Example",
  "number": "A.5.2",
  "title": "",
  "body": "  Suppose we wish to project the vector onto the vector . Compute   Let us double check that the projection is orthogonal. That is ought to be orthogonal to , see the right angle in . That is, ought to be orthogonal to . We compute the inner product and we had better get zero:    "
},
{
  "id": "innerproduct_section-5-7",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-5-7",
  "type": "Example",
  "number": "A.5.3",
  "title": "",
  "body": "  The vectors and form an orthogonal basis of . Suppose we wish to represent in terms of this basis, that is, we wish to find and such that We compute: So    "
},
{
  "id": "innerproduct_section-5-12",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-5-12",
  "type": "Example",
  "number": "A.5.4",
  "title": "",
  "body": "  The vectors and are orthogonal, and so they are an orthogonal basis of a subspace : Let us find the vector in that is closest to . That is, let us find .    "
},
{
  "id": "innerproduct_section-6-4",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-6-4",
  "type": "Example",
  "number": "A.5.5",
  "title": "",
  "body": "  Consider the vectors , and and call the span of the two vectors. Let us find an orthogonal basis of : So and span and are orthogonal. Let us check: .  Suppose we wish to find an orthonormal basis, not just an orthogonal one. Well, we simply make the vectors into unit vectors by dividing them by their magnitude. The two vectors making up the orthonormal basis of are:    "
},
{
  "id": "innerproduct_section-7-2",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-2",
  "type": "Exercise",
  "number": "A.5.1",
  "title": "",
  "body": "  Find the that makes the following vectors orthogonal: , .   "
},
{
  "id": "innerproduct_section-7-3",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-3",
  "type": "Exercise",
  "number": "A.5.2",
  "title": "",
  "body": "  Find the angle between , .   "
},
{
  "id": "innerproduct_section-7-4",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-4",
  "type": "Exercise",
  "number": "A.5.3",
  "title": "",
  "body": "  Given that and compute                    "
},
{
  "id": "innerproduct_section-7-5",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-5",
  "type": "Exercise",
  "number": "A.5.4",
  "title": "",
  "body": "  Suppose . Find                    "
},
{
  "id": "innerproduct_section-7-6",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-6",
  "type": "Exercise",
  "number": "A.5.5",
  "title": "",
  "body": "  Consider the vectors , , .    Check that the vectors are linearly independent and so form a basis.    Check that the vectors are mutually orthogonal, and are therefore an orthogonal basis.    Represent as a linear combination of this basis.    Make the basis orthonormal.     "
},
{
  "id": "innerproduct_section-7-7",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-7",
  "type": "Exercise",
  "number": "A.5.6",
  "title": "",
  "body": "  Let be the subspace spanned by , . Find an orthogonal basis of by the Gram-Schmidt process.   "
},
{
  "id": "innerproduct_section-7-8",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-8",
  "type": "Exercise",
  "number": "A.5.7",
  "title": "",
  "body": "  Starting with , , , follow the Gram-Schmidt process to find an orthogonal basis of .   "
},
{
  "id": "innerproduct_section-7-9",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-9",
  "type": "Exercise",
  "number": "A.5.8",
  "title": "",
  "body": "  Find an orthogonal basis of such that is one of the vectors. Hint: First find two extra vectors to make a linearly independent set.   "
},
{
  "id": "innerproduct_section-7-10",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-10",
  "type": "Exercise",
  "number": "A.5.9",
  "title": "",
  "body": "  Using cosines and sines of , find a unit vector in that makes angle with . What is ?   "
},
{
  "id": "innerproduct_section-7-11",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-11",
  "type": "Exercise",
  "number": "A.5.101",
  "title": "",
  "body": "  Find the that makes the following vectors orthogonal: , .        "
},
{
  "id": "innerproduct_section-7-12",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-12",
  "type": "Exercise",
  "number": "A.5.102",
  "title": "",
  "body": "  Find the angle between , .        "
},
{
  "id": "innerproduct_section-7-13",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-13",
  "type": "Exercise",
  "number": "A.5.103",
  "title": "",
  "body": "  Given that and and and                     a) -15 b) -1 c) 28   "
},
{
  "id": "innerproduct_section-7-14",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-14",
  "type": "Exercise",
  "number": "A.5.104",
  "title": "",
  "body": "  Suppose . Find                     a)  b)  c)    "
},
{
  "id": "innerproduct_section-7-15",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-15",
  "type": "Exercise",
  "number": "A.5.105",
  "title": "",
  "body": "  The vectors , , form an orthogonal basis. Represent the following vectors in terms of this basis:                     a)  b)  c)    "
},
{
  "id": "innerproduct_section-7-16",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-16",
  "type": "Exercise",
  "number": "A.5.106",
  "title": "",
  "body": "  Let be the subspace spanned by , . Find an orthogonal basis of by the Gram-Schmidt process.     ,    "
},
{
  "id": "innerproduct_section-7-17",
  "level": "2",
  "url": "innerproduct_section.html#innerproduct_section-7-17",
  "type": "Exercise",
  "number": "A.5.107",
  "title": "",
  "body": "  Starting with , , , follow the Gram-Schmidt process to find an orthogonal basis of .     , ,    "
},
{
  "id": "det_section",
  "level": "1",
  "url": "det_section.html",
  "type": "Section",
  "number": "A.6",
  "title": "Determinant",
  "body": " Determinant   Note: 1 lecture  For square matrices we define a useful quantity called the determinant determinant . Define the determinant of a matrix as the value of its only entry For a matrix, define   Before defining the determinant for larger matrices, we note the meaning of the determinant. An matrix gives a mapping of the -dimensional euclidean space to itself. So a matrix is a mapping of the plane to itself. The determinant of is the factor by which the area of objects changes. If we take the unit square (square of side 1) in the plane, then takes the square to a parallelogram of area . The sign of denotes a change of orientation (negative if the axes get flipped). For example, let Then . Let us see where sends the unit square—the square with vertices , , , and . The point gets sent to . The image of the square is another square with vertices , , , and . The image square has a side of length , and it is therefore of area 2. See .   Image of the unit quare via the mapping .    In general, the image of a square is going to be a parallelogram parallelogram . In high school geometry, you may have seen a formula for computing the area of a parallelogram parallelogram with vertices , , and . The area is The vertical lines above mean absolute value. The matrix carries the unit square to the given parallelogram.  There are a number of ways to define the determinant for an matrix. Let us use the so-called cofactor expansion cofactor expansion . We define as the matrix with the row and the column deleted. For example, if We now define the determinant recursively or in other words For a matrix, we get . For example,   It turns out that we did not have to necessarily use the first row. That is for any , It is sometimes useful to use a row other than the first. In the following example it is more convenient to expand along the second row. Notice that for the second row we are starting with a negative sign. Let us check if it is really the same as expanding along the first row,   In computing the determinant, we alternately add and subtract the determinants of the submatrices multiplied by for a fixed and all . The numbers are called cofactors cofactor of the matrix. And that is why this method of computing the determinant is called the cofactor expansion .  Similarly we do not need to expand along a row, we can expand along a column. For any , A related fact is that   A matrix is upper triangular upper triangular if all elements below the main diagonal are 0. For example, is upper triangular. Similarly a lower triangular lower triangular matrix is one where everything above the diagonal is zero. For example,   The determinant for triangular matrices is very simple to compute. Consider the lower triangular matrix. If we expand along the first row, we find that the determinant is 1 times the determinant of the lower triangular matrix . So the deteriminant is just the product of the diagonal entries: Similarly for upper triangular matrices In general, if is triangular, then   If is diagonal, then it is also triangular (upper and lower), so same formula applies. For example,   In particular, the identity matrix is diagonal, and the diagonal entries are all 1. Thus,   The determinant is telling you how geometric objects scale. If doubles the sizes of geometric objects and triples them, then (which applies to an object and then it applies ) should make size go up by a factor of . This is true in general:         This property is one of the most useful, and it is employed often to actually compute determinants. A particularly interesting consequence is to note what it means for the existence of inverses. Take and to be inverses, that is . Then Neither nor can be zero. This fact is an extremely useful property of the determinant, and one which is used often in this book:    An matrix is invertible if and only if .    In fact, says that So we know what the determinant of is without computing .  Let us return to the formula for the inverse of a matrix: Notice the determinant of the matrix in the denominator of the fraction. The formula only works if the determinant is nonzero, otherwise we are dividing by zero.  A common notation for the determinant is a pair of vertical lines: Personally, I find this notation confusing as vertical lines usually mean a positive quantity, while determinants can be negative. Also think about how to write the absolute value of a determinant. This notation is not used in this book.    Exercises    Compute the determinant of the following matrices:                                                For which are the following matrices singular (not invertible).                            Compute without computing the inverse.      Suppose Let . Compute in a simple way, without computing what is . Hint: First read off and .      Consider the linear mapping from to given by the matrix for some number . You wish to make such that it doubles the area of every geometric figure. What are the possibilities for (there are two answers).      Suppose and are matrices, and is invertible. Suppose that . Compute and . Justify your answer using the theorems in this section.      Let be an matrix such that . Compute given a number . Hint: First try computing , then note that .      Compute the determinant of the following matrices:                                              a)  b)  c)  d)  e)  f)  g)  h)       For which are the following matrices singular (not invertible).                          a)  b)  c)  d)       Compute without computing the inverse.            (challenging) Find all the that make the matrix inverse have only integer entries (no fractions). Note that there are two answers.     and      "
},
{
  "id": "linalg-imagesquare_fig",
  "level": "2",
  "url": "det_section.html#linalg-imagesquare_fig",
  "type": "Figure",
  "number": "A.7",
  "title": "",
  "body": " Image of the unit quare via the mapping .   "
},
{
  "id": "det_section-2-15",
  "level": "2",
  "url": "det_section.html#det_section-2-15",
  "type": "Theorem",
  "number": "A.6.1",
  "title": "",
  "body": "      "
},
{
  "id": "det_section-2-17",
  "level": "2",
  "url": "det_section.html#det_section-2-17",
  "type": "Theorem",
  "number": "A.6.2",
  "title": "",
  "body": "  An matrix is invertible if and only if .   "
},
{
  "id": "det_section-3-2",
  "level": "2",
  "url": "det_section.html#det_section-3-2",
  "type": "Exercise",
  "number": "A.6.1",
  "title": "",
  "body": "  Compute the determinant of the following matrices:                                             "
},
{
  "id": "det_section-3-3",
  "level": "2",
  "url": "det_section.html#det_section-3-3",
  "type": "Exercise",
  "number": "A.6.2",
  "title": "",
  "body": "  For which are the following matrices singular (not invertible).                         "
},
{
  "id": "det_section-3-4",
  "level": "2",
  "url": "det_section.html#det_section-3-4",
  "type": "Exercise",
  "number": "A.6.3",
  "title": "",
  "body": "  Compute without computing the inverse.   "
},
{
  "id": "det_section-3-5",
  "level": "2",
  "url": "det_section.html#det_section-3-5",
  "type": "Exercise",
  "number": "A.6.4",
  "title": "",
  "body": "  Suppose Let . Compute in a simple way, without computing what is . Hint: First read off and .   "
},
{
  "id": "det_section-3-6",
  "level": "2",
  "url": "det_section.html#det_section-3-6",
  "type": "Exercise",
  "number": "A.6.5",
  "title": "",
  "body": "  Consider the linear mapping from to given by the matrix for some number . You wish to make such that it doubles the area of every geometric figure. What are the possibilities for (there are two answers).   "
},
{
  "id": "det_section-3-7",
  "level": "2",
  "url": "det_section.html#det_section-3-7",
  "type": "Exercise",
  "number": "A.6.6",
  "title": "",
  "body": "  Suppose and are matrices, and is invertible. Suppose that . Compute and . Justify your answer using the theorems in this section.   "
},
{
  "id": "det_section-3-8",
  "level": "2",
  "url": "det_section.html#det_section-3-8",
  "type": "Exercise",
  "number": "A.6.7",
  "title": "",
  "body": "  Let be an matrix such that . Compute given a number . Hint: First try computing , then note that .   "
},
{
  "id": "det_section-3-9",
  "level": "2",
  "url": "det_section.html#det_section-3-9",
  "type": "Exercise",
  "number": "A.6.101",
  "title": "",
  "body": "  Compute the determinant of the following matrices:                                              a)  b)  c)  d)  e)  f)  g)  h)    "
},
{
  "id": "det_section-3-10",
  "level": "2",
  "url": "det_section.html#det_section-3-10",
  "type": "Exercise",
  "number": "A.6.102",
  "title": "",
  "body": "  For which are the following matrices singular (not invertible).                          a)  b)  c)  d)    "
},
{
  "id": "det_section-3-11",
  "level": "2",
  "url": "det_section.html#det_section-3-11",
  "type": "Exercise",
  "number": "A.6.103",
  "title": "",
  "body": "  Compute without computing the inverse.        "
},
{
  "id": "det_section-3-12",
  "level": "2",
  "url": "det_section.html#det_section-3-12",
  "type": "Exercise",
  "number": "A.6.104",
  "title": "",
  "body": "   (challenging) Find all the that make the matrix inverse have only integer entries (no fractions). Note that there are two answers.     and    "
},
{
  "id": "laplacelist_appendix",
  "level": "1",
  "url": "laplacelist_appendix.html",
  "type": "Appendix",
  "number": "B",
  "title": "Table of Laplace Transforms",
  "body": " Table of Laplace Transforms  The function is the Heaviside function, is the Dirac delta function, and                                     "
},
{
  "id": "furtherreading_chapter",
  "level": "1",
  "url": "furtherreading_chapter.html",
  "type": "References",
  "number": "",
  "title": "Further Reading",
  "body": " Further Reading  Paul W. Berg and James L. McGregor, Elementary Partial Differential Equations , Holden-Day, San Francisco, CA, 1966.  William E. Boyce and Richard C. DiPrima, Elementary Differential Equations and Boundary Value Problems , 11th edition, John Wiley & Sons Inc., New York, NY, 2017.  C.H. Edwards and D.E. Penney, Differential Equations and Boundary Value Problems: Computing and Modeling , 5th edition, Pearson, 2014.  Stanley J. Farlow, An Introduction to Differential Equations and Their Applications , McGraw-Hill, Inc., Princeton, NJ, 1994. (Published also by Dover Publications, 2006.)  E.L. Ince, Ordinary Differential Equations , Dover Publications, Inc., New York, NY, 1956.  William F. Trench, Elementary Differential Equations with Boundary Value Problems , Books and Monographs, Book 9, 2013, https:\/\/digitalcommons.trinity.edu\/mono\/9 .  "
},
{
  "id": "diffyqs-11-4",
  "level": "1",
  "url": "diffyqs-11-4.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
