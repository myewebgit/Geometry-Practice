function calculateArea(shape) {
    let base = parseFloat(document.getElementById(`${shape}-base`).value);
    let height = parseFloat(document.getElementById(`${shape}-height`).value);
    let area;

    switch (shape) {
        case 'triangle':
            area = 0.5 * base * height;
            break;
        case 'rectangle':
        case 'parallelogram':
            area = base * height;
            break;
        case 'pentagon':
            area = 0.5 *5* base * height;
            break;
        case 'rhombus':
            area = 0.5 * base * height;
            break;
        case 'ellipse':
            area = base * height;
            break;
        default:
            area = 0;
            break;
    }

       // Clear all previous results
    const resultDiv = document.getElementById('area-result');
    resultDiv.innerHTML = `<strong>${shape.charAt(0).toUpperCase() + shape.slice(1)} Area:</strong> ${area.toFixed(2)} cm <sup>2</sup>`;

}
