export const generateRandomBadgeColors = () => {
  // you will also import this badge colors object from colors file
  const badges = {
    purpleTextColor: "#907CED",
    purpleBadgeBg: "#E4E0FC",
    redTextColor: "#E76798",
    redBadgeBg: "#FCE0EA",
    greenTextColor: "#397D6C",
    greenBadgeBg: "#D2E3DD",
  };

  const badgeKeys = Object.keys(badges);
  const randomBadgeIndex = Math.floor(Math.random() * badgeKeys.length);
  const randomBadgeKey = badgeKeys[randomBadgeIndex];

  const textColorKey = randomBadgeKey.replace("BadgeBg", "TextColor");
  const randomTextColor = badges[textColorKey];
  const randomBadgeBg = badges[randomBadgeKey];

  return {
    textColor: randomTextColor,
    badgeBg: randomBadgeBg,
  };
};

const { textColor, badgeBg } = generateRandomBadgeColors();

// Example usage:
console.log("Text color:", textColor);
console.log("Badge background color:", badgeBg);
