/**
 * Discounted seats on the web-dev checkout.
 *
 * Lower `seatsLeft` as students enroll so the number buyers see stays true.
 * At 0 the banner disappears. `totalSeats` is never shown; it only sets how
 * full the progress bar looks. Reset both when you open a new batch.
 */
export const WEB_DEV_OFFER = {
  totalSeats: 50,
  seatsLeft: 8,
};
