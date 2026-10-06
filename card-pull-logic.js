<!-- 1. The Hidden QSM Quiz Wrapper (Changed display:none to off-screen to prevent AJAX crash) -->
<div class="atw-hidden-qsm-holder" style="position: absolute !important; left: -9999px !important; top: 0 !important; opacity: 0 !important; height: 1px !important; overflow: hidden !important;">
  [qsm quiz=1]
</div>

<!-- 2. The Bridge Script with Progressive Randomizer -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  const customButton = document.querySelector('.wonder-pull-btn');
  
  if (customButton) {
    // Added 'true' (capture phase) and stopPropagation to prevent the anchor link from jumping to the top
    customButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      
      // Safety guard: stop execution if already shuffling
      if (customButton.classList.contains('is-shuffling')) return;
      
      const qsmHolder = document.querySelector('.atw-hidden-qsm-holder');
      if (qsmHolder) {
        // Find all card choice radio buttons inside the form
        const radioBtns = qsmHolder.querySelectorAll('input[type="radio"]');
        
        if (radioBtns.length > 0) {
          // 1. Activate visual shuffling state (Safely targeting the span so Cornerstone styling doesn't break)
          customButton.classList.add('is-shuffling');
          const btnTextElement = customButton.querySelector('.x-anchor-text-primary, span') || customButton;
          btnTextElement.textContent = 'Shuffling Card Deck...';
          
          // 2. THE FIX: Limit randomizer to ONLY completed cards to prevent 0-point pulls
          const completedCards = 12; // Update this number as you add more redirect points in QSM
          const randomIndex = Math.floor(Math.random() * completedCards);
          const selectedRadio = radioBtns[randomIndex];
          
          selectedRadio.checked = true;
          selectedRadio.dispatchEvent(new Event('change', { bubbles: true }));
          
          // 3. Trigger submit after a brief delay so the user clearly sees the text change
          setTimeout(function() {
            const submitBtn = qsmHolder.querySelector('.qsm-submit-btn, input[type="submit"], button[type="submit"]');
            if (submitBtn) {
              submitBtn.click();
            }
            // The form.submit() fallback was removed here because it causes the hard jump to the top!
          }, 400); 
        }
      }
    }, true);
  }
});
</script>