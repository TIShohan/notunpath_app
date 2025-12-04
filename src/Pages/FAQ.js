import React, { useState } from "react";

function FAQ() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("https://notunpath-backend-api.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: question })
      });

      const data = await res.json();
      setAnswer(data.reply);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setAnswer("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20, fontFamily: "Arial" }}>
      <h2>🤖 Ask Anything (Teen Health)</h2>

      <textarea
        rows={4}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about puberty, mental health, etc."
        style={{ width: "100%", padding: 10, fontSize: 16 }}
      />

      <button onClick={handleAsk} style={{ marginTop: 10, padding: "10px 20px", fontSize: 16 }}>
        {loading ? "Asking..." : "Ask"}
      </button>

      {answer && (
        <div style={{ marginTop: 20, padding: 10, background: "#f0f0f0", borderRadius: 6 }}>
          <strong>AI Reply:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQ;
