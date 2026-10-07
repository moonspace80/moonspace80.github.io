/* ==========================================================================
   VOCABULARY DATASET MASTER CHAPEAU
   Combines level-specific vocabulary files into the master dataset.
   ========================================================================== */

window.vocabDataset = [
  ...(window.vocab_A1_Dataset || []),
  ...(window.vocab_A2_Dataset || []),
  ...(window.vocab_B1_Dataset || []),
  ...(window.vocab_B2_Dataset || []),
  ...(window.vocab_C1_Dataset || []),
  ...(window.vocab_C2_Dataset || [])
];
