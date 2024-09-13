import { parseLogFile } from "../utils/parseLogFile";
import mockLogData from '../__mocks__/mockLogData';

describe('parseLogFile function', () => {

  test('should return the correct number of unique IPs', () => {
    const result = parseLogFile(mockLogData);
    expect(result.uniqueIPCount).toBe(3);
  });

  test('should return the top 3 most visited URLs', () => {
    const result = parseLogFile(mockLogData);
    expect(result.topUrls).toEqual([
      ['/about/', 3],
      ['/home/', 3],
      ['/intranet-analytics/', 2],
    ]);
  });

  test('should return the top 3 most active IPs', () => {
    const result = parseLogFile(mockLogData);
    expect(result.topIPs).toEqual([
      ['168.41.191.40', 4],
      ['50.112.00.11', 4],
      ['177.71.128.21', 2]
    ]);
  });

  test('should handle empty log data', () => {
    const result = parseLogFile('');
    expect(result.uniqueIPCount).toBe(0);
    expect(result.topUrls).toEqual([]);
    expect(result.topIPs).toEqual([]);
  });
});