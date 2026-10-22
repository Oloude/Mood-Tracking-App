export default function getLastElevenDay(createdAt: string) {
  const last10Days = Array.from({ length: 10 }, (_, index) => {
    const date = new Date(createdAt);
    date.setUTCDate(date.getUTCDate() - (index + 1));

    return date.toISOString();
  });
  return [createdAt, ...last10Days];
}
