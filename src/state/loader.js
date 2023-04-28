export const musicLoader = async () => {
  const res = await fetch("https://muzira.shbootcamp.com.ng/home.php");

  return res.json();
}