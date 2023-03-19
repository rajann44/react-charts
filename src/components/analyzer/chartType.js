export default function ChartType({whichChart, whichImage, chartClick}) {
  return (
    <div>
      <div>
        <div
          className="image-wrapper border my-5"
          style={{
            boxSizing: "border-box",
            height: "48px",
            width: "64px",
            paddingTop: "10px",
          }}
        >
          <span
            onClick={()=>chartClick(whichChart)}
            style={{
              backgroundImage:
                "url(https://cdndomo.com/public/images/chart-type-icons-small-2a2f73b2af249e0aa2e2.png)",
              width: "42px",
              height: "24px",
              backgroundPosition: whichImage,
              display: "inline-block",
            }}
          ></span>
          <div className="my-1" style={{ color: "#707070" }}>
            {whichChart}
          </div>
        </div>
      </div>
    </div>
  );
}
