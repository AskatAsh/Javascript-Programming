const triangle_base_input = document.getElementById("base"),
  triangle_height_input = document.getElementById("height"),
  calculate_button = document.querySelector(".calculate-btn"),
  results_list = document.getElementById("results-list");

// console.log(triangle_base_input, triangle_height_input, calculate_button);

// calculate area
function triangle_area(b, h) {
  return 0.5 * b * h;
}
// validate input
function input_validation() {
  const b = +triangle_base_input.value;
  const h = +triangle_height_input.value;
  //   console.log(b, h);
  if (b == "" || h == "" || isNaN(b) || isNaN(h)) {
    alert("Please provide a valid number input..!");
    return;
  }
  return true;
}
// convert centimetre to meter
function convert_to_meter(area) {
  return area / 100;
}

let click_count = 0;
calculate_button.addEventListener("click", (e) => {
  e.preventDefault();
  const b = +triangle_base_input.value;
  const h = +triangle_height_input.value;
  let area;
  if (input_validation()) {
    area = triangle_area(b, h);

    if (click_count == 0) {
      const li = document.createElement("li");
      li.innerHTML = `
    <span class="list-item">
        <span class="shape">Triangle</span> <span class="square ans">${area}cm</span> <span class="button square toMeter">Convert to m</span>
    </span>`;
      results_list.appendChild(li);
    } else {
      const shape_name = results_list.querySelector(".shape");
      if (shape_name.innerText === "Triangle") {
        // results_list.querySelector(".ans").innerText = `${area}cm`;
        shape_name.parentElement.innerHTML = `
        <span class="shape">Triangle</span> <span class="square ans">${area}cm</span> <span class="button square toMeter">Convert to m</span>`;
      }
    }
  }
  click_count++;
  //   calculate_button.setAttribute("disabled", "");

  // convert cm to meter and add to result
  const convert_to_meter_btn = results_list.querySelector(".toMeter");
  convert_to_meter_btn.addEventListener("click", (e) => {
    // console.log(e.target.parentElement.querySelector(".square"));
    const ans_element = e.target.parentElement.querySelector(".ans");
    const cm_to_meter = convert_to_meter(area);
    ans_element.innerText = `${cm_to_meter}m`;
    e.target.innerText = `Convert to cm`;
    convert_to_meter_btn.classList.remove("toMeter");
    convert_to_meter_btn.classList.add("toCentimetre");
  });
});
