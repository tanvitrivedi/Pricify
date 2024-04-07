import React from "react";
import "./Template1.css";

const Template1 = ({ allCardStyles, selectedCard = "", isPreview = false }) => {
  const {
    fontStyle,
    headerTitleSize,
    subscribtionType,
    currency,
    first,
    second,
    third,
  } = allCardStyles;
  console.log("----allCardStyles", allCardStyles);

  return (
    <section className="plans__container " style={{ fontFamily: fontStyle }}>
      {!isPreview ? (
        <div className="plans">
          <div className="planItem__container">
            {selectedCard === "first" ? (
              <div
                className="planItem planItem--free max-w-80 w-80"
                style={{
                  backgroundColor: allCardStyles?.[selectedCard]?.bgColor,
                }}
              >
                <div className="card">
                  <div className="card__header">
                    <div className="card__icon symbol symbol--rounded"></div>
                    <h2 style={{ fontSize: headerTitleSize }}>
                      {allCardStyles?.[selectedCard.toLowerCase()]?.title}
                    </h2>
                  </div>
                  <div className="card__desc">
                    {allCardStyles?.[selectedCard.toLowerCase()]?.description}
                  </div>
                </div>
                <div className="price">
                  {currency}
                  {allCardStyles?.[selectedCard.toLowerCase()]?.price}
                  <span>/ {subscribtionType}</span>
                </div>
                <ul className="featureList">
                  {allCardStyles?.[selectedCard]?.services.map((d) =>
                    d.included ? (
                      <li>{d.title}</li>
                    ) : (
                      <li className="disabled">{d.title}</li>
                    )
                  )}
                </ul>
                <a
                  href={allCardStyles?.[selectedCard]?.btnLink}
                  className="button button--white"
                  style={{
                    backgroundColor: allCardStyles?.[selectedCard]?.btnColor,
                    color: "white",
                  }}
                >
                  {allCardStyles?.[selectedCard]?.btnText}
                </a>
              </div>
            ) : selectedCard === "second" ? (
              <div
                className="planItem planItem--free max-w-80 w-80"
                style={{
                  backgroundColor: allCardStyles?.[selectedCard]?.bgColor,
                }}
              >
                <div className="card">
                  <div className="card__header">
                    <div className="card__icon symbol"></div>
                    <h2 style={{ fontSize: headerTitleSize }}>
                      {allCardStyles?.[selectedCard.toLowerCase()]?.title}
                    </h2>
                  </div>
                  <div className="card__desc">
                    {allCardStyles?.[selectedCard.toLowerCase()]?.description}
                  </div>
                </div>
                <div className="price">
                  {currency}
                  {allCardStyles?.[selectedCard.toLowerCase()]?.price}
                  <span>/ {subscribtionType}</span>
                </div>
                <ul className="featureList">
                  {allCardStyles?.[selectedCard]?.services.map((d) =>
                    d.included ? (
                      <li>{d.title}</li>
                    ) : (
                      <li className="disabled">{d.title}</li>
                    )
                  )}
                </ul>
                <a
                  href={allCardStyles?.[selectedCard]?.btnLink}
                  className="button button--white"
                  style={{
                    backgroundColor: allCardStyles?.[selectedCard]?.btnColor,
                    color: "white",
                  }}
                >
                  {allCardStyles?.[selectedCard]?.btnText}
                </a>
              </div>
            ) : selectedCard === "third" ? (
              <div
                className="planItem planItem--free max-w-80 w-80"
                style={{
                  backgroundColor: allCardStyles?.[selectedCard]?.bgColor,
                }}
              >
                <div className="card">
                  <div className="card__header">
                    <div className="card__icon symbol"></div>
                    <h2 style={{ fontSize: headerTitleSize }}>
                      {allCardStyles?.[selectedCard.toLowerCase()]?.title}
                    </h2>
                  </div>
                  <div className="card__desc">
                    {allCardStyles?.[selectedCard.toLowerCase()]?.description}
                  </div>
                </div>
                <div className="price">
                  {currency}
                  {allCardStyles?.[selectedCard.toLowerCase()]?.price}
                  <span>/ {subscribtionType}</span>
                </div>
                <ul className="featureList">
                  {allCardStyles?.[selectedCard]?.services.map((d) =>
                    d.included ? (
                      <li>{d.title}</li>
                    ) : (
                      <li className="disabled">{d.title}</li>
                    )
                  )}
                </ul>
                <a
                  href={allCardStyles?.[selectedCard]?.btnLink}
                  className="button button--white"
                  style={{
                    backgroundColor: allCardStyles?.[selectedCard]?.btnColor,
                    color: "white",
                  }}
                >
                  {allCardStyles?.[selectedCard]?.btnText}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="plans">
          <div className="planItem__container">
            <div
              className="planItem planItem--free"
              style={{
                backgroundColor: allCardStyles?.first?.bgColor,
              }}
            >
              <div className="card">
                <div className="card__header">
                  <div className="card__icon symbol symbol--rounded"></div>
                  <h2 style={{ fontSize: headerTitleSize }}>
                    {allCardStyles?.first?.title}
                  </h2>
                </div>
                <div className="card__desc">
                  {allCardStyles?.first?.description}
                </div>
              </div>
              <div className="price">
                {currency}
                {allCardStyles?.first?.price}
                <span>/ {subscribtionType}</span>
              </div>
              <ul className="featureList">
                {allCardStyles?.first?.services.map((d) =>
                  d.included ? (
                    <li>{d.title}</li>
                  ) : (
                    <li className="disabled">{d.title}</li>
                  )
                )}
              </ul>
              <a
                href={allCardStyles?.first?.btnLink}
                className="button button--white"
                style={{
                  backgroundColor: allCardStyles?.first?.btnColor,
                  color: "white",
                }}
              >
                {allCardStyles?.first?.btnText}
              </a>
            </div>
            <div
              className="planItem planItem--free"
              style={{
                backgroundColor: allCardStyles?.second?.bgColor,
              }}
            >
              <div className="card">
                <div className="card__header">
                  <div className="card__icon symbol"></div>
                  <h2 style={{ fontSize: headerTitleSize }}>
                    {allCardStyles?.second?.title}
                  </h2>
                </div>
                <div className="card__desc">
                  {allCardStyles?.second?.description}
                </div>
              </div>
              <div className="price">
                {currency}
                {allCardStyles?.second?.price}
                <span>/ {subscribtionType}</span>
              </div>
              <ul className="featureList">
                {allCardStyles?.second?.services.map((d) =>
                  d.included ? (
                    <li>{d.title}</li>
                  ) : (
                    <li className="disabled">{d.title}</li>
                  )
                )}
              </ul>
              <a
                href={allCardStyles?.second?.btnLink}
                className="button button--white"
                style={{
                  backgroundColor: allCardStyles?.second?.btnColor,
                  color: "white",
                }}
              >
                {allCardStyles?.second?.btnText}
              </a>
            </div>
            <div
              className="planItem planItem--free"
              style={{
                backgroundColor: allCardStyles?.third?.bgColor,
              }}
            >
              <div className="card">
                <div className="card__header">
                  <div className="card__icon symbol"></div>
                  <h2 style={{ fontSize: headerTitleSize }}>
                    {allCardStyles?.third?.title}
                  </h2>
                </div>
                <div className="card__desc">
                  {allCardStyles?.third?.description}
                </div>
              </div>
              <div className="price">
                {currency}
                {allCardStyles?.third?.price}
                <span>/ {subscribtionType}</span>
              </div>
              <ul className="featureList">
                {allCardStyles?.third?.services.map((d) =>
                  d.included ? (
                    <li>{d.title}</li>
                  ) : (
                    <li className="disabled">{d.title}</li>
                  )
                )}
              </ul>
              <a
                href={allCardStyles?.third?.btnLink}
                className="button button--white"
                style={{
                  backgroundColor: allCardStyles?.third?.btnColor,
                  color: "white",
                }}
              >
                {allCardStyles?.third?.btnText}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Template1;
