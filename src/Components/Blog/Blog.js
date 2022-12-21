import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Blog = () => {
  return (
    <div className=" my-8 mb-40 text-black">
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center font-bold text-xl">
          1. What are the different ways to manage a state in a React
          application?
          <FaAngleDown></FaAngleDown>
        </div>
        <div className="collapse-content   ">
          <div>
            There are four main types of state you need to properly manage in
            your React apps: Local state, Global state, Server state, URL state
            Let's cover each of these in detail:
            <br />
            <br />
            <b>Local state –</b> Local state is data we manage in one or another
            component. Local state is most often managed in React using the
            useState hook. For example, local state would be needed to show or
            hide a modal component or to track values for a form component, such
            as form submission, when the form is disabled and the values of a
            form’s inputs.
            <br />
            <br />
            <b>Global (UI) state –</b>
            Global state is data we manage across multiple components. Global
            state is necessary when we want to get and update data anywhere in
            our app, or in multiple components at least. A common example of
            global state is authenticated user state. If a user is logged into
            our app, it is necessary to get and change their data throughout our
            application. Sometimes state we think should be local might become
            global.
            <br />
            <br />
            <b>Server state –</b>
            Data that comes from an external server that must be integrated with
            our UI state. Server state is a simple concept, but can be hard to
            manage alongside all of our local and global UI state. There are
            several pieces of state that must be managed every time you fetch or
            update data from an external server, including loading and error
            state. Fortunately there are tools such as SWR and React Query that
            make managing server state much easier.
            <br />
            <br />
            <b>URL state –</b>
            Data that exists on our URLs, including the pathname and query
            parameters. URL state is often missing as a category of state, but
            it is an important one. In many cases, a lot of major parts of our
            application rely upon accessing URL state. Try to imagine building a
            blog without being able to fetch a post based off of its slug or id
            that is located in the URL! There are undoubtedly more pieces of
            state that we could identify, but these are the major categories
            worth focusing on for most applications you build.
          </div>
        </div>
      </div>
      {/* position-2 */}
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center font-bold text-xl">
          2. How does prototypical inheritance work?
          <FaAngleDown></FaAngleDown>
        </div>
        <div className="collapse-content   ">
          <div>
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the Prototype of an object,
              we use Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
      </div>
      {/* position-3 */}
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center font-bold text-xl">
          3.What is a unit test? Why should we write unit tests?
          <FaAngleDown></FaAngleDown>
        </div>
        <div className="collapse-content   ">
          <div>
            <p>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>
      </div>
      {/* position-4 */}
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center font-bold text-xl">
          4.React vs. Angular vs. Vue?
          <FaAngleDown></FaAngleDown>
        </div>
        <div className="collapse-content   ">
          <div>
            <div>
              <b>Angular vs React</b>
              <p>
                React often requires extra modules and components, which keeps
                the core library small, but means there’s extra work involved
                when incorporating outside tools. Angular, on the other hand, is
                more of a full-fledged solution that doesn’t require extras like
                React often does, though it does have a steeper learning curve
                for its core compared to React. React is more suitable for
                intermediate to advanced JavaScript developers who are familiar
                with concepts from ES6 and up, while Angular favors those same
                developers who are also familiar with TypeScript.
              </p>
            </div>
            <div>
              <b>React vs Vue</b>
              <p>
                The choice between React vs Vue is often debated and it’s not an
                easy one. Vue has a vibrant and ever-growing community and has
                taken over popularity vs. React in many respects. React
                developers are still churning out lots of new components and
                extras, so there’s no sign that React is on the decline either.
                Vue is generally more suited to smaller, less complex apps and
                is easier to learn from scratch compared to React. Vue can be
                easier to integrate into new or existing projects and many feel
                its use of HTML templates along with JSX is an advantage.
                Overall, Vue might be the best choice if you’re a newer
                developer and not as familiar with advanced JavaScript concepts,
                while React is quite well suited for experienced programmers and
                developers who have worked with object-oriented JavaScript,
                functional JavaScript, and similar concepts.
              </p>
            </div>
            <div>
              <b>Angular vs Vue</b>
              <p>
                In most cases, you probably wouldn’t be deciding between only
                Angular and Vue. They are vastly different libraries with very
                different feature sets and learning curves. Vue is the clear
                choice for less experienced developers, and Angular would be
                preferred for those working on larger apps. A large library like
                Angular would require more diligence in keeping up with what’s
                new, while Vue would be less demanding in this regard and the
                fact that the two most recent major releases of Vue are in
                separate repositories helps. It should also be noted that Vue
                was created by a developer who formerly worked on Angular for
                Google, so that’s another thing to keep in mind, though that
                wouldn’t have a huge impact on your decisio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
