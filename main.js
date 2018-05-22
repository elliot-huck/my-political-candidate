//some global variables
const districtNum = 5;
const main = document.querySelector("article");

// writes a made up mission statement to the <article> element
const write = () => {
  const mission = document.createElement("h4");
  mission.textContent = "Representing people: it's what I do.";
  main.appendChild(mission);
}

// creates an attribute to store the congressional district number & writes it to the article
const setDistrict = (district) => {
  let newAttr = document.createAttribute("district");
  newAttr.value = district;
  console.log(newAttr.value);
  main.setAttributeNode(newAttr);
} 

write();
setDistrict(districtNum);