const SectionHeader = ({ text }: { text: string }) => {
  return (
    <div
      className="h-[15vh] w-full "
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/yellow-background-four-maracas-black-red-designs_1061150-104597.jpg?w=996')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-center   backdrop-blur w-full h-full text-white text-4xl font-bold flex justify-center items-center">
        <span className="drop-shadow">{text}</span>
      </div>
    </div>
  );
};

export default SectionHeader;
