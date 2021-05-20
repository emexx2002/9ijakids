export function getList() {
  return fetch('https://vsoc3songs.com/help.php')
    .then(data => data.json())
}