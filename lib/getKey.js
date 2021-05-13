export default function (pageIndex, previousPageData, queryKey) {
  if (previousPageData && !previousPageData.nextToken) return null;

  if (pageIndex === 0) return ['getMyTimeline', null];

  return [
    `${queryKey}${previousPageData.nextToken}`,
    previousPageData.nextToken,
  ];
}
