import "../styles/FamilyQuiz.css";

function StartScreen({ setPlayer }) {
  return (
    <div className="container">
      <div className="card start-card">
        <h1 className="title">👨‍👩‍👦 Fam Quiz</h1>
        <p className="subtitle">யார் விளையாடப் போகிறார்கள்?</p>

        <div className="players">
          <div className="player" onClick={() => setPlayer("Amma")}>
            <h3>Amma ❤️</h3>
          </div>

          <div className="player" onClick={() => setPlayer("Appa")}>
            <h3>Appa 💙</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;