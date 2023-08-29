export function getNodeStyle({ left, top }){
    return {
      width: 300,
      height: 200,
      transform: `translate(${left * (300/ 2)}px, ${top * (200 / 2)}px)`,
    };
  }