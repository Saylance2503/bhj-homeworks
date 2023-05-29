document.addEventListener('DOMContentLoaded', function () {
  var tooltips = document.querySelectorAll('.has-tooltip');

  tooltips.forEach(function (tooltip) {
    tooltip.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      var tooltipText = this.getAttribute('title');
      var tooltipElement = document.querySelector('.tooltip');

      tooltipElement.textContent = tooltipText;
      tooltipElement.classList.add('tooltip_active');

      document.addEventListener('click', hideTooltip);
    });
  });

  function hideTooltip() {
    var tooltipElement = document.querySelector('.tooltip');
    tooltipElement.classList.remove('tooltip_active');

    document.removeEventListener('click', hideTooltip);
  }
});
