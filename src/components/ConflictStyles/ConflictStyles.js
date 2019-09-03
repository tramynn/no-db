import React, { Component } from "react";
import StyleCard from "./StyleCard/StyleCard";
import StylesNav from "./StylesNav/StylesNav";
import Footer from "../Footer/Footer";
import "./ConflictStyles.css";

class ConflictStyles extends Component {
  constructor() {
    super();
    this.state = {
      section: "Collaborating"
    };

    this.updateSection = this.updateSection.bind(this);
  }

  updateSection(style) {
    this.setState({ section: style });
  }

  render() {
    return (
      <div className="ConflictStyles-Container">
        <section className="ConflictStyles-Left">
          <section className="ConflictStyles-Header">
            Conflict
            <br />
            Styles.
          </section>
        </section>
        <section className="ConflictStyles-Right">
          <nav className="Styles-Header">
            <StylesNav updateSection={this.updateSection} />
          </nav>
          <section className="Styles-Container">
            {this.state.section === "Collaborating" ? (
              <StyleCard
                animal="Owl"
                name="Collaborating"
                info="Owls highly value both their goals and their relationships. They view conflict as a problem to be solved and seek a solution that achieves both their goals and the goals
                                of the other person. Owls see conflicts as a means of improving relationships by reducing tensions between two persons. They try to begin a discussion that identifies the conflict as a problem, and strive to resolve tensions and maintain the relationship by seeking solutions that satisfy both themselves and the other person."
              />
            ) : null}
            {this.state.section === "Competing" ? (
              <StyleCard
                animal="Turtle"
                name="Competing"
                info="Turtles tend to value avoiding confrontation more than either their goals or
                                relationships. They often find it easier to withdraw from a conflict than to face it. This might even include completely giving up relationships or goals that are associated with the conflict."
              />
            ) : null}
            {this.state.section === "Avoiding" ? (
              <StyleCard
                animal="Shark"
                name="Avoiding"
                info="Sharks typically value their goals over relationships, meaning that if forced to choose, they would seek to achieve their goals even at the cost of the relationship
                                involved. Sharks are typically more concerned with accomplishing their goals than with being liked by others. They might try to force opponents to accept their solution to the conflict by overpowering them."
              />
            ) : null}
            {this.state.section === "Accommodating" ? (
              <StyleCard
                animal="Teddy Bear"
                name="Accommodating"
                info="Teddy Bears typically value relationships over their own goals; if forced to choose, Teddy Bears will often sacrifice their goals in order to maintain relationships. Teddy
                                Bears generally want to be liked by others, and prefer to avoid conflict because they believe addressing it will damage relationships. Teddy Bears try to smooth over conflict to prevent damage to the relationship."
              />
            ) : null}
            {this.state.section === "Compromising" ? (
              <StyleCard
                animal="Fox"
                name="Compromising"
                info="Foxes are moderately concerned with both their goals and their relationships with others. Foxes typically seek a compromise; they give up part of their goals and
                                persuade the other person in a conflict to give up part of their goals. They seek a conflict solution in which both sides gain something; the middle ground between two extreme positions. They are willing to sacrifice part of their goals in order to find agreement for the common good."
              />
            ) : null}
          </section>
          <div className="ConflictStyles-Footer">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}

export default ConflictStyles;
