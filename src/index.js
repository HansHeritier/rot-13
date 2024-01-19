function rot13(str) {
  const output = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const input = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

  const strArray = str
    .split("")
    .map((char) => {
      const index = output.indexOf(char);

      if (index !== -1) {
        return input[index];
      } else {
        return char;
      }
    })
    .join("");

  return strArray;
}

const form = document.getElementById("CesarForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const str = document.getElementById("strInput").value;

  const strArray = rot13(str);
  resultDiv.innerText = strArray;
});

export default rot13;
