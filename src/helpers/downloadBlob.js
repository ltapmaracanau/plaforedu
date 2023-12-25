export default async (data, name = "plaforedu.csv") => {
  const downloadURL = window.URL.createObjectURL(new Blob([data]));

  const linkElement = document.createElement("a");
  linkElement.href = downloadURL;
  linkElement.setAttribute("download", name);
  document.body.appendChild(linkElement);
  linkElement.click();
  linkElement.remove();
};
