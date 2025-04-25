export default function loadBalancer(chinaDoanload, USDownload) {
  return Promise.race([chinaDoanload, USDownload]).then((success) => success);
}
