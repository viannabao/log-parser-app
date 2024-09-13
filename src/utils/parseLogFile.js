export function parseLogFile(logData) {
  // Split log data into lines and filter out empty lines
  const logLines = logData.split('\n').filter(line => line !== '');

  // Set to track unique IP addresses
  const ipCount = new Set();

  // Map to track the number of visits per URL
  const urlVisits = new Map();

  // Map to track the number of requests per IP
  const ipRequests = new Map();

  // Iterate over each log line to extract and track IP addresses and URLs
  logLines.forEach(line => {
      const parts = line.split(' ');

      // The IP is the first part of the line
      const ip = parts[0];

      // The URL is the 7th part in the log format
      const url = parts[6];

      // Add the IP to the set of unique IPs
      ipCount.add(ip);

      // Track URL visits using Map
      if (urlVisits.has(url)) {
          urlVisits.set(url, urlVisits.get(url) + 1);
      } else {
          urlVisits.set(url, 1);
      }

      // Track the number of requests per IP using Map
      if (ipRequests.has(ip)) {
          ipRequests.set(ip, ipRequests.get(ip) + 1);
      } else {
          ipRequests.set(ip, 1);
      }
  });

  // Get the number of unique IP addresses
  const uniqueIPCount = ipCount.size;

  // Get the top 3 most visited URLs (Convert Map to Array for sorting)
  const topUrls = [...urlVisits.entries()]
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);

  // Get the top 3 most active IP addresses (Convert Map to Array for sorting)
  const topIPs = [...ipRequests.entries()]
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);

  // Return the unique IP count, top URLs, and top active IPs
  return {
      uniqueIPCount,
      topUrls,
      topIPs
  };
}