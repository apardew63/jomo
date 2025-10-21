const MainHeading = ({ line1, line2, className = "" }) => {
  return (
    <h1 className={`text-[70px] max-sm:text-[30px] font-bold leading-tight text-black font-ibmplex ${className}`}>
      <span>{line1}</span>
      <br />
      <span>{line2}</span>
    </h1>
  );
};
export default MainHeading;