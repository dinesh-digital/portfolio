import React, { useState, useEffect } from 'react';
import { RefreshCw, AlertTriangle, CheckCircle, ExternalLink, Calendar } from 'lucide-react';
import { linkChecker } from '../../utils/linkChecker';

interface LinkCheckResult {
  url: string;
  status: 'working' | 'broken' | 'redirect';
  statusCode?: number;
  redirectUrl?: string;
  error?: string;
}

interface LinkCheckReport {
  timestamp: string;
  totalLinks: number;
  workingLinks: number;
  brokenLinks: number;
  redirects: number;
  results: LinkCheckResult[];
}

const LinkCheckReport: React.FC = () => {
  const [currentReport, setCurrentReport] = useState<LinkCheckReport | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [reports, setReports] = useState<LinkCheckReport[]>([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = () => {
    const storedReports = linkChecker.getStoredReports();
    setReports(storedReports);
    
    const latest = linkChecker.getLatestReport();
    setCurrentReport(latest);
  };

  const runLinkCheck = async () => {
    setIsChecking(true);
    try {
      const report = await linkChecker.checkAllLinks();
      setCurrentReport(report);
      loadReports();
    } catch (error) {
      console.error('Link check failed:', error);
    } finally {
      setIsChecking(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'working':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'broken':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'redirect':
        return <ExternalLink className="w-4 h-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'working':
        return 'text-green-600 bg-green-50';
      case 'broken':
        return 'text-red-600 bg-red-50';
      case 'redirect':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Link Check Report</h2>
              <p className="text-gray-600 mt-1">Monitor and manage internal links across your website</p>
            </div>
            <button
              onClick={runLinkCheck}
              disabled={isChecking}
              className="btn-primary flex items-center"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isChecking ? 'animate-spin' : ''}`} />
              {isChecking ? 'Checking...' : 'Run Check'}
            </button>
          </div>
        </div>

        {currentReport && (
          <>
            {/* Summary Cards */}
            <div className="p-6 border-b border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{currentReport.totalLinks}</div>
                  <div className="text-sm text-blue-600">Total Links</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{currentReport.workingLinks}</div>
                  <div className="text-sm text-green-600">Working</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{currentReport.brokenLinks}</div>
                  <div className="text-sm text-red-600">Broken</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{currentReport.redirects}</div>
                  <div className="text-sm text-yellow-600">Redirects</div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                Last checked: {new Date(currentReport.timestamp).toLocaleString()}
              </div>
            </div>

            {/* Detailed Results */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Link Details</h3>
              
              {currentReport.brokenLinks > 0 && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                    <span className="font-medium text-red-800">
                      {currentReport.brokenLinks} broken link{currentReport.brokenLinks !== 1 ? 's' : ''} found
                    </span>
                  </div>
                  <p className="text-red-700 text-sm">
                    Broken links will be automatically redirected to the homepage with a 301 redirect.
                  </p>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">URL</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Code</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentReport.results.map((result, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            {getStatusIcon(result.status)}
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(result.status)}`}>
                              {result.status}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                            {result.url}
                          </code>
                        </td>
                        <td className="py-3 px-4">
                          {result.statusCode && (
                            <span className="text-sm text-gray-600">{result.statusCode}</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          {result.error && (
                            <span className="text-sm text-red-600">{result.error}</span>
                          )}
                          {result.redirectUrl && (
                            <span className="text-sm text-yellow-600">→ {result.redirectUrl}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {!currentReport && !isChecking && (
          <div className="p-12 text-center">
            <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Reports Available</h3>
            <p className="text-gray-600 mb-4">Run your first link check to see the results here.</p>
            <button onClick={runLinkCheck} className="btn-primary">
              Run First Check
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkCheckReport;