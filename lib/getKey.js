export default function getKey(pageIndex, previousPageData, queryKey) {
  if (previousPageData && !previousPageData.nextToken) return null;

  if (pageIndex === 0) return [queryKey, null];

  return [
    `${queryKey}${previousPageData.nextToken}`,
    previousPageData.nextToken,
  ];
}
