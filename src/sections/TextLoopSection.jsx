import TextLoop from "../components/text_loop/TextLoop";

function TextLoopSection() {
  return (
    <section className="text-loop-section">
      <TextLoop
        text="PETUALANG RAYA"
        separator="✦"
        shape="line"
        speed={90}
        direction="forward"
        fontSize={12}
        fontWeight={200}
        letterSpacing={3}
        color="black"
        ribbon={false}
        pauseOnHover
      />
    </section>
  );
}

export default TextLoopSection;