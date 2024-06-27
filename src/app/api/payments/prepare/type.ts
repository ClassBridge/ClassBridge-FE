export interface PaymentPrepareResponse {
  next_redirect_pc_url: string;
  itemName: string;
  quantity: number;
  reservationId: number;
}
