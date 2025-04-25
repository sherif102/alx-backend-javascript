export default function loadBalancer(chinaDoanload, USDownload) {
  return Promise.any([chinaDoanload, USDownload]).then((success) => success);
}
