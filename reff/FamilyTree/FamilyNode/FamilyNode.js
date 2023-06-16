import React from "react";
import classNames from "clsx";
// import ReactImageFallback from "react-image-fallback";

import styles from "./FamilyNode.module.css";

export default function FamilyNode({
  node,
  isRoot,
  onSubClick,
  openDialog,
  style,
  markHolucost
}) {
  return (
    <div className={styles.root} style={style}>
      <div
        onClick={() => openDialog(node)}
        className={classNames(
          styles[node.DeathType],
          styles.inner,
          styles[node.gender],
          isRoot && styles.isRoot,
          markHolucost &&
            (node.holucost === "1" || node.DeathType === "Normal") &&
            styles.holucost
        )}
      >
        <div className={styles.content}>
          {node.DeathType === "Holocaust" && markHolucost && (
            <div className={styles.startOfDavid}>
              <StarOfDavid />
            </div>
          )}
          <div className={styles.name}>{node.name} </div>
          {/* <ReactImageFallback
            alt={node.name}
            src={`http://digisoft.co.il/ftree/${node.img}.jpg`}
            height={70}
          /> */}
          <div className={styles.dates}>
            {node.occu}
            {node.age ? <span>&nbsp;גיל {node.age}</span> : null}
            <br />
            {node.birt_date} - {node.deat_date}
          </div>
          <div className={styles.dates}>
            {node.birt_hebdate} - {node.deat_hebdate}
          </div>
          {node.birt_place} - {node.deat_place}
        </div>
        {node.hasSubTree && node.id && (
          <div
            className={classNames(styles.sub, styles[node.gender])}
            onClick={e => {
              e.stopPropagation();
              onSubClick(node.id);
            }}
          />
        )}
      </div>
    </div>
  );
}

function StarOfDavid() {
  return (
    <svg x="0px" y="0px" viewBox="0 0 466 466">
      <path d="M372.158,233.012l63.008-109.114c1.43-2.475,1.43-5.525,0-8c-1.429-2.476-4.07-4-6.928-4H302.204L239.883,3.999  C238.455,1.524,235.814,0,232.957,0c0,0,0,0-0.001,0c-2.857,0-5.497,1.524-6.927,3.998l-62.35,107.9H37.762  c-2.858,0-5.5,1.525-6.928,4c-1.429,2.475-1.429,5.525,0,8l62.999,109.098L30.834,342.102c-1.429,2.476-1.429,5.525,0,8  c1.429,2.475,4.07,4,6.928,4h126.005L226.072,462c1.429,2.475,4.07,4,6.928,4s5.499-1.524,6.928-4l62.306-107.898h126.005  c2.858,0,5.5-1.525,6.929-4c1.429-2.476,1.428-5.525-0.001-8L372.158,233.012z M414.381,127.897l-77.896,134.896  c-0.027,0.043-0.05,0.088-0.076,0.132l-23.769,41.162h-20.804l84.408-146.173c1.43-2.475,1.43-5.525,0-8  c-1.429-2.476-4.07-4-6.928-4h-47.465l-10.406-18.016H414.381z M343.287,283.009l12.172,21.078h-24.343L343.287,283.009z   M192.64,304.087l-41.04-71.071l41.074-71.103h80.686L314.409,233l-41.049,71.087H192.64z M343.277,183.009l-12.185-21.096h24.366  L343.277,183.009z M232.955,23.992l76.989,133.296c0.202,0.432,0.438,0.843,0.71,1.229l23.386,40.489l-10.392,17.997l-38.162-66.088  c-0.277-0.685-0.648-1.32-1.094-1.895l-44.462-76.998c-1.428-2.474-4.068-3.999-6.924-4c-0.001,0-0.002,0-0.003,0  c-2.855,0-5.495,1.522-6.925,3.994l-23.071,39.881h-20.845L232.955,23.992z M244.478,111.897h-22.99l11.505-19.888L244.478,111.897z   M51.619,127.897h202.098l10.403,18.016H96.684c-2.858,0-5.5,1.525-6.928,4c-1.429,2.475-1.429,5.525,0,8l23.716,41.07  l-10.402,18.015L51.619,127.897z M122.71,182.985l-12.168-21.072h24.335L122.71,182.985z M51.619,338.103l58.256-100.891  c0.024-0.039,0.045-0.079,0.068-0.118l43.41-75.18h20.843l-38.649,66.905c-0.009,0.015-0.017,0.031-0.026,0.046l-45.764,79.222  c-1.43,2.475-1.43,5.525-0.001,8c1.429,2.476,4.07,4.001,6.929,4.001h47.44l10.403,18.016H51.619z M122.717,283.015l12.168,21.072  h-24.34L122.717,283.015z M233,442.002l-76.818-133.029c-0.248-0.586-0.571-1.131-0.945-1.636l-23.281-40.316l10.404-18.01  l38.155,66.075c0.277,0.685,0.648,1.319,1.094,1.895l18.321,31.727c0.337,0.979,0.857,1.87,1.522,2.635l24.62,42.636  c1.429,2.475,4.07,4,6.928,4s5.499-1.524,6.928-4l23.026-39.875h20.804L233,442.002z M221.522,354.103h22.956L233,373.979  L221.522,354.103z M212.283,338.103l-10.403-18.016h76.068c0.008,0,0.015,0.001,0.023,0.001c0.008,0,0.015-0.001,0.023-0.001h39.234  c0.008,0,0.015,0.001,0.023,0.001c0.008,0,0.015-0.001,0.023-0.001h52.043c2.858,0,5.5-1.525,6.928-4c1.429-2.475,1.429-5.525,0-8  l-23.719-41.075l10.395-18.002l51.459,89.093H212.283z" />
    </svg>
  );
}
