exports.testDuration = function testDuration(end, start) {
  const milliseconds = end - start;
  const seconds = milliseconds > 1000 ? `${Math.round(Number(milliseconds / 1000))}s` : '';
  const minutes = seconds && seconds > 60 ? `${Math.round(Number(seconds / 60))}m ` : '';
  return `${minutes}${seconds || `${milliseconds}ms`}`;
};

