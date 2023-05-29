document.addEventListener('DOMContentLoaded', function () {
  let tooltips = document.querySelectorAll('.has-tooltip');

  tooltips.forEach(function (tooltip) {
    tooltip.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      let tooltipText = this.getAttribute('title');
      let tooltipElement = document.querySelector('.tooltip');

      tooltipElement.textContent = tooltipText;

      let linkRect = this.getBoundingClientRect();
      tooltipElement.style.left = linkRect.left + 'px';
      tooltipElement.style.top = linkRect.bottom + 'px';

      tooltipElement.classList.add('tooltip_active');

      this.addEventListener('click', hideTooltip, { once: true });
    });
  });

  function hideTooltip(event) {
    event.preventDefault();
    event.stopPropagation();

    let tooltipElement = document.querySelector('.tooltip');
    tooltipElement.classList.remove('tooltip_active');
  }
});
